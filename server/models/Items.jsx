const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    itemName:String,
    itemCode: String,
    categoryId:String,
    landingCost:Number,
    sellingRate:Number,
    stock:Number
  })

  const ItemModel = mongoose.model('items', ItemSchema);
  module.exports =ItemModel;