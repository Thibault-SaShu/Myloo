import request from 'supertest';
import app from '../../app';

describe ("Test for the create-member-controller (POST)", ()=>{
    it('create a new member', async () => {
        const res = await request(app)
            .post("/api/team")
            .set('Cookie', global.signin())
            .send({
            name: "Paul"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Paul");
    });

})

