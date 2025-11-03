import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mariba",
          from_email: form.email,
          to_email: "vinniemariba2004@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Thank you! I’ll get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("❌ Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* 📩 Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-slate-500/40 dark:bg-blue-900/30 p-8 rounded-3xl shadow-lg border border-teal-900/40 bg-blue/90 hover:shadow-[0_0_35px_var(--card-border)"
      >
        <p className={`${styles.sectionSubText} text-gray-900 dark:text-gray-400`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} text-purple-900 dark:text-purple-300`}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-blue-900 dark:text-gray-200 font-bold mb-3 text-[20px]">
              Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What should I call you?"
              className="bg-transparent  py-4 px-6 placeholder:text-gray-400 dark:placeholder:text-secondary text-red-700 dark:text-teal-300 rounded-lg outline-none border border-teal-500 dark:border-teal-300 focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-500 transition-all"
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-blue-900 dark:text-gray-200 font-bold mb-3 text-[20px]">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-transparent  py-4 px-6 placeholder:text-gray-400 dark:placeholder:text-secondary text-red-700 dark:text-teal-300 rounded-lg outline-none border border-teal-500 dark:border-teal-300 focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-500 transition-all"
            />
          </label>

          {/* Message Box */}
          <label className="flex flex-col">
            <span className="text-blue-900 dark:text-gray-200 font-bold mb-3 text-[20px]">
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's up? Talk to me..."
              className="bg-transparent  py-4 px-6 placeholder:text-gray-400 dark:placeholder:text-secondary text-red-700 dark:text-teal-300 rounded-lg outline-none border border-teal-500 dark:border-teal-300 focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-500 transition-all"
            />
          </label>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-blue-600 dark:bg-indigo-600 py-3 px-8 rounded-xl w-fit text-black font-bold text-[16px] hover:bg-green-500 dark:hover:bg-green-500 shadow-md hover:shadow-green-400 dark:hover:shadow-purple-500 hover:scale-100 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* 🌍 3D Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
