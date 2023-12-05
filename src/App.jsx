import React from "react";
import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import DesEvent from "./pages/DesEvent";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

 function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Event />} />
          <Route path="/desEvent" element={<DesEvent />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

