import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add new grocery items to the system
const addNewGroceryItems = async (payload: any) => {
  const result = await prisma.groceryItem.create({
    data: payload,
  });
  return result;
};

export const AdminService = {
  addNewGroceryItems,
};
