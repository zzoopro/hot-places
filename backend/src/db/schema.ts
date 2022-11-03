import { Schema, model } from "mongoose";

interface UserInterface {
  username: string;
  email: string;
  phone?: number;
  avater?: string;
  createdAt: Date;
  places: PlaceInterface[];
  likedPlaces: PlaceInterface[];
}
interface PlaceInterface {
  creator: UserInterface;
  title: string;
  description: string;
  coords: {
    lng: number;
    lat: number;
  };
  photo?: string;
  createdAt: Date;
  liked: UserInterface[];
  viewCount: number;
}
interface CommentInterface {
  commenter: UserInterface;
  receiver: UserInterface;
  place: PlaceInterface;
  comment: string;
  createdAt: Date;
}

export const userSchema = new Schema<UserInterface>({
  username: { type: String, default: "Anon" }, // String is shorthand for {type: String}
  email: { type: String, required: true },
  phone: Number,
  avater: String,
  createdAt: { type: Date, default: Date.now },
  places: [{ type: Schema.Types.ObjectId, ref: "Place" }],
  likedPlaces: [{ type: Schema.Types.ObjectId, ref: "Place" }],
});

export const placeSchema = new Schema<PlaceInterface>({
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  coords: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  photo: String,
  createdAt: { type: Date, default: Date.now },
  liked: [{ type: Schema.Types.ObjectId, ref: "User" }],
  viewCount: Number,
});

export const commentSchema = new Schema<CommentInterface>({
  commenter: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
  place: { type: Schema.Types.ObjectId, ref: "Place", required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = model<UserInterface>("User", userSchema);
export const Place = model<PlaceInterface>("Place", placeSchema);
export const Comment = model<CommentInterface>("Comment", commentSchema);
