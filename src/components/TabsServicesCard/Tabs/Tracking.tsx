import { BsBoxSeam } from "react-icons/bs";
import InputText from "../../InputText";
import Button from "../../Button";

export default function Tracking() {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Código:
                    </label>
                    <InputText
                        icon={<BsBoxSeam size={24} />}
                        placeholder="AA111222333BR"
                    />
                </div>
                <div className="flex flex-col justify-between gap-2 md:col-span-1">
                    <span
                        className="max-md:hidden md:invisible"
                    >
                        Rastrear:
                    </span>
                    <Button
                        className="h-12"
                    >
                        Rastrear
                    </Button>
                </div>
            </div>
        </div>
    )
}
