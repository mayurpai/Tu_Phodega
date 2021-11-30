import "../styles/Card.css";

import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Switch } from "react-dom";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="CompDiv">
        <div className={props.class}>
          <Router>
            <Switch>
              <Route path="/Error" component={Error} exact />
              <Link to="/Error" Title={props.name}>
                <h1>{props.name}</h1>
                <img src={props.image} alt={props.name} />
              </Link>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Card;
