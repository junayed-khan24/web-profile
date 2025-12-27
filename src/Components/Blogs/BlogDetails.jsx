import { useParams, Link } from "react-router-dom";
import { blogsData } from "./blogsData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <section className="bg-[#050B14] min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Blog not found</p>
      </section>
    );
  }

  return (
    <section className="bg-[#050B14] py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden mb-10 border border-cyan-400/10">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-[260px] md:h-[400px] object-cover"
          />
        </div>

        <div
          className="bg-gradient-to-br from-[#071726] to-[#030814]
          border border-cyan-400/10 rounded-2xl p-8 md:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {blog.title}
          </h1>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {blog.content}
          </p>

          <div className="mt-8">
            <Link
              to="/blogs"
              className="inline-block text-sm text-cyan-400
              border border-cyan-400/30 px-5 py-2 rounded-full
              hover:bg-cyan-400 hover:text-black transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
