import React, { useState } from 'react';
import Sketch from '../Sketch'
import * as manualSolver from '../ManualSolver'
import ModalManualSolver from './ModalManualSolver'

export default class ManualSolverComponent extends React.Component {
    render() {
      return (
        <>
        <ModalManualSolver/>
        <Sketch sketch={manualSolver}/>
        </>
      );
    }  
}