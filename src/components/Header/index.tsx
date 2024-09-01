'use client'

import Image from 'next/image';

import logoExpresso from '@/assets/images/expresso-logo.png';
import Link from 'next/link';
import { Drawer } from 'vaul';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MouseEvent, useEffect, useState } from 'react';
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

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        setIsOpen(false);
        const targetElement = document.querySelector(targetId);

        const elementPosition = targetElement?.getBoundingClientRect().top;
        const offsetPosition = elementPosition! - 10;
        if (targetElement) {
            setTimeout(() => {
                window.scrollTo({ top: offsetPosition - 35, behavior: 'smooth' });
            }, 500);
        }
    };

    return (
        <header id='header' className='flex flex-col bg-yellow-primary'>
            <nav className='container mx-auto flex items-center justify-between py-2 px-4 relative'>
                <Link href={'/'}>
                    <Image src={logoExpresso} alt="Logo" className='w-20' />
                </Link>
                <ul className='hidden lg:flex items-center gap-10'>
                    <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        <Link href={'#ourServices'}>
                            Serviços
                        </Link>
                    </li>
                    <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        <Link href={'#contactUs'}>
                            Contato
                        </Link>
                    </li>
                    <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Perguntas Frequentes
                    </li>
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
                                            <Link href={'#ourServices'} onClick={(e) => handleLinkClick(e, '#ourServices')}>
                                                Serviços
                                            </Link>
                                        </li>
                                        <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                                            <Link href={'#contactUs'} onClick={(e) => handleLinkClick(e, '#contactUs')}>
                                                Contato
                                            </Link>
                                        </li>
                                        <li className='text-blue-primary font-medium text-lg hover:opacity-80'>
                                            Perguntas Frequentes
                                        </li>
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