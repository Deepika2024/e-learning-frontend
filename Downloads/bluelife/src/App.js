import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ComparisonTable from "./components/ComparisonTable";
import About from "./components/About";
import Partner from "./components/Partner";
import Products from "./components/Products";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <ComparisonTable />
      <Partner />
      <Products/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87933.12916732147!2d82.18798407094911!3d16.9921088708875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382b123a407b3f%3A0x6ae84f492de00aa9!2sTrinity%20Hospitals!5e0!3m2!1sen!2sin!4v1734706386224!5m2!1sen!2sin" width="900" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  );
}

export default App;
