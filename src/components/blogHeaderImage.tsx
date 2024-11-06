export default function BlogHeaderImage() {
  return (
    <section>
      <div className="w-full h-[510px] bg-[url('@/images/background.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl font-bold leading-normal">
          Registro Civil
        </h1>
        <h2 className="text-white text-2xl max-w-[700px] text-center mt-20">
          Nossa equipe de advogados especializados em Direito da Família, do
          Consumidor, Previdenciário e Penal.
        </h2>
      </div>
      <div className="w-full h-2 bg-secondary-gradient" />
    </section>
  )
}
