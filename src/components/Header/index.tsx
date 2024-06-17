import { AiFillInstagram } from 'react-icons/ai'
import { FaClock, FaFacebook, FaLocationDot } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import logoExpresso from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <header className='flex flex-col relative z-10'>
            <div className='w-full bg-blue-primary'>
                <div className='container mx-auto flex justify-between'>
                    <div className='flex items-center gap-3 py-2'>
                        <div className='flex items-center gap-1'>
                            <FaLocationDot className='text-yellow-primary' />
                            <span className='text-white text-xs'>
                                Av. João Pessoa, 1528, Centro
                            </span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <IoMail className='text-yellow-primary' />
                            <span className='text-white text-xs'>
                                contato@example.com
                            </span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaClock className='text-yellow-primary' />
                            <span className='text-white text-xs'>
                                Seg. à Sex. das 8h às 18h
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link to='#'>
                            <AiFillInstagram className='text-yellow-primary' />
                        </Link>
                        <Link to='#'>
                            <FaFacebook className='text-yellow-primary' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex items-center justify-between py-2'>
                <Link to='/'>
                    <img src={logoExpresso} alt="Logo" className='' />
                </Link>
                <div className='flex items-center gap-10'>
                    <Link to='/' className='text-blue-primary text-lg hover:opacity-80'>
                        Home
                    </Link>
                    <Link to='/services' className='text-blue-primary text-lg hover:opacity-80'>
                        Serviços
                    </Link>
                    <Link to='/faq' className='text-blue-primary text-lg hover:opacity-80'>
                        FAQ
                    </Link>
                    <Link to='/contact' className='text-blue-primary text-lg hover:opacity-80'>
                        Contato
                    </Link>
                    <Link
                        to='/tracking'
                        className='text-yellow-primary text-lg bg-blue-primary px-6 py-2 rounded-full hover:opacity-80'
                    >
                        Rastreio
                    </Link>
                </div>
            </div>
        </header>
    )
}
