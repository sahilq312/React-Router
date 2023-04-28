import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./server.js"
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
//import { Header } from "./componets/Header";
import Layout from "./componets/Layout";
import { Dashboard } from "./Pages/Host/Dashboard";
import { Income } from "./Pages/Host/Income";
import { Reviews } from "./Pages/Host/Reviews";
import { HostLayout } from "./componets/HostLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        
        <Route path="/host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
}

export default App;
