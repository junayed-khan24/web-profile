// Hero.jsx
import { useState, useEffect } from "react";
import img from "../../src/assets/junayed.png";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  const texts = [

    "Front-End Developer.",
    "MERN Stack Developer",
    "Full Stack Developer.",
    "Web Designer.",
    "React Developer.",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

 
  const TYPING_DURATION = 1000; // ms

  useEffect(() => {
    const currentText = texts[textIndex];
    const totalChars = currentText.length;

   
    const charSpeed = TYPING_DURATION / totalChars;

    let timeout;

    if (!isDeleting && charIndex < totalChars) {
      
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, charSpeed);
    } else if (!isDeleting && charIndex === totalChars) {
   
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && charIndex > 0) {
   
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, charSpeed / 2); 
    } else if (isDeleting && charIndex === 0) {
 
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);
  return (
    <section id="home" className="min-h-screen bg-[#050B14] pt-20  md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* GRID — md responsive now fixed */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="text-xl text-cyan-400 mb-2 text">Welcome to my world</h3>
            <h1 className="text-3xl  sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              I'm Junayed Khan
            </h1>

            <div className=" text-2xl text-left ml-12 md:ml-0  sm:text-4xl lg:text-5xl xl:text-5xl  bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-12 font-bold ">
              <span> <span className="text-white">A</span> {displayText}&nbsp;</span>
            </div>

            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              I create beautiful and functional web experiences. Clean design and
              excellent user experience are the core focus of my work.
            </p>

            <div className="mb-2 flex justify-center md:justify-start">
              <SocialMedia />
            </div>
            {/* 
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#portfolio"
                className="scroll-smooth bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="border-2 border-rose-500 text-rose-500 hover:bg-rose-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div> */}
          </div>

          {/* RIGHT SIDE */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="
            hover:rotate-12
            transition duration-300
            w-56 h-56
            sm:w-76 sm:h-76
            md:w-80 md:h-80
            lg:w-106 lg:h-106
            mx-auto border-8 border-cyan-500/20 rounded-2xl
            flex items-center justify-center shadow-xl overflow-hidden
          ">
                <img
                  src={img}
                  alt="Junayed Khan  Wev develper"
                  className=" object-cover w-full h-full "
                />
              </div>

              <div className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 w-14 h-14 md:w-20 md:h-20 bg-cyan-300 rounded-full opacity-20 animate-pulse"></div>

              <div
                className="absolute -bottom-5 -left-3 lg:-bottom-5 lg:-left-5 w-16 h-16 md:w-24 md:h-24 bg-cyan-400 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default Hero;
