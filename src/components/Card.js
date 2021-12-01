import "../styles/Card.css";

import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="CompDiv">
        <div className={props.class}>
          <a href="/Error" Title={props.name}>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
