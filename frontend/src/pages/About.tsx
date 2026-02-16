import { Heart, BookOpen, Globe, Users, Flame } from "lucide-react";
import { statementOfFaith } from "../data/faith";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80", alt: "Church worship service" },
  { src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80", alt: "Community gathering" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", alt: "Church celebration" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", alt: "Youth fellowship" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80", alt: "Family in church" },
  { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80", alt: "Church outreach" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80", alt: "Choir worship" },
];

const timelineEvents = [
  { year: "2007", text: "Christ's Heart Ministries founded by Bishop Isaiah and Rev. Deborah Mbuga in Mukono, Uganda." },
  { year: "2010", text: "Grew from fewer than 10 members to over 500, establishing the first satellite branches." },
  { year: "2014", text: "Expanded to 20+ branches across Uganda with a focus on youth and community outreach." },
  { year: "2018", text: "International expansion begins with branches in Kenya, Tanzania, and South Sudan." },
  { year: "2022", text: "Reached 60+ branches globally with major community impact programs launched." },
  { year: "2025", text: "80+ branches worldwide. Building a new worship center for the growing CHMI family." },
];

export default function About() {
  const historyRef = useScrollAnimation<HTMLDivElement>();
  const leadershipRef = useScrollAnimation<HTMLDivElement>();
  const purposeRef = useScrollAnimation<HTMLDivElement>();
  const faithRef = useScrollAnimation<HTMLDivElement>();
  const galleryRef = useScrollAnimation<HTMLDivElement>();
  const timelineRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <section className="page-hero-xl hero-about">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Globe size={14} /> Since 2007
          </div>
          <h1 className="hero-animate hero-animate-delay-2">About Christ's Heart</h1>
          <p className="hero-animate hero-animate-delay-3">
            A beacon of transformative spirituality in Uganda and throughout Africa,
            raising an Apostolic Generation that walks in divine authority.
          </p>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#0a0a0a" />
        </svg>
      </div>

      {/* History - Feature Row */}
      <section className="section">
        <div className="container">
          <div className="animate-on-scroll" ref={historyRef}>
            <div className="feature-row">
              <div className="feature-row-image image-reveal">
                <img
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
                  alt="Church community gathered in worship"
                  loading="lazy"
                />
              </div>
              <div className="feature-row-text">
                <span className="badge badge-purple" style={{ marginBottom: "1rem" }}>Our History</span>
                <h3>From Humble Beginnings</h3>
                <p>
                  Founded in 2007 by Bishop Isaiah and Rev. Deborah Mbuga, Christ's Heart Ministries
                  International stands as a beacon of transformative spirituality in Uganda and throughout
                  Africa. With its roots firmly planted in Mukono, Uganda, the ministry has grown into a
                  global presence, with over 80 branches worldwide.
                </p>
                <p>
                  What began as a humble gathering of fewer than 10 individuals has transformed into a
                  mega celebration center. The ministry's impact is felt through a spectrum of services,
                  dynamic Bible studies, engaging fellowships, and impactful outreach programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Dark */}
      <section className="about-timeline-section">
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label" style={{ color: "var(--gold-400)" }}>Our Journey</span>
            <h2 style={{ color: "var(--text-inverse)" }}>A Timeline of Growth</h2>
          </div>
          <div className="animate-on-scroll" ref={timelineRef}>
            <div className="timeline">
              {timelineEvents.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Church Life</span>
            <h2>Our Community</h2>
            <p>Moments of worship, fellowship, and transformation</p>
          </div>
          <div className="photo-gallery animate-on-scroll" ref={galleryRef}>
            {galleryImages.map((img, i) => (
              <div key={i} className="photo-gallery-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Feature Row Reversed */}
      <section className="section">
        <div className="container">
          <div className="animate-on-scroll" ref={leadershipRef}>
            <div className="feature-row reverse">
              <div className="feature-row-image image-reveal">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Church leadership portrait"
                  loading="lazy"
                />
              </div>
              <div className="feature-row-text">
                <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Leadership</span>
                <h3>Apostle Isaiah & Rev. Deborah Mbuga</h3>
                <p style={{ fontWeight: 500, color: "var(--text-light)", fontStyle: "italic", marginBottom: "1rem" }}>
                  General Overseers, Christ's Heart Ministries International
                </p>
                <p>
                  A father and a mentor to many, Apostle Isaiah is passionate about teaching and preaching
                  the word of God for the salvation and restoration of men and women with a great emphasis
                  on the tangible manifestation of God's power at work in and for the lives of His people.
                </p>
                <p>
                  Bishop Isaiah holds a master's degree in Journalism from the City University of London
                  and has taught as a lecturer before joining the full-time ministry. Many also
                  greatly know him as a gospel music writer and singer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div ref={purposeRef} className="animate-on-scroll" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <span className="section-label">Our Purpose</span>
            <h2 className="gradient-text" style={{ marginBottom: "2.5rem" }}>Mission & Vision</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div style={{
                padding: "2.5rem", background: "var(--white)",
                borderRadius: "var(--radius-2xl)", textAlign: "left",
                border: "1px solid var(--purple-100)", transition: "var(--transition)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "var(--radius-lg)",
                    background: "var(--purple-50)", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "var(--primary)"
                  }}>
                    <Heart size={22} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", fontWeight: 700 }}>Our Mission</h3>
                </div>
                <p style={{ color: "var(--gray-600)", lineHeight: 1.8 }}>
                  To seek and save all who are lost in sin, building the Body of Christ through
                  transformative worship, teaching, and community outreach across Uganda and the world.
                </p>
              </div>
              <div style={{
                padding: "2.5rem", background: "var(--white)",
                borderRadius: "var(--radius-2xl)", textAlign: "left",
                border: "1px solid var(--purple-100)", transition: "var(--transition)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "var(--radius-lg)",
                    background: "var(--purple-50)", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "var(--primary)"
                  }}>
                    <BookOpen size={22} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", fontWeight: 700 }}>Our Vision</h3>
                </div>
                <p style={{ color: "var(--gray-600)", lineHeight: 1.8 }}>
                  Raising an Apostolic Generation that walks in divine authority, power, and purpose,
                  impacting nations through the tangible manifestation of God's power.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
              {[
                { icon: Flame, label: "Apostolic Fire" },
                { icon: Heart, label: "Love & Grace" },
                { icon: Users, label: "Community" },
                { icon: Globe, label: "Global Impact" },
              ].map((v) => (
                <div key={v.label} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.6rem 1.25rem", background: "var(--white)",
                  borderRadius: "var(--radius-full)", border: "1px solid var(--purple-100)",
                  fontSize: "0.9rem", fontWeight: 600, color: "var(--primary)"
                }}>
                  <v.icon size={16} /> {v.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Believe</span>
            <h2>Statement of Faith</h2>
            <p>The foundational beliefs that guide our ministry and community</p>
          </div>
          <div ref={faithRef} className="animate-on-scroll" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="faith-list">
              {statementOfFaith.map((item, i) => (
                <div key={i} className="faith-item">
                  <div className="faith-number">{i + 1}</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
