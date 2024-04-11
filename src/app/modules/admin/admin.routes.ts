import express, { NextFunction, Request, Response } from "express";
import { AdminController } from "./admin.controller";
import { AuthGrard } from "../../middlewares/auth";
import { AdminZodValidation } from "./admin.validation";
const router = express.Router();

// Add new grocery items to the system
router.post(
  "/grocery-items",
  AuthGrard.isAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await AdminZodValidation.addGroceryItemsZodValidation.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  },
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
