import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    asLink?: boolean;
    loading?: boolean
    linkProps?: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
}

export default function Button({
    asLink = false,
    loading = false,
    linkProps = { href: '' },
    children,
    className,
    ...props
}: ButtonProps) {
    const { href: hrefLink } = linkProps
    const defaultClassNames = 'px-4 h-11 text-base text-dark-primary bg-yellow-primary font-bold hover:bg-blue-primary hover:text-white transition-all duration-300 active:scale-[0.98]';

    if (asLink) {
        return (
            <Link
                {...linkProps}
                href={hrefLink || ''}
                className={twMerge(
                    'w-full flex items-center justify-center',
                    defaultClassNames,
                    className
                )}
            >
                {children}
            </Link>
        )
    } else {
        return (
            <button
                disabled={loading}
                {...props}
                className={twMerge(
                    "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-yellow-primary disabled:hover:text-blue-primary",
                    defaultClassNames,
                    className,
                )}
            >
                {children}
            </button>
        )
    }


}
