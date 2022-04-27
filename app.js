const express = require('express')
const app = express()
const port = 3000 //loacl host puerto 3000 

app.get('/',(req, res) => {
    res.send(" Hello world")
})

app.get('/Launchx',(req, res) => {
    res.send("Launch x express")
})

app.listen(port, () =>{
    console.log("Server listo!")
})