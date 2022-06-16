import React, { useState } from 'react';
import './App.css';
import SolveCubeComponent from './components/SolveCubeComponent'
import ScannerComponent from './components/ScannerComponent'
import Home from './components/Home'
import AboutCube from './components/AboutTheCube'
import { isVisible } from './scanner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ManualSolverComponent from './components/ManualSolverComponent'

function App(){
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/about' element={<AboutCube />}/>
          <Route path='/scanner' element={<ScannerComponent />}/>
          <Route path='/solver' element={<SolveCubeComponent />}/>
          <Route path='/manual-solver' element={<ManualSolverComponent />}/>
        </Routes>
      </Router>
      </>
    );
  }


export default App;