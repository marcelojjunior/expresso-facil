import FaqQuestion from "../FaqQuestion";

const questions = [
    {
        id: 1,
        question: "What is Lorem Ipsum?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
        id: 2,
        question: "Why do we use it?",
        answer: "Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."
    },

    {
        id: 3,
        question: "Where does it come from?",
        answer: "Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae."
    },

    {
        id: 4,
        question: "Where can I get some?",
        answer: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum non augue sed nisl tempor."
    },
]

export default function Faq() {
    return (
        <div id="faq" className="container mx-auto px-4 flex flex-col gap-8 xl:gap-20 mb-14 xl:mb-20">
            <div className="flex flex-col items-center gap-4 text-blue-primary max-xl:px-4">
                <h2 className="text-4xl xl:text-5xl font-bold text-center">
                    Perguntas Frequentes
                </h2>
                <p className="w-full lg:w-3/5 text-center text-base xl:text-lg">
                    Tem dúvidas sobre nossos serviços? Confira as perguntas mais frequentes e encontre respostas
                    rápidas para facilitar o uso da Expresso Fácil. Estamos aqui para ajudar!
                </p>
            </div>
            <div>
                <FaqQuestion
                    questions={questions}
                />
            </div>
        </div>
    )
}
