import React, { useState } from 'react';
import Sketch from '../Sketch'
import * as solveCube from '../solveCube'
import ModalSolver from './ModalSolver';

export default class SolveCubeComponent extends React.Component {
    render() {
      return (
        <>
        <ModalSolver/>
        <Sketch sketch={solveCube}/>
        </>
      );
    }  
}