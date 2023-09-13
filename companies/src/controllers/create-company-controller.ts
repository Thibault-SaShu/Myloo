import {Request, Response} from "express";
import {Company} from "../models/company-model";

const createNewCompany = async (req: Request, res: Response) =>{
    const newCompany = await Company.create(req.body);
    res.status(201).send(newCompany)
}

export default createNewCompany