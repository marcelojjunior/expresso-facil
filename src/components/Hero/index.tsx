import Lottie from "lottie-react";
import lottieAnimation from "@/assets/lottie/animation-shipping.json";

export default function Hero() {
  return (
    <div className="w-full bg-yellow-primary">
      <div className="container mx-auto px-4 max-lg:pt-4 max-lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center gap-5">
            <h1
              className="text-5xl lg:text-7xl font-bold text-blue-primary max-lg:max-w-lg flex flex-col gap-4"
            >
              Hassle free Shipping and Logistics
            </h1>
            <p className="text-base text-blue-primary max-w-lg lg:max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="w-full max-lg:hidden">
            <div className="w-[90%]">
              <Lottie animationData={lottieAnimation} loop />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
