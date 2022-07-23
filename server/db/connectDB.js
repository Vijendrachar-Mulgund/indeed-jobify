import mongoose from "mongoose";

export const connectToMongoDB = () => {
  const connectionString = process.env.MONGO_DB_CONNECTION_URL;
  const connectionPassword = process.env.MONGO_DB_CONNECTION_PASSWORD;
  const databaseName = process.env.MONGO_DB_NAME;
  let connectionStringWithCredentials = connectionString.replace("<password>", connectionPassword);
  connectionStringWithCredentials = connectionStringWithCredentials.replace("<database_name>", databaseName);

  return mongoose.connect(connectionStringWithCredentials);
};
