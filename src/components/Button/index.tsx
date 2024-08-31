import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
}

export default function Button({
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(
                'px-4 h-11 text-base text-dark-primary bg-yellow-primary font-bold',
                'hover:opacity-90 transition-all duration-300 active:scale-[0.98]',
                className
            )}
        >
            {children}
        </button>
    )
}
