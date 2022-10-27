import express, { Express, Request, Response } from "express";
import { addPlaces, allPlaces } from "../controllers/postsController";

const placesRouter = express.Router();

placesRouter.get("/all", allPlaces);
placesRouter.post("/add", addPlaces);

export default placesRouter;
