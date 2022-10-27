import { Express, Request, Response } from "express";
import { posts } from "../data";

export const allPlaces = (req: Request, res: Response) => {
  res.json(posts);
};

export const addPlaces = (req: Request, res: Response) => {
  res.json("hi");
};
