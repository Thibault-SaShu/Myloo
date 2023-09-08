import request from "supertest";
import app from "../../app";
import {describe} from "node:test";

describe("users/signin route", ()=>{
    it('has a route handler listening to /api/users/signin for post requests', async () => {
        const response = await request(app).post('/api/users/signin').send({});
        expect(response.status).not.toEqual(404);
    });
})

describe("users/signup route", ()=>{
    it('has a route handler listening to /api/users/signup for post requests', async () => {
        const response = await request(app).post('/api/users/signin').send({});
        expect(response.status).not.toEqual(404);
    });
})

describe("users/signout route", ()=>{
    it('has a route handler listening to /api/users/signout for post requests', async () => {
        const response = await request(app).post('/api/users/signin').send({});
        expect(response.status).not.toEqual(404);
    });
})

describe("users/me route", ()=>{
    it('has a route handler listening to /api/users/me for post requests', async () => {
        const response = await request(app).get('/api/users/me').send({});
        expect(response.status).not.toEqual(404);
    });
})








