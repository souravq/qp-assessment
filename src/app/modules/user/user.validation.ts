import { z } from "zod";

const itemSchema = z.object({
  itemId: z.string({
    required_error: "Item Id required!!!",
  }),
  quantity: z.number({
    required_error: "Quantity is required !!!",
  }),
});

const OrderSchema = z.object({
  items: z.array(itemSchema),
});

export const UserZodValidation = { OrderSchema };
