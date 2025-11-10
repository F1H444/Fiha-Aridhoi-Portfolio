"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

// EmailJS Types
interface EmailJSResponse {
  status: number;
  text: string;
}

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
}) => (
  <div id="kontak">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-300 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
    />
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const viewportConfig = { once: true, amount: 0.3 };
  const ease = "easeOut";

  // EmailJS Configuration - GANTI DENGAN CREDENTIAL ANDA
  const EMAILJS_SERVICE_ID = "service_2zi6ee9";
  const EMAILJS_TEMPLATE_ID = "template_mqx2v6g";
  const EMAILJS_PUBLIC_KEY = "IkeM8qndfjvX-c8S_";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (templateParams: any): Promise<EmailJSResponse> => {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return {
      status: response.status,
      text: await response.text(),
    };
  };

  const handleSubmit = async () => {
    // Validasi form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Mohon lengkapi semua field.",
      });
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Format email tidak valid.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Template parameters yang akan dikirim ke EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Fiha Aridhoi",
      };

      await sendEmail(templateParams);

      setSubmitStatus({
        type: "success",
        message: "Pesan berhasil terkirim!",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: ease }}
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ada proyek, pertanyaan, atau hanya ingin menyapa? Silakan kirim
            pesan kepada saya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* KIRI: INFORMASI KONTAK */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: ease }}
            viewport={viewportConfig}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:fihaaridhoi@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg">fihaaridhoi@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+6282128573839"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-lg">+62 821 2857 3839</span>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300 group"
                >
                  <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg">Surabaya, Indonesia</span>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Temukan saya di:</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/fihaaridhoi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-orange-500/20 hover:text-orange-500 text-gray-300 transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/fihaaridhoi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-orange-500/20 hover:text-orange-500 text-gray-300 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* KANAN: FORMULIR KONTAK */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: ease }}
            viewport={viewportConfig}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl space-y-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: ease, delay: 0.1 }}
                viewport={viewportConfig}
              >
                <FormInput
                  label="Nama"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: ease, delay: 0.2 }}
                viewport={viewportConfig}
              >
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: ease, delay: 0.3 }}
                viewport={viewportConfig}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: ease, delay: 0.4 }}
                viewport={viewportConfig}
              >
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center gap-3 rounded-full bg-orange-600 px-8 py-4 text-base sm:text-lg font-medium text-white shadow-lg shadow-orange-900/30 transition-all duration-300 hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-800/40 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={20} />
                      </span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
