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
  creator?: UserInterface | number;
  title: string;
  description: string;
  address: string;
  photo?: string;
  createdAt: Date;
  liked?: number;
  viewCount?: number;
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
  // creator: { type: Schema.Types.ObjectId || Number, ref: "User", default: 0 },
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  photo: String,
  createdAt: { type: Date, default: Date.now },
  liked: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 },
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
