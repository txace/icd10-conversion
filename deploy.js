var util = require('mis-util');
var config = require('./config.ignore');

var options = {
   sysname: '/c1/FRSH',
   connect: {
      host: 'gccmhc',
      user: 'tim',
      password: config.user
   },
   cron: {
      user: 'datamgr',
      pass: config.cron
   },
   view_path: {
      local: './view/',
      remote: '/CUST/forms/'
   },
   parm_path: {
      local: './build/'
   },
   usc_path: {
      local: './'
   }
};

var mis = util(options);

console.log('deploying to: ' + options.sysname);

mis.parm.fromflatfile('./icdmap.ignore')
.then(function(parm) { 
   console.log('writing parm')
   return mis.parm.tofile('./build/ICDMAP.parm', parm)
})
.then(mis.deploy.parm)
//.then(mis.script.install.bind(mis, './ConICDSQL.usc'));
.then(mis.script.runonce.bind(mis, './ConICDSQL.usc'));
