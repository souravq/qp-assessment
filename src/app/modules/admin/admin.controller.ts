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

//View existing grocery items
const viewExistingGroceryItems = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.viewExistingGroceryItems();
    res.status(StatusCodes.OK).json({
      status: true,
      statusCode: StatusCodes.OK,
      message: "All Grocery Item Fetched Successfully",
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

// Remove grocery items from the system
const removeGroceryItems = async (req: Request, res: Response) => {
  try {
    const groceryId = req.params.id;
    const result = await AdminService.removeGroceryItems(groceryId);
    res.status(StatusCodes.OK).json({
      status: true,
      statusCode: StatusCodes.OK,
      message: "Grocery Item Deleted Successfully",
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
  viewExistingGroceryItems,
  removeGroceryItems,
};
