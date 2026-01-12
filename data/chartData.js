// Performance comparison data
export const performanceData = {
  conditions: ["Seen Env, Novel Behaviors", "Novel Env, Seen Behaviors", "Novel Env, Novel Behaviors"],
  "GR00T N1": [11.8, 0, 0],
  "GR00T N1 + Neural": [40.3, 30.83333333, 32.85714286]
};

// Data for neural trajectory data augmentation graphs
export const neuralTrajectoryData = {
  "averageGR1": {
    "labels": ["DP", "GR00T N1"],
    "series": [
      {
        "name": "Without Neural Trajectories",
        "data": [22.5, 37.0]
      },
      {
        "name": "With Neural Trajectories",
        "data": [27.4, 46.4]
      }
    ]
  },
  "averageFranka": {
    "labels": ["DP", "Pi0", "GR00T N1"],
    "series": [
      {
        "name": "Without Neural Trajectories",
        "data": [15.0, 20.0, 23.0]
      },
      {
        "name": "With Neural Trajectories",
        "data": [20.0, 27.0, 37.0]
      }
    ]
  },
  "so100": {
    "labels": ["GR00T N1"],
    "series": [
      {
        "name": "Without Neural Trajectories",
        "data": [21]
      },
      {
        "name": "With Neural Trajectories",
        "data": [45.5]
      }
    ]
  }
};

// Data for neural trajectory scaling
export const neuralScalingData = {
  xLabels: ["0", "7.2K", "24K", "72K", "240K"],
  lapa: {
    y30: [17.4, 19.4, 28.53, 21.6, 22.07],
    stdErrY30: [4.66, 4.52, 5.71, 5.16, 5.31],
    y100: [32.1, 34.19, 35.18, 39.5, 40.47],
    stdErrY100: [6.02, 5.99, 5.71, 6.31, 6.21],
    y300: [49.6, 49.76, 54.29, 52.9, 58.21],
    stdErrY300: [5.71, 5.68, 5.70, 5.50, 5.57]
  },
  idm: {
    y30: [17.4, 20.43, 20.11, 21.2, 23.32],
    stdErrY30: [4.68, 4.64, 4.91, 5.12, 5.87],
    y100: [32.1, 37.99, 38.46, 40.9, 39.94],
    stdErrY100: [6.02, 5.87, 6.08, 7.00, 5.70],
    y300: [49.6, 53.72, 54.77, 56.4, 57.6],
    stdErrY300: [5.23, 5.66, 5.66, 5.24, 5.07]
  }
};

// Default chart options
export const defaultBarChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 12,
        padding: 15,
        font: {
          family: "'NVIDIA Sans', sans-serif",
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#333',
      bodyColor: '#333',
      titleFont: {
        family: "'NVIDIA Sans', sans-serif",
        size: 14
      },
      bodyFont: {
        family: "'NVIDIA Sans', sans-serif",
        size: 13
      },
      borderColor: '#ddd',
      borderWidth: 1,
      displayColors: true,
      padding: 10,
      callbacks: {
        label: function(context) {
          return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 50,
      ticks: {
        callback: function(value) {
          return value + '%';
        },
        font: {
          family: "'NVIDIA Sans', sans-serif",
          size: 11
        },
        color: '#666'
      },
      grid: {
        display: false
      },
      title: {
        display: true,
        text: 'Performance (%)',
        font: {
          family: "'NVIDIA Sans', sans-serif",
          size: 12
        },
        color: '#666'
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: "'NVIDIA Sans', sans-serif",
          size: 11
        },
        color: '#666'
      }
    }
  }
};

// Create chart data for main performance chart
export const getMainChartData = () => {
  return {
    labels: performanceData.conditions,
    datasets: [
      {
        label: 'GR00T N1',
        data: performanceData["GR00T N1"],
        backgroundColor: 'rgba(118, 185, 0, 0.7)',
        borderColor: 'rgba(118, 185, 0, 1)',
        borderWidth: 1
      },
      {
        label: 'GR00T N1 + Neural',
        data: performanceData["GR00T N1 + Neural"],
        backgroundColor: 'rgba(0, 122, 204, 0.7)',
        borderColor: 'rgba(0, 122, 204, 1)',
        borderWidth: 1
      }
    ]
  };
};

// Create chart data for platform charts
export const getPlatformChartData = (platformData) => {
  return {
    labels: platformData.labels,
    datasets: platformData.series.map((series, index) => ({
      label: series.name,
      data: series.data,
      backgroundColor: index === 0 ? 'rgba(118, 185, 0, 0.7)' : 'rgba(0, 122, 204, 0.7)',
      borderColor: index === 0 ? 'rgba(118, 185, 0, 1)' : 'rgba(0, 122, 204, 1)',
      borderWidth: 1
    }))
  };
};

// Options for platform charts
export const getPlatformChartOptions = (title, maxValue) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: title,
        font: {
          family: "'NVIDIA Sans', sans-serif",
          size: 14,
          weight: 'bold'
        },
        color: '#333',
        padding: {
          top: 10,
          bottom: 10
        }
      },
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#333',
        titleFont: {
          family: "'NVIDIA Sans', sans-serif",
          size: 13
        },
        bodyFont: {
          family: "'NVIDIA Sans', sans-serif",
          size: 12
        },
        borderColor: '#ddd',
        borderWidth: 1,
        displayColors: true,
        padding: 8,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: maxValue || 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
          font: {
            family: "'NVIDIA Sans', sans-serif",
            size: 10
          },
          color: '#666'
        },
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'NVIDIA Sans', sans-serif",
            size: 10
          },
          color: '#666'
        }
      }
    }
  };
};

// Create line chart data for neural scaling
export const getScalingChartData = (modelType) => {
  const data = neuralScalingData[modelType];
  const colors = ['#95B3E0', '#D98580', '#E6C88F'];
  
  return {
    labels: neuralScalingData.xLabels,
    datasets: [
      {
        label: '720 GT Demonstrations',
        data: data.y30,
        borderColor: colors[0],
        backgroundColor: colors[0],
        borderWidth: 3,
        pointRadius: 5,
        fill: false,
        tension: 0
      },
      {
        label: '2400 GT Demonstrations',
        data: data.y100,
        borderColor: colors[1],
        backgroundColor: colors[1],
        borderWidth: 3,
        pointRadius: 5,
        fill: false,
        tension: 0
      },
      {
        label: '7200 GT Demonstrations',
        data: data.y300,
        borderColor: colors[2],
        backgroundColor: colors[2],
        borderWidth: 3,
        pointRadius: 5,
        fill: false,
        tension: 0
      }
    ]
  };
};

// Options for neural scaling charts
export const getScalingChartOptions = (title) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            family: "'NVIDIA Sans', sans-serif",
            size: 12,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#333',
        titleFont: {
          family: "'NVIDIA Sans', sans-serif",
          size: 14
        },
        bodyFont: {
          family: "'NVIDIA Sans', sans-serif",
          size: 13
        },
        borderColor: '#ddd',
        borderWidth: 1,
        displayColors: true,
        padding: 10,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + '%';
          }
        }
      },
      title: {
        display: true,
        text: title,
        color: '#333',
        padding: {
          top: 10,
          bottom: 20
        },
        font: {
          family: "'NVIDIA Sans', sans-serif",
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      y: {
        min: 10,
        max: 65,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
          font: {
            family: "'NVIDIA Sans', sans-serif",
            size: 11
          },
          color: '#666'
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          borderDash: [5, 5]
        },
        title: {
          display: true,
          text: 'AVG Success Rate (%)',
          font: {
            family: "'NVIDIA Sans', sans-serif",
            size: 12,
            weight: 'bold'
          },
          color: '#666'
        }
      },
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          borderDash: [5, 5]
        },
        ticks: {
          font: {
            family: "'NVIDIA Sans', sans-serif",
            size: 11
          },
          color: '#666'
        },
        title: {
          display: true,
          text: '# Neural Trajectories',
          font: {
            family: "'NVIDIA Sans', sans-serif",
            size: 12,
            weight: 'bold'
          },
          color: '#666',
          padding: {
            top: 10
          }
        }
      }
    }
  };
}; 