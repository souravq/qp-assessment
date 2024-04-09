import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import { StatusCodes } from "http-status-codes";

// Add new grocery items to the system
const addNewGroceryItems = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.addNewGroceryItems(req.body);
    res.status(StatusCodes.CREATED).json({
      status: true,
      statusCode: StatusCodes.CREATED,
      message: "New grocery items added successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(StatusCodes.NOT_FOUND).json({
      status: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: err.message || "Something Went Wrong",
      data: err,
    });
  }
};

export const AdminController = {
  addNewGroceryItems,
};
