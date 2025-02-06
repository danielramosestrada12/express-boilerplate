import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import AppError from "../utils/appError";

const app = express();

// Access-Control-Allow-Origin *
app.use(cors());
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.json());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Global Error Handler for all routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
