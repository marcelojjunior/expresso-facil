import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
    measure?: string
}
export default function InputText({
    icon,
    measure,
    className,
    ...props
}: InputTextProps) {
    return (
        <div className="flex items-center gap-2 w-full h-12 py-2 px-3 bg-zinc-50">
            {icon}
            <input
                {...props}
                type="text"
                className={twMerge(
                    "bg-transparent w-full h-full text-base text-blue-primary focus-within:outline-none focus-visible:outline-none",
                    className
                )}
            />
            {measure && (
                <span>
                    {measure}
                </span>
            )}
        </div>
    )
}
