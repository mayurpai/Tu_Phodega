import "../styles/Card.css";
import InfoscienceLogo from "../images/Infosciene.jpeg";
import ComputerLogo from "../images/Computer.jpeg";
import ElectronicLogo from "../images/Electronic.jpeg";
import MechanicalLogo from "../images/Mechanical.jpeg";
import CivilLogo from "../images/Civil.jpeg";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [state, setstate] = useState([
    {
      class: "InfoScience",
      link: "/Tu_Phodega/Semester",
      name: "Information Science",
      image: InfoscienceLogo,
      id: 1,
    },
    {
      class: "ComputerScience",
      link: "/Tu_Phodega/Semester",
      name: "Computer Science",
      image: ComputerLogo,
      id: 2,
    },
    {
      class: "Mechanical",
      link: "/Tu_Phodega/Semester",
      name: "Mechanical",
      image: MechanicalLogo,
      id: 3,
    },
    {
      class: "Electronic",
      link: "/Tu_Phodega/Semester",
      name: "Electronic",
      image: ElectronicLogo,
      id: 4,
    },
    {
      class: "Civil",
      link: "/Tu_Phodega/Semester",
      name: "Civil",
      image: CivilLogo,
      id: 5,
    },
  ]);
  return (
    <div className="Card">
      <div className="CompDiv">
        {state.map((itr) => (
          <div className={itr.class}>
            <Link to={itr.link} Title={itr.name}>
              <h1>{itr.name}</h1>
              <img className="logoImages" src={itr.image} alt={itr.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
