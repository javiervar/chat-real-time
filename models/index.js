// models/index.js
if (!global.hasOwnProperty('db')) {
 
  var mongoose = require('mongoose');
 
  var dbName = 'chat'
   mongoose.connect('mongodb://localhost/' + dbName);
 
  global.db = {
    mongoose: mongoose,
    User:           require('./User')(mongoose),
    Friend:           require('./Friend')(mongoose),
    Message:           require('./Message')(mongoose),
  };
 
}
 
module.exports = global.db;