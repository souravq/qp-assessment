import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

// Middleware to validate admin requests
function isAdmin(req: Request, res: Response, next: NextFunction) {
  const role = req.headers["role"];
  if (role !== "admin") {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      statusCode: StatusCodes.UNAUTHORIZED,
      message: "Unauthorized User",
    });
  }
  next();
}

// Middleware to validate User requests
function isUser(req: Request, res: Response, next: NextFunction) {
  const role = req.headers["role"];
  if (role !== "user") {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      statusCode: StatusCodes.UNAUTHORIZED,
      message: "Unauthorized User",
    });
  }
  next();
}

export const AuthGrard = {
  isAdmin,
  isUser,
};
