import mongoose from "mongoose";
import request from "supertest";
import { server, bootstrap } from "../src/server";

const port = 4001;

const generateTestToken = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não definido nas variáveis de ambiente");
  }

  const jwt = require("jsonwebtoken");
  const payload = { sub: "testUser@example.com" };
  const decodedSecret = Buffer.from(process.env.JWT_SECRET, "base64");

  return jwt.sign(payload, decodedSecret, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
};

const token = generateTestToken();

beforeAll(async () => await bootstrap(port));

afterAll(async () => {
  await server?.stop();
  await mongoose.connection.close();
});

describe("Suppliers Resolver", () => {
  it("fetches suppliers based on consumption", async () => {
    const response = await request(`http://localhost:${port}`)
      .post("/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        query: `
          query($consumption: Int!, $page: Int!, $pageSize: Int!) {
            suppliers(consumption: $consumption, page: $page, pageSize: $pageSize) {
              data {
                _id
                name
                logo
                state
                costPerKwh
                minKwh
                totalClients
                averageRating
              }
              page
              pageSize
              total
            }
          }
        `,
        variables: {
          consumption: 10000,
          page: 1,
          pageSize: 10,
        },
      });

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.suppliers.data).toBeInstanceOf(Array);
    expect(response.body.data.suppliers.data.length).toBeGreaterThan(0);
    expect(response.body.data.suppliers.page).toBe(1);
    expect(response.body.data.suppliers.pageSize).toBe(10);
    expect(response.body.data.suppliers.total).toBeGreaterThan(0);
  });

  it("returns an error for invalid consumption value", async () => {
    const response = await request(`http://localhost:${port}`)
      .post("/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        query: `
          query($consumption: Int!, $page: Int!, $pageSize: Int!) {
            suppliers(consumption: $consumption, page: $page, pageSize: $pageSize) {
              data {
                _id
                name
                logo
                state
                costPerKwh
                minKwh
                totalClients
                averageRating
              }
              page
              pageSize
              total
            }
          }
        `,
        variables: { consumption: -1, page: 1, pageSize: 10 },
      });

    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBe(
      "O consumo deve ser um número maior que zero"
    );
  });
});
