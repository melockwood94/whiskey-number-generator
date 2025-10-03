"use client";

import { signIn } from "@/lib/auth-client";

export default function SignIn() {
    return (
        <>
        <h1>Whiskey Number Generator</h1>
        <button className="btn btn-outline-light" onClick={async () => {
            await signIn.oauth2({
                providerId: "rogue-numbers",
                callbackURL: "/"
            })
        }}>Sign in</button>
        </>
    )
}