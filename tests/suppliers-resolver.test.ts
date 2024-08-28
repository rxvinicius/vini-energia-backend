import mongoose from "mongoose";
import request from "supertest";
import { server, bootstrap } from "../src/server";

const port = 4001;

beforeAll(async () => await bootstrap(port));

afterAll(async () => {
  await server?.stop();
  await mongoose.connection.close();
});

describe("Suppliers Resolver", () => {
  it("fetches suppliers based on consumption", async () => {
    const response = await request(`http://localhost:${port}`)
      .post("/")
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
