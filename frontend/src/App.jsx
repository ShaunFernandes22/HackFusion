import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import MeetIDForm from "./components/MeetIDForm";
import RoomPage from "./pages/room/RoomPage";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import DashBoard from "./pages/DashBoard";
import RequiresAuth from "./components/RequiresAuth";
import { AuthContext } from "./main";
import { useContext } from "react";

import "./App.css";
function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
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
            <RequiresAuth>
              <MeetIDForm />
            </RequiresAuth>
          }
        />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route
          path="/analytics"
          element={
            <RequiresAuth>
              <DashBoard />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
