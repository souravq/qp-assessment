import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add new grocery items to the system
const addNewGroceryItems = async (payload: any) => {
  const result = await prisma.groceryItem.create({
    data: payload,
  });
  return result;
};

// View existing grocery items
const viewExistingGroceryItems = async () => {
  const result = await prisma.groceryItem.findMany();
  return result;
};

// Remove grocery items from the system
const removeGroceryItems = async (groceryId: string) => {
  await prisma.groceryItem.findUniqueOrThrow({
    where: {
      id: groceryId,
    },
  });
  const result = await prisma.groceryItem.delete({
    where: {
      id: groceryId,
    },
  });
  return result;
};

export const AdminService = {
  addNewGroceryItems,
  viewExistingGroceryItems,
  removeGroceryItems,
};
