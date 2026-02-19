import { useState } from "react";
import { Calendar, User, Tag, ArrowRight, Rss, Search } from "lucide-react";
import { ALL_IMAGES, APOSTLE_ISAIAH } from "../utils/imageFallbacks";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    id: "apostolic-generation",
    title: "Raising an Apostolic Generation: The Call of Our Time",
    date: "February 12, 2026",
    author: "Apostle Isaiah Mbuga",
    category: "Teaching",
    excerpt: "The apostolic mandate is not merely an institutional title — it is a divine commission to father, equip, and release a generation that walks in the supernatural power of God. Apostle Isaiah explores what it truly means to raise an apostolic generation in our era and why the church cannot afford to neglect this call.",
    image: APOSTLE_ISAIAH.preaching,
    readTime: "6 min read",
  },
  {
    id: "marriage-flair-recap",
    title: "Marriage Flair 2026: Love, Covenant, and God's Design",
    date: "February 22, 2026",
    author: "CHMI Editorial",
    category: "Events",
    excerpt: "Marriage Flair 2026 brought together hundreds of couples and singles for a transformative gathering focused on building God-honouring homes. Sessions on communication, intimacy, and raising godly children made this one of our most impactful events of the year.",
    image: ALL_IMAGES[1],
    readTime: "4 min read",
  },
  {
    id: "prayer-that-moves-mountains",
    title: "Prayer That Moves Mountains: Lessons from Gerenge",
    date: "January 28, 2026",
    author: "Rev. Deborah Mbuga",
    category: "Prayer",
    excerpt: "Every year, the Gerenge Prayer Camp becomes a place of divine encounter. Believers gather from across Uganda and the world to seek the face of God in the wilderness. Rev. Deborah shares her reflections on the transforming power of consecrated, corporate prayer.",
    image: ALL_IMAGES[6],
    readTime: "5 min read",
  },
  {
    id: "branches-across-nations",
    title: "From Mukono to the Nations: How CHMI Grew",
    date: "January 15, 2026",
    author: "CHMI Editorial",
    category: "Ministry",
    excerpt: "What started as a small gathering in Mukono in 2007 has grown into a global apostolic movement spanning Uganda, Kenya, the UK, Canada, Belgium, the USA, Dubai, and Zambia. We trace the remarkable journey of Christ's Heart Ministries International and the grace that has sustained it.",
    image: ALL_IMAGES[8],
    readTime: "7 min read",
  },
  {
    id: "discipleship-why-it-matters",
    title: "Why Discipleship Is the Backbone of the Church",
    date: "January 5, 2026",
    author: "Apostle Isaiah Mbuga",
    category: "Teaching",
    excerpt: "The Great Commission is not just about evangelism — it is about making disciples. At CHMI, our Discipleship Class is central to everything we do. Here's why intentional, structured discipleship matters more than ever in a world filled with noise and distraction.",
    image: ALL_IMAGES[3],
    readTime: "8 min read",
  },
  {
    id: "youth-apostolic-fire",
    title: "Young, Anointed, and Apostolic: The Next Generation Rises",
    date: "December 22, 2025",
    author: "CHMI Youth Ministry",
    category: "Youth",
    excerpt: "The youth of Christ's Heart Ministries are not waiting for tomorrow — they are moving in God's power today. From leading worship to planting home cells, our young people are taking the Kingdom by force. Here are their stories and the fire that drives them.",
    image: ALL_IMAGES[7],
    readTime: "5 min read",
  },
];

const categories = ["All", "Teaching", "Events", "Prayer", "Ministry", "Youth"];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = posts.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const showFeatured = category === "All" && !search && filtered.length > 0;
  const gridPosts = showFeatured ? filtered.slice(1) : filtered;

  return (
    <>
      <section className="page-hero-xl hero-about">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Rss size={14} /> The Written Word
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Blog &amp; Insights</h1>
          <p className="hero-animate hero-animate-delay-3">
            Teachings, testimonies, event recaps, and ministry updates from
            Christ's Heart Ministries International.
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

          {/* Search + Category filter */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem", flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: "220px", position: "relative" }}>
              <Search size={16} style={{
                position: "absolute", left: "0.9rem", top: "50%",
                transform: "translateY(-50%)", color: "var(--text-light)", pointerEvents: "none"
              }} />
              <input
                type="text"
                placeholder="Search posts…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%", padding: "0.75rem 1rem 0.75rem 2.5rem",
                  border: "1.5px solid var(--gray-200)", borderRadius: "var(--radius-lg)",
                  fontFamily: "var(--font-body)", fontSize: "0.9rem", outline: "none",
                  boxSizing: "border-box", transition: "border-color 0.2s"
                }}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--primary)"; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--gray-200)"; }}
              />
            </div>
            <div className="branch-filter-chips" style={{ margin: 0 }}>
              {categories.map((cat) => (
                <button key={cat} className={`branch-chip ${category === cat ? "active" : ""}`} onClick={() => setCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured post */}
          {showFeatured && (
            <div className="blog-featured" style={{ marginBottom: "3rem" }}>
              <div style={{ overflow: "hidden", background: "var(--gray-100)" }}>
                <img
                  src={filtered[0].image}
                  alt={filtered[0].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span className="badge badge-purple"><Tag size={11} /> {filtered[0].category}</span>
                  <span className="badge badge-dark"><Calendar size={11} /> {filtered[0].date}</span>
                </div>
                <h2 style={{ fontSize: "1.5rem", lineHeight: 1.35, marginBottom: "1rem" }}>{filtered[0].title}</h2>
                <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {filtered[0].excerpt.slice(0, 200)}…
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <User size={14} /> {filtered[0].author}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                    {filtered[0].readTime}
                  </span>
                </div>
                <span className="btn btn-primary" style={{
                  marginTop: "1.5rem", display: "inline-flex", alignItems: "center",
                  gap: "0.4rem", width: "fit-content", cursor: "default",
                  fontSize: "0.9rem", padding: "0.6rem 1.25rem"
                }}>
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </div>
          )}

          {/* Posts grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "2rem" }}>
            {gridPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div style={{ height: "200px", overflow: "hidden", background: "var(--gray-100)" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    loading="lazy"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = ""; }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                    <span className="badge badge-purple" style={{ fontSize: "0.68rem" }}><Tag size={10} /> {post.category}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-light)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Calendar size={11} /> {post.date}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1rem", lineHeight: 1.45, marginBottom: "0.65rem" }}>{post.title}</h3>
                  <p style={{ color: "var(--gray-600)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {post.excerpt.slice(0, 120)}…
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-light)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <User size={11} /> {post.author}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-light)" }}>
              <Rss size={48} style={{ opacity: 0.3, marginBottom: "1rem" }} />
              <p>No posts found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
