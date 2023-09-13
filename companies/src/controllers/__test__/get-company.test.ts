import request from "supertest";
import app from "../../app";
import mongoose from "mongoose";

describe ("Test for the get-company-controller (GET)", ()=>{
    it('get a company', async () => {

        const newCompany = await request(app)
            .post("/api/company")
            .set('Cookie', global.signin())
            .send({
                name: "SaShu"
            });


        const res = await request(app)
            .get(`/api/company/${newCompany.body.id}`)
            .set('Cookie', global.signin())
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("SaShu");

    });

    it('return an error when the id is not in the DB', async () => {

        const res = await request(app)
            .get(`/api/company/${new mongoose.Types.ObjectId().toHexString()}`)
            .set('Cookie', global.signin())
        expect(res.statusCode).toBe(404);

    });

})