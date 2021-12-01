import "../styles/Semester.css";
import React from "react";

import { Link } from "react-router-dom";

const Semester = (props) => {
  return (
    <div class="Semester">
      <div class="Count">
        <Link to={props.link}>
          <button id={props.id}>
            <p>{props.semester}</p>
          </button>
        </Link>
      </div>
      {/* <div class="Count">
        <Link to="../InformationScience/forthSemIS.html">
          <button id="two">
            <p>Forth Semester</p>
          </button>
        </Link>
      </div>
      <div class="Count">
        <Link to="../InformationScience/fifthSemIS.html">
          <button id="three">
            <p>Fifth Semester</p>
          </button>
        </Link>
      </div>
      <div class="Count">
        <Link to="../Error">
          <button id="four">
            <p>Sixth Semester</p>
          </button>
        </Link>
      </div>
      <div class="Count">
        <Link to="../Error">
          <button id="five">
            <p>Seventh Semester</p>
          </button>
        </Link>
      </div>
      <div class="Count">
        <Link to="../Error">
          <button id="six">
            <p>Eighth Semester</p>
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Semester;
