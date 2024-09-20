import React from 'react';
import ServicesHeader from './services-header';
import Image from 'next/image';

type InfoCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  alt: string;
  learnMoreLink: string;
  imageWidth?: number;
  imageHeight?: number;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, description, tags, imageSrc, alt, learnMoreLink, imageHeight, imageWidth }) => (
  <article className="flex flex-col text-black border border-black border-solid">
    <Image loading="lazy" src={imageSrc} alt={alt} className="w-full" width={imageWidth ?? 383} height={imageHeight ?? 234} />
    <div className="flex flex-col p-6 max-md:px-5">
      <h2 className="text-2xl font-bold leading-8">{title}</h2>
      <p className="mt-2 leading-6">{description}</p>
      <div className="flex gap-2 mt-4 text-xs font-semibold max-md:mr-0.5 flex-wrap">
        {tags.map((tag, index) => (
          <div key={index} className="justify-center px-2 py-1 bg-zinc-100 whitespace-nowrap">
            {tag}
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center self-start mt-6">
        <a href={learnMoreLink} className="text-base leading-6">
          Saiba mais
        </a>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=59df490fe78040cdbef83a436347ab86&" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </div>
  </article>
);

const Services: React.FC = () => (
  <main className="flex flex-col gap-6 px-5 mt-14 w-full mx-auto max-w-[1426px] max-md:mt-10 max-md:max-w-full">
    <ServicesHeader />
    <section className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[33%] max-md:w-full gap-8">
        <InfoCard
          title="Direito Civil"
          description="Se precisa resolver questões sobre família, herança, contratos ou propriedade, o Direito Civil é fundamental. Nós cuidamos de tudo isso para você, garantindo seus direitos em cada passo."
          tags={['Contratos e Obrigações', 'Divórcios', 'Casamento e união estável', 'Inventário e partilha de bens', 'Guarda e pensão alimentícia']}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecda7d96ac650a6c52f006db0ee4e0644cdba4334cc708999c1ff8aa1cbdd96e?apiKey=59df490fe78040cdbef83a436347ab86&"
          alt="Imagery representing Direito Civil"
          learnMoreLink="#"
        />
        <InfoCard
          title="Direito do Consumidor"
          description="Se enfrentar problemas com produtos ou serviços, estamos aqui para garantir que seus direitos como consumidor sejam protegidos. Não aceite menos do que você merece."
          tags={['Defesa em casos de consumo', 'Ações contra práticas abusivas', 'Indenizações por danos']}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecda7d96ac650a6c52f006db0ee4e0644cdba4334cc708999c1ff8aa1cbdd96e?apiKey=59df490fe78040cdbef83a436347ab86&"
          alt="Imagery representing Direito do Consumidor"
          learnMoreLink="#"
        />
      </div>
      <div className="flex flex-col w-[33%] max-md:w-full gap-8">
        <InfoCard
          title="Direito Penal"
          description="Caso enfrente problemas legais, como acusações criminais, estamos aqui para ajudar. Nosso objetivo é garantir que você receba um tratamento justo perante a lei."
          tags={['Defesa Criminal', 'Assistência em audiências e delegacias', 'Crimes contra a pessoa', 'Crimes contra o patrimônio']}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/33a2617547910ce453551b23b3469d54bf095f0ef73e5caf820b661785a4813d?apiKey=59df490fe78040cdbef83a436347ab86&"
          alt="Imagery representing Direito Penal"
          learnMoreLink="#"
          imageHeight={400}
          imageWidth={383}
        />
        <InfoCard
          title="Direito Farmacêutico"
          description="Se você tiver dúvidas sobre medicamentos, regulamentação ou direitos de saúde, estamos aqui para esclarecer. Sua saúde é nossa prioridade."
          tags={[]}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/75f8c4c36804952501a80ba1c23c2dac71094d8ab7c69e4b6f32752344638c41?apiKey=59df490fe78040cdbef83a436347ab86&"
          alt="Imagery representing Direito Farmacêutico"
          learnMoreLink="#"
        />
      </div>
      <div className="flex flex-col w-[33%] max-md:w-full gap-8">
        <InfoCard
          title="Registro Civil"
          description="Do nascimento ao casamento e além, seja a necessidade de retificar erros em certidão ou suprimir a ausência de registro público, lidamos com todos os aspectos legais que afetam sua vida civil. Conte conosco para cuidar de todos os detalhes."
          tags={['Regularização de documentos', 'Retificação de registros']}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27f871f3b2b1dc487a379374ca178a829d7a255034a07a03842a49af87c0d3f0?apiKey=59df490fe78040cdbef83a436347ab86&"
          alt="Imagery representing Registro Civil"
          learnMoreLink="#"
        />
        <InfoCard
          title="Direito Previdenciário"
          description="Cuidamos dos direitos relacionados à previdência social, como aposentadoria, pensão e benefícios previdenciários, assegurando a proteção social aos trabalhadores e seus dependentes."
          tags={['Aposentadorias', 'Pensão por morte']}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27f871f3b2b1dc487a379374ca178a829d7a255034a07a03842a49af87c0d3f0?apiKey=59df490fe78040cdbef83a436347ab86&"
          alt="Imagery representing Direito Previdenciário"
          learnMoreLink="#"
        />
      </div>
    </section>
  </main>
);

export default Services;