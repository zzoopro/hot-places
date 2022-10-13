import { Express, Request, Response } from "express";
import { posts } from "../data";

export const allPosts = (req: Request, res: Response) => {
  res.json(posts);
};
