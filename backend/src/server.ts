import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bp from "body-parser";
import session from "express-session";

import placesRouter from "./routers/placesRouter";
import usersRouter from "./routers/usersRouter";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
    },
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    // req.session.destroy(() => {});
    console.log(sessions);
    console.log("try");
    next();
  });
});

app.use("/api/places", placesRouter);
app.use("/api/users", usersRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => startServer())
  .catch((error) => console.log("DB Not Connected.", `ERROR: ${error}`));

function startServer() {
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}

export default app;
