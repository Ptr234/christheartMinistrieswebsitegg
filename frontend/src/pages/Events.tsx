import { Link } from "react-router-dom";
import { Clock, MapPin, ArrowRight, Calendar, Sparkles, Users } from "lucide-react";
import { events } from "../data/events";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const eventImages = [
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
  "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80",
];

export default function Events() {
  const gridRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <section className="page-hero-xl hero-events">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Sparkles size={14} /> Don't Miss Out
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Events & Gatherings</h1>
          <p className="hero-animate hero-animate-delay-3">
            Join us for powerful events that will transform your life and strengthen your faith.
            Every gathering is an opportunity for divine encounter.
          </p>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#0a0a0a" />
        </svg>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Upcoming Events</span>
            <h2>Powerful Gatherings Ahead</h2>
            <p>Register early and prepare your heart for transformation</p>
          </div>

          <div className="animate-on-scroll" ref={gridRef} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {events.map((event, i) => (
              <div key={event.id} className="event-card-lg" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="event-card-lg-image">
                  <img
                    src={eventImages[i % eventImages.length]}
                    alt={`${event.name} event`}
                    loading="lazy"
                  />
                  <div className="event-card-lg-image-overlay" />
                  <div style={{
                    position: "absolute", bottom: "1.5rem", left: "1.5rem", zIndex: 2
                  }}>
                    <span className="badge badge-gold" style={{ fontSize: "0.8rem", padding: "0.4rem 1rem" }}>
                      <Calendar size={12} /> {event.date}
                    </span>
                  </div>
                </div>
                <div className="event-card-lg-content">
                  <span className="badge badge-dark" style={{ marginBottom: "1rem", width: "fit-content" }}>
                    Upcoming Event
                  </span>
                  <h3>{event.name}</h3>
                  <div className="event-card-lg-meta">
                    <span><Clock size={16} /> {event.time}</span>
                    <span><MapPin size={16} /> {event.location}</span>
                    <span><Users size={16} /> Open to all</span>
                  </div>
                  <p>{event.description}</p>
                  <Link to={`/events/${event.id}`} className="btn btn-primary" style={{ width: "fit-content" }}>
                    Register Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(135deg, var(--black) 0%, var(--purple-950) 40%, var(--black-900) 100%)",
        padding: "5rem 1.5rem", textAlign: "center", color: "var(--text-inverse)",
        position: "relative", overflow: "hidden"
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ color: "var(--text-inverse)", marginBottom: "1rem" }}>Have an Event Idea?</h2>
          <p style={{ opacity: 0.8, maxWidth: "550px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
            We love hearing from our community. If you have an idea for an event or gathering,
            let us know and we'll make it happen together.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
