import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const ValidateGuess = async (guess: string) => {
    return await prisma.guess.findFirst({
        where: {
            content: guess
        }
    }) ? true : false
}

export const GetGuesses = async () => {
    return await prisma.guess.findMany({
        orderBy: {
            createDate: 'desc'
        }
    });
}

export const CreateGuess = async (submitter: string, content: string) => {
    await prisma.guess.create({
        data: {
            submitter,
            content
        }
    })
}