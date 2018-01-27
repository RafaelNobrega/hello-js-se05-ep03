//index.js
const axios = require("axios")
const express = require("express")

const app = express()

const baseURL = ("http://thecatapi.com/")

const api = axios.create({ baseURL})

app.get("/cade-meu-gato", (req, res) =>{
    api.get('/api/images/get',)
        .then(ret => res.send(ret.data))
        .catch(err => res.status(500).send(err)) 
})
    
app.get("/busca", (req,res) => {
    api.get("/search/users",{
        params:{
            q:req.query.user
        }
    })
})

app.listen(3000, _ => console.log("no ar!!"))
