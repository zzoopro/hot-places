import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const server: Express = express();
const PORT = process.env.PORT;

server.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
