import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import profiles from "../../data/profiles.json"

function PerfilLateral() {

  const {usuario} = useContext(AuthContext)
  
  const userId = usuario.id-1

  return (
    <>
      <div className="bg-white p-4 border border-white rounded-2xl flex flex-col shadow-xl h-fit">
        <img 
          src={usuario.foto} 
          alt="Foto de perfil"
          className="w-full items-center" />
        <p className="text-3xl text-[#49778A] font-bold my-2">{usuario.nome}</p>
        <p className="text-slate-400 text-xl pb-4">{profiles[userId]?.sexo}, {profiles[userId]?.relacionamento}, {profiles[userId]?.cidade}, Brasil</p>
        <hr className="text-slate-300 " />
        <p className="menu-sidebar fake-link mt-4">👤 perfil</p>
        <p className="menu-sidebar fake-link">✏️ recados</p>
        <p className="menu-sidebar fake-link">📷 fotos</p>
        <p className="menu-sidebar fake-link">🎥 videos</p>
        <p className="menu-sidebar fake-link">☀️ depoimentos</p>
        <hr className="text-slate-300 mt-4" />
        <p className="font-bold text-xl m-2">Apps</p>
        <p className="menu-sidebar fake-link mb-2">➕ adicionar apps</p>
        <p className="menu-sidebar fake-link py-1">☕ Café Mania</p>
        <p className="menu-sidebar fake-link py-1">🌱 Colheita Feliz</p>
        <p className="menu-sidebar fake-link py-1">👫 Buddy Poke</p>
        <hr className="text-slate-300 mt-4" />
        <p className="menu-sidebar fake-link py-1 mt-4">📋 listas</p>
        <p className="menu-sidebar fake-link py-1">🔄 atualizações</p>
        <p className="menu-sidebar fake-link py-1">⚙️ configurações</p>
      </div>
    </>
  )
}

export default PerfilLateral