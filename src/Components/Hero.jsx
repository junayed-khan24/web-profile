// Hero.jsx
import { useState, useEffect } from "react";
import img from "../../src/assets/junayed.png";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  const texts = [
    "Full Stack Developer.",
    "Front-End Developer..",
    "Mern Stack Developer.",
    "React Developer",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let typeSpeed = isDeleting ? 100 : 300;

    if (!isDeleting && charIndex === texts[textIndex].length) {
      typeSpeed = 1000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      typeSpeed = 500;
    }

    const timeout = setTimeout(() => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section id="home" className="min-h-screen bg-[#0f1115] pt-10 mt-6 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* GRID — md responsive now fixed */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="order-2 md:order-1 text-center md:text-left">
             <h3 className="text-xl text-gray-400 mb-2 text">Welcome to my world</h3>
            <h1 className="text-3xl  sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-300 mb-4">
              I'm Junayed Khan
            </h1>

            <div className="text-left ml-16 text-3xl  sm:text-4xl lg:text-5xl xl:text-5xl text-rose-500 mb-12 font-bold h-10">
              <span>A {displayText}&nbsp;</span>
            </div>

            <p className="text-base sm:text-lg text-gray-500 mb-6 leading-relaxed">
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
            sm:w-72 sm:h-72
            md:w-80 md:h-80
            lg:w-96 lg:h-96
            mx-auto border-4 border-rose-600  rounded-full
            flex items-center justify-center shadow-xl overflow-hidden
          ">
                <img
                  src={img}
                  alt="Junayed Khan  Wev develper"
                  className="rounded-2xl object-cover w-full h-full "
                />
              </div>

              <div className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 w-14 h-14 md:w-20 md:h-20 bg-rose-300 rounded-full opacity-20 animate-pulse"></div>

              <div
                className="absolute -bottom-5 -left-3 lg:-bottom-5 lg:-left-5 w-16 h-16 md:w-24 md:h-24 bg-rose-400 rounded-full opacity-20 animate-pulse"
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
