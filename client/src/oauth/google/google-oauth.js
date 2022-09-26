export const getGoogleOAuthURI = () => {
  const rootUrl = process.env.REACT_APP_GOOGLE_OAUTH_ROOT_URI;

  const { REACT_APP_GOOGLE_OAUTH_CLIENT_ID, REACT_APP_GOOGLE_OAUTH_REDIRECT_URI, REACT_APP_API_BASE_URL } = process.env;

  const redirectUri = REACT_APP_GOOGLE_OAUTH_REDIRECT_URI.replace("<base_url>", REACT_APP_API_BASE_URL);

  const scope = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ].join(" ");

  const options = {
    redirect_uri: redirectUri,
    client_id: REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope,
  };

  const queryString = new URLSearchParams(options);

  return `${rootUrl}?${queryString}`;
};
