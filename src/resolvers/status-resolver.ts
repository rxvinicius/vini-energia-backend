import { Query, Resolver } from "type-graphql";

@Resolver()
export class StatusResolver {
  @Query(() => String)
  async status(): Promise<string> {
    return "ok";
  }
}
