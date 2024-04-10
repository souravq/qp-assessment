import express from "express";
import { AdminController } from "./admin.controller";
const router = express.Router();

// Add new grocery items to the system
router.post("/grocery-items", AdminController.addNewGroceryItems);
// View existing grocery items
router.get("/grocery-items", AdminController.viewExistingGroceryItems);
// Remove grocery items from the system
router.delete("/grocery-items/:id", AdminController.removeGroceryItems);
// Update details (e.g., name, price) of existing grocery items
router.patch("/grocery-items/:id", AdminController.updateGroceryItem);
// Manage inventory levels of grocery items
router.patch(
  "/grocery-items/:id/manage-inventory",
  AdminController.manageGroceryItemsInventory
);

export const AdminRouter = router;
