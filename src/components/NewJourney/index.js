import React from 'react';


import './styles.css';

function NewJourney () {

  function closeOverlay() {
    var cancel = document.getElementsByClassName('overlay');

    cancel[0].style.display = "none";
  }



  return (
    <div  className="overlay">
      <div className="card">
        <h3>Nova Jornada</h3>
        <hr/>
        <form>
          <h4>Dê um <strong>nome</strong> para essa Jornada</h4>
          <input type="text"/>
          <span>Você poderá alterar essa informação depois.</span>
          <div className="btn-submit">
            <button type="submit" className="submit">Continuar</button>
            <button type="button" onClick={closeOverlay} className="cancel">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default NewJourney;