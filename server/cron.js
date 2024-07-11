const { CronJob } = require('cron');
const mongoose = require('mongoose');
const Load = require('./models/Load');

const job = new CronJob(
	'0 * * * *', // cronTime: runs at the start of every hour
  async function () {
    try {
      const now = new Date();
      const result = await Load.deleteMany({ expdate: { $lt: now } });
      console.log(`${result.deletedCount} expired loads removed.`);
    } catch (error) {
      console.error('Error removing expired loads:', error);
    }
  },
  null, // onComplete
  true, // start
  'Asia/Kolkata' // timeZone
// '* * * * * *',
// function () {
//     console.log('You will see this message every second');
//   }, // onTick
//   null, // onComplete
//   true, // start
//   'Asia/Kolkata' // timeZone (valid timezone string)
);

module.exports=job;