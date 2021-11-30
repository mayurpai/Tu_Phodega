import "../styles/Error.css";
import ErrorImage from "../images/Error.png"

import React, { Component } from "react";
import Footer from "./Footer";

class Error extends Component {
  render() {
    return (
      <div>
        <img src={ErrorImage} alt="Error" />
        <div className="text">
          <h1>ENGINEER</h1>
          <h4> IN THE MAKING</h4>
          <a href="index.html">
            {" "}
            <button id="one">
              <p>Back To Homepage</p>
            </button>
          </a>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Error;
