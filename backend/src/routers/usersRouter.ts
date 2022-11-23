import express, { Express, Request, Response } from "express";
import { login, signup, tokenCheck, me } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.post("/signup", signup);
usersRouter.post("/login", login);
usersRouter.get("/isToken", tokenCheck);
usersRouter.get("/me", me);

export default usersRouter;
