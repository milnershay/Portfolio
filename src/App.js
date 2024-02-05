import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}

export default App;
