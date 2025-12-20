"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

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
  <div className="relative group">
    <label
      htmlFor={name}
      className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-orange-500 transition-colors"
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
      className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-xl text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors"
      placeholder={label}
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

  const { language } = useLanguage();
  const t = translations[language].contact;

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      }
    );

    if (!response.ok) throw new Error("Failed to send email");

    return { status: response.status, text: await response.text() };
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: "error", message: t.form.validation.required });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: "error", message: t.form.validation.email });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Fiha Aridhoi",
      });
      setSubmitStatus({ type: "success", message: t.form.success });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({ type: "error", message: t.form.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontak" className="relative min-h-screen bg-black py-24 px-4 md:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT COLUMN: INFO */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="block text-orange-500 font-mono text-sm tracking-widest mb-4">// 03. CONTACT</span>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
              GET IN <br /> TOUCH
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-12">
              {t.subtitle}
            </p>
          </div>

          <div className="space-y-8">
             <a href="mailto:fihaaridhoi@gmail.com" className="group flex items-center gap-6 text-white hover:text-orange-500 transition-colors">
                <div className="p-4 border border-zinc-800 rounded-full group-hover:border-orange-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xl md:text-3xl font-bold tracking-tight">fihaaridhoi@gmail.com</span>
             </a>
             
             <a href="tel:+6282128573839" className="group flex items-center gap-6 text-white hover:text-orange-500 transition-colors">
                <div className="p-4 border border-zinc-800 rounded-full group-hover:border-orange-500 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xl md:text-3xl font-bold tracking-tight">+62 821 2857 3839</span>
             </a>

             <div className="group flex items-center gap-6 text-gray-400">
                <div className="p-4 border border-zinc-800 rounded-full text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xl md:text-2xl font-medium">Surabaya, Indonesia</span>
             </div>
          </div>
          
          <div className="mt-16">
            <a href="https://github.com/F1H444/" target="_blank" className="text-white hover:text-orange-500 transition-colors">
               <Github className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM */}
        <div className="bg-zinc-900/20 border border-zinc-800 p-8 md:p-12">
           <div className="space-y-10">
              <FormInput label={t.form.name} name="name" value={formData.name} onChange={handleChange} />
              <FormInput label={t.form.email} name="email" type="email" value={formData.email} onChange={handleChange} />
              
              <div className="relative group">
                <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-orange-500 transition-colors">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-xl text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder={t.form.message}
                />
              </div>

               {/* Status Message */}
              {submitStatus.type && (
                <div className={`p-4 border ${submitStatus.type === "success" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"} bg-transparent font-mono text-sm`}>
                   {submitStatus.message}
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-white text-black font-black uppercase tracking-widest py-6 text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 group"
              >
                  {isSubmitting ? t.form.sending : t.form.send}
                  {!isSubmitting && <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
