import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const gloablErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    statusCode: StatusCodes.BAD_REQUEST,
    message: err.message || "Something Went Wrong",
    data: err,
  });
};
