import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, ArrowRight, Calendar, Sparkles, Users, Tag, Download, Play, X, Mic } from "lucide-react";
import { events } from "../data/events";
import { getUpcomingEvents, getCountdownText, parseEventDate } from "../utils/eventDate";
import { useYouTubeVideos } from "../hooks/useYouTubeVideos";

function formatICSDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function downloadCalendar() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Christ's Heart Ministries International//CHMI Events 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:CHMI Events 2026",
    "X-WR-TIMEZONE:Africa/Kampala",
  ];

  for (const event of events) {
    const d = parseEventDate(event.date);
    if (!d) continue;

    // Use DATE-only (all-day) format for cleanliness
    const ymd = (dt: Date) =>
      `${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(2, "0")}${String(dt.getDate()).padStart(2, "0")}`;

    // End date = next day (DTEND exclusive for all-day events)
    const endDate = new Date(d);
    endDate.setDate(endDate.getDate() + 1);

    const desc = event.description.replace(/,/g, "\\,").replace(/\n/g, "\\n").slice(0, 300);
    const now = formatICSDate(new Date());

    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${event.id}-2026@christsheart.org`);
    lines.push(`DTSTART;VALUE=DATE:${ymd(d)}`);
    lines.push(`DTEND;VALUE=DATE:${ymd(endDate)}`);
    lines.push(`SUMMARY:${event.name}`);
    lines.push(`DESCRIPTION:${desc}`);
    lines.push(`LOCATION:${event.location}`);
    lines.push(`CATEGORIES:${event.category}`);
    lines.push(`DTSTAMP:${now}`);
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CHMI-Events-2026.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function Events() {
  const upcomingEvents = useMemo(() => getUpcomingEvents(events), []);
  const { sermons, loading: sermonsLoading } = useYouTubeVideos();
  const [playingSermon, setPlayingSermon] = useState(false);
  const featuredSermon = sermons[0];

  return (
    <>
      <section className="page-hero-xl hero-events">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Sparkles size={14} /> Don't Miss Out
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Events &amp; Gatherings</h1>
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

      {/* ── Latest Sermon ─────────────────────────────────────────────── */}
      {!sermonsLoading && featuredSermon && (
        <section className="latest-sermon-section">
          <div className="container" style={{ maxWidth: "960px" }}>
            <div className="section-header" style={{ marginBottom: "2rem" }}>
              <span className="section-label" style={{ color: "var(--gold-400)" }}>
                <Mic size={12} style={{ display: "inline", marginRight: "0.35rem" }} />
                Latest Message
              </span>
              <h2 style={{ color: "var(--text-inverse)" }}>Most Recent Sermon</h2>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>
                Catch up on the most recent word from Christ's Heart Ministries
              </p>
            </div>

            <div className="sermon-featured" style={{ minHeight: "320px" }}>
              {/* Visual / player side */}
              <div className="sermon-featured-visual">
                {playingSermon ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredSermon.videoId}?autoplay=1`}
                    title={featuredSermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  />
                ) : (
                  <>
                    <img
                      src={featuredSermon.thumbnailHigh || featuredSermon.thumbnail}
                      alt={featuredSermon.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
                    />
                    <button
                      className="sermon-featured-play"
                      onClick={() => setPlayingSermon(true)}
                      aria-label="Play latest sermon"
                    >
                      <Play size={32} />
                    </button>
                  </>
                )}
              </div>

              {/* Info side */}
              <div className="sermon-featured-content">
                <span className="badge badge-gold" style={{ marginBottom: "0.75rem" }}>Latest Sermon</span>
                <h3>{featuredSermon.title}</h3>
                <p>{featuredSermon.description || "A powerful word from Christ's Heart Ministries International."}</p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                  {playingSermon ? (
                    <button
                      className="btn btn-gold"
                      style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
                      onClick={() => setPlayingSermon(false)}
                    >
                      <X size={15} /> Close Player
                    </button>
                  ) : (
                    <button
                      className="btn btn-gold"
                      style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
                      onClick={() => setPlayingSermon(true)}
                    >
                      <Play size={15} /> Watch Now
                    </button>
                  )}
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>
                    {new Date(featuredSermon.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-header" style={{ position: "relative" }}>
            <span className="section-label">Upcoming Events</span>
            <h2>Powerful Gatherings Ahead</h2>
            <p>Register early and prepare your heart for transformation</p>
            <button
              onClick={downloadCalendar}
              className="btn btn-secondary"
              style={{
                position: "absolute", right: 0, top: 0,
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.85rem", padding: "0.6rem 1.2rem"
              }}
            >
              <Download size={15} /> Download Calendar (.ics)
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
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
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
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
