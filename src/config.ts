import { type TAuthConfig } from "react-oauth2-code-pkce";

export const config = {
    remoteBaseUrl: "https://gliding.net.nz",
};

export const authConfig: TAuthConfig = {
    clientId: "019f8910-6d52-71c5-95e4-945fa1139039",
    authorizationEndpoint: `${config.remoteBaseUrl}/oauth/authorize`,
    tokenEndpoint: `${config.remoteBaseUrl}/oauth/token`,
    redirectUri: "http://localhost:5173/callback",
    scope: "user:read",
};