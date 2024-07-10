import { HtmlHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
}

export default function Layout({ children, className, ...props }: LayoutProps) {
    return (
        <div
            {...props}
            className={twMerge(
                'container mx-auto',
                className
            )}
        >
            {children}
        </div>
    )
}
