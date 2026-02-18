import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home, MapPin, Calendar, Users, BookOpen, Mail, Heart, ChevronRight } from "lucide-react";
import logo01 from "../../../logos/CHMI Logos-01.png";
import { events } from "../data/events";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > 80 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const [eventsExpanded, setEventsExpanded] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/branches", label: "Branches", icon: MapPin },
    { path: "/events", label: "Events", icon: Calendar, hasChildren: true },
    { path: "/about", label: "About", icon: Users },
    { path: "/sermons", label: "Sermons", icon: BookOpen },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "navbar-hidden" : ""}`} aria-label="Main navigation">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" aria-label="Christ's Heart Ministries - Home">
            <img src={logo01} alt="Christ's Heart logo" className="navbar-logo" />
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

      {/* Split Panel Mobile Menu */}
      <div className={`mobile-menu-split ${mobileOpen ? "open" : ""}`} role="dialog" aria-label="Mobile navigation">
        {/* Left Panel - Branding */}
        <div className="mobile-panel-left">
          <div className="mobile-brand-content">
            <p className="mobile-brand-tagline">Raising An Apostolic Generation</p>
          </div>
          <div className="mobile-brand-footer">
            <p className="mobile-brand-verse">"For where your treasure is, there your heart will be also."</p>
            <p className="mobile-brand-ref">— Matthew 6:21</p>
          </div>
        </div>

        {/* Right Panel - Navigation */}
        <div className="mobile-panel-right">
          <div className="mobile-panel-header">
            <img src={logo01} alt="Christ's Heart logo" className="mobile-header-logo" />
            <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = item.hasChildren
                ? location.pathname.startsWith(item.path)
                : isActive(item.path);

              return (
                <div key={item.path} className="mobile-nav-item" style={{ animationDelay: `${index * 0.05}s` }}>
                  {item.hasChildren ? (
                    <>
                      <button
                        className={`mobile-nav-link mobile-nav-expandable ${active ? "active" : ""}`}
                        onClick={() => setEventsExpanded(!eventsExpanded)}
                      >
                        <Icon size={18} className="mobile-nav-icon" />
                        <span>{item.label}</span>
                        <ChevronRight size={16} className={`mobile-expand-arrow ${eventsExpanded ? "expanded" : ""}`} />
                      </button>
                      <div className={`mobile-subnav ${eventsExpanded ? "open" : ""}`}>
                        <Link to={item.path} className="mobile-subnav-link">
                          All Events
                        </Link>
                        {events.map((e) => (
                          <Link key={e.id} to={`/events/${e.id}`} className="mobile-subnav-link">
                            {e.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to={item.path} className={`mobile-nav-link ${active ? "active" : ""}`}>
                      <Icon size={18} className="mobile-nav-icon" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <Link to="/give" className="mobile-give-btn" onClick={() => setMobileOpen(false)}>
            <Heart size={18} />
            <span>Give Online</span>
          </Link>
        </div>
      </div>
    </>
  );
}
