import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowLeft, CheckCircle, Users, ArrowRight, Sparkles, Timer } from "lucide-react";
import { events } from "../data/events";
import { getCountdownText } from "../utils/eventDate";
import { branches } from "../data/branches";
import { useScrollAnimation } from "../hooks/useScrollAnimation";


const scheduleItems = [
  { time: "8:00 AM", title: "Registration & Welcome", desc: "Check in and connect with fellow attendees" },
  { time: "9:00 AM", title: "Opening Worship", desc: "Powerful worship to usher in God's presence" },
  { time: "10:30 AM", title: "Main Session", desc: "Keynote address from the guest minister" },
  { time: "12:30 PM", title: "Lunch Break", desc: "Fellowship and refreshments" },
  { time: "2:00 PM", title: "Breakout Sessions", desc: "Specialized workshops and prayer groups" },
  { time: "4:00 PM", title: "Closing & Altar Call", desc: "Final worship and ministry time" },
];

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);
  const [submitted, setSubmitted] = useState(false);
  const [eventImages, setEventImages] = useState<string[]>([]);
  const contentRef = useScrollAnimation<HTMLDivElement>();
  const scheduleRef = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    if (!event) return;
    const manifestUrl = `${import.meta.env.BASE_URL}events/${event.id}/manifest.json`;
    fetch(manifestUrl)
      .then((r) => {
        if (!r.ok) throw new Error("no manifest");
        return r.json();
      })
      .then((files: string[]) => {
        if (files && files.length) {
          const urls = files.map((f) => `${import.meta.env.BASE_URL}events/${event.id}/${f}`);
          setEventImages(urls);
        }
      })
      .catch(() => {
        // keep defaults
      });
  }, [event]);

  if (!event) {
    return (
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <h2>Event Not Found</h2>
          <Link to="/events" className="btn btn-primary" style={{ marginTop: "2rem" }}>
            <ArrowLeft size={18} /> Back to Events
          </Link>
        </div>
      </section>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero-xl hero-events">
        <div className="container">
          <div className="breadcrumb hero-animate hero-animate-delay-1">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/events">Events</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: "var(--gold-400)" }}>{event.name}</span>
          </div>
          <h1 className="hero-animate hero-animate-delay-2">{event.name}</h1>
          <div className="event-detail-hero-stats hero-animate hero-animate-delay-3">
            <div className="event-detail-stat">
              <Calendar size={18} />
              <span className="label">{event.date}</span>
            </div>
            <div className="event-detail-stat">
              <Clock size={18} />
              <span className="label">{event.time}</span>
            </div>
            <div className="event-detail-stat">
              <MapPin size={18} />
              <span className="label">{event.location}</span>
            </div>
            <div className="event-detail-stat">
              <Users size={18} />
              <span className="label">Open to All</span>
            </div>
            {getCountdownText(event) && (
              <div className="event-detail-stat" style={{ background: "var(--gold-500)", color: "var(--black)", borderRadius: "var(--radius-full)", padding: "0.4rem 1.2rem", fontWeight: 700 }}>
                <Timer size={18} />
                <span className="label">{getCountdownText(event)}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#0a0a0a" />
        </svg>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="animate-on-scroll" ref={contentRef}>
            {/* Event Image */}
            <div style={{
              borderRadius: "var(--radius-2xl)", overflow: "hidden",
              marginBottom: "2.5rem", boxShadow: "var(--shadow-2xl)"
            }}>
              <img
                src={eventImages.length > 0 ? eventImages[0] : event.image}
                alt={event.name}
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* About */}
            <div className="branch-info-card" style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <Sparkles size={18} style={{ color: "var(--primary)" }} />
                <h3 style={{ margin: 0 }}>About This Event</h3>
              </div>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                {event.description}
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="animate-on-scroll" ref={scheduleRef}>
            <div className="branch-info-card" style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Event Schedule</h3>
              <div className="event-schedule">
                {scheduleItems.map((item, i) => (
                  <div key={i} className="event-schedule-item">
                    <div className="event-schedule-time">{item.time}</div>
                    <div className="event-schedule-desc">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="registration-form">
            <h3>Register for {event.name}</h3>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <CheckCircle size={48} style={{ color: "var(--primary)", marginBottom: "1rem" }} />
                <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>Registration Successful!</h3>
                <p style={{ color: "var(--gray-600)" }}>Thank you for registering. We'll send you more details soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row" style={{ marginBottom: "1rem" }}>
                  <div className="form-group">
                    <label htmlFor="reg-name">Full Name</label>
                    <input id="reg-name" type="text" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-email">Email Address</label>
                    <input id="reg-email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-row" style={{ marginBottom: "1rem" }}>
                  <div className="form-group">
                    <label htmlFor="reg-phone">Phone Number</label>
                    <input id="reg-phone" type="tel" placeholder="+256 700 000 000" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-branch">Branch</label>
                    <select id="reg-branch" required>
                      <option value="">Select your branch</option>
                      {branches.map((b) => (
                        <option key={b.id} value={b.id}>{b.name}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
                  Register Now <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
