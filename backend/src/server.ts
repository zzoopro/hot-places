import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import postsRouter from "./routers/postsRouter";

dotenv.config();

const server: Express = express();
const PORT = process.env.PORT;

server.use(cors());

server.get("/", (req: Request, res: Response) => {
  console.log("called");
  res.send("Express + TypeScript Server");
});

server.use("/api/posts", postsRouter);

console.log("db_url", process.env.DB_URL);

mongoose
  .connect(process.env.DB_URL)
  .then(() => startServer())
  .catch((error) => console.log("DB Not Connected.", `ERROR: ${error}`));

function startServer() {
  server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
}
