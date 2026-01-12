import styles from '../styles/Home.module.css';
import LazyVideo from './LazyVideo';

const VideoComparison = ({ neuralVideo, policyVideo, title }) => {
  return (
    <div className={styles.videoContent}>
      <div className={styles.previewsContainer} style={{ justifyContent: 'center' }}>
        
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