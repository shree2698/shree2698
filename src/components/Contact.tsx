"use client";

import { useState, useTransition } from "react";
import { Instagram, Linkedin, Github, Trophy, Mail, Phone, MapPin, Send, Code, Coffee, Zap, Star, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { sendContactMessage } from "@/app/actions/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<{
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(
      formData.name ? `Portfolio Inquiry from ${formData.name}` : "Portfolio Inquiry"
    );
    const body = encodeURIComponent(
      `Hi Tanushree,\n\nName: ${formData.name || "N/A"}\nEmail: ${formData.email || "N/A"}\n${
        formData.website ? `Website: ${formData.website}\n` : ""
      }\nMessage:\n${formData.message || "I'd like to discuss a project with you."}\n`
    );
    window.location.href = `mailto:tanushreemahato.261298@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await sendContactMessage(null, data);
      setFormState(result);
      if (result.success) {
        // Also trigger direct mail client redirection
        handleDirectEmail();
        setFormData({
          name: '',
          email: '',
          website: '',
          message: ''
        });
      }
    });
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
      icon: Github,
      name: "GitHub",
      href: "https://github.com/shree2698",
      color: "from-slate-700 to-slate-900"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tanushree-mahato-a6a16920a",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Trophy,
      name: "LeetCode",
      href: "https://leetcode.com/u/tshreem1998/",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/tshree.mahato/",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const features = [
    { icon: Code, text: "Clean Code Architecture" },
    { icon: Zap, text: "Fast Response Time" },
    { icon: Star, text: "Quality Assurance" },
    { icon: Coffee, text: "24/7 Availability" }
  ];

  return (
    <section id="contact" className="py-12 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">
              Let's{" "}
              <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-accent to-cta rounded-full w-20 mx-auto" />
          </div>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto font-sans">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-6">
              {/* Main CTA */}
              <Card className="border border-slate-300 dark:border-[#30363d] rounded-md bg-slate-50 dark:bg-[#0d1117] shadow-md">
                <CardContent className="p-5">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-display">
                      Something Special
                      <span className="block text-accent">Awaits</span>
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed font-sans">
                      I seek to push the limits of creativity to create high-engaging, 
                      user-friendly, and memorable interactive experiences that make a difference.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 font-sans">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#238636] rounded-md flex items-center justify-center">
                          <feature.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-xs text-foreground/80 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-3">
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
                      <Card className="border border-slate-300 dark:border-[#30363d] rounded-md bg-slate-50 dark:bg-[#0d1117] hover:border-accent hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                        <CardContent className="p-3.5">
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 bg-gradient-to-r ${info.color} rounded-md flex items-center justify-center shadow-sm`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors font-display">
                                {info.title}
                              </h4>
                              <p className="text-xs text-foreground/70 font-mono">
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
              <div className="flex gap-2.5">
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
                      <div className="w-10 h-10 bg-slate-100 dark:bg-[#161b22] rounded-md flex items-center justify-center shadow-sm hover:shadow-md border border-slate-300 dark:border-[#30363d] hover:border-accent transition-all duration-200">
                        <IconComponent className="w-4 h-4 text-foreground/80 group-hover:text-accent transition-all" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <Card className="border border-slate-300 dark:border-[#30363d] rounded-md bg-slate-50 dark:bg-[#0d1117] shadow-md font-sans">
              <CardContent className="p-5">
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-foreground mb-1 font-display">
                    Start a Conversation
                  </h3>
                  <p className="text-xs text-foreground/70 font-sans">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                {formState?.success ? (
                  <div className="py-8 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-12 h-12 bg-emerald-500/10 text-[#3fb950] rounded-full flex items-center justify-center mx-auto border border-[#238636]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground font-display">Message Received!</h4>
                    <p className="text-xs text-foreground/80 max-w-md mx-auto font-sans">
                      {formState.message}
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormState(null)}
                      className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md font-semibold text-xs transition-all shadow-sm cursor-pointer font-sans"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                    {/* Honeypot field for bot protection */}
                    <input type="text" name="company_hp" className="hidden" tabIndex={-1} autoComplete="off" />

                    {formState && !formState.success && (
                      <div className="p-2.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-md flex items-center gap-2 text-xs font-mono">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{formState.message}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="contact-name" className="text-xs font-semibold text-foreground/80 font-sans">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2.5 rounded-md border border-slate-300 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-foreground text-sm focus:border-accent focus:outline-none transition-colors font-sans"
                          placeholder="John Doe"
                        />
                        {formState?.errors?.name && (
                          <p className="text-xs text-red-400 font-mono">{formState.errors.name[0]}</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="contact-email" className="text-xs font-semibold text-foreground/80 font-sans">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2.5 rounded-md border border-slate-300 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-foreground text-sm focus:border-accent focus:outline-none transition-colors font-sans"
                          placeholder="john@example.com"
                        />
                        {formState?.errors?.email && (
                          <p className="text-xs text-red-400 font-mono">{formState.errors.email[0]}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-website" className="text-xs font-semibold text-foreground/80 font-sans">
                        Website (Optional)
                      </label>
                      <input
                        id="contact-website"
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full p-2.5 rounded-md border border-slate-300 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-foreground text-sm focus:border-accent focus:outline-none transition-colors font-sans"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-message" className="text-xs font-semibold text-foreground/80 font-sans">
                        Project Details *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-2.5 rounded-md border border-slate-300 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-foreground text-sm focus:border-accent focus:outline-none transition-colors resize-none font-sans"
                        placeholder="Tell me about your project, timeline, and goals..."
                      />
                      {formState?.errors?.message && (
                        <p className="text-xs text-red-400 font-mono">{formState.errors.message[0]}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-[#238636] hover:bg-[#2ea043] dark:bg-[#238636] dark:hover:bg-[#2ea043] border border-[#2ea043]/60 text-white py-2.5 px-4 rounded-md font-semibold hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer text-sm font-sans"
                    >
                      {isPending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending & Opening Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send & Open in Email App
                        </>
                      )}
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={handleDirectEmail}
                        className="text-xs text-accent hover:underline font-medium cursor-pointer transition-colors font-sans"
                      >
                        Prefer opening your default mail client directly? Click here (mailto)
                      </button>
                    </div>
                  </form>
                )}

                {/* Response Time Indicator */}
                <div className="mt-4 p-2.5 bg-emerald-500/10 dark:bg-[#161b22] rounded-md border border-emerald-500/30 dark:border-[#30363d]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3fb950] rounded-full animate-pulse" />
                    <span className="text-xs text-[#3fb950] font-medium font-mono">
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