import { Request, Response } from "express";
import { UserService } from "./user.service";
import { StatusCodes } from "http-status-codes";

// View the list of available grocery items
const viewAvailableGroceryItems = async (req: Request, res: Response) => {
  try {
    const result = await UserService.viewAvailableGroceryItems();
    res.status(StatusCodes.OK).json({
      status: true,
      statusCode: StatusCodes.OK,
      message: "Grocery Items are Fetched Successfully",
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

// Ability to book multiple grocery items in a single order
const multipleGroceryItemsOrder = async (req: Request, res: Response) => {
  try {
    const result = await UserService.multipleGroceryItemsOrder(req.body);
    res.status(StatusCodes.OK).json({
      status: true,
      statusCode: StatusCodes.OK,
      message: "Multiple Grocery Items are Ordered Successfully",
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

export const UserController = {
  viewAvailableGroceryItems,
  multipleGroceryItemsOrder,
};
