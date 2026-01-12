import styles from './page.module.css';

export const metadata = {
  title: 'DreamGen',
  description: 'Unlocking Generalization in Robot Learning through Video World Models',
};

export default function Home() {
  return (
    <article className={styles.blogPost}>
      <div className={styles.center}>
        <div className={styles.category}>Research</div>
        <h1 className={styles.blogTitle}>
          DreamGen
          <br />
          <span className={styles.subtitle}>
            Unlocking Generalization in Robot Learning through Video World Models
          </span>
        </h1>
        <div className={styles.publishDate}>May 20, 2025</div>

        <div className={styles.linkContainer}>
          <a href="https://arxiv.org/abs/2505.12705" className={styles.textLink} target="_blank" rel="noopener noreferrer">
            Paper
          </a>
          <span className={styles.linkDivider}>•</span>
          <a href="http://github.com/nvidia/GR00T-dreams" className={styles.textLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className={styles.linkDivider}>•</span>
          <a href="https://dreamgen-u8q2hhdcu.brevlab.com/" className={styles.textLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>

      <div className={styles.blogContent}>
        <p>
          We introduce <b>DreamGen</b>, a 4-stage pipeline to generate <i>neural trajectories</i>, 
          synthetic robot data generated from video world models. This work is the first in literature 
          to enable <b>zero-shot behavior generalization and zero-shot environment generalization</b>: 
          we enable a humanoid robot to perform 22 new behaviors in both seen and unseen environments, 
          while requiring teleoperation data from only a single pick-and-place task in one environment.
        </p>

        <h3>DreamGen is divided into 4 steps:</h3>
        <ol>
          <li>We first finetune video world models (image-to-video diffusion models) on a target robot to learn the dynamics of the given robot embodiment.</li>
          <li>We prompt the models with initial frames and language instructions, generating robot videos that not only include in-domain behaviors, but also novel behaviors in novel environments.</li>
          <li>We extract pseudo robot actions via a latent action model or an inverse dynamics model (IDM).</li>
          <li>We use these videos labeled with pseudo actions, named as neural trajectories, for downstream visuomotor policy learning.</li>
        </ol>

        <h3>#1. Behavior Generalization</h3>
        <p>Select a behavior to see the corresponding neural trajectory and real-robot execution videos:</p>
        <p><i>[Video selector will go here]</i></p>

        <h3>#2. Environment Generalization</h3>
        <p>Select an environment task to see the corresponding neural trajectory and real-robot execution videos:</p>
        <p><i>[Video selector will go here]</i></p>

        <h3>#3. Behavior + Environment Generalization</h3>
        <p>Select a behavior and environment task to see the corresponding neural trajectory and real-robot execution videos:</p>
        <p><i>[Video selector will go here]</i></p>
      </div>
    </article>
  );
}