import ServiceCard from "../ServiceCard";
import deliveryIcon from '@/assets/images/delivery.png';
import shieldIcon from '@/assets/images/shield.png';
import boxIcon from '@/assets/images/box.png';

const cardServices = [
    {
        id: 1,
        title: "Postagem",
        description: "Envie suas encomendas com agilidade e confiança, do jeito que você precisa.",
        icon: deliveryIcon
    },
    {
        id: 2,
        title: "Recebimento",
        description: "Sua encomenda sempre em boas mãos. Receba suas compras com total segurança.",
        icon: shieldIcon
    },
    {
        id: 3,
        title: "Rastreamento",
        description: "Acompanhe suas encomendas em tempo real, do despacho até a entrega.",
        icon: boxIcon
    }
]

export default function OurServices() {
    return (
        <div className="container mx-auto px-4 mb-20 flex flex-col gap-10">
            <div className="flex flex-col items-center gap-4 text-blue-primary">
                <h2 className="text-4xl xl:text-5xl font-bold">
                    Nossos Serviços
                </h2>
                <p className="w-full lg:w-3/5 text-center text-base xl:text-lg">
                    Na Expresso Fácil, oferecemos soluções completas para todas as suas
                    necessidades de encomendas. Desde o recebimento até a devolução,
                    garantimos agilidade, segurança e praticidade em cada etapa do processo.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cardServices.map((service) => (
                    <ServiceCard 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon.src}
                    />
                ))}
            </div>
        </div>
    )
}
