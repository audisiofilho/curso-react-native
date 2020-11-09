const { response, request, json } = require("express")
const express = require("express") //importamos
const app = express() //atribuimos as funçõs a variavel
const { uuid } = require("uuidv4")

app.use(express.json())

//query params (listar, filtrar minhas informações)
//route params (identificar recursos -> atulaizar e deletar)
//request body (criar ou editiar arquivos -> JSON)

const projetos = []

app.get("/projeto", (request, response) => {
    const {title} = request.query
    const resultados = title 
        ? projetos.filter(projeto => projeto.title.includes(title))
        : projetos


    return response.json(resultados)
})

app.post('/projeto', (request, response) => {
    const {title, dev} = request.body
    const projeto = {id: uuid(), title, dev}

    projetos.push(projeto)


    return response.json(projetos)
})

app.put('/projeto/:id', (request, response) =>{
    const {id} = request.params
    const {title, dev} = request.body

    const projectIndex = projetos.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return response.status(400).json({error: "Projeto não encontrado"})
    }

    const projeto = {
        id,
        title,
        dev
    }

    projetos[projectIndex] = projeto
 

    return response.json(projeto)
})

app.delete('/projeto/:id', (request, response) =>{
    const {id} = request.params

    const projectIndex = projetos.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return response.status(400).json({error: "Projeto não encontrado"})
    }

    projetos.splice(projectIndex, 1)


    return response.status(204).send()
          
})

app.listen(3333, () => {
    console.log("Back-End Started!")
})