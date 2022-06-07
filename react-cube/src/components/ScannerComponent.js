import React, { useState } from 'react';
import Sketch from '../Sketch'
import * as scanner from '../scanner';

export default class ScannerComponent extends React.Component {
    render() {
      return (
        <Sketch sketch={scanner}/>
      );
    }  
}