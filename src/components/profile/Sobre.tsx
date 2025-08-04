import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import profiles from "../../data/profiles.json"

function Sobre() {

  const {usuario} = useContext(AuthContext)

  const userId = usuario.id-1

  return (
    <>
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
    </>
  )
}

export default Sobre