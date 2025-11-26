import OauthClient from "oauth-v2-client";

const api = new OauthClient({
  oauthOptions: {
    clientId: "client_id_value",
    clientSecret: "client_secret_value",
    callbackUrl: "http://my-app.example.com/callback",
    accessTokenUrl: "https://example.com/oauth2/access_token",
    authUrl: "https://example.com/oauth2/authorize",
    apiBaseURL: "https://api.example.com",
  }
});
