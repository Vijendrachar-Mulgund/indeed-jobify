import mongoose from "mongoose";

export const connectToMongoDB = () => {
  const connectionString = process.env.MONGO_DB_CONNECTION_URL;
  const connectionPassword = process.env.MONGO_DB_CONNECTION_PASSWORD;
  const connectionStringWithCredentials = connectionString.replace("<password>", connectionPassword);

  return mongoose.connect(connectionStringWithCredentials);
};
