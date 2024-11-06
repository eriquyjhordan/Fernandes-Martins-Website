import * as React from 'react'

type SectionProps = {
  title: string
  subtitle: string
  description: string
}

const Section: React.FC<SectionProps> = ({ title, subtitle, description }) => {
  return (
    <section className="flex flex-col max-md:max-w-full">
      <h2 className="text-base font-semibold max-md:max-w-full">{title}</h2>
      <h1 className="mt-4 text-3xl font-bold leading-10 max-md:max-w-full">
        {subtitle}
      </h1>
      <p className="mt-6 text-lg font-light max-md:max-w-full">{description}</p>
    </section>
  )
}

const ServicesHeader: React.FC = () => {
  const sections = [
    {
      title: 'Advocacia',
      subtitle: 'Serviços Jurídicos Especializados',
      description:
        'Oferecemos soluções jurídicas eficientes para diversos casos',
    },
  ]

  return (
    <div className="flex gap-5 justify-between mt-8 w-full text-black max-md:flex-wrap max-md:max-w-full">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
        />
      ))}
      <nav className="justify-center self-end px-6 py-3 mt-20 text-base border border-black border-solid max-md:mt-10">
        <a href="#view-all">Ver todos</a>
      </nav>
    </div>
  )
}

export default ServicesHeader
