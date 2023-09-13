import {Request, Response} from "express";
import {Company} from "../models/company-model";
import {NotFoundError} from "@myloo/commun";

const getCompanies =  async (req: Request, res: Response) =>{
    const companies = await Company.find().select("name phone address zip city state")
    if (!companies) {
        throw new NotFoundError();
    }
    res.status(201).send(companies)
}

export default getCompanies