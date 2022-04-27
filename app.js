const express = require('express')
const app = express()
const port = 3000 //loacl host puerto 3000 

app.get('/',(req, res) => {
    res.send(" Hello world")
})

app.get('/Launchx',(req, res) => {
    res.send("Launch x express")
})
app.get('/node',(req, res) => {
    const explorer1 = {id: 1, name: "Explorer" }
    const explorer2 = {id: 2, name: "Explorer" }
    const explorer3 = {id: 3, name: "Explorer" }
    res.send([explorer1, explorer2, explorer3])
})
// localhost explorer erykzon
app.get('/explorers/:explorer',(req, res) => {
    console.log(req.params)//{explorer:'el nombre que ingresamos '}
    res.send(req.params)
})
// localhost:3000/explorersInNode
app.get('/explorersInNode',(req, res) => {
    const explorer = { name: "Explorer",msg: "Hello"}
    console.log(explorer)//{explorer:'el nombre que ingresamos '}
    res.send(explorer)
})
// query Params: Recibir paramtetros por la url 
//http://localhost:3000/explorer/erykzon
//req.params = {"explorerName":"erykzon""}
app.get('/explorers/:explorerName',(req, res) => {
    console.log(req.params)//req.params = {"explorerName":"erykzon""}
    res.send(req.params)
})


app.listen(port, () =>{
    console.log("Server listo!")
})