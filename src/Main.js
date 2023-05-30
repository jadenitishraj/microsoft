import React from "react";
import App from "./App";
import AdminPanel from "./components/dashboard/AdminPanel";
import AdminHeader from "./components/dashboard/header/Header";

import Productlinksadmin  from "./components/productLinks/Productlinks/Productlinksadmin";

import HomeCardsAdmin  from "./components/dashboard/HomeCards/HomeCardsAdmin";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterBottom from "./components/dashboard/FooterBottom/FooterBottom";

export default function Main() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/dashboard" element={<AdminPanel />} />
          <Route exact path="/admin-header" element={<AdminHeader />} />
          <Route exact path="/admin-productlinks" element={<Productlinksadmin />} />
          <Route exact path="/admin-homecards" element={<HomeCardsAdmin />} />
          <Route exact path="/admin-FooterBottom" element={<FooterBottom />} />
        </Routes>
      </div>
    </Router>
  )
}
