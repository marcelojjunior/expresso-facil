import Image from 'next/image';

import logoExpresso from '@/assets/images/logo.svg';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex flex-col'>
            <div className='container mx-auto flex items-center justify-between py-2'>
                <Link href={'/'}>
                    <Image src={logoExpresso} alt="Logo" className='' />
                </Link>
                <div className='flex items-center gap-10'>
                    <span className='text-gray-primary text-lg hover:opacity-80'>
                        Serviços
                    </span>
                    <span className='text-gray-primary text-lg hover:opacity-80'>
                        FAQ
                    </span>
                    <Link href={'tracking'} className='text-gray-primary text-lg hover:opacity-80'>
                        Rastreio
                    </Link>
                    <Link href={'/'}
                        className='text-black-primary text-lg bg-yellow-primary px-6 py-2 rounded-full hover:opacity-80'
                    >
                        Contato
                    </Link>
                </div>
            </div>
        </header>
    )
}