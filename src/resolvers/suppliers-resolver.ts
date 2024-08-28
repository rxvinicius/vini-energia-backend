import { Arg, Int, Query, Resolver } from "type-graphql";
import {
  SuppliersModel,
  SuppliersModelMongoose,
} from "../dtos/models/suppliers-model";
import { PaginatedSuppliers } from "../dtos/responses/paginated-suppliers";

@Resolver()
export class SuppliersResolver {
  @Query(() => PaginatedSuppliers)
  async suppliers(
    @Arg("consumption", () => Int) consumption: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number,
    @Arg("pageSize", () => Int, { defaultValue: 10 }) pageSize: number
  ): Promise<PaginatedSuppliers> {
    if (consumption <= 0) {
      throw new Error("O consumo deve ser um número maior que zero");
    }

    const filteredSuppliers = await this.filterByConsumption(consumption);
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

  private async filterByConsumption(
    consumption: number
  ): Promise<SuppliersModel[]> {
    return SuppliersModelMongoose.find({ minKwh: { $lte: consumption } });
  }

  private sortSuppliersByName(suppliers: SuppliersModel[]): SuppliersModel[] {
    return suppliers.sort((a, b) => a.name.localeCompare(b.name));
  }

  private paginateSuppliers(
    suppliers: SuppliersModel[],
    page: number,
    pageSize: number
  ): SuppliersModel[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    return suppliers.slice(startIndex, endIndex);
  }
}
