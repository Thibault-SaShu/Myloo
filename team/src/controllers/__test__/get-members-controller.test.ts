import request from "supertest";
import app from "../../app";
import mongoose from "mongoose";

describe ("Test for the get-member-controller (GET)", ()=>{
    it('get a member', async () => {

        const newMember = await request(app)
            .post("/api/team")
            .set('Cookie', global.signin())
            .send({
                name: "Paul"
            });


        const res = await request(app)
            .get(`/api/team/${newMember.body.id}`)
            .set('Cookie', global.signin())
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Paul");

    });

    it('return an error when the id is not in the DB', async () => {

        const res = await request(app)
            .get(`/api/team/${new mongoose.Types.ObjectId().toHexString()}`)
            .set('Cookie', global.signin())
        expect(res.statusCode).toBe(404);

    });

})