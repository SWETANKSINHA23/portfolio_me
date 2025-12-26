import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Send, User, MessageCircle,
  Github, Linkedin, ExternalLink, Download, Calendar,
  Code, Briefcase, Award, Zap, CheckCircle
} from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "swetank23may@gmail.com",
    href: "mailto:swetank23may@gmail.com",
    buttonText: "Send Email",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Lovely Professional University, Phagwara, Punjab, India",
    href: "https://maps.google.com/?q=Lovely+Professional+University",
    buttonText: "View Map",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SWETANKSINHA23",
    username: "@SWETANKSINHA23",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/swetank23",
    username: "@swetank23",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:swetank23may@gmail.com",
    username: "swetank23may@gmail.com",
  },
];

const quickInfoCards = [
  {
    icon: Briefcase,
    title: "Experience",
    description: "Hands-on experience with 3 major AI/ML projects and AWS cloud development",
  },
  {
    icon: Code,
    title: "Skills",
    description: "Proficient in Python, JavaScript, React, TensorFlow, AWS, and modern web technologies",
  },
  {
    icon: Award,
    title: "Achievement",
    description: "Winner of 4 hackathons including national-level competitions",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        to_name: "Swetank",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Error sending message",
        description: "Please check your EmailJS configuration in src/lib/email.ts",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Mail className="w-4 h-4" />
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's <AnimatedText texts={["Connect", "Collaborate", "Build"]} className="gradient-text" />
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Open to internships, collaborations, and exciting opportunities in AI/ML and Data Science
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Personal Info Card */}
              <div className="glass-panel rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-3xl font-bold text-white">
                    S
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Swetank</h2>
                    <p className="text-muted-foreground">AI/ML Engineer | Data Scientist</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Phagwara, Punjab, India</span>
                    </div>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <span className="text-green-400 font-medium">Open to Work</span>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="glass-panel rounded-xl p-5 group hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative">
                        <method.icon className="w-6 h-6 text-primary" />
                        <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                        asChild
                      >
                        <a href={method.href} target={method.label === "Location" ? "_blank" : undefined} rel="noopener noreferrer">
                          {method.buttonText}
                          <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-panel rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect on Social</h3>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send Me a Message</h3>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind or want to discuss opportunities? Drop me a message!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary">Your Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="pl-11 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">Your Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="pl-11 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-primary">Subject</Label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="pl-11 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 resize-none"
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Quick Info Banner */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Why Work With Me?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quickInfoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-panel rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Alternative Contact Methods */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Other Ways to Connect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Schedule a Meeting
                  </h3>
                  <p className="text-sm text-muted-foreground">Book a time to chat</p>
                </div>
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1m331RJafHMtObYHZRPZY2vpAgaHb7QAc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Download Resume
                  </h3>
                  <p className="text-sm text-muted-foreground">Get my full CV</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/SWETANKSINHA23"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    GitHub Profile
                  </h3>
                  <p className="text-sm text-muted-foreground">View my projects</p>
                </div>
              </motion.a>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
