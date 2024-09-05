'use client';

import BlockSolutions from "@/components/BlockSolutions";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import TabsServicesCard from "@/components/TabsServicesCard";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";
import { useCorreios } from "@/hook/useCorreios";

export default function Home() {
  const { getToken, expiresIn } = useCorreios();

  useEffect(() => {
    const dateNow = new Date();
    if (expiresIn! < dateNow.toISOString()) {
      getToken();
    }
  }, [])

  useEffect(() => {
    const backToTopButton = document.getElementById('backToTop')

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // @ts-ignore
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - 10;

        window.scrollBy({
          top: offsetPosition - 35,
          behavior: 'smooth'
        });
      });
    })

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopButton?.classList.remove('opacity-0')
      } else {
        backToTopButton?.classList.add('opacity-0')
      }
    })

  }, [])

  return (
    <div className="">
      <Hero />
      <div className="container mx-auto -mt-16 xl:-mt-28 mb-14 xl:mb-20 px-4">
        <TabsServicesCard />
      </div>
      <OurServices />
      <BlockSolutions />
      <ContactUs />
      <Testimonials />
      <Faq />

      <Footer />

      <Link
        href="#header"
        id="backToTop"
        className="fixed bottom-4 right-4 opacity-0 xl:hover:opacity-90 bg-blue-primary text-white rounded-full p-2 z-50 shadow-back-to-top transition ease-in-out duration-500 animate-bounce"
      >
        <IoArrowUp size={24} />
      </Link>
    </div>
  );
}
