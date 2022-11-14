import { Express, Request, Response } from "express";
import { Place } from "../db/schema";

export const signup = async (req: Request, res: Response) => {
  if (req.body) {
    console.log(req.body);
  }
};

export const login = async (req: Request, res: Response) => {
  if (req.body) {
    console.log(req.body);
  }
};
