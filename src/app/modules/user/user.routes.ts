import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AuthGrard } from "../../middlewares/auth";
import { UserZodValidation } from "./user.validation";
const router = express.Router();

// View the list of available grocery items
router.get(
  "/grocery-items",
  AuthGrard.isUser,
  UserController.viewAvailableGroceryItems
);

// Ability to book multiple grocery items in a single order
router.post(
  "/orders",
  AuthGrard.isUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await UserZodValidation.OrderSchema.parseAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  },
  UserController.multipleGroceryItemsOrder
);

export const UserRouter = router;
