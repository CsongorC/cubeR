import colorCube from "./colorCube";

export default class cubeColors {
  constructor() {
    this.red = new colorCube();
    this.white = new colorCube();
    this.yellow = new colorCube();
    this.blue = new colorCube();
    this.orange = new colorCube();
    this.green = new colorCube();
  }

  printCubeValues() {
    console.log("Red: ", this.red);
    console.log("Blue: ", this.blue);
    console.log("Green: ", this.green);
    console.log("Orange: ", this.orange);
    console.log("White: ", this.white);
    console.log("Yellow: ", this.yellow);
  }

  reset() {
    this.white.reset();
    this.blue.reset();
    this.green.reset();
    this.orange.reset();
    this.yellow.reset();
    this.red.reset();
  }

  decreaseCenter(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      return this.red.decreaseCenter();
    }

    if (r == 0 && g == 255 && b == 0) {
      return this.green.decreaseCenter();
    }

    if (r == 0 && g == 0 && b == 255) {
      return this.blue.decreaseCenter();
    }

    if (r == 255 && g == 255 && b == 255) {
      return this.white.decreaseCenter();
    }

    if (r == 255 && g == 140 && b == 0) {
      return this.orange.decreaseCenter();
    }

    if (r == 255 && g == 255 && b == 0) {
      return this.yellow.decreaseCenter();
    }
  }

  decreaseCorner(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      return this.red.decreaseCorner();
    }

    if (r == 0 && g == 255 && b == 0) {
      return this.green.decreaseCorner();
    }

    if (r == 0 && g == 0 && b == 255) {
      return this.blue.decreaseCorner();
    }

    if (r == 255 && g == 255 && b == 255) {
      return this.white.decreaseCorner();
    }

    if (r == 255 && g == 140 && b == 0) {
      return this.orange.decreaseCorner();
    }

    if (r == 255 && g == 255 && b == 0) {
      return this.yellow.decreaseCorner();
    }
  }

  decreaseEdge(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      return this.red.decreaseEdge();
    }

    if (r == 0 && g == 255 && b == 0) {
      return this.green.decreaseEdge();
    }

    if (r == 0 && g == 0 && b == 255) {
      return this.blue.decreaseEdge();
    }

    if (r == 255 && g == 255 && b == 255) {
      return this.white.decreaseEdge();
    }

    if (r == 255 && g == 140 && b == 0) {
      return this.orange.decreaseEdge();
    }

    if (r == 255 && g == 255 && b == 0) {
      return this.yellow.decreaseEdge();
    }
  }

  increaseCenter(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      return this.red.increaseCenter();
    }

    if (r == 0 && g == 255 && b == 0) {
      return this.green.increaseCenter();
    }

    if (r == 0 && g == 0 && b == 255) {
      return this.blue.increaseCenter();
    }

    if (r == 255 && g == 255 && b == 255) {
      return this.white.increaseCenter();
    }

    if (r == 255 && g == 140 && b == 0) {
      return this.orange.increaseCenter();
    }

    if (r == 255 && g == 255 && b == 0) {
      return this.yellow.increaseCenter();
    }
  }

  increaseCorner(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      return this.red.increaseCorner();
    }

    if (r == 0 && g == 255 && b == 0) {
      return this.green.increaseCorner();
    }

    if (r == 0 && g == 0 && b == 255) {
      return this.blue.increaseCorner();
    }

    if (r == 255 && g == 255 && b == 255) {
      return this.white.increaseCorner();
    }

    if (r == 255 && g == 140 && b == 0) {
      return this.orange.increaseCorner();
    }

    if (r == 255 && g == 255 && b == 0) {
      return this.yellow.increaseCorner();
    }
  }

  increaseEdge(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      return this.red.increaseEdge();
    }

    if (r == 0 && g == 255 && b == 0) {
      return this.green.increaseEdge();
    }

    if (r == 0 && g == 0 && b == 255) {
      return this.blue.increaseEdge();
    }

    if (r == 255 && g == 255 && b == 255) {
      return this.white.increaseEdge();
    }

    if (r == 255 && g == 140 && b == 0) {
      return this.orange.increaseEdge();
    }

    if (r == 255 && g == 255 && b == 0) {
      return this.yellow.increaseEdge();
    }
  }

  doIncreaseCenter(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      this.red.doIncreaseCenter();
    }

    if (r == 0 && g == 255 && b == 0) {
      this.green.doIncreaseCenter();
    }

    if (r == 0 && g == 0 && b == 255) {
      this.blue.doIncreaseCenter();
    }

    if (r == 255 && g == 255 && b == 255) {
      this.white.doIncreaseCenter();
    }

    if (r == 255 && g == 140 && b == 0) {
      this.orange.doIncreaseCenter();
    }

    if (r == 255 && g == 255 && b == 0) {
      this.yellow.doIncreaseCenter();
    }
  }

  doIncreaseCorner(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      this.red.doIncreaseCorner();
    }

    if (r == 0 && g == 255 && b == 0) {
      this.green.doIncreaseCorner();
    }

    if (r == 0 && g == 0 && b == 255) {
      this.blue.doIncreaseCorner();
    }

    if (r == 255 && g == 255 && b == 255) {
      this.white.doIncreaseCorner();
    }

    if (r == 255 && g == 140 && b == 0) {
      this.orange.doIncreaseCorner();
    }

    if (r == 255 && g == 255 && b == 0) {
      this.yellow.doIncreaseCorner();
    }
  }

  doIncreaseEdge(r, g, b) {
    if (r == 255 && g == 0 && b == 0) {
      this.red.doIncreaseEdge();
    }

    if (r == 0 && g == 255 && b == 0) {
      this.green.doIncreaseEdge();
    }

    if (r == 0 && g == 0 && b == 255) {
      this.blue.doIncreaseEdge();
    }

    if (r == 255 && g == 255 && b == 255) {
      this.white.doIncreaseEdge();
    }

    if (r == 255 && g == 140 && b == 0) {
      this.orange.doIncreaseEdge();
    }

    if (r == 255 && g == 255 && b == 0) {
      this.yellow.doIncreaseEdge();
    }
  }
}
