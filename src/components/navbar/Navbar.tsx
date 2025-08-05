import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { BooksIcon, FolderSimplePlusIcon, HouseIcon, UserIcon } from "@phosphor-icons/react";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert("O usuário foi desconectado com sucesso!")
    navigate("/")
  }

  let navbarComponent: ReactNode

  if(usuario.token !== "") {
    navbarComponent= (
      <div className="w-full flex justify-center bg-[#739DCF] text-white">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-4xl p-2 font-bold text-pink-600 bg-white">Orkut<span className="text-slate-400 -rotate-90 text-sm items-center">BETA</span></Link>
          <div className="flex items-center">
            <Link to="/postagens" className="py-1 hover:bg-[#2D527E] text-white px-4 duration-400"><HouseIcon className="mx-auto text-2xl"/>Postagens</Link>
            <Link to="/temas" className="py-1 hover:bg-[#2D527E] text-white px-4 duration-400"><BooksIcon className="mx-auto text-2xl"/>Temas</Link>
            <Link to="/cadastrartema" className="py-1 hover:bg-[#2D527E] text-white px-4 duration-400"><FolderSimplePlusIcon className="mx-auto text-2xl"/> Cadastrar Temas</Link>
            <Link to="/perfil" className="py-1 hover:bg-[#2D527E] text-white px-4 duration-400"><UserIcon className="mx-auto text-2xl"/> Perfil</Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/perfil" className="text-[#2D527E] font-bold hover:underline">{usuario.usuario}</Link>
            <Link to="" onClick={logout} className="items-center hover:underline">Sair</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar