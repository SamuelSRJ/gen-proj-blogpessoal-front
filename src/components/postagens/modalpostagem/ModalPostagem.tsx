import Popup from "reactjs-popup"
import FormPostagem from "../formpostagem/FormPostagem"

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup trigger={
        <button className="border rounded px-4 py-2 bg-[#F92596] text-white hover:bg-white hover:text-[#F92596] border-[#F92596] cursor-pointer">
          Nova Postagem
        </button>
      }
      modal
      >
        <FormPostagem />
      </Popup>
    </>
  )
}

export default ModalPostagem