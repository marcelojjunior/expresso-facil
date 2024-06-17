import waveBg from '../../assets/images/wave.svg';
import hero from '../../assets/images/hero.svg';


export default function Banner() {
    return (
        <div
            style={{ backgroundImage: `url(${waveBg})` }}
            className={`w-full bg-no-repeat bg-right-top bg-contain min-h-[52rem] flex items-center -mt-40`}
        >
            <div className='container mx-auto grid grid-cols-2'>
                <div className='flex flex-col justify-center w-3/4'>
                    <h1 className='text-blue-primary text-5xl font-bold'>
                        Lorem ipsum
                    </h1>
                    <h2 className='text-blue-primary text-xl mt-2'>
                        It is a long established fact that a reader will be distracted by the readable content of
                    </h2>
                </div>
                <div className='flex items-center justify-end pt-28'>
                    <img src={hero} alt="hero" className='w-[45rem]' />
                </div>
            </div>
        </div>
    )
}
