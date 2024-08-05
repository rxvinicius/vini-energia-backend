import { server, bootstrap } from "../src/server";
import request from "supertest";

const port = 4001;

beforeAll(async () => await bootstrap(port), 2000);

afterAll(async () => await server?.stop());

describe("Suppliers Resolver", () => {
  it("fetches suppliers based on consumption", async () => {
    const response = await request(`http://localhost:${port}`)
      .post("/")
      .send({
        query: `
          query($consumption: Int!) {
            suppliers(consumption: $consumption) {
              id
              name
              logo
              state
              costPerKwh
              minKwh
              totalClients
              averageRating
            }
          }
        `,
        variables: {
          consumption: 10000,
        },
      });

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.suppliers).toBeInstanceOf(Array);
    expect(response.body.data.suppliers.length).toBeGreaterThan(0);
  });

  it("returns an error for invalid consumption value", async () => {
    const response = await request(`http://localhost:${port}`)
      .post("/")
      .send({
        query: `
          query($consumption: Int!) {
            suppliers(consumption: $consumption) {
              id
              name
              logo
              state
              costPerKwh
              minKwh
              totalClients
              averageRating
            }
          }
        `,
        variables: { consumption: -1 },
      });

    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBe(
      "O consumo deve ser um número maior que zero"
    );
  });
});
