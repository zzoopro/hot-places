import { Express, Request, Response } from "express";
import { Place } from "../db/schema";
import { isEmpty } from "../utils";

export const getAllPlaces = async (req: Request, res: Response) => {
  const places = await Place.find();
  if (places) {
    return res.json(places);
  }
};

export const getPlace = async (req: Request, res: Response) => {
  const id = req.params.id
  if(id){
    const place = await Place.findOne({ _id: id })
    if(isEmpty(place)){
      return res.status(400).json({ ok: false, message: "place not found."})
    } else {
      return res.json({ok: true, place })
    }
  }
}

export const uploadPlace = async (req: Request, res: Response) => {
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
