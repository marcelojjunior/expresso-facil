import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { CiClock2, CiLocationOn, CiMail } from "react-icons/ci";
import Map from "../Map";

export default function ContactUs() {
    return (
        <div id="contactUs" className="container mx-auto xl:px-4 flex flex-col gap-8 xl:gap-20 mb-14 xl:mb-20">
            <div className="flex flex-col items-center gap-4 text-blue-primary max-xl:px-4">
                <h2 className="text-4xl xl:text-5xl font-bold text-center">
                    Entre em Contato
                </h2>
                <p className="w-full lg:w-3/5 text-center text-base xl:text-lg">
                    Entre em contato com a Expresso Fácil! Estamos prontos para esclarecer suas dúvidas, ajudar
                    com suas encomendas e oferecer soluções personalizadas. Fale conosco e descubra como podemos
                    facilitar a sua logística.
                </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center gap-8 max-xl:px-4">
                    <div className="grid grid-cols-2 gap-4 md:flex md:gap-20">
                        <div className="flex flex-col gap-2 md:w-64">
                            <div className="w-12 h-12 bg-yellow-primary rounded-full flex items-center justify-center text-blue-primary">
                                <CiLocationOn size={24} />
                            </div>
                            <div className="flex flex-col text-blue-primary">
                                <p className="text-base font-semibold">Endereço</p>
                                <span className="text-lg">Av. João Pessoa, 1528, Centro, Balsas-Ma, 65800-000</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-12 h-12 bg-yellow-primary rounded-full flex items-center justify-center text-blue-primary">
                                <CiClock2 size={24} />
                            </div>
                            <div className="flex flex-col text-blue-primary">
                                <p className="text-base font-semibold">Funcionamento</p>
                                <span className="text-lg">Seg. a Sex. das 8h às 18h</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:flex md:gap-20 md:mt-8">
                        <div className="flex flex-col gap-2 md:w-64">
                            <div className="w-12 h-12 bg-yellow-primary rounded-full flex items-center justify-center text-blue-primary">
                                <AiOutlinePhone size={24} />
                            </div>
                            <div className="flex flex-col text-blue-primary">
                                <p className="text-base font-semibold">Telefone</p>
                                <Link href="https://api.whatsapp.com/send?phone=5599988264855" className="text-lg">
                                    (99) 98826-4855
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-12 h-12 bg-yellow-primary rounded-full flex items-center justify-center text-blue-primary">
                                <CiMail size={24} />
                            </div>
                            <div className="flex flex-col text-blue-primary">
                                <p className="text-base font-semibold">Email</p>
                                <Link href="mailto:expressofacilbls@gmail" className="text-lg break-words">
                                    expressofacilbls@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Map />
                </div>
            </div>
        </div>
    )
}
