import * as React from "react";
import Image from "next/image";
import Mail from "@/images/Icon/envelope.svg"
import Phone from "@/images/Icon/phone.svg"
import Map from "@/images/Icon/map.svg"
import Location from "@/images/location.png"

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
      <a href={linkHref} className="mt-2 text-black underline">
        {linkText}
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
        />
      </aside>
      <figure className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
        <Image
          loading="lazy"
          src={Location}
          alt="Office location"
          width={734}
          height={444}
          style={{ width: '734px', height: '444px' }}
        />
      </figure>
    </div>
  </section>
);

export default ContactSection;
