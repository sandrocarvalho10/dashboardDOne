import React from 'react';
import {Plus, Search } from 'react-feather';


import acmeLogo from '../../assets/images/acme-logo.png';
// import plus from '../../assets/icons/plus.svg';

import './styles.css';


function Header() {


 
  function overlay() {

    var overlay = document.getElementsByClassName('overlay');

    overlay[0].style.display = "flex";

  }
  

  return(
   <header>
     <div className="header">
        <div className="block-1">
          <div className="account" data-tooltip="Antônio da Silva"
                                  data-tooltip-location="right">
            <h2>A</h2>
          </div>
          <div className="logo">
            <img src={acmeLogo} alt="Logo da Acme"/>
          </div>
        </div>
        <div className="block-2">
          <form action="">
            <div className="input-group">
              <label htmlFor="search">
                <Search size={20} color="#117EFF"/>
              </label>
              <input type="text" name="search" placeholder="Buscar"/>
            </div>
            </form>
            <button type="submit" onClick={overlay} className="btn-create-journey">
              <Plus size={17} color="#FFF" />
              <span>Nova Jornada</span>
            </button>
          
        </div>
     </div>     
   </header>
  );

}

export default Header;