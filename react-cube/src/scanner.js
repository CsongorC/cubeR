import { p } from "./Sketch";
import cubie from "./cubie";
import cubeColors from "./cubeColors";
import colorChooser from "./colorChooser";

let video;

let hueAngle = 0;
let hues = [];
let colorName = "Unknown";
let chosenColor = "#081b2a";
let highlighterX = 1950;
let highlighterY = 250;

let highlighterPositions = [
  [1950, 250],
  [1875, 325],
  [1950, 325],
  [2025, 325],
  [1950, 400],
  [1950, 475],
];

let faceOrder = "Top face";

let cubies = [];
let colorChoosers = [];

let first;

let cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9;
let rgb;

let topColors;
let bottomColors;
let leftColors;
let rightColors;
let frontColors;
let posteriorColors;

let upFace = "";
let frontFace = "";
let leftFace = "";
let rightFace = "";
let posteriorFace = "";
let downFace = "";

let wholeCubeInLetters = "";

let buttonSaveFace;
let buttonClear;

let currentFace = 0;

export var isVisible = true;

let cubieColors = new cubeColors();

export { wholeCubeInLetters };
export { upFace, frontFace, leftFace, rightFace, posteriorFace, downFace };

export function setUpFace(faceString) {
  upFace = faceString;
}

export function setLeftFace(faceString) {
  leftFace = faceString;
}

export function setFrontFace(faceString) {
  frontFace = faceString;
}

export function setRightFace(faceString) {
  rightFace = faceString;
}

export function setPosteriorFace(faceString) {
  posteriorFace = faceString;
}

export function setDownFace(faceString) {
  downFace = faceString;
}

window.onresize = function () {
  // assigns new values for width and height variables
  let w = p.innerWidth;
  let h = p.innerHeight;
  console.log(w, h);
};

export function setup() {
  p.createCanvas(p.windowWidth, p.windowHeight);

  // webcam capture
  video = p.createCapture(p.VIDEO);
  video.size(560, 480);
  video.hide();

  buttonSaveFace = p.createButton("SAVE");
  buttonSaveFace.mousePressed(saveColors);
  buttonSaveFace.position(1280, 670);

  buttonClear = p.createButton("CLEAR");
  buttonClear.mousePressed(clearCube);
  buttonClear.position(1965, 670);

  buttonClear = p.createButton("CLEAR LAST");
  buttonClear.mousePressed(clearLastFace);
  buttonClear.position(1948, 270);

  topColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  bottomColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 0],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  rightColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 0, 0],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  leftColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 140, 0],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  frontColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [0, 255, 0],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  posteriorColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [0, 0, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];
}

function clearLastFace() {
  switch (currentFace) {
    case 0:
      console.log("clearLastFace() called at case: 0");
      highlighterX = 1950;
      highlighterY = 400;
      cubieColors.decreaseCorner(
        bottomColors[0][0],
        bottomColors[0][1],
        bottomColors[0][2]
      );
      cubieColors.decreaseEdge(
        bottomColors[3][0],
        bottomColors[3][1],
        bottomColors[3][2]
      );
      cubieColors.decreaseCorner(
        bottomColors[6][0],
        bottomColors[6][1],
        bottomColors[6][2]
      );
      cubieColors.decreaseEdge(
        bottomColors[1][0],
        bottomColors[1][1],
        bottomColors[1][2]
      );
      cubieColors.decreaseCenter(
        bottomColors[4][0],
        bottomColors[4][1],
        bottomColors[4][2]
      );
      cubieColors.decreaseEdge(
        bottomColors[7][0],
        bottomColors[7][1],
        bottomColors[7][2]
      );
      cubieColors.decreaseCorner(
        bottomColors[2][0],
        bottomColors[2][1],
        bottomColors[2][2]
      );
      cubieColors.decreaseEdge(
        bottomColors[5][0],
        bottomColors[5][1],
        bottomColors[5][2]
      );
      cubieColors.decreaseCorner(
        bottomColors[8][0],
        bottomColors[8][1],
        bottomColors[8][2]
      );
      bottomColors = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 0],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
      ];
      currentFace = 5;
      break;
    case 1:
      console.log("clearLastFace() called at case: 1");
      highlighterX = 1950;
      highlighterY = 250;
      cubieColors.decreaseCorner(
        topColors[0][0],
        topColors[0][1],
        topColors[0][2]
      );
      cubieColors.decreaseEdge(
        topColors[3][0],
        topColors[3][1],
        topColors[3][2]
      );
      cubieColors.decreaseCorner(
        topColors[6][0],
        topColors[6][1],
        topColors[6][2]
      );
      cubieColors.decreaseEdge(
        topColors[1][0],
        topColors[1][1],
        topColors[1][2]
      );
      cubieColors.decreaseCenter(
        topColors[4][0],
        topColors[4][1],
        topColors[4][2]
      );
      cubieColors.decreaseEdge(
        topColors[7][0],
        topColors[7][1],
        topColors[7][2]
      );
      cubieColors.decreaseCorner(
        topColors[2][0],
        topColors[2][1],
        topColors[2][2]
      );
      cubieColors.decreaseEdge(
        topColors[5][0],
        topColors[5][1],
        topColors[5][2]
      );
      cubieColors.decreaseCorner(
        topColors[8][0],
        topColors[8][1],
        topColors[8][2]
      );
      topColors = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
      ];
      currentFace = 0;
      break;
    case 2:
      console.log("clearLastFace() called at case: 2");
      highlighterX = 1950;
      highlighterY = 325;
      cubieColors.decreaseCorner(
        frontColors[0][0],
        frontColors[0][1],
        frontColors[0][2]
      );
      cubieColors.decreaseEdge(
        frontColors[3][0],
        frontColors[3][1],
        frontColors[3][2]
      );
      cubieColors.decreaseCorner(
        frontColors[6][0],
        frontColors[6][1],
        frontColors[6][2]
      );
      cubieColors.decreaseEdge(
        frontColors[1][0],
        frontColors[1][1],
        frontColors[1][2]
      );
      cubieColors.decreaseCenter(
        frontColors[4][0],
        frontColors[4][1],
        frontColors[4][2]
      );
      cubieColors.decreaseEdge(
        frontColors[7][0],
        frontColors[7][1],
        frontColors[7][2]
      );
      cubieColors.decreaseCorner(
        frontColors[2][0],
        frontColors[2][1],
        frontColors[2][2]
      );
      cubieColors.decreaseEdge(
        frontColors[5][0],
        frontColors[5][1],
        frontColors[5][2]
      );
      cubieColors.decreaseCorner(
        frontColors[8][0],
        frontColors[8][1],
        frontColors[8][2]
      );
      frontColors = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [0, 255, 0],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
      ];
      currentFace = 1;
      break;
    case 3:
      console.log("clearLastFace() called at case: 3");
      highlighterX = 1875;
      highlighterY = 325;
      cubieColors.decreaseCorner(
        leftColors[0][0],
        leftColors[0][1],
        leftColors[0][2]
      );
      cubieColors.decreaseEdge(
        leftColors[3][0],
        leftColors[3][1],
        leftColors[3][2]
      );
      cubieColors.decreaseCorner(
        leftColors[6][0],
        leftColors[6][1],
        leftColors[6][2]
      );
      cubieColors.decreaseEdge(
        leftColors[1][0],
        leftColors[1][1],
        leftColors[1][2]
      );
      cubieColors.decreaseCenter(
        leftColors[4][0],
        leftColors[4][1],
        leftColors[4][2]
      );
      cubieColors.decreaseEdge(
        leftColors[7][0],
        leftColors[7][1],
        leftColors[7][2]
      );
      cubieColors.decreaseCorner(
        leftColors[2][0],
        leftColors[2][1],
        leftColors[2][2]
      );
      cubieColors.decreaseEdge(
        leftColors[5][0],
        leftColors[5][1],
        leftColors[5][2]
      );
      cubieColors.decreaseCorner(
        leftColors[8][0],
        leftColors[8][1],
        leftColors[8][2]
      );
      leftColors = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 140, 0],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
      ];
      currentFace = 2;
      break;
    case 4:
      highlighterX = 2025;
      highlighterY = 325;
      cubieColors.decreaseCorner(
        rightColors[0][0],
        rightColors[0][1],
        rightColors[0][2]
      );
      cubieColors.decreaseEdge(
        rightColors[3][0],
        rightColors[3][1],
        rightColors[3][2]
      );
      cubieColors.decreaseCorner(
        rightColors[6][0],
        rightColors[6][1],
        rightColors[6][2]
      );
      cubieColors.decreaseEdge(
        rightColors[1][0],
        rightColors[1][1],
        rightColors[1][2]
      );
      cubieColors.decreaseCenter(
        rightColors[4][0],
        rightColors[4][1],
        rightColors[4][2]
      );
      cubieColors.decreaseEdge(
        rightColors[7][0],
        rightColors[7][1],
        rightColors[7][2]
      );
      cubieColors.decreaseCorner(
        rightColors[2][0],
        rightColors[2][1],
        rightColors[2][2]
      );
      cubieColors.decreaseEdge(
        rightColors[5][0],
        rightColors[5][1],
        rightColors[5][2]
      );
      cubieColors.decreaseCorner(
        rightColors[8][0],
        rightColors[8][1],
        rightColors[8][2]
      );
      rightColors = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 0, 0],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
      ];
      currentFace = 3;
      break;
    case 5:
      highlighterX = 1950;
      highlighterY = 475;
      cubieColors.decreaseCorner(
        posteriorColors[0][0],
        posteriorColors[0][1],
        posteriorColors[0][2]
      );
      cubieColors.decreaseEdge(
        posteriorColors[3][0],
        posteriorColors[3][1],
        posteriorColors[3][2]
      );
      cubieColors.decreaseCorner(
        posteriorColors[6][0],
        posteriorColors[6][1],
        posteriorColors[6][2]
      );
      cubieColors.decreaseEdge(
        posteriorColors[1][0],
        posteriorColors[1][1],
        posteriorColors[1][2]
      );
      cubieColors.decreaseCenter(
        posteriorColors[4][0],
        posteriorColors[4][1],
        posteriorColors[4][2]
      );
      cubieColors.decreaseEdge(
        posteriorColors[7][0],
        posteriorColors[7][1],
        posteriorColors[7][2]
      );
      cubieColors.decreaseCorner(
        posteriorColors[2][0],
        posteriorColors[2][1],
        posteriorColors[2][2]
      );
      cubieColors.decreaseEdge(
        posteriorColors[5][0],
        posteriorColors[5][1],
        posteriorColors[5][2]
      );
      cubieColors.decreaseCorner(
        posteriorColors[8][0],
        posteriorColors[8][1],
        posteriorColors[8][2]
      );
      posteriorColors = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [0, 0, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
      ];
      currentFace = 4;
      break;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function saveCube() {
  upFace = colorToLetterConverter(topColors);
  frontFace = colorToLetterConverter(frontColors);
  leftFace = colorToLetterConverter(leftColors);
  rightFace = colorToLetterConverter(rightColors);
  posteriorFace = colorToLetterConverter(posteriorColors);
  downFace = colorToLetterConverter(bottomColors);

  console.log("Front: ", frontFace);
  console.log("Right: ", rightFace);
  console.log("Up: ", upFace);
  console.log("Down: ", downFace);
  console.log("Left: ", leftFace);
  console.log("Back: ", posteriorFace);

  wholeCubeInLetters =
    upFace + rightFace + frontFace + downFace + leftFace + posteriorFace;
  console.log(wholeCubeInLetters);

  await sleep(1000);
  alert("Cube saved successfully.");
}

function clearCube() {
  cubieColors.reset();

  topColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  bottomColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  rightColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  leftColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  frontColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  posteriorColors = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ];

  currentFace = 0;
  faceOrder = "Top face";
}

function colorToLetterConverter(arrayColor) {
  let letters = "";
  for (let i = 0; i < 9; i++) {
    if (
      arrayColor[i][0] == 255 &&
      arrayColor[i][1] == 255 &&
      arrayColor[i][2] == 255
    ) {
      // white
      letters += "U";
    }
    if (
      arrayColor[i][0] == 255 &&
      arrayColor[i][1] == 0 &&
      arrayColor[i][2] == 0
    ) {
      // red
      letters += "R";
    }
    if (
      arrayColor[i][0] == 0 &&
      arrayColor[i][1] == 255 &&
      arrayColor[i][2] == 0
    ) {
      // green
      letters += "F";
    }
    if (
      arrayColor[i][0] == 0 &&
      arrayColor[i][1] == 0 &&
      arrayColor[i][2] == 255
    ) {
      // blue
      letters += "B";
    }
    if (
      arrayColor[i][0] == 255 &&
      arrayColor[i][1] == 140 &&
      arrayColor[i][2] == 0
    ) {
      // orange
      letters += "L";
    }
    if (
      arrayColor[i][0] == 255 &&
      arrayColor[i][1] == 255 &&
      arrayColor[i][2] == 0
    ) {
      // yellow
      letters += "D";
    }
  }

  return letters;
}

function checkForErrorInFace() {
  if (
    cl1[0] != 112 &&
    cl1[1] != 128 &&
    cl1[2] != 144 &&
    cl2[0] != 112 &&
    cl2[1] != 128 &&
    cl2[2] != 144 &&
    cl3[0] != 112 &&
    cl3[1] != 128 &&
    cl3[2] != 144 &&
    cl4[0] != 112 &&
    cl4[1] != 128 &&
    cl4[2] != 144 &&
    cl5[0] != 112 &&
    cl5[1] != 128 &&
    cl5[2] != 144 &&
    cl6[0] != 112 &&
    cl6[1] != 128 &&
    cl6[2] != 144 &&
    cl7[0] != 112 &&
    cl7[1] != 128 &&
    cl7[2] != 144 &&
    cl8[0] != 112 &&
    cl8[1] != 128 &&
    cl8[2] != 144 &&
    cl9[0] != 112 &&
    cl9[1] != 128 &&
    cl9[2] != 144
  ) {
    return true;
  }
  return false;
}

function saveColors() {
  if (checkForErrorInFace()) {
    if (currentFace == 0) {
      if (cl5[0] == 255 && cl5[1] == 255 && cl5[2] == 255) {
        if (
          cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) &&
          cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) &&
          cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) &&
          cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) &&
          cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) &&
          cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) &&
          cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) &&
          cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) &&
          cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])
        ) {
          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2]);
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2]);
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]);
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2]);
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2]);
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]);
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2]);
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]);
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2]);

          topColors[0] = [cl1[0], cl1[1], cl1[2]];
          topColors[3] = [cl2[0], cl2[1], cl2[2]];
          topColors[6] = [cl3[0], cl3[1], cl3[2]];
          topColors[1] = [cl4[0], cl4[1], cl4[2]];
          topColors[4] = [cl5[0], cl5[1], cl5[2]];
          topColors[7] = [cl6[0], cl6[1], cl6[2]];
          topColors[2] = [cl7[0], cl7[1], cl7[2]];
          topColors[5] = [cl8[0], cl8[1], cl8[2]];
          topColors[8] = [cl9[0], cl9[1], cl9[2]];
        } else {
          currentFace = currentFace - 1;
          alert("Cannot save cube, incorrect face!");
        }
      } else {
        currentFace = currentFace - 1;
        alert("Please scan the White face!");
      }
    }
    if (currentFace == 1) {
      if (cl5[0] == 0 && cl5[1] == 255 && cl5[2] == 0) {
        if (
          cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) &&
          cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) &&
          cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) &&
          cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) &&
          cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) &&
          cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) &&
          cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) &&
          cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) &&
          cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])
        ) {
          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2]);
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2]);
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]);
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2]);
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2]);
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]);
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2]);
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]);
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2]);

          frontColors[0] = [cl1[0], cl1[1], cl1[2]];
          frontColors[3] = [cl2[0], cl2[1], cl2[2]];
          frontColors[6] = [cl3[0], cl3[1], cl3[2]];
          frontColors[1] = [cl4[0], cl4[1], cl4[2]];
          frontColors[4] = [cl5[0], cl5[1], cl5[2]];
          frontColors[7] = [cl6[0], cl6[1], cl6[2]];
          frontColors[2] = [cl7[0], cl7[1], cl7[2]];
          frontColors[5] = [cl8[0], cl8[1], cl8[2]];
          frontColors[8] = [cl9[0], cl9[1], cl9[2]];
        } else {
          currentFace = currentFace - 1;
          alert("Cannot save cube, incorrect face!");
        }
      } else {
        currentFace = currentFace - 1;
        alert("Please scan the green face!");
      }
    }
    if (currentFace == 2) {
      if (cl5[0] == 255 && cl5[1] == 140 && cl5[2] == 0) {
        if (
          cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) &&
          cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) &&
          cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) &&
          cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) &&
          cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) &&
          cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) &&
          cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) &&
          cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) &&
          cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])
        ) {
          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2]);
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2]);
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]);
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2]);
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2]);
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]);
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2]);
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]);
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2]);

          leftColors[0] = [cl1[0], cl1[1], cl1[2]];
          leftColors[3] = [cl2[0], cl2[1], cl2[2]];
          leftColors[6] = [cl3[0], cl3[1], cl3[2]];
          leftColors[1] = [cl4[0], cl4[1], cl4[2]];
          leftColors[4] = [cl5[0], cl5[1], cl5[2]];
          leftColors[7] = [cl6[0], cl6[1], cl6[2]];
          leftColors[2] = [cl7[0], cl7[1], cl7[2]];
          leftColors[5] = [cl8[0], cl8[1], cl8[2]];
          leftColors[8] = [cl9[0], cl9[1], cl9[2]];
        } else {
          currentFace = currentFace - 1;
          alert("Cannot save cube, incorrect face!");
        }
      } else {
        currentFace = currentFace - 1;
        alert("Please scan the Orange face!");
      }
    }
    if (currentFace == 3) {
      if (cl5[0] == 255 && cl5[1] == 0 && cl5[2] == 0) {
        if (
          cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) &&
          cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) &&
          cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) &&
          cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) &&
          cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) &&
          cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) &&
          cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) &&
          cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) &&
          cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])
        ) {
          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2]);
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2]);
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]);
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2]);
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2]);
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]);
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2]);
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]);
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2]);

          rightColors[0] = [cl1[0], cl1[1], cl1[2]];
          rightColors[3] = [cl2[0], cl2[1], cl2[2]];
          rightColors[6] = [cl3[0], cl3[1], cl3[2]];
          rightColors[1] = [cl4[0], cl4[1], cl4[2]];
          rightColors[4] = [cl5[0], cl5[1], cl5[2]];
          rightColors[7] = [cl6[0], cl6[1], cl6[2]];
          rightColors[2] = [cl7[0], cl7[1], cl7[2]];
          rightColors[5] = [cl8[0], cl8[1], cl8[2]];
          rightColors[8] = [cl9[0], cl9[1], cl9[2]];
        } else {
          currentFace = currentFace - 1;
          alert("Cannot save cube, incorrect face!");
        }
      } else {
        currentFace = currentFace - 1;
        alert("Please scan the Red face!");
      }
    }
    if (currentFace == 4) {
      if (cl5[0] == 0 && cl5[1] == 0 && cl5[2] == 255) {
        if (
          cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) &&
          cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) &&
          cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) &&
          cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) &&
          cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) &&
          cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) &&
          cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) &&
          cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) &&
          cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])
        ) {
          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2]);
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2]);
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]);
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2]);
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2]);
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]);
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2]);
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]);
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2]);

          posteriorColors[0] = [cl1[0], cl1[1], cl1[2]];
          posteriorColors[3] = [cl2[0], cl2[1], cl2[2]];
          posteriorColors[6] = [cl3[0], cl3[1], cl3[2]];
          posteriorColors[1] = [cl4[0], cl4[1], cl4[2]];
          posteriorColors[4] = [cl5[0], cl5[1], cl5[2]];
          posteriorColors[7] = [cl6[0], cl6[1], cl6[2]];
          posteriorColors[2] = [cl7[0], cl7[1], cl7[2]];
          posteriorColors[5] = [cl8[0], cl8[1], cl8[2]];
          posteriorColors[8] = [cl9[0], cl9[1], cl9[2]];
        } else {
          currentFace = currentFace - 1;
          alert("Cannot save cube, incorrect face!");
        }
      } else {
        currentFace = currentFace - 1;
        alert("Please scan the Blue face!");
      }
    }
    if (currentFace == 5) {
      if (cl5[0] == 255 && cl5[1] == 255 && cl5[2] == 0) {
        if (
          cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) &&
          cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) &&
          cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) &&
          cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) &&
          cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) &&
          cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) &&
          cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) &&
          cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) &&
          cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])
        ) {
          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2]);
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2]);
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]);
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2]);
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2]);
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]);
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2]);
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]);
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2]);

          bottomColors[0] = [cl1[0], cl1[1], cl1[2]];
          bottomColors[3] = [cl2[0], cl2[1], cl2[2]];
          bottomColors[6] = [cl3[0], cl3[1], cl3[2]];
          bottomColors[1] = [cl4[0], cl4[1], cl4[2]];
          bottomColors[4] = [cl5[0], cl5[1], cl5[2]];
          bottomColors[7] = [cl6[0], cl6[1], cl6[2]];
          bottomColors[2] = [cl7[0], cl7[1], cl7[2]];
          bottomColors[5] = [cl8[0], cl8[1], cl8[2]];
          bottomColors[8] = [cl9[0], cl9[1], cl9[2]];
          saveCube();
        } else {
          currentFace = currentFace - 1;
          alert("Cannot save cube, incorrect face!");
        }
      } else {
        currentFace = currentFace - 1;
        alert("Please scan the yellow face!");
      }
    }
    currentFace = currentFace + 1;
    if (currentFace == 6) {
      currentFace = 0;
    }

    switch (currentFace) {
      case 1:
        faceOrder = "Front face";
        highlighterX = highlighterPositions[2][0];
        highlighterY = highlighterPositions[2][1];
        break;
      case 2:
        faceOrder = "Left face";
        highlighterX = highlighterPositions[1][0];
        highlighterY = highlighterPositions[1][1];
        break;
      case 3:
        faceOrder = "Right face";
        highlighterX = highlighterPositions[3][0];
        highlighterY = highlighterPositions[3][1];
        break;
      case 4:
        faceOrder = "Posterior face";
        highlighterX = highlighterPositions[5][0];
        highlighterY = highlighterPositions[5][1];
        break;
      case 5:
        faceOrder = "Bottom face";
        highlighterX = highlighterPositions[4][0];
        highlighterY = highlighterPositions[4][1];
        break;
      default:
        highlighterX = 3000;
        highlighterY = 3000;
        console.log(`Cube fully scanned`);
    }
  } else {
    alert("Cannot save cube, check for every color to be correct!");
  }
}

function colorNameToRgb(colorName) {
  rgb = [112, 128, 144];

  if (colorName == "white") {
    rgb = [255, 255, 255];
  }
  if (colorName == "red") {
    rgb = [255, 0, 0];
  }
  if (colorName == "blue") {
    rgb = [0, 0, 255];
  }
  if (colorName == "green") {
    rgb = [0, 255, 0];
  }
  if (colorName == "orange") {
    rgb = [255, 140, 0];
  }
  if (colorName == "yellow") {
    rgb = [255, 255, 0];
  }

  return rgb;
}

export function draw() {
  p.background("#161616");

  p.image(video, 220, 190);

  p.textSize(32);
  p.fill(255, 255, 255);
  p.text("Scan your cube here", 350, 170);

  first = p.get(350, 250);
  cl1 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl1[0], cl1[1], cl1[2]);
  p.circle(350, 250, 30);

  first = p.get(350, 400);
  cl2 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl2[0], cl2[1], cl2[2]);
  p.circle(350, 400, 30);

  first = p.get(350, 550);
  cl3 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl3[0], cl3[1], cl3[2]);
  p.circle(350, 550, 30);

  first = p.get(500, 250);
  cl4 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl4[0], cl4[1], cl4[2]);
  p.circle(500, 250, 30);

  first = p.get(500, 400);
  cl5 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl5[0], cl5[1], cl5[2]);
  p.circle(500, 400, 30);

  first = p.get(500, 550);
  cl6 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl6[0], cl6[1], cl6[2]);
  p.circle(500, 550, 30);

  first = p.get(650, 250);
  cl7 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl7[0], cl7[1], cl7[2]);
  p.circle(650, 250, 30);

  first = p.get(650, 400);
  cl8 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl8[0], cl8[1], cl8[2]);
  p.circle(650, 400, 30);

  first = p.get(650, 550);
  cl9 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
  p.fill(cl9[0], cl9[1], cl9[2]);
  p.circle(650, 550, 30);

  p.textSize(25);
  p.fill(255, 255, 255);
  p.text("Currently scanning:", 1150, 230);

  p.text(faceOrder, 1370, 230);

  // current scanning cube face
  p.fill(cl1[0], cl1[1], cl1[2]);
  p.rect(1150, 250, 100, 100);
  p.fill(0, 0, 0);
  p.fill(cl2[0], cl2[1], cl2[2]);
  p.rect(1150, 350, 100, 100);
  p.fill(cl3[0], cl3[1], cl3[2]);
  p.rect(1150, 450, 100, 100);
  p.fill(cl4[0], cl4[1], cl4[2]);
  p.rect(1250, 250, 100, 100);
  p.fill(cl5[0], cl5[1], cl5[2]);
  p.rect(1250, 350, 100, 100);
  p.fill(cl6[0], cl6[1], cl6[2]);
  p.rect(1250, 450, 100, 100);
  p.fill(cl7[0], cl7[1], cl7[2]);
  p.rect(1350, 250, 100, 100);
  p.fill(cl8[0], cl8[1], cl8[2]);
  p.rect(1350, 350, 100, 100);
  p.fill(cl9[0], cl9[1], cl9[2]);
  p.rect(1350, 450, 100, 100);

  // the whole cube

  // top face
  let r1 = new cubie(1950, 250, topColors[0], "top", 0);
  cubies.push(r1);
  r1 = new cubie(1950, 275, topColors[3], "top", 1);
  cubies.push(r1);
  r1 = new cubie(1950, 300, topColors[6], "top", 2);
  cubies.push(r1);
  r1 = new cubie(1975, 250, topColors[1], "top", 3);
  cubies.push(r1);
  r1 = new cubie(1975, 275, topColors[4], "top", 4);
  cubies.push(r1);
  r1 = new cubie(1975, 300, topColors[7], "top", 5);
  cubies.push(r1);
  r1 = new cubie(2000, 250, topColors[2], "top", 6);
  cubies.push(r1);
  r1 = new cubie(2000, 275, topColors[5], "top", 7);
  cubies.push(r1);
  r1 = new cubie(2000, 300, topColors[8], "top", 8);
  cubies.push(r1);

  // left face
  r1 = new cubie(1875, 325, leftColors[0], "left", 0);
  cubies.push(r1);
  r1 = new cubie(1875, 350, leftColors[3], "left", 1);
  cubies.push(r1);
  r1 = new cubie(1875, 375, leftColors[6], "left", 2);
  cubies.push(r1);
  r1 = new cubie(1900, 325, leftColors[1], "left", 3);
  cubies.push(r1);
  r1 = new cubie(1900, 350, leftColors[4], "left", 4);
  cubies.push(r1);
  r1 = new cubie(1900, 375, leftColors[7], "left", 5);
  cubies.push(r1);
  r1 = new cubie(1925, 325, leftColors[2], "left", 6);
  cubies.push(r1);
  r1 = new cubie(1925, 350, leftColors[5], "left", 7);
  cubies.push(r1);
  r1 = new cubie(1925, 375, leftColors[8], "left", 8);
  cubies.push(r1);

  // front face
  r1 = new cubie(1950, 325, frontColors[0], "front", 0);
  cubies.push(r1);
  r1 = new cubie(1950, 350, frontColors[3], "front", 1);
  cubies.push(r1);
  r1 = new cubie(1950, 375, frontColors[6], "front", 2);
  cubies.push(r1);
  r1 = new cubie(1975, 325, frontColors[1], "front", 3);
  cubies.push(r1);
  r1 = new cubie(1975, 350, frontColors[4], "front", 4);
  cubies.push(r1);
  r1 = new cubie(1975, 375, frontColors[7], "front", 5);
  cubies.push(r1);
  r1 = new cubie(2000, 325, frontColors[2], "front", 6);
  cubies.push(r1);
  r1 = new cubie(2000, 350, frontColors[5], "front", 7);
  cubies.push(r1);
  r1 = new cubie(2000, 375, frontColors[8], "front", 8);
  cubies.push(r1);

  // right face
  r1 = new cubie(2025, 325, rightColors[0], "right", 0);
  cubies.push(r1);
  r1 = new cubie(2025, 350, rightColors[3], "right", 1);
  cubies.push(r1);
  r1 = new cubie(2025, 375, rightColors[6], "right", 2);
  cubies.push(r1);
  r1 = new cubie(2050, 325, rightColors[1], "right", 3);
  cubies.push(r1);
  r1 = new cubie(2050, 350, rightColors[4], "right", 4);
  cubies.push(r1);
  r1 = new cubie(2050, 375, rightColors[7], "right", 5);
  cubies.push(r1);
  r1 = new cubie(2075, 325, rightColors[2], "right", 6);
  cubies.push(r1);
  r1 = new cubie(2075, 350, rightColors[5], "right", 7);
  cubies.push(r1);
  r1 = new cubie(2075, 375, rightColors[8], "right", 8);
  cubies.push(r1);

  // bottom face
  r1 = new cubie(1950, 400, bottomColors[0], "bottom", 0);
  cubies.push(r1);
  r1 = new cubie(1950, 425, bottomColors[3], "bottom", 1);
  cubies.push(r1);
  r1 = new cubie(1950, 450, bottomColors[6], "bottom", 2);
  cubies.push(r1);
  r1 = new cubie(1975, 400, bottomColors[1], "bottom", 3);
  cubies.push(r1);
  r1 = new cubie(1975, 425, bottomColors[4], "bottom", 4);
  cubies.push(r1);
  r1 = new cubie(1975, 450, bottomColors[7], "bottom", 5);
  cubies.push(r1);
  r1 = new cubie(2000, 400, bottomColors[2], "bottom", 6);
  cubies.push(r1);
  r1 = new cubie(2000, 425, bottomColors[5], "bottom", 7);
  cubies.push(r1);
  r1 = new cubie(2000, 450, bottomColors[8], "bottom", 8);
  cubies.push(r1);

  // posterior face
  r1 = new cubie(1950, 475, posteriorColors[8], "posterior", 0);
  cubies.push(r1);
  r1 = new cubie(1950, 500, posteriorColors[7], "posterior", 1);
  cubies.push(r1);
  r1 = new cubie(1950, 525, posteriorColors[6], "posterior", 2);
  cubies.push(r1);
  r1 = new cubie(1975, 475, posteriorColors[5], "posterior", 3);
  cubies.push(r1);
  r1 = new cubie(1975, 500, posteriorColors[4], "posterior", 4);
  cubies.push(r1);
  r1 = new cubie(1975, 525, posteriorColors[3], "posterior", 5);
  cubies.push(r1);
  r1 = new cubie(2000, 475, posteriorColors[2], "posterior", 6);
  cubies.push(r1);
  r1 = new cubie(2000, 500, posteriorColors[1], "posterior", 7);
  cubies.push(r1);
  r1 = new cubie(2000, 525, posteriorColors[0], "posterior", 8);
  cubies.push(r1);

  for (let i = 0; i < cubies.length; i++) {
    cubies[i].show();
  }

  // color picker
  let c1 = new colorChooser(2100, 650, [255, 255, 255]);
  colorChoosers.push(c1);
  c1 = new colorChooser(2050, 650, [0, 0, 255]);
  colorChoosers.push(c1);
  c1 = new colorChooser(2000, 650, [255, 0, 0]);
  colorChoosers.push(c1);
  c1 = new colorChooser(1950, 650, [0, 255, 0]);
  colorChoosers.push(c1);
  c1 = new colorChooser(1900, 650, [255, 140, 0]);
  colorChoosers.push(c1);
  c1 = new colorChooser(1850, 650, [255, 255, 0]);
  colorChoosers.push(c1);

  for (let i = 0; i < colorChoosers.length; i++) {
    colorChoosers[i].show();
  }

  p.fill(255, 255, 255);
  p.text("Chosen color: ", 1850, 750);

  p.fill(chosenColor);
  p.rect(2025, 730, 25, 25);

  p.fill(255, 0, 0, 150);
  p.rect(highlighterX, highlighterY, 75, 75);
}

function inverseInEight(x) {
  switch (x) {
    case 0:
      return 0;
      break;
    case 1:
      return 3;
      break;
    case 2:
      return 6;
      break;
    case 3:
      return 1;
      break;
    case 4:
      return 4;
      break;
    case 5:
      return 7;
      break;
    case 6:
      return 2;
      break;
    case 7:
      return 5;
      break;
    case 8:
      return 8;
      break;
    default:
      return 0;
  }
}

function inverseInEightPosterior(x) {
  switch (x) {
    case 0:
      return 8;
      break;
    case 1:
      return 7;
      break;
    case 2:
      return 6;
      break;
    case 3:
      return 5;
      break;
    case 4:
      return 4;
      break;
    case 5:
      return 3;
      break;
    case 6:
      return 2;
      break;
    case 7:
      return 1;
      break;
    case 8:
      return 0;
      break;
    default:
      return 0;
  }
}

export function mousePressed() {
  for (let k = 0; k < colorChoosers.length; k++) {
    if (
      p.mouseX >= colorChoosers[k].x &&
      p.mouseX <= colorChoosers[k].x + 25 &&
      p.mouseY >= colorChoosers[k].y &&
      p.mouseY <= colorChoosers[k].y + 25
    ) {
      chosenColor = colorChoosers[k].color;
    }
  }
  for (let i = 0; i < cubies.length; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        p.mouseX >= cubies[i].x &&
        p.mouseY >= cubies[i].y &&
        p.mouseX <= cubies[i].x + 25 &&
        p.mouseY <= cubies[i].y + 25 &&
        cubies[i].type == "top" &&
        cubies[i].order == j
      ) {
        topColors[inverseInEight(j)] = chosenColor;
      }
    }
    for (let j = 0; j < 9; j++) {
      if (
        p.mouseX >= cubies[i].x &&
        p.mouseY >= cubies[i].y &&
        p.mouseX <= cubies[i].x + 25 &&
        p.mouseY <= cubies[i].y + 25 &&
        cubies[i].type == "left" &&
        cubies[i].order == j
      ) {
        leftColors[inverseInEight(j)] = chosenColor;
        console.log("select");
      }
    }
    for (let j = 0; j < 9; j++) {
      if (
        p.mouseX >= cubies[i].x &&
        p.mouseY >= cubies[i].y &&
        p.mouseX <= cubies[i].x + 25 &&
        p.mouseY <= cubies[i].y + 25 &&
        cubies[i].type == "right" &&
        cubies[i].order == j
      ) {
        rightColors[inverseInEight(j)] = chosenColor;
        console.log("select");
      }
    }
    for (let j = 0; j < 9; j++) {
      if (
        p.mouseX >= cubies[i].x &&
        p.mouseY >= cubies[i].y &&
        p.mouseX <= cubies[i].x + 25 &&
        p.mouseY <= cubies[i].y + 25 &&
        cubies[i].type == "front" &&
        cubies[i].order == j
      ) {
        frontColors[inverseInEight(j)] = chosenColor;
        console.log("select");
      }
    }
    for (let j = 0; j < 9; j++) {
      if (
        p.mouseX >= cubies[i].x &&
        p.mouseY >= cubies[i].y &&
        p.mouseX <= cubies[i].x + 25 &&
        p.mouseY <= cubies[i].y + 25 &&
        cubies[i].type == "bottom" &&
        cubies[i].order == j
      ) {
        bottomColors[inverseInEight(j)] = chosenColor;
        console.log("select");
      }
    }
    for (let j = 0; j < 9; j++) {
      if (
        p.mouseX >= cubies[i].x &&
        p.mouseY >= cubies[i].y &&
        p.mouseX <= cubies[i].x + 25 &&
        p.mouseY <= cubies[i].y + 25 &&
        cubies[i].type == "posterior" &&
        cubies[i].order == j
      ) {
        posteriorColors[inverseInEightPosterior(j)] = chosenColor;
        console.log("select");
      }
    }
  }
  return false;
}

function checkColor(r, g, b) {
  hues[0] = r / 255;
  hues[1] = g / 255;
  hues[2] = b / 255;
  let min = 10;
  let max = -10;
  let redIsMax = false;
  let blueIsMax = false;
  let greenIsMax = false;

  for (let i = 0; i < 3; i++) {
    if (min > hues[i]) {
      min = hues[i];
    }
    if (max < hues[i]) {
      max = hues[i];
      if (i == 0) {
        redIsMax = true;
      }
      if (i == 1) {
        greenIsMax = true;
      }
      if (i == 2) {
        blueIsMax = true;
      }
    }
  }

  if (redIsMax) {
    hueAngle = (hues[1] - hues[2]) / (max - min);
  }
  if (greenIsMax) {
    hueAngle = 2.0 + (hues[2] - hues[0]) / (max - min);
  }
  if (blueIsMax) {
    hueAngle = 4.0 + (hues[0] - hues[1]) / (max - min);
  }

  if (hueAngle < 0) {
    hueAngle = hueAngle + 360;
  } else {
    hueAngle = hueAngle * 60;
  }

  if (r >= 90 && b >= 90 && g >= 90) {
    colorName = "white";
    return "white";
  }

  if (hueAngle >= 0 && hueAngle < 10) {
    colorName = "red";
    return "red";
  }

  if (hueAngle >= 345 && hueAngle <= 360) {
    colorName = "red";
    return "red";
  }

  if (hueAngle >= 10 && hueAngle <= 30) {
    colorName = "orange";
    return "orange";
  }

  if (hueAngle >= 75 && hueAngle <= 165) {
    colorName = "green";
    return "green";
  }

  if (hueAngle >= 165 && hueAngle <= 255) {
    colorName = "blue";
    return "blue";
  }

  if (hueAngle >= 30 && hueAngle <= 75) {
    colorName = "yellow";
    return "yellow";
  }

  blueIsMax = false;
  redIsMax = false;
  greenIsMax = false;
}
