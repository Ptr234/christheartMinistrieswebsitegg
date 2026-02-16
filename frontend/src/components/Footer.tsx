import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Youtube, Radio, Facebook, Instagram, Twitter, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <div className="brand-icon"><Heart size={20} /></div>
              <span>Christ's Heart Ministries</span>
            </div>
            <p>
              Founded in 2007 by Bishop Isaiah and Rev. Deborah Mbuga, Christ's Heart Ministries
              stands as a beacon of transformative spirituality in Uganda and throughout Africa.
            </p>
            <div className="footer-newsletter">
              <p>Stay connected with our community</p>
              {subscribed ? (
                <p style={{ color: "var(--gold-400)", fontSize: "0.85rem", fontWeight: 600 }}>
                  Thank you for subscribing!
                </p>
              ) : (
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="YouTube (ChristHeartTV)"><Youtube size={18} /></a>
              <a href="#" aria-label="Christ Heart Radio"><Radio size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/branches">Our Branches</Link>
            <Link to="/events">Events</Link>
            <Link to="/about">About Us</Link>
            <Link to="/sermons">Sermons</Link>
          </div>

          <div className="footer-col">
            <h4>Get Involved</h4>
            <Link to="/give">Give Online</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/events/youth-camp">Youth Camp</Link>
            <Link to="/events/men-of-action">Men of Action</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Mabirizi Complex Level 5,<br />Kampala Road, Kampala Uganda</p>
            <p>+256 39 2177825</p>
            <p>info@christsheart.org</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Christ's Heart Ministries International. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>ChristHeartTV</span>
            <span>Christ Heart Radio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
