import { p } from "./Sketch";
import { cubie3D } from "./cubie3D";
import Cube from "./libraries/cube";

const size = 100;
const cubeDim = 3;
let cubies3D = [];
const moves = ["f", "F", "b", "B", "r", "R", "l", "L", "u", "U", "d", "D"];

let isAnimationActive = false;
let angle = 0;
let clockwise = 1;
let position;
let rotateType = null;
let index;

let shuffleMoves = [];

const cube = new Cube(Cube.fromString("UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB"));

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

let movesSlider;

var shuffleButton;

let colors = [

  [0, 255, 0], // green - front
  [0, 0, 255], // blue - back
  [255, 0, 0], // red - right
  [255, 100, 0], // orange - left
  [255, 255, 255], // white - up
  [255, 255, 0], // yellow - down
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

function turnU() {
  doTurn("U");
  cube.move('U');
  checkForSolvedCube();
}

function turnD() {
  doTurn("D");
  cube.move('D');
  checkForSolvedCube();
}

function turnR() {
  doTurn("R");
  cube.move('R');
  checkForSolvedCube();
}

function turnL() {
  doTurn("L");
  cube.move('L');
  checkForSolvedCube();
}

function turnF() {
  doTurn("F");
  cube.move('F');
  checkForSolvedCube();
}

function turnB() {
  doTurn("B");
  cube.move('B');
  checkForSolvedCube();
}

function turnu() {
  doTurn("u");
  cube.move("U'");
  checkForSolvedCube();
}

function turnd() {
  doTurn("d");
  cube.move("D'");
  checkForSolvedCube();
}

function turnr() {
  doTurn("r");
  cube.move("R'");
  checkForSolvedCube();
}

function turnl() {
  doTurn("l");
  cube.move("L'");
  checkForSolvedCube();
}

function turnf() {
  doTurn("f");
  cube.move("F'");
  checkForSolvedCube();
}

function turnb() {
  doTurn("b");
  cube.move("B'");
  checkForSolvedCube();
}

async function checkForSolvedCube(){
  if(isCubeSolved()){
    await sleep(1000);
    alert("Congratulations, you solved the cube!!");
    buttonU.attribute("disabled", "");
    buttonR.attribute("disabled", "");
    buttonF.attribute("disabled", "");
    buttonL.attribute("disabled", "");
    buttonD.attribute("disabled", "");
    buttonB.attribute("disabled", "");

    buttonu.attribute("disabled", "");
    buttonr.attribute("disabled", "");
    buttonl.attribute("disabled", "");
    buttonf.attribute("disabled", "");
    buttond.attribute("disabled", "");
    buttonb.attribute("disabled", "");
  }
}

function isCubeSolved(){
  if(cube.isSolved()){
    return true;
  }
  return false;
}

export function setup() {
  p.pixelDensity(1);
  p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  p.setAttributes("antialias", true);
  index = 0;
  cubies3D = [];

  shuffleButton = p.createButton("SHUFFLE");
  shuffleButton.mousePressed(randomShuffle);
  shuffleButton.position(1470, 840);
  shuffleButton.size(100, 35);

  buttonU = p.createButton("U");
  buttonU.mousePressed(turnU);
  buttonU.position(1025, 125);
  buttonU.size(35, 35);
  

  buttonD = p.createButton("D");
  buttonD.mousePressed(turnD);
  buttonD.position(1125, 125);
  buttonD.size(35, 35);

  buttonR = p.createButton("R");
  buttonR.mousePressed(turnR);
  buttonR.position(1225, 125);
  buttonR.size(35, 35);

  buttonL = p.createButton("L");
  buttonL.mousePressed(turnL);
  buttonL.position(1325, 125);
  buttonL.size(35, 35);

  buttonF = p.createButton("F");
  buttonF.mousePressed(turnF);
  buttonF.position(1425, 125);
  buttonF.size(35, 35);

  buttonB = p.createButton("B");
  buttonB.mousePressed(turnB);
  buttonB.position(1525, 125);
  buttonB.size(35, 35);

  buttonu = p.createButton("U'");
  buttonu.mousePressed(turnu);
  buttonu.position(1025, 200);
  buttonu.size(35, 35);

  buttond = p.createButton("D'");
  buttond.mousePressed(turnd);
  buttond.position(1125, 200);
  buttond.size(35, 35);

  buttonr = p.createButton("R'");
  buttonr.mousePressed(turnr);
  buttonr.position(1225, 200);
  buttonr.size(35, 35);

  buttonl = p.createButton("L'");
  buttonl.mousePressed(turnl);
  buttonl.position(1325, 200);
  buttonl.size(35, 35);

  buttonf = p.createButton("F'");
  buttonf.mousePressed(turnf);
  buttonf.position(1425, 200);
  buttonf.size(35, 35);

  buttonb = p.createButton("B'");
  buttonb.mousePressed(turnb);
  buttonb.position(1525, 200);
  buttonb.size(35, 35);

  movesSlider = p.createSlider(3, 25, 15);
  movesSlider.position(1050, 850);
  movesSlider.style('width', '400px');


  for (let i = 0; i < cubeDim; i++) {
    for (let j = 0; j < cubeDim; j++) {
      for (let k = 0; k < cubeDim; k++) {
        let cubieX = i * size - size;
        let cubieY = j * size - size;
        let cubieZ = k * size - size;
        let cubie = new cubie3D(cubieX, cubieY, cubieZ, size, colors, index);
        cubies3D.push(cubie);
        index++;
      }
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

function processMoves(moves) {
  let processedMoves = [];
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
        processedMoves.push("L'");
      }
      if (moves[i] == "r") {
        processedMoves.push("R'");
      }
      if (moves[i] == "f") {
        processedMoves.push("F'");
      }
      if (moves[i] == "d") {
        processedMoves.push("D'");
      }
      if (moves[i] == "u") {
        processedMoves.push("U'");
      }
      if (moves[i] == "b") {
        processedMoves.push("B'");
      }
    } else {
      processedMoves.push(moves[i]);
    }
  }
  return processedMoves;
}

async function randomShuffle(){
  shuffleMoves = [];
  let val = movesSlider.value();
  console.log(val);
  for(let i = 0; i < val; i++){
    shuffleMoves.push(moves[getRandomInt(0, 11)]);
  }
  let shuffleMovesProcessed = processMoves(shuffleMoves);
  for(let j = 0; j < shuffleMoves.length; j++){
    cube.move(shuffleMovesProcessed[j]);
    angle = angle += 1.5;
    await sleep(100);
    doTurn(shuffleMoves[j]);
  }

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

let c = 0;

function doTurn(turnName) {
  console.log(turnName);
  c += 1;
  if (!isAnimationActive) {
    angle = 0;
    switch (turnName) {
      case "F":
        clockwise = 1;
        position = 1;
        rotateType = "z";
        isAnimationActive = true;
        break;
      case "f":
        clockwise = -1;
        position = 1;
        rotateType = "z";
        isAnimationActive = true;
        break;
      case "B":
        clockwise = -1;
        position = -1;
        rotateType = "z";
        isAnimationActive = true;
        break;
      case "b":
        clockwise = 1;
        position = -1;
        rotateType = "z";
        isAnimationActive = true;
        break;
      case "R":
        clockwise = 1;
        position = 1;
        rotateType = "x";
        isAnimationActive = true;
        break;
      case "r":
        clockwise = -1;
        position = 1;
        rotateType = "x";
        isAnimationActive = true;
        break;
      case "L":
        clockwise = -1;
        position = -1;
        rotateType = "x";
        isAnimationActive = true;
        break;
      case "l":
        clockwise = 1;
        position = -1;
        rotateType = "x";
        isAnimationActive = true;
        break;
      case "U":
        clockwise = -1;
        position = -1;
        rotateType = "y";
        isAnimationActive = true;
        break;
      case "u":
        clockwise = 1;
        position = -1;
        rotateType = "y";
        isAnimationActive = true;
        break;
      case "D":
        clockwise = 1;
        position = 1;
        rotateType = "y";
        isAnimationActive = true;
        break;
      case "d":
        clockwise = -1;
        position = 1;
        rotateType = "y";
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

  cubies3D.forEach((cube) => {
    if (isAnimationActive) {
      p.push();
      p.translate(0, 0, 0);
      if (cube.z == size * position && rotateType == "z") {
        p.rotateZ(angle * clockwise);
      } else if (cube.x == size * position && rotateType == "x") {
        p.rotateX(angle * clockwise);
      } else if (cube.y == size * position && rotateType == "y") {
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
  cubies3D.forEach((cube) => {
    if (cube.z == size * position && rotateType == "z") {
      cube.updateFaceColor(rotateType, clockwise);
    } else if (cube.x == size * position && rotateType == "x") {
      cube.updateFaceColor(rotateType, clockwise);
    } else if (cube.y == size * position && rotateType == "y") {
      cube.updateFaceColor(rotateType, clockwise);
    }
  });

  let colorsMoved = [];
  cubeIndexes.forEach((indexIterator) => {
    if (indexIterator.rotationAxis == rotateType && indexIterator.position == position) {
      if (clockwise > 0) {
        indexIterator.clockwise.forEach((c) => {
          colorsMoved.push(cubies3D[c].colors);
        });
      } else {
        indexIterator.counterClockwise.forEach((c) => {
          colorsMoved.push(cubies3D[c].colors);
        });
      }
      indexIterator.cubes.forEach((c, idx) => {
        cubies3D[c].colors = colorsMoved[idx];
      });
    }
  });
}
