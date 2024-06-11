const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {librarymodel} = require("./model/Library")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Annajimmy:annajimmychirackal@cluster0.moqndmi.mongodb.net/librarydb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/", (req, res) => {
    let input = req.body
    let library = new librarymodel(input)
    library.save()
    console.log(library)
    res.json({ "status": "success" })
}
)

app.post("/search",
    (req, res) => {
        res.send("Search complete")
    }
)

app.post("/delete",
    (req, res) => {
        res.send("Delete")
    }
)

app.get("/viewall", (req, res) => {
    librarymodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error)=> { 

        }
    )
}
)

app.listen(8082, () => {
    console.log("server started")
}
)