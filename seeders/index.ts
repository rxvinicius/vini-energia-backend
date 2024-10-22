import mongoose from "mongoose";
import { connectToMongoDB } from "../src/server";
import { seedSuppliers } from "./suppliers";

async function seedAll() {
  try {
    await connectToMongoDB();

    // Popula as collections
    await seedSuppliers();

    console.log("🌱✨ Todas as collections foram semeadas com sucesso!");
    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Erro ao semear o banco de dados:", error);
    process.exit(1);
  }
}

seedAll();
