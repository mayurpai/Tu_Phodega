import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CopyrightNote from "./components/CopyrightNote";
import Error from "./components/Error";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      <Footer></Footer>
      <CopyrightNote></CopyrightNote>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Error" element={<Error />} />
      </Routes>
      {/* <Error></Error> */}
    </div>
  );
}

export default App;
