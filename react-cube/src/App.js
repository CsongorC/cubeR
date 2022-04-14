import React, { useState } from 'react';
import './App.css';
import Sketch from './Sketch'
import * as scanner from './scanner';
import * as solveCube from './solveCube'
import { Link } from 'react-router-dom';

class SolveCubeComponent extends React.Component {
  render() {
    return (
      <Sketch sketch={solveCube}/>
    );
  }  
}

class ScannerComponent extends React.Component {
    render() {
      return (
        <Sketch sketch={scanner}/>
      );
    }  
  }

const App = () => {
    const [clickedScanner, setClickedScanner] = useState(false);
  
    return (
      <div>
        <button onClick={() => {setClickedScanner(!clickedScanner)}} >Scanner</button>
        {clickedScanner ? <ScannerComponent /> : <SolveCubeComponent/>}
      </div>
    );
  }


export default App;