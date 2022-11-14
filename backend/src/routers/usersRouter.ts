import express, { Express, Request, Response } from "express";
import { login, signup } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.post("/signup", signup);
usersRouter.post("/login", login);

export default usersRouter;
