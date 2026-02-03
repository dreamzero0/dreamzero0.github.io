'use client';

import { useRef, useEffect } from 'react';
import { evalChartData, unseenChartData, evalChartColors, frankaModelOrder } from '../data/evalChartData';
import pattern from 'patternomaly';

const DroidBarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !chartRef.current) return;

    let chartObj;

    const initChart = async () => {
      try {
        const ChartModule = await import('chart.js');
        const { Chart, CategoryScale, LinearScale, BarController, BarElement,
                Title, Tooltip, Legend } = ChartModule;

        // Custom error bars plugin
        const errorBarsPlugin = {
          id: 'errorBars',
          afterDatasetsDraw(chart) {
            const ctx = chart.ctx;
            chart.data.datasets.forEach((dataset, datasetIndex) => {
              const meta = chart.getDatasetMeta(datasetIndex);
              if (!meta.hidden && dataset.errorBars) {
                meta.data.forEach((bar, index) => {
                  const errorPlus = dataset.errorBars.plus[index];
                  const errorMinus = dataset.errorBars.minus[index];

                  if (errorPlus > 0 || errorMinus > 0) {
                    const x = bar.x;
                    const y = bar.y;
                    const barWidth = bar.width;

                    // Calculate error bar positions
                    const yScale = chart.scales.y;
                    const errorBarWidth = barWidth * 0.5;
                    const capWidth = errorBarWidth;

                    ctx.save();
                    ctx.strokeStyle = dataset.errorBars.color || '#7A7A7C';
                    ctx.lineWidth = dataset.errorBars.lineWidth || 1;

                    // Draw upper error bar
                    if (errorPlus > 0) {
                      const yTop = yScale.getPixelForValue(yScale.getValueForPixel(y) + errorPlus);
                      ctx.beginPath();
                      ctx.moveTo(x, y);
                      ctx.lineTo(x, yTop);
                      ctx.stroke();

                      // Draw cap
                      ctx.beginPath();
                      ctx.moveTo(x - capWidth / 2, yTop);
                      ctx.lineTo(x + capWidth / 2, yTop);
                      ctx.stroke();
                    }

                    // Draw lower error bar
                    if (errorMinus > 0) {
                      const yBottom = yScale.getPixelForValue(yScale.getValueForPixel(y) - errorMinus);
                      ctx.beginPath();
                      ctx.moveTo(x, y);
                      ctx.lineTo(x, yBottom);
                      ctx.stroke();

                      // Draw cap
                      ctx.beginPath();
                      ctx.moveTo(x - capWidth / 2, yBottom);
                      ctx.lineTo(x + capWidth / 2, yBottom);
                      ctx.stroke();
                    }

                    ctx.restore();
                  }
                });
              }
            });
          }
        };

        Chart.register(
          CategoryScale,
          LinearScale,
          BarController,
          BarElement,
          Title,
          Tooltip,
          Legend,
          errorBarsPlugin
        );

        if (chartInstance.current) {
          chartInstance.current.destroy();
          chartInstance.current = null;
        }

        const ctx = chartRef.current.getContext('2d');

        // Prepare datasets for Seen vs Unseen
        const datasets = frankaModelOrder.map((modelKey) => {
          const seenData = evalChartData.franka.models[modelKey];
          const unseenData = unseenChartData.droidFranka.models[modelKey];
          const color = evalChartColors[modelKey];
          const isPretrained = modelKey.includes('(Pretrained)');

          // Use success rate (second element) for both seen and unseen
          const seenSuccessRate = seenData.mean[1];
          const seenStderr = seenData.stderr[1];

          const unseenSuccessRate = unseenData.mean[1];
          const unseenStderr = unseenData.stderr[1];

          // Use diagonal stripes for pretrained models
          const backgroundColor = isPretrained
            ? pattern.draw('diagonal', color, 'white', 6)
            : color;

          return {
            label: modelKey.replace('pi0.5', 'π₀.₅'),
            data: [seenSuccessRate, unseenSuccessRate],
            backgroundColor: backgroundColor,
            borderColor: 'white',
            borderWidth: isPretrained ? 0.6 : 0.5,
            borderRadius: 0,
            barThickness: 'flex',
            maxBarThickness: 60,
            errorBars: {
              plus: [seenStderr, unseenStderr],
              minus: [seenStderr, unseenStderr],
              color: '#7A7A7C',
              lineWidth: 1,
              width: '50%'
            },
            modelKey: modelKey
          };
        });

        chartObj = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Seen', 'Unseen'],
            datasets: datasets
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                align: 'center',
                labels: {
                  boxWidth: 15,
                  padding: 12,
                  font: {
                    family: "'NVIDIA Sans', sans-serif",
                    size: 12
                  },
                  color: '#48484A',
                  usePointStyle: false
                },
                onClick: (e, legendItem, legend) => {
                  const index = legendItem.datasetIndex;
                  const chart = legend.chart;
                  const meta = chart.getDatasetMeta(index);
                  meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null;
                  chart.update();
                }
              },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#48484A',
                bodyColor: '#48484A',
                titleFont: {
                  family: "'NVIDIA Sans', sans-serif",
                  size: 13,
                  weight: 'bold'
                },
                bodyFont: {
                  family: "'NVIDIA Sans', sans-serif",
                  size: 12
                },
                borderColor: '#D1D1D6',
                borderWidth: 1,
                displayColors: true,
                padding: 12,
                callbacks: {
                  label: function(context) {
                    const label = context.dataset.label || '';
                    const value = context.parsed.y;
                    return `${label}: ${value.toFixed(1)}%`;
                  },
                  labelColor: function(context) {
                    return {
                      borderColor: context.dataset.backgroundColor,
                      backgroundColor: context.dataset.backgroundColor,
                      borderWidth: 2,
                      borderRadius: 2
                    };
                  }
                }
              },
              title: {
                display: true,
                text: 'DROID-Franka: Seen vs Unseen Average Success Rate',
                align: 'center',
                font: {
                  family: "'NVIDIA Sans', sans-serif",
                  size: 16,
                  weight: 'bold'
                },
                color: '#48484A',
                padding: { top: 10, bottom: 20 }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20,
                  callback: function(value) {
                    return value + '%';
                  },
                  font: {
                    family: "'NVIDIA Sans', sans-serif",
                    size: 14
                  },
                  color: '#636366'
                },
                grid: {
                  color: '#B0B0B5',
                  lineWidth: 0.9,
                  borderDash: [2, 2]
                },
                title: {
                  display: true,
                  text: 'Average Success Rate (%)',
                  font: {
                    family: "'NVIDIA Sans', sans-serif",
                    size: 14,
                    weight: 'bold'
                  },
                  color: '#636366',
                  padding: { top: 0, bottom: 10 }
                }
              },
              x: {
                ticks: {
                  font: {
                    family: "'NVIDIA Sans', sans-serif",
                    size: 13,
                    weight: '600'
                  },
                  color: '#48484A'
                },
                grid: {
                  display: false
                }
              }
            },
            animation: {
              duration: 0
            },
            layout: {
              padding: {
                top: 0,
                bottom: 10
              }
            }
          }
        });

        chartInstance.current = chartObj;
      } catch (error) {
        console.error("Failed to load Chart.js:", error);
      }
    };

    initChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      marginTop: '1.5rem',
      marginBottom: '2rem',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      position: 'relative'
    }}>
      <div style={{
        height: '400px',
        position: 'relative'
      }}>
        <canvas ref={chartRef} style={{ touchAction: 'manipulation' }}></canvas>
      </div>
    </div>
  );
};

export default DroidBarChart;
