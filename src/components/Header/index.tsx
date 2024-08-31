'use client'

import Image from 'next/image';

import logoExpresso from '@/assets/images/expresso-logo.png';
import Link from 'next/link';
import { Drawer } from 'vaul';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        function onResize() {
            if (document.body.offsetWidth > 1280) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <header className='flex flex-col bg-yellow-primary'>
            <nav className='container mx-auto flex items-center justify-between py-2 px-4'>
                <Link href={'/'}>
                    <Image src={logoExpresso} alt="Logo" className='w-20' />
                </Link>
                <ul className='hidden lg:flex items-center gap-10 '>
                    <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Serviços
                    </li>
                    <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Sobre Nós
                    </li>
                    <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        FAQ
                    </li>
                    <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Contato
                    </li>
                    <Link href={'tracking'} className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Rastreio
                    </Link>
                    {/* <Link href={'/'}
                        className='text-black-primary font-medium text-lg bg-yellow-primary px-6 py-2 rounded-full hover:opacity-80'
                    >
                        Contato
                    </Link> */}
                </ul>
                <div className='lg:hidden'>
                    <Drawer.Root
                        direction="left"
                        open={isOpen}
                        onOpenChange={(open) => {
                            setIsOpen(open)
                        }}
                    >
                        <Drawer.Trigger asChild>
                            <span className='text-blue-primary'>
                                <GiHamburgerMenu size={32} />
                            </span>
                        </Drawer.Trigger>

                        <Drawer.Overlay className="bg-black/40 absolute inset-0 z-20 h-screen" />

                        <Drawer.Portal>
                            <Drawer.Content
                                className="bg-yellow-primary flex h-full flex-col w-[80%] max-w-lg top-0 fixed shadow-dropdown z-20"
                                aria-describedby={undefined}
                            >
                                <Drawer.Title className="hidden" />

                                <nav
                                    aria-roledescription="Main mobile navigation"
                                    className="overflow-y-auto p-4 h-full focus-visible:outline-none"
                                >
                                    <div className="flex items-center justify-between">
                                        <Link href={'/'}>
                                            <Image src={logoExpresso} alt="Logo" className='w-20' />
                                        </Link>
                                        <Drawer.Close asChild>
                                            <span className='text-blue-primary'>
                                                <IoCloseSharp size={32} />
                                            </span>
                                        </Drawer.Close>
                                    </div>
                                    <ul className='flex flex-col gap-5 mt-6'>
                                        <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                                            Serviços
                                        </li>
                                        <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                                            Sobre Nós
                                        </li>
                                        <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                                            FAQ
                                        </li>
                                        <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                                            Contato
                                        </li>
                                        <Link href={'tracking'} className='text-blue-primary font-medium text-lg hover:opacity-80'>
                                            Rastreio
                                        </Link>
                                    </ul>
                                </nav>
                            </Drawer.Content>
                        </Drawer.Portal>
                    </Drawer.Root>
                </div>

            </nav>
        </header>
    )
}