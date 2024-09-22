import InputText from "../../InputText";
import { CiLocationOn } from "react-icons/ci";
import Button from "../../Button";
import { CepProps, CityProps, StateProps, useCorreios } from "@/hook/useCorreios";
import { useEffect, useMemo, useState } from "react";
import { SelectPicker } from "rsuite";
import 'rsuite/SelectPicker/styles/index.css';
import TableCep from "@/components/TableCep";

export default function Cep() {
    const { getStates, getCities, getCep, cep, setCep, setSearched, searched } = useCorreios();
    const [states, setStates] = useState<StateProps[]>([]);
    const [cities, setCities] = useState<CityProps[] | null>([]);
    const [loading, setLoading] = useState(false);
    const [stateSelected, setStateSelected] = useState<string | null>(null);
    const [citySelected, setCitySelected] = useState<string | null>(null);
    const [address, setAddress] = useState("");

    function handleGetStates() {
        getStates().then((data) => {
            setStates(data)
        })
    }

    useEffect(() => {
        handleGetStates();
    }, [])

    function handleGetCities(value: string) {
        setStateSelected(value)
        getCities(value).then((data) => {
            setCities(data)
        })
    }

    function handleGetCep() {
        if(!stateSelected || !citySelected || address.length < 3) return

        setLoading(true)
        getCep(stateSelected!, citySelected!, address).then((data) => {
            setCep(data)
            setSearched(address)
            setLoading(false)
        })
    }

    const nameStates = useMemo(() => {
        return states.map(state => (
            {
                label: state.nome,
                value: state.sigla
            }
        )).sort((a, b) => a.label.localeCompare(b.label))
    }, [states])

    const capitalize = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    const nameCities = useMemo(() => {
        return cities?.map(city => (
            {
                label: capitalize(city.nome),
                value: city.nome
            }
        ))
    }, [cities])

    // console.log(cep)

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="flex flex-col gap-2 md:col-span-1">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Estado:
                    </label>
                    <SelectPicker
                        data={nameStates}
                        placeholder="Selecione o estado"
                        cleanable={false}
                        locale={{
                            searchPlaceholder: 'Pesquisar',
                            noResultsText: 'Nenhum resultado encontrado',
                        }}
                        className="h-full"
                        onChange={(val) => {
                            handleGetCities(val!)
                        }}
                    />
                </div>
                <div className="flex flex-col gap-2 md:col-span-1">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Cidade:
                    </label>
                    <SelectPicker
                        disabled={!stateSelected}
                        data={nameCities!}
                        placeholder="Selecione a cidade"
                        cleanable={false}
                        locale={{
                            searchPlaceholder: 'Pesquisar',
                            noResultsText: 'Nenhum resultado encontrado',
                        }}
                        className="h-full"
                        onChange={(val) => setCitySelected(val)}
                    />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                        htmlFor=""
                        className="text-base lg:text-lg text-blue-primary"
                    >
                        Logradouro:
                    </label>
                    <InputText
                        icon={<CiLocationOn size={24} />}
                        placeholder="Rua, Avenida, Etc..."
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
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
                        onClick={handleGetCep}
                        loading={loading}
                    >
                        Consultar
                    </Button>
                </div>
            </div>
            {cep?.length > 0 ? (
                <TableCep data={cep} searched={searched} />
            ) : searched !== "" && (
                <span className="text-lg text-center">Nenhum resultado encontrado para "{searched}"</span>
            )}
        </div>
    )
}
