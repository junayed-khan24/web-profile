import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, desc, img } = blog;

  const truncateDesc = (text, limit = 25) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  return (
    <div
      className="group rounded-2xl overflow-hidden
      bg-gradient-to-br from-[#071726] to-[#030814]
      border border-cyan-400/10 hover:border-cyan-400/30
      transition-all duration-500"
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-48 w-full object-cover
          group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {truncateDesc(desc)}
        </p>

        <Link
          to={`/blogs/${id}`}
          className="inline-block text-sm text-cyan-400
          border border-cyan-400/30 px-4 py-2 rounded-full
          hover:bg-cyan-400 hover:text-black transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
