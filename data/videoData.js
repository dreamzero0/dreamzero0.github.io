// Sample video options for the selector

// Define direct S3 URLs for videos
// Using pre-signed URLs for direct access to S3 objects
// Note: In a production app, these would be generated on the server with proper expiration times
// const vid1 = '/labs/gear/videos//behavior/dreams/hsl/microwave_fast2.m3u8';
// const vid2 = '/labs/gear/videos//behavior/policy/ours/hsl/microwave_fast.m3u8';


// Combined behavior + environment videos
export const combinedVideos = [
  {
    id: 'table_bussing',
    label: 'Table Bussing (5 trash & 5 dishware)',
    progress: 'Task Progress: 81%',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/lift_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/hsl/DreamZero_AgiBotPostTrain_Tidying_2x.m3u8',
  },
  {
    id: 'fruit_packing',
    label: 'Fruit packing (10 fruits)',
    progress: 'Task Progress: 89%',
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/hsl/DreamZero_AgiBotPostTrain_FruitPacking_2x.m3u8',
  },
  {
    id: 'shirt_folding',
    label: 'Shirt Folding',
    progress: 'Task Progress: 89%',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/soup_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/hsl/DreamZero_AgiBotPostTrain_ShirtFolding_2x.m3u8',
  },
];

// Platform videos for carousel
export const SeenVideos = {
  seen_1: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_001_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_001.m3u8',
        caption: 'Pick up the banana on the table and place it in the blue plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_004_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_004.m3u8',
        caption: 'Pick up the red apple on the table and place it on the gray towel. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_007_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_007.m3u8',
        caption: 'Pick up the green pear on the table and place it on the blue checkered bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_008_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_008.m3u8',
        caption: 'Pick up the starfruit on the table and place it on the cloth basket. | ✅'
      },
    ],
  },
  seen_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_012_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_012.m3u8',
        caption: 'Fold the bottom of the white short sleeve to the middle. Then, pull the shirt toward the edge of the table. Next, fold the top of the shirt down to the middle. Finally, grasp the collar and folds it down. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_011_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_011.m3u8',
        caption: 'Fold the bottom of the green short sleeve to the middle. Then, pull the shirt toward the edge of the table. Next, fold the top of the shirt down to the middle. Finally, grasp the collar and folds it down. | ⚠️'
      },      
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_013_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_013.m3u8',
        caption: 'Fold the bottom of the logo short sleeve to the middle. Then, pull the shirt toward the edge of the table. Next, fold the top of the shirt down to the middle. Finally, grasp the collar and folds it down. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_016_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_016.m3u8',
        caption: 'Fold the bottom of the blue short sleeve to the middle. Then, pull the shirt toward the edge of the table. Next, fold the top of the shirt down to the middle. Finally, grasp the collar and folds it down. | ⚠️'
      },

    ],
  },
  seen_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_017_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_017.m3u8',
        caption: 'Fold the bottom of the tan shorts toward the middle. Then, fold the shorts in half from right to left. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_021_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_021.m3u8',
        caption: 'Fold the bottom of the white shorts toward the middle. Then, fold the shorts in half from right to left. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_018_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_018.m3u8',
        caption: 'Fold the bottom of the camo-grey shorts toward the middle. Then, fold the shorts in half from right to left. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_023_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_023.m3u8',
        caption: 'Fold the bottom of the green shorts toward the middle. Then, fold the shorts in half from right to left. | ⚠️'
      },
    ],
  },
  seen_4: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_032_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_032.m3u8',
        caption: 'Pick up the blue shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_025_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_025.m3u8',
        caption: 'Pick up the black shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_036_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_027.m3u8',
        caption: 'Pick up the white shirt and place it on the gray towel. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_029_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_029.m3u8',
        caption: 'Pick up the black hoodie and place it on the stack of clothes. | ✅'
      },
    ],
  },
  seen_5: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_033_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_033.m3u8',
        caption: 'Pick up the pink fork from the table and place it onto the blue plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_034_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_034.m3u8',
        caption: 'Pick up the pink spoon from the table and place it into the brown packing box. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_027_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_036.m3u8',
        caption: 'Pick up the orange spoon from the table and place it into the green plastic mug | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_037_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_037.m3u8',
        caption: 'Pick up the light blue fork from the table and place it onto the orange plate | ✅'
      },
    ],
  },
  seen_6: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_046_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_046.m3u8',
        caption: 'Pick up the peach from the plastic bag and place it into the brown bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_041_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_041.m3u8',
        caption: 'Pick up the Mango from the plastic bag and place it into the Wooden Basket | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_044_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_044.m3u8',
        caption: 'Pick up the red apple from the plastic bag and place it into the green tray. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_047_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_047.m3u8',
        caption: 'Pick up the watermelon from the plastic bag and place it onto the Blue Plate. | ✅'
      },
    ],
  },
  seen_7: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_049_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_049.m3u8',
        caption: 'Pick up the red marker pen from the table and place it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_054_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_054.m3u8',
        caption: 'Pick up the purple pen from the table and place it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_055_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_055.m3u8',
        caption: 'Pick up the mechanical pencil from the table and place it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_053_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_053.m3u8',
        caption: 'Pick up the white marker pen from the table and place it into the pen holder. | ✅'
      },
    ],
  },
  seen_8: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_057_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_057.m3u8',
        caption: 'Pick up the clear cup from the table and place it on the grey coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_059_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_059.m3u8',
        caption: 'Pick up the plastic cup from the table and place it on the blue coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_061_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_061.m3u8',
        caption: 'Pick up the plastic cup from the table and place it on the white coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_062_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_062.m3u8',
        caption: 'Pick up the paper cup from the table and place it on the white coaster. | ✅'
      },
    ],
  },
  seen_9: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_065_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_065.m3u8',
        caption: 'Wipe the coffee spill off the table with a sponge. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_066_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_066.m3u8',
        caption: 'Wipe the brown sugar off the table with a grey towel. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_072_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_072.m3u8',
        caption: 'Wipe the fruit juice off the table with a disinfecting wipe. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_071_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_071.m3u8',
        caption: 'Wipe the water off the table with a paper towel. | ✅'
      },
    ],
  },
  seen_10: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_079_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_079.m3u8',
        caption: 'Stack all bowls together. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_074_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_074.m3u8',
        caption: 'Stack the cups together. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_077_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_077.m3u8',
        caption: 'Stack the bowls together. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_073_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_073.m3u8',
        caption: 'Stack the bowls together. | ✅'
      },
    ],
  },
};

// Platform videos for carousel
export const UnseenVideos = {
  unseen_1: { // Untie Shoe/gift
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_003_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_003.m3u8',
        caption: 'Untie the blue ribobon of the box. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_006_02_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_006_02.m3u8',
        caption: 'Untie the knot of the shoelace. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_005_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_005.m3u8',
        caption: 'Untie the knot of the package. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_008_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_008.m3u8',
        caption: 'Untie the knot of the present box. | ✅'
      },
    ],
  },
  unseen_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_012_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_012.m3u8',
        caption: 'Place the hat on the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_016_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_016.m3u8',
        caption: 'Remove the hat from the mannequin\'s head. | ✅'
      },  
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_011_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_011.m3u8',
        caption: 'Remove the hat from the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_012_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_012.m3u8',
        caption: 'Remove the hat from the mannequin\'s head. | ✅'
      },

    ],
  },
  unseen_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_017_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_017.m3u8',
        caption: 'Pick up the marker and draw a circle on the book. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_018_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_018.m3u8',
        caption: 'Pick up the marker and draw a circle on the book. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_018_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_018.m3u8',
        caption: 'Pick up the marker and draw a circle on the book. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_020_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_020.m3u8',
        caption: 'Pick up the marker and draw a circle on the whiteboard. | ⚠️'
      },
    ],
  },
  unseen_4: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_025_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_025.m3u8',
        caption: 'Pull the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_027_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_027.m3u8',
        caption: 'Pull the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_029_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_029.m3u8',
        caption: 'Pull the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_025_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_025.m3u8',
        caption: 'Pull the straw out of the cup. | ✅'
      },
    ],
  },
  unseen_5: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_033_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_033.m3u8',
        caption: 'Stack all the cubes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_035_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_035.m3u8',
        caption: 'Stack all the cubes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_037_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_037.m3u8',
        caption: 'Stack all the cubes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_039_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_039.m3u8',
        caption: 'Stack all the cubes. | ✅'
      },
    ],
  },
  unseen_6: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_047_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_047.m3u8',
        caption: 'Paint the notebook with the brush. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_044_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_044.m3u8',
        caption: 'Paint the notebook with the brush. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_041_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_041.m3u8',
        caption: 'Paint the notebook with the brush. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_048-2_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_048-2.m3u8',
        caption: 'Paint the notebook with the brush. | ✅'
      },
    ],
  },
  unseen_7: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_051_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_051.m3u8',
        caption: 'Iron the shirt.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_049-2_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_049-2.m3u8',
        caption: 'Iron the shorts.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_056_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_056.m3u8',
        caption: 'Iron the shirt. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_055-2_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_055-2.m3u8',
        caption: 'Iron the shirt.  | ✅'
      },
    ],
  },
  unseen_8: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_057_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_057.m3u8',
        caption: 'Shake hands with the human in front.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_064_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_064.m3u8',
        caption: 'Shake hands with the human in front.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_061_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_061.m3u8',
        caption: 'Shake hands with the human in front. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_058_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_058.m3u8',
        caption: 'Shake hands with the human in front. | ✅'
      },
    ],
  },
  unseen_9: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_066_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_066.m3u8',
        caption: 'Grab one side of the map and fold the map.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_67_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_67.m3u8',
        caption: 'Grab one side of the map and fold the map.  | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_071_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_071.m3u8',
        caption: 'Grab one side of the map and fold the map.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_066_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_066.m3u8',
        caption: 'Grab one side of the map and fold the map. | ⚠️'
      },
    ],
  },
  unseen_10: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_079_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_079.m3u8',
        caption: 'Pull the cart back. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_073_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/NEWUNSEEN_073.m3u8',
        caption: 'Pull the cart back.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_080_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_080.m3u8',
        caption: 'Pull the cart back. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_073_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_073.m3u8',
        caption: 'Pull the cart back. | ✅'
      },
    ],
  },
};

// Platform videos for carousel
export const DroidVideos = {
  droid_1: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/cup_holder (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/cup_holder (real).m3u8',
        caption: 'Move the cup forward then put the marker inside the cup | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/arrange_marker (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/arrange_marker (real).m3u8',
        caption: 'Put the marker in the blue box | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/remove_gloves_and_place_on_table (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/remove_gloves_and_place_on_table (real).m3u8',
        caption: 'Remove the pair of gloves from the open drawer and put it on the table | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/place_marker_on_table (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/place_marker_on_table (real).m3u8',
        caption: 'Put the marker on table | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/towel_on_cup (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/towel_on_cup (real).m3u8',
        caption: 'Put the towel on the white cup | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/towel_on_pan (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/towel_on_pan (real).m3u8',
        caption: 'Put the towel in the pan | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/put_the_hat_on_the_table (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/put_the_hat_on_the_table (real).m3u8',
        caption: 'Put the hat on the table | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/put_the_pair_of_scissors_in_the_drawer (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/put_the_pair_of_scissors_in_the_drawer (real).m3u8',
        caption: 'Put the pair of scissors into the drawer | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/towel_in_basket (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/towel_in_basket (real).m3u8',
        caption: 'Put the towel in the basket | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/move_bowl_to_right (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/move_bowl_to_right (real).m3u8',
        caption: 'Move the bowl on the left to the right side of the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/pencil_in_bowl (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/pencil_in_bowl (real).m3u8',
        caption: 'Pick up the pencil and put it on the bowl | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/marker_in_bowl (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/marker_in_bowl (real).m3u8',
        caption: 'Pick the marker up from the table and put it in the bowl | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/bowl_next_to_marker (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/bowl_next_to_marker (real).m3u8',
        caption: 'Place the bowl next to the marker | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/remove_lemon_from_bowl (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/remove_lemon_from_bowl (real).m3u8',
        caption: 'Remove a lemon from the bowl | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/move_grapes_to_the_left (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/move_grapes_to_the_left (real).m3u8',
        caption: 'Move the grapes to the left | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/move_green_grapes_backward (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/move_green_grapes_backward (real).m3u8',
        caption: 'Move the green grapes backwards | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/toast_bread (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/toast_bread (real).m3u8',
        caption: 'Put the bread inside the toaster | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/serve_banana (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/serve_banana (real).m3u8',
        caption: 'Put the banana on the green plate | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/stack_cubes (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/stack_cubes (real).m3u8',
        caption: 'Put the ‘red’ cube on ‘top’ of the yellow cube | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/slide_plate (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/slide_plate (real).m3u8',
        caption: 'Slide plate to left side of table | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/place_apple_in_basket (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/place_apple_in_basket (real).m3u8',
        caption: 'Pick up the apple and put it in the basket | ❌'
      },
    ],
  },
  droid_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0010_Withdraw toast (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0010_Withdraw toast.m3u8',
        caption: 'Withdraw the bread from the toaster and place on the plate | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/hook_the_hat (real).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/hook_the_hat (real).m3u8',
        caption: 'Hook the hat onto the tripod | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0017_Fry vegetables (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0017_Fry vegetables.m3u8',
        caption: 'Fry the vegetables in the pan with the spatula | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0016_Elevate block (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-00016_Elevate block.m3u8',
        caption: 'Elevate the yellow block to the highest platform | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0002_Fan the food (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0002_Fan the food.m3u8',
        caption: 'Fan the burger | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/depress_lever (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/depress_lever (real).m3u8',
        caption: 'Depress the lever on the toaster | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0005_Extricate straw (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0005_Extricate straw.m3u8',
        caption: 'Extricate the straw from the cup | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/affix_magnet (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/affix_magnet (real).m3u8',
        caption: 'Affix the magnet to the tray | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0009_Pinch binder clip (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0009_Pinch binder clip.m3u8',
        caption: 'Pinch the binder clip to release the papers | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/orient_the_cup (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/orient_the_cup (real).m3u8',
        caption: 'Orient the mug so the handle is to the right | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0004_Type _hi_ (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0004_Type _hi_.m3u8',
        caption: 'Type \'hi\' on the keyboard | ⚠️'
      },
      
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/match_the_objects (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/match_the_objects (real).m3u8',
        caption: 'Match the objects to their corresponding bowl | ⚠️'
      },  
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0019_Combine nuts and batteries (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0019_Combine nuts and batteries.m3u8',
        caption: 'Combine the nuts and batteries into the bowl | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/dispense_mustard (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/dispense_mustard (real).m3u8',
        caption: 'Dispense the mustard onto the bread | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0013_Bake the croissant (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0013_Bake the croissant.m3u8',
        caption: 'Bake the croissant in the oven | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0014_Cinch drawstring (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0011_Cinch drawstring.m3u8',
        caption: 'Cinch the drawstring of the bag | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0015_Weave wire (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0015_Weave wire.m3u8',
        caption: 'Weave the wire through the holes of the box | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0020_Reveal object (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0020_Reveal object.m3u8',
        caption: 'Reveal the object under the cup | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0007_Maneuver shape (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0007_Maneuver shape.m3u8',
        caption: 'Maneuver the blocks through the matching hole | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0003_Slice bread (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0003_Slice bread.m3u8',
        caption: 'Slice the bread with the knife | ❌'
      },
    ],
  },
};

// Platform videos for carousel
// Interactive Prompting videos
export const YamVideos = [
  {
    id: 'noodle',
    label: 'Cup Noodle to Paper Bag',
    policyRolloutVideo: '/labs/gear/videos/yam/hsl/3_noodle.m3u8',
    prompt: 'Put the cup noodle in the paper bag | ✅',
  },
  {
    id: 'banana',
    label: 'Banana to Shelf',
    policyRolloutVideo: '/labs/gear/videos/yam/hsl/4_banana.m3u8',
    prompt: 'Pick up the banana and put it in the wooden shelf | ✅',
  },
  {
    id: 'teddy',
    label: 'Pick up Teddy Bear',
    policyRolloutVideo: '/labs/gear/videos/yam/hsl/1_teddy.m3u8',
    prompt: 'Pick up the teddy bear | ✅',
  },
  {
    id: 'orange',
    label: 'Orange to Pumpkin',
    policyRolloutVideo: '/labs/gear/videos/yam/hsl/2_orange.m3u8',
    prompt: 'Pick up the orange and put it in the pumpkin | ✅',
  },
];

export const InteractivePromptingVideos = [
  {
    id: 'push_elevator',
    label: 'Push Elevator Button',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Open_the_elevator.m3u8',
    prompt: 'Move forward and press the elevator button with right arm',
  },
  {
    id: 'pop_balloon',
    label: 'Pop the Balloon',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Balloon_pop.m3u8',
    prompt: 'Pick up the knife with right arm and pop the balloon with the knife',
  },
  {
    id: 'play_foosball',
    label: 'Play Foosball',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Play_foosball.m3u8',
    prompt: 'Play foosball with left arm',
  },
  {
    id: 'pull_cart',
    label: 'Pull Cart',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Pull_the_cart.m3u8',
    prompt: 'Grab the cart with both arms and move backwards',
  },
  {
    id: 'insert_lab',
    label: 'Insert Lab Equipment',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Lab_Equipment_Insertion.m3u8',
    prompt: 'Take the tube from the human\'s hand and place it into the tube holder',
  },
  {
    id: 'water_plant',
    label: 'Water Plant',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Water_the_plant.m3u8',
    prompt: 'Water the plant',
  },
  {
    id: 'lost_found',
    label: 'Place in Lost & Found',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Lost_and_Found.m3u8',
    prompt: 'Pick up a forgotten pair of glasses and bring them to the \"Lost and Found\" box',
  },
  {
    id: 'open_door',
    label: 'Open the Door',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Open_the_door.m3u8',
    prompt: 'Move forward and open the door',
  },
  {
    id: 'whisk_bowl',
    label: 'Whisk the Bowl',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Whisk_the_bowl.m3u8',
    prompt: 'Right arm whisks the bowl',
  },
  {
    id: 'scan_snack',
    label: 'Scan the Snack',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Scan_snack.m3u8',
    prompt: 'Pick up the snack with right arm and scan it',
  },
  {
    id: 'pool_table',
    label: 'Play Pool',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/pool_table.m3u8',
    prompt: 'Place billiards ball into pool rack',
  },
  {
    id: 'arrange_pillow',
    label: 'Arrange the Pillow',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/arrange_pillow.m3u8',
    prompt: 'Arrange couch pillow',
  },
  {
    id: 'bush',
    label: 'Put Fruit in Basket',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/bush.m3u8',
    prompt: 'Place fruit from bush into basket',
  },
  {
    id: 'wipe_counter',
    label: 'Wipe the Counter',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/wipe_counter.m3u8',
    prompt: 'Use right arm to wipe water on counter with towel',
  },
  {
    id: 'paper_towel',
    label: 'Pull Paper Towel',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/paper_towel.m3u8',
    prompt: 'Pull paper towel out of dispenser with right arm',
  },
];


// Platform videos for carousel
export const InferenceVideos = {
  dreamzero: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_16step_nochunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_16step_nochunk+sync.m3u8',
        caption: 'DreamZero (16 diffusion step)'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_16step_chunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_16step_chunk+sync.m3u8',
        caption: 'DreamZero (16 diffusion step) + action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_16step_chunk+async_drop_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_16step_chunk+async_drop.m3u8',
        caption: 'DreamZero (16 diffusion step) + async & action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_4step_nochunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_4step_nochunk+sync.m3u8',
        caption: 'DreamZero (4 diffusion step)'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_4step_chunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_4step_chunk+sync.m3u8',
        caption: 'DreamZero (4 diffusion step) + action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_4step_chunk+async_drop_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_4step_chunk+async_drop.m3u8',
        caption: 'DreamZero (4 diffusion step) + async & action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_1step_nochunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/tidying_1step_nochunk+sync.m3u8',
        caption: 'DreamZero (1 diffusion step)'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/5.483_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/5.483_DZ_sync_chunk.m3u8',
        caption: 'DreamZero (1 diffusion step) + action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/6.484_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/6.484_DZ_async_chunk.m3u8',
        caption: 'DreamZero (1 diffusion step) + async & action chunk smoothing'
      },
    ],
  },
  dreamzero_flash: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_16step_nochunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_16step_nochunk+sync.m3u8',
        caption: 'DreamZero-flash (16 diffusion step)'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_16step_chunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_16step_chunk+sync.m3u8',
        caption: 'DreamZero-flash (16 diffusion step) + action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_16step_chunk+async_drop_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_16step_chunk+async_drop.m3u8',
        caption: 'DreamZero-flash (16 diffusion step) + async & action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_4step_nochunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_4step_nochunk+sync.m3u8',
        caption: 'DreamZero-flash (4 diffusion step)'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_4step_chunk+sync_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_4step_chunk+sync.m3u8',
        caption: 'DreamZero-flash (4 diffusion step) + action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_4step_chunk+async_drop_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/flash_tidying_4step_chunk+async_drop.m3u8',
        caption: 'DreamZero-flash (4 diffusion step) + async & action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/1.471-1_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/1.471-1_DZF_sync_no_chunk.m3u8',
        caption: 'DreamZero-flash (1 diffusion step)'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/2.477_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/2.477_DZF_sync_chunk.m3u8',
        caption: 'DreamZero-flash (1 diffusion step) + action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/3.471-2_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/3.471-2_DZF_async_chunk.m3u8',
        caption: 'DreamZero-flash (1 diffusion step) + async & action chunk smoothing'
      },
    ],
  },
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
