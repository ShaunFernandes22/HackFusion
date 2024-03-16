import { Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Form from "./components/Form";
import RoomPage from "./pages/room/RoomPage";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Navbar from "./components/Navbar";
import "./App.css";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/meeting" element={<Form />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/analytics" element={<Charts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
