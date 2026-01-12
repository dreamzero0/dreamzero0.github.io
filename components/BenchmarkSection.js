import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { benchmarkFrames, benchmarkVideos } from '../data/videoData';
import LazyVideo from './LazyVideo';

const BenchmarkSection = () => {
  const [selectedBenchmarkModel, setSelectedBenchmarkModel] = useState('robocasa');
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  // Function to navigate frames
  const navigateFrame = (direction) => {
    const frames = benchmarkFrames[selectedBenchmarkModel] || [];
    if (frames.length === 0) return;
    
    if (direction === 'next') {
      setCurrentFrameIndex((prev) => (prev + 1) % frames.length);
    } else {
      setCurrentFrameIndex((prev) => (prev - 1 + frames.length) % frames.length);
    }
    
    // Videos will stop/restart automatically when their components unmount/remount
  };

  // Effect to handle benchmark frame images
  useEffect(() => {
    // This code runs on the client side to handle placeholder images
    if (typeof window === 'undefined') return;
    
    // Preload placeholder images for any missing benchmark frames
    const preloadPlaceholderImage = () => {
      const img = new Image();
      img.src = 'https://via.placeholder.com/400x200?text=Frame+Placeholder';
    };
    
    preloadPlaceholderImage();
  }, [selectedBenchmarkModel]);

  return (
    <>
      <style jsx global>{`
        @media (min-width: 769px) {
          .benchmark-row {
            overflow-x: visible !important;
          }
          .benchmark-video-card {
            min-width: auto !important;
            width: calc(25% - 14px) !important;
          }
        }
        
        /* Show scrollbar for mobile */
        @media (max-width: 768px) {
          .benchmark-row {
            overflow-x: scroll;
            scrollbar-width: thin;
            scrollbar-color: #0078D4 #f0f0f0;
          }
          .benchmark-row::-webkit-scrollbar {
            display: block;
            height: 6px;
          }
          .benchmark-row::-webkit-scrollbar-track {
            background: #f0f0f0;
            border-radius: 3px;
          }
          .benchmark-row::-webkit-scrollbar-thumb {
            background-color: #0078D4;
            border-radius: 3px;
          }
          .benchmark-video-card {
            min-width: auto !important;
            width: calc(25% - 15px) !important;
          }
          .benchmark-comparison-row {
            overflow-x: scroll !important;
            flex-wrap: nowrap !important;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 10px;
          }
          .benchmark-comparison-row > div {
            min-width: 280px !important;
            flex: 0 0 auto !important;
          }
        }
      `}</style>
      <h2>DreamGen Bench</h2>
      <p>Select a subset of the benchmark to see different model rollouts of the same instruction:</p>
      
      {/* Model selection buttons */}
      <div className={styles.modelButtonContainer} style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <button 
          className={`${styles.behaviorButton} ${selectedBenchmarkModel === 'robocasa' ? styles.selected : ''}`}
          style={{minWidth: '120px', flexGrow: 1}}
          onClick={() => setSelectedBenchmarkModel('robocasa')}
        >
          RoboCasa
        </button>
        <button 
          className={`${styles.behaviorButton} ${selectedBenchmarkModel === 'gr1-object' ? styles.selected : ''}`}
          style={{minWidth: '120px', flexGrow: 1}}
          onClick={() => setSelectedBenchmarkModel('gr1-object')}
        >
          GR1-Object
        </button>
        <button 
          className={`${styles.behaviorButton} ${selectedBenchmarkModel === 'gr1-behavior' ? styles.selected : ''}`}
          style={{minWidth: '120px', flexGrow: 1}}
          onClick={() => setSelectedBenchmarkModel('gr1-behavior')}
        >
          GR1-Behavior
        </button>
        <button 
          className={`${styles.behaviorButton} ${selectedBenchmarkModel === 'gr1-env' ? styles.selected : ''}`}
          style={{minWidth: '120px', flexGrow: 1, maxWidth: 'calc(33.33% - 10px)'}}
          onClick={() => setSelectedBenchmarkModel('gr1-env')}
        >
          GR1-Env
        </button>
      </div>
      
      {/* Display the current benchmark frame image */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0px',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center'
        }}>
          <div style={{
            width: '100%',
            height: '300px',
          }}>
            {benchmarkFrames[selectedBenchmarkModel] && 
             benchmarkFrames[selectedBenchmarkModel][currentFrameIndex] ? (
              <img 
                key={`${selectedBenchmarkModel}-frame-${currentFrameIndex}`}
                src={benchmarkFrames[selectedBenchmarkModel][currentFrameIndex]}
                alt={`${selectedBenchmarkModel} frame ${currentFrameIndex + 1}`}
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto'
                }}
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x320?text=Image+Not+Found';
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#666'
              }}>
                No image available
              </div>
            )}
          </div>
          <p style={{marginTop: '5px', color: '#000', fontSize: '16px'}}>
            {selectedBenchmarkModel === 'robocasa' ? '' : 
             selectedBenchmarkModel === 'gr1-object' ? '' :
             selectedBenchmarkModel === 'gr1-behavior' ? '' : ''} 
            {selectedBenchmarkModel === 'robocasa' && currentFrameIndex === 0 && 'Pick the onion from the sink and place it on the plate located on the counter'}
            {selectedBenchmarkModel === 'robocasa' && currentFrameIndex === 1 && 'Close the cabinet door'}
            {selectedBenchmarkModel === 'robocasa' && currentFrameIndex === 2 && 'Pick the mug from under the coffee machine dispenser and place it on the counter'}
            
            {selectedBenchmarkModel === 'gr1-object' && currentFrameIndex === 0 && 'Use the right hand to pick up orange juice carton from center of pink plate to center of green bowl'}
            {selectedBenchmarkModel === 'gr1-object' && currentFrameIndex === 1 && 'Use the right hand to pick up green bok choy from top tier of two tier black and white shelf to brown paper bag'}
            {selectedBenchmarkModel === 'gr1-object' && currentFrameIndex === 2 && 'Use the left hand to pick up green pepper from tan table, below the bright blue plate to pale turquoise plate'}
            
            {selectedBenchmarkModel === 'gr1-behavior' && currentFrameIndex === 0 && 'Use right hand to pick up sponge and wipe the plate held in the right hand'}
            {selectedBenchmarkModel === 'gr1-behavior' && currentFrameIndex === 1 && 'Use right hand to stir with spoon'}
            {selectedBenchmarkModel === 'gr1-behavior' && currentFrameIndex === 2 && 'Use right hand to strum ukelele'}
            
            {selectedBenchmarkModel === 'gr1-env' && currentFrameIndex === 0 && 'Use the right hand to grab the handle of lid and lift up to uncover the pot'}
            {selectedBenchmarkModel === 'gr1-env' && currentFrameIndex === 1 && 'Use the right hand to grab the pole of the sign and lift it up'}
            {selectedBenchmarkModel === 'gr1-env' && currentFrameIndex === 2 && 'Use the right hand to pick up chip with green packaging to white bag'}
          </p>
        </div>
      </div>
      
 {/* Frame navigation controls */}
 <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px 0 30px',
        gap: '15px'
      }}>
        <button 
          className={styles.carouselButton}
          onClick={() => navigateFrame('prev')}
          style={{
            padding: '8px 15px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          ←
        </button>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {(benchmarkFrames[selectedBenchmarkModel] || []).map((_, index) => (
            <span 
              key={index}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentFrameIndex === index ? '#0078D4' : '#ccc',
                cursor: 'pointer'
              }}
              onClick={() => setCurrentFrameIndex(index)}
            ></span>
          ))}
        </div>
        
        <button 
          className={styles.carouselButton}
          onClick={() => navigateFrame('next')}
          style={{
            padding: '8px 15px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          →
        </button>
      </div>

      {/* Video comparison section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
        marginTop: '0px',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Header row for columns */}
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '20px'
        }}>
          {/* <div style={{ flex: '1', textAlign: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '20px' }}>Zero Shot</h3>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '20px' }}>SFT</h3>
          </div> */}
        </div>

        {/* WAN Row */}
        <div className="benchmark-comparison-row" style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>WAN Zero Shot</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['wan-zs']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['wan-zs'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['wan-zs'].videos[currentFrameIndex].url}
                  title={`WAN Zero Shot video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%', 
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>WAN SFT</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['wan-sft']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['wan-sft'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['wan-sft'].videos[currentFrameIndex].url}
                  title={`WAN SFT video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hunyuan Row */}
        <div className="benchmark-comparison-row" style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Hunyuan Zero Shot</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['hunyuan-zs']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['hunyuan-zs'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['hunyuan-zs'].videos[currentFrameIndex].url}
                  title={`Hunyuan Zero Shot video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Hunyuan SFT</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['hunyuan-sft']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['hunyuan-sft'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['hunyuan-sft'].videos[currentFrameIndex].url}
                  title={`Hunyuan SFT video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CogVideo Row */}
        <div className="benchmark-comparison-row" style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>CogVideo Zero Shot</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['cogvideo-zs']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['cogvideo-zs'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['cogvideo-zs'].videos[currentFrameIndex].url}
                  title={`CogVideo Zero Shot video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>CogVideo SFT</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['cogvideo-sft']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['cogvideo-sft'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['cogvideo-sft'].videos[currentFrameIndex].url}
                  title={`CogVideo SFT video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cosmos Row */}
        <div className="benchmark-comparison-row" style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Cosmos Zero Shot</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['cosmos-zs']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['cosmos-zs'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['cosmos-zs'].videos[currentFrameIndex].url}
                  title={`Cosmos Zero Shot video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Cosmos SFT</h4>
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              {benchmarkVideos[selectedBenchmarkModel]?.['cosmos-sft']?.videos && 
               benchmarkVideos[selectedBenchmarkModel]['cosmos-sft'].videos[currentFrameIndex] ? (
                <LazyVideo
                  className="benchmark-video"
                  src={benchmarkVideos[selectedBenchmarkModel]['cosmos-sft'].videos[currentFrameIndex].url}
                  title={`Cosmos SFT video for ${selectedBenchmarkModel}`}
                  controls
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  color: '#666'
                }}>
                  Video not available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{paddingTop: '40px'}}></div>
      <p>We introduce DreamGen Bench, a world modeling benchmark that aims to quantify the capacity of existing video generative models to adapt to a specific robot embodiment. We measure two key metrics: instruction following (whether the generated video strictly adheres to given instructions) and physics following (evaluating the physical plausibility of the generated videos). We evaluate 4 video world models (Cosmos, WAN 2.1, Hunyuan, CogVideoX) on 4 different setups (Robocasa, GR1 Object, GR1 Behavior, GR1 Environment). We observe positive correlation between DreamGen Bench scores and downstream task scores.​</p>
    </>
  );
};

export default BenchmarkSection; 