import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bp from "body-parser";
import session from "express-session";
import fs from "fs"
import https from "https"

import placesRouter from "./routers/placesRouter";
import usersRouter from "./routers/usersRouter";


const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");

dotenv.config();

const server: Express = express();
const PORT = process.env.PORT;

server.use(cors());
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

server.set('trust proxy', 1)
server.use(
  session({
    secret: "hotplaces",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);
server.use("/api/places", placesRouter);
server.use("/api/users", usersRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => startServer())
  .catch((error) => console.log("DB Not Connected.", `ERROR: ${error}`));

function startServer() {
  server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}


