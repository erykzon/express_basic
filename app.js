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
// Esto es un endpoint
//routes
//Methods HTTP, GET, POST, DELETE
app.get('/v1/explorers',(req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = { id: 1, name: "Explorer1"}
    const explorer2 = { id: 2, name: "Explorer2"}
    const explorers = [explorer1, explorer2]
    res.status(200).json(explorers)
})
//Los metodos GET son para regresar info 
app.get('/v1/explorers/:id',(req, res) => {
    console.log(`GET by id V1 API ${new Date()}`)
    const explorer1 = { id: 1, name: "Explorer1"}
    res.status(200).json(explorer1)
})

//Los metodos post son para crear informacion
app.post('/v1/explorers', (req, res) =>{
    console.log(`POST Explorers V1 API ${new Date()}`)
    // Agregar la logica para persistir
    console.log(req.body)// parametros del request
    res.status(201).json({message: "Creado exitosamente"})

})


app.listen(port, () =>{
    console.log("Server listo!")
})