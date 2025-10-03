import { createAuthClient } from "better-auth/react";
import { genericOAuthClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    baseURL: process.env.URL,
    plugins: [
        genericOAuthClient()
    ]
});

export const { signIn, signOut, useSession } = authClient;