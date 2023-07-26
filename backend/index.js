import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/db.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import route from "./Routes/userRoute.js";

const PORT = process.env.PORT || 2000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", route);

app.use(notFound);
app.use(errorHandler);

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
