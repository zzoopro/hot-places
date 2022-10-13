import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

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

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
