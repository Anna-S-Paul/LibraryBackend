const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")

const app= express()
app.use(cors())

app.post("/",
    (req,res)=>{
res.send("Hello")
    }
)

app.post("/search",
    (req,res)=>{
res.send("Search complete")
    }
)

app.post("/delete",
    (req,res)=>{
res.send("Delete")
    }
)

app.post("/viewall",
    (req,res)=>{
res.send("Viewed")
    }
)

app.listen(8080,()=>{
    console.log("server started")
} 
)