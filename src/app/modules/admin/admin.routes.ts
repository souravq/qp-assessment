import express from "express";
import { AdminController } from "./admin.controller";
const router = express.Router();

router.post("/grocery-items", AdminController.addNewGroceryItems);

export const AdminRouter = router;
