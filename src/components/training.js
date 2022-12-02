import React from "react";
import "./trainingStyles.css";

import levistute from "../assets/levistute.jpg";
import astronaut from "../assets/atronaut.jpg";
import { Link } from "react-router-dom";

const training = () => {
  return (
    <div>
      <div className="training">
        <div className="left">
          <h1>Training</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img src={levistute} className="img" alt="" />
            </div>
            <div className="image-stack bottom">
              <img src={astronaut} className="img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default training;
