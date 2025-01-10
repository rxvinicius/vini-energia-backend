import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";

const UNAUTHENTICATED_ROUTES = ["Status"];

function getDecodedSecret(): Buffer {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não foi definido nas variáveis de ambiente");
  }
  return Buffer.from(process.env.JWT_SECRET, "base64");
}

function validateToken(token: string): boolean {
  const decodedSecret = getDecodedSecret();

  try {
    jwt.verify(token, decodedSecret, { algorithms: ["HS256"] });
    return true;
  } catch (err: any) {
    console.error("Erro ao validar token:", err.message);
    console.error("Detalhes do erro:", err);
    return false;
  }
}

export async function getTokenForRequest(req: any): Promise<boolean> {
  const authHeader = req.headers.authorization || "";
  const operationName = req.body?.operationName;

  if (UNAUTHENTICATED_ROUTES.includes(operationName)) {
    return false;
  }

  function throwGraphQLError() {
    throw new GraphQLError("Unauthorized", {
      extensions: { code: "UNAUTHENTICATED", http: { status: 401 } },
    });
  }

  if (!authHeader) throwGraphQLError();

  const token = authHeader.replace("Bearer ", "").trim();

  if (!token) throwGraphQLError();

  if (!validateToken(token)) throwGraphQLError();

  return true;
}
