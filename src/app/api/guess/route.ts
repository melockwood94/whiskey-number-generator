import { isAuthenticated } from "@/lib/apiAuth";
import { auth } from "@/lib/auth";
import { CreateGuess, GetGuesses, ValidateGuess } from "@/lib/data/guess"
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async () => {
    if (await !isAuthenticated()) return Response.json({}, { status: 401 });

    return Response.json(await GetGuesses());
}

export const POST = async (request: NextRequest) => {
    if (await !isAuthenticated()) return Response.json({}, { status: 401 });
    
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const data = await request.json();

    const existingGuess = await ValidateGuess(data.content);

    if (!existingGuess)
    {
        await CreateGuess(session!.user.name, data.content);
        return Response.json({ }, { status: 201 });
    }

    return Response.json({ status: 'existing' });
}