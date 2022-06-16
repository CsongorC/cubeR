import { p } from "./Sketch";
import { MyCube } from "./mycube";
import Cube from "./libraries/cube";

const size = 100;
const dim = 3;
let cubes = [];
const moves = ["f", "F", "b", "B", "r", "R", "l", "L", "u", "U", "d", "D"];
let listMoves = [];
let autoanimation = false;
let backwardMoves = false;

let animating = false;
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

var shuffleButton;

let colors = [

  [0, 255, 0], // green
  [0, 0, 255], // blue
  [255, 0, 0], // red
  [255, 100, 0], // orange
  [255, 255, 255], // white
  [255, 255, 0], // yellow
];

let indexes = [
  {
    name: "FRONT",
    rotateType: "z",
    position: 1,
    cubes: [2, 11, 20, 5, 14, 23, 8, 17, 26],
    clockwise: [8, 5, 2, 17, 14, 11, 26, 23, 20],
    anticlockwise: [20, 23, 26, 11, 14, 17, 2, 5, 8],
  },
  {
    name: "BACK",
    rotateType: "z",
    position: -1,
    cubes: [18, 9, 0, 21, 12, 3, 24, 15, 6],
    clockwise: [0, 3, 6, 9, 12, 15, 18, 21, 24],
    anticlockwise: [24, 21, 18, 15, 12, 9, 6, 3, 0],
  },
  {
    name: "RIGHT",
    rotateType: "x",
    position: 1,
    cubes: [20, 19, 18, 23, 22, 21, 26, 25, 24],
    clockwise: [26, 23, 20, 25, 22, 19, 24, 21, 18],
    anticlockwise: [18, 21, 24, 19, 22, 25, 20, 23, 26],
  },
  {
    name: "LEFT",
    rotateType: "x",
    position: -1,
    cubes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    clockwise: [2, 5, 8, 1, 4, 7, 0, 3, 6],
    anticlockwise: [6, 3, 0, 7, 4, 1, 8, 5, 2],
  },
  {
    name: "TOP",
    rotateType: "y",
    position: -1,
    cubes: [0, 9, 18, 1, 10, 19, 2, 11, 20],
    clockwise: [18, 19, 20, 9, 10, 11, 0, 1, 2],
    anticlockwise: [2, 1, 0, 11, 10, 9, 20, 19, 18],
  },
  {
    name: "BOTTOM",
    rotateType: "y",
    position: 1,
    cubes: [8, 17, 26, 7, 16, 25, 6, 15, 24],
    clockwise: [6, 7, 8, 15, 16, 17, 24, 25, 26],
    anticlockwise: [26, 25, 24, 17, 16, 15, 8, 7, 6],
  },
];

function playU() {
  play("U");
  cube.move('U');
  checkForSolvedCube();
}

function playD() {
  play("D");
  cube.move('D');
  checkForSolvedCube();
}

function playR() {
  play("R");
  cube.move('R');
  checkForSolvedCube();
}

function playL() {
  play("L");
  cube.move('L');
  checkForSolvedCube();
}

function playF() {
  play("F");
  cube.move('F');
  checkForSolvedCube();
}

function playB() {
  play("B");
  cube.move('B');
  checkForSolvedCube();
}

function playu() {
  play("u");
  cube.move("U'");
  checkForSolvedCube();
}

function playd() {
  play("d");
  cube.move("D'");
  checkForSolvedCube();
}

function playr() {
  play("r");
  cube.move("R'");
  checkForSolvedCube();
}

function playl() {
  play("l");
  cube.move("L'");
  checkForSolvedCube();
}

function playf() {
  play("f");
  cube.move("F'");
  checkForSolvedCube();
}

function playb() {
  play("b");
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
  cubes = [];

  randomShuffle();

  shuffleButton = p.createButton("SHUFFLE");
  shuffleButton.mousePressed(randomShuffle);
  shuffleButton.position(1230, 855);
  shuffleButton.size(100, 35);

  buttonU = p.createButton("U");
  buttonU.mousePressed(playU);
  buttonU.position(1025, 125);
  buttonU.size(35, 35);
  

  buttonD = p.createButton("D");
  buttonD.mousePressed(playD);
  buttonD.position(1125, 125);
  buttonD.size(35, 35);

  buttonR = p.createButton("R");
  buttonR.mousePressed(playR);
  buttonR.position(1225, 125);
  buttonR.size(35, 35);

  buttonL = p.createButton("L");
  buttonL.mousePressed(playL);
  buttonL.position(1325, 125);
  buttonL.size(35, 35);

  buttonF = p.createButton("F");
  buttonF.mousePressed(playF);
  buttonF.position(1425, 125);
  buttonF.size(35, 35);

  buttonB = p.createButton("B");
  buttonB.mousePressed(playB);
  buttonB.position(1525, 125);
  buttonB.size(35, 35);

  buttonu = p.createButton("U'");
  buttonu.mousePressed(playu);
  buttonu.position(1025, 200);
  buttonu.size(35, 35);

  buttond = p.createButton("D'");
  buttond.mousePressed(playd);
  buttond.position(1125, 200);
  buttond.size(35, 35);

  buttonr = p.createButton("R'");
  buttonr.mousePressed(playr);
  buttonr.position(1225, 200);
  buttonr.size(35, 35);

  buttonl = p.createButton("L'");
  buttonl.mousePressed(playl);
  buttonl.position(1325, 200);
  buttonl.size(35, 35);

  buttonf = p.createButton("F'");
  buttonf.mousePressed(playf);
  buttonf.position(1425, 200);
  buttonf.size(35, 35);

  buttonb = p.createButton("B'");
  buttonb.mousePressed(playb);
  buttonb.position(1525, 200);
  buttonb.size(35, 35);


  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        let px = i * size - size;
        let py = j * size - size;
        let pz = k * size - size;
        let cube = new MyCube(px, py, pz, size, colors, index);
        cubes.push(cube);
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
  for(let i = 0; i < 4; i++){
    shuffleMoves.push(moves[getRandomInt(0, 11)]);
  }
  let shuffleMovesProcessed = processMoves(shuffleMoves);
  for(let j = 0; j < shuffleMoves.length; j++){
    cube.move(shuffleMovesProcessed[j]);
    angle = angle += 1.5;
    await sleep(100);
    play(shuffleMoves[j]);
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

function play(key) {
  console.log(key);
  c += 1;
  if (!animating) {
    angle = 0;
    switch (key) {
      case "F":
        clockwise = 1;
        position = 1;
        rotateType = "z";
        animating = true;
        break;
      case "f":
        clockwise = -1;
        position = 1;
        rotateType = "z";
        animating = true;
        break;
      case "B":
        clockwise = -1;
        position = -1;
        rotateType = "z";
        animating = true;
        break;
      case "b":
        clockwise = 1;
        position = -1;
        rotateType = "z";
        animating = true;
        break;
      case "R":
        clockwise = 1;
        position = 1;
        rotateType = "x";
        animating = true;
        break;
      case "r":
        clockwise = -1;
        position = 1;
        rotateType = "x";
        animating = true;
        break;
      case "L":
        clockwise = -1;
        position = -1;
        rotateType = "x";
        animating = true;
        break;
      case "l":
        clockwise = 1;
        position = -1;
        rotateType = "x";
        animating = true;
        break;
      case "U":
        clockwise = -1;
        position = -1;
        rotateType = "y";
        animating = true;
        break;
      case "u":
        clockwise = 1;
        position = -1;
        rotateType = "y";
        animating = true;
        break;
      case "D":
        clockwise = 1;
        position = 1;
        rotateType = "y";
        animating = true;
        break;
      case "d":
        clockwise = -1;
        position = 1;
        rotateType = "y";
        animating = true;
        break;
      default:
        break;
    }
  }
}

function flipMove(mKey) {
  console.log(mKey);
  if (mKey.toLowerCase() == mKey) {
    return mKey.toUpperCase();
  }
  return mKey.toLowerCase();
}

export function draw() {
  p.background("#161616");

  p.orbitControl();


  if (animating) {
    if (autoanimation) {
      angle = angle += 0.2;
    } else {
      angle = angle += 0.05;
    }
    if (angle >= p.HALF_PI) {
      angle = p.HALF_PI;
      animating = false;
      updateCubeColors();
    }
  } else {
    if (autoanimation) {
      if (listMoves.length < 30 && !backwardMoves) {
        let mKey = moves[Math.floor(Math.random() * moves.length)];
        console.log(mKey);
        play(mKey);
        listMoves.push(mKey);
      } else {
        backwardMoves = true;
        if (listMoves.length > 0) {
          play(flipMove(listMoves.pop()));
        } else {
          backwardMoves = false;
          autoanimation = false;
        }
      }
    }
  }

  cubes.forEach((cube) => {
    if (animating) {
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
  cubes.forEach((cube) => {
    if (cube.z == size * position && rotateType == "z") {
      cube.updateColor(rotateType, clockwise);
    } else if (cube.x == size * position && rotateType == "x") {
      cube.updateColor(rotateType, clockwise);
    } else if (cube.y == size * position && rotateType == "y") {
      cube.updateColor(rotateType, clockwise);
    }
  });

  let moveColors = [];
  indexes.forEach((item) => {
    if (item.rotateType == rotateType && item.position == position) {
      if (clockwise > 0) {
        item.clockwise.forEach((c) => {
          moveColors.push(cubes[c].colors);
        });
      } else {
        item.anticlockwise.forEach((c) => {
          moveColors.push(cubes[c].colors);
        });
      }
      item.cubes.forEach((c, idx) => {
        cubes[c].colors = moveColors[idx];
      });
    }
  });
}
