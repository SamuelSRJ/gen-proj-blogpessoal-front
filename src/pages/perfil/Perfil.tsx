import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

import friends from "../../data/friends.json"
import communities from "../../data/communities.json"
import profiles from "../../data/profiles.json"

function Perfil() {

  const navigate = useNavigate()

  const {usuario} = useContext(AuthContext)

  const userId = usuario.id-1


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
        <div className="bg-white p-4 border border-white rounded-2xl flex flex-col shadow-xl h-fit">
          <img 
            src={usuario.foto} 
            alt="Foto de perfil"
            className="w-full items-center" />
          <p className="text-3xl text-[#49778A] font-bold my-2">{usuario.nome}</p>
          <p className="text-slate-400 text-xl pb-4">{profiles[userId]?.sexo}, {profiles[userId]?.relacionamento}, {profiles[userId]?.cidade}, Brasil</p>
          <hr className="text-slate-300 " />
          <p className="border bg-[#ECF9FD] text-slate-400 text-xl p-1 fake-link mt-4">👤 perfil</p>
          <p className="border bg-[#ECF9FD] text-slate-400 text-xl p-1 fake-link">✏️ recados</p>
          <p className="border bg-[#ECF9FD] text-slate-400 text-xl p-1 fake-link">📷 fotos</p>
          <p className="border bg-[#ECF9FD] text-slate-400 text-xl p-1 fake-link">🎥 videos</p>
          <p className="border bg-[#ECF9FD] text-slate-400 text-xl p-1 fake-link">☀️ depoimentos</p>
          <hr className="text-slate-300 mt-4" />
        </div>
        {/* MIDDLE */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-2 border border-white rounded-2xl shadow-xl h-fit">
            <h2 className="text-4xl px-4 py-2">{usuario.nome}</h2>
            <hr className="text-slate-300" />
            <div className="flex gap-5 my-2 px-4 text-slate-500">
              <p className="flex flex-col fake-link">recados<span>✏️ {profiles[userId]?.recados}</span></p>
              <p className="flex flex-col fake-link">fotos<span>📷 {profiles[userId]?.fotos}</span></p>
              <p className="flex flex-col fake-link">vídeos<span>🎥 {profiles[userId]?.videos}</span></p>
              <p className="flex flex-col fake-link">fãs<span>⭐ {profiles[userId]?.fas}</span></p>
              <p className="flex flex-col fake-link">confiável <span className="opacity-25">🙂🙂🙂</span></p>
              <p className="flex flex-col fake-link">leal <span>🧊🧊🧊</span></p>
              <p className="flex flex-col fake-link">sexy <span>❤️❤️❤️</span></p>
            </div>
            <hr className="text-slate-300" />
            <div className="grid grid-cols-[1fr_2fr] py-3">
              <p className="stripe-color-2-left">relacionamento:</p><span className="stripe-color-2">{profiles[userId]?.relacionamento}</span>
              <p className="stripe-color-1-left">aniversário:</p><span className="stripe-color-1">{profiles[userId]?.aniversario}</span>
              <p className="stripe-color-2-left">idade:</p><span className="stripe-color-2">{profiles[userId]?.idade}</span>
              <p className="stripe-color-1-left">interesses no blog:</p><span className="stripe-color-1">{profiles[userId]?.interesse}</span>
              <p className="stripe-color-2-left">quem sou eu:</p><span className="stripe-color-2">{profiles[userId]?.sobre}</span>
              <p className="stripe-color-1-left">filhos:</p><span className="stripe-color-1">{profiles[userId]?.filhos}</span>
              <p className="stripe-color-2-left">humor:</p><span className="stripe-color-2">{profiles[userId]?.humor}</span>
              <p className="stripe-color-1-left">gosto musical:</p><span className="stripe-color-1">{profiles[userId]?.gostomusical}</span>
              <p className="stripe-color-2-left">bebo:</p><span className="stripe-color-2">{profiles[userId]?.bebo}</span>
              <p className="stripe-color-1-left">estilo:</p><span className="stripe-color-1">{profiles[userId]?.estilo}</span>
              <p className="stripe-color-2-left">animais de estimação:</p><span className="stripe-color-2">{profiles[userId]?.animais}</span>
              <p className="stripe-color-1-left">cidade natal:</p><span className="stripe-color-1">{profiles[userId]?.cidade}</span>
              <p className="stripe-color-2-left">atividades:</p><span className="stripe-color-2">{profiles[userId]?.atividades}</span>
            </div>
          </div>
          <div className="bg-white p-2 border border-white rounded-2xl shadow-xl h-fit hidden lg:block">
            <h2 className="text-4xl px-4 py-2">depoimentos</h2>
            <hr className="text-slate-300" />
            
          </div>
        </div>        
        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-2 border border-white rounded-2xl shadow-xl">
            <h5 className="font-bold px-2 text-xl mb-2">amigos (1428)</h5>
            <div className="grid grid-cols-3 gap-4 ">
              {friends.map(friend => (
                <div>
                  <img className="fake-link p-1" src={friend.pic} />
                  <p className="text-[#49778A] fake-link text-md">{friend.name}</p>
                </div>
              ))}
              <p className="text-[#49778A] fake-link px-2">Ver Todos...</p>
            </div>
          </div>
          <div className="bg-white p-2 border border-white rounded-2xl shadow-xl">
            <h5 className="font-bold px-2 text-xl mb-2">comunidades (243)</h5>
            <div className="grid grid-cols-3 gap-4 ">
              {communities.map(communities => (
                <div>
                  <img className="fake-link p-1" src={communities.pic} />
                  <p className="text-[#49778A] fake-link text-md">{communities.name}</p>
                </div>
              ))}
              <p className="text-[#49778A] fake-link px-2">Ver Todos...</p>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Perfil