import "../styles/Error.css";
import ErrorImage from "../images/Error.png";

import React, { Component } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <>
        <img src={ErrorImage} alt="Error" />
        <div className="text">
          <h1>ENGINEER</h1>
          <h4> IN THE MAKING</h4>
          <Link to="/">
            <button id="one">
              <p>Back To Homepage</p>
            </button>
          </Link>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default Error;
