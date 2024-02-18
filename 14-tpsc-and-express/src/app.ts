//iniciando projeto
//console.log('Rodando Express')

//init express
import express from "express"

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello Express!")
})

app.listen(3000, () => {
    console.log("Aplicação de TS + express funcionando");
})

//rota com post
app.post("/api/product", (req, res) => {
    console.log(req.body)

    return res.send("Produto adicionado!")
})