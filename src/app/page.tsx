'use client';

import Hero from "@/components/Hero";
import TabsServicesCard from "@/components/TabsServicesCard";
// import TrackingCard from "@/components/TrackingCard";
// import { useCorreios } from "@/hook/useCorreios";
// import { useEffect } from "react";

export default function Home() {
  // const { getToken, tracking, token } = useCorreios();

  // useEffect(() => {
  //   const daNow = new Date();
  //   if (token!.expiraEm < daNow.toISOString()) {
  //     getToken();
  //   }
  // }, [])

  return (
    <div className="">
      {/* <TrackingCard /> */}
      <Hero />
      <div className="container mx-auto -mt-16 xl:-mt-28 mb-10 px-4">
        <TabsServicesCard />
      </div>
    </div>
  );
}
