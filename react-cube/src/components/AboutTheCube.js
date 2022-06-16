import React from "react";
import "./AboutTheCube.css";

function AboutTheCube() {
  return (
    <div className="container">
      <section className="one">
        <div className="rubik-erno-photo">
          <img
            src={require("../assets/images/Rubik-Erno.jpg")}
            alt="Rubik Ernő"
            style={{
              width: "15vw",
              height: "55vh",
            }}
          />
        </div>
        <div className="text-rubik-cube">
          <h1>Shortly about the Rubik's Cube</h1>
          <br />
          <br />
          <p>
            The cube was created by Ernő Rubik, a professor, architect and
            sculptor, in 19744 and patented in 1975. The purpose of inventing
            the cube is to illustrate spatial movements for students. The
            designer originally devised a 2x2x2 cube, but its construction was
            fraught with serious problems, as in the planned rubber ring
            solution the rubber rings tore quickly, were not durable enough, and
            in the magnet the cube fell apart extremely easily due to its weak
            structure. After unsuccessful attempts, he decided to create a 3x3x3
            cube with all its elements carved together so that they hold
            together in shape and each side can be rotated to the center of the
            page. around. Because of the better illustration, he painted his
            pages in different colors. To date, the most commonly used colors
            for the sides of a cube are yellow, blue, red, green, orange, and
            white, as the colors on the parallel sides are different in yellow,
            making them easier to distinguish. The cube has never been accepted
            as an educational aid, but it is still hugely popular today.
          </p>
          <br />
        </div>
        <div className="rubik-cube-photo">
          <img
            src={require("../assets/images/cubePicture.png")}
            alt=""
            style={{
              width: "22vw",
              height: "60vh",
            }}
          />
        </div>
      </section>
      <section className="two">
        <div className="cube-faces-photo">
          <img
            src={require("../assets/images/cubeFaces.png")}
            alt=""
            style={{
              width: "40vw",
              height: "80vh",
            }}
          />
        </div>
        <div className="text-rubik-cube">
          <h1>Faces of the Rubik's Cube</h1>
          <br />
          <br />
          <p>
            The Rubik's Cube has six faces in total. Every face has nine colored tiles in a 3x3 arrangement. Every face is named by it's position in a given orientation. The most common 
            orientation is Green being the front face and White being the up face. From here we can conclude the other face's position: Orange - Left, Red - Right, Blue - Back and Yellow - Down. For simplicity we use the starting letter of each 
            position as the face's name. You can see in the figure on the left the faces and their names.
          </p>
          <br />
        </div>
      </section>
      <section className="three">
      <div className="text-rubik-cube-notations">
          <h1>Cube notations</h1>
          <br />
          <br />
          <p>
            We use notations for moving each face on the Rubik's Cube. We separate the movements into two groups: clockwise and counter-clockwise ones.
            The movements name comes from the side that we're moving, plus a ' symbol if it's a counter-clockwise movement. For a 180 degree turn, we usually use the 
            cube face name followed by a 2 notation. You can see the full list of notations on the right.
          </p>
          <br />
        </div>
        <div className="rubik-cube-notations">
          <img src={require("../assets/images/notations.png")} alt=""
          style={{
            width: "50vw",
            height: "70vh",
          }} />
        </div>
      </section>
    </div>
  );
}

export default AboutTheCube;
