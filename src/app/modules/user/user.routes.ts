import express from "express";
import { UserController } from "./user.controller";
import { AuthGrard } from "../../middlewares/auth";
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
  UserController.multipleGroceryItemsOrder
);

export const UserRouter = router;
