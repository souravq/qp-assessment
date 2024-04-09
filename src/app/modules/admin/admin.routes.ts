import express from "express";
import { AdminController } from "./admin.controller";
const router = express.Router();

router.post("/grocery-items", AdminController.addNewGroceryItems);
//View existing grocery items
router.get("/grocery-items", AdminController.viewExistingGroceryItems);

export const AdminRouter = router;
