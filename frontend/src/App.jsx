import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Singup from "./Singup";
import VerifyCode from "./VerifyCode";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/verify-code" element={<VerifyCode />} />
      </Routes>
    </Router>
  );
}


export default App;
