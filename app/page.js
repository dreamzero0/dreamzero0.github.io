'use client';

import Script from 'next/script';
import styles from '../styles/Home.module.css';
import { useState, useMemo } from 'react';

import VideoComparison from '../components/VideoComparison';
import ButtonSelector from '../components/ButtonSelector';
import VideoCarousel from '../components/VideoCarousel';
import PerformanceChart from '../components/PerformanceChart';
import BenchmarkSection from '../components/BenchmarkSection';
import PaperInfo from '../components/PaperInfo';
import dynamic from 'next/dynamic';
import { 
  behaviorVideos, 
  environmentVideos, 
  combinedVideos, 
  platformVideos 
} from '../data/videoData';
import {
  getMainChartData,
  defaultBarChartOptions,
  getPlatformChartData,
  getPlatformChartOptions,
  neuralTrajectoryData,
  getScalingChartData,
  getScalingChartOptions
} from '../data/chartData';

// Main S3 sample video for hero section
const mainVideo = '/labs/gear/videos/dreamgen_teaser/hsl/DreamGen_New.m3u8';

// Import LazyVideo component dynamically with ssr set to false
const LazyVideo = dynamic(() => import('../components/LazyVideo'), { ssr: false });

export default function FirstPost() {
  const [selectedVideo, setSelectedVideo] = useState(behaviorVideos[0]);
  const [selectedEnvVideo, setSelectedEnvVideo] = useState(environmentVideos[0]);
  const [selectedCombinedVideo, setSelectedCombinedVideo] = useState(combinedVideos[0]);
  const [selectedPlatform, setSelectedPlatform] = useState('gr1');
  
  // Memoize chart data to prevent re-renders
  const mainChartData = useMemo(() => getMainChartData(), []);
  const mainChartOptions = useMemo(() => defaultBarChartOptions, []);
  
  // Memoize platform chart data
  const gr1ChartData = useMemo(() => getPlatformChartData(neuralTrajectoryData.averageGR1), []);
  const gr1ChartOptions = useMemo(() => getPlatformChartOptions('GR1 Performance', 50), []);
  
  const frankaChartData = useMemo(() => getPlatformChartData(neuralTrajectoryData.averageFranka), []);
  const frankaChartOptions = useMemo(() => getPlatformChartOptions('Franka Performance', 40), []);
  
  const s100ChartData = useMemo(() => getPlatformChartData(neuralTrajectoryData.so100), []);
  const s100ChartOptions = useMemo(() => getPlatformChartOptions('S-100 Performance', 70), []);
  
  // Memoize scaling chart data
  const lapaChartData = useMemo(() => getScalingChartData('lapa'), []);
  const lapaChartOptions = useMemo(() => getScalingChartOptions('Latent Actions'), []);
  
  const idmChartData = useMemo(() => getScalingChartData('idm'), []);
  const idmChartOptions = useMemo(() => getScalingChartOptions('IDM Actions'), []);

  return (
    <>
      
      {/* Google Analytics - properly implemented with next/script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FNGN5K40RL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FNGN5K40RL', {
            page_path: '/dreamgen',
            page_title: 'DreamGen'
          });
        `}
      </Script>

      <article className={styles.blogPost}>
        <div className={styles.center}>
          <div className={styles.category}>Research</div>
          <h1 className={styles.blogTitle}>
            DreamGen
            <br />
            <span className={styles.subtitle} style={{fontSize: "0.55em"}}>Unlocking Genearlization in Robot Learning through Video World Models</span>
          </h1>
          <div className={styles.publishDate} style={{ fontSize: "1.0em" }}>May 20, 2025</div>
          
          <div className={styles.linkContainer}>
            <a href="https://arxiv.org/abs/2505.12705" className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
              Paper
            </a>
            <span className={styles.linkDivider}>•</span>
            <a href="http://github.com/nvidia/GR00T-dreams" className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className={styles.linkDivider}>•</span>
            <a href="https://dreamgen-u8q2hhdcu.brevlab.com/" className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
          
          {/* Main video with lazy loading */}
          <div className={styles.videoContainer}>
            <LazyVideo
              src={mainVideo}
              title="DreamGen Overview"
              className={styles.videoElement}
              controls
            />
          </div>
        </div>

        <div id="content" className={styles.blogContent}>
          <p>
          We introduce <b>DreamGen</b>, a 4-stage pipeline to generate <i>neural trajectories</i>, synthetic robot data generated from video world models. This work is the first in literature to enable <b>zero-shot behavior generalization and zero-shot environment generalization</b>: we enable a humanoid robot to perform 22 new behaviors in both seen and unseen environments, while requiring teleoperation data from only a single pick-and-place task in one environment. Through DreamGen, we change the paradigm of robot learning from scaling human teleoperation data to scaling GPU compute through world models.
          <br></br>
          </p>

          <div className={styles.videoContainer}>
            <LazyVideo
              src="/labs/gear/videos/dreams_four_steps/hsl/method_preview.m3u8"
              title="DreamGen Method Overview" 
              className={styles.videoElement}
              controls
            />
          </div>

          <p style={{marginTop: '20px'}}>
            DreamGen is divided into 4-steps:
          </p>
          <ol>
            <li>We first finetune video world models (image-to-video diffusion models) on a target robot to learn the dynamics of the given robot embodiment.​</li>
            <li>We prompt the models with initial frames and language instructions, generating robot videos that not only include in-domain behaviors, but also novel behaviors in novel environments.​</li>
            <li>We extract pseudo robot actions via a <a href="https://latentactionpretraining.github.io/" style={{ textDecoration: "underline" }}>latent action model</a> or an <a href="https://openai.com/index/vpt/" style={{ textDecoration: "underline" }}>inverse dynamics model</a> (IDM).​</li>
            <li>We use these videos labeled with pseudo actions, named as <i>neural trajectories</i>, for downstream visuomotor policy learning​</li>
          </ol>
          <p>
            With DreamGen, we enable a humanoid robot to perform <b>22 new verbs</b> in <b>10 new environments</b>. In the next subsections, we show videos of the generated neural trajectory along with the visuomotor policy execution from training <i>soley</i> on the neural trajectories (50 per task) for learning (1) new verbs in the lab, (2) seen verbs in new scenes, and (3) new verbs in new scenes. Note that both the video world model and the IDM model was trained only on pick-and-place teleoperation data in a single environment.
          </p>

          {/* Behavior Generalization Videos */}
          <h3>#1. Behavior Generalization:​</h3>
          <p>Select a behavior to see the corresponding neural trajectory and real-robot execution videos:</p>
          
          <ButtonSelector 
            options={behaviorVideos}
            selectedId={selectedVideo.id}
            onSelect={setSelectedVideo}
          />
        </div>

        <VideoComparison 
          neuralVideo={selectedVideo.neuralTrajectoryVideo}
          policyVideo={selectedVideo.policyRolloutVideo}
        />

        {/* Environment Generalization */}
        <div className={styles.blogContent}>
          <h3>#2. Environment Generalization:​</h3>
          <p>Select an environment task to see the corresponding neural trajectory and real-robot execution videos:</p>
          
          <ButtonSelector 
            options={environmentVideos}
            selectedId={selectedEnvVideo.id}
            onSelect={setSelectedEnvVideo}
          />
        </div>
        
        <VideoComparison 
          neuralVideo={selectedEnvVideo.neuralTrajectoryVideo}
          policyVideo={selectedEnvVideo.policyRolloutVideo}
        />

        {/* Behavior + Environment Generalization */}
        <div className={styles.blogContent}>
          <h3>#3. Behavior + Environment Generalization</h3>
          <p>Select a behavior and environment task to see the corresponding neural trajectory and real-robot execution videos:</p>
          
          <ButtonSelector 
            options={combinedVideos}
            selectedId={selectedCombinedVideo.id}
            onSelect={setSelectedCombinedVideo}
          />
        </div>

        <VideoComparison 
          neuralVideo={selectedCombinedVideo.neuralTrajectoryVideo}
          policyVideo={selectedCombinedVideo.policyRolloutVideo}
        />


        {/* Performance Comparison */}
        <div className={styles.blogContent}>
          <h3>Performance Comparison</h3>
          
          <p>The chart below shows the performance comparison between GR00T N1 and GR00T N1 w/ DreamGen across different generalization conditions:</p>
          
          <div className={styles.chartContainer}>
            <PerformanceChart 
              id="mainPerformanceChart"
              data={mainChartData}
              options={mainChartOptions}
              type="bar"
              height="300px"
            />
          </div>
        </div>

        {/* Neural Trajectories for Data Augmentation */}
        <div className={styles.blogContent}>
          <h3>DreamGen for augmenting data for contact-rich tasks</h3>
          <p>
            While prior work shows that generating synthetic robot data is possible through simulation, they still face the sim2real issue and have a hard time generating training data for contact-rich tasks. We show that DreamGen enables augmenting data for contact-rich tasks such as manipulating deformable objects (folding), tool-use (hammering), etc., and goes straight from real2real, starting first the initial frame. The same pipeline can also be applied to any robotic systems, including a single-arm robot (Franka) as well as a $100 robot arm (SO-100), and with multiple camera views (e.g. wrist cams). Below are neural trajectories from DreamGen along with the downstream policy co-trained with real-world and neural trajectories. 
          </p>
          
          {/* Robot platform selector buttons */}
          <ButtonSelector 
            options={[
              { id: 'gr1', label: 'GR1' },
              { id: 'franka', label: 'Franka' },
              { id: 'so100', label: 'SO 100' },
              { id: 'robocasa', label: 'RoboCasa' }
            ]}
            selectedId={selectedPlatform}
            onSelect={(option) => setSelectedPlatform(option.id)}
          />
        </div>

        {/* Neural Trajectories Row */}
        <VideoCarousel 
          videos={platformVideos[selectedPlatform].neural}
          title="Neural Trajectories"
        />

        {/* Policy Rollouts Row */}
        <VideoCarousel 
          videos={platformVideos[selectedPlatform].policy}
          title="Real-Robot Execution"
        />

        {/* Neural trajectories for data augmentation graphs */}
        <div className={styles.blogContent}>
          <p>The graphs below shows the performance gain from DreamGen across different robotic platforms (GR1, Franka, SO-100) & visuomotor robot policies (DP, π0, GR00T N1), highlighting the flexibility of DreamGen.</p>
          
          <div className={styles.graphsContainer} style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'nowrap', 
            justifyContent: 'space-between', 
            marginTop: '20px',
            marginBottom: '20px',
            width: '100%',
            overflowX: 'auto',
            gap: '15px'
          }}>
            {/* GR1 Chart */}
            <div style={{ 
              flex: '1',
              minWidth: '200px',
              maxWidth: 'calc(33.33% - 10px)',
              height: '300px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                textAlign: 'center', 
                fontSize: '16px', 
                fontWeight: '500',
                marginBottom: '5px'
              }}>GR1</div>
              <div style={{ flex: '1', position: 'relative' }}>
                <PerformanceChart 
                  id="gr1Chart"
                  data={gr1ChartData}
                  options={{
                    ...gr1ChartOptions,
                    maintainAspectRatio: true
                  }}
                  type="bar"
                  height="100%"
                />
              </div>
            </div>
            
            {/* Franka Chart */}
            <div style={{ 
              flex: '1',
              minWidth: '200px',
              maxWidth: 'calc(33.33% - 10px)',
              height: '300px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                textAlign: 'center', 
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '5px'
              }}>Franka</div>
              <div style={{ flex: '1', position: 'relative' }}>
                <PerformanceChart 
                  id="frankaChart"
                  data={frankaChartData}
                  options={{
                    ...frankaChartOptions,
                    maintainAspectRatio: true
                  }}
                  type="bar"
                  height="100%"
                />
              </div>
            </div>
            
            {/* SO 100 Chart */}
            <div style={{ 
              flex: '1',
              minWidth: '200px',
              maxWidth: 'calc(33.33% - 10px)',
              height: '300px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                textAlign: 'center', 
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '5px'
              }}>SO 100</div>
              <div style={{ flex: '1', position: 'relative' }}>
                <PerformanceChart 
                  id="s100Chart"
                  data={s100ChartData}
                  options={{
                    ...s100ChartOptions,
                    maintainAspectRatio: true
                  }}
                  type="bar"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <h3>Data Scaling​</h3>
          <p>
            We analyze whether increasing the amount of neural trajectories would lead to better performance by measuring RoboCasa (sample neural trajectories and policy evals shown above) performance in simulation. We vary the total amount of neural trajectories, from 0 to 240k nerual trajectories, across different scenarios of ground-truth data (low, medium, high). We explore using both latent actions (LAPA) and IDM for getting pseudo actions. We observe that both IDM and LAPA actions lead in performance boost for all data regime. Also, we observe that there is a log-linear slope between the total number of neural trajectories and the downstream robot policy performance, establishing a promising new axis for scaling robot training data.
          ​</p>
        </div>

        {/* neural trajectory for data augmentation graph 2 */}
        <div className={styles.blogContent}>
          <div className={styles.graphsContainer} style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'nowrap', 
            justifyContent: 'space-between', 
            marginTop: '20px',
            marginBottom: '20px',
            width: '100%',
            overflowX: 'auto',
            gap: '15px'
          }}>
            <div style={{ flex: '1', minWidth: '350px', height: '300px', position: 'relative' }}>
              <PerformanceChart 
                id="lapaChart"
                data={lapaChartData}
                options={{
                  ...lapaChartOptions,
                  maintainAspectRatio: true
                }}
                type="line"
                height="100%"
              />
            </div>
            <div style={{ flex: '1', minWidth: '350px', height: '300px', position: 'relative' }}>
              <PerformanceChart 
                id="idmChart"
                data={idmChartData}
                options={{
                  ...idmChartOptions,
                  maintainAspectRatio: true
                }}
                type="line"
                height="100%"
              />
            </div>
          </div>
        </div>

        {/* RobotWorld Benchmark */}
        <div className={styles.blogContent}>
          <BenchmarkSection />
        </div>

        {/* Paper Information Section */}
        <div className={styles.blogContent}>
          <PaperInfo
            title={<><b>DreamGen</b>: Unlocking Genearlization in Robot Learning through Video World Models</>}
            paperUrl="https://arxiv.org/abs/2505.12705"
            paperType="paper"
            tags={['Neural Trajectories', 'World Models', 'Humanoid Robot', 'Generalization']}
            authors={[
              { name: 'Joel Jang' },
              { name: 'Seonghyeon Ye' },
              { name: 'Zongyu Lin' },
              { name: 'Jiannan Xiang'},
              { name: 'Johan Bjorck' },
              { name: 'Ruijie Zheng' },
              { name: 'Yu Fang' },
              { name: 'Fengyuan Hu'},
              { name: 'Spencer Huang' },
              { name: 'Kaushil Kundalia' },
              { name: 'Yen-Chen Lin' },
              { name: 'Loic Magne' },
              { name: 'Ajay Mandlekar' },
              { name: 'Avnish Narayan' },
              { name: 'You Liang Tan' },
              { name: 'Guanzhi Wang' },
              { name: 'Jing Wang' },
              { name: 'Qi Wang' },
              { name: 'Yinzhen Xu' },
              { name: 'Xiaohui Zeng' },
              { name: 'Kaiyuan Zheng' },
              { name: 'Ming-Yu Liu' },
              { name: 'Luke Zettlemoyer' },
              { name: 'Dieter Fox' },
              { name: 'Jan Kautz' },
              { name: 'Scott Reed' },
              { name: 'Yuke Zhu' },
              { name: 'Linxi Fan' }
            ]}
          />
        </div>

      </article>
    </>
  );
}
