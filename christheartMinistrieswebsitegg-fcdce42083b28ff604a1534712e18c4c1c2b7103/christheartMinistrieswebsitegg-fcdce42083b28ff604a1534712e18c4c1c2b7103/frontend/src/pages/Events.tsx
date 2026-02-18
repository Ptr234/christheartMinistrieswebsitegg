import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, ArrowRight, Calendar, Sparkles, Users, Tag } from "lucide-react";
import { events } from "../data/events";
import { getUpcomingEvents, getCountdownText } from "../utils/eventDate";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Events() {
  const gridRef = useScrollAnimation<HTMLDivElement>();
  const upcomingEvents = useMemo(() => getUpcomingEvents(events), []);

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
            {upcomingEvents.length === 0 && (
              <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-light)" }}>
                <Calendar size={48} style={{ marginBottom: "1rem", opacity: 0.3 }} />
                <p>No upcoming events at the moment. Check back soon!</p>
              </div>
            )}
            {upcomingEvents.map((event, i) => (
              <div key={event.id} className="event-card-lg" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="event-card-lg-image">
                  <img
                    src={event.image}
                    alt={`${event.name} event`}
                    loading="lazy"
                  />
                  <div className="event-card-lg-image-overlay" />
                  <div style={{
                    position: "absolute", bottom: "1.5rem", left: "1.5rem", zIndex: 2,
                    display: "flex", gap: "0.5rem", flexWrap: "wrap"
                  }}>
                    <span className="badge badge-gold" style={{ fontSize: "0.8rem", padding: "0.4rem 1rem" }}>
                      <Calendar size={12} /> {event.date}
                    </span>
                    <span className="badge badge-purple" style={{ fontSize: "0.75rem", padding: "0.35rem 0.85rem" }}>
                      <Tag size={11} /> {event.category}
                    </span>
                  </div>
                </div>
                <div className="event-card-lg-content">
                  {(() => {
                    const countdown = getCountdownText(event);
                    return countdown ? (
                      <span className="badge badge-gold" style={{ marginBottom: "0.75rem", width: "fit-content", fontSize: "0.8rem" }}>
                        <Clock size={12} /> {countdown}
                      </span>
                    ) : (
                      <span className="badge badge-dark" style={{ marginBottom: "0.75rem", width: "fit-content" }}>
                        Upcoming Event
                      </span>
                    );
                  })()}
                  <h3>{event.name}</h3>
                  <p className="event-tagline">{event.tagline}</p>
                  <div className="event-card-lg-meta">
                    <span><Clock size={16} /> {event.time}</span>
                    <span><MapPin size={16} /> {event.location}</span>
                    <span><Users size={16} /> Open to all</span>
                  </div>
                  <p>{event.description.slice(0, 180)}...</p>
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
