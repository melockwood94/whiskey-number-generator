import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOut from "./SignOut";

export default async function NavBar()
{
    const session = await auth.api.getSession({
        headers: await headers()
    });

    return (
        <>
        <div>
            <h1>Whiskey Number Generator</h1>
        </div>
        <div>
            <SignOut />
        </div>
        </>
    )
}