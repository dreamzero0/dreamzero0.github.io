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
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/ours/hsl/DreamZero_AgiBotPostTrain_FruitPacking_2x.m3u8',
  },
  {
    id: 'table_bussing',
    label: 'Table Bussing (5 trash & 5 dishware)',
    // neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/lift_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos/agi_post_train/ours/hsl/DreamZero_AgiBotPostTrain_Tidying_2x.m3u8',
  },
  {
    id: 'shirt_folding',
    label: 'Shirt Folding',
    // neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/soup_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos/DreanZero_AgiBotPostTrain_ShirtFolding_2x.m3u8',
  },
];

// Platform videos for carousel
export const SeenVideos = {
  seen_1: {
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
  seen_2: {
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
  seen_3: {
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
  seen_4: {
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
  seen_5: {
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
  seen_6: {
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
  seen_7: {
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
  seen_8: {
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
  seen_9: {
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
  seen_10: {
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
export const UnseenVideos = {
  unseen_1: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_001_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_001.m3u8',
        caption: 'Robot #2 | Both arms grasp the shoelace and untie the shoelace. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_002_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_002.m3u8',
        caption: 'Robot #2 | Both arm grasp the loops of the black rope and untie the black rope. | ✅'
      },
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
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_005_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_005.m3u8',
        caption: 'Robot #2 | Both arm reach to the knot of the box and untie the ribbon | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_006_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_006.m3u8',
        caption: 'Robot #2 | Both arm reach to the shoelace and untie the shoelace. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_007_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_007.m3u8',
        caption: 'Robot #2 | Both arm grasp the loops of the black rope and untie the black rope. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_008_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_008.m3u8',
        caption: 'Robot #2 | Both arm reach to the knot of the gift box and untie the knot of the gift box | ⚠️'
      },
    ],
  },
  unseen_2: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_009_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_009.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to gasp the crown and lifts it to remove it from the mannequin\'s head. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_010_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_010.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to gasp the crown and lifts it to put it on the mannequin\'s head. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_011_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_011.m3u8',
        caption: 'Robot #2 | The left arm removes the hat from the mannequins head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_012_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_012.m3u8',
        caption: 'Robot #2 | The left arm picks up the hat and places it on the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_013_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_013.m3u8',
        caption: 'Robot #2 | The right arm removes the red hat from the mannequins\' head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_014_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_014.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the hat and lifts it to remove it from the mannequin\'s head. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_015_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_015.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the hat and lifts it to remove it from the mannequin\'s head. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_016_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_016.m3u8',
        caption: 'Robot #2 | The right arm picks up the hat and places it on the mannequin\'s head. | ⚠️'
      },
    ],
  },
  unseen_3: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_017_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_017.m3u8',
        caption: 'Robot #4 | The robot reaches its left arm to pick up the red marker and the left arm moves the marker to draw a circle on the book. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_018_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_018.m3u8',
        caption: 'Robot #4 | The robot reaches its right arm to pick up the blue marker and the right arm moves the marker to draw a circle on the book. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_019_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_019.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the marker and the right arm  draws a circle on the whiteboard with the marker. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_020_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_020.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to pick up the marker and the left arm  draws a circle on the whiteboard with the marker. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_021_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_021.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to pick up the black marker and the left arm moves the marker to draw a circle on the paper | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_022_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_022.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm arm to pick up the red marker and the right arm moves the marker to draw a circle on the paper | ❌'
      },
    ],
  },
  unseen_4: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_025_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_025.m3u8',
        caption: 'Robot #2 | The right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_026_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_026.m3u8',
        caption: 'Robot #2 | The right arm holds the McDonalds cup on the table. Then the left arm pulls the straw out of the cup. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_027_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_027.m3u8',
        caption: 'Robot #2 | The right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_028_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_028.m3u8',
        caption: 'Robot #2 | The left arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_029_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_029.m3u8',
        caption: 'Robot #2 | The right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_030_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_030.m3u8',
        caption: 'Robot #2 | The right arm pulls the straw out of the cup. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_031_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_031.m3u8',
        caption: 'Robot #4 | The right arm holds the cup on the table. Then the left arm pulls the straw out of the cup. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_032_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_032.m3u8',
        caption: 'Robot #4 | The right arm holds the cup on the table. Then the left arm pulls the straw out of the cup. | ⚠️'
      },
    ],
  },
  unseen_5: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_033_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_033.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the green cube, moves it over the red cube, and releases it to stack. It then reaches its right arm to pick up the yellow cube, moves it over the stack, and releases it onto the green cube to finish the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_034_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_034.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the pink lego, moves it over the red lego, and releases it to stack. It then reaches its right arm to pick up the blue lego, moves it over the stack, and releases it onto the pink lego to finish the task. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_035_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_035.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the red cube, moves it over the colorful cube, and releases it to stack. It then reaches its right arm to pick up the green cube, moves it over the red cube, and releases it to finish the tower. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_036_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_036.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to pick up the green cube, moves it over the red cube, and releases it to stack. It then reaches its left arm to pick up the orange cube, moves it over the green cube, and releases it to finish the tower. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_037_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_037.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the white cube, moves it over the green cube, and releases it to stack. It then reaches its left arm to pick up the blue cube, moves it over the stack, and releases it onto the white cube to finish the task. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_038_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_038.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the blue cube, moves it over the light green cube, and releases it to stack. It then reaches its left arm to pick up the dark green cube, moves it over the light green cube, and releases it to finish the tower. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_039_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_039.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the red cube, moves it over the blue cube, and releases it to begin the stack. It then reaches its left arm to pick up the orange cube, moves it over the stack, and releases it onto the red cube to complete the three-tier structure. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_040_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_040.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to pick up the orange cube, moves it over the blue cube, and releases it to begin the stack. It then reaches its left arm to pick up the triangle puzzle, moves it over the stack, and releases it onto the orange cube to complete the three-tier structure. | ⚠️'
      },
    ],
  },
  unseen_6: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_041_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_041.m3u8',
        caption: 'Robot #2 | The left arm grabs the brush. Then left arm paints with the brush on the notebook | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_042_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_042.m3u8',
        caption: 'Robot #2 | The right arm grabs the brush. Then right arm paints with the brush on the notebook | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_043_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_043.m3u8',
        caption: 'Robot #2 | The right arm grabs the brush. Then right arm paints with the brush on the paper | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_044_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_044.m3u8',
        caption: 'Robot #2 | The left arm grabs the brush. Then left arm paints with the brush on the paper | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_045_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_045.m3u8',
        caption: 'Robot #2 | The left arm grabs the brush. Then left arm paints with the brush on the notebook | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_046_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_046.m3u8',
        caption: 'Robot #2 | The right arm grabs the brush. Then right arm paints with the brush on the notebook | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_047_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_047.m3u8',
        caption: 'Robot #2 | The right arm grabs the brush. Then right arm paints with the brush on the notebook | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_048_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_048.m3u8',
        caption: 'Robot #2 | The left arm grabs the brush. Then left arm paints with the brush on the notebook | ⚠️'
      },
    ],
  },
  unseen_7: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_049_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_049.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the iron and moves it across the shorts to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_050_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_050.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to grasp the iron and moves it across the shirt to iron it. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_051_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_051.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_052_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_052.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_053_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_053.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_054_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_054.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the iron and moves it across the shorts to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_055_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_055.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_056_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_056.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the iron and moves it across the shirt to iron it. | ❌'
      },
    ],
  },
  unseen_8: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_057_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_057.m3u8',
        caption: 'Robot #2 | The right arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_058_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_058.m3u8',
        caption: 'Robot #2 | The left arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_059_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_059.m3u8',
        caption: 'Robot #2 | The left arm shakes the hand of the human up and down | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_060_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_060.m3u8',
        caption: 'Robot #2 | The right arm shakes the hand of the human up and down| ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_061_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_061.m3u8',
        caption: 'Robot #2 | The right arm shakes the hand of the human up and down | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_062_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_062.m3u8',
        caption: 'Robot #2 | The left arm shakes the hand of the human up and down | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_063_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_063.m3u8',
        caption: 'Robot #1 | The left arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_064_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_064.m3u8',
        caption: 'Robot #1 | The right arm of the robot grasp the human hand to shake hands. It then initiates a rhythmic up-and-down motion to perform the handshake. | ❌'
      },
    ],
  },
  unseen_9: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_065_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_065.m3u8',
        caption: 'Robot #1 | The left arm grabs the left side of the map. The right arm folds the right side of the map. The left arm folds the left side of the map. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_066_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_066.m3u8',
        caption: 'Robot #1 | The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_067_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_067.m3u8',
        caption: 'Robot #1 | The left arm grabs the left side of the map. The right arm folds the right side of the map. The left arm folds the left side of the map. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_068_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_068.m3u8',
        caption: 'Robot #1 | The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_069_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_069.m3u8',
        caption: 'Robot #1 | The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_070_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_070.m3u8',
        caption: 'Robot #1 | The left arm grabs the right side of the map. The right arm folds the left side of the map. The right arm folds the left side of the map. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_071_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_071.m3u8',
        caption: 'Robot #1 | The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ❌'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_072_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_072.m3u8',
        caption: 'Robot #1 | The right arm grabs the right side of the map. The left arm folds the left side of the map. The right arm folds the right side of the map. | ❌'
      },
    ],
  },
  unseen_10: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_073_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_073.m3u8',
        caption: 'Robot #2 | The robot reaches its right arm to grasp the cart and pulls it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_074_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_074.m3u8',
        caption: 'Robot #1 | The robot reaches its left arm to grasp the cart and pushes it forward. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_075_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_075.m3u8',
        caption: 'Robot #2 | The robot reaches its left arm to grasp the cart and pulls it forward. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_076_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_076.m3u8',
        caption: 'Robot #1 | The robot reaches its left arm to grasp the cart and pulls it. | ✅'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_077_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_077.m3u8',
        caption: 'Robot #1 | The robot reaches its right arm to grasp the cart and pulls it forward. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_078_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_078.m3u8',
        caption: 'Robot #1 | The robot reaches its left arm to grasp the cart and pulls it forward. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_079_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_079.m3u8',
        caption: 'Robot #1 | The robot reaches its left arm to grasp the cart and pulls it forward. | ⚠️'
      },
      {
        generatedUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_080_ai.m3u8',
        executionUrl: '/labs/gear/videos/agi_unseen/hsl/UNSEEN_080.m3u8',
        caption: 'Robot #1 | The robot reaches its right arm to grasp the cart and pulls it forward. | ⚠️'
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
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'DreamZero (16 diffusion steps)'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'DreamZero (4 diffusion steps),'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'DreamZero (4 diffusion steps) + async'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'DreamZero (4 diffusion steps) + async & action chunk smoothing [DEFAULT]'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'DreamZero (1 diffusion steps)'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'DreamZero (1 diffusion steps) + async & action chunk smoothing'
      },
    ],
  },
  dreamzero_flash: {
    neural: [
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8',
        caption: 'DreamZero-flash (2 diffusion steps)'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8',
        caption: 'DreamZero-flash (2 diffusion steps) + async & action chunk smoothing'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8',
        caption: 'DreamZero-flash (1 diffusion steps)'
      },
      {
        generatedUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        executionUrl: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8',
        caption: 'DreamZero-flash (1 diffusion steps) + async & action chunk smoothing'
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
