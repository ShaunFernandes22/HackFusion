import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate();

    const handleFormSubmit = (ev) =>{
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }

  return (
    <div className="w-full max-w-xs m-auto p-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomID">
        Enter Room ID
      </label>
      <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="roomID" type="text" placeholder="Room ID" required />
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Enter
      </button>
    </div>
  </form>
</div>
  )
}

export default Form