import styles from '../styles/Home.module.css';
import LazyVideo from './LazyVideo';

const VideoComparison = ({ neuralVideo, policyVideo, title }) => {
  return (
    <div className={styles.videoContent}>
      <div className={styles.previewsContainer}>
        <div className={styles.previewSection}>
          <h3>Neural Trajectory</h3>
          <div className={styles.videoPreview}>
            {neuralVideo && (
              <LazyVideo
                src={neuralVideo}
                title="Neural Trajectory Video"
                className={styles.videoElement}
              />
            )}
          </div>
        </div>
        
        <div className={styles.previewSection}>
          <h3>Real-Robot Execution</h3>
          <div className={styles.videoPreview}>
            {policyVideo && (
              <LazyVideo
                src={policyVideo}
                title="Policy Rollout Video"
                className={styles.videoElement}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComparison; 