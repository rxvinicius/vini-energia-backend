import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { SuppliersResolver } from "./resolvers/suppliers-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [SuppliersResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  const server = new ApolloServer({ schema });
  const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 4000;
  const { url } = await startStandaloneServer(server, { listen: { port } });

  console.log(`🚀 Server listening at: ${url}`);
}

bootstrap();
