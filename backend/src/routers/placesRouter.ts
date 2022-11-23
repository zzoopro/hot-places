import express from "express";
import multer from "multer";
import {
  uploadPlace,
  getAllPlaces,
  getPlace,
} from "../controllers/postsController";

const upload = multer({ dest: "uploads/" });

const placesRouter = express.Router();

placesRouter.get("/all", getAllPlaces);
placesRouter.get("/:id", getPlace);
placesRouter.post("/upload", upload.single("photo"), uploadPlace);

export default placesRouter;
