// Sample video options for the selector

// Define direct S3 URLs for videos
// Using pre-signed URLs for direct access to S3 objects
// Note: In a production app, these would be generated on the server with proper expiration times
// const vid1 = '/labs/gear/videos//behavior/dreams/hsl/microwave_fast2.m3u8';
// const vid2 = '/labs/gear/videos//behavior/policy/ours/hsl/microwave_fast.m3u8';

export const behaviorVideos = [
  {
    id: 'microwave',
    label: 'Close Microwave',
    neuralTrajectoryVideo: '/labs/gear/videos//behavior/dreams/hsl/microwave_fast2.m3u8',
    policyRolloutVideo: '/labs/gear/videos//behavior/policy/ours/hsl/microwave_fast.m3u8',
  },
  {
    id: 'ironing',
    label: 'Iron shirt',
    neuralTrajectoryVideo: '/labs/gear/videos//behavior/dreams/hsl/ironing_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//behavior/policy/ours/hsl/ironing_fast.m3u8',
  },
  {
    id: 'laptop',
    label: 'Open Laptop',
    neuralTrajectoryVideo: '/labs/gear/videos//behavior/dreams/hsl/macbook_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//behavior/policy/ours/hsl/macbook_fast.m3u8',
  },
  {
    id: 'typing',
    label: 'Hit Keyboard',
    neuralTrajectoryVideo: '/labs/gear/videos//behavior/dreams/hsl/keyboard_fast2.m3u8',
    policyRolloutVideo: '/labs/gear/videos//behavior/policy/ours/hsl/typing_fast.m3u8',
  },
  {
    id: 'water',
    label: 'Pour water',
    neuralTrajectoryVideo: '/labs/gear/videos//behavior/dreams/hsl/watering_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//behavior/policy/ours/hsl/watering_fast.m3u8',
  },
  {
    id: 'mat',
    label: 'Unroll mat',
    neuralTrajectoryVideo: '/labs/gear/videos//behavior/dreams/hsl/unroll_fast2.m3u8',
    policyRolloutVideo: '/labs/gear/videos//behavior/policy/ours/hsl/unroll_fast.m3u8',
  },
  {
    id: 'candle',
    label: 'Light Candle',
    neuralTrajectoryVideo: '/labs/gear/videos//behavior/dreams/hsl/candle_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//behavior/policy/ours/hsl/candle_fast.m3u8',
  },
];

// Environment generalization videos
export const environmentVideos = [
    {
      id: 'tangerine',
      label: 'Pick up tangerine',
      neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/tangerine_fast.m3u8',
      policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/tangerine_fast.m3u8',
    },
    {
      id: 'orange',
      label: 'Weight the orange',
      neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/orange_fast.m3u8',
      policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/orange_weighing_fast.m3u8',
    },
    {
      id: 'cap',
      label: 'Put cup in trash',
      neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/cup_fast2.m3u8',
      policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/trash_fast.m3u8',
    },
  ];


// Combined behavior + environment videos
export const combinedVideos = [
  {
    id: 'flower',
    label: 'Water flowers',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/watering_fast2.m3u8',
    policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/watering_fast.m3u8',
  },
  {
    id: 'basket',
    label: 'Lift the basket',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/lift_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/lift_fast.m3u8',
  },
  {
    id: 'pot',
    label: 'Cover pot',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/soup_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/closing_fast.m3u8',
  },
  {
    id: 'uncover_pot',
    label: 'Uncover pot',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/uncover_fast2.m3u8',
    policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/uncover_fast.m3u8',
  },
];

// Platform videos for carousel
export const platformVideos = {
  gr1: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },

    ],
    policy: [
      { url: '/labs/gear/videos//mimicgen/policy/hsl/folding_policy_fast.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/policy/hsl/hammering_policy_fast.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/policy/hsl/stacking_policy_fast.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/policy/hsl/wiping_policy_fast.m3u8', caption: 'Wipe Table' }
    ]
  },
  franka: {
    neural: [
      { url: '/labs/gear/videos//droid_videos/hsl/milk_dream.m3u8', caption: 'Put Milk in Bowl' },
      { url: '/labs/gear/videos//droid_videos/hsl/scoop_dream.m3u8', caption: 'Scoop M&Ms' },
      { url: '/labs/gear/videos//droid_videos/hsl/stack_dream.m3u8', caption: 'Stack Cubes' }
    ],
    policy: [
      { url: '/labs/gear/videos//droid_videos/hsl/milk_fast.m3u8', caption: 'Put Milk in Bowl' },
      { url: '/labs/gear/videos//droid_videos/hsl/scooping_fast.m3u8', caption: 'Scoop M&Ms' },
      { url: '/labs/gear/videos//droid_videos/hsl/cube_fast.m3u8', caption: 'Stack Cubes' }
    ]
  },
  so100: {
    neural: [
      { url: '/labs/gear/videos//so100/hsl/strawberry_dream.m3u8', caption: 'Pick up Strawberry' },
      { url: '/labs/gear/videos//so100/hsl/tictactoe_dream.m3u8', caption: 'Play Tic Tac Toe' },
    ],
    policy: [
      { url: '/labs/gear/videos//so100/hsl/so100_strawberry.m3u8', caption: 'Pick up Strawberry' },
      { url: '/labs/gear/videos//so100/hsl/so100_tictactoe.m3u8', caption: 'Play Tic Tac Toe' },
    ]
  },
  robocasa: {
    neural: [
      { url: '/labs/gear/videos//robocasa/hsl/closedoubledoor.m3u8', caption: 'Close Double Door' },
      { url: '/labs/gear/videos//robocasa/hsl/coffeeservemug.m3u8', caption: 'Serve Coffee' },
      { url: '/labs/gear/videos//robocasa/hsl/pnpmicrowavetocounter_pick the tomato from the microwave and place it on plate located on the counter.m3u8', caption: 'Put Tomato on Counter' },
      { url: '/labs/gear/videos//robocasa/hsl/opendrawer.m3u8', caption: 'Open Drawer' },
    ],
    policy: [
      { url: '/labs/gear/videos//robocasa/hsl/closedoubledoor_policy_fast_trimmed.m3u8', caption: 'Close Double Door' },
      { url: '/labs/gear/videos//robocasa/hsl/coffeeservemug_policy_fast_trimmed.m3u8', caption: 'Serve Coffee' },
      { url: '/labs/gear/videos//robocasa/hsl/pnpmicrowavetocounter_policy_fast_trimmed.m3u8', caption: 'Put Tomato on Counter' },
      { url: '/labs/gear/videos//robocasa/hsl/opendrawer_policy_fast_trimmed.m3u8', caption: 'Open Drawer' },
    ]
  }
};

// Sample frames for benchmark models
export const benchmarkFrames = {
  'robocasa': [
    '/labs/gear/videos//benchmark/initial_frame/robocasa/0_pick_the_onion_from_the_sink_and_place_it_on_the_plate_located_on_the_counter,_from_left,_right_and_wrist_view.png',
    '/labs/gear/videos//benchmark/initial_frame/robocasa/6_close_the_cabinet_door,_from_left,_right_and_wrist_view.png',
    '/labs/gear/videos//benchmark/initial_frame/robocasa/17_pick_the_mug_from_under_the_coffee_machine_dispenser_and_place_it_on_the_counter,_from_left,_right_and_wrist_view.png'
  ],
  'gr1-object': [
    '/labs/gear/videos//benchmark/initial_frame/gr1_obj/1_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl.png',
    '/labs/gear/videos//benchmark/initial_frame/gr1_obj/5_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag.png',
    '/labs/gear/videos//benchmark/initial_frame/gr1_obj/25_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate.png'
  ],
  'gr1-behavior': [
    '/labs/gear/videos//benchmark/initial_frame/gr1_behavior/7_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.png',
    '/labs/gear/videos//benchmark/initial_frame/gr1_behavior/9_Use_right_hand_to_stir_with_spoon.png',
    '/labs/gear/videos//benchmark/initial_frame/gr1_behavior/10_Use_right_hand_to_strum_ukelele.png'
  ],
  'gr1-env': [
    '/labs/gear/videos//benchmark/initial_frame/gr1_env/5_Use_the_right_hand_to_grab_the_handle_of_lid_and_lift_up_to_uncover_the_pot.png',
    '/labs/gear/videos//benchmark/initial_frame/gr1_env/7_Use_the_right_hand_to_grab_the_pole_of_the_sign_and_lift_it_up.png',
    '/labs/gear/videos//benchmark/initial_frame/gr1_env/10_Use_the_right_hand_to_pick_up_chip_with_green_packaging_to_white_bag.png'
  ]
};

// Updated video data for benchmark models with frame-specific videos
export const oldBenchmarkVideos = {
  'robocasa': {
    'wan-zs': {
      videos: [
      { 
        if: "100%", 
        pa: '80%', 
        url: '/labs/gear/videos//benchmark/wan_zs/robocasa/hsl/0_pick the onion from the sink and place it on the plate located on the counter, from left, right and wrist view.m3u8'
      },
      { 
        if: '76%', 
        pa: '83%', 
        url: '/labs/gear/videos//benchmark/wan_zs/robocasa/hsl/6_close the cabinet door, from left, right and wrist view.m3u8'
      },
      { 
        if: '77%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/wan_zs/robocasa/hsl/17_pick the mug from under the coffee machine dispenser and place it on the counter, from left, right and wrist view.m3u8'
      }
    ]
    },
    'hunyuan-zs': {
      videos: [
      { 
        if: '65%', 
        pa: '75%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/robocasa/hsl/00001_00_20250427_191530_seed0_pick the onion from the sink and place it on the p.m3u8'
      },
      { 
        if: '68%', 
        pa: '77%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/robocasa/hsl/00007_00_20250427_191843_seed0_close the cabinet door, from left, right and wrist.m3u8'
      },
      { 
        if: '70%', 
        pa: '79%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/robocasa/hsl/00018_00_20250427_192433_seed0_pick the mug from under the coffee machine dispens.m3u8'
      }
    ]
    },
    'cogvideo-zs': {
      videos: [
      { 
        if: '70%', 
        pa: '78%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/robocasa/hsl/0_pick the onion from the sink and place it on the plate located on the counter, from left, right and wrist view.m3u8'
      },
      { 
        if: '72%', 
        pa: '80%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/robocasa/hsl/3_close the cabinet door, from left, right and wrist view.m3u8'
      },
      { 
        if: '74%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/robocasa/hsl/16_pick the mug from under the coffee machine dispenser and place it on the counter, from left, right and wrist view.m3u8'
      }
    ]
    },
    'cosmos-zs': {
      videos: [
      { 
        if: '72%', 
        pa: '79%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/robocasa/hsl/0_pick the onion from the sink and place it on the plate located on the counter, from left, right and wrist view.m3u8'
      },
      { 
        if: '74%', 
        pa: '81%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/robocasa/hsl/6_close the cabinet door, from left, right and wrist view.m3u8'
      },
      { 
        if: '76%', 
        pa: '83%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/robocasa/hsl/17_pick the mug from under the coffee machine dispenser and place it on the counter, from left, right and wrist view.m3u8'
      }
    ]
    },
    'wan-sft': {
      videos: [
      { 
        if: '83%', 
        pa: '87%', 
        url: '/labs/gear/videos//benchmark/wan_sft/robocasa/hsl/0_pick the onion from the sink and place it on the plate located on the counter, from left, right and wrist view.m3u8'
      },
      { 
        if: '85%', 
        pa: '89%', 
        url: '/labs/gear/videos//benchmark/wan_sft/robocasa/hsl/6_close the cabinet door, from left, right and wrist view.m3u8'
      },
      { 
        if: '87%', 
        pa: '91%', 
        url: '/labs/gear/videos//benchmark/wan_sft/robocasa/hsl/17_pick the mug from under the coffee machine dispenser and place it on the counter, from left, right and wrist view.m3u8'
      }
    ]
    },
    'hunyuan-sft': {
      videos: [
      { 
        if: '80%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/robocasa/hsl/00001_00_20250430_181400_seed0_pick the onion from the sink and place it on the plate located on the counter, from left, right and wrist view.m3u8'
      },
      { 
        if: '82%', 
        pa: '86%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/robocasa/hsl/00007_00_20250430_181713_seed0_close the cabinet door, from left, right and wrist view.m3u8'
      },
      { 
        if: '84%', 
        pa: '88%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/robocasa/hsl/00018_00_20250430_182301_seed0_pick the mug from under the coffee machine dispenser and place it on the counter, from left, right and wrist view.m3u8'
      }
    ]
    },
    'cogvideo-sft': {
      videos: [
      { 
        if: '78%', 
        pa: '83%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/robocasa/hsl/0_pick_the_onion_from_the_sink_and_place_it_on_the_plate_located_on_the_counter,_from_left,_right_and_wrist_view.m3u8'
      },
      { 
        if: '80%', 
        pa: '85%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/robocasa/hsl/6_close_the_cabinet_door,_from_left,_right_and_wrist_view.m3u8'
      },
      { 
        if: '82%', 
        pa: '87%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/robocasa/hsl/17_pick_the_mug_from_under_the_coffee_machine_dispenser_and_place_it_on_the_counter,_from_left,_right_and_wrist_view.m3u8'
      }
    ]
    },
    'cosmos-sft': {
      videos: [
      { 
        if: '81%', 
        pa: '86%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/robocasa/hsl/0_pick the onion from the sink and place it on the plate located on the counter, from left, right and wrist view.m3u8'
      },
      { 
        if: '83%', 
        pa: '88%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/robocasa/hsl/6_close the cabinet door, from left, right and wrist view.m3u8'
      },
      { 
        if: '85%', 
        pa: '90%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/robocasa/hsl/17_pick the mug from under the coffee machine dispenser and place it on the counter, from left, right and wrist view.m3u8'
      }
    ]
  }
  },
  'gr1-object': {
    'wan-zs': {
      videos: [
      { 
        if: '68%', 
        pa: '76%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_obj/hsl/1_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '70%', 
        pa: '78%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_obj/hsl/5_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '72%', 
        pa: '80%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_obj/hsl/25_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
    },
    'hunyuan-zs': {
      videos: [
      { 
        if: '63%', 
        pa: '72%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_obj/hsl/00002_00_20250501_055026_seed0_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '65%', 
        pa: '74%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_obj/hsl/00006_00_20250501_055225_seed0_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '67%', 
        pa: '76%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_obj/hsl/00026_00_20250501_060224_seed0_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
    },
    'cogvideo-zs': {
      videos: [
      { 
        if: '66%', 
        pa: '74%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_obj/hsl/8_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '68%', 
        pa: '76%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_obj/hsl/10_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '70%', 
        pa: '78%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_obj/hsl/28_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
    },
    'cosmos-zs': {
      videos: [
      { 
        if: '69%', 
        pa: '77%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_obj/hsl/1_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '71%', 
        pa: '79%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_obj/hsl/5_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '73%', 
        pa: '81%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_obj/hsl/25_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
    },
    'wan-sft': {
      videos: [
      { 
        if: '78%', 
        pa: '83%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_obj/hsl/1_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '80%', 
        pa: '85%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_obj/hsl/5_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '82%', 
        pa: '87%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_obj/hsl/25_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
    },
    'hunyuan-sft': {
      videos: [
      { 
        if: '76%', 
        pa: '81%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_obj/hsl/00002_00_20250501_021424_seed0_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '78%', 
        pa: '83%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_obj/hsl/00006_00_20250501_021640_seed0_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '80%', 
        pa: '85%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_obj/hsl/00026_00_20250501_022759_seed0_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
    },
    'cogvideo-sft': {
      videos: [
      { 
        if: '74%', 
        pa: '80%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_obj/hsl/1_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '76%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_obj/hsl/5_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '78%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_obj/hsl/25_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
    },
    'cosmos-sft': {
      videos: [
      { 
        if: '77%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_obj/hsl/1_Use_the_right_hand_to_pick_up_orange_juice_carton_from_center_of_pink_plate_to_center_of_green_bowl..m3u8'
      },
      { 
        if: '79%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_obj/hsl/5_Use_the_right_hand_to_pick_up_green_bok_choy_from_top_tier_of_two_tier_black_and_white_shelf_to_brown_paper_bag..m3u8'
      },
      { 
        if: '81%', 
        pa: '86%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_obj/hsl/25_Use_the_left_hand_to_pick_up_green_pepper_from_tan_table,_below_the_bright_blue_plate_to_pale_turquoise_plate..m3u8'
      }
    ]
  }
  },
  'gr1-behavior': {
    'wan-zs': {
      videos: [
      { 
        if: '70%', 
        pa: '77%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_behavior/hsl/7_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.m3u8'
      },
      { 
        if: '72%', 
        pa: '79%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_behavior/hsl/9_Use_right_hand_to_stir_with_spoon.m3u8'
      },
      { 
        if: '74%', 
        pa: '81%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_behavior/hsl/10_Use_right_hand_to_strum_ukelele.m3u8'
      }
    ]
    },
    'hunyuan-zs': {
      videos: [
      { 
        if: '65%', 
        pa: '73%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_behavior/hsl/00008_00_20250501_055325_seed0_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.m3u8'
      },
      { 
        if: '67%', 
        pa: '75%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_behavior/hsl/00010_00_20250501_055426_seed0_Use_right_hand_to_stir_with_spoon.m3u8'
      },
      { 
        if: '69%', 
        pa: '77%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_behavior/hsl/00011_00_20250501_055455_seed0_Use_right_hand_to_strum_ukelele.m3u8'
      }
    ]
    },
    'cogvideo-zs': {
      videos: [
      { 
        if: '68%', 
        pa: '75%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_behavior/hsl/11_Use right hand to pick up sponge and wipe the plate held in the right hand.m3u8'
      },
      { 
        if: '70%', 
        pa: '77%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_behavior/hsl/12_Use right hand to stir with spoon.m3u8'
      },
      { 
        if: '72%', 
        pa: '79%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_behavior/hsl/5_Use right hand to strum ukelele.m3u8'
      }
    ]
    },
    'cosmos-zs': {
      videos: [
      { 
        if: '71%', 
        pa: '78%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_behavior/hsl/7_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.m3u8'
      },
      { 
        if: '73%', 
        pa: '80%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_behavior/hsl/9_Use_right_hand_to_stir_with_spoon.m3u8'
      },
      { 
        if: '75%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_behavior/hsl/10_Use_right_hand_to_strum_ukelele.m3u8'
      }
    ]
    },
    'wan-sft': {
      videos: [
      { 
        if: '80%', 
        pa: '85%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_behavior/hsl/7_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.m3u8'
      },
      { 
        if: '82%', 
        pa: '87%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_behavior/hsl/9_Use_right_hand_to_stir_with_spoon.m3u8'
      },
      { 
        if: '84%', 
        pa: '89%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_behavior/hsl/10_Use_right_hand_to_strum_ukelele.m3u8'
      }
    ]
    },
    'hunyuan-sft': {
      videos: [
      { 
        if: '78%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_behavior/hsl/00008_00_20250501_021758_seed0_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.m3u8'
      },
      { 
        if: '80%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_behavior/hsl/00010_00_20250501_021906_seed0_Use_right_hand_to_stir_with_spoon.m3u8'
      },
      { 
        if: '82%', 
        pa: '86%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_behavior/hsl/00011_00_20250501_021940_seed0_Use_right_hand_to_strum_ukelele.m3u8'
      }
    ]
    },
    'cogvideo-sft': {
      videos: [
      { 
        if: '76%', 
        pa: '81%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_behavior/hsl/7_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.m3u8'
      },
      { 
        if: '78%', 
        pa: '83%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_behavior/hsl/9_Use_right_hand_to_stir_with_spoon.m3u8'
      },
      { 
        if: '80%', 
        pa: '85%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_behavior/hsl/10_Use_right_hand_to_strum_ukelele.m3u8'
      }
    ]
    },
    'cosmos-sft': {
      videos: [
      { 
        if: '79%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_behavior/hsl/7_Use_right_hand_to_pick_up_sponge_and_wipe_the_plate_held_in_the_right_hand.m3u8'
      },
      { 
        if: '81%', 
        pa: '86%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_behavior/hsl/9_Use_right_hand_to_stir_with_spoon.m3u8'
      },
      { 
        if: '83%', 
        pa: '88%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_behavior/hsl/10_Use_right_hand_to_strum_ukelele.m3u8'
      }
    ]
  }
  },
  'gr1-env': {
    'wan-zs': {
      videos: [
      { 
        if: '66%', 
        pa: '74%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_env/hsl/17_Use the right hand to grab the handle of lid and lift up to uncover the pot.m3u8'
      },
      { 
        if: '68%', 
        pa: '76%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_env/hsl/10_Use the right hand to grab the pole of the sign and lift it up.m3u8'
      },
      { 
        if: '70%', 
        pa: '78%', 
        url: '/labs/gear/videos//benchmark/wan_zs/gr1_env/hsl/11_Use the right hand to pick up chip with green packaging to white bag.m3u8'
      }
    ]
    },
    'hunyuan-zs': {
      videos: [
      { 
        if: '61%', 
        pa: '70%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_env/hsl/00006_00_20250430_075647_seed0_Use the right hand to grab the handle of lid and lift up to uncover the pot.m3u8'
      },
      { 
        if: '63%', 
        pa: '72%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_env/hsl/00008_00_20250430_075746_seed0_Use the right hand to grab the pole of the sign and lift it up.m3u8'
      },
      { 
        if: '65%', 
        pa: '74%', 
        url: '/labs/gear/videos//benchmark/hunyuan_zs/gr1_env/hsl/00011_00_20250430_075911_seed0_Use the right hand to pick up chip with green packaging to white bag.m3u8'
      }
    ]
    },
    'cogvideo-zs': {
      videos: [
      { 
        if: '64%', 
        pa: '72%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_env/hsl/17_Use the right hand to grab the handle of lid and lift up to uncover the pot.m3u8'
      },
      { 
        if: '66%', 
        pa: '74%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_env/hsl/10_Use the right hand to grab the pole of the sign and lift it up.m3u8'
      },
      { 
        if: '68%', 
        pa: '76%', 
        url: '/labs/gear/videos//benchmark/cogvideo_zs/gr1_env/hsl/11_Use the right hand to pick up chip with green packaging to white bag.m3u8'
      }
    ]
    },
    'cosmos-zs': {
      videos: [
      { 
        if: '67%', 
        pa: '75%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_env/hsl/5_Use the right hand to grab the handle of lid and lift up to uncover the pot.m3u8'
      },
      { 
        if: '69%', 
        pa: '77%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_env/hsl/7_Use the right hand to grab the pole of the sign and lift it up.m3u8'
      },
      { 
        if: '71%', 
        pa: '79%', 
        url: '/labs/gear/videos//benchmark/cosmos_zs/gr1_env/hsl/10_Use the right hand to pick up chip with green packaging to white bag.m3u8'
      }
    ]
    },
    'wan-sft': {
      videos: [
      { 
        if: '76%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_env/hsl/5_Use the right hand to grab the handle of lid and lift up to uncover the pot.m3u8'
      },
      { 
        if: '78%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_env/hsl/7_Use the right hand to grab the pole of the sign and lift it up.m3u8'
      },
      { 
        if: '80%', 
        pa: '86%', 
        url: '/labs/gear/videos//benchmark/wan_sft/gr1_env/hsl/10_Use the right hand to pick up chip with green packaging to white bag.m3u8'
      }
    ]
    },
    'hunyuan-sft': {
      videos: [
      { 
        if: '74%', 
        pa: '80%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_env/hsl/00006_00_20250430_111117_seed0_Use the right hand to grab the handle of lid and lift up to uncover the pot.m3u8'
      },
      { 
        if: '76%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_env/hsl/00008_00_20250430_111253_seed0_Use the right hand to grab the pole of the sign and lift it up.m3u8'
      },
      { 
        if: '78%', 
        pa: '84%', 
        url: '/labs/gear/videos//benchmark/hunyuan_sft/gr1_env/hsl/00011_00_20250430_111515_seed0_Use the right hand to pick up chip with green packaging to white bag.m3u8'
      }
    ]
    },
    'cogvideo-sft': {
      videos: [
      { 
        if: '72%', 
        pa: '78%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_env/hsl/5_Use_the_right_hand_to_grab_the_handle_of_lid_and_lift_up_to_uncover_the_pot.m3u8'
      },
      { 
        if: '74%', 
        pa: '80%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_env/hsl/7_Use_the_right_hand_to_grab_the_pole_of_the_sign_and_lift_it_up.m3u8'
      },
      { 
        if: '76%', 
        pa: '82%', 
        url: '/labs/gear/videos//benchmark/cogvideo_sft/gr1_env/hsl/10_Use_the_right_hand_to_pick_up_chip_with_green_packaging_to_white_bag.m3u8'
      }
    ]
    },
    'cosmos-sft': {
      videos: [
      { 
        if: '75%', 
        pa: '81%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_env/hsl/5_Use the right hand to grab the handle of lid and lift up to uncover the pot.m3u8'
      },
      { 
        if: '77%', 
        pa: '83%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_env/hsl/7_Use the right hand to grab the pole of the sign and lift it up.m3u8'
      },
      { 
        if: '79%', 
        pa: '85%', 
        url: '/labs/gear/videos//benchmark/cosmos_sft/gr1_env/hsl/10_Use the right hand to pick up chip with green packaging to white bag.m3u8'
      }
    ]
  }
}
};


function replaceSpacesInVideoPaths(benchmarkData) {
  // Deep clone the object to avoid modifying the original
  const newData = JSON.parse(JSON.stringify(benchmarkData));
  
  // Iterate through all categories (robocasa, gr1-object, etc.)
  Object.keys(newData).forEach(category => {
    // Iterate through all models in each category (wan-zs, hunyuan-zs, etc.)
    Object.keys(newData[category]).forEach(model => {
      // Replace spaces in each video URL
      if (newData[category][model].videos && Array.isArray(newData[category][model].videos)) {
        newData[category][model].videos.forEach(video => {
          if (video.url) {
            video.url = video.url.replace(/ /g, '_');
          }
        });
      }
    });
  });
  
  return newData;
}

export const benchmarkVideos = replaceSpacesInVideoPaths(oldBenchmarkVideos);
