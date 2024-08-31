import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonItemTabProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

export default function ButtonItemTab({
    active,
    className,
    children,
    ...props
}: ButtonItemTabProps) {
    return (
        <button
            {...props}
            className={twMerge(
                "text-base lg:text-lg font-bold py-3 lg:py-4 px-4 lg:px-8 hover:bg-blue-primary hover:text-white",
                "transition ease-in-out duration-300",
                active ? "text-blue-primary bg-white " : "text-zinc-400 bg-zinc-50",
                className
            )}
        >
            {children}
        </button>
    )
}
