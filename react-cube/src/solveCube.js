import { p } from './Sketch'
import { MyCube } from './mycube'
import Cube  from './libraries/cube'
import Solver  from './libraries/solve'


const size = 75;
const dim = 3;
let cubes = [];
const moves = ['f', 'F', 'b', 'B', 'r', 'R', 'l', 'L', 'u', 'U', 'd', 'D'];
let listMoves = [];
let autoanimation = false;
let backwardMoves = false;
let newMoves;

let colors = [
  [255, 0, 0],    // red
  [255, 100, 0],  // orange
  [0, 200, 0],    // green
  [0, 0, 255],    // blue
  [255, 255, 0],  // yellow
  [255, 255, 255] // white
];

let indexes = [
  {
    name: "FRONT",
    rotateType: "z",
    position: 1,
    cubes: [2, 11, 20, 5, 14, 23, 8, 17, 26],
    clockwise: [8, 5, 2, 17, 14, 11, 26, 23, 20],
    anticlockwise: [20, 23, 26, 11, 14, 17, 2, 5, 8]
  },
  {
    name: "BACK",
    rotateType: "z",
    position: -1,
    cubes: [18, 9, 0, 21, 12, 3, 24, 15, 6],
    clockwise: [0, 3, 6, 9, 12, 15, 18, 21, 24],
    anticlockwise: [24, 21, 18, 15, 12, 9, 6, 3, 0]
  },
  {
    name: "RIGHT",
    rotateType: "x",
    position: 1,
    cubes: [20, 19, 18, 23, 22, 21, 26, 25, 24],
    clockwise: [26, 23, 20, 25, 22, 19, 24, 21, 18],
    anticlockwise: [18, 21, 24, 19, 22, 25, 20, 23, 26]
  },
  {
    name: "LEFT",
    rotateType: "x",
    position: -1,
    cubes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    clockwise: [2, 5, 8, 1, 4, 7, 0, 3, 6],
    anticlockwise: [6, 3, 0, 7, 4, 1, 8, 5, 2]
  },
  {
    name: "TOP",
    rotateType: "y",
    position: -1,
    cubes: [0, 9, 18, 1, 10, 19, 2, 11, 20],
    clockwise: [18, 19, 20, 9, 10, 11, 0, 1, 2],
    anticlockwise: [2, 1, 0, 11, 10, 9, 20, 19, 18]
  },
  {
    name: "BOTTOM",
    rotateType: "y",
    position: 1,
    cubes: [8, 17, 26, 7, 16, 25, 6, 15, 24],
    clockwise: [6, 7, 8, 15, 16, 17, 24, 25, 26],
    anticlockwise: [26, 25, 24, 17, 16, 15, 8, 7, 6]
  }
];

let animating = false;
let angle = 0;
let clockwise = 1;
let position;
let rotateType = null;
let index;
let counter;
let processedMovesToDo;

var buttonScramble;
var buttonSolve;

export function setup() {
  p.pixelDensity(1);
  p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  p.setAttributes("antialias", true);
  index = 0;
  cubes = [];

  buttonScramble = p.createButton('SCRAMBLE');
  buttonScramble.mousePressed(scrambleCube);
  buttonScramble.position(780, 600);

  buttonSolve = p.createButton('SOLVE');
  buttonSolve.mousePressed(solveCube);
  buttonSolve.position(720, 600);
  buttonSolve.attribute('disabled', '');

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

function processMoves(moves){
  let processedMoves = ""
  for (let i = 0; i < moves.length; i++) {
    if(moves[i] == "l" || moves[i] == "r" || moves[i] == "f" || moves[i] == "d" || moves[i] == "u" || moves[i] == "b"){
      if(moves[i] == "l"){
        processedMoves = processedMoves + "L' ";
      }
      if(moves[i] == "r"){
        processedMoves = processedMoves + "R' ";
      }
      if(moves[i] == "f"){
        processedMoves = processedMoves + "F' ";
      }
      if(moves[i] == "d"){
        processedMoves = processedMoves + "D' ";
      }
      if(moves[i] == "u"){
        processedMoves = processedMoves + "U' ";
      }
      if(moves[i] == "b"){
        processedMoves = processedMoves + "B' ";
      }
    }
    else{
      processedMoves = processedMoves + moves[i] + " ";
    }
  }
  return processedMoves;
}

function processBackMoves(moves){
  let processedMoves = "", counter = 0;
  for (let i = 0; i < moves.length; i++) {
    if(moves[i] == "L" && moves[i+1] == "'" || moves[i] == "R" && moves[i+1] == "'" || moves[i] == "F" && moves[i+1] == "'" || moves[i] == "D" && moves[i+1] == "'" || moves[i] == "U" && moves[i+1] == "'" || moves[i] == "B" && moves[i+1] == "'"){
      if(moves[i] == "L"){
        processedMoves = processedMoves + "l ";
        counter = counter + 1;
      }
      if(moves[i] == "R"){
        processedMoves = processedMoves + "r ";
        counter = counter + 1;
      }
      if(moves[i] == "F"){
        processedMoves = processedMoves + "f ";
        counter = counter + 1;
      }
      if(moves[i] == "D"){
        processedMoves = processedMoves + "d ";
        counter = counter + 1;
      }
      if(moves[i] == "U"){
        processedMoves = processedMoves + "u ";
        counter = counter + 1;
      }
      if(moves[i] == "B"){
        processedMoves = processedMoves + "b ";
        counter = counter + 1;
      }
    }
    else if(moves[i] == "L" || moves[i] == "R" || moves[i] == "F" || moves[i] == "D" || moves[i] == "U" || moves[i] == "B"){
      processedMoves = processedMoves + moves[i] + " ";
      counter = counter + 1;
    }
  }
  return {processedMoves, counter};
}


function scrambleCube(){
  buttonSolve.attribute('disabled', '');
  let cube = new Cube();

  cube.randomize();

  Cube.initSolver();

  newMoves = cube.solve();

  let newReformattedMoves = processMoves(newMoves);

  cube.move(newReformattedMoves);

  let movesToDo = "";
  movesToDo = Cube.inverse(newReformattedMoves);

  let mv = processBackMoves(movesToDo);
  processedMovesToDo = mv.processedMoves;
  counter = mv.counter;

  doScrambling();
}

async function doScrambling(){
  buttonScramble.attribute('disabled', '');
  console.log("Scrambling: ", processedMovesToDo)
  console.log("Length: ", processedMovesToDo.length / 2)
  for(let i = 0; i < counter*2; i = i + 2){
    angle = angle += 1.5;
    console.log("Move ", processedMovesToDo[i])
    await sleep(100);
    play(processedMovesToDo[i])
  }
  buttonSolve.removeAttribute('disabled');
}

async function solveCube(){
  buttonSolve.attribute('disabled', '');
  console.log("Solving: ", newMoves)
  for(let i = 0; i < counter; i++){
    console.log(i);
    await sleep(1000);
    play(newMoves[i])
  }
  buttonScramble.removeAttribute('disabled');
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function keyPressed(key) {
  if (!autoanimation) {
    play(key);
  }
}

function play(key) {
  if (!animating) {
    angle = 0;
    switch (key) {
      case "f":
        clockwise = 1;
        position = 1;
        rotateType = "z";
        animating = true;
        break;
      case "F":
        clockwise = -1;
        position = 1;
        rotateType = "z";
        animating = true;
        break;
      case "b":
        clockwise = -1;
        position = -1;
        rotateType = "z";
        animating = true;
        break;
      case "B":
        clockwise = 1;
        position = -1;
        rotateType = "z";
        animating = true;
        break;
      case "r":
        clockwise = 1;
        position = 1;
        rotateType = "x";
        animating = true;
        break;
      case "R":
        clockwise = -1;
        position = 1;
        rotateType = "x";
        animating = true;
        break;
      case "l":
        clockwise = -1;
        position = -1;
        rotateType = "x";
        animating = true;
        break;
      case "L":
        clockwise = 1;
        position = -1;
        rotateType = "x";
        animating = true;
        break;
      case "u":
        clockwise = -1;
        position = -1;
        rotateType = "y";
        animating = true;
        break;
      case "U":
        clockwise = 1;
        position = -1;
        rotateType = "y";
        animating = true;
        break;
      case "d":
        clockwise = 1;
        position = 1;
        rotateType = "y";
        animating = true;
        break;
      case "D":
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
  console.log(mKey)
  if (mKey.toLowerCase() == mKey) {
    return mKey.toUpperCase()
  }
  return mKey.toLowerCase()
}

export function draw() {
  p.background("#081b2a");

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
        backwardMoves = true
        if (listMoves.length > 0) {
          play(flipMove(listMoves.pop()))
        } else {
          backwardMoves = false;
          autoanimation = false;
        }
      }
    }
  }

  cubes.forEach(cube => {
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
  cubes.forEach(cube => {
    if (cube.z == size * position && rotateType == "z") {
      cube.updateColor(rotateType, clockwise);
    } else if (cube.x == size * position && rotateType == "x") {
      cube.updateColor(rotateType, clockwise);
    } else if (cube.y == size * position && rotateType == "y") {
      cube.updateColor(rotateType, clockwise);
    }
  });

  let moveColors = [];
  indexes.forEach(item => {
    if (item.rotateType == rotateType && item.position == position) {
      if (clockwise > 0) {
        item.clockwise.forEach(c => {
          moveColors.push(cubes[c].colors);
        });
      } else {
        item.anticlockwise.forEach(c => {
          moveColors.push(cubes[c].colors);
        });
      }
      item.cubes.forEach((c, idx) => {
        cubes[c].colors = moveColors[idx];
      });
    }
  });
}