import React, { useState } from 'react';
import './App.css';
import SolveCubeComponent from './components/SolveCubeComponent'
import ScannerComponent from './components/ScannerComponent'
import { isVisible } from './scanner';

const App = () => {
    const [clickedScanner, setClickedScanner] = useState(isVisible);
  
    return (
      <body className='bgImg'>
          <div>
            <button onClick={() => { setClickedScanner(!clickedScanner); } }>GO TO ANIMATION</button>
            {clickedScanner ? <ScannerComponent /> : <SolveCubeComponent />}
          </div>
      </body>
      
    );
  }


export default App;