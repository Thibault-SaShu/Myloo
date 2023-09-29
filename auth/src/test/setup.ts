import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

// @ts-ignore
import jwt from "jsonwebtoken";

declare global {
    var signin: () => Promise<string[]>;
}

jest.mock('../utils/nats-wrapper-util');


let mongo: any;

//Before start tests
beforeAll(async () => {
    process.env.JWT_KEY = 'qwertzuiopasdfghjklyxcvbnmqwertzuiopasdfgh';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


    //Create a MongoDB server for testing and mocking
    const mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {});
});

//Before starting each test
beforeEach(async () => {
    jest.clearAllMocks();

    //we delete all collections in our Database
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

//Before stopping tests
afterAll(async () => {
    //We stop our mongo server
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();
});

/**
 * Async function to create a fake cookie
 * @return Promise<array>
 */
global.signin = async () => {

    const payload = {
        id: '1lk24j124l',
        email: 'test@test.com'
    };

    // Create the JWT!
    const token = jwt.sign(payload, process.env.JWT_KEY!);

    // Build session Object. { jwt: MY_JWT }
    const session = { jwt: token };

    // Turn that session into JSON
    const sessionJSON = JSON.stringify(session);

    // Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

    // return a string with the cookie with the encoded data
    return [`session=${base64}`];
};