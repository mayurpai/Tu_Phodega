import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Semester from "./components/Semester";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Error" element={<Error />} />
        <Route
          exact
          path="/Semester"
          element={
            ((<Semester link="/Error" id="1" semester="Third Semester" />),
            (<Semester link="/Error" id="2" semester="Forth Semester" />))
          }
        />
      </Routes>
    </div>
  );
}

export default App;
