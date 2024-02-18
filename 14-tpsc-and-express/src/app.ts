//iniciando projeto
//console.log('Rodando Express')

//init express
import express, { NextFunction, Request, Response } from "express"

const app = express()

app.use(express.json());

//middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next();
}

app.use(showPath);

app.get("/", (req, res) => {
    return res.send("Hello Express!")
})


//rota com post
app.post("/api/product", (req, res) => {
    console.log(req.body)
    
    return res.send("Produto adicionado!")
})

//rota para todos os verbos
app.all("/api/product/check", (req, res) => {
    if (req.method == "POST") {
        return res.send("Inseriu algum registro.")
    } else if (req.method == "GET") {
        return res.send("Leu algum registro.")
    } else {
        res.send("Não é possível prosseguir com esta requisição.")
    }
});

//interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces.")
})

//enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Tshirt",
        price: 30.00,
        color: "blue",
        size: ["p","m","g"]
    })
})

//router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id;

    if (id === "1") {
        const product = {
            id: 1,
            name: "cap",
            price: 10,
        };
        return res.json(product)
    } else {
        return res.send("Produto não encontrado.")
    }

})

//rotas complexas
app.get("/api/product/:id/review/:reviewId", (req:Request, res: Response) => {
    console.log(req.params)

    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acesando a Review; ${reviewId} do produto ${productId}`)
})

//router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuário com id: ${req.params.id}`)

    return res.send("o usuário foi encontrado!")
}

app.get("/api/user/:id", getUser)

//middleware
function checkUser(req:Request, res:Response, next: NextFunction) {
    if(req.params.id === "1") {
        console.log("Pode porsseguir!")
    }else {
        console.log("Acesso restrito!")
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json({
    msg: "Bem-vindo a área administrativa!"
    })
})

//req e res com generic
app.get("/api/user/:id/details/:name", 
(
    req: Request<{ id: string, name: string }>,
    res: Response<{ status: boolean }>
) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`Name: ${req.params.name}`)

    return res.json({status:true})
})

//tratamento de erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
        throw new Error("Algo deu errado.")
    }catch(e: any) {
        res.status(500).json({msg: e.message})
    }
})


//==================
app.listen(3000, () => {
    console.log("Aplicação de TS + express funcionando");
})