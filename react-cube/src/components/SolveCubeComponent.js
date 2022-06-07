import React, { useState } from 'react';
import Sketch from '../Sketch'
import * as solveCube from '../solveCube'

export default class SolveCubeComponent extends React.Component {
    render() {
      return (
        <Sketch sketch={solveCube}/>
      );
    }  
}