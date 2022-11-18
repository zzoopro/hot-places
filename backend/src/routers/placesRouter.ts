import express, { Express, Request, Response } from "express";
import { uploadPlace, getAllPlaces, getPlace } from "../controllers/postsController";

const placesRouter = express.Router();

placesRouter.get("/all", getAllPlaces);
placesRouter.get("/:id", getPlace)
placesRouter.post("/add", uploadPlace);


export default placesRouter;
