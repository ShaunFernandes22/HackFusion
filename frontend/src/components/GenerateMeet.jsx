import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GenerateMeet = () => {
  const [roomCode, setRoomCode] = useState("");
  const [buttonText, setButtonText] = useState("Generate Code");

  const handleGenerateCode = () => {
    const code = uuidv4();
    setRoomCode(code);
    setButtonText("Copy");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode);
    setButtonText("Copied");
    setTimeout(() => {
      setButtonText("Copy");
    }, 3000); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (buttonText === "Generate Code") {
      handleGenerateCode();
    } else {
      handleCopyCode();
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
        <form
          className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Generate Room ID
          </h2>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-gray-700"
              htmlFor="roomID"
            >
              Room ID
            </label>
            <input
              value={roomCode}
              readOnly
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="roomID"
              type="text"
              placeholder="Room ID"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-[#00df9a] hover:bg-[#1cff51] text-black hover:text-[#000300] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateMeet;
