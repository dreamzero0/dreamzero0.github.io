import { useRef, useEffect } from 'react';

const PerformanceChart = ({ id, data, options, type = 'bar', height = '300px', width = '100%' }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !chartRef.current) return;
    
    let chartObj;

    const initChart = async () => {
      try {
        const ChartModule = await import('chart.js');
        const { Chart, CategoryScale, LinearScale, BarController, BarElement, 
                LineController, LineElement, PointElement, Title, Tooltip, Legend } = ChartModule;
        
        // Register the components we need
        Chart.register(
          CategoryScale,
          LinearScale,
          BarController, 
          BarElement,
          LineController,
          LineElement,
          PointElement,
          Title, 
          Tooltip, 
          Legend
        );
        
        // If we already have a chart instance, destroy it before creating a new one
        if (chartInstance.current) {
          chartInstance.current.destroy();
          chartInstance.current = null;
        }

        const ctx = chartRef.current.getContext('2d');
        
        // Create new chart
        chartObj = new Chart(ctx, {
          type: type,
          id: id,
          data: data,
          options: options
        });
        
        chartInstance.current = chartObj;
      } catch (error) {
        console.error("Failed to load Chart.js:", error);
      }
    };

    initChart();
    
    // Clean up function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options, type, id]); // Re-initialize when these props change

  return (
    <div style={{ height, width, position: 'relative' }}>
      <canvas ref={chartRef} id={id} width="100%" height="100%"></canvas>
    </div>
  );
};

export default PerformanceChart; 