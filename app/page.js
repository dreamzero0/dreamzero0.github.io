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
const mainVideo = '/labs/gear/videos/dreamgen_teaser/hsl/DreamZero_overview.m3u8';

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
          <h1 className={styles.blogTitle} style={{ color: '#76b900' }}>
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
                  <span className={styles.authorName}><b><a href='https://youliangtan.github.io/' className={styles.authorLink}>You Liang Tan</a></b><sup>*</sup></span>
                  <span className={styles.authorName}><b><a href='https://homes.cs.washington.edu/~zchuning/' className={styles.authorLink}>Chuning Zhu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://szxiangjn.github.io/' className={styles.authorLink}>Jiannan Xiang</a></b></span>
                  <span className={styles.authorName}><b><a href='https://www.linkedin.com/in/ayaannaveedmalik/' className={styles.authorLink}>Ayaan Malik</a></b></span>
                  <span className={styles.authorName}><b><a href='https://kyungmnlee.github.io/' className={styles.authorLink}>Kyungmin Lee</a></b></span>
                  <span className={styles.authorName}><b><a href='https://willjhliang.github.io/' className={styles.authorLink}>William Liang</a></b></span>
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
                  <span className={styles.authorName}><b><a href='https://xieleo5.github.io/' className={styles.authorLink}>Yuqi Xie</a></b></span>
                  <span className={styles.authorName}><b><a href='https://faculty.cc.gatech.edu/~danfei/' className={styles.authorLink}>Danfei Xu</a></b></span>
                  <span className={styles.authorName}><b><a href='https://yilundu.github.io/' className={styles.authorLink}>Yilun Du</a></b></span>
                  <span className={styles.authorName}><b><a href='https://ryanjulian.me/' className={styles.authorLink}>Ryan Julian</a></b></span>
                  <span className={styles.authorName}><b><a href='https://scholar.google.com/citations?user=ADkiClQAAAAJ&hl=en' className={styles.authorLink}>Yevgen Chebotar</a></b></span>
                  <span className={styles.authorName}><b><a href='https://reedscot.github.io/' className={styles.authorLink}>Scott Reed</a></b></span>
                  <span className={styles.authorName}><b><a href='https://yukezhu.me/' className={styles.authorLink}>Yuke Zhu</a></b><sup>†</sup></span>
                  <span className={styles.authorName}><b><a href='https://jimfan.me/' className={styles.authorLink}>Linxi "Jim" Fan</a></b><sup>†</sup></span>
                  <span className={styles.authorName}><b><a href='https://joeljang.github.io/' className={styles.authorLink}>Joel Jang</a></b><sup>†</sup></span>
                </div>
                <div className={styles.affiliation} style={{ color: '#76b900' }}><b>NVIDIA</b></div>
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
            <a href="https://github.com/dreamzero0/dreamzero" className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
              Code
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
              defaultVolume={1.0}
              controls
            />
          </div>
        </div>

        <div id="content" className={styles.blogContent}>
          <p>
            State-of-the-art <b>Vision-Language-Action (VLA)</b> models excel at <em>semantic generalization</em> but struggle to generalize to unseen physical motions in novel environments.
            We introduce <b>DreamZero</b>, a <em>World Action Model (WAM)</em> built upon a pretrained video diffusion backbone. Unlike VLAs, WAMs learn physical dynamics by jointly predicting future world states and actions, using video as a dense representation of how the world evolves.
            By jointly modeling video and action, DreamZero learns diverse skills effectively from heterogeneous robot data without relying on repetitive demonstrations. This results in over 2x improvement in generalization to <b>new tasks and environments</b> compared to state-of-the-art VLAs in real-robot experiments and achieves <b>1st place on the <a href='https://robo-arena.github.io/leaderboard' className={styles.authorLink}>RoboArena leaderboard</a></b>. Crucially, through model and system optimizations, we enable a 14B autoregressive video diffusion model to perform real-time <em>closed-loop control at 7Hz.</em>
            Finally, DreamZero improves unseen task performance by over 35% with just 10–20 minutes of video-only cross-embodiment demonstrations.
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
          
          <p style={{marginTop: '1rem', marginBottom: '0.5rem'}}>
            We evaluate DreamZero across five settings—four testing generalization, and one demonstrating real-time deployment:
          </p>

          {/* Evaluation cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            margin: '1.5rem 0 3rem 0',
            padding: '0'
          }}>
            {[
              {
                num: '1',
                title: 'AgiBot Pretraining',
                desc: '10 seen tasks + 10 unseen tasks, evaluated zero-shot in novel environments with unseen objects'
              },
              {
                num: '2', 
                title: 'DROID Pretraining',
                desc: 'Franka: 40 tasks—achieving 1st place on RoboArena Leaderboard'
              },
              {
                num: '3',
                title: 'Post-Training Generalization',
                desc: 'AgiBot: Fine-tuning on 3 downstream tasks while retaining out-of-distribution robustness'
              },
              {
                num: '4',
                title: 'Interactive Prompting',
                desc: 'Zero-shot prompting in the wild—taking the robot around and asking people to prompt new tasks'
              },
              {
                num: '5',
                title: 'Real-Time Inference',
                desc: '40× speedup through model and system optimizations, enabling 7Hz closed-loop control'
              }
            ].map((item) => (
              <div key={item.num} style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  background: item.num === '5' 
                    ? 'linear-gradient(135deg, #4a90d9 0%, #357abd 100%)' 
                    : 'linear-gradient(135deg, #76b900 0%, #5a8f00 100%)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  {item.num}
                </div>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.4 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Behavior Generalization Videos */}
          <h3 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem' 
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #76b900 0%, #5a8f00 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}>1</span>
            AgiBot Pretraining: Seen & Unseen Tasks
          </h3>
          <p>
            We evaluate pretrained models out-of-the-box on tasks present in the pretraining data, but in <em>zero-shot environments with unseen objects</em>. DreamZero achieves 62.2% average task progress—over 2× higher than the best pretrained VLA baseline (27.4%). For unseen tasks entirely absent from training, DreamZero reaches 39.5% task progress while VLAs achieve near-zero, demonstrating that WAMs can generalize to novel motions like untying shoelaces and shaking hands. Both seen and unseen tasks were evaluated on 80 evaluation rollouts on unique objects for each checkpoint.
          </p>
          
          <p style={{ marginTop: '2rem', fontWeight: '500' }}>
            Seen Tasks:
          </p>
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
          <p style={{ marginTop: '2rem', fontWeight: '500' }}>
            Unseen Tasks:
          </p>
          
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

        {/* Add disclaimer here */}
        <div className={styles.blogContent}>
          <p style={{ fontSize: '0.85rem', opacity: 0.6, fontStyle: 'italic', marginTop: '-1rem' }}>
            * Some videos were recorded before final inference optimization integration. See Section 3 for our smoothest real-time rollouts.
          </p>
        </div>

        {/* Environment Generalization */}
        <div className={styles.blogContent}>
          <h3 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem' 
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #76b900 0%, #5a8f00 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}>2</span>
            DROID: Seen Tasks & Unseen Verbs
          </h3>
        <p>
          To validate on publicly available data, we train DreamZero on <em>DROID</em>—one of the most heterogeneous open-source robotic datasets. We evaluate on 20 seen tasks and 20 tasks with <em>unseen verbs</em> (actions absent from DROID). DreamZero significantly outperforms pretrained baselines, achieving 49% task progress on unseen verbs compared to 25-32% for state-of-the-art VLAs, and securing <b>1st place on the RoboArena benchmark</b>.
        </p>
          
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
          <h3 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem' 
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #76b900 0%, #5a8f00 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}>3</span>
            Post-Training: Out-of-Distribution Generalization
          </h3>
        <p>
          We investigate whether WAMs retain their generalization advantage after fine-tuning on task-specific data. We post-train on three downstream tasks with varying distribution diversity: <em>shirt folding</em> (lowest diversity), <em>fruit packing</em> (medium), and <em>table bussing</em> (highest). DreamZero's improvement over VLAs correlates positively with dataset diversity—confirming that WAMs learn effectively from heterogeneous distributions even during post-training. 
        </p>
          
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
            width: '60%',
            maxWidth: '50%'
          }}>
            <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', marginTop: '-2rem' }}>
              {selectedCombinedVideo.label}: 10 consecutive evaluations | {selectedCombinedVideo.progress}
            </h3>
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

        {/* Add disclaimer here */}
        <div className={styles.blogContent}>
          <p style={{ fontSize: '0.85rem', opacity: 0.6, fontStyle: 'italic', marginTop: '-1rem' }}>
            * This is a uncut recording of a single evaluation session.
          </p>
        </div>

        <div className={styles.blogContent}>
          <h3 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem' 
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #76b900 0%, #5a8f00 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}>4</span>
            Interactive Prompting
          </h3>
          <p>The era of prompting robot foundation models has arrived. In this section, we show some rollouts of interactive prompting in action, where we take the robot around, and just ask people to <b>prompt</b> the robot to do new things. Here are some cool tasks that we found the robot is able to do.</p>

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
            width: '60%',
            maxWidth: '50%'
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
          <p style={{ 
            fontSize: '0.9rem', 
            opacity: 0.85, 
            fontStyle: 'italic',
            marginTop: '1rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Prompt | "{selectedInteractivePrompting.prompt}"
          </p>
        </div>

        <div className={styles.blogContent}>
          <h3 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem' 
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #4a90d9 0%, #357abd 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}>5</span>
            Real-Time Inference & DreamZero-Flash
          </h3>

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
          <h3>What's Next</h3>
          <p>
            How far can zero-shot generalization go? We've been stress-testing DreamZero with tasks we never trained on, in environments we've never seen. From fanning burgers to pressing elevator buttons, playing xylophones to shaking tambourines, we keep discovering surprising new capabilities. DreamZero is just the beginning of the new wave of robot foundation models built on video world models!
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            margin: '1rem 0'
          }}>
            {[
              'Fan the burger', 'Press elevator button', 'Play xylophone', 
              'Shake tambourine', 'Pour into human-held cup', 'Open laptop',
              'Ring the bell', 'Flip the pancake', 'Water the plant'
            ].map((task) => (
              <span key={task} style={{
                background: 'rgba(118, 185, 0, 0.1)',
                border: '1px solid rgba(118, 185, 0, 0.2)',
                borderRadius: '20px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.85rem'
              }}>
                {task}
              </span>
            ))}
            <span style={{
              background: 'rgba(118, 185, 0, 0.2)',
              border: '1px solid rgba(118, 185, 0, 0.3)',
              borderRadius: '20px',
              padding: '0.35rem 0.75rem',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              +90 more...
            </span>
          </div>
          
          <a 
            href="https://dreamzero0.github.io/evals_gallery/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(118, 185, 0, 0.15) 0%, rgba(118, 185, 0, 0.05) 100%)',
              border: '1px solid rgba(118, 185, 0, 0.3)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              <div style={{
                fontSize: '2.5rem'
              }}>
                🎬
              </div>
              <div>
                <div style={{ 
                  fontWeight: '600', 
                  fontSize: '1.1rem', 
                  color: '#76b900',
                  marginBottom: '0.25rem'
                }}>
                  Explore 100+ Zero-Shot Task Rollouts →
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                  A living gallery that grows as we discover what DreamZero can do
                </div>
              </div>
            </div>
          </a>
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
