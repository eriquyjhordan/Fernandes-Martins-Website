"use client"
import Image from "next/image";
import JusticeBackground from "../../public/images/justice-background.webp";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <header className="bg-header w-full relative py-9 md:pb-16">
      <div className="2xl:mx-28">
        <div className="flex flex-row mb-6 mx-6 xl:w-header-width items-center justify-between">
          <Image
            loading="eager"
            src={Logo}
            className="aspect-[2.7] w-[170px] sm:w-[228px]"
            alt="logo"
            width={228}
            height={84}
          />
          <div className="sm:flex gap-5 header-links hidden">
            <Link href="/" className="text-primary hover:text-secondary">Sobre nós</Link>
            <Link href="/" className="text-primary hover:text-secondary">Equipe</Link>
            <Link href="/" className="text-primary hover:text-secondary">Áreas de Atuação</Link>
          </div>
          <div className="sm:hidden" onClick={() => setMobileMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-[100] transform transition-transform duration-300 ease-in-out ${mobileMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
          <div className="fixed top-10 right-6" onClick={() => setMobileMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <Link href="/" className="text-white font-semibold hover:text-secondary">Sobre nós</Link>
            <Link href="/" className="text-white font-semibold hover:text-secondary">Equipe</Link>
            <Link href="/" className="text-white font-semibold hover:text-secondary">Áreas de Atuação</Link>
          </div>
        </div>
        <div className="mx-4 sm:mx-6 mt-16 sm:ml-[112px] sm:max-w-[1200px]">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-6 bg-primary" />
            <p className="text-primary text-xs mb-0">Assessoria e consultoria Jurídica</p>
          </div>
          <h1 className="mt-1 text-3xl sm:text-[40px] font-bold leading-10 text-primary sm:max-w-[476px]">
            Proteja seus direitos com excelência e estratégia
          </h1>
          <p className="text-primary text-base mt-6 font-extralight sm:max-w-[370px]">Estamos prontos para te oferecer soluções jurídicas eficientes. Faça consulta inicial sem compromisso.</p>
          <div className="mt-6 flex relative lg:max-w-[800px] xl:max-w-[980px] mr-6">
            <input
              type="text"
              placeholder="Como podemos te ajudar?"
              className="w-full text-xs py-5 pr-[134px] sm:pr-[260px] z-50 px-10 text-black rounded-[64px] outline-none "
            />
            <button className="bg-secondary hover:bg-secondaryHover z-50 text-xs text-primary h-full pl-6 pr-5 sm:px-16 py-2 rounded-tr-[64px] rounded-br-[64px] rounded-bl-[150px] absolute top-0 right-0">Entre em contato</button>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-0 right-0 rounded-bl-[32px] w-96 xl:w-[440px] xl:h-[632px] hidden xl:block"
        src={JusticeBackground}
        alt="justice-background"
        width={440}
        height={632}
        loading="eager"
      />
    </header>
  );
}