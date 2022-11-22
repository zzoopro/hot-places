import express, { Express, Request, Response } from "express";
import {
  uploadPlace,
  getAllPlaces,
  getPlace,
} from "../controllers/postsController";
import { errorHandler } from "../middleware/errorHandler";

/**
 * @swagger
 * paths:
 *  /api/places/all:
 *    get:
 *      summary: "업로드된 places 전체 조회"
 *      tags: [Places]
 *      responses:
 *        "200":
 *          description: 전체 Places 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    places:
 *                      type: array
 */

const placesRouter = express.Router();

placesRouter.get("/all", getAllPlaces);
placesRouter.get("/:id", getPlace);
placesRouter.post("/add", uploadPlace);

export default placesRouter;
