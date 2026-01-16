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
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/hsl/DreanZero_AgiBotPostTrain_ShirtFolding_2x.m3u8',
  },
];

// Platform videos for carousel
export const SeenVideos = {
  seen_1: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_001_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_001.m3u8',
        caption: 'Robot #3 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_002_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_002.m3u8',
        caption: 'Robot #3 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_003_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_003.m3u8',
        caption: 'Robot #3 | The left arm picks up the lime on the table and places it on the light green plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_004_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_004.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the gray towel. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_005_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_005.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_006_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_006.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_007_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_007.m3u8',
        caption: 'Robot #3 | The left arm picks up the green pear on the table and places it on the blue checkered bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_008_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_008.m3u8',
        caption: 'Robot #3 | The right arm picks up the starfruit on the table and places it on the cloth basket. | ✅'
      },
    ],
  },
  seen_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_009_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_009.m3u8',
        caption: 'Robot #3 | Both arms grip the bottom of the light grey short sleeve and fold it toward the middle. They then pull the short sleeve across the table to the edge. Next, both arms grasp the top of the shirt and fold it down to the middle. Finally, the right arm grips the collar and folds it down to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_010_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_010.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the black short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the left arm grasps the collar and folds it down to finish. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_011_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_011.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the green short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_012_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_012.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the white short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_013_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_013.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the logo short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_014_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_014.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the teal short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_015_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_015.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the gray short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the left arm grasps the collar and folds it down to finish. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_016_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_016.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the blue short sleeve to the middle. They then pull the shirt toward the edge of the table. Next, both arms fold the top of the shirt down to the middle. Finally, the right arm grasps the collar and folds it down to complete the task. | ⚠️'
      },
    ],
  },
  seen_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_017_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_017.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the tan shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_018_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_018.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the camo-grey shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_019_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_019.m3u8',
        caption: 'Robot #2 | Both arms fold the bottom of the grey shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_020_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_020.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the red shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_021_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_021.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the white shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_022_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_022.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the dark blue shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_023_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_023.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the green shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_024_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_024.m3u8',
        caption: 'Robot #3 | Both arms fold the bottom of the teal shorts toward the middle. Then, the right arm folds the shorts in half from right to left to complete the fold. | ⚠️'
      },
    ],
  },
  seen_4: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_025_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_025.m3u8',
        caption: 'Robot #1 | Both arms pick up the black shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_026_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_026.m3u8',
        caption: 'Robot #3 | Both arms pick up the folded yellow shirt and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_027_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_027.m3u8',
        caption: 'Robot #2 | Both arms pick up the white shirt and place it on the gray towel. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_028_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_028.m3u8',
        caption: 'Robot #3 | Both arms pick up the green shirt and place it on the stack of clothes. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_029_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_029.m3u8',
        caption: 'Robot #3 | Both arms pick up the black hoodie and place it on the stack of clothes. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_030_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_030.m3u8',
        caption: 'Robot #3 | Both arms pick up the gray logo shirt and place it on the stack of clothes. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_031_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_031.m3u8',
        caption: 'Robot #3 | Both arms pick up the dark gray shirt and place it on the stack of clothes. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_032_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_032.m3u8',
        caption: 'Robot #3 | Both arms pick up the blue shirt and place it on the stack of clothes. | ⚠️'
      },
    ],
  },
  seen_5: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_033_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_033.m3u8',
        caption: 'Robot #3 | The left arm picks up the Pink Fork from the table and places it onto the blue plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_034_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_034.m3u8',
        caption: 'Robot #3 | The right arm picks up the Pink Spoon from the table and places it into the brown packing box. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_035_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_035.m3u8',
        caption: 'Robot #3 | The left arm picks up the orange fork from the table and places it into the glass cup | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_036_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENSYNC_036.m3u8',
        caption: 'Robot #2 | The right arm picks up the  orange spoon from the table and places it into the green plastic mug | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_037_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_037.m3u8',
        caption: 'Robot #3 | The left arm picks up the light blue fork from the table and places it onto the orange plate | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_038_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_038.m3u8',
        caption: 'Robot #3 | The right arm picks up the blue spoon from the table and places it into the red hat | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_039_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_039.m3u8',
        caption: 'Robot #3 | The left arm picks up the green fork from the table and places it into the blue plate.  | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_040_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_040.m3u8',
        caption: 'Robot #3 | The right arm picks up the spoon from the table and places it into the pink bowl | ✅'
      },
    ],
  },
  seen_6: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_041_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_041.m3u8',
        caption: 'Robot #3 | The left arm picks up the Mango from the plastic bag and places it into the Wooden Basket | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_042_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_042.m3u8',
        caption: 'Robot #3 | The right arm picks up the Green Pear from the plastic bag and places it into the wooden bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_043_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_043.m3u8',
        caption: 'Robot #3 | The left arm picks up the yellow pear from the plastic bag and places it onto the blue tray. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_044_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_044.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple from the plastic bag and places it into the green tray. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_045_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_045.m3u8',
        caption: 'Robot #3 | The left arm picks up the purple grapes from the plastic bag and places it into the brown basket. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_046_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_046.m3u8',
        caption: 'Robot #3 | The right arm picks up the peach from the plastic bag and places it into the brown bowl. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_047_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_047.m3u8',
        caption: 'Robot #3 | The left arm picks up the watermelon from the plastic bag and places it onto the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_048_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_048.m3u8',
        caption: 'Robot #3 | The right arm picks up the starfruit from the plastic bag and places it into the pink bowl. | ✅'
      },
    ],
  },
  seen_7: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_049_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_049.m3u8',
        caption: 'Robot #3 | The left arm picks up the Red Marker pen from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_050_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_050.m3u8',
        caption: 'Robot #3 | The right arm picked up the Black Marker pen from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_051_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_051.m3u8',
        caption: 'Robot #3 | The left arm picked up the black marker from the table and placed it into the pen holder. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_052_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_052.m3u8',
        caption: 'Robot #3 | The right arm picked up the yellow pen from the table and placed it into the pen holder. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_053_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_053.m3u8',
        caption: 'Robot #3 | The left arm picked up the white marker pen from the table and placed it into the pen holder. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_054_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_054.m3u8',
        caption: 'Robot #3 | The right arm picked up the purple pen from the table and placed it into the pen holder. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_055_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_055.m3u8',
        caption: 'Robot #3 | The left arm picked up the mechanical pencil from the table and placed it into the pen holder. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_056_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_056.m3u8',
        caption: 'Robot #3 | The right arm picked up the blue pen from the table and placed it into the pen holder. | ❌'
      },
    ],
  },
  seen_8: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_057_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_057.m3u8',
        caption: 'Robot #3 | The left arm picks up the clear cup from the table and places it on the grey coaster. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_058_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_058.m3u8',
        caption: 'Robot #3 | The right arm picks up the pink cup from the table and places it on the grey coaster. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_059_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_059.m3u8',
        caption: 'Robot #3 | The left arm picks up the plastic cup from the table and places it on the blue coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_060_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_060.m3u8',
        caption: 'Robot #3 | The right arm picks up the paper cup from the table and places it on the blue coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_061_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_061.m3u8',
        caption: 'Robot #3 | The left arm picks up the plastic cup from the table and places it on the white coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_062_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_062.m3u8',
        caption: 'Robot #3 | The right arm picks up the paper cup from the table and places it on the white coaster. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_063_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_063.m3u8',
        caption: 'Robot #3 | The left arm picks up the blue cup from the table and places it on the gray coaster. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_064_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_064.m3u8',
        caption: 'Robot #3 | The right arm picks up the green cup from the table and places it on the gray coaster. | ❌'
      },
    ],
  },
  seen_9: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_065_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_065.m3u8',
        caption: 'Robot #2 | The left arm uses a sponge to wipe the coffee spill off the table. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_066_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_066.m3u8',
        caption: 'Robot #2 | The right arm uses a grey towel to wipe the brown sugar off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_067_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_067.m3u8',
        caption: 'Robot #2 | The left arm used a black cloth to wipe the white powder off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_068_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_068.m3u8',
        caption: 'Robot #2 | The right arm used a board eraser to wipe the red marking off the table. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_069_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_069.m3u8',
        caption: 'Robot #2 | The left arm uses a napkin to wipe the creamer spill off the table. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_070_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_070.m3u8',
        caption: 'Robot #2 | The right arm uses a baby wipe to wipe the ketchup spill off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_071_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_071.m3u8',
        caption: 'Robot #2 | The left arm used a paper towel to wipe the water off the table. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_072_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_072.m3u8',
        caption: 'Robot #2 | The right arm used a disinfecting wipe to wipe the fruit juice off the table. | ✅'
      },
    ],
  },
  seen_10: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_073_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_073.m3u8',
        caption: 'Robot #2 | The robot reaches to grip the green bowl, moves it to the middle wooden bowl, and releases it to stack. It then reaches to grip the white bowl, moves it to the same location, and releases it onto the stack. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_074_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_074.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to grip the red cup, moves it over the middle clear cup, and releases it to stack. It then reaches its right arm to grip the pink cup, moves it over the stack, and releases it to finish the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_075_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_075.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grip the blue plate, moves it to the middle light green plate, and releases it to stack. It then reaches its right arm to grip the red plate, moves it over the middle stack of plates, and releases it to finish the task. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_076_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_076.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to grip the green cup, moves it over the middle blue tray, and releases it to stack. It then reaches its right arm to grip the paper cup, moves it over the stack, and releases it to finish the task. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_077_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_077.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grip the paper bowl, moves it over the middle white bowl, and releases it to stack. It then reaches its left arm to grip the blue checkered bowl, moves it over the stack, and releases it to finish the task. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_078_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_078.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to grip the paper cup, moves it to the bottom right plastic cup, and releases it to stack. It then reaches its right arm to grip the top right plastic cup, moves it over the stack, and releases it to finish the task. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_079_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_079.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grip the pink bowl, moves it over the middle beige bowl, and releases it to stack. It then reaches its left arm to grip the white bowl, moves it over the stack, and releases it onto the stack. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_080_AI.m3u8',
        executionUrl: '/labs/gear/videos/agi_seen/hsl/SEENASYNC_080.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to grip the beige cup, moves it over the middle green cup, and releases it to stack. It then reaches its right arm to grip the red cup, moves it over the stack, and releases it to finish the task. | ⚠️'
      },
    ],
  },
};

// Platform videos for carousel
export const UnseenVideos = {
  unseen_1: { // Untie Shoe/gift
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_003_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_003.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the blue box and hold it steady. It then reaches its right arm toward the blue ribbon and moves it to untie the knot. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_004_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_004.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the white box and hold it steady. It then reaches its right arm toward the red ribbon and moves it to untie the knot. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_4: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_5: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_6: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_7: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_8: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_9: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  unseen_10: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
};

// Platform videos for carousel
export const DroidVideos = {
  droid_1: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  droid_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  droid_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
};

// Platform videos for carousel
export const EmergentVideos = {
  tool_use: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  hri: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  collision_avoidance: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
  visual_reasoning: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.'
      },
    ],
  },
};

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
