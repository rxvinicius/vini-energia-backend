import { Field, Int, ObjectType } from "type-graphql";
import { SuppliersModel } from "../models/suppliers-model";

@ObjectType()
export class PaginatedSuppliers {
  @Field(() => [SuppliersModel])
  data: SuppliersModel[];

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  pageSize: number;

  @Field(() => Int)
  total: number;
}
