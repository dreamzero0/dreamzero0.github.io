import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import { useRef, useState, useEffect } from 'react';

const LazyVideo = dynamic(() => import('./LazyVideo'), { ssr: false });

const VideoCarousel = ({ videos, title }) => {
  const carouselRef = useRef(null);
  const [showGenerated, setShowGenerated] = useState(false);
  const [videoKey, setVideoKey] = useState(0);

  if (!videos || videos.length === 0) return null;

  // Check if videos have paired format (generatedUrl + executionUrl) or single format (url)
  const isPaired = videos[0].generatedUrl && videos[0].executionUrl;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -470, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 470, behavior: 'smooth' });
    }
  };

  const handleToggle = () => {
    const newShowGenerated = !showGenerated;
    setShowGenerated(newShowGenerated);
    
    // When turning ON, increment key to force re-mount all videos
    if (newShowGenerated) {
      setVideoKey(prev => prev + 1);
    }
  };

  return (
    <div className={styles.carouselSection}>
      {title && <h3>{title}</h3>}
      
      {/* Toggle Button - only show if paired videos */}
      {isPaired && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '1rem' 
        }}>
          <button
            onClick={handleToggle}
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.8rem',
              fontWeight: '500',
              border: '1px solid #ccc',
              borderRadius: '20px',
              backgroundColor: showGenerated ? '#76b900' : 'transparent',
              color: showGenerated ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              backgroundColor: showGenerated ? 'white' : '#ccc',
              display: 'inline-block',
              transition: 'all 0.2s ease'
            }}/>
            Show Generated Videos from DreamZero
          </button>
        </div>
      )}

      <div className={styles.carousel}>
        <div className={`${styles.carouselContainer} ${videos.length <= 6 ? styles.carouselContainerCentered : ''}`} ref={carouselRef}>
          {videos.map((video, index) => (
            <div key={index} className={styles.carouselItem}>
              {isPaired ? (
                // Paired videos: Generated on top (if enabled), Execution below
                <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '4px' }}>
                  {/* Generated Video - conditionally rendered */}
                  {showGenerated && (
                    <div style={{ position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#fff',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        zIndex: 10
                      }}>
                        Generated Videos
                      </div>
                      <LazyVideo
                        key={`gen-${index}-${videoKey}`}
                        src={video.generatedUrl}
                        title={`Generated - ${video.caption}`}
                        className={styles.videoElement}
                        autoPlay
                        muted
                      />
                    </div>
                  )}
                  
                  {/* Execution Video */}
                  <div style={{ position: 'relative' }}>
                    <LazyVideo
                      key={`exec-${index}-${videoKey}`}
                      src={video.executionUrl}
                      title={`Execution - ${video.caption}`}
                      className={styles.videoElement}
                      autoPlay={showGenerated}
                      muted
                    />
                  </div>
                </div>
              ) : (
                // Single video format (backward compatible)
                <LazyVideo
                  src={video.url}
                  title={video.caption}
                  className={styles.videoElement}
                />
              )}
              
              {video.caption && (
                <div className={styles.videoLabel}>{video.caption}</div>
              )}
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className={styles.carouselNavigation}>
          <button className={styles.carouselButton} onClick={scrollLeft}>
            ←
          </button>
          <button className={styles.carouselButton} onClick={scrollRight}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;