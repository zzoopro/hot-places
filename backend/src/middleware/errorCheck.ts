import express, { NextFunction, Request, Response } from "express";

const app = express();

export default app.use(
  (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error) {
      console.log(error.message);
      res.status(600).json({ ok: false, message: error.message });
    }
  }
);
