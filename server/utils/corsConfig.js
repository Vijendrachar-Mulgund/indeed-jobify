const allowList = ["http://localhost:3000"];

export const corsOptions = () => {
  return {
    origin: allowList,
    credentials: true,
  };
};
