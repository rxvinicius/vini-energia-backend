import "reflect-metadata";
import path from "node:path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { SuppliersResolver } from "./resolvers/suppliers-resolver";

dotenv.config();
const mongoURI = process.env.MONGO_URI;

export let server: ApolloServer | null = null;

export async function bootstrap(port: number) {
  if (!mongoURI) {
    throw new Error(
      "mongoURI não foi definida. Verifique as variáveis de ambiente"
    );
  }

  await mongoose.connect(mongoURI);

  const schema = await buildSchema({
    resolvers: [SuppliersResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, { listen: { port } });

  console.log(`🚀 Server listening at: ${url}`);
}
