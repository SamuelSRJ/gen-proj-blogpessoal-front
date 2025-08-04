/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Postagem from "../../../models/Postagem"
import { buscar } from "../../../services/Service"
import CardPostagens from "../cardpostagens/CardPostagens"
import CardPostagens2 from "../cardpostagens/CardPostagens2"
import { DNA } from "react-loader-spinner"

function ListaPostagens() {

  const navigate = useNavigate()

  const [postagens, setPostagens] = useState<Postagem[]>([])

  const {usuario, handleLogout} = useContext(AuthContext)

  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens, {
        headers: {
          Authorization: usuario.token,
        },
      })
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if(usuario.token === "") {
      alert("Você precisa estar logado")
      navigate("/")
    }
  }, [usuario.token])

  useEffect(() => {
    buscarPostagens()
  }, [postagens.length])

  return (
    <>
      {postagens.length === 0 && (
        <DNA
          visible={true}
          height={200}
          width={200}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4 ">
        <div className="container flex flex-col mx-2">
          <div className="container mx-auto my-4 grid grid-cols-1 w-1/2 gap-4">
            {postagens.map((postagem) => (
              <CardPostagens2 key={postagem.id} postagem={postagem} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaPostagens