import React from "react";
import App from "./App";
import AdminPanel from "./components/dashboard/AdminPanel";
import AdminHeader from "./components/dashboard/header/Header";
import FooterHeading from "./components/dashboard/footerHeadings/FooterHeading";
import FooterLinks from "./components/dashboard//footerLinks/FooterLinks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/dashboard" element={<AdminPanel />} />
          <Route exact path="/admin-header" element={<AdminHeader />} />
          <Route exact path="/footer-heading" element={<FooterHeading />} />
          <Route exact path="/footer-links" element={<FooterLinks />} />

        </Routes>
      </div>
    </Router>
  );
}
