import Lottie from "lottie-react";
import lottieAnimation from "@/assets/lottie/animation-shipping.json";

export default function Hero() {
  return (
    <div className="w-full bg-yellow-primary">
      <div className="container mx-auto px-4 max-xl:pt-4 pb-10 max-xl:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center gap-5">
            <h1
              className="text-5xl xl:text-7xl font-bold text-blue-primary max-lg:max-w-lg flex flex-col gap-4"
            >
              Simplifique a Gestão das Suas Encomendas
            </h1>
            <p className="text-base text-blue-primary max-w-lg">
              Com a Expresso Fácil, você recebe, envia e rastreia suas encomendas de forma prática e segura. Cuidamos de tudo, para que você tenha mais tempo e tranquilidade.
            </p>
          </div>
          <div className="w-full max-xl:hidden">
            <div className="w-[90%]">
              <Lottie animationData={lottieAnimation} loop />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
