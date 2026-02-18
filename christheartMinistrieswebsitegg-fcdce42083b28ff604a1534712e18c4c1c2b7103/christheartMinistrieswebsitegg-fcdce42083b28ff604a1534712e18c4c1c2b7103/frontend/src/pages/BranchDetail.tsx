import { lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowLeft, Quote, Church, Users } from "lucide-react";
import { branches } from "../data/branches";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import { IMAGES } from "../utils/imageFallbacks";

const LocationMap = lazy(() => import("../components/LocationMap"));
const branchImages = IMAGES.branches;

export default function BranchDetail() {
  const { id } = useParams<{ id: string }>();
  const branch = branches.find((b) => b.id === id);
  const contentRef = useScrollAnimation<HTMLDivElement>();

  if (!branch) {
    return (
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <h2>Branch Not Found</h2>
          <p style={{ marginTop: "1rem", color: "var(--text-light)" }}>
            The branch you're looking for doesn't exist.
          </p>
          <Link to="/branches" className="btn btn-primary" style={{ marginTop: "2rem" }}>
            <ArrowLeft size={18} /> Back to Branches
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero-xl hero-branches">
        <div className="container">
          <div className="breadcrumb hero-animate hero-animate-delay-1">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/branches">Branches</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: "var(--gold-400)" }}>{branch.name}</span>
          </div>
          <h1 className="hero-animate hero-animate-delay-2">{branch.name}</h1>
          <div className="branch-hero-info hero-animate hero-animate-delay-3">
            <span><MapPin size={16} /> {branch.city}</span>
            <span><Church size={16} /> Christ's Heart Branch</span>
            <span><Users size={16} /> Active Community</span>
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
          {/* Branch Gallery */}
          <div className="branch-gallery" style={{ marginBottom: "2.5rem" }}>
            {branchImages.map((img, i) => (
              <div key={i} className="branch-gallery-item">
                <img src={img} alt={`${branch.name} - Photo ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="branch-info-grid animate-on-scroll" ref={contentRef}>
            <div>
              {/* Pastors */}
              <div className="branch-info-card" style={{ marginBottom: "1.5rem" }}>
                <h3>Pastoral Team</h3>
                {branch.pastors.length > 0 ? (
                  branch.pastors.map((pastor, i) => (
                    <div key={i} className="pastor-card">
                      <div className="pastor-avatar">
                        <img
                          src={pastor.image || IMAGES.pastorDefault}
                          alt={pastor.name}
                          className="pastor-avatar-img"
                        />
                      </div>
                      <div className="pastor-info">
                        <h4>{pastor.name}</h4>
                        <p>{pastor.role}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "var(--text-light)" }}>Pastor information coming soon.</p>
                )}
              </div>

              {/* Testimonials */}
              {branch.testimonials.length > 0 && (
                <div className="branch-info-card" style={{ marginBottom: "1.5rem" }}>
                  <h3>Testimonials</h3>
                  {branch.testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card">
                      <Quote size={20} style={{ color: "var(--purple-300)", marginBottom: "0.5rem" }} />
                      <p>"{t.text}"</p>
                      <span className="testimonial-author">— {t.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Services */}
              <div className="branch-info-card">
                <h3>Service Times</h3>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem", background: "var(--purple-50)", borderRadius: "var(--radius-lg)" }}>
                  <Clock size={20} style={{ color: "var(--primary)", marginTop: "0.15rem", flexShrink: 0 }} />
                  <p style={{ color: "var(--gray-600)", lineHeight: 1.7 }}>{branch.services}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="branch-info-card" style={{ marginBottom: "1.5rem" }}>
                <h3>Contact Information</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "var(--radius-lg)",
                      background: "var(--purple-50)", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "var(--primary)", flexShrink: 0
                    }}>
                      <MapPin size={16} />
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address !== "Online" ? `${branch.name}, ${branch.address}, ${branch.city}` : branch.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}
                    >
                      {branch.address}
                    </a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "var(--radius-lg)",
                      background: "var(--purple-50)", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "var(--primary)", flexShrink: 0
                    }}>
                      <Phone size={16} />
                    </div>
                    <a href={`tel:${branch.phone}`} style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 600 }}>{branch.phone}</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "var(--radius-lg)",
                      background: "var(--purple-50)", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "var(--primary)", flexShrink: 0
                    }}>
                      <Mail size={16} />
                    </div>
                    <a href={`mailto:${branch.email}`} style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 600 }}>{branch.email}</a>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="branch-info-card">
                <h3>Location</h3>
                <Suspense fallback={<div style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--purple-50)", borderRadius: "var(--radius-lg)", color: "var(--text-light)" }}>Loading map...</div>}>
                  <LocationMap
                    address={`${branch.address}, ${branch.city}`}
                    label={branch.name}
                    lat={branch.lat}
                    lng={branch.lng}
                    height="250px"
                    zoom={15}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
