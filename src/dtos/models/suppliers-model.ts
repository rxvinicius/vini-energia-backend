import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class SuppliersModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  logo: string;

  @Field()
  state: string;

  @Field()
  costPerKwh: number;

  @Field(() => Int)
  minKwh: number;

  @Field(() => Int)
  totalClients: number;

  @Field()
  averageRating: number;
}
