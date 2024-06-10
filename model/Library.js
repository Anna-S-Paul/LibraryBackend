const mongoose = require("mongoose")
const schema= mongoose.schema(
    {
"title":String,
"category":String,
"description":String,
"authorname":String,
"price":Number
    }
)
let librarymodel=mongoose.Model("librarys",schema)
module.exports={librarymodelmodel}