import * as React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft  } from "react-icons/md";
import InstagramIcon from "@/images/InstagramIcon.svg";
import ProfileCard from "./ProfileCard";

export default function Team() {
  return (
  <section className="bg-[#242123] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-36 px-4 py-20 mt-24 w-full">
    <div className="flex items-center justify-center gap-36">
      <div className="hidden lg:block">
        <MdOutlineKeyboardArrowLeft className="text-white text-4xl cursor-pointer" />  
      </div>
      <div>
        <h2 className="text-4xl font-bold text-white max-w-[340px]">Conheça Nosso Time</h2>
        <p className="text-base text-white leading-normal mt-9 max-w-[350px]">Nossa equipe de advogados especializados em Direito da Família, do Consumidor, Previdenciário e Penal.</p>
        <a href="#" className="flex items-center gap-4 self-start mt-4">
          <Image src={InstagramIcon} alt="Instagram Icon" width={24} height={24} />
          <span className="text-white text-lg">Instagram</span>
        </a>
      </div>
    </div>
    <div className="ml-6 mt-9 flex justify-center items-center gap-36">
      <ProfileCard />
      <MdOutlineKeyboardArrowRight className="text-white text-4xl cursor-pointer hidden lg:block" />
    </div>
  </section>
  )
}

