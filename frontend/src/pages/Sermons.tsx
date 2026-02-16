import { useState } from "react";
import { Download, Headphones, Video, FileText, Search, Play, Pause, Mic } from "lucide-react";
import { sermons } from "../data/sermons";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const typeIcons = {
  audio: Headphones,
  video: Video,
  pdf: FileText,
};

export default function Sermons() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const listRef = useScrollAnimation<HTMLDivElement>();

  const filtered = sermons.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.preacher.toLowerCase().includes(search.toLowerCase());
    const matchesType = !filterType || s.type === filterType;
    return matchesSearch && matchesType;
  });

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  // Pick the first audio sermon as "featured"
  const featured = sermons.find((s) => s.type === "audio");

  return (
    <>
      <section className="page-hero-xl hero-sermons">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Mic size={14} /> Listen & Learn
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Download Sermons</h1>
          <p className="hero-animate hero-animate-delay-3">
            Access powerful messages from our pastors. Search, filter, and download sermons to grow in faith
            and deepen your walk with God.
          </p>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#0a0a0a" />
        </svg>
      </div>

      {/* Featured Sermon */}
      {featured && (
        <section className="section" style={{ background: "var(--bg-alt)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="section-header">
              <span className="section-label">Featured Message</span>
              <h2>Sermon of the Week</h2>
            </div>
            <div className="sermon-featured">
              <div className="sermon-featured-visual">
                <img
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                  alt="Worship scene"
                  loading="lazy"
                />
                <button
                  className="sermon-featured-play"
                  onClick={() => togglePlay(featured.id)}
                  aria-label={playingId === featured.id ? "Pause" : "Play"}
                >
                  {playingId === featured.id ? <Pause size={32} /> : <Play size={32} />}
                </button>
              </div>
              <div className="sermon-featured-content">
                <span className="badge badge-gold">Featured</span>
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href={featured.downloadUrl} className="btn btn-gold" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>
                    <Download size={16} /> Download
                  </a>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", opacity: 0.7, fontFamily: "var(--font-mono)" }}>
                    {featured.preacher} &middot; {new Date(featured.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Sermons */}
      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-header">
            <span className="section-label">Library</span>
            <h2>All Sermons</h2>
          </div>

          <div className="search-bar">
            <div style={{ position: "relative", flex: 1 }}>
              <Search size={18} style={{
                position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)",
                color: "var(--gray-400)"
              }} />
              <input
                type="text"
                placeholder="Search sermons by title or preacher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ paddingLeft: "2.5rem", width: "100%" }}
                aria-label="Search sermons"
              />
            </div>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} aria-label="Filter by type">
              <option value="">All Types</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div className="sermons-list animate-on-scroll" ref={listRef}>
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-light)" }}>
                <Search size={48} style={{ marginBottom: "1rem", opacity: 0.3 }} />
                <p>No sermons found matching your search.</p>
              </div>
            ) : (
              filtered.map((sermon) => {
                const Icon = typeIcons[sermon.type];
                const isPlaying = playingId === sermon.id;
                return (
                  <div key={sermon.id} className="sermon-card">
                    {sermon.type === "audio" && (
                      <button
                        className={`sermon-preview-btn ${isPlaying ? "playing" : ""}`}
                        onClick={() => togglePlay(sermon.id)}
                        aria-label={isPlaying ? "Pause preview" : "Play preview"}
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                    )}
                    <div className="sermon-icon">
                      <Icon size={24} />
                    </div>
                    <div className="sermon-info">
                      <h3>{sermon.title}</h3>
                      <div className="sermon-meta">
                        <span>{sermon.preacher}</span>
                        <span>{new Date(sermon.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                        <span className="badge badge-purple">{sermon.type}</span>
                      </div>
                      <p>{sermon.description}</p>
                      {isPlaying && (
                        <div style={{
                          display: "flex", alignItems: "center", gap: "0.5rem",
                          marginTop: "0.5rem", fontSize: "0.8rem", color: "var(--primary)",
                          fontFamily: "var(--font-mono)"
                        }}>
                          <span style={{
                            display: "inline-block", width: "8px", height: "8px",
                            borderRadius: "50%", background: "var(--primary)",
                            animation: "blink 1s infinite"
                          }} />
                          Playing preview...
                        </div>
                      )}
                    </div>
                    <div className="sermon-actions">
                      <a href={sermon.downloadUrl} className="btn btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>
                        <Download size={16} /> Download
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
