import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import Database from "better-sqlite3";

export const auth = betterAuth({
    database: new Database("./auth.db"),
    plugins: [
        genericOAuth({
            config: [
                {
                    providerId: process.env.OAUTH_PROVIDERID as string,
                    clientId: process.env.OAUTH_CLIENTID as string,
                    clientSecret: process.env.OAUTH_CLIENTSECRET as string,
                    discoveryUrl: process.env.OAUTH_DISCOVERYURL as string
                }
            ]
        })
    ]
});