import { z } from "zod";

const addGroceryItemsZodValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Grocery Item Name is required !!!",
    }),
    price: z.number({
      required_error: "Price is required !!!",
    }),
    quantity: z.number({
      required_error: "Quantity is required !!!",
    }),
  }),
});

export const AdminZodValidation = {
  addGroceryItemsZodValidation,
};
