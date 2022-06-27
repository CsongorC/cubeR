import React, { useState } from "react";
import Sketch from "../Sketch";
import * as scanner from "../scanner";
import ModalScanner from './ModalScanner'

export default class ScannerComponent extends React.Component {
  render() {
    return (
      <>
        <ModalScanner/>
        <Sketch sketch={scanner} />
      </>
    );
  }
}
