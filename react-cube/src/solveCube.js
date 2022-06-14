import { p } from "./Sketch";
import { MyCube } from "./mycube";
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
let listMoves = [];
let autoanimation = false;
let backwardMoves = false;
let newMoves;

let colors = [
  // [255, 0, 0],    // red
  // [255, 100, 0],  // orange
  // [0, 200, 0],    // green
  // [0, 0, 255],    // blue
  // [255, 255, 0],  // yellow
  // [255, 255, 255] // white

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

let animating = false;
let angle = 0;
let clockwise = 1;
let position;
let rotateType = null;
let index;

var buttonScramble;
var buttonScramble2;
var buttonSolve;
var buttonSolve2;
let sel;

function playU() {
  play("U");
}

function playD() {
  play("D");
}

function playR() {
  play("R");
}

function playL() {
  play("L");
}

function playF() {
  play("F");
}

function playB() {
  play("B");
}

function playu() {
  play("u");
}

function playd() {
  play("d");
}

function playr() {
  play("r");
}

function playl() {
  play("l");
}

function playf() {
  play("f");
}

function playb() {
  play("b");
}

export function setup() {
  p.pixelDensity(1);
  p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  p.setAttributes("antialias", true);
  index = 0;
  cubes = [];

  var buttonU = p.createButton("U");
  buttonU.mousePressed(playU);
  buttonU.position(775, 100);
  buttonU.size(35, 35);

  var buttonD = p.createButton("D");
  buttonD.mousePressed(playD);
  buttonD.position(875, 100);
  buttonD.size(35, 35);

  var buttonR = p.createButton("R");
  buttonR.mousePressed(playR);
  buttonR.position(975, 100);
  buttonR.size(35, 35);

  var buttonL = p.createButton("L");
  buttonL.mousePressed(playL);
  buttonL.position(1075, 100);
  buttonL.size(35, 35);

  var buttonF = p.createButton("F");
  buttonF.mousePressed(playF);
  buttonF.position(1175, 100);
  buttonF.size(35, 35);

  var buttonB = p.createButton("B");
  buttonB.mousePressed(playB);
  buttonB.position(1275, 100);
  buttonB.size(35, 35);

  var buttonu = p.createButton("U'");
  buttonu.mousePressed(playu);
  buttonu.position(775, 150);
  buttonu.size(35, 35);

  var buttond = p.createButton("D'");
  buttond.mousePressed(playd);
  buttond.position(875, 150);
  buttond.size(35, 35);

  var buttonr = p.createButton("R'");
  buttonr.mousePressed(playr);
  buttonr.position(975, 150);
  buttonr.size(35, 35);

  var buttonl = p.createButton("L'");
  buttonl.mousePressed(playl);
  buttonl.position(1075, 150);
  buttonl.size(35, 35);

  var buttonf = p.createButton("F'");
  buttonf.mousePressed(playf);
  buttonf.position(1175, 150);
  buttonf.size(35, 35);

  var buttonb = p.createButton("B'");
  buttonb.mousePressed(playb);
  buttonb.position(1275, 150);
  buttonb.size(35, 35);

  sel = p.createSelect();
  sel.position(1400,100);
  sel.option('Fridrich Method');
  sel.option('Two-phase algorithm');
  sel.size(285, 30);

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
        let cube = new MyCube(px, py, pz, size, colors, index);
        cubes.push(cube);
        index++;
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

function processMoves2(moves) {
  let movesProcessed1 = [];
  let movesProcessed = [];
  let it = "";
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] != " ") {
      it += moves[i];
    } else {
      movesProcessed1.push(it);
      it = "";
    }
  }
  movesProcessed1.push(it);
  for (let i = 0; i < movesProcessed1.length; i++) {
    switch (movesProcessed1[i]) {
      case "Uprime":
        movesProcessed.push("u");
        break;
      case "Fprime":
        movesProcessed.push("f");
        break;
      case "Rprime":
        movesProcessed.push("r");
        break;
      case "Lprime":
        movesProcessed.push("l");
        break;
      case "Dprime":
        movesProcessed.push("d");
        break;
      case "Bprime":
        movesProcessed.push("b");
        break;
      case "uprime":
        movesProcessed.push("u");
        break;
      case "fprime":
        movesProcessed.push("f");
        break;
      case "rprime":
        movesProcessed.push("r");
        break;
      case "lprime":
        movesProcessed.push("l");
        break;
      case "dprime":
        movesProcessed.push("d");
        break;
      case "bprime":
        movesProcessed.push("b");
        break;
      case "U2":
        movesProcessed.push("U");
        movesProcessed.push("U");
        break;
      case "F2":
        movesProcessed.push("F");
        movesProcessed.push("F");
        break;
      case "R2":
        movesProcessed.push("R");
        movesProcessed.push("R");
        break;
      case "L2":
        movesProcessed.push("L");
        movesProcessed.push("L");
        break;
      case "D2":
        movesProcessed.push("D");
        movesProcessed.push("D");
        break;
      case "B2":
        movesProcessed.push("B");
        movesProcessed.push("B");
        break;
      default:
        movesProcessed.push(movesProcessed1[i]);
    }
  }
  return movesProcessed;
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

let solveMoves = "";
let movesToDo;
let movesToDo2;
let processedMovesToDo;
let processedMovesToDo2;
let counter;
let mvvv;
let selectAlgorithmValue;

function scrambleCube(){
  selectAlgorithmValue = sel.value();
  if(selectAlgorithmValue == "Two-phase algorithm"){
    scrambleCube1();
  }
  else{
    scrambleCube2();
  }
}

function solveCube(){
  if(selectAlgorithmValue == "Two-phase algorithm"){
    solveCube1();
  }
  else{
    solveCube2();
  }
}

function scrambleCube1() {
  if (wholeCubeInLetters == "") {
    alert("The scanned cube was not saved!");
  } else {
    buttonSolve.attribute("disabled", "");

    const cube = new Cube(Cube.fromString(wholeCubeInLetters));

    buttonSolve.attribute("disabled", "");

    Cube.initSolver();

    newMoves = cube.solve();

    let newReformattedMoves = processMoves(newMoves);

    cube.move(newReformattedMoves);

    let movesToDo = "";
    movesToDo = Cube.inverse(newReformattedMoves);

    let mv = processBackMoves(movesToDo);
    processedMovesToDo = mv.processedMoves;
    counter = mv.counter;

    doScrambling1();
  }
}

function scrambleCube2() {
  if (frontFace == "" || rightFace == "" || upFace == "" || downFace == "" || leftFace == "" || posteriorFace == "") {
    alert("The scanned cube was not saved!");
  } 
  else {
    let cubeState = [
      frontFace, // front
      rightFace, // right
      upFace, // up
      downFace, // down
      leftFace, // left
      posteriorFace // back
    ].join('');

    let solveMoves = solver(cubeState);
    console.log(solveMoves);
    let options = { partitioned: false };
    mvvv = processMoves2(solveMoves);

    let newReformattedMoves = processMoves(mvvv);
    movesToDo2 = Cube.inverse(newReformattedMoves);

    let mv = processBackMoves(movesToDo2);
    processedMovesToDo2 = mv.processedMoves;
    counter = mv.counter;
    
    doScrambling2();
  }
}

async function doScrambling1() {
  console.log("Scrambling: ");
  buttonScramble.attribute("disabled", "");
  for (let i = 0; i < processedMovesToDo.length; i++) {
    angle = angle += 1.5;
    await sleep(100);
    play(processedMovesToDo[i]);
  }
  buttonSolve.removeAttribute("disabled");
}

async function doScrambling2() {
  console.log("Scrambling: ");
  buttonScramble.attribute("disabled", "");
  for (let i = 0; i < processedMovesToDo2.length; i++) {
    angle = angle += 1.5;
    await sleep(100);
    play(processedMovesToDo2[i]);
  }
  buttonSolve.removeAttribute("disabled");
}

async function solveCube1() {
  buttonSolve.attribute("disabled", "");
  console.log("Solving: ");
  for (let i = 0; i < newMoves.length; i++) {
    await sleep(2000);
    play(newMoves[i]);
  }
  buttonScramble.removeAttribute("disabled");
}

async function solveCube2() {
  buttonSolve.attribute("disabled", "");
  console.log("Solving: ");
  for (let i = 0; i < mvvv.length; i++) {
    await sleep(2000);
    play(mvvv[i]);
  }
  buttonScramble.removeAttribute("disabled");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function keyPressed(key) {
  if (!autoanimation) {
    play(key);
  }
}

let c = 0;

function play(key) {
  console.log(c, ": ", key);
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
