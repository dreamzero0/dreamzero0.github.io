'use client';

import { useRef, useEffect } from 'react';
import { evalChartData, evalChartColors, agibotModelOrder, frankaModelOrder } from '../data/evalChartData';

const EvalBarChart = () => {
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
        
        Chart.register(
          CategoryScale,
          LinearScale,
          BarController, 
          BarElement,
          Title, 
          Tooltip, 
          Legend
        );
        
        if (chartInstance.current) {
          chartInstance.current.destroy();
          chartInstance.current = null;
        }

        const ctx = chartRef.current.getContext('2d');
        
        // Store error values for tooltip access
        const errorDataMap = new Map();
        
        // Helper function to apply minimum bar heights (matching seen.py logic)
        const applyMinHeight = (values) => {
          const MIN_BAR_HEIGHT_ZERO = 1.2;
          const MIN_BAR_HEIGHT_SMALL = 2.5;
          return values.map(v => {
            if (v === 0) return MIN_BAR_HEIGHT_ZERO;
            if (v < MIN_BAR_HEIGHT_SMALL) return Math.max(v, MIN_BAR_HEIGHT_SMALL);
            return v;
          });
        };
        
        // Prepare AgiBot datasets only
        const agibotDatasets = agibotModelOrder.map((modelKey, idx) => {
          const data = evalChartData.agibot.models[modelKey];
          const color = evalChartColors[modelKey];
          const isPretrained = modelKey.includes('(Pretrained)');
          
          // Apply minimum heights for display
          const displayMeans = applyMinHeight(data.mean);
          
          // Store error values
          data.stderr.forEach((err, taskIdx) => {
            errorDataMap.set(`${modelKey}-${taskIdx}`, err);
          });
          
          return {
            label: modelKey.replace('pi0.5', 'π₀.₅'),
            data: displayMeans,
            backgroundColor: color,
            borderColor: 'white',
            borderWidth: isPretrained ? 0.6 : 0.5,
            borderRadius: 0,
            barThickness: 'flex',
            maxBarThickness: 60,
            errorValues: data.stderr,
            originalValues: data.mean, // Store original for tooltip
            modelKey: modelKey
          };
        });

        // Use only AgiBot datasets
        const allDatasets = agibotDatasets;
        
        // Use only AgiBot labels, replace "AVG\n(Task Progress)" with "AVG"
        const labels = evalChartData.agibot.tasks.map(task => 
          task === 'AVG\n(Task Progress)' ? 'AVG' : task
        );

        chartObj = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: allDatasets
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
                  title: function(context) {
                    return context[0].label.replace(/\n/g, ' ');
                  },
                  label: function(context) {
                    const value = context.parsed.y;
                    const dataset = context.dataset;
                    const dataIndex = context.dataIndex;
                    
                    if (value === null || isNaN(value)) {
                      return null;
                    }
                    
                    // Get original value (not the display value with min height applied)
                    let originalValue = value;
                    if (dataset.originalValues) {
                      originalValue = dataset.originalValues[dataIndex] || value;
                    }
                    
                    const label = context.dataset.label || '';
                    const formattedValue = originalValue % 1 === 0 ? originalValue.toString() : originalValue.toFixed(2);
                    
                    return `${label}: ${formattedValue}%`;
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
                  text: 'Task Progress (%)',
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
              duration: 0 // Disable animation for better performance
            },
            layout: {
              padding: {
                top: 20,
                bottom: 60
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
        height: '450px',
        position: 'relative'
      }}>
        <canvas ref={chartRef} style={{ touchAction: 'manipulation' }}></canvas>
      </div>
    </div>
  );
};

export default EvalBarChart;

