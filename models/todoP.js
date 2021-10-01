var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name : String,
  description : String,
  price : Float32Array,
  categoryId : {type:mongoose.Schema.Types.Object_id,ref:"Category"},
  done : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Product', ProductSchema);
