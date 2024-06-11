const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title":{type:String,required:true},
        "category": {type:String,required:true},
        "description": {type:String,required:true},
        "authorname":{type:String,required:true},
        "price":{type:Number,required:true}
    }
)
let librarymodel = mongoose.model("librarys", schema)
module.exports = {librarymodel}