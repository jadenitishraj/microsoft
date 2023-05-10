import { useState, useEffect } from "react";

export default function MainNav() {
  const [mainMenu, setMainMenu] = useState(["Microsoft365", "Teams"]);

  return (
    <nav className="main-nav container">
      <img
        src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
        alt="Microsoft logo"
        className="logo"
      />

      <ul className="main-menu">
        {mainMenu.map((mainMenuData) => (
          <li>
            <a href="#">{mainMenuData}</a>
          </li>
        ))}
      </ul>

      <ul className="right-menu">
        <li>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
