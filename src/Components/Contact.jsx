import { motion } from "motion/react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#050B14] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-3xl 
        bg-gradient-to-br from-[#06121f] to-[#030814]
        border border-cyan-500/20 p-10 md:p-14
        relative overflow-hidden"
      >
        {/* Glow corner */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Get Ready To <br /> Create Great
            </h2>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>junayedkhan@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Mymensingh Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <span>01770-718121</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-1xl font-bold uppercase tracking-widest text-white mb-3">
              Get In Touch
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-info border border-cyan-500/10  bg-transparent text-white"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-info border border-cyan-500/10  bg-transparent text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-info border border-cyan-500/10  bg-transparent text-white"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input  input-info border border-cyan-500/10  bg-transparent text-white"
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="textarea border border-cyan-500/10 input input-info bg-transparent text-white w-full"
              rows={4}
            ></textarea>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(34,211,238,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-4 w-full md:w-auto px-10 py-3 
              rounded-full border border-cyan-400 text-white
              flex items-center justify-center gap-2
              bg-gradient-to-r from-cyan-500/20 to-transparent"
            >
              Appointment Now →
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
