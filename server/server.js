// Initial Express import
import express from "express";
// Init the Experess server
const app = express();

// Imports
import dotenv from "dotenv";

import { connectToMongoDB } from "./db/connectDB.js";

// Middleware Imports
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware.js";

// Configure the Environment variables
dotenv.config();

const port = process.env.PORT || 8000;

app.get("/", (request, response) => {
  throw new Error();
});

/* Apply Middlewares */
// Error handler
app.use(errorHandlerMiddleware);

// Route not found
app.use(notFoundMiddleware);

// Connet to DB and start the server
const serverInit = async () => {
  try {
    await connectToMongoDB();
    app.listen(port, () => {
      console.log(`The server has been started on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to Database and Start the server 🚫", error);
  }
};

// Server start
serverInit();
