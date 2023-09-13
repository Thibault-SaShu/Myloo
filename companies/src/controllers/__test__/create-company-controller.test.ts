import request from 'supertest';
import app from '../../app';

describe ("Test for the create-company-controller (POST)", ()=>{
    it('create a new company', async () => {
        const res = await request(app)
            .post("/api/company")
            .set('Cookie', global.signin())
            .send({
            name: "SaShu"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("SaShu");
    });

})

