import axios from "axios";
import qs from "qs";

import { googleUrls } from "./../config/urls.js";

export const getGoogleOAuthTokens = async ({ code }) => {
  try {
    const url = googleUrls.getGoogleOAuthToken;

    const { GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET, OAUTH_REDIRECT_URL } = process.env;

    const values = {
      code,
      client_id: GOOGLE_OAUTH_CLIENT_ID,
      client_secret: GOOGLE_OAUTH_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: OAUTH_REDIRECT_URL,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const response = await axios.post(url, qs.stringify(values), { headers });

    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getGoogleUser = async ({ id_token, access_token }) => {
  try {
    const url = `${googleUrls.getGoogleUser}=${access_token}`;

    const headers = {
      Authorization: `Bearer ${id_token}`,
    };

    const response = await axios.get(url, headers);

    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const findAndUpdateUser = () => {};
