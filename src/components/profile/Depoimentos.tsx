

function Depoimentos() {
  return (
    <>
      <div className="bg-white p-2 border border-white rounded-2xl shadow-xl h-fit hidden lg:block">
        <h2 className="font-bold px-2 text-2xl mb-2">depoimentos (43)</h2>
        <hr className="text-slate-300" />
        <div className="grid grid-cols-[0.55fr_1.7fr] gap-2 my-2 p-2">
          <div className="">
            <img src="https://github.com/melcsilva.png" alt="Foto do amigo" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#49778A] text-xl font-bold text-left fake-link">Mel Silva</h1>
            <p>Gente boa demais, sempre salvando a turma (mesmo quando a gente só entrega bug). Valeu por aguentar a galera e ainda ensinar na paz! Tamo junto, mestre! 💻👊</p>
          </div>
        </div>
        <div className="grid grid-cols-[0.55fr_1.7fr] gap-2 my-2 p-2">
          <div className="">
            <img src="https://github.com/ysabellax.png" alt="Foto do amigo" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#49778A] text-xl font-bold text-left fake-link">Ysa Santos</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, aliquid! Optio id recusandae assumenda blanditiis ullam totam, aspernatur quaerat accusamus.</p>
          </div>
        </div>
        <div className="grid grid-cols-[0.55fr_1.7fr] gap-2 my-2 p-2">
          <div className="">
            <img src="https://github.com/dgsferreira.png" alt="Foto do amigo" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#49778A] text-xl font-bold text-left fake-link">Douglas Ferreira</h1>
            <p>PROFESSOR BOM: aprende e ensina.<br/>PROFESSOR LENDÁRIO: ouve música ruim, assiste anime de máquina de refrigerante e acha que live de indiano vai salvar o mundo. Esse aqui é lendário!</p>
          </div>
        </div>
        <p className="text-[#49778A] underline fake-link px-2">Ver Todos...</p>
      </div>
    </>
  )
}

export default Depoimentos