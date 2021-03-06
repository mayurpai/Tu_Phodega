import "../styles/Semester.css";
import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

const Semester = () => {
  const [state, setstate] = useState([
    { link: "/Tu_Phodega/Error", semester: "Third Semester", id: 1 },
    { link: "/Tu_Phodega/Error", semester: "Forth Semester", id: 2 },
    { link: "/Tu_Phodega/Error", semester: "Fifth Semester", id: 3 },
    { link: "/Tu_Phodega/Error", semester: "Sixth Semester", id: 4 },
    { link: "/Tu_Phodega/Error", semester: "Seventh Semester", id: 5 },
    { link: "/Tu_Phodega/Error", semester: "Eighth Semester", id: 6 },
  ]);
  return (
    <div class="Semester">
      {state.map((itr) => (
        <div class="Count">
          <Link to={itr.link}>
            <button id={itr.id}>
              <p>{itr.semester}</p>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Semester;
