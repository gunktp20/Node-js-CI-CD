// __tests__/app.test.js
const request = require('supertest');
const { app, connectDB } = require('../app');
const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

describe('API Testing', () => {

  beforeAll(async () => {
    await connectDB(process.env.MONGO_URL); 
  });
  
  it('should return Welcome to our API on GET /api', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('msg', 'Welcome to our API');
  });

  it('should return a list of cars on GET /api/cars', async () => {
    const res = await request(app).get('/api/cars');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);  // ตรวจสอบว่าข้อมูลเป็น array
  });

  it('should return orders message on GET /api/orders', async () => {
    const res = await request(app).get('/api/orders');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('orders', 'node.js api ec2 ci/cd orders route');
  });

  // ทดสอบ Route ที่ไม่ถูกต้อง
  it('should return 404 on invalid route', async () => {
    const res = await request(app).get('/api/invalid');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('msg', 'Route does not exist');
  });

  afterAll(async () => {
    await mongoose.connection.close(); 
  });

});