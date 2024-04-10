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
  // Check Grocery Item is Exist or Not
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

// Update details (e.g., name, price) of existing grocery items
const updateGroceryItem = async (groceryId: string, payload: any) => {
  // Check Grocery Item is Exist or Not
  await prisma.groceryItem.findUniqueOrThrow({
    where: {
      id: groceryId,
    },
  });
  const result = await prisma.groceryItem.update({
    where: {
      id: groceryId,
    },
    data: payload,
  });
  return result;
};

// Manage inventory levels of grocery items
const manageGroceryItemsInventory = async (groceryId: string, payload: any) => {
  const { action, quantity } = payload;
  try {
    // Check Grocery Item is Exist or Not
    const groceryItemData = await prisma.groceryItem.findUniqueOrThrow({
      where: {
        id: groceryId,
      },
    });
    if (action === "increase") {
      await prisma.groceryItem.update({
        where: {
          id: groceryId,
        },
        data: {
          quantity: groceryItemData.quantity + quantity,
        },
      });
    } else if (action === "decrease") {
      if (groceryItemData.quantity < quantity) {
        throw new Error("Cannot decrease inventory below 0");
      }
      await prisma.groceryItem.update({
        where: {
          id: groceryId,
        },
        data: {
          quantity: groceryItemData.quantity - quantity,
        },
      });
    } else {
      throw new Error("Invalid Action");
    }

    const result = await prisma.groceryItem.findUnique({
      where: {
        id: groceryId,
      },
    });
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const AdminService = {
  addNewGroceryItems,
  viewExistingGroceryItems,
  removeGroceryItems,
  updateGroceryItem,
  manageGroceryItemsInventory,
};
