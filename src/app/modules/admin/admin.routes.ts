import express from "express";
import { AdminController } from "./admin.controller";
import { AuthGrard } from "../../middlewares/auth";
const router = express.Router();

// Add new grocery items to the system
router.post(
  "/grocery-items",
  AuthGrard.isAdmin,
  AdminController.addNewGroceryItems
);
// View existing grocery items
router.get(
  "/grocery-items",
  AuthGrard.isAdmin,
  AdminController.viewExistingGroceryItems
);
// Remove grocery items from the system
router.delete(
  "/grocery-items/:id",
  AuthGrard.isAdmin,
  AdminController.removeGroceryItems
);
// Update details (e.g., name, price) of existing grocery items
router.patch(
  "/grocery-items/:id",
  AuthGrard.isAdmin,
  AdminController.updateGroceryItem
);
// Manage inventory levels of grocery items
router.patch(
  "/grocery-items/:id/manage-inventory",
  AuthGrard.isAdmin,
  AdminController.manageGroceryItemsInventory
);

export const AdminRouter = router;
