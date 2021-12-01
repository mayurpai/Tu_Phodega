import React from "react";
import Card from "./Card";
import InfoscienceLogo from "../images/Infosciene.jpeg";
import ComputerLogo from "../images/Computer.jpeg";
import ElectronicLogo from "../images/Electronic.jpeg";
import MechanicalLogo from "../images/Mechanical.jpeg";
import CivilLogo from "../images/Civil.jpeg";

function Home() {
  return (
    <>
      <Card
        class="InfoScience"
        name="Information Science"
        link="InformationScience\InfoScience.html"
        image={InfoscienceLogo}
      ></Card>
      <Card
        class="ComputerScience"
        name="Computer Science"
        link="ComputerScience\ComputerScience.html"
        image={ComputerLogo}
      ></Card>
      <Card
        class="Mechanical"
        name="Mechanical"
        link="Mechanical\Mechanical.html"
        image={MechanicalLogo}
      ></Card>
      <Card
        class="Electronic"
        name="Electronic"
        link="Electronic\Electronic.html"
        image={ElectronicLogo}
      ></Card>
      <Card
        class="Civil"
        name="Civil"
        link="Civil/Civil.html"
        image={CivilLogo}
      ></Card>
    </>
  );
}

export default Home;
