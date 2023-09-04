import request from "supertest";
import app from "../../app";
import {loginForm} from "../view-controller";

it ('send an html page', async ()=>{
  // @ts-ignore
    const response = await request(app)
      .get('/auth')
      .send()
      .expect(200)

    expect(response.type).toEqual('text/html')
});



