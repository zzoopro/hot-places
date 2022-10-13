import express, { Express, Request, Response } from "express";
import { allPosts } from "../controllers/postsController";

const postsRouter = express.Router();

postsRouter.get("/all", allPosts);

export default postsRouter;
