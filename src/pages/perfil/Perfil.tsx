import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

import Amigos from "../../components/profile/amigos"
import Comunidades from "../../components/profile/Comunidades"
import Depoimentos from "../../components/profile/Depoimentos"
import Sobre from "../../components/profile/Sobre"
import PerfilLateral from "../../components/profile/PerfilLateral"

function Perfil() {

  const navigate = useNavigate()

  const {usuario} = useContext(AuthContext)

  useEffect(() => {
    if(usuario.token === "") {
      alert("Você precisa estar logado")
      navigate("/")
    }
  }, [usuario.token])

  return (
    <div className="bg-[#D9E6F6]">
      <div className="container mx-auto pt-4 grid grid-cols-[0.75fr_1.5fr] lg:grid-cols-[0.75fr_1.5fr_1fr] gap-4">
        {/* LEFT */}
        <PerfilLateral />
        {/* MIDDLE */}
        <div className="flex flex-col gap-4">
          <Sobre />
          <Depoimentos />
        </div>        
        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <Amigos />
          <Comunidades />
        </div>
      </div>    
    </div>
  )
}

export default Perfil