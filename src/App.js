import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import InfoscienceLogo from "./images/Infosciene.jpeg";
import ComputerLogo from "./images/Computer.jpeg";
import ElectronicLogo from "./images/Electronic.jpeg";
import MechanicalLogo from "./images/Mechanical.jpeg";
import CivilLogo from "./images/Civil.jpeg";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header></Header>
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
        link="Civil\Civil.html"
        image={CivilLogo}
      ></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
