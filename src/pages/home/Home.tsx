function Home() {
  return (
    <>
      <div className="bg-emerald-500 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-5xl font-bold">
              Seja Bem Vindo!
            </h2>
            <p className="text-xl">
              Expresse aqui seus pensamentos e opiniões
            </p>
            <div className="flex justify-around gap-4">
              <div className="rounded text-white border-white border-solid border-2 py-2">
                Nova Postagem
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://i.imgur.com/fyfri1v.png" alt="Imagem Página Home" className="w-2/3" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home