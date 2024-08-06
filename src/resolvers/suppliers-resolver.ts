import { Arg, Int, Query, Resolver } from "type-graphql";
import { SuppliersModel } from "../dtos/models/suppliers-model";
import { PaginatedSuppliers } from "../dtos/responses/paginated-suppliers";
import { allSuppliers } from "../data";

@Resolver()
export class SuppliersResolver {
  @Query(() => PaginatedSuppliers)
  suppliers(
    @Arg("consumption", () => Int) consumption: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number,
    @Arg("pageSize", () => Int, { defaultValue: 10 }) pageSize: number
  ): PaginatedSuppliers {
    if (consumption <= 0) {
      throw new Error("O consumo deve ser um número maior que zero");
    }

    const filteredSuppliers = this.filterSuppliersByConsumption(consumption);
    const sortedSuppliers = this.sortSuppliersByName(filteredSuppliers);
    const paginatedSuppliers = this.paginateSuppliers(
      sortedSuppliers,
      page,
      pageSize
    );

    return {
      data: paginatedSuppliers,
      page,
      pageSize,
      total: sortedSuppliers.length,
    };
  }

  private filterSuppliersByConsumption = (
    consumption: number
  ): SuppliersModel[] =>
    allSuppliers.filter((supplier) => consumption > supplier.minKwh);

  private sortSuppliersByName = (
    suppliers: SuppliersModel[]
  ): SuppliersModel[] => suppliers.sort((a, b) => a.name.localeCompare(b.name));

  private paginateSuppliers = (
    suppliers: SuppliersModel[],
    page: number,
    pageSize: number
  ): SuppliersModel[] => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    return suppliers.slice(startIndex, endIndex);
  };
}
