import ButtonItemTab from "./ButtonItemTab";
import { useState } from "react";
import Shipping from "./Tabs/Shipping";
import Tracking from "./Tabs/Tracking";
import Cep from "./Tabs/Cep";

interface TabsServicesCardProps {

}

interface TabProps {
    id: number;
    key: 'shipping' | 'tracking' | 'cep';
    name: string;
}

const tabs: TabProps[] = [
    // {
    //     id: 1,
    //     key: 'shipping',
    //     name: 'Calcular Frete'
    // },
    {
        id: 2,
        key: 'tracking',
        name: 'Rastrear'
    },
    {
        id: 3,
        key: 'cep',
        name: 'Consultar CEP'
    }
]

export default function TabsServicesCard({ }: TabsServicesCardProps) {
    const [activeTab, setActiveTab] = useState<'shipping' | 'tracking' | 'cep'>("tracking");

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 md:flex w-full md:w-max shadow-custom border-b-2 divide-x-2 divide-zinc-100/90 border-zinc-100">
                {tabs.map(tab => (
                    <ButtonItemTab
                        key={tab.id}
                        active={activeTab === tab.key}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.name}
                    </ButtonItemTab>
                ))}
            </div>
            <div className="bg-white shadow-custom py-4 lg:py-6 px-4 lg:px-8">
                {/* {activeTab === 'shipping' && <Shipping />} */}
                {activeTab === 'tracking' && <Tracking />}
                {activeTab === 'cep' && <Cep />}
            </div>
        </div>
    )
}
