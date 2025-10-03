"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "react-toastify";

export default function NumGen()
{
    const router = useRouter();
    const [num, setNum] = useState('');

    const generateNumber = async () => {
        const data = await fetch('/api/guess/generate');
        const body = await data.json();
        return body.guess;
    }

    async function submitGuess()
    {
        const request = await fetch('/api/guess', {
            method: 'POST',
            body: JSON.stringify({
                content: num
            })
        })

        const result = await request.json();

        if (result?.status == "existing")
        {
            toast("Number already used.");
        }
        router.refresh();
    }

    return (
        <>
        <form action={submitGuess}>
            <div className="input-group">
                <input required type="text" name="content" minLength={4} maxLength={4} value={num} onChange={(e) => setNum(e.target.value)} className="form-control" />
                <button className="btn btn-outline-light" onClick={async (e) => {
                    e.preventDefault();
                    setNum(await generateNumber());
                }}>Generate</button>
                <button className="btn btn-outline-light" type="submit">Use Number</button>
            </div>
        </form>
        </>
    )
}