import * as React from "react";
import Image from 'next/image';

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
    isLink
}) => (
    <div className="flex flex-col py-0.5 text-base leading-6 text-black max-md:mt-10">
        <Image
            loading="lazy"
            src={imgSrc}
            alt={imgAlt}
            width={32}
            height={32}
            className="w-8 aspect-square"
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
    <section className="self-stretch mt-14 px-4 max-md:mt-10 max-md:max-w-full w-full mx-auto max-w-[1426px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <aside className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                <ContactInfo
                    imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a81715765533b9b547096ca29c8c650abb003a29767ae45d87f7ae74e328d94c?apiKey=59df490fe78040cdbef83a436347ab86&"
                    imgAlt="Email icon"
                    title="Email"
                    description="Envie-nos uma mensagem"
                    linkText="ernandesmartins.adv@gmail.com"
                    linkHref="mailto:ernandesmartins.adv@gmail.com"
                    isLink={true}
                />
                <ContactInfo
                    imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9043a3a002bed8d5846c4e988f530a36f54e5c5fe095d3c635d61d2eb1d80649?apiKey=59df490fe78040cdbef83a436347ab86&"
                    imgAlt="Phone icon"
                    title="Telefone"
                    description="Ligue para nós"
                    linkText="‪+55 33 99960‑2838‬"
                    linkHref="tel:+5533999602838"
                    isLink={true}
                />
                <ContactInfo
                    imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d6dce6f8805cc517c487d723f230d5bba5eaf3b3d227feabb0ea4e1ccb7d30?apiKey=59df490fe78040cdbef83a436347ab86&"
                    imgAlt="Office icon"
                    title="Escritório"
                    description="Rua Pedro Nolasco, 851, Centro, Aimorés-MG, CEP 35200-000."
                />
            </aside>
            <figure className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/94eb48060dcefe755175529c920978152d8113a2342454b9620b73a740c1f5ef?apiKey=59df490fe78040cdbef83a436347ab86&"
                    alt="Office location"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="w-full aspect-[1.64] max-md:mt-10 max-md:max-w-full"
                />
            </figure>
        </div>
    </section>
);

export default ContactSection;