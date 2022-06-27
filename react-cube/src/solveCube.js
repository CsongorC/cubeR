import { p } from "./Sketch";
import { cubie3D } from "./cubie3D";
import Cube from "./libraries/cube";
import Solver from "./libraries/solve";
import { wholeCubeInLetters } from "./scanner";
import solver from "rubiks-cube-solver";
import {
  upFace,
  frontFace,
  leftFace,
  rightFace,
  posteriorFace,
  downFace,
} from "./scanner";

const size = 100;
const dim = 3;
let cubes = [];
const moves = ["f", "F", "b", "B", "r", "R", "l", "L", "u", "U", "d", "D"];
let autoanimation = false;
let newMoves;

let cubeState = [
  frontFace, 
  rightFace,
  upFace,
  downFace,
  leftFace, 
  posteriorFace,
].join("");

let colors = [
  [0, 255, 0], 
  [0, 0, 255], 
  [255, 0, 0], 
  [255, 100, 0], 
  [255, 255, 255],
  [255, 255, 0], 
];

let cubeIndexes = [
  {
    name: "FRONT",
    rotationAxis: "z",
    position: 1,
    cubes: [2, 11, 20, 5, 14, 23, 8, 17, 26],
    clockwise: [8, 5, 2, 17, 14, 11, 26, 23, 20],
    counterClockwise: [20, 23, 26, 11, 14, 17, 2, 5, 8],
  },
  {
    name: "BACK",
    rotationAxis: "z",
    position: -1,
    cubes: [18, 9, 0, 21, 12, 3, 24, 15, 6],
    clockwise: [0, 3, 6, 9, 12, 15, 18, 21, 24],
    counterClockwise: [24, 21, 18, 15, 12, 9, 6, 3, 0],
  },
  {
    name: "RIGHT",
    rotationAxis: "x",
    position: 1,
    cubes: [20, 19, 18, 23, 22, 21, 26, 25, 24],
    clockwise: [26, 23, 20, 25, 22, 19, 24, 21, 18],
    counterClockwise: [18, 21, 24, 19, 22, 25, 20, 23, 26],
  },
  {
    name: "LEFT",
    rotationAxis: "x",
    position: -1,
    cubes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    clockwise: [2, 5, 8, 1, 4, 7, 0, 3, 6],
    counterClockwise: [6, 3, 0, 7, 4, 1, 8, 5, 2],
  },
  {
    name: "TOP",
    rotationAxis: "y",
    position: -1,
    cubes: [0, 9, 18, 1, 10, 19, 2, 11, 20],
    clockwise: [18, 19, 20, 9, 10, 11, 0, 1, 2],
    counterClockwise: [2, 1, 0, 11, 10, 9, 20, 19, 18],
  },
  {
    name: "BOTTOM",
    rotationAxis: "y",
    position: 1,
    cubes: [8, 17, 26, 7, 16, 25, 6, 15, 24],
    clockwise: [6, 7, 8, 15, 16, 17, 24, 25, 26],
    counterClockwise: [26, 25, 24, 17, 16, 15, 8, 7, 6],
  },
];

let isAnimationActive = false;
let angle = 0;
let clockwise = 1;
let position;
let rotationAxis = null;

var buttonScramble;
var buttonSolve;

var buttonU;
var buttonF;
var buttonR;
var buttonL;
var buttonD;
var buttonB;
var buttonu;
var buttonf;
var buttonl;
var buttonr;
var buttond;
var buttonb;

let slider;

let processedMovesToDo;
let cube = new Cube(
  Cube.fromString("UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB")
);

function turnU() {
  doTurn("U");
  cube.move("U");
}

function turnD() {
  doTurn("D");
  cube.move("D");
}

function turnR() {
  doTurn("R");
  cube.move("R");
}

function turnL() {
  doTurn("L");
  cube.move("L");
}

function turnF() {
  doTurn("F");
  cube.move("F");
}

function turnB() {
  doTurn("B");
  cube.move("B");
}

function turnu() {
  doTurn("u");
  cube.move("U'");
}

function turnd() {
  doTurn("d");
  cube.move("D'");
}

function turnr() {
  doTurn("r");
  cube.move("R'");
}

function turnl() {
  doTurn("l");
  cube.move("L'");
}

function turnf() {
  doTurn("f");
  cube.move("F'");
}

function turnb() {
  doTurn("b");
  cube.move("B'");
}

export function setup() {
  p.pixelDensity(1);
  p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  p.setAttributes("antialias", true);
  cubes = [];

  buttonU = p.createButton("U");
  buttonU.mousePressed(turnU);
  buttonU.position(775, 100);
  buttonU.size(35, 35);
  buttonU.attribute("disabled", "");

  buttonD = p.createButton("D");
  buttonD.mousePressed(turnD);
  buttonD.position(875, 100);
  buttonD.size(35, 35);
  buttonD.attribute("disabled", "");

  buttonR = p.createButton("R");
  buttonR.mousePressed(turnR);
  buttonR.position(975, 100);
  buttonR.size(35, 35);
  buttonR.attribute("disabled", "");

  buttonL = p.createButton("L");
  buttonL.mousePressed(turnL);
  buttonL.position(1075, 100);
  buttonL.size(35, 35);
  buttonL.attribute("disabled", "");

  buttonF = p.createButton("F");
  buttonF.mousePressed(turnF);
  buttonF.position(1175, 100);
  buttonF.size(35, 35);
  buttonF.attribute("disabled", "");

  buttonB = p.createButton("B");
  buttonB.mousePressed(turnB);
  buttonB.position(1275, 100);
  buttonB.size(35, 35);
  buttonB.attribute("disabled", "");

  buttonu = p.createButton("U'");
  buttonu.mousePressed(turnu);
  buttonu.position(775, 150);
  buttonu.size(35, 35);
  buttonu.attribute("disabled", "");

  buttond = p.createButton("D'");
  buttond.mousePressed(turnd);
  buttond.position(875, 150);
  buttond.size(35, 35);
  buttond.attribute("disabled", "");

  buttonr = p.createButton("R'");
  buttonr.mousePressed(turnr);
  buttonr.position(975, 150);
  buttonr.size(35, 35);
  buttonr.attribute("disabled", "");

  buttonl = p.createButton("L'");
  buttonl.mousePressed(turnl);
  buttonl.position(1075, 150);
  buttonl.size(35, 35);
  buttonl.attribute("disabled", "");

  buttonf = p.createButton("F'");
  buttonf.mousePressed(turnf);
  buttonf.position(1175, 150);
  buttonf.size(35, 35);
  buttonf.attribute("disabled", "");

  buttonb = p.createButton("B'");
  buttonb.mousePressed(turnb);
  buttonb.position(1275, 150);
  buttonb.size(35, 35);
  buttonb.attribute("disabled", "");

  slider = p.createSlider(1000, 5000, 2500, 500);
  slider.position(1400, 100);
  slider.style("width", "285px");

  buttonScramble = p.createButton("SCRAMBLE");
  buttonScramble.mousePressed(scrambleCube);
  buttonScramble.position(1400, 150);
  buttonScramble.size(135, 35);

  buttonSolve = p.createButton("SOLVE");
  buttonSolve.mousePressed(solveCube);
  buttonSolve.position(1550, 150);
  buttonSolve.attribute("disabled", "");
  buttonSolve.size(135, 35);

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        let px = i * size - size;
        let py = j * size - size;
        let pz = k * size - size;
        let cube = new cubie3D(px, py, pz, size, colors);
        cubes.push(cube);
      }
    }
  }
}

function processMoves(moves) {
  let processedMoves = "";
  for (let i = 0; i < moves.length; i++) {
    if (
      moves[i] == "l" ||
      moves[i] == "r" ||
      moves[i] == "f" ||
      moves[i] == "d" ||
      moves[i] == "u" ||
      moves[i] == "b"
    ) {
      if (moves[i] == "l") {
        processedMoves = processedMoves + "L' ";
      }
      if (moves[i] == "r") {
        processedMoves = processedMoves + "R' ";
      }
      if (moves[i] == "f") {
        processedMoves = processedMoves + "F' ";
      }
      if (moves[i] == "d") {
        processedMoves = processedMoves + "D' ";
      }
      if (moves[i] == "u") {
        processedMoves = processedMoves + "U' ";
      }
      if (moves[i] == "b") {
        processedMoves = processedMoves + "B' ";
      }
    } else {
      processedMoves = processedMoves + moves[i] + " ";
    }
  }
  return processedMoves;
}

function processBackMoves(moves) {
  let processedMoves = "",
    counter = 0;
  for (let i = 0; i < moves.length; i++) {
    if (
      (moves[i] == "L" && moves[i + 1] == "'") ||
      (moves[i] == "R" && moves[i + 1] == "'") ||
      (moves[i] == "F" && moves[i + 1] == "'") ||
      (moves[i] == "D" && moves[i + 1] == "'") ||
      (moves[i] == "U" && moves[i + 1] == "'") ||
      (moves[i] == "B" && moves[i + 1] == "'")
    ) {
      if (moves[i] == "L") {
        processedMoves = processedMoves + "l ";
        counter = counter + 1;
      }
      if (moves[i] == "R") {
        processedMoves = processedMoves + "r ";
        counter = counter + 1;
      }
      if (moves[i] == "F") {
        processedMoves = processedMoves + "f ";
        counter = counter + 1;
      }
      if (moves[i] == "D") {
        processedMoves = processedMoves + "d ";
        counter = counter + 1;
      }
      if (moves[i] == "U") {
        processedMoves = processedMoves + "u ";
        counter = counter + 1;
      }
      if (moves[i] == "B") {
        processedMoves = processedMoves + "b ";
        counter = counter + 1;
      }
    } else if (
      moves[i] == "L" ||
      moves[i] == "R" ||
      moves[i] == "F" ||
      moves[i] == "D" ||
      moves[i] == "U" ||
      moves[i] == "B"
    ) {
      processedMoves = processedMoves + moves[i] + " ";
      counter = counter + 1;
    }
  }
  return { processedMoves, counter };
}

function scrambleCube() {
  if (wholeCubeInLetters == "") {
    alert("The scanned cube was not saved!");
  } else {
    buttonSolve.attribute("disabled", "");

    cube = new Cube(Cube.fromString(wholeCubeInLetters));

    buttonSolve.attribute("disabled", "");

    Cube.initSolver();

    newMoves = cube.solve();

    console.log(cube.asString());

    let newReformattedMoves = processMoves(newMoves);

    let movesToDo = "";
    movesToDo = Cube.inverse(newReformattedMoves);

    let mv = processBackMoves(movesToDo);
    processedMovesToDo = mv.processedMoves;

    doScrambling();
  }
}

async function doScrambling() {
  console.log("Scrambling: ");
  buttonScramble.attribute("disabled", "");
  for (let i = 0; i < processedMovesToDo.length; i++) {
    angle = angle += 1.5;
    await sleep(100);
    doTurn(processedMovesToDo[i]);
  }
  buttonSolve.removeAttribute("disabled");

  buttonU.removeAttribute("disabled");
  buttonF.removeAttribute("disabled");
  buttonR.removeAttribute("disabled");
  buttonL.removeAttribute("disabled");
  buttonD.removeAttribute("disabled");
  buttonB.removeAttribute("disabled");
  buttonu.removeAttribute("disabled");
  buttonf.removeAttribute("disabled");
  buttonl.removeAttribute("disabled");
  buttonr.removeAttribute("disabled");
  buttond.removeAttribute("disabled");
  buttonb.removeAttribute("disabled");
}

async function solveCube() {
  newMoves = cube.solve();
  let speedOfMovement = slider.value();
  buttonSolve.attribute("disabled", "");
  console.log("Solving: ");
  for (let i = 0; i < newMoves.length; i++) {
    await sleep(speedOfMovement);
    doTurn(newMoves[i]);
  }
  buttonScramble.removeAttribute("disabled");

  buttonU.attribute("disabled", "");
  buttonF.attribute("disabled", "");
  buttonR.attribute("disabled", "");
  buttonL.attribute("disabled", "");
  buttonD.attribute("disabled", "");
  buttonB.attribute("disabled", "");
  buttonu.attribute("disabled", "");
  buttonf.attribute("disabled", "");
  buttonl.attribute("disabled", "");
  buttonr.attribute("disabled", "");
  buttond.attribute("disabled", "");
  buttonb.attribute("disabled", "");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function doTurn(turnName) {
  console.log("key played: ", turnName);
  if (!isAnimationActive) {
    angle = 0;
    switch (turnName) {
      case "F":
        clockwise = 1;
        position = 1;
        rotationAxis = "z";
        isAnimationActive = true;
        break;
      case "f":
        clockwise = -1;
        position = 1;
        rotationAxis = "z";
        isAnimationActive = true;
        break;
      case "B":
        clockwise = -1;
        position = -1;
        rotationAxis = "z";
        isAnimationActive = true;
        break;
      case "b":
        clockwise = 1;
        position = -1;
        rotationAxis = "z";
        isAnimationActive = true;
        break;
      case "R":
        clockwise = 1;
        position = 1;
        rotationAxis = "x";
        isAnimationActive = true;
        break;
      case "r":
        clockwise = -1;
        position = 1;
        rotationAxis = "x";
        isAnimationActive = true;
        break;
      case "L":
        clockwise = -1;
        position = -1;
        rotationAxis = "x";
        isAnimationActive = true;
        break;
      case "l":
        clockwise = 1;
        position = -1;
        rotationAxis = "x";
        isAnimationActive = true;
        break;
      case "U":
        clockwise = -1;
        position = -1;
        rotationAxis = "y";
        isAnimationActive = true;
        break;
      case "u":
        clockwise = 1;
        position = -1;
        rotationAxis = "y";
        isAnimationActive = true;
        break;
      case "D":
        clockwise = 1;
        position = 1;
        rotationAxis = "y";
        isAnimationActive = true;
        break;
      case "d":
        clockwise = -1;
        position = 1;
        rotationAxis = "y";
        isAnimationActive = true;
        break;
      default:
        break;
    }
  }
}

export function draw() {
  p.background("#161616");

  p.orbitControl();

  if (isAnimationActive) {
    angle = angle += 0.05;
    if (angle >= p.HALF_PI) {
      angle = p.HALF_PI;
      isAnimationActive = false;
      updateCubeColors();
    }
  }

  cubes.forEach((cube) => {
    if (isAnimationActive) {
      p.push();
      p.translate(0, 0, 0);
      if (cube.z == size * position && rotationAxis == "z") {
        p.rotateZ(angle * clockwise);
      } else if (cube.x == size * position && rotationAxis == "x") {
        p.rotateX(angle * clockwise);
      } else if (cube.y == size * position && rotationAxis == "y") {
        p.rotateY(angle * clockwise);
      }
      cube.draw();
      p.pop();
    } else {
      cube.draw();
    }
  });
}

function updateCubeColors() {
  cubes.forEach((cube) => {
    if (cube.z == size * position && rotationAxis == "z") {
      cube.updateFaceColor(rotationAxis, clockwise);
    } else if (cube.x == size * position && rotationAxis == "x") {
      cube.updateFaceColor(rotationAxis, clockwise);
    } else if (cube.y == size * position && rotationAxis == "y") {
      cube.updateFaceColor(rotationAxis, clockwise);
    }
  });

  let moveColors = [];
  cubeIndexes.forEach((item) => {
    if (item.rotationAxis == rotationAxis && item.position == position) {
      if (clockwise > 0) {
        item.clockwise.forEach((c) => {
          moveColors.push(cubes[c].colors);
        });
      } else {
        item.counterClockwise.forEach((c) => {
          moveColors.push(cubes[c].colors);
        });
      }
      item.cubes.forEach((c, idx) => {
        cubes[c].colors = moveColors[idx];
      });
    }
  });
}
