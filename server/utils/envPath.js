export const getEnvPath = () => {
  const currentEnv = process.env.NODE_ENV;
  let envPath;

  if (currentEnv === "development") envPath = "./.env.local";
  if (currentEnv === "production") envPath = "./.env.production";

  return envPath;
};
