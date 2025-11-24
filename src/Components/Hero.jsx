// Hero.jsx
import { useState, useEffect } from "react";
import img from '../../src/assets/junayed.png'




const Hero = () => {
  const texts = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Code Craftsman'];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === texts[textIndex].length) {
      typeSpeed = 2000; // Wait before deleting
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      typeSpeed = 500; // Wait before typing next text
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
    <section
      id="home"
      className="min-h-full bg-black/100  pt-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="fade-in order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl text-left lg:text-5xl xl:text-6xl font-bold text-gray-700  mb-4 lg:mb-6">
              I'm <span className="text-rose-500 ">Junayed Khan</span>
            </h1>
           <div className="text-xl sm:text-2xl text-left lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8">
             <span className="typing-animation">{displayText}&nbsp;</span>
          </div>
            <p className="text-base md:text-left lg:text-lg text-gray-600  mb-6 lg:mb-8 leading-relaxed">
              I craft beautiful, functional web experiences that solve real problems. 
              Passionate about clean code, user experience, and bringing ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="bg-rose-500 hover:bg-rose-600 text-white px-6 lg:px-8 py-3 rounded-lg font-medium transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-rose-500 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white px-6 lg:px-8 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="fade-in order-1 lg:order-2">
            <div className="relative">
                <img src="" alt="" />
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto  rounded-full flex items-center justify-center shadow-2xl ">
                <img src={img} alt="img" className="rounded-2xl" />
              </div>
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-rose-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-20 h-20 lg:w-32 lg:h-32 bg-rose-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
