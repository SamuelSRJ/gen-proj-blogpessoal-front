/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import CardTemas from "../cardtemas/CardTemas";
import { DNA } from "react-loader-spinner";

function ListaTemas() {

  const navigate = useNavigate();
  
  const [temas, setTemas] = useState<Tema[]>([])

  const { usuario, handleLogout } = useContext(AuthContext)

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: usuario.token }
      })
    } catch (error: any) {
      if(error.toString().includes("403")) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado!")
      navigate("/")
    }
  }, [usuario.token])

  useEffect(() => {
    buscarTemas()
  }, [temas.length])

  return (
    <>
      {
        temas.length === 0 && (
          <
            DNA
            visible={true}
            height={200}
            width={200}
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )
      }
      <div className="container py-4 mx-auto text-center font-bold">
        <h2 className="text-5xl">Temas</h2>
      </div>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {temas.map((tema) => (
              <CardTemas key={tema.id} tema={tema} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaTemas;