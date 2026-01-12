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
export const platformVideos = {
  seen_1: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Robot#1 | The left arm picks up the Banana on the table and places it in the Blue Plate.' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Robot #1 | The right arm picks up the Mango on the table and places it inside the Cardboard Box.' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Robot #2 | The right arm picks up the lime on the table and places it on the light green plate.' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Robot #2 | The right arm picks up the red apple on the table and places it on the gray towel.' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Robot #3 | The left arm picks up the peach on the table and places it on the baking pan.' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Robot #3 | The right arm picks up the red apple on the table and places it on the cutting board.' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Robot #4 | The left arm picks up the green pear on the table and places it on the blue checkered bowl.' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Robot #4 | The right arm picks up the starfruit on the table and places it on the cloth basket.' },
    ],
  },
  seen_2: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_3: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_4: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_5: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_6: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_7: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_8: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_9: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  seen_10: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_1: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_2: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_3: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_4: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_5: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_6: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_7: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_8: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_9: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  unseen_10: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  tool_use: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  hri: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  collision_avoidance: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
  },
  visual_reasoning: {
    neural: [
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/folding_example.m3u8', caption: 'Fold Towel' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/hammering_example.m3u8', caption: 'Do Hammering' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/stacking_example.m3u8', caption: 'Stack Bowls' },
      { url: '/labs/gear/videos//mimicgen/dreams/hsl/wiping_example.m3u8', caption: 'Wipe Table' },
    ],
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
