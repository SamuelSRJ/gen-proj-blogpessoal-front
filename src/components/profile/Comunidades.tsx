import communities from "../../data/communities.json"

function Comunidades() {
  return (
    <>
      <div className="bg-white p-2 border border-white rounded-2xl shadow-xl">
        <h5 className="font-bold px-2 text-xl mb-2">comunidades (243)</h5>
        <div className="grid grid-cols-3 gap-4 ">
          {communities.map(communities => (
            <div>
              <img className="fake-link p-1" src={communities.pic} />
              <p className="text-[#49778A] fake-link text-md">{communities.name}</p>
            </div>
          ))}
          <p className="text-[#49778A] underline fake-link px-2">Ver Todos...</p>
        </div>
      </div>
    </>
  )
}

export default Comunidades