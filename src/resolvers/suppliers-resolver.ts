import { Arg, Int, Query, Resolver } from "type-graphql";
import { SuppliersModel } from "../dtos/models/suppliers-model";
import { allSuppliers } from "../data";

@Resolver()
export class SuppliersResolver {
  @Query(() => [SuppliersModel])
  suppliers(
    @Arg("consumption", () => Int) consumption: number
  ): SuppliersModel[] {
    if (consumption <= 0) {
      throw new Error("O consumo deve ser um número maior que zero");
    }

    const filteredSuppliers = this.filterSuppliersByConsumption(consumption);
    return this.sortSuppliersByName(filteredSuppliers);
  }

  private filterSuppliersByConsumption = (
    consumption: number
  ): SuppliersModel[] =>
    allSuppliers.filter((supplier) => consumption > supplier.minKwh);

  private sortSuppliersByName = (
    suppliers: SuppliersModel[]
  ): SuppliersModel[] => suppliers.sort((a, b) => a.name.localeCompare(b.name));
}
