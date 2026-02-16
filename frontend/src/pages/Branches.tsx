import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Church, Search } from "lucide-react";
import { branches } from "../data/branches";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Card3D from "../components/Card3D";

export default function Branches() {
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const gridRef = useScrollAnimation<HTMLDivElement>();

  const cities = useMemo(() => {
    const all = branches.map((b) => b.city);
    return [...new Set(all)].sort();
  }, []);

  const filtered = useMemo(() => {
    return branches.filter((b) => {
      const matchSearch =
        !search ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.city.toLowerCase().includes(search.toLowerCase()) ||
        b.address.toLowerCase().includes(search.toLowerCase());
      const matchCity = !cityFilter || b.city === cityFilter;
      return matchSearch && matchCity;
    });
  }, [search, cityFilter]);

  return (
    <>
      <section className="page-hero-xl hero-branches">
        <div className="container">
          <div className="hero-tag hero-animate hero-animate-delay-1">
            <Church size={14} /> 80+ Branches Worldwide
          </div>
          <h1 className="hero-animate hero-animate-delay-2">Find a Church Near You</h1>
          <p className="hero-animate hero-animate-delay-3">
            Christ's Heart Ministries has branches across Uganda and around the world.
            Visit a branch near you today.
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
          {/* Search & Filter */}
          <div className="branch-search">
            <div className="branch-search-wrapper">
              <Search size={18} className="branch-search-icon" />
              <input
                type="text"
                placeholder="Search branches by name, city, or address..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search branches"
              />
            </div>
          </div>

          <div className="branch-filter-chips" style={{ marginBottom: "1rem" }}>
            <button
              className={`branch-chip ${!cityFilter ? "active" : ""}`}
              onClick={() => setCityFilter("")}
            >
              All Cities
            </button>
            {cities.map((city) => (
              <button
                key={city}
                className={`branch-chip ${cityFilter === city ? "active" : ""}`}
                onClick={() => setCityFilter(cityFilter === city ? "" : city)}
              >
                {city}
              </button>
            ))}
          </div>

          <p className="branch-count">
            Showing {filtered.length} of {branches.length} branches
            {search && <> matching "<strong>{search}</strong>"</>}
            {cityFilter && <> in <strong>{cityFilter}</strong></>}
          </p>

          <div className="branches-grid animate-on-scroll" ref={gridRef}>
            {filtered.length === 0 ? (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--text-light)" }}>
                <Church size={48} style={{ marginBottom: "1rem", opacity: 0.3 }} />
                <p>No branches found. Try a different search term.</p>
              </div>
            ) : (
              filtered.map((branch) => (
                <Card3D key={branch.id} className="branch-card">
                  <div className="branch-card-header">
                    <div className="branch-card-icon">
                      <Church size={22} />
                    </div>
                    <div>
                      <h3>{branch.name}</h3>
                      <span className="branch-city">{branch.city}</span>
                    </div>
                  </div>
                  <div className="branch-card-body">
                    <div className="info-row">
                      <MapPin size={16} />
                      <span>{branch.address}</span>
                    </div>
                    <div className="info-row">
                      <Phone size={16} />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="info-row">
                      <Mail size={16} />
                      <span>{branch.email}</span>
                    </div>
                  </div>
                  <div className="branch-card-footer">
                    <Link to={`/branches/${branch.id}`}>
                      More Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card3D>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
