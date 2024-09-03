import Image from "next/image";
import logoExpresso from '@/assets/images/expresso-logo.png';
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-blue-primary py-10">
            <div className="container mx-auto px-4 flex flex-col items-center gap-8">
                <Image src={logoExpresso} alt="Logo" className='w-20' />
                <ul className='flex max-md:flex-col items-center gap-5 md:gap-10'>
                    <li className='text-white font-medium text-lg hover:opacity-80'>
                        <Link href={'#ourServices'}>
                            Serviços
                        </Link>
                    </li>
                    <li className='text-white font-medium text-lg hover:opacity-80'>
                        <Link href={'#contactUs'}>
                            Contato
                        </Link>
                    </li>
                    <li className='text-white font-medium text-lg hover:opacity-80'>
                        <Link href={'#testimonials'}>
                            Depoimentos
                        </Link>
                    </li>
                    <li className='text-white font-medium text-lg hover:opacity-80'>
                        <Link href={'#faq'}>
                            Perguntas Frequentes
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <Link
                        href={'https://www.instagram.com/expressofacil.bls'}
                        target={'_blank'}
                        className="text-white hover:text-yellow-primary transition ease-in-out duration-300"
                    >
                        <FaInstagram size={24} />
                    </Link>
                    <Link
                        href={'https://api.whatsapp.com/send?phone=5599988264855'}
                        target={'_blank'}
                        className="text-white hover:text-yellow-primary transition ease-in-out duration-300"
                    >
                        <FaWhatsapp size={24} />
                    </Link>
                </div>
                <span className="text-sm text-gray-400">
                    © Expresso Fácil 2024 - Todos os direitos reservados
                </span>
            </div>

        </div>
    )
}
