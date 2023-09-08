import {Request, Response} from "express";

export const createNewCompany = (req: Request, res: Response) =>{

    res.status(201).send("Hello from comtroller")
}