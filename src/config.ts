import { type TAuthConfig } from "react-oauth2-code-pkce";

export const config = {
    remoteBaseUrl: "http://gliding.net.test",
};

export const authConfig: TAuthConfig = {
    clientId: "019add17-b5fe-71f3-bb4c-10a648705737",
    authorizationEndpoint: `${config.remoteBaseUrl}/oauth/authorize`,
    tokenEndpoint: `${config.remoteBaseUrl}/oauth/token`,
    redirectUri: "http://localhost:5173/callback",
    scope: "user:read",
};