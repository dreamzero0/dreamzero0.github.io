import { useState } from 'react';
import styles from '../styles/VideoSelector.module.css';

const VideoSelector = ({ videoOptions }) => {
  const [selectedVideo, setSelectedVideo] = useState(videoOptions[0]);

  return (
    <div className={styles.videoSelectorContainer}>
      <div className={styles.buttonContainer}>
        {videoOptions.map((option) => (
          <button
            key={option.id}
            className={`${styles.actionButton} ${selectedVideo.id === option.id ? styles.selected : ''}`}
            onClick={() => setSelectedVideo(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
      
      <div className={styles.previewsContainer}>
        <div className={styles.previewSection}>
          <h3>Neural Trajectory</h3>
          <div className={styles.videoPreview}>
            {selectedVideo.neuralTrajectoryVideo && (
              <iframe
                src={selectedVideo.neuralTrajectoryVideo}
                title="Neural Trajectory Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
        
        <div className={styles.previewSection}>
          <h3>Real-Robot Execution</h3>
          <div className={styles.videoPreview}>
            {selectedVideo.policyRolloutVideo && (
              <iframe
                src={selectedVideo.policyRolloutVideo}
                title="Policy Rollout Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSelector; 