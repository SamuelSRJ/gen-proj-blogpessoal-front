import { Link } from "react-router-dom"
import type Postagem from "../../../models/Postagem"

interface CardPostagensProps {
  postagem: Postagem
}

function CardPostagens({ postagem }: CardPostagensProps) {
  return (
    <div  className="border flex flex-col overflow-hidden justify-between">
      <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        <img 
          src={postagem.usuario?.foto} 
          alt={postagem.usuario?.nome} 
          className="h-12 rounded-full"/>
        <h3 className="text-lg font-bold text-center uppercase">{postagem.usuario?.nome}</h3>
      </div>
      <div className="p-4 bg-[#fff3db]" style={{ backgroundImage: "url('https://resources.blogblog.com/blogblog/data/scribe/bg_paper_mid.jpg')" }}>
        <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
        <p>{postagem.texto}</p>
        <p>Tema: {postagem.tema?.descricao}</p>
        <p>
          Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: "full",
            timeStyle: "medium"
          }).format(new Date(postagem.data))}
        </p>
      </div>
      <div className="flex">
        <Link to={`/editarpostagem/${postagem.id}`} 
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>
        <Link to={`/deletarpostagem/${postagem.id}`} className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagens