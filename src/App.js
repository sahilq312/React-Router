import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./server.js"
import Vans from "./Pages/Vans";
import VanDetail from "./Pages/VanDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
          <Link to="/vans">Vans</Link>

        </nav>
      </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vans" element={<Vans/>}/>
      <Route path="/vans/:id" element={<VanDetail />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
