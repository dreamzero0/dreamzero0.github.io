// Sample video options for the selector

// Define direct S3 URLs for videos
// Using pre-signed URLs for direct access to S3 objects
// Note: In a production app, these would be generated on the server with proper expiration times
// const vid1 = '/labs/gear/videos//behavior/dreams/hsl/microwave_fast2.m3u8';
// const vid2 = '/labs/gear/videos//behavior/policy/ours/hsl/microwave_fast.m3u8';


// Combined behavior + environment videos
export const combinedVideos = [
  {
    id: 'fruit_packing',
    label: 'Fruit packing (10 fruits)',
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/hsl/DreamZero_AgiBotPostTrain_FruitPacking_2x.m3u8',
  },
  {
    id: 'table_bussing',
    label: 'Table Bussing (5 trash & 5 dishware)',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/lift_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/hsl/DreamZero_AgiBotPostTrain_Tidying_2x.m3u8',
  },
  {
    id: 'shirt_folding',
    label: 'Shirt Folding',
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
        caption: 'The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_002_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_002.m3u8',
        caption: 'The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_003_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_003.m3u8',
        caption: 'The left arm picks up the lime on the table and places it on the light green plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_004_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_004.m3u8',
        caption: 'The right arm picks up the red apple on the table and places it on the gray towel. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_005_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_005.m3u8',
        caption: 'The left arm picks up the peach on the table and places it on the baking pan. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_006_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_006.m3u8',
        caption: 'The right arm picks up the red apple on the table and places it on the cutting board. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_007_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_007.m3u8',
        caption: 'The left arm picks up the green pear on the table and places it on the blue checkered bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_008_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_008.m3u8',
        caption: 'The right arm picks up the starfruit on the table and places it on the cloth basket. | ✅'
      },
    ],
  },
  seen_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_012_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_012.m3u8',
        caption: 'Both arms fold the bottom of the white short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_009_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_009.m3u8',
        caption: 'Both arms grip the bottom of the light grey short sleeve and fold it toward the middle. They then pull the short sleeve across the table to the edge. Next, both arms grasp the top of the shirt and fold it down to the middle. Finally, the right arm grips the collar and folds it down to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_010_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_010.m3u8',
        caption: 'Both arms fold the bottom of the black short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the left arm grasps the collar and folds it down to finish. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_011_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_011.m3u8',
        caption: 'Both arms fold the bottom of the green short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ⚠️'
      },      
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_013_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_013.m3u8',
        caption: 'Both arms fold the bottom of the logo short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_015_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_015.m3u8',
        caption: 'Both arms fold the bottom of the gray short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the left arm grasps the collar and folds it down to finish. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_016_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_016.m3u8',
        caption: 'Both arms fold the bottom of the blue short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ⚠️'
      },
    ],
  },
  seen_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_017_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_017.m3u8',
        caption: 'Both arms fold the bottom of the tan shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_018_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_018.m3u8',
        caption: 'Both arms fold the bottom of the camo-grey shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_021_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_021.m3u8',
        caption: 'Both arms fold the bottom of the white shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_019_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_019.m3u8',
        caption: 'Both arms fold the bottom of the grey shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_020_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_020.m3u8',
        caption: 'Both arms fold the bottom of the red shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_022_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_022.m3u8',
        caption: 'Both arms fold the bottom of the dark blue shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_023_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_023.m3u8',
        caption: 'Both arms fold the bottom of the green shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_024_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_024.m3u8',
        caption: 'Both arms fold the bottom of the teal shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
    ],
  },
  seen_4: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_025_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_025.m3u8',
        caption: 'Both arms pick up the black shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_026_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_026.m3u8',
        caption: 'Both arms pick up the folded yellow shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_027_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_027.m3u8',
        caption: 'Both arms pick up the white shirt and place it on the gray towel. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_028_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_028.m3u8',
        caption: 'Both arms pick up the green shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_029_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_029.m3u8',
        caption: 'Both arms pick up the black hoodie and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_031_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_031.m3u8',
        caption: 'Both arms pick up the dark gray shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_032_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_032.m3u8',
        caption: 'Both arms pick up the blue shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_030_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_030.m3u8',
        caption: 'Both arms pick up the gray logo shirt and place it on the stack of clothes. | ⚠️'
      },
    ],
  },
  seen_5: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_033_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_033.m3u8',
        caption: 'The left arm picks up the Pink Fork from the table and places it onto the blue plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_034_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_034.m3u8',
        caption: 'The right arm picks up the Pink Spoon from the table and places it into the brown packing box. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_036_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_036.m3u8',
        caption: 'The right arm picks up the  orange spoon from the table and places it into the green plastic mug | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_037_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_037.m3u8',
        caption: 'The left arm picks up the light blue fork from the table and places it onto the orange plate | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_038_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_038.m3u8',
        caption: 'The right arm picks up the blue spoon from the table and places it into the red hat | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_039_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_039.m3u8',
        caption: 'The left arm picks up the green fork from the table and places it into the blue plate.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_040_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_040.m3u8',
        caption: 'The right arm picks up the spoon from the table and places it into the pink bowl | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_035_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_035.m3u8',
        caption: 'The left arm picks up the orange fork from the table and places it into the glass cup | ⚠️'
      },
    ],
  },
  seen_6: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_041_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_041.m3u8',
        caption: 'The left arm picks up the Mango from the plastic bag and places it into the Wooden Basket | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_042_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_042.m3u8',
        caption: 'The right arm picks up the Green Pear from the plastic bag and places it into the wooden bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_043_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_043.m3u8',
        caption: 'The left arm picks up the yellow pear from the plastic bag and places it onto the blue tray. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_044_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_044.m3u8',
        caption: 'The right arm picks up the red apple from the plastic bag and places it into the green tray. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_045_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_045.m3u8',
        caption: 'The left arm picks up the purple grapes from the plastic bag and places it into the brown basket. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_046_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_046.m3u8',
        caption: 'The right arm picks up the peach from the plastic bag and places it into the brown bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_047_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_047.m3u8',
        caption: 'The left arm picks up the watermelon from the plastic bag and places it onto the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_048_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_048.m3u8',
        caption: 'The right arm picks up the starfruit from the plastic bag and places it into the pink bowl. | ✅'
      },
    ],
  },
  seen_7: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_049_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_049.m3u8',
        caption: 'The left arm picks up the Red Marker pen from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_050_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_050.m3u8',
        caption: 'The right arm picked up the Black Marker pen from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_053_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_053.m3u8',
        caption: 'The left arm picked up the white marker pen from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_054_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_054.m3u8',
        caption: 'The right arm picked up the purple pen from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_055_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_055.m3u8',
        caption: 'The left arm picked up the mechanical pencil from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_051_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_051.m3u8',
        caption: 'The left arm picked up the black marker from the table and placed it into the pen holder. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_056_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_056.m3u8',
        caption: 'The right arm picked up the blue pen from the table and placed it into the pen holder. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_052_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_052.m3u8',
        caption: 'The right arm picked up the yellow pen from the table and placed it into the pen holder. | ❌'
      },
    ],
  },
  seen_8: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_057_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_057.m3u8',
        caption: 'The left arm picks up the clear cup from the table and places it on the grey coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_059_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_059.m3u8',
        caption: 'The left arm picks up the plastic cup from the table and places it on the blue coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_060_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_060.m3u8',
        caption: 'The right arm picks up the paper cup from the table and places it on the blue coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_061_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_061.m3u8',
        caption: 'The left arm picks up the plastic cup from the table and places it on the white coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_062_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_062.m3u8',
        caption: 'The right arm picks up the paper cup from the table and places it on the white coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_063_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_063.m3u8',
        caption: 'The left arm picks up the blue cup from the table and places it on the gray coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_058_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_058.m3u8',
        caption: 'The right arm picks up the pink cup from the table and places it on the grey coaster. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_064_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_064.m3u8',
        caption: 'The right arm picks up the green cup from the table and places it on the gray coaster. | ❌'
      },
    ],
  },
  seen_9: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_065_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_065.m3u8',
        caption: 'The left arm uses a sponge to wipe the coffee spill off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_066_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_066.m3u8',
        caption: 'The right arm uses a grey towel to wipe the brown sugar off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_067_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_067.m3u8',
        caption: 'The left arm used a black cloth to wipe the white powder off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_068_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_068.m3u8',
        caption: 'The right arm used a board eraser to wipe the red marking off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_069_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_069.m3u8',
        caption: 'The left arm uses a napkin to wipe the creamer spill off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_070_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_070.m3u8',
        caption: 'The right arm uses a baby wipe to wipe the ketchup spill off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_071_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_071.m3u8',
        caption: 'The left arm used a paper towel to wipe the water off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_072_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_072.m3u8',
        caption: 'The right arm used a disinfecting wipe to wipe the fruit juice off the table. | ✅'
      },
    ],
  },
  seen_10: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_073_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_073.m3u8',
        caption: 'The robot reaches to grip the green bowl, moves it to the middle wooden bowl, and releases it to stack. It then reaches to grip the white bowl, moves it to the same location, and releases it onto the stack. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_074_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_074.m3u8',
        caption: 'The robot reaches its right arm to grip the red cup, moves it over the middle clear cup, and releases it to stack. It then reaches its right arm to grip the pink cup, moves it over the stack, and releases it to finish the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_075_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_075.m3u8',
        caption: 'The robot reaches its left arm to grip the blue plate, moves it to the middle light green plate, and releases it to stack. It then reaches its right arm to grip the red plate, moves it over the middle stack of plates, and releases it to finish the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_076_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_076.m3u8',
        caption: 'The robot reaches its right arm to grip the green cup, moves it over the middle blue tray, and releases it to stack. It then reaches its right arm to grip the paper cup, moves it over the stack, and releases it to finish the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_077_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_077.m3u8',
        caption: 'The robot reaches its left arm to grip the paper bowl, moves it over the middle white bowl, and releases it to stack. It then reaches its left arm to grip the blue checkered bowl, moves it over the stack, and releases it to finish the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_079_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_079.m3u8',
        caption: 'The robot reaches its left arm to grip the pink bowl, moves it over the middle beige bowl, and releases it to stack. It then reaches its left arm to grip the white bowl, moves it over the stack, and releases it onto the stack. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_080_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_080.m3u8',
        caption: 'The robot reaches its right arm to grip the beige cup, moves it over the middle green cup, and releases it to stack. It then reaches its right arm to grip the red cup, moves it over the stack, and releases it to finish the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_078_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_078.m3u8',
        caption: 'The robot reaches its right arm to grip the paper cup, moves it to the bottom right plastic cup, and releases it to stack. It then reaches its right arm to grip the top right plastic cup, moves it over the stack, and releases it to finish the task. | ❌'
      },
    ],
  },
};

// Platform videos for carousel
export const UnseenVideos = {
  unseen_1: { // Untie Shoe/gift
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_001_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_001.m3u8',
        caption: 'The robot coordinates both arms to simultaneously grasp the two loops of the shoelace. It then moves both arms outward in synchronized, opposing directions until the shoelace is fully untied. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_002_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_002.m3u8',
        caption: 'The robot coordinates both arms to simultaneously grasp the two loops of the black rope. It then moves both arms outward in synchronized, opposing directions until the black rope is fully untied. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_003_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_003.m3u8',
        caption: 'The robot reaches its left arm to grasp the blue box and hold it steady. It then reaches its right arm toward the blue ribbon and moves it to untie the knot. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_004_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_004.m3u8',
        caption: 'The robot reaches its left arm to grasp the white box and hold it steady. It then reaches its right arm toward the red ribbon and moves it to untie the knot. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_006_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_006.m3u8',
        caption: 'The robot coordinates both arms to simultaneously grasp the two loops of the shoe. It then moves both arms outward in synchronized, opposing directions until the knot of the shoe is fully untied. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_007_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_007.m3u8',
        caption: 'The robot coordinates both arms to simultaneously grasp the two loops of the knot of the package. It then moves both arms outward in synchronized, opposing directions until the knot of the package is fully untied. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_008_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_008.m3u8',
        caption: 'The robot coordinates both arms to simultaneously grasp the two loops of the knot of the present box. It then moves both arms outward in synchronized, opposing directions until the knot of the package is fully untied. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_005_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_005.m3u8',
        caption: 'The robot coordinates both arms to simultaneously grasp the two loops of the knot of the box. It then moves both arms outward in synchronized, opposing directions until the knot of the box is fully untied. | ❌'
      },
    ],
  },
  unseen_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_009_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_009.m3u8',
        caption: 'The robot reaches its right arm to gasp the crown and lifts it to remove it from the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_011_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_011.m3u8',
        caption: 'The robot reaches its left arm to grasp the hat and lifts it to remove it from the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_012_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_012.m3u8',
        caption: 'The robot reaches its left arm to lift the hat & place it on the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_013_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_013.m3u8',
        caption: 'The robot reaches its left arm to grasp the hat and lifts it to remove it from the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_014_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_014.m3u8',
        caption: 'The robot reaches its right arm to grasp the hat and lifts it to remove it from the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_015_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_015.m3u8',
        caption: 'The robot reaches its left arm to grasp the hat and lifts it to remove it from the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_016_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_016.m3u8',
        caption: 'The robot reaches its right arm to lift the hat & place it on the mannequin\'s head. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_010_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_010.m3u8',
        caption: 'The robot reaches its left arm to gasp the hat and lifts it to put it on the mannequin\'s head. | ⚠️'
      },
    ],
  },
  unseen_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_017_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_017.m3u8',
        caption: 'The robot reaches its left arm to pick up the red marker and the left arm moves the marker to draw a circle on the book. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_018_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_018.m3u8',
        caption: 'The robot reaches its right arm to pick up the blue marker and the right arm moves the marker to draw a circle on the book. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_019_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_019.m3u8',
        caption: 'The robot reaches its right arm to pick up the marker and the right arm  draws a circle on the whiteboard with the marker. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_020_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_020.m3u8',
        caption: 'The robot reaches its left arm to pick up the marker and the left arm  draws a circle on the whiteboard with the marker.  | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_021_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_021.m3u8',
        caption: 'The robot reaches its left arm to pick up the black marker and the left arm moves the marker to draw a circle on the paper | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_022_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_022.m3u8',
        caption: 'The robot reaches its right arm arm to pick up the red marker and the right arm moves the marker to draw a circle on the paper | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_023_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_023.m3u8',
        caption: 'The robot reaches its right arm to pick up the black marker and the right arm moves the marker to draw a llne on the whiteboard. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_024_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_024.m3u8',
        caption: 'The robot reaches its right arm to pick up the red marker placed on the desk and the right arm uses the marker to draw a llne on the notebook. | ❌'
      },
    ],
  },
  unseen_4: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_025_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_025.m3u8',
        caption: 'The left arm holds the cup on the table. Then the right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_026_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_026.m3u8',
        caption: 'The right arm holds the McDonalds cup on the table. Then the left arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_027_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_027.m3u8',
        caption: 'The left arm holds the cup on the table. Then the right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_028_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_028.m3u8',
        caption: 'The left arm holds the cup on the table. Then the right arm pulls the straw out of the cup.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_029_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_029.m3u8',
        caption: 'The left arm holds the cup on the table. Then the right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_030_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_030.m3u8',
        caption: 'The left arm holds the cup on the table. Then the right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_032_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_032.m3u8',
        caption: 'The right arm holds the cup on the table. Then the left arm pulls the straw out of the cup. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_031_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_031.m3u8',
        caption: 'The right arm holds the cup on the table. Then the left arm pulls the straw out of the cup. | ❌'
      },
    ],
  },
  unseen_5: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_033_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_033.m3u8',
        caption: 'The robot reaches its right arm to pick up the green cube, moves it over the red cube, and releases it to stack. It then reaches its right arm to pick up the yellow cube, moves it over the stack, and releases it onto the green cube to finish the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_035_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_035.m3u8',
        caption: 'The robot reaches its right arm to pick up the red cube, moves it over the colorful cube, and releases it to stack. It then reaches its right arm to pick up the green cube, moves it over the red cube, and releases it to finish the tower. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_037_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_037.m3u8',
        caption: 'The robot reaches its right arm to pick up the white cube, moves it over the green cube, and releases it to stack. It then reaches its left arm to pick up the blue cube, moves it over the stack, and releases it onto the white cube to finish the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_039_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_039.m3u8',
        caption: 'The robot reaches its right arm to pick up the red cube, moves it over the blue cube, and releases it to begin the stack. It then reaches its left arm to pick up the orange cube, moves it over the stack, and releases it onto the red cube to complete the three-tier structure. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_040_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_040.m3u8',
        caption: 'The robot reaches its right arm to pick up the orange cube, moves it over the blue cube, and releases it to begin the stack. It then reaches its left arm to pick up the triangle puzzle, moves it over the stack, and releases it onto the orange cube to complete the three-tier structure. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_034_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_034.m3u8',
        caption: 'The robot reaches its right arm to pick up the pink lego, moves it over the red lego, and releases it to stack. It then reaches its right arm to pick up the blue lego, moves it over the stack, and releases it onto the pink lego to finish the task. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_038_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_038.m3u8',
        caption: 'The robot reaches its right arm to pick up the blue cube, moves it over the light green cube, and releases it to stack. It then reaches its left arm to pick up the dark green cube, moves it over the light green cube, and releases it to finish the tower. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_036_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_036.m3u8',
        caption: 'The robot reaches its left arm to pick up the green cube, moves it over the red cube, and releases it to stack. It then reaches its left arm to pick up the orange cube, moves it over the green cube, and releases it to finish the tower. | ❌'
      },
    ],
  },
  unseen_6: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_041_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_041.m3u8',
        caption: 'The left arm grabs the brush. Then left arm paints with the brush on the notebook | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_044_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_044.m3u8',
        caption: 'The left arm grabs the brush. Then left arm paints with the brush on the paper | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_043_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_043.m3u8',
        caption: 'The right arm grabs the brush. Then right arm paints with the brush on the paper | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_047_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_047.m3u8',
        caption: 'The right arm grabs the brush. Then right arm paints with the brush on the notebook | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_048_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_048.m3u8',
        caption: 'The left arm grabs the brush. Then left arm paints with the brush on the notebook | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_042_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_042.m3u8',
        caption: 'The right arm grabs the brush. Then right arm paints with the brush on the notebook | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_045_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_045.m3u8',
        caption: 'The left arm grabs the brush. Then left arm paints with the brush on the notebook | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_046_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_046.m3u8',
        caption: 'The right arm grabs the brush. Then right arm paints with the brush on the notebook | ❌'
      },
    ],
  },
  unseen_7: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_049_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_049.m3u8',
        caption: 'The robot reaches its left arm to grasp the iron and moves it across the shorts to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_050_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_050.m3u8',
        caption: 'The robot reaches its right arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_051_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_051.m3u8',
        caption: 'The robot reaches its right arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_052_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_052.m3u8',
        caption: 'The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_053_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_053.m3u8',
        caption: 'The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_054_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_054.m3u8',
        caption: 'The robot reaches its left arm to grasp the iron and moves it across the shorts to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_055_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_055.m3u8',
        caption: 'The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_056_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_056.m3u8',
        caption: 'The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it. | ✅s'
      },
    ],
  },
  unseen_8: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_057_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_057.m3u8',
        caption: 'The right arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_058_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_058.m3u8',
        caption: 'The left arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_059_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_059.m3u8',
        caption: 'The left arm shakes the hand of the human up and down | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_060_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_060.m3u8',
        caption: 'The right arm shakes the hand of the human up and down  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_062_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_062.m3u8',
        caption: 'The left arm shakes the hand of the human up and down | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_064_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_064.m3u8',
        caption: 'The right arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_063_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_063.m3u8',
        caption: 'The left arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_061_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_061.m3u8',
        caption: 'The right arm shakes the hand of the human up and down | ❌'
      },
    ],
  },
  unseen_9: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_066_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_066.m3u8',
        caption: 'The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_067_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_067.m3u8',
        caption: 'The left arm grabs the left side of the map. The right arm folds the right side of the map. The left arm folds the left side of the map. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_068_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_068.m3u8',
        caption: 'The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_069_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/SYNCUNSEEN_069.m3u8',
        caption: 'The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_070_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_070.m3u8',
        caption: 'The left arm grabs the right side of the map. The right arm folds the left side of the map. The right arm folds the left side of the map. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_071_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_071.m3u8',
        caption: 'The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_072_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_072.m3u8',
        caption: 'The left arm grabs the right side of the map. The right arm folds the left side of the map. The right arm folds the left side of the map. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_065_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_065.m3u8',
        caption: 'The left arm grabs the left side of the map. The right arm folds the right side of the map. The left arm folds the left side of the map. | ❌'
      },
    ],
  },
  unseen_10: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_073_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_073.m3u8',
        caption: 'The robot reaches its right arm to grasp the cart and pulls it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_074_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_074.m3u8',
        caption: 'The robot reaches its left arm to grasp the cart and pushes it forward. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_075_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_075.m3u8',
        caption: 'The robot reaches its left arm to grasp the cart and pulls it forward. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_076_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_076.m3u8',
        caption: 'The robot reaches its left arm to grasp the cart and pulls it.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_079_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_079.m3u8',
        caption: 'The robot reaches its left arm to grasp the cart and pulls it back. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_080_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_080.m3u8',
        caption: 'The robot reaches its right arm to grasp the cart and pulls it back. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_077_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_077.m3u8',
        caption: 'The robot reaches its right arm to grasp the cart and pulls it forward. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_078_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/ASYNCUNSEEN_078.m3u8',
        caption: 'The robot reaches its left arm to grasp the cart and pulls it forward. | ⚠️'
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
        generatedUrl: '/labs/gear/videos/droid/hsl/place_apple_in_basket (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/place_apple_in_basket (real).m3u8',
        caption: 'Pick up the apple and put it in the basket | ✅'
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
        generatedUrl: '/labs/gear/videos/droid/hsl/affix_magnet (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/affix_magnet (real).m3u8',
        caption: 'Affix the magnet to the tray | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0009_Pinch binder clip (AI).m3u8',
        executionUrl: '/labs/gear/videos/droid/hsl/V1-0009_Pinch binder clip.m3u8',
        caption: 'Pinch the binder clip to release the papers | ⚠️'
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
        generatedUrl: '/labs/gear/videos/droid/hsl/V1-0014_Depress lever (AI).m3u8',
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
export const InteractivePromptingVideos = [
  {
    id: 'push_elevator',
    label: 'Push Elevator Button',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Open_the_elevator.m3u8',
  },
  {
    id: 'pop_balloon',
    label: 'Pop the Balloon',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Balloon_pop.m3u8',
  },
  {
    id: 'pull_cart',
    label: 'Pull Cart',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Pull_the_cart.m3u8',
  },
  {
    id: 'insert_lab',
    label: 'Insert Lab Equipment',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Lab_Equipment_Insertion.m3u8',
  },
  {
    id: 'water_plant',
    label: 'Water Plant',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Water_the_plant.m3u8',
  },
  {
    id: 'lost_found',
    label: 'Place in Lost & Found',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Lost_and_Found.m3u8',
  },
  {
    id: 'match_shape',
    label: 'Match Shape',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Maneuver_shape.m3u8',
  },
  {
    id: 'open_door',
    label: 'Open the Door',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Open_the_door.m3u8',
  },
  {
    id: 'whisk_bowl',
    label: 'Whisk the Bowl',
    policyRolloutVideo: '/labs/gear/videos/agi_interactive_prompting/hsl/Whisk_the_bowl.m3u8',
  },
];


// Platform videos for carousel
export const InferenceVideos = {
  dreamzero: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_inference_ablation/hsl/',
        executionUrl: '/labs/gear/videos/agi_inference_ablation/hsl/4.465_DZ_sync_no_chunk.m3u8',
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
