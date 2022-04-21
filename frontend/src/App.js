import React from "react";
import { Header, About, Work, Skills, Testimonial, Footer } from "./containers";

import "./App.scss";

const App = () => (
  <div className='app'>
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
