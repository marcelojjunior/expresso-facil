'use client'

import Layout from "@/components/Layout";
import { useCorreios } from "@/hook/useCorreios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { Timeline } from "rsuite";
import 'rsuite/Timeline/styles/index.css';

export default function Tracking() {
  const { tracking, getTracking, token } = useCorreios();
  const searchParams = useSearchParams();
  const code = searchParams?.get("code");

  const codeExample = "NM275679471BR";

  function handleGetTracking(code: string) {
    getTracking(code, token?.token || "");
  }

  useEffect(() => {
    if (code) {
      handleGetTracking(code as string);
    }
  }, [code])

  console.log(tracking)

  return (
    <Layout>
      <div>
        <span className="text-3xl text-white">
          {tracking?.objetos[0]?.codObjeto}
        </span>

        <Timeline 
        className="text-white text-base"
        isItemActive={Timeline.ACTIVE_FIRST}
        >
          {tracking?.objetos[0]?.eventos?.map((event, index) => (
            <Timeline.Item 
            key={index} 
            className=""
            // dot={<BiSolidPlaneAlt />}
            >
              <div className="">
                <span>{event.dtHrCriado}</span>
                <span>{event.descricao}</span>
                <span>{event.detalhe}</span>
                <span>{event.unidade.endereco.logradouro}</span>
                <span>{event.unidade.endereco.cidade}</span>
                <span>{event.unidade.tipo}</span>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </Layout>
  )
}
