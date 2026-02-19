import { useState, useMemo } from "react";
import { Video, Search, Play, Mic, X, ExternalLink, ChevronDown } from "lucide-react";
import { useYouTubeVideos } from "../hooks/useYouTubeVideos";

const PAGE_SIZE = 10;

export default function Sermons() {
  const { sermons, loading, error } = useYouTubeVideos();
  const [search, setSearch] = useState("");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const filtered = useMemo(() =>
    sermons.filter((s) =>
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
    ), [sermons, search]);

  // Reset visible count when search changes
  const displayedSermons = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const featured = sermons[0];

  return (
    <>
      <section className="page-hero-xl hero-sermons">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Mic size={14} /> Listen & Learn
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Stream Sermons</h1>
          <p className="hero-animate hero-animate-delay-3">
            Watch powerful messages from Christ's Heart Ministries. Search and stream sermons
            to grow in faith and deepen your walk with God.
          </p>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#0a0a0a" />
        </svg>
      </div>

      {/* Featured Sermon */}
      {featured && !loading && (
        <section className="section" style={{ background: "var(--bg-alt)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="section-header">
              <span className="section-label">Latest Message</span>
              <h2>Most Recent Sermon</h2>
            </div>
            <div className="sermon-featured">
              <div className="sermon-featured-visual">
                {playingId === featured.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${featured.videoId}?autoplay=1`}
                    title={featured.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none", position: "absolute", inset: 0 }}
                  />
                ) : (
                  <>
                    <img src={featured.thumbnailHigh || featured.thumbnail} alt={featured.title} width={480} height={360} />
                    <button
                      className="sermon-featured-play"
                      onClick={() => setPlayingId(featured.id)}
                      aria-label="Play sermon"
                    >
                      <Play size={32} />
                    </button>
                  </>
                )}
              </div>
              <div className="sermon-featured-content">
                <span className="badge badge-gold">Latest</span>
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                  {playingId === featured.id ? (
                    <button
                      className="btn btn-gold"
                      style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
                      onClick={() => setPlayingId(null)}
                    >
                      <X size={16} /> Close Player
                    </button>
                  ) : (
                    <button
                      className="btn btn-gold"
                      style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
                      onClick={() => setPlayingId(featured.id)}
                    >
                      <Play size={16} /> Stream Now
                    </button>
                  )}
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", opacity: 0.7, fontFamily: "var(--font-mono)" }}>
                    {new Date(featured.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Sermons */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Library</span>
            <h2>All Sermons</h2>
            {!loading && <p>{sermons.length} sermons from Christ's Heart TV</p>}
          </div>

          <div className="search-bar">
            <div style={{ position: "relative", flex: 1 }}>
              <Search size={18} style={{
                position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)",
                color: "var(--gray-400)"
              }} />
              <input
                type="text"
                placeholder="Search sermons by title..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setVisibleCount(PAGE_SIZE); }}
                style={{ paddingLeft: "2.5rem", width: "100%" }}
                aria-label="Search sermons"
              />
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="sermon-card">
                  <div className="sermon-icon skeleton" style={{ width: 56, height: 56 }} />
                  <div className="sermon-info" style={{ flex: 1 }}>
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-text" style={{ width: "60%" }} />
                    <div className="skeleton skeleton-text" style={{ width: "80%" }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-light)" }}>
              <Video size={48} style={{ marginBottom: "1rem", opacity: 0.3 }} />
              <p>Unable to load sermons from YouTube.</p>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>{error}</p>
              <a
                href="https://www.youtube.com/@ChristsHeart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: "1.5rem" }}
              >
                <ExternalLink size={16} /> Watch on YouTube
              </a>
            </div>
          )}

          {/* Sermon List */}
          {!loading && !error && (
            <div className="sermons-list">
              {filtered.length === 0 ? (
                <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-light)" }}>
                  <Search size={48} style={{ marginBottom: "1rem", opacity: 0.3 }} />
                  <p>No sermons found matching your search.</p>
                </div>
              ) : (
                displayedSermons.map((sermon) => {
                  const isPlaying = playingId === sermon.id;
                  return (
                    <div key={sermon.id} className="sermon-card">
                      {isPlaying ? (
                        <div className="sermon-player">
                          <iframe
                            src={`https://www.youtube.com/embed/${sermon.videoId}?autoplay=1`}
                            title={sermon.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="sermon-thumbnail" onClick={() => setPlayingId(sermon.id)}>
                          <img src={sermon.thumbnail} alt={sermon.title} loading="lazy" width={320} height={180} decoding="async" />
                          <div className="sermon-thumbnail-play">
                            <Play size={24} />
                          </div>
                        </div>
                      )}
                      <div className="sermon-card-body">
                        <div className="sermon-info">
                          <h3>{sermon.title}</h3>
                          <div className="sermon-meta">
                            <span>{new Date(sermon.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                          </div>
                        </div>
                        {isPlaying ? (
                          <button className="btn btn-primary btn-sm" onClick={() => setPlayingId(null)}>
                            <X size={14} /> Close
                          </button>
                        ) : (
                          <button className="btn btn-primary btn-sm" onClick={() => setPlayingId(sermon.id)}>
                            <Play size={14} /> Stream
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* Show More / Count */}
          {!loading && !error && filtered.length > 0 && (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "1rem" }}>
                Showing {displayedSermons.length} of {filtered.length} sermons
              </p>
              {hasMore && (
                <button
                  className="btn btn-primary"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  style={{ gap: "0.5rem" }}
                >
                  <ChevronDown size={16} /> Show More
                </button>
              )}
            </div>
          )}

          {/* YouTube Channel Link */}
          {!loading && !error && (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                href="https://www.youtube.com/@ChristsHeart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-black"
              >
                <ExternalLink size={16} /> View All on YouTube
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
