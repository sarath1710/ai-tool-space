import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      alert("Thank you for contacting us!");
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-extrabold text-slate-900 mb-8 text-center"
        variants={item}
      >
        Contact Us
      </motion.h1>

      <motion.form onSubmit={handleSubmit} className="space-y-6" variants={item} noValidate>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-sky-500"
            }`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-sky-500"
            }`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-sky-500"
            }`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-sky-600 text-white font-semibold py-3 rounded hover:bg-sky-700 transition"
        >
          Send Message
        </button>
      </motion.form>

      {submitted && (
        <motion.div
          className="mt-6 text-center text-green-600 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Thanks for reaching out! We will get back to you soon.
        </motion.div>
      )}
    </motion.div>
  );
}
