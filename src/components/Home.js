import React from "react";
import Card from "./Card";
import InfoscienceLogo from "../images/Infosciene.jpeg";
import ComputerLogo from "../images/Computer.jpeg";
import ElectronicLogo from "../images/Electronic.jpeg";
import MechanicalLogo from "../images/Mechanical.jpeg";
import CivilLogo from "../images/Civil.jpeg";
import CopyrightNote from "./CopyrightNote";

function Home() {
  return (
    <>
      <Card
        class="ComputerScience"
        name="Computer Science"
        link="/Semester"
        image={ComputerLogo}
      ></Card>
      <Card
        class="Mechanical"
        name="Mechanical"
        link="/Semester"
        image={MechanicalLogo}
      ></Card>
      <Card
        class="Electronic"
        name="Electronic"
        link="/Semester"
        image={ElectronicLogo}
      ></Card>
      <Card
        class="Civil"
        name="Civil"
        link="/Semester"
        image={CivilLogo}
      ></Card>
      <Card
        class="InfoScience"
        name="Information Science"
        link="/Semester"
        image={InfoscienceLogo}
      ></Card>
      <CopyrightNote></CopyrightNote>
    </>
  );
}

export default Home;
