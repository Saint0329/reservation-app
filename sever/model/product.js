const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  //author: ObjectId,
  coverImage: String,
  name: {type:String,require:true,max:[60,'最大６０文字です']},
  price: Number,
  description: String,
  hedding1: String,
  hedding2: String,
  hedding3: String,
  heddingtext1: String,
  heddingtext2: String,
  heddingtext3: String,
});

module.exports = mongoose.model('product',ProductSchema)
