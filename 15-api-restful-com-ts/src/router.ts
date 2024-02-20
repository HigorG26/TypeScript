import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

//Validations
import { validate } from "./middleware/handleValidator";
import { movieCreateValidation } from "./middleware/movieValidations";


const router = Router();

export default router.get("/test", (req: Request, res: Response) => {
    if (res.status(200)) {
        res.send("API Online!")
    }else {
        res.send("API Offline")
    }
}).post("/movie", movieCreateValidation(), validate, createMovie)