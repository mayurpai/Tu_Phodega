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
        <Route exact path="/Tu_Phodega" element={<Home />} />
        <Route exact path="/Tu_Phodega/Error" element={<Error />} />
        <Route exact path="/Tu_Phodega/Semester" element={<Semester />} />
      </Routes>
    </div>
  );
}

export default App;
