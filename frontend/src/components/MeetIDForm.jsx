import React, {useCallback, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const MeetIDForm = () => {
    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate();

    const handleFormSubmit = useCallback((ev) =>{
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }, [navigate, roomCode]);

  return (
  <div className='w-full h-screen flex justify-center items-center'>  
  <div className="w-full max-w-md mx-auto p-8 bg-gray-100 rounded-lg shadow-md ">
  <form className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit} autoComplete='off'>
    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Enter Room ID</h2>
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="roomID">
        Room ID
      </label>
      <input
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="roomID"
        type="text"
        placeholder="Enter Room ID"
        required
      />
    </div>
    <div className="flex items-center justify-center">
      <button
        className="w-full bg-[#00df9a] hover:bg-[#48b190] text-white hover:text-[#000300] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Enter Room
      </button>
    </div>
  </form>
</div>
</div>

  )
}

export default MeetIDForm