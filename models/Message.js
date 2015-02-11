// models/Message.js
 
module.exports = function(mongoose) {
 
  var Schema = mongoose.Schema;
 
  var MessageSchema = new Schema({
    id_usuario_a : String,
    id_usuario_b : String,
    message : String,
    date : Date
  });
 
  return mongoose.model('Message', MessageSchema);
}