import express, { response } from "express";

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The server has been started on port http://loaclhost:${port}`);
});
