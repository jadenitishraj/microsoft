import React from "react";
import App from "./App";
import AdminPanel from "./components/dashboard/AdminPanel";
import AdminHeader from "./components/dashboard/header/Header";

import ProductLinks  from "./components/dashboard/header/Productlinks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/dashboard" element={<AdminPanel />} />
          <Route exact path="/admin-header" element={<AdminHeader />} />
          <Route exact path="/admin-productlinks" element={<ProductLinks />} />
       
        </Routes>
      </div>
    </Router>
  );
}
