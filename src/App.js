import React from 'react';

import Header from './components/Header';
import MenuBar from './components/Menu';
import PanelList from './components/PanelList';
import NewJourney from './components/NewJourney';


function App() {
  return (
    <div className="App"> 
      <NewJourney />     
       <div className="page">
         <div className="menu-bar">
            <MenuBar />
         </div>
         <div className="main-content">
            <Header />
            <PanelList />
         </div>
       </div>
    </div>
  );
}

export default App;
