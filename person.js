const mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
    name : {
      type: String,
      required: true
    },
    age :  Number,
    favoriteFoods : [String]
  })

  module.export = new mongoose.model("Person",personSchema);