import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import WorkExperience from "./sections/work-experience/WorkExperience";
import Portfolio from "./sections/portfolio/Portfolio";
import About from "./sections/about/About";
import Footer from "./sections/footer/Footer";
import Contact from "./sections/contact/Contact";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Modal/> */}
      {/* <FloatingNav /> */}
    </main>
  );
};

export default App;
