import { CepProps } from "@/hook/useCorreios";

interface TableCepProps {
    data?: CepProps[];
    searched?: string;
}

export default function TableCep({
    data,
    searched
}: TableCepProps) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-xl text-center font-semibold text-blue-primary">
                "{searched}"
            </span>
            <div className="py-4 overflow-x-auto w-full">
                <div
                    className="inline-block min-w-full overflow-hidden"
                >
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Logradouro
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    CEP
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Bairro
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Localidade/UF
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Complemento
                                </th>
                                {/* <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    DDD
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((cep, index) => (
                                <tr key={index} className="text-blue-primary">
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span>{cep.logradouro}</span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span>{cep.cep}</span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span>{cep.bairro}</span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span>{cep.localidade}/{cep.uf}</span>
                                    </td>
                                    <td
                                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                        <span>{cep.complemento}</span>
                                    </td>
                                    {/* <td
                                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                        <span>{cep.ddd}</span>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
