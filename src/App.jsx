import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimanials";

function App() {
  return (
    <div>
      <React.Fragment>
        <Nav />
        <Header />
        <Highlights />
        <Testimonials />
        <Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
