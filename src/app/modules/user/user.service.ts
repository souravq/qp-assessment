import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// View the list of available grocery items
const viewAvailableGroceryItems = async () => {
  const result = await prisma.groceryItem.findMany();
  return result;
};

// Ability to book multiple grocery items in a single order
const multipleGroceryItemsOrder = async (payload: any) => {
  try {
    const orderItems = payload.items;
    // Dummy UserId
    const userId: string = "10";

    // Validate order items and check if they are available in inventory
    for (const item of orderItems) {
      const groceryItem = await prisma.groceryItem.findUnique({
        where: { id: item.itemId },
      });
      if (!groceryItem || groceryItem.quantity < item.quantity) {
        throw new Error("Invalid order or insufficient quantity");
      }
    }

    // Update inventory levels and process the order
    for (const item of orderItems) {
      await prisma.groceryItem.update({
        where: { id: item.itemId },
        data: { quantity: { decrement: item.quantity } },
      });
    }

    // Create order in the database
    const newOrder = await prisma.order.create({
      data: {
        userId,
        items: {
          createMany: {
            data: orderItems.map(
              (orderItem: { itemId: any; quantity: any }) => ({
                groceryItemId: orderItem.itemId,
                quantity: orderItem.quantity,
              })
            ),
          },
        },
      },
    });
    return newOrder;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const UserService = {
  viewAvailableGroceryItems,
  multipleGroceryItemsOrder,
};
