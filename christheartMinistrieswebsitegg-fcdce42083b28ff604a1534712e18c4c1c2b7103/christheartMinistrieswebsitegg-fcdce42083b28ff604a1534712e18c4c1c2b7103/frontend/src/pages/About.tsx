import { Heart, BookOpen, Globe, Users, Flame } from "lucide-react";
import { statementOfFaith } from "../data/faith";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import OptimizedImage from "../components/OptimizedImage";

import { IMAGES } from "../utils/imageFallbacks";

const galleryImages = [
  { src: IMAGES.gallery[0], alt: "Church worship service" },
  { src: IMAGES.gallery[1], alt: "Community gathering" },
  { src: IMAGES.gallery[2], alt: "Church celebration" },
  { src: IMAGES.gallery[3], alt: "Youth fellowship" },
  { src: IMAGES.gallery[4], alt: "Family in church" },
  { src: IMAGES.gallery[5], alt: "Church outreach" },
  { src: IMAGES.gallery[6], alt: "Choir worship" },
];

const timelineEvents = [
  { year: "2007", text: "Christ's Heart Ministries founded by Apostle Isaiah and Rev. Deborah Mbuga in Mukono, Uganda." },
  { year: "2010", text: "Grew from a small gathering into a congregation that established the first satellite branches." },
  { year: "2014", text: "Expanded presence across Uganda with a focus on youth and community outreach." },
  { year: "2018", text: "International expansion begins with branches in Kenya, Tanzania, and South Sudan." },
  { year: "2022", text: "Continued international growth with major community impact programs launched." },
  { year: "2025", text: "Ongoing growth and development, including plans for a new worship center for the CHMI family." },
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
                <OptimizedImage
                  src={IMAGES.history}
                  alt="Church community gathered in worship"
                  loading="eager"
                  aspectRatio="4/3"
                />
              </div>
              <div className="feature-row-text">
                <span className="badge badge-purple" style={{ marginBottom: "1rem" }}>Our History</span>
                <h3>From Humble Beginnings</h3>
                <p>
                  Founded in 2007 by Apostle Isaiah and Rev. Deborah Mbuga, Christ's Heart Ministries
                  International stands as a beacon of transformative spirituality in Uganda and throughout
                  Africa. With its roots firmly planted in Mukono, Uganda, the ministry has grown into a
                  lasting global presence.
                </p>
                <p>
                  What began as a humble gathering has transformed into a thriving ministry. The ministry's
                  impact is felt through a spectrum of services, dynamic Bible studies, engaging fellowships,
                  and impactful outreach programs.
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
                <OptimizedImage src={img.src} alt={img.alt} loading="lazy" aspectRatio="4/3" />
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
                <OptimizedImage
                  src={IMAGES.leadership}
                  alt="Apostle Isaiah & Rev. Deborah Mbuga"
                  loading="lazy"
                  aspectRatio="4/3"
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
                  Apostle Isaiah holds a master's degree in Journalism from the City University of London
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
            <div className="responsive-2col-grid">
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
      <section className="about-timeline-section">
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
