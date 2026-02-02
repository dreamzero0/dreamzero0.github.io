// Evaluation chart data extracted from seen.py
export const evalChartData = {
  agibot: {
    tasks: ['PnP Easy', 'PnP Hard', 'Contact-Rich', 'AVG\n(Task Progress)'],
    models: {
      'GR00T N1.6 (Scratch)': {
        mean: [2.08, 0.0, 0.0, 0.63],
        stderr: [2.08, 0.0, 0.0, 0.63]
      },
      'pi0.5 (Scratch)': {
        mean: [0.0, 0.0, 0.0, 0.0],
        stderr: [0.0, 0.0, 0.0, 0.0]
      },
      'DreamZero (Scratch)': {
        mean: [93.75, 48.44, 48.96, 62.19],
        stderr: [6.25, 6.93, 16.27, 8.61]
      },
      'GR00T N1.6 (Pretrained)': {
        mean: [17.56, 4.69, 4.17, 8.39],
        stderr: [14.7, 5.98, 10.86, 5.97]
      },
      'pi0.5 (Pretrained)': {
        mean: [52.08, 22.66, 9.17, 27.44],
        stderr: [12.67, 7.14, 6.36, 7.25]
      }
    }
  },
  franka: {
    tasks: ['AVG\n(Task Progress)', 'AVG\n(Success Rate)'],
    models: {
      'GR00T N1.6 (Pretrained)': {
        mean: [62, 42],
        stderr: [7, 9.1]
      },
      'pi0.5 (Pretrained)': {
        mean: [69, 42],
        stderr: [6, 9.9]
      },
      'DreamZero (Scratch)': {
        mean: [82, 75],
        stderr: [5, 11.4]
      }
    }
  }
};

// Unseen tasks data extracted from unseen.py (AgiBot G1)
export const unseenChartData = {
  agibotG1: {
    tasks: [
      'Untie Shoelaces',
      'Remove Hat',
      'Draw with Pen',
      'Take Out Straw',
      'Cube Stacking',
      'Painting w/ Brush',
      'Ironing',
      'Shake Hands',
      'Fold Map',
      'Pulling Cart',
      'AVG'
    ],
    models: {
      'GR00T N1.6 (Scratch)': {
        mean: [0, 0, 0, 0, 0, 0, 7.14, 0, 0, 0, 0.71],
        stderr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.71]
      },
      'pi0.5 (Scratch)': {
        mean: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        stderr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      'DreamZero (Scratch)': {
        mean: [28.13, 85.71, 35.71, 46.88, 23.88, 28.57, 28.57, 59.25, 8.25, 50.00, 39.49],
        stderr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6.9]
      },
      'GR00T N1.6 (Pretrained)': {
        mean: [0.06, 12.50, 0, 6.25, 0, 6.25, 0, 18.75, 0, 0, 5.00],
        stderr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.04]
      },
      'pi0.5 (Pretrained)': {
        mean: [9.38, 42.86, 14.29, 18.75, 6.25, 17.86, 14.29, 25.00, 0, 14.29, 16.29],
        stderr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.67]
      }
    }
  },
  droidFranka: {
    tasks: ['AVG\n(Task Progress)', 'AVG\n(Success Rate)'],
    models: {
      'GR00T N1.6 (Pretrained)': {
        mean: [31, 12.5],
        stderr: [6, 5]
      },
      'pi0.5 (Pretrained)': {
        mean: [32, 7.5],
        stderr: [7, 7]
      },
      'DreamZero (Scratch)': {
        mean: [49, 22.5],
        stderr: [7, 8]
      }
    }
  }
};

// Color scheme matching seen.py
export const evalChartColors = {
  'GR00T N1.6 (Scratch)': '#A8B8B3',      // Lightened #8BA49A
  'GR00T N1.6 (Pretrained)': '#5F7A6F',   // Darkened #8BA49A
  'pi0.5 (Scratch)': '#E8DCC4',           // Lightened #D2C49E
  'pi0.5 (Pretrained)': '#9A8A6E',        // Darkened #D2C49E
  'DreamZero (Scratch)': '#3B6255'        // Base color
};

// Model order for AgiBot
export const agibotModelOrder = [
  'GR00T N1.6 (Scratch)',
  'GR00T N1.6 (Pretrained)',
  'pi0.5 (Scratch)',
  'pi0.5 (Pretrained)',
  'DreamZero (Scratch)'
];

// Model order for Franka
export const frankaModelOrder = [
  'GR00T N1.6 (Pretrained)',
  'pi0.5 (Pretrained)',
  'DreamZero (Scratch)'
];



