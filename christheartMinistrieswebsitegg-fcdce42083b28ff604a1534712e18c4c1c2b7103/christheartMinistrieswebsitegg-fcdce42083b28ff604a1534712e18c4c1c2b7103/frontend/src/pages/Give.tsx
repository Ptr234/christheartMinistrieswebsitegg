import { Heart, Gift, Gem, Sprout, HandHeart, TrendingUp, Users, Globe } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Card3D from "../components/Card3D";

const givingOptions = [
  {
    icon: Heart,
    title: "Tithe",
    description: "Honor God with the first fruits of your increase. Your tithe supports the ministry's mission.",
  },
  {
    icon: Gift,
    title: "Offertory",
    description: "A freewill offering to support the work of God and the activities of the church.",
  },
  {
    icon: HandHeart,
    title: "Partnership",
    description: "Partner with us in ministry. Your partnership fuels global outreach and church planting.",
  },
  {
    icon: Sprout,
    title: "Seed",
    description: "Sow a seed of faith into the ministry for a specific breakthrough or testimony.",
  },
];

import { IMAGES } from "../utils/imageFallbacks";

const impactItems = [
  {
    img: IMAGES.giveImpact[0],
    title: "Community Outreach",
    desc: "Your giving feeds families, clothes children, and provides medical support in rural communities.",
  },
  {
    img: IMAGES.giveImpact[1],
    title: "Youth Empowerment",
    desc: "Investing in the next generation through mentorship programs, education, and spiritual development.",
  },
  {
    img: IMAGES.giveImpact[2],
    title: "Church Planting",
    desc: "Establishing new branches to bring the gospel and community to underserved areas across Africa.",
  },
];

export default function Give() {
  const gridRef = useScrollAnimation<HTMLDivElement>();
  const scriptureRef = useScrollAnimation<HTMLDivElement>();
  const meterRef = useScrollAnimation<HTMLDivElement>();
  const impactRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <section className="page-hero-xl hero-give">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Heart size={14} /> Generosity
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Give Online</h1>
          <p className="hero-animate hero-animate-delay-3">
            Your generosity fuels the mission of Christ's Heart Ministries. Every gift makes an
            eternal impact in the lives of people across Uganda and beyond.
          </p>
          <div className="give-hero-stat hero-animate hero-animate-delay-4">
            <div className="give-hero-stat-item">
              <span className="num">80+</span>
              <span className="label">Branches</span>
            </div>
            <div className="give-hero-stat-item">
              <span className="num">10,000+</span>
              <span className="label">Lives Touched</span>
            </div>
            <div className="give-hero-stat-item">
              <span className="num">50+</span>
              <span className="label">Outreaches</span>
            </div>
          </div>
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
            <span className="section-label">Ways to Give</span>
            <h2>Choose How You'd Like to Give</h2>
            <p>Select a giving category below to make your contribution</p>
          </div>

          <div className="giving-grid animate-on-scroll" ref={gridRef}>
            {givingOptions.map((option) => (
              <Card3D key={option.title} className="giving-card">
                <div className="giving-icon">
                  <option.icon size={28} />
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <button className="btn btn-primary">
                  <Gem size={16} /> Give {option.title}
                </button>
              </Card3D>
            ))}
          </div>

          {/* Donation Impact Meter */}
          <div className="donation-meter animate-on-scroll" ref={meterRef} style={{ marginTop: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <TrendingUp size={20} style={{ color: "var(--primary)" }} />
              <h3 style={{ margin: 0 }}>Building Fund Progress</h3>
            </div>
            <p>Help us build a new worship center for the growing Christ's Heart family</p>
            <div className="donation-progress">
              <div className="donation-progress-bar" style={{ width: "68%" }} />
            </div>
            <div className="donation-stats">
              <span>Raised: <strong>UGX 340M</strong></span>
              <span><strong>68%</strong> of goal</span>
              <span>Goal: <strong>UGX 500M</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Your Impact</span>
            <h2>Where Your Giving Goes</h2>
            <p>Every contribution creates tangible change in communities</p>
          </div>
          <div className="give-impact-grid animate-on-scroll" ref={impactRef}>
            {impactItems.map((item) => (
              <div key={item.title} className="give-impact-card">
                <img src={item.img} alt={item.title} loading="lazy" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="section">
        <div className="container">
          <div ref={scriptureRef} className="animate-on-scroll" style={{
            textAlign: "center", padding: "4rem 3rem",
            background: "linear-gradient(135deg, var(--purple-50), #fef3c7)",
            borderRadius: "var(--radius-2xl)",
            border: "1px solid var(--purple-100)", maxWidth: "700px", margin: "0 auto"
          }}>
            <p style={{
              fontSize: "1.35rem", fontStyle: "italic", color: "var(--primary)",
              fontFamily: "var(--font-display)", maxWidth: "600px", margin: "0 auto 1.25rem",
              lineHeight: 1.7
            }}>
              "Each of you should give what you have decided in your heart to give, not reluctantly
              or under compulsion, for God loves a cheerful giver."
            </p>
            <p style={{ color: "var(--text-light)", fontWeight: 600, fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
              — 2 Corinthians 9:7
            </p>
          </div>

          {/* Payment Info */}
          <div className="responsive-2col-grid" style={{
            maxWidth: "700px", margin: "3rem auto 0"
          }}>
            <div className="branch-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <Users size={18} style={{ color: "var(--primary)" }} />
                <h3 style={{ margin: 0 }}>Mobile Money</h3>
              </div>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.7 }}>
                Send your giving via Mobile Money to:<br />
                <strong style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}>+256 39 2177825</strong><br />
                Name: Christ's Heart Ministries
              </p>
            </div>
            <div className="branch-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <Globe size={18} style={{ color: "var(--primary)" }} />
                <h3 style={{ margin: 0 }}>Bank Transfer</h3>
              </div>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.7 }}>
                Bank details available on request.<br />
                Contact us at:<br />
                <strong style={{ color: "var(--primary)" }}>info@christsheart.org</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
