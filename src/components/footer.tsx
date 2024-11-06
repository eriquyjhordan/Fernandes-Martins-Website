'use client'
import * as React from 'react'
import Image from 'next/image'
import Instagram from '@/images/Icon/Instagram.svg'
import Logo from '@/images/logo-2.png'

interface EmailFormProps {
  onSubmit: (email: string) => void
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 mt-6 leading-[150%] max-md:flex-wrap"
    >
      <label htmlFor="emailInput" className="sr-only">
        Digite seu email
      </label>
      <input
        id="emailInput"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
        aria-label="Digite seu email"
        className="flex-1 justify-center p-3 bg-white border border-black border-solid text-stone-500"
      />
      <button
        type="submit"
        className="justify-center px-6 py-3 text-black whitespace-nowrap border border-black border-solid max-md:px-5"
      >
        Inscrever
      </button>
    </form>
  )
}

interface ServiceListProps {
  services: string[]
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => (
  <div className="flex flex-col grow pb-2 text-sm leading-5 text-black max-md:mt-10">
    <div className="text-base font-semibold text-black">Nossos Serviços</div>
    {services.map((service, index) => (
      <a
        href="#"
        key={index}
        className="mt-4 hover:underline transition-all duration-500"
      >
        {service}
      </a>
    ))}
  </div>
)

const Footer: React.FC = () => {
  const handleEmailSubmit = (email: string) => {
    console.log(`Email submitted: ${email}`)
  }

  return (
    <footer className="self-stretch py-0.5 mt-36 px-4 pb-4 max-md:mt-10 max-md:max-w-full  w-full mx-auto max-w-[1426px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-base max-md:mt-10 max-md:max-w-full">
            <Image
              src={Logo}
              alt="Newsletter Icon"
              width={89}
              height={29}
              className="z-10 aspect-[3.03]"
            />
            <div className="mt-6 leading-6 text-black max-md:max-w-full">
              Assine nossa newsletter para ficar atualizado sobre recursos e
              lançamentos.
            </div>
            <EmailForm onSubmit={handleEmailSubmit} />
            <div className="mt-4 text-xs leading-5 text-black max-md:max-w-full">
              Ao se inscrever, você concorda com nossa Política de Privacidade e
              fornece consentimento para receber atualizações da nossa empresa.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <ServiceList
                  services={[
                    'Direito Civil',
                    'Direito do Consumidor',
                    'Direito Penal',
                    'Direito Farmacêutico',
                    'Registro Civil',
                  ]}
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col whitespace-nowrap leading-[150%] max-md:mt-10">
                  <div className="text-base font-semibold text-black">
                    Siga-nos
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="flex gap-3 items-center py-2 mt-4 text-sm text-black group hover:font-bold transition-all duration-100 ease-in-out"
                  >
                    <Image
                      src={Instagram}
                      alt="Instagram Icon"
                      width={24}
                      height={24}
                      className="shrink-0 aspect-square group-hover:scale-105"
                    />
                    <div>Instagram</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 self-stretch mt-6 h-px bg-black border border-black border-solid max-md:max-w-full"></div>
      <div className="self-stretch mt-8 text-sm leading-5 text-black max-md:max-w-full">
        © 2024 Enardes e Martines Advogados. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
