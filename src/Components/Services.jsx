import { FaCode, FaWordpress } from "react-icons/fa";
import { motion } from "motion/react";

const services = [
  {
    title: "Custom Web Development",
    subtitle: "HTML • CSS • JavaScript • React • Next.js • Node.js • MongoDB",
    desc: "I build fully custom, high-performance web applications tailored specifically to your business needs. From clean and responsive user interfaces using HTML, CSS, JavaScript, React, and Next.js to secure and scalable backend solutions with Node.js and MongoDB, every part of the application is carefully crafted. I focus on performance optimization, SEO-friendly structure, clean code practices, and future scalability—ensuring your website not only looks great but also performs reliably as your business grows. This service is ideal for startups, modern business websites, dashboards, SaaS platforms, and personal brands looking for a strong and professional online presence.",
    icon: <FaCode />,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Scalable Code",
      "Performance Focused",
    ],
  },
  {
    title: "CMS Website Development",
    subtitle: "WordPress • Shopify • Wix",
    desc: "I design and develop easy-to-manage CMS websites that empower you to update and control your content without any technical knowledge. Whether you need a business website, blog, landing page, or an eCommerce store, I ensure a clean design, mobile responsiveness, and SEO-ready structure. Using trusted platforms like WordPress, Shopify, and Wix, I deliver fast-loading, secure, and user-friendly websites that help you establish credibility and grow your online presence while saving time and development costs.",
    icon: <FaWordpress />,
    features: [
      "Easy Content Management",
      "eCommerce F",
      "Mobile Friendly",
      "SEO Ready",
      "Fast Setup",
    ],
  },
];



const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section className="bg-[#050B14] py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Professional Web Solutions
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border 
              border-cyan-400/10 
              bg-gradient-to-br from-[#071726] to-[#030814]
              p-8 transition-all duration-500
              hover:border-cyan-400/30"
            >
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 rounded-2xl 
                bg-gradient-to-t from-cyan-500/10 to-transparent
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500"
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative z-10 w-12 h-12 rounded-full 
                bg-cyan-500 text-white flex items-center justify-center 
                text-xl mb-5
                shadow-[0_0_10px_rgba(34,211,238,0.4)]"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>

              <p className="relative z-10 text-sm text-cyan-400 mb-3">
                {item.subtitle}
              </p>

              <p className="relative z-10 text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Highlights */}
              <div className="relative z-10 mt-5 flex flex-wrap gap-2 text-xs text-gray-400">
                {item.features.map((feature, i) => (
                  <span
                    key={i}
                    className="border border-cyan-400/20 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
