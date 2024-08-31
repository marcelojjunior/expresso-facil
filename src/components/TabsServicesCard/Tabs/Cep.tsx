import InputText from "../../InputText";
import { CiLocationOn } from "react-icons/ci";
import Button from "../../Button";

export default function Cep() {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        CEP:
                    </label>
                    <InputText
                        icon={<CiLocationOn size={24} />}
                        placeholder="11.111-111"
                    />
                </div>
                <div className="flex flex-col justify-between gap-2 md:col-span-1">
                    <span
                        className="max-md:hidden md:invisible"
                    >
                        Consultar:
                    </span>
                    <Button
                        className="h-12"
                    >
                        Consultar
                    </Button>
                </div>
            </div>
        </div>
    )
}
