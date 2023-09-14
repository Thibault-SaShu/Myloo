import request from 'supertest';
import app from '../../app';
import mongoose from "mongoose";


describe ("Test for the delete-company-controller (DELETE)", ()=>{
    it('delete a company', async () => {

        const newCompany = await request(app)
            .post("/api/team")
            .set('Cookie', global.signin())
            .send({
                name: "Paul"
            });


        const res = await request(app)
            .delete(`/api/team/${newCompany.body.id}`)
            .set('Cookie', global.signin())
        expect(res.statusCode).toBe(201);
        expect(typeof res.body === 'object').toBeTruthy()
        expect(Object.keys(res.body).length).toEqual(0)

    });

    it('return an error when the id is not in the DB', async () => {

        const res = await request(app)
            .delete(`/api/team/${new mongoose.Types.ObjectId().toHexString()}`)
            .set('Cookie', global.signin())
        expect(res.statusCode).toBe(404);
        expect("errors" in res.body).toBeTruthy()

    });

})