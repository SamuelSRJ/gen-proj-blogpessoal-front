// import { Link } from "react-router-dom"
import type Postagem from "../../../models/Postagem"

interface CardPostagensProps {
  postagem: Postagem
}

function CardPostagens2({ postagem }: CardPostagensProps) {
  return (
    // bg-white p-2 border border-white rounded-2xl shadow-xl
    <div  className="border border-white rounded-2xl shadow-xl flex flex-col overflow-hidden justify-between ">
      <div className="flex w-full bg-white py-2 px-4 items-center gap-4">
        <div>
          <img 
          src={postagem.usuario?.foto} 
          alt={postagem.usuario?.nome} 
          className="h-12 rounded-xl"/>
        </div>
        <div>
          <h3 className="text-lg font-bold text-left uppercase">{postagem.usuario?.nome}</h3>
          <p>
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "medium",
              timeStyle: "short"
            }).format(new Date(postagem.data))}
          </p>
        </div>
      </div>
      <hr className="text-slate-300" />
      <div className="p-4 bg-white">
        <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
        <p>{postagem.texto}</p>
        <p>Tema: {postagem.tema?.descricao}</p>
          <img src="https://ik.imagekit.io/samuelsrj/generation/post-tendencia.png" className="w-full my-2" alt="" />
      </div>
      {/* <div className="flex">
        <Link to={`/editarpostagem/${postagem.id}`} 
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>
        <Link to={`/deletarpostagem/${postagem.id}`} className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div> */}
      <div className="flex">
          <button className="w-full border border-slate-200 text-slate-800 bg-white hover:bg-slate-200 flex items-center justify-center py-2 cursor-pointer">Curtir</button>
          <button className="w-full border border-slate-200 text-slate-800 bg-white hover:bg-slate-200 flex items-center justify-center py-2 cursor-pointer">Comentar</button>
          <button className="w-full border border-slate-200 text-slate-800 bg-white hover:bg-slate-200 flex items-center justify-center py-2 cursor-pointer">Compartilhar</button>
      </div>
    </div>
  )
}

export default CardPostagens2