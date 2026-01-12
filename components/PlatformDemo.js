import { useState } from 'react'
import ButtonSelector from './ButtonSelector'
import VideoCarousel from './VideoCarousel'

const platformVideos = {
  gr1: {
    neural: [
      { url: '/labs/gear/videos/mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos/mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos/mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos/mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
    policy: [
      { url: '/labs/gear/videos/mimicgen/policy/hsl/folding_policy_fast.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos/mimicgen/policy/hsl/hammering_policy_fast.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos/mimicgen/policy/hsl/stacking_policy_fast.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos/mimicgen/policy/hsl/wiping_policy_fast.m3u8', caption: 'Wipe Table' }
    ]
  },
  franka: {
    neural: [
      { url: '/labs/gear/videos/droid_videos/hsl/milk_dream.m3u8', caption: 'Put Milk in Bowl' },
      { url: '/labs/gear/videos/droid_videos/hsl/scoop_dream.m3u8', caption: 'Scoop M&Ms' },
      { url: '/labs/gear/videos/droid_videos/hsl/stack_dream.m3u8', caption: 'Stack Cubes' }
    ],
    policy: [
      { url: '/labs/gear/videos/droid_videos/hsl/milk_fast.m3u8', caption: 'Put Milk in Bowl' },
      { url: '/labs/gear/videos/droid_videos/hsl/scooping_fast.m3u8', caption: 'Scoop M&Ms' },
      { url: '/labs/gear/videos/droid_videos/hsl/cube_fast.m3u8', caption: 'Stack Cubes' }
    ]
  },
  so100: {
    neural: [
      { url: '/labs/gear/videos/so100/hsl/strawberry_dream.m3u8', caption: 'Pick up Strawberry' },
      { url: '/labs/gear/videos/so100/hsl/tictactoe_dream.m3u8', caption: 'Play Tic Tac Toe' },
    ],
    policy: [
      { url: '/labs/gear/videos/so100/hsl/so100_strawberry.m3u8', caption: 'Pick up Strawberry' },
      { url: '/labs/gear/videos/so100/hsl/so100_tictactoe.m3u8', caption: 'Play Tic Tac Toe' },
    ]
  },
  robocasa: {
    neural: [
      { url: '/labs/gear/videos/robocasa/hsl/closedoubledoor.m3u8', caption: 'Close Double Door' },
      { url: '/labs/gear/videos/robocasa/hsl/coffeeservemug.m3u8', caption: 'Serve Coffee' },
      { url: '/labs/gear/videos/robocasa/hsl/opendrawer.m3u8', caption: 'Open Drawer' },
    ],
    policy: [
      { url: '/labs/gear/videos/robocasa/hsl/closedoubledoor_policy_fast_trimmed.m3u8', caption: 'Close Double Door' },
      { url: '/labs/gear/videos/robocasa/hsl/coffeeservemug_policy_fast_trimmed.m3u8', caption: 'Serve Coffee' },
      { url: '/labs/gear/videos/robocasa/hsl/opendrawer_policy_fast_trimmed.m3u8', caption: 'Open Drawer' },
    ]
  }
}

export default function PlatformDemo() {
  const [selectedPlatform, setSelectedPlatform] = useState('gr1')
  
  return (
    <>
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
      
      <VideoCarousel 
        videos={platformVideos[selectedPlatform].neural}
        title="Neural Trajectories"
      />
      
      <VideoCarousel 
        videos={platformVideos[selectedPlatform].policy}
        title="Real-Robot Execution"
      />
    </>
  )
} 