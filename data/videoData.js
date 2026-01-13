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
    policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/watering_fast.m3u8',
  },
  {
    id: 'table_bussing',
    label: 'Table Bussing (5 trash & 5 dishware)',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/lift_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/lift_fast.m3u8',
  },
  {
    id: 'shirt_folding',
    label: 'Shirt Folding',
    neuralTrajectoryVideo: '/labs/gear/videos//environment/dreams/hsl/soup_fast.m3u8',
    policyRolloutVideo: '/labs/gear/videos//environment/policy/ours/hsl/closing_fast.m3u8',
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
