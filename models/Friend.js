// models/Friend.js
 
module.exports = function(mongoose) {
 
  var Schema = mongoose.Schema;
 
  var FriendSchema = new Schema({
    id_usuario_a : String,
    id_usuario_b : String
  });
 
  return mongoose.model('Friend', FriendSchema);
}