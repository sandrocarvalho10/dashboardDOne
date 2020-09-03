import React from 'react';


import logoBrancoD1 from '../../assets/images/logotipo-branco.png';
import ChartPie from '../../assets/icons/chart-pie.svg';
import rocket from '../../assets/icons/rocket.svg';
import userFriends from '../../assets/icons/user-friends.svg';
import ccm from '../../assets/icons/ccm-cloud.svg';
import external from '../../assets/icons/external-link-alt-solid.svg';
import gem from '../../assets/icons/gem.svg';
import tools from '../../assets/icons/tools.svg';
import signOutAlt from '../../assets/icons/sign-out-alt.svg';
import exchange from '../../assets/icons/exchange-alt.svg';



import './styles.css';

function MenuBar () {

  return(
    <div className="menu">
      <div className="logo">
        <img src={logoBrancoD1} alt="Logotipo D1"/>
      </div>
      <ul className="list1">
        <li>
          <a href="#" data-tooltip="Análises"
                      data-tooltip-location="right">
            <img className="icon" src={ChartPie} alt=""/>              
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="Jornadas"
                      data-tooltip-location="right">
            <img className="icon"  src={rocket} alt=""/>
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="Clientes"
                      data-tooltip-location="right">
            <img className="icon"  src={userFriends} alt=""/>
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="CCM Cloud"
                      data-tooltip-location="right">
            <img className="icon"  src={ccm} alt=""/>
          </a>
        </li>
        <li >
          <a className="link-out" href="#" data-tooltip="Versão 01"
                                          data-tooltip-location="right">
            <img className="icon"  src={external} alt=""/>
          </a>
        </li>
      </ul>

      <ul className="list1">
        <li>
          <a href="#" data-tooltip="Administração"
                      data-tooltip-location="right">
            <img className="icon"  src={gem} alt=""/>
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="Help Desk"
                      data-tooltip-location="right">
            <img className="icon"  src={tools} alt=""/>
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="Trocar Conta"
                      data-tooltip-location="right">
            <img className="icon"  src={exchange} alt=""/>
          </a>
        </li>
        <li>
          <a href="#" data-tooltip="Sair"
                      data-tooltip-location="right">
            <img className="icon"  src={signOutAlt} alt=""/>
          </a>
        </li>
      </ul>
    </div>
  );


}

export default MenuBar;