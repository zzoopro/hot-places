import { Express, Request, Response } from "express";
import { Place } from "../db/schema";
import { posts } from "../data";

export const allPlaces = async (req: Request, res: Response) => {
  const places = await Place.find();
  return res.json(places);
};

export const addPlaces = async (req: Request, res: Response) => {
  if (req.body) {
    const { title, description, address } = req.body;
    const newPlace = new Place({ title, description, address });

    if (newPlace) {
      await newPlace.save();
      return res.json({ ok: true });
    } else {
      console.log("cant created");
    }
  }
};
