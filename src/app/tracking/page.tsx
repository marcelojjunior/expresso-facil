'use client'

import Layout from "@/components/Layout";
import { useCorreios } from "@/hook/useCorreios";

export default function Tracking() {
  const { tracking, getTracking } = useCorreios();

  const code = "NM275679471BR";

  function handleGetTracking(code: string) {
    getTracking(code);
  }


  return (
    <Layout>
      <button
        onClick={() => handleGetTracking(code)}
      >
        Tracking
      </button>
      <div className="mt-10">
        {JSON.stringify(tracking)}
      </div>
    </Layout>
  )
}
