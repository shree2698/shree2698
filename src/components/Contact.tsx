"use client";

import { useState } from "react";
import { Instagram, Linkedin, Mail, Phone, MapPin, Send, Code, Coffee, Zap, Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        website: '',
        message: ''
      });
    }, 1200);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tanushreemahato.261298@gmail.com",
      href: "mailto:tanushreemahato.261298@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6205924663",
      href: "tel:+916205924663",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhubaneswar, Odisha, India",
      href: "https://maps.google.com/?q=Bhubaneswar,Odisha",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/tshree.mahato/",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tanushree-mahato-a6a16920a",
      color: "from-blue-600 to-blue-700"
    }
  ];

  const features = [
    { icon: Code, text: "Clean Code Architecture" },
    { icon: Zap, text: "Fast Response Time" },
    { icon: Star, text: "Quality Assurance" },
    { icon: Coffee, text: "24/7 Availability" }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-accent to-cta rounded-full w-24 mx-auto" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-6 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              {/* Main CTA */}
              <Card className="border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Something Special
                      <span className="block text-accent">Awaits</span>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      I seek to push the limits of creativity to create high-engaging, 
                      user-friendly, and memorable interactive experiences that make a difference.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-accent to-cta rounded-lg flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? "_blank" : undefined}
                      rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="group block"
                    >
                      <Card className="border-0 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                {info.title}
                              </h4>
                              <p className="text-slate-600 dark:text-slate-400">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label={social.name}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl border border-border/40 transform hover:-translate-y-1 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-foreground/80 group-hover:text-accent group-hover:scale-110 transition-all" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <Card className="border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Start a Conversation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground">Message Received!</h4>
                    <p className="text-sm text-foreground/70 max-w-md mx-auto">
                      Thank you for reaching out. I have received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-gradient-to-r from-accent to-cta text-white rounded-xl font-medium text-sm transition-all shadow-md cursor-pointer hover:opacity-90"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-website" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Website (Optional)
                      </label>
                      <input
                        id="contact-website"
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Project Details *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell me about your project, timeline, and how I can help you achieve your goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-accent to-cta text-white py-4 px-8 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Response Time Indicator */}
                <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                      Typically responds within 4 hours
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}