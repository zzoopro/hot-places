import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { HttpError } from "../utils";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  const authText = req.headers.authorization;
  const token = authText?.split(" ")[1];
  if (token && token !== "null") {
    const { userId } = jwt.verify(token, process.env.PRIVATE_KEY) as JwtPayload;
    if (userId) {
      return next();
    }
  } else {
    const error = new HttpError("Not Authrization.", 401);
    return next(error);
  }
};
