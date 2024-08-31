import ButtonItemTab from "./ButtonItemTab";
import { useState } from "react";
import Shipping from "./Tabs/Shipping";
import Tracking from "./Tabs/Tracking";
import Cep from "./Tabs/Cep";

interface TabsServicesCardProps {

}

export default function TabsServicesCard({ }: TabsServicesCardProps) {
    const [activeTab, setActiveTab] = useState<'shipping' | 'tracking' | 'cep'>("shipping");

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 md:flex w-full md:w-max shadow-custom border-b-2 divide-x-2 divide-zinc-100/90 border-zinc-100">
                <ButtonItemTab
                    active={activeTab === 'shipping'}
                    onClick={() => setActiveTab('shipping')}
                >
                    Calcular Frete
                </ButtonItemTab>
                <ButtonItemTab
                    active={activeTab === 'tracking'}
                    onClick={() => setActiveTab('tracking')}
                >
                    Rastrear
                </ButtonItemTab>
                <ButtonItemTab
                    active={activeTab === 'cep'}
                    onClick={() => setActiveTab('cep')}
                >
                    Consultar CEP
                </ButtonItemTab>
            </div>
            <div className="bg-white shadow-custom py-4 lg:py-6 px-4 lg:px-8">
                {activeTab === 'shipping' && <Shipping />}
                {activeTab === 'tracking' && <Tracking />}
                {activeTab === 'cep' && <Cep />}
            </div>
        </div>
    )
}
