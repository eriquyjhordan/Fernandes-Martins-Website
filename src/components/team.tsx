import * as React from "react";
import Image from "next/image";

const ImageItem: React.FC<{ src: string; alt: string; className?: string, imageWidth?:number, imageHeight?:number }> = ({ src, alt, className, imageHeight, imageWidth }) => (
  <Image src={src} alt={alt} className={className} width={imageWidth ?? 48} height={imageHeight ?? 48} />
);

const TeamSection: React.FC = () => (
  <section className="flex justify-center items-center px-16 py-20 mt-24 w-full bg-neutral-800 max-md:px-5 max-md:mt-10">
    <div className="flex gap-5 justify-between mt-16 w-full max-w-[1426px] max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-col mt-12 max-md:mt-10">
        <div className="flex gap-5 justify-between items-start max-md:flex-wrap">
          <ImageItem
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b1cc32c84eaf6863423c966b57772dec5090e6960c34d4dc9801029907d6427?apiKey=59df490fe78040cdbef83a436347ab86&"
            alt=""
            className="shrink-0 self-end mt-44 w-12 aspect-square max-md:mt-10"
          />
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold text-white leading-[58px] max-md:text-4xl max-md:leading-[54px]">
              Conheça Nosso Time
            </h2>
            <p className="mt-11 text-lg leading-7 text-white max-md:mt-10">
              Nossa equipe de advogados especializados em Direito da Família,
              do Consumidor, Previdenciário e Penal.
            </p>
          </div>
        </div>
        <div className="flex gap-4 self-center text-sm leading-5 text-white whitespace-nowrap">
          <ImageItem
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b893eab82b3c4142ef7777b4bdbbc4b89297385e03598faef985f367fbbb8a0?apiKey=59df490fe78040cdbef83a436347ab86&"
            alt="Instagram Icon"
            className="shrink-0 w-6 aspect-square"
            imageHeight={24}
            imageWidth={24}
          />
          <div className="my-auto">Instagram</div>
        </div>
      </div>
      <ImageItem
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c58d787f2cddc1405d100e4f3406ac8d9e351c6cf603cb9337011e90f65abda?apiKey=59df490fe78040cdbef83a436347ab86&"
        alt="Team Image"
        imageHeight={506}
        imageWidth={422}
      />
      <ImageItem
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e46f00f4348f4cef439013fe680e76870830a34e1083ee3a291ae2e2146f057?apiKey=59df490fe78040cdbef83a436347ab86&"
        alt=""
        className="shrink-0 my-auto w-12 aspect-square"
      />
    </div>
  </section>
);

export default TeamSection;