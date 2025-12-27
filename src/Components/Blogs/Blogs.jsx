import BlogCard from "./BlogCard";
import { blogsData } from "./blogsData";

const Blogs = () => {
  return (
    <section className="bg-[#050B14] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Blogs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Web Development Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
