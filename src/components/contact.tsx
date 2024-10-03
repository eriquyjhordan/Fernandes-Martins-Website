import * as React from "react";
import Image from "next/image";
import Mail from "@/images/Icon/envelope.svg"
import Phone from "@/images/Icon/phone.svg"
import Map from "@/images/Icon/map.svg"
import Location from "@/images/location.png"
import { MdKeyboardArrowRight } from "react-icons/md"

type ContactInfoProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  isLink?: boolean;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  linkText,
  linkHref,
  isLink,
}) => (
  <div className="flex flex-col py-0.5 text-base leading-6 text-black max-md:mt-10">
    <Image
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      width={24}
      height={24}
    />
    <div className="mt-4 text-xl font-bold leading-7">{title}</div>
    <div className="mt-2">{description}</div>
    {isLink ? (
      <a href={linkHref} className="mt-2 text-black underline group">
        {linkText}
        {
          linkHref?.includes('maps') && (
            <MdKeyboardArrowRight className="inline text-black group-hover:translate-x-1 transition-all" />
          )
        }
      </a>
    ) : (
      <div className="mt-2 leading-6">{linkText}</div>
    )}
  </div>
);

const ContactSection: React.FC = () => (
  <section className="self-stretch mt-14 px-4 max-md:mt-10 w-full mx-auto max-w-[1426px]">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <aside className="flex flex-col w-[36%] gap-5 max-md:ml-0 max-md:w-full">
        <ContactInfo
          imgSrc={Mail}
          imgAlt="Email icon"
          title="Email"
          description="Envie-nos uma mensagem"
          linkText="ernandesmartins.adv@gmail.com"
          linkHref="mailto:ernandesmartins.adv@gmail.com"
          isLink={true}
        />
        <ContactInfo
          imgSrc={Phone}
          imgAlt="Phone icon"
          title="Telefone"
          description="Ligue para nós"
          linkText="‪+55 33 99960‑2838‬"
          linkHref="tel:+5533999602838"
          isLink={true}
        />
        <ContactInfo
          imgSrc={Map}
          imgAlt="Office icon"
          title="Escritório"
          description="Rua Pedro Nolasco, 851, Centro, Aimorés-MG, CEP 35200-000."
          linkHref="https://maps.app.goo.gl/KLYxnXyfQ17M1ZUe6"
          linkText="Ver Localização"
          isLink={true}
        />
      </aside>

      <a href="https://maps.app.goo.gl/KLYxnXyfQ17M1ZUe6" target="_blank">
        <figure className="relative flex flex-col ml-5 max-md:ml-0 max-md:w-full group overflow-hidden cursor-pointer">
          <Image
            loading="lazy"
            src={Location}
            alt="Office location"
            width={734}
            height={444}
            style={{ width: '734px', height: '444px' }}
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex justify-center items-center">
            <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Ver localização
            </span>
          </div>
        </figure>

      </a>
    </div>
  </section>
);

export default ContactSection;
