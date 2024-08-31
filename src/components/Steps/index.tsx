import React, { HtmlHTMLAttributes } from 'react'

export interface StepProps extends HtmlHTMLAttributes<HTMLLIElement> {
    status?: string;
    date?: string;
    description?: string;
    location?: string;
    icon?: React.ReactNode;
    isFirst?: boolean;
}

export default function Steps({
    status,
    date,
    description,
    location,
    icon,
    isFirst = false,
    ...props
}: StepProps) {
    return (
        <li {...props} className='relative pb-10'>
            {!isFirst && (
                <div className='absolute left-5 top-5 -ml-px mt-0.5 h-full w-0.5 bg-gray-200' />
            )}
            <div className='relative flex items-start'>
                <div className='bg-yellow-primary shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-dark-primary'>
                    {icon}
                </div>
                <div className='ml-5 flex flex-col mt-2 w-full text-white'>
                    <span className='text-sm font-medium text-gray-400'>
                        {date}
                    </span>
                    <div className='mt-2 text-sm flex flex-col'>
                        <p className='font-bold'>
                            {status}
                        </p>
                        <span>
                            {description}
                        </span>
                        <span>
                            {location}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    )
}
