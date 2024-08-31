import { BsBoxSeam } from "react-icons/bs";
import InputText from "../../InputText";
import { CiLocationOn } from "react-icons/ci";
import Button from "../../Button";

export default function Shipping() {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Origem:
                    </label>
                    <InputText
                        icon={<CiLocationOn size={24} />}
                        placeholder="CEP"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Destino:
                    </label>
                    <InputText
                        icon={<CiLocationOn size={24} />}
                        placeholder="CEP"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Altura:
                    </label>
                    <InputText
                        icon={<BsBoxSeam size={24} />}
                        placeholder="Entre 1 e 100"
                        measure="CM"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Largura:
                    </label>
                    <InputText
                        icon={<BsBoxSeam size={24} />}
                        placeholder="Entre 8 e 100"
                        measure="CM"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Comprimento:
                    </label>
                    <InputText
                        icon={<BsBoxSeam size={24} />}
                        placeholder="Entre 13 e 100"
                        measure="CM"
                    />
                </div>
                <div className="flex flex-col justify-between gap-2">
                    <span
                        className="max-md:hidden md:invisible"
                    >
                        Calcular:
                    </span>
                    <Button
                        className="h-12"
                    >
                        Calcular
                    </Button>
                </div>
            </div>
        </div>
    )
}
