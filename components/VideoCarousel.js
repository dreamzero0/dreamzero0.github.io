import { useRef, useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import LazyVideo from './LazyVideo';

const VideoCarousel = ({ videos, title }) => {
  const carouselRef = useRef(null);
  const [showNavigation, setShowNavigation] = useState(false);

  const checkScrollable = () => {
    if (!carouselRef.current) return;
    
    const { scrollWidth, clientWidth } = carouselRef.current;
    setShowNavigation(scrollWidth > clientWidth);
  };

  useEffect(() => {
    checkScrollable();
    
    // Check again when window resizes
    const handleResize = () => {
      checkScrollable();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [videos]);

  const handleCarouselScroll = (direction) => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300; // Adjust based on your carousel item width
    const currentScroll = carouselRef.current.scrollLeft;
    
    carouselRef.current.scrollTo({
      left: direction === 'next' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.videoContent}>
      <div className={styles.carouselSection}>
        <h3>{title}</h3>
        <div className={styles.carousel}>
          <div className={styles.carouselContainer} ref={carouselRef}>
            {videos.map((video, index) => (
              <div key={`video-${index}`} className={styles.carouselItem}>
                <LazyVideo
                  src={video.url}
                  title={`${title} ${index + 1}`}
                  className={styles.videoElement}
                />
                {video.caption && (
                  <div className={styles.videoLabel}>
                    {video.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
          {showNavigation && (
            <div className={styles.carouselNavigation}>
              <button 
                className={styles.carouselButton} 
                onClick={() => handleCarouselScroll('prev')}
              >
                ←
              </button>
              <button 
                className={styles.carouselButton} 
                onClick={() => handleCarouselScroll('next')}
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel; 