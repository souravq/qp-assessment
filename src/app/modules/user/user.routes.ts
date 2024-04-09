import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

// View the list of available grocery items
router.get("/grocery-items", UserController.viewAvailableGroceryItems);

// Ability to book multiple grocery items in a single order
router.post("/orders", UserController.multipleGroceryItemsOrder);

export const UserRouter = router;
