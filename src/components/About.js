import React, { useState, useEffect } from "react";

const About = () => {
  const jobTitles = ["Software Engineer", "System Builder", "Backend Developer", "AI Innovator"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [reverseDisplayText, setReverseDisplayText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!reverseDisplayText && charIndex < jobTitles[titleIndex].length) {
        setDisplayText((prevText) => prevText + jobTitles[titleIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else if (!reverseDisplayText && charIndex === jobTitles[titleIndex].length) {
        setReverseDisplayText(true);
      } else if (reverseDisplayText && charIndex > 0) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCharIndex((prevIndex) => prevIndex - 1);
      } else {
        setReverseDisplayText(false);
        setCharIndex(0);
        setTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [charIndex, titleIndex, reverseDisplayText]);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-heading sm:text-4xl text-3xl mb-4 font-medium text-light-text">
            Hi, I'm Shay Milner.
            <br className="hidden lg:inline-block" />I am a{" "}
            <span className="text-primary">{displayText}</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a software engineer specializing in building robust backend systems that solve complex business problems. As part of my role at <a href="https://summa-ai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SUMMA</a>, I build professional software for Big Five accounting firms, architecting and developing high-impact tax automation platforms. My work involves transforming intricate Excel-based workflows into scalable SaaS solutions using <strong>.NET 8</strong>, <strong>C#</strong>, and <strong>EF Core</strong> to ensure data integrity and performance.
            <br /><br />
            Beyond my professional role, I am driven by a passion for building intelligent systems. This is reflected in my personal projects, such as <strong>Vibe2D</strong>, an AI agent designed to auto-generate 2D games in Godot, and a large-scale ETL pipeline for parsing U.S. congressional financial data. As a product-minded engineer, I bridge the gap between technical execution and strategic vision, consistently delivering solutions that are not only well-engineered but also impactful.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
              Work With Me
            </a>
            <a href="#projects" className="ml-4 inline-flex text-primary bg-transparent border border-primary py-2 px-6 focus:outline-none hover:bg-primary hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg  md:w-18 w-2/6">
          <img 
            className="object-cover object-center rounded w-full"
            alt="hero"
            src= {require("../images/IMG_2152.jpg")}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
