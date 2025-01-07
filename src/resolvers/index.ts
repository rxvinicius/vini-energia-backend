import { StatusResolver } from "./status-resolver";
import { SuppliersResolver } from "./suppliers-resolver";

const resolvers: [typeof StatusResolver, ...Function[]] = [
  StatusResolver,
  SuppliersResolver,
];

export default resolvers;
