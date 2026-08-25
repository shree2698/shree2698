"use client";

import { useState, useTransition } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Github, Linkedin, Trophy, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { sendContactMessage, type ContactFormState } from "@/app/actions/contact";
import { BlurText } from "@/components/reactbits/BlurText";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { ShinyText } from "@/components/reactbits/ShinyText";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<ContactFormState | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Hi Tanushree,\n\n${formData.message || 'I would like to discuss a project with you.'}\n\nBest regards,\n${formData.name || ''}\n${formData.email || ''}\n${formData.website || ''}`
    );
    window.location.href = `mailto:tanushreemahato.261298@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const data = new FormData(formElement);

    startTransition(async () => {
      const result = await sendContactMessage(formState, data);
      setFormState(result);
      if (result.success) {
        setFormData({ name: "", email: "", website: "", message: "" });
        setTimeout(() => {
          handleDirectEmail();
        }, 1200);
      }
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tanushreemahato.261298@gmail.com",
      href: "mailto:tanushreemahato.261298@gmail.com",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6205924663",
      href: "tel:+916205924663",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhubaneswar, Odisha, India (Open to Remote)",
      href: "https://maps.google.com/?q=Bhubaneswar,India",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/shree2698", name: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tanushree-mahato-a6a16920a", name: "LinkedIn" },
    { icon: Trophy, href: "https://leetcode.com/u/tshreem1998/", name: "LeetCode" },
    { icon: Mail, href: "mailto:tanushreemahato.261298@gmail.com", name: "Email" },
    { icon: Globe, href: "https://tanushree.vercel.app/", name: "Portfolio" }
  ];

  const features = [
    { icon: MessageSquare, text: "Fast response time" },
    { icon: Clock, text: "Flexible availability" },
    { icon: Globe, text: "Open to Remote worldwide" },
    { icon: Sparkles, text: "Full-Stack & Agentic AI expertise" },
  ];

  return (
    <section id="contact" className="py-12 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <AnimatedContent distance={25} direction="vertical" className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md mb-3 font-mono">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground">
              <DecryptedText text="Get In Touch" animateOn="hover" speed={30} />
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">
            Let's{" "}
            <BlurText 
              text="Connect" 
              className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent"
              animateBy="words" 
              delay={60} 
            />
          </h2>
          <p className="text-sm md:text-base text-foreground/80 mt-3 max-w-2xl mx-auto font-sans">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </AnimatedContent>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Contact Info */}
            <AnimatedContent distance={30} direction="horizontal" delay={100} className="space-y-6">
              {/* Main CTA */}
              <SpotlightCard className="p-5" spotlightColor="rgba(88, 166, 255, 0.15)">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-display">
                    Something Special
                    <BlurText 
                      text=" Awaits" 
                      className="block text-accent"
                      animateBy="words" 
                      delay={50} 
                    />
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
              </SpotlightCard>

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
                      <SpotlightCard className="p-3.5 transition-all duration-200 hover:-translate-y-0.5" spotlightColor="rgba(88, 166, 255, 0.15)">
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
                      </SpotlightCard>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-2.5">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Magnet key={index} magnetStrength={3} padding={15}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                        aria-label={social.name}
                      >
                        <div className="w-10 h-10 bg-slate-100 dark:bg-[#161b22] rounded-md flex items-center justify-center shadow-sm hover:shadow-md border border-slate-300 dark:border-[#30363d] hover:border-accent transition-all duration-200">
                          <IconComponent className="w-4 h-4 text-foreground/80 group-hover:text-accent transition-all" />
                        </div>
                      </a>
                    </Magnet>
                  );
                })}
              </div>
            </AnimatedContent>

            {/* Right Side - Contact Form */}
            <AnimatedContent distance={30} direction="horizontal" reverse={true} delay={200}>
              <SpotlightCard className="p-5 font-sans" spotlightColor="rgba(63, 185, 80, 0.15)">
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
                        <span>{formState.message || "Something went wrong. Please try again."}</span>
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
                          <ShinyText text="Send & Open in Email App" speed={3} />
                        </>
                      )}
                    </button>
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
              </SpotlightCard>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}