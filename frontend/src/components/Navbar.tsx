import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { events } from "../data/events";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" aria-label="Christ's Heart Ministries - Home">
            <div className="brand-icon">
              <Heart size={20} />
            </div>
            Christ's Heart
          </Link>

          <div className="navbar-links">
            <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
            <Link to="/branches" className={isActive("/branches") ? "active" : ""}>Branches</Link>
            <div className="events-dropdown">
              <Link to="/events" className={location.pathname.startsWith("/events") ? "active" : ""}>
                Events <ChevronDown size={14} />
              </Link>
              <div className="dropdown-menu">
                {events.map((e) => (
                  <Link key={e.id} to={`/events/${e.id}`}>{e.name}</Link>
                ))}
              </div>
            </div>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
            <Link to="/sermons" className={isActive("/sermons") ? "active" : ""}>Sermons</Link>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
            <Link to="/give" className="btn btn-gold" style={{ marginLeft: "0.5rem", padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
              Give
            </Link>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileOpen(true)} aria-label="Open navigation menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} role="dialog" aria-label="Mobile navigation">
        <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
          <X size={24} />
        </button>
        <Link to="/">Home</Link>
        <Link to="/branches">Branches</Link>
        <Link to="/events">Events</Link>
        {events.map((e) => (
          <Link key={e.id} to={`/events/${e.id}`} style={{ paddingLeft: "2rem", fontSize: "0.95rem" }}>
            {e.name}
          </Link>
        ))}
        <Link to="/about">About</Link>
        <Link to="/sermons">Sermons</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/give" className="btn btn-gold" style={{ textAlign: "center", marginTop: "1rem" }}>
          Give Online
        </Link>
      </div>
    </>
  );
}
