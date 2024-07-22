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
            className="flex gap-2 w-full max-w-xs"
        >
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
    )
}
