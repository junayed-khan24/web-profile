import { Link } from "react-router-dom";

const PortfolioCard = ({ image, title, category, views, links }) => {
  return (
    <div
      className="
        max-w-7xl mx-auto px-4 sm:px-6 py-4
        group rounded-2xl overflow-hidden
        bg-gradient-to-br from-[#071726] to-[#030814]
        border border-cyan-400/10
        hover:border-cyan-400/30
        transition-all duration-500
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-52 object-cover
            transition-transform duration-500
            group-hover:scale-105 
            brightness-80 group-hover:brightness-100
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="text-cyan-400 text-xs uppercase tracking-widest font-semibold">
          {category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-lg font-semibold text-white leading-snug">
          {title}
        </h3>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          {/* Views */}
          <p className="text-sm text-gray-400 flex items-center gap-1">
            👁 {views}
          </p>

          {/* Buttons */}
          <div className="flex gap-2">
            {links?.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target="_blank"
                className="
                  text-sm text-cyan-400
                  border border-cyan-400/30
                  px-4 py-1.5 rounded-full
                  hover:bg-cyan-400 hover:text-black
                  transition
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
