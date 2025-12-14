import React from "react";
import { Link } from "react-router";

const PortfolioCard = ({ image, title, category, views, links }) => {
  return (
    <div className="
      relative card bg-[#1d1f25] shadow-xl rounded-2xl p-[2px]
      transition-all duration-500 cursor-pointer
      before:absolute before:inset-0 before:rounded-2xl 
      before:bg-gradient-to-r before:from-rose-500 before:via-rose-400 before:to-rose-600
      before:opacity-0 hover:before:opacity-100
    ">
      <div className="relative bg-[#1d1f25] rounded-2xl p-3">
        <figure>
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full h-52 object-cover"
          />
        </figure>

        <div className="mt-4">
          <p className="text-rose-500 text-sm font-semibold">{category}</p>
          <h2 className="text-lg font-bold mt-1 text-white">{title}</h2>
          
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
              <span className="text-gray-300">👁</span> {views}
            </p>

            {/* Multiple Links */}
            <div className="flex gap-2">
              {links?.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="btn font-bold text-sm"
                  target="_blank"
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
