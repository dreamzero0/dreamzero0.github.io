// Import the results data
const results = {
    // "Macbook": {
    //     "N1 - zeroshot": 0,
    //     "N1 - post-trained": 0,
    //     "N1.5 - zeroshot": 0,
    //     "N1.5 post-trained": 5
    // },
    "Pour": {
        "N1 - zeroshot": 40,
        "N1 - post-trained": 0,
        "N1.5 - zeroshot": 100,
        "N1.5 post-trained": 95
    },
    "Mouse": {
        "N1 - zeroshot": 0,
        "N1 - post-trained": 40,
        "N1.5 - zeroshot": 75,
        "N1.5 post-trained": 80
    },
    // "Microwave": {
    //     "N1 - zeroshot": 0,
    //     "N1 - post-trained": 6.6,
    //     "N1.5 - zeroshot": 0,
    //     "N1.5 post-trained": 12
    // },
    "Tambourine": {
        "N1 - zeroshot": 5,
        "N1 - post-trained": 0,
        "N1.5 - zeroshot": 40,
        "N1.5 post-trained": 25
    },
    "Button": {
        "N1 - zeroshot": 0,
        "N1 - post-trained": 0,
        "N1.5 - zeroshot": 100,
        "N1.5 post-trained": 20
    },
    "Keyboard": {
        "N1 - zeroshot": 45,
        "N1 - post-trained": 15,
        "N1.5 - zeroshot": 40,
        "N1.5 post-trained": 50
    },
    "Lunchbox": {
        "N1 - zeroshot": 0,
        "N1 - post-trained": 0,
        "N1.5 - zeroshot": 10,
        "N1.5 post-trained": 0
    },
    "Unroll": {
        "N1 - zeroshot": 0,
        "N1 - post-trained": 0,
        "N1.5 - zeroshot": 10,
        "N1.5 post-trained": 30
    },
    "Pink": {
        "N1 - zeroshot": 50,
        "N1 - post-trained": 0,
        "N1.5 - zeroshot": 40,
        "N1.5 post-trained": 95
    },
    "Lighter": {
        "N1 - zeroshot": 10,
        "N1 - post-trained": 63,
        "N1.5 - zeroshot": 45,
        "N1.5 post-trained": 35
    },
    "Wooden": {
        "N1 - zeroshot": 6.6,
        "N1 - post-trained": 3.3,
        "N1.5 - zeroshot": 0,
        "N1.5 post-trained": 0
    },
    "AVERAGE": {
        "N1 - zeroshot": 13.05,
        "N1 - post-trained": 10.66,
        "N1.5 - zeroshot": 38.33,
        "N1.5 post-trained": 37.25
    }
};

// Get list of objects (excluding AVERAGE for individual object selection)
export const getObjectList = () => {
    return Object.keys(results).filter(key => key !== 'AVERAGE').map(key => ({
        id: key.toLowerCase(),
        label: key
    }));
};

// Get chart data for a specific object
export const getObjectChartData = (objectName) => {
    const objectData = results[objectName];
    if (!objectData) return null;

    return {
        labels: ['Zero-shot'],//, 'Post-trained'],
        datasets: [
            {
                label: 'GR00T N1',
                data: [objectData['N1 - zeroshot']],//, objectData['N1 - post-trained']],
                backgroundColor: 'rgba(118, 185, 0, 0.7)',
                borderColor: 'rgba(118, 185, 0, 1)',
                borderWidth: 1
            },
            {
                label: 'GR00T N1.5',
                data: [objectData['N1.5 - zeroshot']],//, objectData['N1.5 post-trained']],
                backgroundColor: 'rgba(0, 122, 204, 0.7)',
                borderColor: 'rgba(0, 122, 204, 1)',
                borderWidth: 1
            }
        ]
    };
};

// Chart options for N1.5 comparison
export const getN15ChartOptions = (objectName) => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: `Performance Comparison: ${objectName}`,
                font: {
                    family: "'NVIDIA Sans', sans-serif",
                    size: 16,
                    weight: 'bold'
                },
                color: '#333',
                padding: 20
            },
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
                max: 100,
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
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                title: {
                    display: true,
                    text: 'Success Rate (%)',
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
}; 