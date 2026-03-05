import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hannahyudkin@gmail.com",
    href: "mailto:hannahyudkin@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(603) 921-0450",
    href: "tel:(603) 921-0450"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nashua, NH",
    href: "https://maps.app.goo.gl/6hTs3a6PZ2bjLepF9"
  }
]




export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsLoading(false);
      setSubmitStatus({
        type: "error",
        message: "Missing EmailJS configuration. Please check your environment variables.",
      });
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon! :)",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 stagger-fade-in">
        {/* Section Header */}
        <div className="section-header text-center mx-auto max-w-3xl mb-16 space-y-5 stagger-fade-in">
          <span className="text-secondary-foreground text-md font-medium uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white"> something great.</span>
          </h2>
          <p className="text-muted-foreground">
            I'm always looking for new opportunities to work with brands and businesses. If you have any questions or would like to work with me, please send me a message and we can chat!
          </p>
        </div>
        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name"
                  className="block text-sm font-medium">Name</label>
                <input htmlFor="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name..." />
              </div>

              <div>
                <label htmlFor="email"
                  className="block text-sm font-medium">Email</label>
                <input htmlFor="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your@email.com..." />
              </div>

              <div>
                <label htmlFor="message"
                  className="block text-sm font-medium">Message</label>
                <textarea htmlFor="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message..." />
              </div>
              <Button className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </Button>


              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded xl ${submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-500" : "bg-red-500/10 border border-red-500/20 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <a key={idx} href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm text-muted-foreground">{info.label}</span>
                      <span className="font-medium">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availibility Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently open to discuss collaborations or other opportunities. If you have any questions or would like to work with me, please send me a message and we can chat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}