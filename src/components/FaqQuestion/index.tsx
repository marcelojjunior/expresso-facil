import { Accordion, AccordionItemProps, AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa";

interface QuestionItemProps extends AccordionItemProps {
    header: string;
}

export interface QuestionProps {
    id: number;
    question: string;
    answer: string;
}

interface FaqQuestionProps {
    questions?: QuestionProps[];
}

const QuestionItem = ({ header, ...rest }: QuestionItemProps) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}
                <span
                    className={`ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"
                        }`}
                >
                    <FaChevronDown />
                </span>
            </>
        )}
        className="border-b"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left font-bold text-blue-primary ${isEnter && "bg-blue-primary text-white"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{ className: "p-4" }}
    />
);

export default function FaqQuestion({
    questions,
}: FaqQuestionProps) {
    return (
        <div>
            <Accordion transition transitionTimeout={300}>
                {questions?.map((question) => (
                    <QuestionItem key={question.id} header={question.question}>
                        {question.answer}
                    </QuestionItem>
                ))}
            </Accordion>
        </div>
    )
}
