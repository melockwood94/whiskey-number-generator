import { isAuthenticated } from "@/lib/apiAuth";
import { ValidateGuess } from "@/lib/data/guess";

const generateNumber = () => {
    return Math.random().toString().substring(2,6);
}

export const GET = async () => {
    if (await !isAuthenticated()) return Response.json({}, { status: 401 });

    let guess = '';

    do
    {
        guess = generateNumber();
    }
    while (await ValidateGuess(guess));

    return Response.json({ guess: guess });
}