'use client';

import Script from 'next/script';
import styles from '../styles/Home.module.css';
import { useState, useMemo } from 'react';

import VideoComparison from '../components/VideoComparison';
import ButtonSelector from '../components/ButtonSelector';
import VideoCarousel from '../components/VideoCarousel';
import PerformanceChart from '../components/PerformanceChart';
import PaperInfo from '../components/PaperInfo';
import dynamic from 'next/dynamic';
import { 
  behaviorVideos, 
  environmentVideos, 
  combinedVideos, 
  SeenVideos,
  UnseenVideos,
  DroidVideos,
  //EmergentVideos,
  InteractivePromptingVideos,
  InferenceVideos
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
  const [selectedCombinedVideo, setSelectedCombinedVideo] = useState(combinedVideos[0]);
  const [selectedSeen, setSelectedSeen] = useState('seen_1');
  const [selectedUnseen, setSelectedUnseen] = useState('unseen_1');
  const [selectedDroid, setSelectedDroid] = useState('droid_1');
  const [selectedInteractivePrompting, setSelectedInteractivePrompting] = useState(InteractivePromptingVideos[0]);
  const [selectedInference, setSelectedInference] = useState('dreamzero');

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
          <h1 className={styles.blogTitle}>
            <br /> 
            DreamZero: World Action Models are Zero-shot Policies
            <br />
            <span className={styles.subtitle} style={{fontSize: "0.55em"}}>
              <div className={styles.authors}>
                <div className={styles.authorList}>
                  <span className={styles.authorName}><b><a href='https://seonghyeonye.github.io/' className={styles.authorLink}>Seonghyeon Ye</a></b><sup>†</sup></span>
                  <span className={styles.authorName}><b><a href='https://gyhandy.github.io/' className={styles.authorLink}>Yunhao Ge</a></b><sup>*</sup></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=6kkyR1wAAAAJ&hl=en' className={styles.authorLink}>Kaiyuan Zheng</a></b><sup>*</sup></span>
                  <span className={styles.authorName}><b><a href='https://github.com/Little-Podi' className={styles.authorLink}>Shenyuan Gao</a></b><sup>*</sup></span>
                  <span className={styles.authorName}><b><a href='https://sihyun.me/' className={styles.authorLink}>Sihyun Yu</a></b><sup>*</sup></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?hl=en&user=40-EBscAAAAJ&view_op=list_works&sortby=pubdate' className={styles.authorLink}>George Kurian</a></b><sup>*</sup></span>
                  <span className={styles.authorName}><b><a href='https://www.linkedin.com/in/suneel-indupuru-13b787/' className={styles.authorLink}>Suneel Indupuru</a></b><sup>*</sup></span>
                  <div className={styles.lineBreak}></div>
                  <span className={styles.authorName}><b><a href='https://homes.cs.washington.edu/~zchuning/' className={styles.authorLink}>Chuning Zhu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://szxiangjn.github.io/' className={styles.authorLink}>Jiannan Xiang</a></b></span>
                  <span className={styles.authorName}><b><a href='https://www.linkedin.com/in/ayaannaveedmalik/' className={styles.authorLink}>Ayaan Malik</a></b></span>
                  <span className={styles.authorName}><b><a href='https://kyungmnlee.github.io/' className={styles.authorLink}>Kyungmin Lee</a></b></span>
                  <span className={styles.authorName}><b><a href='https://willjhliang.github.io/' className={styles.authorLink}>William Liang</a></b></span>
                  <span className={styles.authorName}><b><a href='https://youliangtan.github.io/' className={styles.authorLink}>You Liang Tan</a></b></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=lJth6jwAAAAJ&hl=en' className={styles.authorLink}>Nadun Ranawaka</a></b></span>
                  <span className={styles.authorName}><b><a href='https://jiashenggu.github.io/' className={styles.authorLink}>Jiasheng Gu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=VaFCcJ8AAAAJ&hl=en' className={styles.authorLink}>Yinzhen Xu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://guanzhi.me/' className={styles.authorLink}>Guanzhi Wang</a></b></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=cGs1BrAAAAAJ&hl=en' className={styles.authorLink}>Fengyuan Hu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://www.linkedin.com/in/avnishn/' className={styles.authorLink}>Avnish Narayan</a></b></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=Q_YY6OMAAAAJ&hl=en' className={styles.authorLink}>Johan Bjorck</a></b></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=cdL5PqgAAAAJ&hl=en' className={styles.authorLink}>Jing Wang</a></b></span>
                  <span className={styles.authorName}><b><a href='https://gwang-kim.github.io/' className={styles.authorLink}>Gwanghyun Kim</a></b></span>
                  <span className={styles.authorName}><b><a href='https://dantong88.github.io/' className={styles.authorLink}>Dantong Niu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://ruijiezheng.com/' className={styles.authorLink}>Ruijie Zheng</a></b></span>
                  <span className={styles.authorName}><b><a href='https://faculty.cc.gatech.edu/~danfei/' className={styles.authorLink}>Danfei Xu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://yilundu.github.io/' className={styles.authorLink}>Yilun Du</a></b></span>
                  <span className={styles.authorName}><b><a href='https://ryanjulian.me/' className={styles.authorLink}>Ryan Julian</a></b></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=ADkiClQAAAAJ&hl=en' className={styles.authorLink}>Yevgen Chebotar</a></b></span>
                  <span className={styles.authorName}><b><a href='https://reedscot.github.io/' className={styles.authorLink}>Scott Reed</a></b></span>
                  <div className={styles.lineBreak}></div>
                  <span className={styles.authorName}><b><a href='https://yukezhu.me/' className={styles.authorLink}>Yuke Zhu</a></b><sup>†</sup></span>
                  <span className={styles.authorName}><b><a href='https://jimfan.me/' className={styles.authorLink}>Linxi "Jim" Fan</a></b><sup>†</sup></span>
                  <span className={styles.authorName}><b><a href='https://joeljang.github.io/' className={styles.authorLink}>Joel Jang</a></b><sup>†</sup></span>
                </div>
                <div className={styles.affiliation}><b>NVIDIA</b></div>
                <div className={styles.authorNote}>
                  <sup>†</sup>Project Leads &nbsp;&nbsp; <sup>*</sup>Core Contributors
                </div>
              </div>
            </span>
          </h1>
          
          <div className={styles.linkContainer}>
            <a href="https://arxiv.org/abs/2505.12705" className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
              Paper
            </a>
            <span className={styles.linkDivider}>•</span>
            <a href="http://github.com/nvidia/GR00T-dreams" className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className={styles.linkDivider}>•</span>
            <a href="http://github.com/nvidia/GR00T-dreams" className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
              X Summary
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
            <b>Traditional Vision-Language-Action (VLA) models</b> require thousands of repetitive, in-the-lab demonstrations per task and rely solely on linguistic priors, which limits their ability to generalize to unseen tasks and environments. <b>DreamZero</b> introduces a paradigm shift toward <b>World Action Models (WAMs)</b>—robotic foundation models built upon pretrained video diffusion models. Unlike VLAs that directly map observations to actions, DreamZero jointly predicts video and actions, leveraging the rich spatiotemporal priors and world physics understanding inherent in video models. This enables DreamZero to learn from diverse, "on-the-job" robot data where each demonstration is unique, rather than requiring dense coverage of repetitive behaviors. As a result, DreamZero achieves <b>zero-shot generalization</b> to both unseen tasks and unseen environments—capabilities that traditional VLAs fundamentally lack. Through system optimizations, we enable a 14B autoregressive video diffusion model to perform <em>real-time video generation and closed-loop motor control at 5Hz</em>.
          <br></br>
          </p>

          <div style={{ 
            width: '130%', 
            marginLeft: '-15%', 
            marginTop: '4rem',
            marginBottom: '4rem'
          }}>
            <img 
              src="/images/project_overview.png"
              alt="DreamZero Method Overview"
              style={{ 
                width: '100%', 
                borderRadius: '0',
                boxShadow: 'none',
                filter: 'none'
              }}
            />
          </div>

          <p style={{marginTop: '20px'}}>
            We validate DreamZero on two robot embodiments: <em>AgiBot G1</em> (mobile bimanual manipulator) and <em>Franka</em> (single-arm robot). For AgiBot, we pretrain on ~500 hours of diverse "on-the-job" (data collected maximizing utility) teleoperation data collected across 22 real-world environments—homes, restaurants, supermarkets, coffee shops, and offices. For Franka, we train on <em>DROID</em>, one of the most heterogeneous publicly available robotic datasets. Below, we demonstrate DreamZero's capabilities across 5 evaluations: <em>#1 AgiBot pretrain seen & unseen tasks</em>, <em>#2 DROID pretrain seen tasks and unseen verbs</em>, <em>#3 AgiBot post-train out-of-distribution (3 tasks)</em>, <em>#4 Interactive Prompting</em>, and <em>#5 Different variations and ablations of DreamZero for real-time inference.</em>.
          </p>

          {/* Behavior Generalization Videos */}
          <h3>#1. AgiBot pretrain seen & unseen tasks​</h3>
          <p>Select a behavior to see the corresponding neural trajectory and real-robot execution videos:</p>
          
          {/* Robot platform selector buttons */}
          <ButtonSelector 
            options={[
              { id: 'seen_1', label: 'Pick & Place Fruit' },
              { id: 'seen_2', label: 'Folding Shirts' },
              { id: 'seen_3', label: 'Folding Shorts' },
              { id: 'seen_4', label: 'Stacking clothes' },
              { id: 'seen_5', label: 'Pick & Place fork/spoon' },
              { id: 'seen_6', label: 'Take Fruit out of bag' },
              { id: 'seen_7', label: 'Pen in Cup' },
              { id: 'seen_8', label: 'Cup on coaster' },
              { id: 'seen_9', label: 'Wipe the Mess' },
              { id: 'seen_10', label: 'Stacking bowls/cups together' },
            ]}
            selectedId={selectedSeen}
            onSelect={(option) => setSelectedSeen(option.id)}
          />
        </div>

        {/* Neural Trajectories Row */}
        <div style={{ marginTop: '-4rem' }}>
          <VideoCarousel 
            videos={SeenVideos[selectedSeen].neural}
          />
        </div>

        {/* Environment Generalization */}
        <div className={styles.blogContent}>
          <p>Here are rollouts of totally unseen tasks.</p>
          
          <ButtonSelector 
            options={[
              { id: 'unseen_1', label: 'Untie Shoe/gift' },
              { id: 'unseen_2', label: 'Take Hat Off from Mannequin' },
              { id: 'unseen_3', label: 'Draw a Circle' },
              { id: 'unseen_4', label: 'Take out the Straw' },
              { id: 'unseen_5', label: 'Stack the Cubes' },
              { id: 'unseen_6', label: 'Paint with the Brush' },
              { id: 'unseen_7', label: 'Iron the Clothes' },
              { id: 'unseen_8', label: 'Shake Hands with the Human' },
              { id: 'unseen_9', label: 'Fold the Map' },
              { id: 'unseen_10', label: 'Pulling Cart' },          
            ]}
            selectedId={selectedUnseen}
            onSelect={(option) => setSelectedUnseen(option.id)}
          />
        </div>
        
        {/* Neural Trajectories Row */}
        <div style={{ marginTop: '-4rem' }}>
          <VideoCarousel 
            videos={UnseenVideos[selectedUnseen].neural}
          />
        </div>

        {/* Environment Generalization */}
        <div className={styles.blogContent}>
          <h3>#2. DROID pretrain seen tasks and unseen verbs</h3>
          <p>Select an environment task to see the corresponding neural trajectory and real-robot execution videos:</p>
          
          <ButtonSelector 
            options={[
              { id: 'droid_1', label: 'Seen Tasks' },
              { id: 'droid_2', label: 'Unseen Verbs' },        
            ]}
            selectedId={selectedDroid}
            onSelect={(option) => setSelectedDroid(option.id)}
          />
        </div>
        
        {/* Neural Trajectories Row */}
        <div style={{ marginTop: '-4rem' }}>
          <VideoCarousel 
            videos={DroidVideos[selectedDroid].neural}
          />
        </div>

        {/* Behavior + Environment Generalization */}
        <div className={styles.blogContent}>
          <h3>#3. AgiBot post-train out-of-distribution</h3>
          <p>Select a behavior and environment task to see the corresponding neural trajectory and real-robot execution videos:</p>
          
          <ButtonSelector 
            options={combinedVideos}
            selectedId={selectedCombinedVideo.id}
            onSelect={setSelectedCombinedVideo}
          />

        </div>

        <div style={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ 
            width: '80%',
            maxWidth: '70%'
          }}>
            <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', marginTop: '-2rem' }}>10 consecutive evaluations (average 96% Task Progress)</h3>
            <div style={{ 
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: '#0f0f0f'
            }}>
              <LazyVideo
                src={selectedCombinedVideo.policyRolloutVideo}
                title="Policy Rollout Video"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.blogContent}>
          <h3>#4. Interactive Prompting​</h3>
          {/* <p>Leveraging the priors of WAMs, we observe that DreamZero some <em>emergent</em> capabilities and is able to accomplish tasks that previously required task-specific methods.</p> */}

          <ButtonSelector
            options={InteractivePromptingVideos}
            selectedId={selectedInteractivePrompting.id}
            onSelect={setSelectedInteractivePrompting}
          />
        </div>
        
        <div style={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ 
            width: '80%',
            maxWidth: '70%'
          }}>
            <div style={{ 
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: '#0f0f0f',
              marginTop: '-2rem'
            }}>
              <LazyVideo
                src={selectedInteractivePrompting.policyRolloutVideo}
                title="Interactive Prompting Video"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.blogContent}>
          <h3>#5. Inference Ablations​</h3>
          <p>Different Ablations</p>

          <ButtonSelector
            options={[
              { id: 'dreamzero', label: 'DreamZero' },
              { id: 'dreamzero_flash', label: 'DreamZero-flash' },
            ]}
            selectedId={selectedInference}
            onSelect={(option) => setSelectedInference(option.id)}
          />
        </div>
        
         {/* Neural Trajectories Row */}
        <div style={{ marginTop: '-4rem' }}>
          <VideoCarousel 
            videos={InferenceVideos[selectedInference].neural}
          />
        </div>

        <div className={styles.blogContent}>
          <h3>The Age of Prompting</h3>
          <p>The era of prompting robot foundation models has arrived. We're publicly sharing our <b><a href="https://dreamzero0.github.io/evals_gallery/" style={{ color: 'blue' }}>gallery of 100+ zero-shot task rollouts</a></b>—a living document that grows as we continue discovering what DreamZero can do.</p>
        </div>

        {/* Paper Information Section */}
        <div className={styles.blogContent}>
          <PaperInfo
            title={<><b>DreamZero</b>: World Action Models are Zero-shot Policies</>}
            paperUrl="https://arxiv.org/abs/2505.12705"
            paperType="paper"
            tags={['World Models', 'Zero-shot Generalization']}
          />
        </div>
      
      </article>
    </>
  );
}
