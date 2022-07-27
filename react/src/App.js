import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login"
import Home from "./pages/home"
import Register from "./pages/register"

function App() {
  return (
    <>
      <Routes>
          <Route index path="\" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;