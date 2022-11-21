import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const app = express();

export default app.use((req, res, next) => {
  const authText = req.headers.authorization;
  if (authText && typeof authText === "string") {
    const token = authText.split(" ")[1];
    const { userId } = jwt.verify(token, process.env.PRIVATE_KEY) as JwtPayload;
    return next();
  } else {
    const error = new Error("Not Authrization.");
    return next(error);
  }
});
