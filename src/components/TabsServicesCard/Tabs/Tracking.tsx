import { BsBoxSeam } from "react-icons/bs";
import InputText from "../../InputText";
import Button from "../../Button";
import { useCorreios } from "@/hook/useCorreios";
import { useRef, useState } from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import FlagBrazil from "@/components/Icons/FlagBrazil";
import { GrDeliver } from "react-icons/gr";
import { LuPackageCheck } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import Steps from "@/components/Steps";
import ReactToPrint from "react-to-print";
import { FaPrint } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function Tracking() {
    const { tracking, token, getTracking, setTracking } = useCorreios()
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState<string>("")
    const trackingRef = useRef<HTMLDivElement>(null);
    // const codeExample = "NM281138121BR";
    function handleGetTracking(code: string) {
        setLoading(true)
        getTracking(code, token! || "").then(() => {
            setLoading(false)
            setCode("")
        })
    }

    function handleClearTracking() {
        setTracking({
            objetos: [],
            quantidade: 0,
            tipoResultado: "",
            versao: "",
        })
    }

    function renderIcon(status: string) {
        switch (status) {
            case "Objeto postado":
                return <IoStorefrontOutline size={20} />;
            case "Objeto recebido pelos Correios do Brasil":
                return <FlagBrazil />;
            case "Objeto em transferência - por favor aguarde":
                return <GrDeliver size={20} />;
            case "Objeto entregue ao destinatário":
                return <LuPackageCheck size={20} />;
            default:
                return <FiPackage size={20} />;
        }
    }

    function handleCodeTrackingChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value.toUpperCase();
        const wordsStart = value.substring(0, 2).replace(/[^A-Z]/g, '');
        const numbersMid = value.substring(2, 11).replace(/[^0-9]/g, '');
        const wordsEnd = value.substring(11, 13).replace(/[^A-Z]/g, '');

        const formated = wordsStart + numbersMid + wordsEnd;
        setCode(formated.slice(0, 13));
    }

    function isCodeValid() {
        const regex = /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/;
        return regex.test(code);
    }

    // console.log(tracking)

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
                        maxLength={13}
                        value={code}
                        onChange={handleCodeTrackingChange}
                    />
                </div>
                <div className="flex flex-col justify-between gap-2 md:col-span-1">
                    <span
                        className="max-md:hidden md:invisible"
                    >
                        Rastrear:
                    </span>
                    <Button
                        loading={loading}
                        className="h-12"
                        onClick={() => handleGetTracking(code)}
                    >
                        Rastrear
                    </Button>
                </div>
            </div>
            {tracking && tracking?.objetos.length > 0 && (
                <div>
                    <div ref={trackingRef} id="printable-area" className="flex flex-col justify-center">
                        <span className="text-xl font-semibold text-center text-blue-primary">
                            {tracking?.objetos[0]?.codObjeto}
                        </span>
                        {tracking?.objetos[0]?.mensagem && (
                            <span className="text-lg text-center text-blue-primary">
                                {tracking?.objetos[0]?.mensagem.split(':')[1].trim()}
                            </span>
                        )}
                        {tracking && tracking?.objetos[0].eventos && (
                            <div className="mt-10">
                                <ol className="flex flex-col">
                                    <>
                                        {tracking?.objetos[0]?.eventos?.map((event, index) => (
                                            <Steps
                                                key={index}
                                                status={event.descricao}
                                                date={new Date(event.dtHrCriado).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                                                location={event.unidade.endereco.cidade ? event.unidade.endereco.cidade + " - " + event.unidade.endereco.uf : event.unidade.nome}
                                                description={event.detalhe}
                                                icon={renderIcon(event.descricao)}
                                                isFirst={index === tracking?.objetos[0].eventos.length - 1}
                                            />
                                        ))}
                                    </>
                                </ol>
                            </div>
                        )}
                    </div>
                    <div className="flex max-md:flex-col justify-center gap-4 mt-8">
                        <Button
                            loading={loading}
                            className="h-12 bg-blue-primary text-white hover:bg-yellow-primary hover:text-blue-primary flex items-center justify-center gap-2"
                            onClick={() => handleClearTracking()}
                        >
                            <MdDeleteOutline size={24} />
                            Limpar
                        </Button>
                        <ReactToPrint
                            trigger={() => (
                                <Button
                                    loading={loading}
                                    className="h-12 bg-blue-primary text-white hover:bg-yellow-primary hover:text-blue-primary flex items-center justify-center gap-2"
                                >
                                    <FaPrint size={20} />
                                    Imprimir
                                </Button>
                            )}
                            content={() => trackingRef.current}
                            pageStyle={`@media print {
                                @page {
                                    padding: 0 20px;
                                }
                            }`}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
