import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Form from "./components/Form";
import RoomPage from "./pages/room/RoomPage";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/meeting" element={<Form />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/analytics" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
