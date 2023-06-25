import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './TopBar.js';
import StandardCalc from './StandardCalc.js';
import ScientificCalc from './ScientificCalc.js';
import History from './History.js';
import Memory from './Memory.js';
import NavBar from './NavBar.js';
import './index.css';
import AppIcon from './images/CalculatorIcon512.png';
import swDev from './swDev.js';


function START() {
  return (
    <>
      <div id="Loading">
          <img id="AppIcon" src={AppIcon} alt="" />
        </div>
      <div id="MainContainer">
        <TopBar />
        <StandardCalc />
        <ScientificCalc />
        <History />
        <Memory />
        <NavBar />
      </div>
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<StandardCalc />}/> */}
      {/* <Route path="/History" element={<History />} /> */}
      {/* <Route path="/ScientificCalc" element={<ScientificCalc />}/> */}
      {/* <Route path="/Memory" element={<Memory/>}/> */}
      {/* <Route path="/NavBar" element={<NavBar/>}/> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}

    </>
  )

}

swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);