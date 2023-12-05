import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/NavbarComponent";
import Footer from "../components/FooterComponent";

import HomePage from "../pages/HomePage";
import PembelajaranPage from "../pages/PembelajaranPage";
import EventPage from "../pages/EventPage";
import ProfilePage from "../pages/ProfilePage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/pembelajaran" Component={PembelajaranPage} />
        <Route path="/event" Component={EventPage} />
        <Route path="/profile" Component={ProfilePage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
