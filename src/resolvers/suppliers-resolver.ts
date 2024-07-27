import { Arg, Int, Query, Resolver } from "type-graphql";
import { SuppliersModel } from "../dtos/models/suppliers-model";
import { allSuppliers } from "../data";

@Resolver()
export class SuppliersResolver {
  @Query(() => [SuppliersModel])
  suppliers(
    @Arg("consumption", () => Int) consumption: number
  ): SuppliersModel[] {
    return allSuppliers
      .filter((supplier) => consumption > supplier.minKwh)
      .sort((a: any, b: any) => a.name.localeCompare(b.name));
  }
}
