import { bootstrap } from "./server";

const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;

bootstrap(port).catch((err) => {
  console.error("❌ Error starting server:", err);
});
