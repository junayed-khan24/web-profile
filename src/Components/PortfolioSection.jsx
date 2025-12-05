import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
const portfolioData = [
{
image: "https://i.ibb.co.com/9NqkRF4/mobile-dark.jpg",
title: "The services provide for design",
category: "UI/UX Design",
views: 501,
},
{
image: "https://i.ibb.co.com/4N6rJ2f/burger-app.jpg",
title: "Mobile app landing design & app maintain",
category: "App Design",
views: 780,
},
{
image: "https://i.ibb.co.com/CPrJMf7/logo-cards.jpg",
title: "Logo design creativity & Application",
category: "Branding",
views: 320,
},
{
image: "../../src/assets/188147906.png",
title: "Mobile app landing design & services",
category: "App UI",
views: 265,
},
{
image: "../../src/assets/5ef32588ca14e2124d041f32a4e978c2.jpg",
title: "Design for technology & services",
category: "Technology",
views: 380,
},
{
image: "https://i.ibb.co.com/0MvXcC2/dark-ui.jpg",
title: "App for technology & services",
category: "Product UI",
views: 450,
},
];


return (
<div className="py-16 px-4 md:px-8 lg:px-20 bg-[#0f1115] min-h-screen">
<div className="text-center mb-12">
<p className="text-rose-500 tracking-wider mb-1 text-sm">
✦ A GLIMPSE INTO MY CREATIVE WORK SHOWCASE ✦
</p>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
My Portfolio
</h1>
</div>


<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
{portfolioData.map((item, index) => (
<PortfolioCard key={index} {...item} />
))}
</div>
</div>
);
};


export default PortfolioSection;