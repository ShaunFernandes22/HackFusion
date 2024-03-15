import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Form from './components/Form'
import RoomPage from './pages/room/RoomPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/meeting" element={<Form/>}/>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
