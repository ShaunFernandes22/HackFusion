import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import MeetIDForm from "./components/MeetIDForm";
import RoomPage from "./pages/room/RoomPage";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import "./App.css";
import Charts from "./components/Charts";
import { useState } from "react";
import RequiresAuth from "./components/RequiresAuth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="app">
      <Navbar />
      <button
        style={{
          color: "red",
          backgroundColor: "white",
          padding: "4px",
          borderRadius: "4px",
        }}
        onClick={handleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/meeting"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <MeetIDForm />
            </RequiresAuth>
          }
        />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/analytics" element={<Charts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
