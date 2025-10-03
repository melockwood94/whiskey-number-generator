import { headers } from "next/headers";
import { auth } from "./auth";

export const isAuthenticated = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session)
    {
        return false;
    }

    return true;
}