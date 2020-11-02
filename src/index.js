const { response, request } = require("express")
const express = require("express") //importamos
const app = express() //atribuimos as funçõs a variavel

app.use(express.json())

//query params (listar, filtrar minhas informações)
//route params (identificar recursos -> atulaizar e deletar)
//request body (criar ou editiar arquivos -> JSON)

app.get("/projeto", (request, response) => {
    const {title, dev} = request.query
    console.log(title)
    console.log(dev)

    return response.json([
         "Projeto 1",
         "Projeto 2"
    ])
})

app.post('/projeto', (request, response) => {
    const body = request.body
    console.log(body)


    return response.json([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ])
})

app.put('/projeto/:id', (request, response) =>{
    const {id} = request.params
    console.log(id)

    return response.json([
        "Projeto 4",
        "Projeto 2",
        "Projeto 3"
    ])
})

app.delete('/projeto/:id', (request, response) =>{
    return response.json([
        "Projeto 2",
        "Projeto 3"
    ])
})

app.listen(3333, () => {
    console.log("Back-End Started!")
})