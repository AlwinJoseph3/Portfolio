import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS IDs
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-white dark:bg-[#0a0a0a] transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black dark:text-white uppercase tracking-tighter">
            Get in Touch
          </h2>
          <p className="text-zinc-500 mt-4">
            Let's build something extraordinary together.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-8 md:p-12 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl shadow-2xl"
        >
          {isSent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle
                size={64}
                className="text-green-500 mb-4 animate-bounce"
              />
              <h3 className="text-2xl font-bold dark:text-white">
                Message Sent!
              </h3>
              <p className="text-zinc-400">
                I'll get back to you faster than a 0-100 sprint.
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="mt-8 text-brand-primary underline"
              >
                Send another?
              </button>
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Name
                </label>
                <input
                  required
                  name="user_name"
                  type="text"
                  placeholder="John Doe"
                  className="bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 focus:border-brand-primary outline-none transition-colors dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Email
                </label>
                <input
                  required
                  name="user_email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 focus:border-brand-primary outline-none transition-colors dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="I have an idea for a project..."
                  className="bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 focus:border-brand-primary outline-none transition-colors dark:text-white resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 mt-8 py-4 bg-[#007AFF] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 text-zinc-400 font-mono text-sm uppercase tracking-widest">
          <a href="mailto:your@email.com" className="hover:text-brand-primary">
            your@email.com
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="hover:text-brand-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourgit"
            className="hover:text-brand-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
