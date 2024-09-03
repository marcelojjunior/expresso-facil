import TestimonialsCard from "../TestimonialsCard";

const testemonials = [
    {
        id: 1,
        name: 'Marcelo Jr.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: 'Uso o serviço de recebimento deles e nunca me preocupo mais com horários. Super prático!'
    },
    {
        id: 2,
        name: 'Maria F.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: 'Encontrei a solução perfeita para meus envios com a Expresso Fácil. Sempre profissionais!'
    },
    {
        id: 3,
        name: 'Carlos M.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: 'A equipe da Expresso Fácil é incrível. Sempre resolvem qualquer problema com rapidez.'
    }
]

export default function Testimonials() {
    return (
        <div id="testimonials" className="container mx-auto px-4 flex flex-col gap-8 xl:gap-20 mb-14 xl:mb-20">
            <div className="flex flex-col items-center gap-4 text-blue-primary max-xl:px-4">
                <h2 className="text-4xl xl:text-5xl font-bold text-center">
                    Depoimentos
                </h2>
                <p className="w-full lg:w-3/5 text-center text-base xl:text-lg">
                    Confira o que nossos clientes dizem! Na Expresso Fácil, nos dedicamos a oferecer a melhor
                    experiência em cada entrega.
                </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {testemonials.map((testemonial) => (
                    <TestimonialsCard
                        key={testemonial.id}
                        name={testemonial.name}
                        image={testemonial.image}
                        testimonial={testemonial.testimonial}
                    />
                ))}
            </div>
        </div>
    )
}
