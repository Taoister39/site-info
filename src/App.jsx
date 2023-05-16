import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "animate.css";

import NavBar from "@/components/NavBar/index.jsx";
import Banner from "@/components/Banner/index.jsx";
import Skills from "@/components/Skills/index";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useRef, useEffect } from "react";
import { ScrollSpy } from "bootstrap";

function App() {
  const appRef = useRef(undefined);

  useEffect(() => {
    // const scrollSpy =
    new ScrollSpy(appRef.current, {
      target: "#navbar",
    });
  }, []);

  return (
    <div ref={appRef}>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
