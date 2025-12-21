import React from "react";
import { motion } from "framer-motion";
import animate from "../../src/assets/Developer (1).json";
import Lottie from "lottie-react";
import MySkill from "./MySkill";

const About = () => {
  return (
    <section className="min-h-screen bg-[#050B14] flex items-center justify-center md:-mt-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        {/* Left Side - Lottie Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <div className="absolute -inset-2 rounded-2xl blur-lg opacity-30 "></div>
            <div className="relative rounded-2xl shadow-accent overflow-hidden">
              <Lottie animationData={animate} loop={true} />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-400 mb-4 leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              Me
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            I'm <span className="font-semibold text-gray-500">Junayed</span>, a
            passionate{" "}
            <span className="text-rose-500 font-semibold">
              Full Stack Developer
            </span>{" "}
            dedicated to crafting elegant and high-performing digital solutions.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            I love transforming complex ideas into intuitive interfaces and
            efficient systems that deliver meaningful user experiences.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-2">
            Skilled in React.js, Next.js, Node.js, MongoDB, and modern
            full-stack engineering — creating scalable and beautifully crafted
            web applications.
          </p>

          {/* Skills Marquee */}
          <div className="w-10/12 md:w-11/12 mx-auto md:mx-0 mt-8 md:mt-4 ">
            <MySkill />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
