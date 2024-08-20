import Lottie from "lottie-react";
import lottieAnimatio from "@/assets/lottie/lottie-animation.json";
import TrackingCard from "../TrackingCard";

export default function Hero() {
  return (
    <div className="bg-blue-primary">
      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-2 gap-6">
          <div className="w-full">
            <div className="w-[90%]">
              <Lottie animationData={lottieAnimatio} loop />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="flex gap-2 items-center justify-end">
              <div className="h-[2px] w-4 bg-yellow-primary" />
              <span className="text-base font-medium text-slate-50">
                Facilitando Suas Encomendas Diárias
              </span>
            </div>
            <h1
              className="text-5xl font-bold text-end text-slate-50 flex flex-col gap-4"
            >
              Expresso Fácil
              <span>
                Seu Parceiro de Entregas
              </span>
            </h1>
            {/* <TrackingCard /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
