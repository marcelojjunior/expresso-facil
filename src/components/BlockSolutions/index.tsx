
import imageBlock from "@/assets/images/receive-orders.jpg";
import imageSendOrder from "@/assets/images/send-orders.jpg";
import Image from "next/image";

export default function BlockSolutions() {
    return (
        <div className="container mx-auto xl:px-4 flex flex-col gap-8 xl:gap-20 mb-10">
            <div className="flex flex-col items-center gap-4 text-blue-primary max-xl:px-4">
                <h2 className="text-4xl xl:text-5xl font-bold text-center">
                    Serviços que Facilitam o Seu Dia a Dia
                </h2>
            </div>
            <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 gap-6 xl:gap-8">
                <div className="xl:w-[80%] flex flex-col justify-center max-xl:px-4">
                    <div className="flex flex-col justify-center gap-4 text-blue-primary">
                        <h3 className="text-xl xl:text-3xl font-bold">
                            Não Está em Casa para Receber Suas Encomendas?
                        </h3>
                        <p className="w-full text-base xl:text-lg">
                            Com a Expresso Fácil, você não precisa se preocupar! Use nosso endereço para receber
                            suas encomendas com segurança e total comodidade. Garantimos o armazenamento adequado
                            e você pode retirar no melhor horário para você.
                        </p>
                    </div>
                </div>
                <Image
                    src={imageBlock}
                    alt="Recebemos suas encomendas"
                    className="w-full h-64 md:h-96 object-cover"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 xl:gap-8">
                <Image
                    src={imageSendOrder}
                    alt="Recebemos suas encomendas"
                    className="w-full h-64 md:h-96 object-cover"
                    width={500}
                    height={500}
                />
                <div className="xl:w-[80%] flex flex-col justify-center max-xl:px-4 xl:pl-10">
                    <div className="flex flex-col justify-center gap-4 text-blue-primary">
                        <h3 className="text-xl xl:text-3xl font-bold">
                            Envie Suas Encomendas com Tranquilidade e Confiança!
                        </h3>
                        <p className="w-full text-base xl:text-lg">
                            Na Expresso Fácil, você pode contar com a postagem ágil e eficiente das suas encomendas. 
                            Cuidamos de todo o processo de envio para garantir que seus pacotes cheguem ao destino no 
                            menor tempo possível e com total segurança.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
