import React from "react";
import { Link } from "react-router";

const PortfolioCard = ({ image, title, category, views, links }) => {
  return (
    <div
      className="
        relative card 
        bg-[#050B14]
        shadow-xl
        rounded-xl
        p-[4px]
        border-2 
         border-cyan-500/20 
        hover:border-cyan-400
        transition-all duration-500
        hover:shadow-cyan-400/20
        hover:-translate-y-3
      "
    >
      <div className="relative bg-[#050B14] rounded-2xl p-5">
        <figure className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="
              rounded-2xl
              w-full h-56
              object-cover
              scale-100
              hover:scale-125
              transition-transform duration-500 ease-out
              brightness-60
              hover:brightness-100
            "
          />
        </figure>

        <div className="mt-5">
          {/* Category */}
          <p className="text-cyan-400 text-sm font-extrabold tracking-wide">
            {category}
          </p>

          {/* Title */}
          <h2 className="text-1xl font-extrabold mt-2 text-gray-300 leading-snug">
            {title}
          </h2>

          <div className="flex justify-between items-center mt-8">
            {/* Views */}
            <p className="text-gray-300 text-sm font-semibold flex items-center gap-2">
              <span className="text-lg">👁</span> {views}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              {links?.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  target="_blank"
                  className="
                    px-4 py-2
                    rounded-md
                    font-extrabold text-sm
                    bg-cyan-500 text-white
                    hover:bg-cyan-600
                    shadow-lg
                    transition-all duration-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
