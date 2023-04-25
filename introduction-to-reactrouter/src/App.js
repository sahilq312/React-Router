import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
