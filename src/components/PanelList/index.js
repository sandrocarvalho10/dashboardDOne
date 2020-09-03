import React, { useState } from 'react';

import table from '../../assets/icons/table.svg';
import paperPlane from '../../assets/icons/paper-plane.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import pen from '../../assets/icons/pen.svg';
import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';

import api from '../../services/api';


import './styles.css'
import { useEffect } from 'react';




const PanelList = () => {

  const [filters, setFilters] = useState([]);
  const [dates, setDates] = useState([]);
  const [active, setActive] = useState(0);

  const icons = [
    table,
    paperPlane,
    playCircle,
    pen,
    bed,
    check
  ]

  const status = [
    'Todos',
    'Em Execução',
    'Ativa',
    'Configurando',
    'Ociosa',
    'Concluída',
  ]

 
  useEffect( async () => {
    const response = await api.get('/filter');

    console.log(response)

    setFilters(response.data);
   
      
    
  }, []);

  
  
  // var header = document.getElementById("listaLinks");
  var btns = document.getElementsByClassName("classFilter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

async function defaultFilter(valueActivation) {
  // console.log(valueActivation);
  if(valueActivation === 0){
  const response = await api.get(`/journey`);

  setDates(response.data); 
  }
}
  
  defaultFilter(active);
 
  useEffect(() => (
    setActive(1)
  ),[])

  async function chooseFilter(e) {
    e.preventDefault();
    
    
    var valor = e.currentTarget.id;
    var element = document.getElementById(valor);
    element.classList.add('active');
    
   
   
    if(valor === '0'){
      valor = ' ';
    }

    // console.log(valor);
    const response = await api.get(`/journey/${valor}`);

    setDates(response.data);     
    
  }  
  
  return (
    <div className="panels">
      <div className="panel">
        <div className="panel-left">
          <div className="p-fixed">
            <h3> Jornadas </h3>
            <ul id="listLinks">
              { filters.map((filter) => (
                <li key={filter.id} id={filter.id} name={'filters'+ filter.id} className="classFilter" onClick={chooseFilter}>
                  <a href="" data-valor={filter.id} className="linkId ">
                    <img src={ icons[filter.id] } alt=""/>
                    <span className="name-journey">{ filter.name }</span>
                    <span className="total">{ filter.quantity }</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>  
        </div>
        <div className="panel-right">
          <div className="lista-info">
            <ul>
               <li className="title-base">
                <span className="name">Nome</span>
                <span>Destinatários</span>
                <span>Sucesso</span>
                <span>Status</span>
              </li>
              {dates.map((dates) => (
                  <li key={dates.id}>
                    <span className="name">{ dates.name }</span>
              <span>{ dates.recipients }</span>
                    <span>{ dates.success }</span>
              <span className="status"><img src={icons[dates.status]} alt=""/> {status[dates.status] }</span>
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}


export default PanelList;