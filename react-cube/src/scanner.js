import { p } from './Sketch'
import cubie from './cubie'
import cubeColors from './cubeColors';

let video;

let hueAngle = 0;
let hues = [];
let colorName = "Unknown"
let chosenColor = "#081b2a";

let faceOrder = "Top face";

let cubies = [];

let first;

let cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9;
let rgb;

let topColors;
let bottomColors;
let leftColors;
let rightColors;
let frontColors;
let posteriorColors;

let buttonSaveFace;
let buttonAnimate;
let buttonClear;

let currentFace = 0;

export var isVisible = true;

let cubieColors = new cubeColors();

export function setup() {
  p.createCanvas(p.displayWidth, p.displayHeight);

  // webcam capture
  video = p.createCapture(p.VIDEO);
  video.size(560, 480);
  video.hide();

  buttonSaveFace = p.createButton('SAVE');
  buttonSaveFace.mousePressed(saveColors);
  buttonSaveFace.position(880, 600);

  buttonClear = p.createButton('CLEAR');
  buttonClear.mousePressed(clearCube);
  buttonClear.position(1255, 600);

  topColors = [[255,255,255], [255,255,255], [255,255,255],
               [255,255,255], [255,255,255], [255,255,255],
               [255,255,255], [255,255,255], [255,255,255]];

  bottomColors = [[255,255,255], [255,255,255], [255,255,255],
                  [255,255,255], [255,255,255], [255,255,255],
                  [255,255,255], [255,255,255], [255,255,255]];

  rightColors = [[255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255]];

  leftColors = [[255,255,255], [255,255,255], [255,255,255],
                [255,255,255], [255,255,255], [255,255,255],
                [255,255,255], [255,255,255], [255,255,255]];

  frontColors = [[255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255]];

  posteriorColors = [[255,255,255], [255,255,255], [255,255,255],
                     [255,255,255], [255,255,255], [255,255,255],
                     [255,255,255], [255,255,255], [255,255,255]];
}

function clearCube(){

  cubieColors.reset();

  topColors = [[255,255,255], [255,255,255], [255,255,255],
               [255,255,255], [255,255,255], [255,255,255],
               [255,255,255], [255,255,255], [255,255,255]];

  bottomColors = [[255,255,255], [255,255,255], [255,255,255],
                  [255,255,255], [255,255,255], [255,255,255],
                  [255,255,255], [255,255,255], [255,255,255]];

  rightColors = [[255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255]];

  leftColors = [[255,255,255], [255,255,255], [255,255,255],
                [255,255,255], [255,255,255], [255,255,255],
                [255,255,255], [255,255,255], [255,255,255]];

  frontColors = [[255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255],
                 [255,255,255], [255,255,255], [255,255,255]];

  posteriorColors = [[255,255,255], [255,255,255], [255,255,255],
                     [255,255,255], [255,255,255], [255,255,255],
                     [255,255,255], [255,255,255], [255,255,255]];

  currentFace = 0;
  faceOrder = "Top face";
}

function checkForErrorInFace(){
  if(cl1[0] != 112 && cl1[1] != 128 && cl1[2] != 144 &&
    cl2[0] != 112 && cl2[1] != 128 && cl2[2] != 144 &&
    cl3[0] != 112 && cl3[1] != 128 && cl3[2] != 144 &&
    cl4[0] != 112 && cl4[1] != 128 && cl4[2] != 144 &&
    cl5[0] != 112 && cl5[1] != 128 && cl5[2] != 144 &&
    cl6[0] != 112 && cl6[1] != 128 && cl6[2] != 144 &&
    cl7[0] != 112 && cl7[1] != 128 && cl7[2] != 144 &&
    cl8[0] != 112 && cl8[1] != 128 && cl8[2] != 144 &&
    cl9[0] != 112 && cl9[1] != 128 && cl9[2] != 144){
      return true;
    }
    return false;
}

function saveColors(){
  console.log(currentFace);

  if(checkForErrorInFace()){

      if(currentFace == 0){

        if(cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) && cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) && cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) && 
        cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) && cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) && cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) && 
        cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) && cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) && cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])){

          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2])
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2])
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]) 
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2])
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2])
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]) 
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2])
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]) 
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2])

          topColors[0] = [cl1[0], cl1[1], cl1[2]];
          topColors[1] = [cl2[0], cl2[1], cl2[2]];
          topColors[2] = [cl3[0], cl3[1], cl3[2]];
          topColors[3] = [cl4[0], cl4[1], cl4[2]];
          topColors[4] = [cl5[0], cl5[1], cl5[2]];
          topColors[5] = [cl6[0], cl6[1], cl6[2]];
          topColors[6] = [cl7[0], cl7[1], cl7[2]];
          topColors[7] = [cl8[0], cl8[1], cl8[2]];
          topColors[8] = [cl9[0], cl9[1], cl9[2]];
        }
        else{
          alert("Cannot save cube, incorresct face!")
        }
      }
      if(currentFace == 1){

        if(cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) && cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) && cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) && 
        cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) && cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) && cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) && 
        cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) && cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) && cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])){

          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2])
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2])
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]) 
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2])
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2])
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]) 
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2])
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]) 
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2])

          frontColors[0] = [cl1[0], cl1[1], cl1[2]];
          frontColors[1] = [cl2[0], cl2[1], cl2[2]];
          frontColors[2] = [cl3[0], cl3[1], cl3[2]];
          frontColors[3] = [cl4[0], cl4[1], cl4[2]];
          frontColors[4] = [cl5[0], cl5[1], cl5[2]];
          frontColors[5] = [cl6[0], cl6[1], cl6[2]];
          frontColors[6] = [cl7[0], cl7[1], cl7[2]];
          frontColors[7] = [cl8[0], cl8[1], cl8[2]];
          frontColors[8] = [cl9[0], cl9[1], cl9[2]];
        }
        else{
          alert("Cannot save cube, incorresct face!")
        }
      }
      if(currentFace == 2){

        if(cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) && cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) && cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) && 
        cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) && cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) && cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) && 
        cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) && cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) && cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])){

          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2])
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2])
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]) 
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2])
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2])
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]) 
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2])
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]) 
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2])

          leftColors[0] = [cl1[0], cl1[1], cl1[2]];
          leftColors[1] = [cl2[0], cl2[1], cl2[2]];
          leftColors[2] = [cl3[0], cl3[1], cl3[2]];
          leftColors[3] = [cl4[0], cl4[1], cl4[2]];
          leftColors[4] = [cl5[0], cl5[1], cl5[2]];
          leftColors[5] = [cl6[0], cl6[1], cl6[2]];
          leftColors[6] = [cl7[0], cl7[1], cl7[2]];
          leftColors[7] = [cl8[0], cl8[1], cl8[2]];
          leftColors[8] = [cl9[0], cl9[1], cl9[2]];
        }
        else{
          alert("Cannot save cube, incorresct face!")
        }
      }
      if(currentFace == 3){
        if(cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) && cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) && cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) && 
        cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) && cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) && cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) && 
        cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) && cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) && cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])){

          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2])
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2])
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]) 
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2])
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2])
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]) 
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2])
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]) 
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2])

          rightColors[0] = [cl1[0], cl1[1], cl1[2]];
          rightColors[1] = [cl2[0], cl2[1], cl2[2]];
          rightColors[2] = [cl3[0], cl3[1], cl3[2]];
          rightColors[3] = [cl4[0], cl4[1], cl4[2]];
          rightColors[4] = [cl5[0], cl5[1], cl5[2]];
          rightColors[5] = [cl6[0], cl6[1], cl6[2]];
          rightColors[6] = [cl7[0], cl7[1], cl7[2]];
          rightColors[7] = [cl8[0], cl8[1], cl8[2]];
          rightColors[8] = [cl9[0], cl9[1], cl9[2]];
        }
        else{
          alert("Cannot save cube, incorresct face!")
        }
      }
      if(currentFace == 4){
        if(cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) && cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) && cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) && 
        cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) && cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) && cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) && 
        cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) && cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) && cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])){

          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2])
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2])
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]) 
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2])
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2])
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]) 
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2])
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]) 
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2])

          posteriorColors[0] = [cl1[0], cl1[1], cl1[2]];
          posteriorColors[1] = [cl2[0], cl2[1], cl2[2]];
          posteriorColors[2] = [cl3[0], cl3[1], cl3[2]];
          posteriorColors[3] = [cl4[0], cl4[1], cl4[2]];
          posteriorColors[4] = [cl5[0], cl5[1], cl5[2]];
          posteriorColors[5] = [cl6[0], cl6[1], cl6[2]];
          posteriorColors[6] = [cl7[0], cl7[1], cl7[2]];
          posteriorColors[7] = [cl8[0], cl8[1], cl8[2]];
          posteriorColors[8] = [cl9[0], cl9[1], cl9[2]];
        }
        else{
          alert("Cannot save cube, incorresct face!")
        }
      }
      if(currentFace == 5){
        if(cubieColors.increaseCorner(cl1[0], cl1[1], cl1[2]) && cubieColors.increaseEdge(cl2[0], cl2[1], cl2[2]) && cubieColors.increaseCorner(cl3[0], cl3[1], cl3[2]) && 
        cubieColors.increaseEdge(cl4[0], cl4[1], cl4[2]) && cubieColors.increaseCenter(cl5[0], cl5[1], cl5[2]) && cubieColors.increaseEdge(cl6[0], cl6[1], cl6[2]) && 
        cubieColors.increaseCorner(cl7[0], cl7[1], cl7[2]) && cubieColors.increaseEdge(cl8[0], cl8[1], cl8[2]) && cubieColors.increaseCorner(cl9[0], cl9[1], cl9[2])){

          cubieColors.doIncreaseCorner(cl1[0], cl1[1], cl1[2])
          cubieColors.doIncreaseEdge(cl2[0], cl2[1], cl2[2])
          cubieColors.doIncreaseCorner(cl3[0], cl3[1], cl3[2]) 
          cubieColors.doIncreaseEdge(cl4[0], cl4[1], cl4[2])
          cubieColors.doIncreaseCenter(cl5[0], cl5[1], cl5[2])
          cubieColors.doIncreaseEdge(cl6[0], cl6[1], cl6[2]) 
          cubieColors.doIncreaseCorner(cl7[0], cl7[1], cl7[2])
          cubieColors.doIncreaseEdge(cl8[0], cl8[1], cl8[2]) 
          cubieColors.doIncreaseCorner(cl9[0], cl9[1], cl9[2])

          bottomColors[0] = [cl1[0], cl1[1], cl1[2]];
          bottomColors[1] = [cl2[0], cl2[1], cl2[2]];
          bottomColors[2] = [cl3[0], cl3[1], cl3[2]];
          bottomColors[3] = [cl4[0], cl4[1], cl4[2]];
          bottomColors[4] = [cl5[0], cl5[1], cl5[2]];
          bottomColors[5] = [cl6[0], cl6[1], cl6[2]];
          bottomColors[6] = [cl7[0], cl7[1], cl7[2]];
          bottomColors[7] = [cl8[0], cl8[1], cl8[2]];
          bottomColors[8] = [cl9[0], cl9[1], cl9[2]];
        }
        else{
          alert("Cannot save cube, incorresct face!")
        }
      }
      currentFace = currentFace + 1;
    
      switch (currentFace) {
        case 1:
          faceOrder = "Front face";
          break;
        case 2:
          faceOrder = "Left face";
          break;
        case 3:
          faceOrder = "Right face";
          break;
        case 4:
          faceOrder = "Posterior face";
          break;
        case 5:
          faceOrder = "Bottom face";
          break;
        default:
          console.log(`Cube fully scanned`);
      }
    }
    else{
      alert("Cannot save cube, check for every color to be correct!")
    }
  
}

function colorNameToRgb(colorName){

  rgb = [112,128,144]

  if(colorName == "white"){
    rgb = [255, 255, 255]
  }
  if(colorName == "red"){
    rgb = [255, 0, 0]
  }
  if(colorName == "blue"){
    rgb = [0, 0, 255]
  }
  if(colorName == "green"){
    rgb = [0, 255, 0]
  }
  if(colorName == "orange"){
    rgb = [255,140,0]
  }
  if(colorName == "yellow"){
    rgb = [255,255,0]
  }

  return rgb
}

export function draw() { 
    p.background("#081b2a");
  
    p.image(video, 120,190);

    p.textSize(32);
    p.fill(255, 255, 255)
    p.text('Scan your cube here', 250, 170);

    first = p.get(250,250)
    cl1 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl1[0], cl1[1], cl1[2])
    p.circle(250, 250 ,30)

    first = p.get(250,400)
    cl2 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl2[0], cl2[1], cl2[2])
    p.circle(250,400,30)

    first = p.get(250,550)
    cl3 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl3[0], cl3[1], cl3[2])
    p.circle(250,550,30)

    first = p.get(400,250)
    cl4 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl4[0], cl4[1], cl4[2])
    p.circle(400,250,30)

    first = p.get(400,400)
    cl5 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl5[0], cl5[1], cl5[2])
    p.circle(400,400,30)

    first = p.get(400,550)
    cl6 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl6[0], cl6[1], cl6[2])
    p.circle(400,550,30)

    first = p.get(550,250)
    cl7 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl7[0], cl7[1], cl7[2])
    p.circle(550,250,30)

    first = p.get(550,400)
    cl8 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl8[0], cl8[1], cl8[2])
    p.circle(550,400,30)

    first = p.get(550,550)
    cl9 = colorNameToRgb(checkColor(first[0], first[1], first[2]));
    p.fill(cl9[0], cl9[1], cl9[2])
    p.circle(550,550,30)

    p.textSize(25);
    p.fill(255, 255, 255)
    p.text('Currently scanning:', 750, 230);

    p.text(faceOrder, 970, 230);

    // current scanning cube face 
    p.fill(cl1[0], cl1[1], cl1[2]);
    p.rect(750, 250, 100, 100);
    p.fill(0,0,0)
    p.fill(cl2[0], cl2[1], cl2[2]);
    p.rect(750, 350, 100, 100);
    p.fill(cl3[0], cl3[1], cl3[2]);
    p.rect(750, 450, 100, 100);
    p.fill(cl4[0], cl4[1], cl4[2]);
    p.rect(850, 250, 100, 100);
    p.fill(cl5[0], cl5[1], cl5[2]);
    p.rect(850, 350, 100, 100);
    p.fill(cl6[0], cl6[1], cl6[2]);
    p.rect(850, 450, 100, 100);
    p.fill(cl7[0], cl7[1], cl7[2]);
    p.rect(950, 250, 100, 100);
    p.fill(cl8[0], cl8[1], cl8[2]);
    p.rect(950, 350, 100, 100);
    p.fill(cl9[0], cl9[1], cl9[2]);
    p.rect(950, 450, 100, 100);

    // the whole cube

    // top face
    let r1 = new cubie(1250, 250, topColors[0], "top", 0);
    cubies.push(r1);
    r1 = new cubie(1250, 275, topColors[1], "top", 1);
    cubies.push(r1);
    r1 = new cubie(1250, 300, topColors[2], "top", 2);
    cubies.push(r1);
    r1 = new cubie(1275, 250, topColors[3], "top", 3);
    cubies.push(r1);
    r1 = new cubie(1275, 275, topColors[4], "top", 4);
    cubies.push(r1);
    r1 = new cubie(1275, 300, topColors[5], "top", 5);
    cubies.push(r1);
    r1 = new cubie(1300, 250, topColors[6], "top", 6);
    cubies.push(r1);
    r1 = new cubie(1300, 275, topColors[7], "top", 7);
    cubies.push(r1);
    r1 = new cubie(1300, 300, topColors[8], "top", 8);
    cubies.push(r1);

    // left face 
    r1 = new cubie(1175, 325, leftColors[0], "left", 0);
    cubies.push(r1);
    r1 = new cubie(1175, 350, leftColors[1], "left", 1);
    cubies.push(r1);
    r1 = new cubie(1175, 375, leftColors[2], "left", 2);
    cubies.push(r1);
    r1 = new cubie(1200, 325, leftColors[3], "left", 3);
    cubies.push(r1);
    r1 = new cubie(1200, 350, leftColors[4], "left", 4);
    cubies.push(r1);
    r1 = new cubie(1200, 375, leftColors[5], "left", 5);
    cubies.push(r1);
    r1 = new cubie(1225, 325, leftColors[6], "left", 6);
    cubies.push(r1);
    r1 = new cubie(1225, 350, leftColors[7], "left", 7);
    cubies.push(r1);
    r1 = new cubie(1225, 375, leftColors[8], "left", 8);
    cubies.push(r1);

    // front face 
    r1 = new cubie(1250, 325, frontColors[0], "front", 0);
    cubies.push(r1);
    r1 = new cubie(1250, 350, frontColors[1], "front", 1);
    cubies.push(r1);
    r1 = new cubie(1250, 375, frontColors[2], "front", 2);
    cubies.push(r1);
    r1 = new cubie(1275, 325, frontColors[3], "front", 3);
    cubies.push(r1);
    r1 = new cubie(1275, 350, frontColors[4], "front", 4);
    cubies.push(r1);
    r1 = new cubie(1275, 375, frontColors[5], "front", 5);
    cubies.push(r1);
    r1 = new cubie(1300, 325, frontColors[6], "front", 6);
    cubies.push(r1);
    r1 = new cubie(1300, 350, frontColors[7], "front", 7);
    cubies.push(r1);
    r1 = new cubie(1300, 375, frontColors[8], "front", 8);
    cubies.push(r1);

    // right face
    r1 = new cubie(1325, 325, rightColors[0], "right", 0);
    cubies.push(r1);
    r1 = new cubie(1325, 350, rightColors[1], "right", 1);
    cubies.push(r1);
    r1 = new cubie(1325, 375, rightColors[2], "right", 2);
    cubies.push(r1);
    r1 = new cubie(1350, 325, rightColors[3], "right", 3);
    cubies.push(r1);
    r1 = new cubie(1350, 350, rightColors[4], "right", 4);
    cubies.push(r1);
    r1 = new cubie(1350, 375, rightColors[5], "right", 5);
    cubies.push(r1);
    r1 = new cubie(1375, 325, rightColors[6], "right", 6);
    cubies.push(r1);
    r1 = new cubie(1375, 350, rightColors[7], "right", 7);
    cubies.push(r1);
    r1 = new cubie(1375, 375, rightColors[8], "right", 8);
    cubies.push(r1);
    
    // bottom face
    r1 = new cubie(1250, 400, bottomColors[0], "bottom", 0);
    cubies.push(r1);
    r1 = new cubie(1250, 425, bottomColors[1], "bottom", 1);
    cubies.push(r1);
    r1 = new cubie(1250, 450, bottomColors[2], "bottom", 2);
    cubies.push(r1);
    r1 = new cubie(1275, 400, bottomColors[3], "bottom", 3);
    cubies.push(r1);
    r1 = new cubie(1275, 425, bottomColors[4], "bottom", 4);
    cubies.push(r1);
    r1 = new cubie(1275, 450, bottomColors[5], "bottom", 5);
    cubies.push(r1);
    r1 = new cubie(1300, 400, bottomColors[6], "bottom", 6);
    cubies.push(r1);
    r1 = new cubie(1300, 425, bottomColors[7], "bottom", 7);
    cubies.push(r1);
    r1 = new cubie(1300, 450, bottomColors[8], "bottom", 8);
    cubies.push(r1);

    // posterior face
    r1 = new cubie(1250, 475, posteriorColors[0], "posterior", 0);
    cubies.push(r1);
    r1 = new cubie(1250, 500, posteriorColors[1], "posterior", 1);
    cubies.push(r1);
    r1 = new cubie(1250, 525, posteriorColors[2], "posterior", 2);
    cubies.push(r1);
    r1 = new cubie(1275, 475, posteriorColors[3], "posterior", 3);
    cubies.push(r1);
    r1 = new cubie(1275, 500, posteriorColors[4], "posterior", 4);
    cubies.push(r1);
    r1 = new cubie(1275, 525, posteriorColors[5], "posterior", 5);
    cubies.push(r1);
    r1 = new cubie(1300, 475, posteriorColors[6], "posterior", 6);
    cubies.push(r1);
    r1 = new cubie(1300, 500, posteriorColors[7], "posterior", 7);
    cubies.push(r1);
    r1 = new cubie(1300, 525, posteriorColors[8], "posterior", 8);
    cubies.push(r1);


    for (let i = 0; i < cubies.length; i++) {
      cubies[i].show();
    }

    // color picker
    // white
    p.fill(255, 255, 255)
    p.rect(1400, 650, 25, 25);
    // blue
    p.fill(0, 0, 255)
    p.rect(1350, 650, 25, 25);
    // red
    p.fill(255, 0, 0)
    p.rect(1300, 650, 25, 25);
    // green
    p.fill(0, 255, 0)
    p.rect(1250, 650, 25, 25);
    // orange
    p.fill(255,140,0)
    p.rect(1200, 650, 25, 25);
    // yellow
    p.fill(255,255,0)
    p.rect(1150, 650, 25, 25);
  
}

export function mousePressed() {
  if(p.mouseX >= 1400 && p.mouseX <= 1425 && p.mouseY >= 650 && p.mouseY <= 675 ||
    p.mouseX >= 1350 && p.mouseX <= 1375 && p.mouseY >= 650 && p.mouseY <= 675 ||
    p.mouseX >= 1300 && p.mouseX <= 1325 && p.mouseY >= 650 && p.mouseY <= 675 ||
    p.mouseX >= 1250 && p.mouseX <= 1275 && p.mouseY >= 650 && p.mouseY <= 675 ||
    p.mouseX >= 1200 && p.mouseX <= 1225 && p.mouseY >= 650 && p.mouseY <= 675 ||
    p.mouseX >= 1150 && p.mouseX <= 1175 && p.mouseY >= 650 && p.mouseY <= 675){

      // pick white
      if(p.mouseX >= 1400 && p.mouseX <= 1425 && p.mouseY >= 650 && p.mouseY <= 675){
        chosenColor = [255, 255, 255];
        console.log("select color");
        return true;
      }
      // pick blue
      if(p.mouseX >= 1350 && p.mouseX <= 1375 && p.mouseY >= 650 && p.mouseY <= 675){
        chosenColor = [0, 0, 255];
        console.log("select color");
        return true;
      }
      // pick red
      if(p.mouseX >= 1300 && p.mouseX <= 1325 && p.mouseY >= 650 && p.mouseY <= 675){
        chosenColor = [255, 0, 0];
        console.log("select color");
        return true;
      }
      // pick green
      if(p.mouseX >= 1250 && p.mouseX <= 1275 && p.mouseY >= 650 && p.mouseY <= 675){
        chosenColor = [0, 255, 0];
        console.log("select color");
        return true;
      }
      // pick orange
      if(p.mouseX >= 1200 && p.mouseX <= 1225 && p.mouseY >= 650 && p.mouseY <= 675){
        chosenColor = [255, 140, 0];
        console.log("select color");
        return true;
      }
      // pick yellow
      if(p.mouseX >= 1150 && p.mouseX <= 1175 && p.mouseY >= 650 && p.mouseY <= 675){
        chosenColor = [255, 255, 0];
        console.log("select color");
        return true;
      }
  }
  else{
    for (let i = 0; i < cubies.length; i++) {
      for (let j = 0; j < 9; j++) {
        if(p.mouseX >= cubies[i].x && p.mouseY >= cubies[i].y && p.mouseX <= cubies[i].x + 25 && p.mouseY <= cubies[i].y + 25 && cubies[i].type == "top" && cubies[i].order == j){
          topColors[j] = chosenColor;
          console.log("select");
        }
      }
      for (let j = 0; j < 9; j++) {
        if(p.mouseX >= cubies[i].x && p.mouseY >= cubies[i].y && p.mouseX <= cubies[i].x + 25 && p.mouseY <= cubies[i].y + 25 && cubies[i].type == "left" && cubies[i].order == j){
          leftColors[j] = chosenColor;
          console.log("select");
        }
      }
      for (let j = 0; j < 9; j++) {
        if(p.mouseX >= cubies[i].x && p.mouseY >= cubies[i].y && p.mouseX <= cubies[i].x + 25 && p.mouseY <= cubies[i].y + 25 && cubies[i].type == "right" && cubies[i].order == j){
          rightColors[j] = chosenColor;
          console.log("select");
        }
      }
      for (let j = 0; j < 9; j++) {
        if(p.mouseX >= cubies[i].x && p.mouseY >= cubies[i].y && p.mouseX <= cubies[i].x + 25 && p.mouseY <= cubies[i].y + 25 && cubies[i].type == "front" && cubies[i].order == j){
          frontColors[j] = chosenColor;
          console.log("select");
        }
      }
      for (let j = 0; j < 9; j++) {
        if(p.mouseX >= cubies[i].x && p.mouseY >= cubies[i].y && p.mouseX <= cubies[i].x + 25 && p.mouseY <= cubies[i].y + 25 && cubies[i].type == "bottom" && cubies[i].order == j){
          bottomColors[j] = chosenColor;
          console.log("select");
        }
      }
      for (let j = 0; j < 9; j++) {
        if(p.mouseX >= cubies[i].x && p.mouseY >= cubies[i].y && p.mouseX <= cubies[i].x + 25 && p.mouseY <= cubies[i].y + 25 && cubies[i].type == "posterior" && cubies[i].order == j){
          posteriorColors[j] = chosenColor;
          console.log("select");
        }
      }
    }
  }
  return false;
}

function checkColor(r, g, b){
  hues[0] = r / 255;
  hues[1] = g / 255;
  hues[2] = b / 255;
  let min = 10;
  let max = -10;
  let redIsMax = false;
  let blueIsMax = false;
  let greenIsMax = false;
  
  for (let i = 0; i < 3; i++) {
    if ( min > hues[i]){
        min = hues[i]
    }
    if ( max < hues[i]){
        max = hues[i]
        if(i == 0){
            redIsMax = true;
        }
        if(i == 1){
            greenIsMax = true;
        }
        if(i == 2){
            blueIsMax = true;
        }
    }
  }

  if(redIsMax){
    hueAngle = (hues[1]-hues[2])/(max-min);
  }
  if(greenIsMax){
    hueAngle = 2.0 + ((hues[2]-hues[0])/(max-min));
  }
  if(blueIsMax){
    hueAngle = 4.0 + ((hues[0]-hues[1])/(max-min));
  }

  if(hueAngle < 0){
    hueAngle = hueAngle + 360;
  }
  else{
    hueAngle = hueAngle * 60;
  }

  if(r >= 100 && b >= 100  && g >= 100 ){
    colorName = "white"
    return "white"
  }

  if(hueAngle >= 0 && hueAngle <= 7){
    colorName = "red"
    return "red"
  }

  if(hueAngle >= 345 && hueAngle <= 360){
    colorName = "red"
    return "red"
  }

  if(hueAngle >= 7 && hueAngle <= 30){
    colorName = "orange"
    return "orange"
  }

  if(hueAngle >= 75 && hueAngle <= 165){
    colorName = "green"
    return "green"
  }

  if(hueAngle >= 165 && hueAngle <= 255){
    colorName = "blue"
    return "blue"
  }

  if(hueAngle >= 30 && hueAngle <= 75){
    colorName = "yellow"
    return "yellow"
  }

  blueIsMax = false;
  redIsMax = false;
  greenIsMax = false;
}