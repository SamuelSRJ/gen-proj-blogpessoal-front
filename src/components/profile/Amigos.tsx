
import friends from "../../data/friends.json"

function Amigos() {
  return (
    <>
      <div className="bg-white p-2 border border-white rounded-2xl shadow-xl">
        <h5 className="font-bold px-2 text-xl mb-2">amigos (1.428)</h5>
        <div className="grid grid-cols-3 gap-4 ">
          {friends.map(friend => (
            <div>
              <img className="fake-link p-1" src={friend.pic} />
              <p className="text-[#49778A] fake-link text-md">{friend.name}</p>
            </div>
          ))}
          <p className="text-[#49778A] underline fake-link px-2">Ver Todos...</p>
        </div>
      </div>
    </>
  )
}

export default Amigos