import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import MeetIDForm from "./components/MeetIDForm";
import RoomPage from "./pages/room/RoomPage";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import DashBoard from "./pages/DashBoard";
import RequiresAuth from "./components/RequiresAuth";
import GenerateMeet from "./components/GenerateMeet";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
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
        <Route
          path="/room/:roomId"
          element={
            <RequiresAuth>
              <RoomPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/analytics"
          element={
            <RequiresAuth>
              <DashBoard />
            </RequiresAuth>
          }
        />
        <Route path="/generate-meet" element={<GenerateMeet />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
