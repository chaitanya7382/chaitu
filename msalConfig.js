// src/msalConfig.js

import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID", // Microsoft App client ID
    authority: `https://login.microsoftonline.com/YOUR_TENANT_ID`, // Directory (tenant) ID
    redirectUri: "http://localhost:3000",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
