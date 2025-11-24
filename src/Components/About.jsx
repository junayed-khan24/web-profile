import React from "react";
import { motion } from "framer-motion";
import animate from '../../src/assets/Developer (1).json'
import Lottie from "lottie-react";

const About = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side - Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2  rounded-2xl blur opacity-30"></div>
           <div className="relative  object-cover rounded-2xl shadow-accent ">
            <Lottie animationData={animate} loop={true}></Lottie>
           </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-600 mb-4 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm <span className="font-semibold text-gray-600">Junayed</span>, a passionate{" "}
            <span className="text-rose-600 font-semibold">Full Stack Developer</span> 
              dedicated to crafting elegant and high-performing digital experiences.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            My goal is to build solutions that are not just functional but delightful.
            I enjoy transforming complex ideas into intuitive interfaces and efficient systems.
          </p>

          {/* Animated Skill Bars */}
          <div className="space-y-5 mb-10">
            {[
              { name: "React.js", level: 90 },
              { name: "Tailwind CSS", level: 85 },
              { name: "Node.js", level: 75 },
              { name: "UI/UX Design", level: 80 },
            ].map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="h-2.5 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-rose-700 to-rose-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 py-3 border border-rose-500 text-rose-600 rounded-lg hover:bg-indigo-50 transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      
    </section>
  );
};

export default About;
