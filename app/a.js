var CronJob = require('cron').CronJob;
new CronJob('*/30 * * * * *', function() {
  console.log(new Date());
}, null, true, null);