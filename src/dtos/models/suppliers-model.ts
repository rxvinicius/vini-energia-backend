import { Field, Int, ObjectType, ID } from "type-graphql";
import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";
import { Types } from "mongoose";

@ObjectType()
@modelOptions({ schemaOptions: { collection: "suppliers" } })
export class SuppliersModel {
  @Field(() => ID)
  @prop({ type: Types.ObjectId })
  _id!: Types.ObjectId;

  @Field()
  @prop()
  name!: string;

  @Field()
  @prop()
  logo!: string;

  @Field()
  @prop()
  state!: string;

  @Field()
  @prop()
  costPerKwh!: number;

  @Field(() => Int)
  @prop()
  minKwh!: number;

  @Field(() => Int)
  @prop()
  totalClients!: number;

  @Field()
  @prop()
  averageRating!: number;
}

export const SuppliersModelMongoose = getModelForClass(SuppliersModel);
