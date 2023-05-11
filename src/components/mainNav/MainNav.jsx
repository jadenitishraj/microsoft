import { useState, useEffect } from "react";
import { useSelector, useDispatch  } from 'react-redux';
import {fetchMenu} from '../../actions/fetchMenu'

export default function MainNav() {
  
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchMenu())
  },[]);

  const mainMenu = useSelector((state) => state.menuData.menu);



  

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
            <a href="#">{mainMenuData.menu_name}</a>
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
