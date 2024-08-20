import Image from 'next/image';

import logoExpresso from '@/assets/images/expresso-logo.png';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex flex-col bg-yellow-primary'>
            <div className='container mx-auto flex items-center justify-between py-2'>
                <Link href={'/'}>
                    <Image src={logoExpresso} alt="Logo" className='w-28' />
                </Link>
                <div className='flex items-center gap-10'>
                    <span className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Serviços
                    </span>
                    <span className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Sobre Nós
                    </span>
                    <span className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        FAQ
                    </span>
                    <span className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Contato
                    </span>
                    <Link href={'tracking'} className='text-blue-primary font-medium text-lg hover:opacity-80'>
                        Rastreio
                    </Link>
                    {/* <Link href={'/'}
                        className='text-black-primary font-medium text-lg bg-yellow-primary px-6 py-2 rounded-full hover:opacity-80'
                    >
                        Contato
                    </Link> */}
                </div>
            </div>
        </header>
    )
}