"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_5qcpqot", // from EmailJS dashboard
          "template_nnpuxql", // template ID
          form.current,
          "IbOt_i74HBVPh37b1" // public key
        )
        .then(
          () => {
            alert("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            alert("❌ Failed to send message, please try again.");
            console.error(error);
          }
        );
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-20 bg-[#FFEEDD] space-x-10"
      id="contact"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-700" />
      </div>

      {/* Left Section */}
      <div className="flex-1 text-left space-y-6 max-w-xl">
        <h2 className="text-5xl font-extrabold tracking-wider leading-tight text-[#222]">
          GET <br /> IN TOUCH
        </h2>
        <p className="text-[#444] text-lg font-quick">
          Piqued your interest? Let’s turn ideas into impact. Whether it’s a
          quick question or a bold vision, I’d love to hear from you. Let’s
          connect and create something meaningful together.
        </p>
      </div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 w-full max-w-lg bg-white rounded-3xl shadow-amber-950 shadow-2xl border border-orange-200 p-8 mt-12 lg:mt-0"
      >
        <h3 className="text-center text-[#555] text-lg tracking-widest mb-8">
          CONTACT ME
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#555] text-sm mb-1">
              First Name*
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="John"
              required
              className="w-full p-3 rounded-xl bg-white border border-gray-300 text-[#222] placeholder-gray-400 focus:outline-none focus:border-orange-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#555] text-sm mb-1">Last Name*</label>
            <input
              type="text"
              name="last_name"
              placeholder="Doe"
              required
              className="w-full p-3 rounded-xl bg-white border border-gray-300 text-[#222] placeholder-gray-400 focus:outline-none focus:border-orange-400 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-[#555] text-sm mb-1">Email*</label>
            <input
              type="email"
              name="user_email"
              placeholder="example@email.com"
              required
              className="w-full p-3 rounded-xl bg-white border border-gray-300 text-[#222] placeholder-gray-400 focus:outline-none focus:border-orange-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#555] text-sm mb-1">Phone</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="(+91) 0000000000"
              className="w-full p-3 rounded-xl bg-white border border-gray-300 text-[#222] placeholder-gray-400 focus:outline-none focus:border-orange-400 transition"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-[#555] text-sm mb-1">
            Your Message*
          </label>
          <textarea
            name="message"
            placeholder="Add your message..."
            rows={4}
            required
            className="w-full p-3 rounded-xl bg-white border border-gray-300 text-[#222] placeholder-gray-400 focus:outline-none focus:border-orange-400 transition"
          />
        </div>

        <button
          type="submit"
          className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-zinc-950/80 to-neutral-950/80 text-white font-semibold tracking-wider shadow-lg hover:opacity-90 transition"
        >
          SUBMIT
        </button>
      </motion.form>
    </section>
  );
}
