import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, MessageCircle, Facebook, Youtube, Instagram } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useScrollAnimation<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero-xl hero-contact">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <MessageCircle size={14} /> We'd Love to Hear From You
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Contact Us</h1>
          <p className="hero-animate hero-animate-delay-3">
            Your voice matters to us! Whether you have a question, suggestion, or simply
            want to connect, we're here with open hearts and eager ears.
          </p>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#1a0533" />
        </svg>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="animate-on-scroll" ref={formRef}>
            <div className="contact-split">
              {/* Form Side */}
              <div className="contact-split-form">
                <h2 style={{ fontSize: "1.75rem", color: "var(--gray-900)", marginBottom: "0.5rem" }}>
                  Send Us a Message
                </h2>
                <p style={{ color: "var(--text-light)", marginBottom: "2rem" }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div style={{
                    textAlign: "center", padding: "3rem", background: "var(--purple-50)",
                    borderRadius: "var(--radius-xl)"
                  }}>
                    <CheckCircle size={48} style={{ color: "var(--primary)", marginBottom: "1rem" }} />
                    <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>Message Sent!</h3>
                    <p style={{ color: "var(--gray-600)" }}>Thank you for reaching out. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div className="form-group">
                        <label htmlFor="contact-name">Full Name</label>
                        <input id="contact-name" type="text" placeholder="Your full name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email">Email Address</label>
                        <input id="contact-email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject</label>
                      <input id="contact-subject" type="text" placeholder="What is this about?" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Message</label>
                      <textarea id="contact-message" placeholder="Tell us how we can help..." rows={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Info Side */}
              <div className="contact-split-info">
                <h3>Christ's Heart Ministries International</h3>
                <p style={{ opacity: 0.75, marginBottom: "2rem", lineHeight: 1.7 }}>
                  We're always happy to help. Reach out through any of these channels.
                </p>

                <a href="https://maps.google.com/?q=Mabirizi+Complex+Kampala+Road+Kampala+Uganda" target="_blank" rel="noopener noreferrer" className="contact-split-info-item" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="contact-split-info-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Our Address</h4>
                    <p>Mabirizi Complex Level 5, Kampala Road, Kampala Uganda</p>
                  </div>
                </a>

                <a href="tel:+256392177825" className="contact-split-info-item" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="contact-split-info-icon"><Phone size={20} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+256 39 2177825</p>
                  </div>
                </a>

                <a href="mailto:info@christsheart.org" className="contact-split-info-item" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="contact-split-info-icon"><Mail size={20} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@christsheart.org</p>
                  </div>
                </a>

                <div className="contact-split-info-item">
                  <div className="contact-split-info-icon"><Clock size={20} /></div>
                  <div>
                    <h4>Office Hours</h4>
                    <p>Mon - Fri: 8am - 5pm | Sat: 9am - 1pm</p>
                  </div>
                </div>

                <div className="contact-social-row">
                  <a href="#" className="contact-social-btn" aria-label="Facebook"><Facebook size={18} /></a>
                  <a href="#" className="contact-social-btn" aria-label="YouTube"><Youtube size={18} /></a>
                  <a href="#" className="contact-social-btn" aria-label="Instagram"><Instagram size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div style={{ marginTop: "3rem" }}>
            <div className="map-placeholder" style={{ height: "300px", borderRadius: "var(--radius-2xl)" }}>
              <div style={{ textAlign: "center" }}>
                <MapPin size={40} />
                <p style={{ fontSize: "0.9rem", marginTop: "0.75rem", fontWeight: 500 }}>Interactive Map Coming Soon</p>
                <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.25rem" }}>Kampala Road, Kampala, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
