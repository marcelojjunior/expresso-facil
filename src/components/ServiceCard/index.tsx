import Image from "next/image";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: string;
}

export default function ServiceCard({
    title,
    description,
    icon,
    ...props
}: ServiceCardProps) {
    return (
        <div {...props} className="bg-white hover:bg-blue-primary group shadow-custom p-9 flex flex-col gap-4 items-center transition ease-in-out duration-300">
            <div className="w-28 h-28 rounded-full bg-yellow-primary flex justify-center items-center">
                <Image
                    src={icon!}
                    alt={title!}
                    width={80}
                    height={80}
                    className="w-16"
                />
            </div>
            <div className="flex group-hover:text-white flex-col gap-2 text-center text-blue-primary">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
                <h4 className="text-base">
                    {description}
                </h4>
            </div>
        </div>
    )
}
