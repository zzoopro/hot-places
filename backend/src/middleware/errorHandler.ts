import express, { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    console.log("res.headersSent", res.headersSent);
    return next(err);
  }
  res.status((err as any).code).json({ ok: false, error: err.message });
};
