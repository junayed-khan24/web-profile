import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  const portfolioData = [
  {
    image: "../../src/assets/Cat.JPG",
    title: "Creative Design & Services for Pet Shop",
    category: "Pets Shop",
    views: 501,
    links: [
      { label: "Live Demo", url: "https://junayed-khan24.github.io/assignment-3--0001/" },
      { label: "GitHub", url: "https://github.com/junayed-khan24/assignment-3--0001" }
    ],
  },
  {
    image: "../../src/assets/Capture.JPG",
    title: "Modern Web Design for Bangladesh 2.0",
    category: "Bangladesh 2.0",
    views: 780,
    links: [
      { label: "Live Demo", url: "https://junayed-khan24.github.io/Assingment-1/" },
      { label: "GitHub", url: "https://github.com/junayed-khan24/Assingment-1" }
    ],
  },
  {
    image: "../../src/assets/tee.JPG",
    title: "Creative UI & Branding for Tea House",
    category: "Tea House",
    views: 320,
    links: [
      { label: "Live Demo", url: "https://junayed-khan24.github.io/tea-house-with-tailwind/" },
      { label: "GitHub", url: "https://github.com/junayed-khan24/tea-house-with-tailwind" }
    ],
  },
  {
    image: "../../src/assets/kids.JPG",
    title: "Educational Website Design for Kids School",
    category: "Kids School",
    views: 265,
    links: [
      { label: "Live Demo", url: "https://junayed-khan24.github.io/kids-school/" },
      { label: "GitHub", url: "https://github.com/junayed-khan24/kids-school" },
    ],
  },
  {
    image: "../../src/assets/5ef32588ca14e2124d041f32a4e978c2.jpg",
    title: "Technology Focused UI & Services Platform",
    category: "DevBoard",
    views: 380,
    links: [
      { label: "Live Demo", url: "https://junayed-khan24.github.io/assinmentt-5/" },
      { label: "GitHub", url: "https://github.com/junayed-khan24/assinmentt-5" }
    ],
  },
  {
    image: "../../src/assets/5ef32588ca14e2124d041f32a4e978c2.jpg",
    title: "Application Design & Development for DevBoard",
    category: "DevBoard",
    views: 450,
    links: [
      { label: "Live Demo", url: "https://junayed-khan24.github.io/assinmentt-5/" },
      { label: "GitHub", url: "https://github.com/junayed-khan24/assinmentt-5" }
    ],
  },
];


  return (
    <div className="py-16 px-4 md:px-8 lg:px-20 bg-[#0f1115] min-h-screen">
      <div className="text-center mb-12">
        <p className="text-rose-500 tracking-wider mb-1 text-sm">
          ✦ A GLIMPSE INTO MY CREATIVE WORK SHOWCASE ✦
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white/80">
          My Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {portfolioData.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
