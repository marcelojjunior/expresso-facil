import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa"

interface TestimonialsCardProps extends React.HTMLAttributes<HTMLDivElement> {
    testimonial?: string
    name?: string
    image?: string
}

export default function TestimonialsCard({
    testimonial,
    name,
    image,
}: TestimonialsCardProps) {
    return (
        <div className="bg-white p-10 flex flex-col items-center gap-4 shadow-custom">
            <FaQuoteLeft size={32} className="text-yellow-primary" />
            <p className="text-base xl:text-lg text-blue-primary text-center">
                {testimonial}
            </p>
            <div className="flex flex-col items-center gap-3">
                <div className="h-0.5 w-7 bg-yellow-primary" />
                <Image 
                    src={image!}
                    alt={name!}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover object-center"
                />
                <span className="text-sm xl:text-base text-blue-primary">
                    {name}
                </span>
            </div>
        </div>
    )
}
