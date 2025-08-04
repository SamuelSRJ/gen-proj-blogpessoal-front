import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
  return (
    <>
      <div className="bg-[#D9E6F6] flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-5xl font-bold text-[#F92596]">
              Seja Bem Vindo!
            </h2>
            <p className="text-xl text-[#F92596]">
              Expresse aqui seus pensamentos e opiniões
            </p>
            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
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