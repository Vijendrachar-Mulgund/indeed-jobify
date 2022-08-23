import JWT from "jsonwebtoken";

export const validateToken = (token) => {
  try {
    if (!token) {
      return false;
    }

    const { id, deviceId } = JWT.verify(token, process.env.JWT_SECRET);

    return { id, deviceId };
  } catch (error) {
    console.error("Error in validating token ", error);
    return false;
  }
};
