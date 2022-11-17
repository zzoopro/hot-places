import { Express, Request, Response } from "express";
import { User } from "../db/schema";
import crypto from "crypto";
import { isEmpty } from "../utils";

export const signup = async (req: Request, res: Response) => {
  if (req.body) {
    const { email, password, phone, username } = req.body;
    const exitUser = await User.find({
      $or: [{ email }, { phone }, { username }],
    });
    if (isEmpty(exitUser)) {
      console.log();
      return res.status(400).json({
        ok: false,
        message: "aleady joined user",
      });
    } else {
      const hashed = crypto
        .createHash("sha256")
        .update(password)
        .digest("base64");
      const newUser = new User({ email, password: hashed, phone, username });
      if (newUser) {
        console.log(newUser);
        await newUser.save();
        return res.json({ ok: true });
      }
    }
  }
};

export const login = async (req: Request, res: Response) => {
  if (req.body) {
    const { email, password } = req.body;
    const user: any = await User.findOne({ email });

    if (isEmpty(user)) {
      return res.status(400).json({ ok: false, message: "not found User" });
    }
    if (
      user.password !==
      crypto.createHash("sha256").update(password).digest("base64")
    ) {
      return res.status(400).json({ ok: false, message: "password incorrect" });
    }
    console.log("logined")
    res.cookie("good", "good")
    return res.json({ ok: true });
  }
};
