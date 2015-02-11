// models/User.js
 
module.exports = function(mongoose) {
 
  var Schema = mongoose.Schema;
 
  var UserSchema = new Schema({
    name : String,
    lastName : String,
    nickName : String,
    cel : Number,
    email : String,
    pass:String,
    birthdate : Date 
  });

  return mongoose.model('User', UserSchema);
}