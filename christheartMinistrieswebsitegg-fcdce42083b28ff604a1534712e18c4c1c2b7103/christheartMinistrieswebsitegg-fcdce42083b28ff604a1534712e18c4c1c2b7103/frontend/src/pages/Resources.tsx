import { Download, BookOpen, FileText, ExternalLink, Star } from "lucide-react";
import { ALL_IMAGES, APOSTLE_ISAIAH } from "../utils/imageFallbacks";

interface Resource {
  id: string;
  title: string;
  author: string;
  type: "book" | "pdf";
  description: string;
  image: string;
  year: string;
  pages: string;
}

const resources: Resource[] = [
  {
    id: "walking-in-divine-authority",
    title: "Walking in Divine Authority",
    author: "Apostle Isaiah Mbuga",
    type: "book",
    description: "A powerful teaching on the believer's authority in Christ. Apostle Isaiah unpacks the spiritual principles that enable every Christian to operate in divine power, healing, and deliverance — not just the clergy, but every member of the Body of Christ.",
    image: APOSTLE_ISAIAH.preaching,
    year: "2024",
    pages: "148 pages",
  },
  {
    id: "raising-apostolic-generation",
    title: "Raising an Apostolic Generation",
    author: "Apostle Isaiah Mbuga",
    type: "book",
    description: "The foundational text behind the CHMI vision. This book explores the call to raise a generation of believers who are active carriers of the apostolic mandate, equipped to transform their cities and nations through the power of God.",
    image: ALL_IMAGES[4],
    year: "2022",
    pages: "192 pages",
  },
  {
    id: "prayer-of-the-consecrated",
    title: "The Prayer of the Consecrated",
    author: "Rev. Deborah Mbuga",
    type: "pdf",
    description: "A practical guide to consecrated prayer drawn from years of leading the Gerenge Prayer Camp. Rev. Deborah shares prayer patterns, declarations, and biblical foundations for a life of deep intercession and spiritual warfare.",
    image: ALL_IMAGES[6],
    year: "2023",
    pages: "64 pages",
  },
  {
    id: "covenant-of-the-home",
    title: "Covenant of the Home",
    author: "Apostle Isaiah & Rev. Deborah Mbuga",
    type: "book",
    description: "A marriage and family resource for building a God-centred home. Covers God's design for marriage, practical communication principles, raising children in faith, and establishing the home as a place of spiritual authority.",
    image: APOSTLE_ISAIAH.couple,
    year: "2021",
    pages: "120 pages",
  },
];

const mediaLinks = [
  {
    label: "PROMISE TV",
    url: "https://www.instagram.com/promisetv",
    desc: "Prophetic broadcast ministry — follow on Instagram for live streams and clips",
    color: "var(--primary)",
  },
  {
    label: "Christ's Heart TV",
    url: "https://www.youtube.com/@christshearttv",
    desc: "Full sermons, conferences, and teachings on our YouTube channel",
    color: "var(--gold-600)",
  },
  {
    label: "Christ's Heart Radio",
    url: "#",
    desc: "Tune in to our online radio for 24/7 ministry broadcasts and music",
    color: "var(--purple-700)",
  },
];

export default function Resources() {
  const handleDownload = () => {
    alert("Download coming soon! Contact info@christsheart.org to request this resource.");
  };

  return (
    <>
      <section className="page-hero-xl hero-about">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <BookOpen size={14} /> Resources
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Books &amp; Downloads</h1>
          <p className="hero-animate hero-animate-delay-3">
            Grow deeper in faith with teachings, books, and resources from Apostle Isaiah Mbuga
            and the Christ's Heart Ministries family.
          </p>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#0a0a0a" />
        </svg>
      </div>

      {/* Books */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Publications</span>
            <h2>Books by Apostle Isaiah Mbuga</h2>
            <p>Transformative teaching in written form — for your growth and the growth of those you lead</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "2rem" }}>
            {resources.map((res) => (
              <div key={res.id} className="resource-card">
                <div style={{ height: "220px", overflow: "hidden", position: "relative", background: "var(--gray-100)" }}>
                  <img
                    src={res.image}
                    alt={res.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    loading="lazy"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = ""; }}
                  />
                  <div style={{
                    position: "absolute", top: "0.75rem", right: "0.75rem",
                    background: res.type === "book" ? "var(--primary)" : "var(--gold-600)",
                    color: "white", borderRadius: "var(--radius-full)",
                    padding: "0.25rem 0.75rem", fontSize: "0.68rem", fontWeight: 700,
                    fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em",
                    display: "flex", alignItems: "center", gap: "0.3rem"
                  }}>
                    {res.type === "book"
                      ? <><BookOpen size={10} /> Book</>
                      : <><FileText size={10} /> PDF</>}
                  </div>
                </div>
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "2px", marginBottom: "0.5rem" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} fill="var(--gold-400)" color="var(--gold-400)" />
                    ))}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", lineHeight: 1.4, marginBottom: "0.35rem" }}>{res.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--primary)", fontWeight: 600, marginBottom: "0.75rem" }}>{res.author}</p>
                  <p style={{ color: "var(--gray-600)", fontSize: "0.87rem", lineHeight: 1.7, flex: 1, marginBottom: "0.75rem" }}>
                    {res.description.slice(0, 150)}…
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginBottom: "1rem" }}>
                    {res.year} · {res.pages}
                  </p>
                  <button onClick={handleDownload} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    <Download size={14} /> Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media channels */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ color: "var(--gold-400)" }}>Media</span>
            <h2 style={{ color: "var(--text-inverse)" }}>Watch, Listen &amp; Connect</h2>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>Access our media channels for sermons, teachings, and prophetic broadcasts</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {mediaLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block", padding: "1.75rem",
                  background: "rgba(255,255,255,0.06)", borderRadius: "var(--radius-xl)",
                  border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none",
                  transition: "background 0.2s, transform 0.2s"
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "var(--radius-lg)",
                    background: link.color, display: "flex", alignItems: "center",
                    justifyContent: "center", color: "white", flexShrink: 0
                  }}>
                    <ExternalLink size={18} />
                  </div>
                  <h4 style={{ color: "var(--text-inverse)", margin: 0 }}>{link.label}</h4>
                </div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
