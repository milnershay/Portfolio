import React, { useState, useEffect } from "react";

const About = () => {
  const jobTitles = ["Software Engineer", "Full Stack Developer", "AI Enthusiast", "Backend Developer", "Games Developer"];
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
    }, 100); // Duration for each letter to appear/disappear

    return () => clearInterval(interval);
  }, [charIndex, titleIndex, reverseDisplayText]);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey! I'm Shay.
            <br className="hidden lg:inline-block" />
            {" "}I am <span className="text-green-500">{displayText}</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Currently a 4th year student in BGU, I am very passionate about using technology to solve complex problems 
            and improve people’s lives. Always enjoyed a good challenge, solving puzzles and all forms of art.
            I am looking for a role in which I can continue to learn and evolve.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-12 w-5/6">
          <img 
            className="object-cover object-center rounded w-full"
            alt="hero"
            src= {require("../images/coding.png")}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
