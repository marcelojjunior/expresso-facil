'use client';

import TrackingCard from "@/components/TrackingCard";
import { useCorreios } from "@/hook/useCorreios";
import { useEffect } from "react";

export default function Home() {
  const { getToken, tracking, token } = useCorreios();

  useEffect(() => {
    const daNow = new Date();
    if (token!.expiraEm < daNow.toISOString()) {
      getToken();
    }
  }, [])

  return (
    <div className="container mx-auto">
      <TrackingCard />
    </div>
  );
}
