import Homepage from "./Pages/Homepage";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
// import Reset from "./Pages/Resetpage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/reset" element={<Reset />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
