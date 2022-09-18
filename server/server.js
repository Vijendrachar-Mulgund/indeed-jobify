// Initial Express import
import express from "express";

import mongoose from "mongoose";

// Init the Experess server
const app = express();

// Imports
import dotenv from "dotenv";
import cors from "cors";
import { connectToMongoDB } from "./db/connectDB.js";

// Route handler Imports
import authRoutes from "./routes/authRoutes.js";

// Middleware Imports
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware.js";

import { corsOptions } from "./utils/corsConfig.js";

// Configure the Environment variables
dotenv.config();

// CORS handling
app.use(cors(corsOptions()));

// JSON Body parser
app.use(express.json());

const port = process.env.PORT || 8000;

// The Route handlers
app.use("/api/v1/auth", authRoutes);

/* Apply Middlewares */
// Error handler
app.use(errorHandlerMiddleware);

// Route not found
app.use(notFoundMiddleware);

let server;

// Connet to DB and start the server
const serverInit = async () => {
  try {
    await connectToMongoDB();
    console.info("Connection to Database successful 📚");
    server = app.listen(port, () => {
      console.info(`The server has been started on port ${port} 🚀`);
    });
  } catch (error) {
    console.error("Unable to connect to Database and Start the server 🚫", error);
  }
};

// Server start
serverInit();

// Handle server shutdown
process.on("SIGINT", () => {
  try {
    mongoose.connection.close(false, () => {
      console.info("\nThe Database connection has been closed! 📚");
      server.close();
      console.info("The server has been shut down! 🚫");
    });
  } catch (error) {
    console.error("SIGINT signal -> Something went wrong. Closing server. 💥");
    process.exit(0);
  }
});
