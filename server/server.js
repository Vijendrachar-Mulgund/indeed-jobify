// Initial Express import
import express from "express";
// Init the Experess server
const app = express();

// Imports
import dotenv from "dotenv";

// Configure the Environment variables
dotenv.config();

const port = process.env.PORT || 8000;

// Server start
app.listen(port, () => {
  console.log(`The server has been started on port http://loaclhost:${port}`);
});
