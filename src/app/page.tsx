'use client';

import { useCorreios } from "@/hook/useCorreios";

export default function Home() {
  const { getToken, tracking, token } = useCorreios();

  function handleGetToken() {
    getToken();
  }

  return (
    <div className="container mx-auto">
      <button
        onClick={handleGetToken}
        className="text-white"
      >
        Get token
      </button>

      <div className="text-white">
        {JSON.stringify(token?.token)}
      </div>
    </div>
  );
}
