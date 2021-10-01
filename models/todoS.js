var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name : String,
  description : String,
  price : Float32Array,
  categoryId : {type:Mongoose.Schema.Types.Object_id,ref:"Category"},
  done : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

var CategorySchema = new Schema({
    name : String,
    description : String,
    shopId : {type:Mongoose.Schema.Types.Object_id,ref:"Shop"},
    done : {
      type : Boolean,
      default : false
    },
    createdAt : {
      type : Date,
      default : Date.now
    },
  });

  
var ShopSchema = new Schema({
    name : String,
    description : String,
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
module.exports = mongoose.model('Category', CategorySchema);
module.exports = mongoose.model('Shop', ShopSchema);