"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      alert("Please fill out all fields");
      return;
    }

    formData.append("access_key", "16fb5382-5466-49c5-82e6-95b7789ef82b");
    const object = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitStatus("success");
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[90svh] items-center py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mb-6">
          <p className="eyebrow mb-4">07 / Closing scene</p>
          <motion.h2
          id="contact-heading"
          className="text-4xl sm:text-6xl font-semibold tracking-[-.05em] text-white mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Connect
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m open to exciting projects and opportunities! Feel free to reach
              out anytime, I&apos;ll respond as soon as possible.
            </p>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}?subject=Hello%20Sahbaz&body=Hi%20Sahbaz,%20I%20would%20like%20to%20get%20in%20touch%20regarding...`}
              />
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={siteConfig.phone}
                href={`tel:${siteConfig.phone.replace(/[\s-]/g, "")}`}
              />
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value={siteConfig.location}
                href="https://www.google.com/maps?q=17.451769350940094,78.40719182064657"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 p-6 sm:p-8 bg-white/[.02] border editorial-rule"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            aria-label="Contact form"
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              isLoading={isSubmitting}
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>

            {submitStatus === "success" && (
              <motion.p
                className="text-green-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                className="text-red-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-start gap-4 border-b editorial-rule py-5 transition-colors duration-300 hover:bg-white/[.025] group"
    >
      <div className="mt-0.5 p-2.5 border border-teal-100/20 text-teal-100">
        {icon}
      </div>
      <div>
        <p className="eyebrow">
          {label}
        </p>
        <p className="mt-0.5 text-white group-hover:text-teal-100 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
