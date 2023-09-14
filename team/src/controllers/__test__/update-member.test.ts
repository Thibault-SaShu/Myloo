import request from "supertest";
import app from "../../app";
import mongoose from "mongoose";

describe ("Test for the update-member-controller (PUT)", ()=>{
    it('update a company', async () => {

        const newCompany1 = await request(app)
            .post("/api/team")
            .set('Cookie', global.signin())
            .send({
                name: "Paul"
            });

        const newCompany2 = await request(app)
            .post("/api/team")
            .set('Cookie', global.signin())
            .send({
                name: "Jean"
            });


        const res = await request(app)
            .get(`/api/team`)
            .set('Cookie', global.signin())

        expect(res.statusCode).toBe(201);
        expect(res.body.length).toBe(2);
        expect(res.body[1].name).toBe("Jean")

    });

    it('return an error when the id is not in the DB', async () => {

        const res = await request(app)
            .get(`/api/team/${new mongoose.Types.ObjectId().toHexString()}`)
            .set('Cookie', global.signin())
            .send({
                name: "Jean"
            });
        expect(res.statusCode).toBe(404);
        expect("errors" in res.body).toBeTruthy()
    });

})