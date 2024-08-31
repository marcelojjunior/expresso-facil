'use client'

import FlagBrazil from "@/components/Icons/FlagBrazil";
import Layout from "@/components/Layout";
import Steps from "@/components/Steps";
import { useCorreios } from "@/hook/useCorreios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FiPackage } from "react-icons/fi";
import { GrDeliver } from "react-icons/gr";
import { IoStorefrontOutline } from "react-icons/io5";
import { LuPackageCheck } from "react-icons/lu";

export default function Tracking() {
  const { tracking, getTracking, token, setTracking } = useCorreios();
  // const searchParams = useSearchParams();
  // const code = searchParams?.get("code");

  // const codeExample = "NM275679471BR";

  function handleGetTracking(code: string) {
    getTracking(code, token?.token || "");
  }

  // useEffect(() => {
  //   if (code) {
  //     handleGetTracking(code as string);
  //   } else {
  //     setTracking({
  //       objetos: [],
  //       quantidade: 0,
  //       tipoResultado: "",
  //       versao: "",
  //     });
  //   }
  // }, [code])

  // console.log(tracking)

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

  return (
    <Layout>
      <div>
        {tracking && tracking?.objetos.length > 0 && (
          <span className="text-3xl text-white">
            {tracking?.objetos[0]?.codObjeto}
          </span>
        )}
        <div className="mt-10">
          <ol className="flex flex-col">
            {tracking && tracking?.objetos.length > 0 && (
              <>
                {tracking?.objetos[0].eventos.map((event, index) => (
                  <Steps
                    key={index}
                    status={event.descricao}
                    date={event.dtHrCriado}
                    location={event.unidade.endereco.cidade + " - " + event.unidade.endereco.uf}
                    description={event.detalhe}
                    icon={renderIcon(event.descricao)}
                    isFirst={index === tracking?.objetos[0].eventos.length - 1}
                  />
                ))}
              </>
            )}
          </ol>
        </div>

      </div>
    </Layout>
  )
}
