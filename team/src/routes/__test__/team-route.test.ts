import request from "supertest";
import app from "../../app";
import {describe} from "node:test";

describe("Test the routes for the team service", ()=>{

    it('has a route handler listening to /api/team for post requests', async () => {
        const response = await request(app).post('/api/team').send({});
        expect(response.status).not.toEqual(404);
    });

    it('can only be accessed if the user is signed in', async () => {
        await request(app).post('/api/team').send({}).expect(401);
    });

    it('returns a status other than 401 if the user is signed in', async () => {
        const response = await request(app)
            .post('/api/team')
            .set('Cookie', global.signin())
            .send({});

        expect(response.status).not.toEqual(401);
    });

    it('returns an error if an invalid name is provided', async () => {
        await request(app)
            .post('/api/team')
            .set('Cookie', global.signin())
            .send({
                name: ''
            })
            .expect(400);
    });
})
