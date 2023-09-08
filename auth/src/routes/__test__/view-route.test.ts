import request from "supertest";
import app from "../../app";

it('has a route handler listening to /auth for post requests', async () => {
    const response = await request(app).get('/auth').send({});
    expect(response.status).not.toEqual(404);
});