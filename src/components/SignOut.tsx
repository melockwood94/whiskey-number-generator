"use client"

import { signOut } from "@/lib/auth-client"
import { useRouter } from "next/navigation";

export default function SignOut()
{
    const router = useRouter();
    return (
        <button className="btn btn-outline-light" onClick={async () => {
            await signOut();
            router.refresh();
        }}>Sign Out</button>
    )
}