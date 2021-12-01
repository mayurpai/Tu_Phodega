import "../styles/Card.css";

import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="CompDiv">
        <div className={props.class}>
          <Link to={props.link} Title={props.name}>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
