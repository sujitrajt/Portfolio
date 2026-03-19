import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-t from-blue-900/20 to-primary-dark flex justify-center items-center p-4 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-600/10 to-transparent opacity-50 pointer-events-none"></div>

      <form
        method="POST"
        action="https://getform.io/f/2b49ea39-c74c-4a62-9dd4-ac4cc9d7ec0a"
        className="flex flex-col max-w-[600px] w-full relative z-10 animate-fadeInUp"
      >
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-600 to-blue-400 transition-all duration-300">
            Contact
          </p>
          <p className="text-text-secondary py-4 text-lg">
            Let's create something amazing together. Reach out and let's talk!
          </p>
        </div>

        <div className="space-y-4">
          <input
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 animation-stagger"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />

          <input
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 animation-stagger"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />

          <textarea
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 min-h-[200px] resize-none animation-stagger"
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white border-2 border-pink-600 hover:bg-pink-600 px-8 py-4 my-8 mx-auto flex items-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-600/50 btn-hover animation-stagger"
        >
          Send Message
        </button>

        <p className="text-text-muted text-center text-sm animation-stagger">
          Or reach out directly at{" "}
          <a
            href="mailto:sujitrajt@gmail.com"
            className="text-pink-500 hover:text-pink-400 font-semibold"
          >
            sujitrajt@gmail.com
          </a>
        </p>
      </form>
    </div>
  );
};

export default Contact;
