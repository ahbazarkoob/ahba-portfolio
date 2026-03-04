"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xeelyzal");

  if (state.succeeded) {
    return (
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
        <p className="text-lg font-medium">✅ Thanks! Your message has been sent.</p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-primary text-xs tracking-widest uppercase mb-3">
              Contact
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's work together
            </h2>

            <p className="text-secondary-foreground text-sm mb-4">
              I'm currently open to freelance projects and full-time opportunities.
            </p>

            <a
              href="mailto:ahbazarkoob@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm mb-12"
            >
              <Mail size={14} />
              ahbazarkoob@gmail.com
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label className="block text-xs font-display text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-display text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />

                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-display text-muted-foreground mb-1.5 uppercase tracking-wider">
                Message
              </label>

              <textarea
                rows={5}
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />

              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity glow"
            >
              <Send size={14} />
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;