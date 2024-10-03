"use client"
import { useEffect, useState, useRef } from "react";
import MarianaProfile from "@/images/marianaProfile.png";
import Image from "next/image";

export default function ProfileCard() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.disconnect();
        }
      },
      { threshold: 0.1 } 
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative bg-[#886351]/[.90] w-[300px] h-[419px] rounded-[118px]">
      <div className={`absolute bg-[#6B2C22] w-8 h-8 rounded-full -right-5 bottom-40 ${isVisible ? 'animate-slide-right' : ''}`}></div>

      <div className={`absolute bg-[#8A5711] w-[85px] h-[87px] rounded-[27px] bottom-0 right-0 ${isVisible ? 'animate-slide-up' : ''}`}></div>

      <div className={`absolute bg-[#423F3A] w-[300px] h-[357px] rounded-[42px] top-10 -left-9 flex justify-center items-center ${isVisible ? 'animate-slide-left' : ''}`}>
        <div className="relative z-10">

          <Image
            src={MarianaProfile}
            alt="Mariana Vizintim Ernandes"
            width={247}
            height={326}
          />
        </div>
      </div>

      <div className={`absolute bottom-0 left-2 z-20 flex flex-col px-4 py-2 justify-center items-center bg-[#413E3F]/40 backdrop-blur-sm rounded-[15px] ${isVisible ? 'animate-slide-up delay-300' : ''}`}>
        <h2 className="text-white text-lg font-bold text-center">Mariana Vizintim Ernandes</h2>
        <p className="text-white text-[10px] text-center max-w-40">Especialista em Direito da Família e do Consumidor</p>
      </div>
    </div>
  );
}
