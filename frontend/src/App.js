import React from "react";
import { Header, About, Work, Skills, Testimonial, Footer } from "./containers";
import "./App.scss";
import { Navbar } from "./components";

const App = () => (
  <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
