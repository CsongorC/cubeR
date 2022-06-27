import { p } from "./Sketch";

export class cubie3D {
  constructor(x, y, z, size, colors) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.colors = colors;
  }

  draw() {
    let drawX, drawY, drawZ;

    // up face
    drawX = this.x;
    drawY = this.y + (this.size / 2) * -1;
    drawZ = this.z;

    p.push();
    p.translate(drawX, drawY, drawZ);
    p.stroke(0);
    p.strokeWeight(1.5);
    p.fill(this.colors[4]);
    p.box(this.size, 1, this.size);
    p.pop();

    // front face
    drawX = this.x;
    drawY = this.y;
    drawZ = this.z + this.size / 2;

    p.push();
    p.translate(drawX, drawY, drawZ);
    p.stroke(0);
    p.strokeWeight(1.5);
    p.fill(this.colors[0]);
    p.box(this.size, this.size, 1);
    p.pop();

    // left face
    drawX = this.x + (this.size / 2) * -1;
    drawY = this.y;
    drawZ = this.z;

    p.push();
    p.translate(drawX, drawY, drawZ);
    p.stroke(0);
    p.strokeWeight(1.5);
    p.fill(this.colors[3]);
    p.box(1, this.size, this.size);
    p.pop();

    // right face
    drawX = this.x + this.size / 2;
    drawY = this.y;
    drawZ = this.z;

    p.push();
    p.translate(drawX, drawY, drawZ);
    p.stroke(0);
    p.strokeWeight(1.5);
    p.fill(this.colors[2]);
    p.box(1, this.size, this.size);
    p.pop();

    // back face
    drawX = this.x;
    drawY = this.y;
    drawZ = this.z + (this.size / 2) * -1;
    
    p.push();
    p.translate(drawX, drawY, drawZ);
    p.stroke(0);
    p.strokeWeight(2);
    p.fill(this.colors[1]);
    p.box(this.size, this.size, 1);
    p.pop();

    // down face
    drawX = this.x;
    drawY = this.y + this.size / 2;
    drawZ = this.z;

    p.push();
    p.translate(drawX, drawY, drawZ);
    p.stroke(0);
    p.strokeWeight(1.5);
    p.fill(this.colors[5]);
    p.box(this.size, 1, this.size);
    p.pop();
  }

  updateFaceColor(rotationAxis, isClockwise) {
    const frontFace = 0;
    const backFace = 1;
    const rightFace = 2;
    const leftFace = 3;
    const upFace = 4;
    const downFace = 5;

    let colorsNew = [];
    if (rotationAxis == "z") {
      if (isClockwise > 0) {
        colorsNew.push(this.colors[frontFace]);
        colorsNew.push(this.colors[backFace]);
        colorsNew.push(this.colors[upFace]);
        colorsNew.push(this.colors[downFace]);
        colorsNew.push(this.colors[leftFace]);
        colorsNew.push(this.colors[rightFace]);
        this.colors = colorsNew;
      } else {
        colorsNew.push(this.colors[frontFace]);
        colorsNew.push(this.colors[backFace]);
        colorsNew.push(this.colors[downFace]);
        colorsNew.push(this.colors[upFace]);
        colorsNew.push(this.colors[rightFace]);
        colorsNew.push(this.colors[leftFace]);
        this.colors = colorsNew;
      }
    } else if (rotationAxis == "x") {
      if (isClockwise > 0) {
        colorsNew.push(this.colors[downFace]);
        colorsNew.push(this.colors[upFace]);
        colorsNew.push(this.colors[rightFace]);
        colorsNew.push(this.colors[leftFace]);
        colorsNew.push(this.colors[frontFace]);
        colorsNew.push(this.colors[backFace]);
        this.colors = colorsNew;
      } else {
        colorsNew.push(this.colors[upFace]);
        colorsNew.push(this.colors[downFace]);
        colorsNew.push(this.colors[rightFace]);
        colorsNew.push(this.colors[leftFace]);
        colorsNew.push(this.colors[backFace]);
        colorsNew.push(this.colors[frontFace]);
        this.colors = colorsNew;
      }
    } else if (rotationAxis == "y") {
      if (isClockwise > 0) {
        colorsNew.push(this.colors[leftFace]);
        colorsNew.push(this.colors[rightFace]);
        colorsNew.push(this.colors[frontFace]);
        colorsNew.push(this.colors[backFace]);
        colorsNew.push(this.colors[upFace]);
        colorsNew.push(this.colors[downFace]);
        this.colors = colorsNew;
      } else {
        colorsNew.push(this.colors[rightFace]);
        colorsNew.push(this.colors[leftFace]);
        colorsNew.push(this.colors[backFace]);
        colorsNew.push(this.colors[frontFace]);
        colorsNew.push(this.colors[upFace]);
        colorsNew.push(this.colors[downFace]);
        this.colors = colorsNew;
      }
    }
  }
}
