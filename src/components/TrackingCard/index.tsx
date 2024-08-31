'use client';

import { twMerge } from "tailwind-merge";
import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingCard() {
    const [code, setCode] = useState("");
    const router = useRouter();

    const handleChangeCode = (val: string) => {
        const sanitizedValue = val.replace(/[^a-zA-Z0-9]/g, '');

        if (sanitizedValue.length <= 13) {
            setCode(sanitizedValue.toUpperCase());
        }
    };

    return (
        <div
            className="flex flex-col items-end"
        >
            <div className="bg-slate-700 px-4 py-2 w-max rounded-t-2xl">
                <span className="text-xl text-yellow-primary">
                    Rastreio
                </span>
            </div>
            <div className="flex flex-col gap-4 w-[80%] bg-slate-700 py-6 px-4 rounded-b-2xl rounded-tl-2xl">
                <div className="flex gap-2 w-full">
                    <input
                        type="text"
                        value={code}
                        placeholder="AB123456789BR"
                        className={twMerge(
                            "w-full rounded-xl bg-transparent border border-gray-primary",
                            "text-base text-gray-primary px-4 focus-within:outline-none"
                        )}
                        onChange={e => handleChangeCode(e.target.value)}
                    />
                    <Button
                        onClick={() => {
                            router.push(`tracking/?code=${code}`)
                        }}
                    >
                        Rastrear
                    </Button>
                </div>
                <span className="text-sm text-slate-400">
                    Lorem ipsum
                </span>
            </div>
        </div>
    )
}
