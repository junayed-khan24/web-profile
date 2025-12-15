import React from "react";
import { Link } from "react-router";

const PortfolioCard = ({ image, title, category, views, links }) => {
  return (
    <div
      className="
        relative card 
        bg-[#1d1f25]
        shadow-xl
        rounded-xl
        p-[4px]
        border-2 border-transparent
        hover:border-rose-300
        transition-all duration-500
        hover:shadow-rose-300/20
        hover:translate-t-2
      "
    >
      <div className="relative bg-[#1d1f25] rounded-2xl p-5">
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
            "
          />
        </figure>

        <div className="mt-5">
          <p className="text-rose-500 text-sm font-extrabold tracking-wide">
            {category}
          </p>

          <h2 className="text-xl font-extrabold mt-2 text-white/80 leading-snug">
            {title}
          </h2>

          <div className="flex justify-between items-center mt-8">
            <p className="text-gray-300 text-sm font-semibold flex items-center gap-2">
              <span className="text-lg">👁</span> {views}
            </p>

            {/* Multiple Links */}
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
                    bg-rose-500 text-white
                    hover:bg-rose-600
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
