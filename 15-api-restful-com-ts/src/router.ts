import { Router, Request, Response } from "express";


const router = Router();

export default router.get("/", (req: Request, res: Response) => {
    if (res.status(200)) {
        res.send("API Online!")
    }else {
        res.send("API Offline")
    }
})