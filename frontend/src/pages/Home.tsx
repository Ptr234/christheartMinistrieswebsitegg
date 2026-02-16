import { Link } from "react-router-dom";
import {
  MapPin, Users, BookOpen, Clock, Headphones,
  Church, Globe, Star, ArrowRight, Flame, Heart, Mic, HandHeart
} from "lucide-react";
import { events } from "../data/events";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCountUp } from "../hooks/useCountUp";
import { useCursorGlow } from "../hooks/useCursorGlow";
import ParticleField from "../components/ParticleField";
import CountdownTimer from "../components/CountdownTimer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import TypingText from "../components/TypingText";
import SectionNav from "../components/SectionNav";
import Card3D from "../components/Card3D";

function AnimatedSection({ children, className = "" }: {
  children: React.ReactNode; className?: string;
}) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

const eventImages = [
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
  "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80",
];

const sections = [
  { id: "hero", label: "Hero" },
  { id: "stats", label: "Stats" },
  { id: "mission", label: "Our Story" },
  { id: "services", label: "Services" },
  { id: "impact", label: "Impact" },
  { id: "events", label: "Events" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Join Us" },
];

export default function Home() {
  const statsRef = useScrollAnimation<HTMLDivElement>();
  const missionRef = useScrollAnimation<HTMLDivElement>();
  const servicesRef = useScrollAnimation<HTMLDivElement>();
  const eventsRef = useScrollAnimation<HTMLDivElement>();
  const ctaRef = useScrollAnimation<HTMLDivElement>();
  const impactRef = useScrollAnimation<HTMLDivElement>();
  const cursorGlowRef = useCursorGlow();

  const branches = useCountUp(80, 2000);
  const locations = useCountUp(20, 1800);
  const year = useCountUp(2007, 2500);
  const lives = useCountUp(1000, 2200);

  return (
    <>
      <SectionNav sections={sections} />

      {/* Hero */}
      <section className="hero cursor-glow" id="hero" ref={cursorGlowRef}>
        <div className="hero-gradient-overlay" />
        <ParticleField />
        <div className="hero-decor hero-decor-1" />
        <div className="hero-decor hero-decor-2" />
        <div className="hero-decor hero-decor-3" />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-label hero-animate hero-animate-delay-1">
              <Flame size={16} />
              <TypingText
                texts={[
                  "We Are Raising An Apostolic Generation",
                  "80+ Branches Worldwide",
                  "Transforming Lives Since 2007",
                ]}
                speed={50}
                pause={3000}
              />
            </div>
            <h1 className="hero-animate hero-animate-delay-2">
              Christ's Heart
              <span>Ministries International</span>
            </h1>
            <p className="hero-animate hero-animate-delay-3">
              Founded in 2007, Christ's Heart Ministries stands as a beacon of transformative
              spirituality in Uganda and throughout Africa, with over 80 branches worldwide.
            </p>
            <div className="hero-buttons hero-animate hero-animate-delay-4">
              <Link to="/branches" className="btn btn-gold">
                <MapPin size={18} /> Find a Church
              </Link>
              <Link to="/about" className="btn btn-white">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hero-animate hero-animate-delay-4" style={{ marginTop: "2rem" }}>
              <CountdownTimer />
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-animate hero-animate-delay-3">
              <h3>Services & Meetings</h3>
              <div className="service-item">
                <div className="service-icon"><Church size={18} /></div>
                <div>
                  <h4>Sunday Services</h4>
                  <p>7am, 9am (Teen's), 11am & 4pm</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><Clock size={18} /></div>
                <div>
                  <h4>Lunch Hour Services</h4>
                  <p>Check with your local branch</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><Star size={18} /></div>
                <div>
                  <h4>Night Services</h4>
                  <p>Special evening gatherings</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><BookOpen size={18} /></div>
                <div>
                  <h4>Bible Study & Home Cells</h4>
                  <p>Mid-week fellowship groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Animated Counters */}
      <section className="stats-bar" id="stats">
        <div className="stats-inner animate-on-scroll" ref={statsRef}>
          <div className="stat-card" ref={branches.ref}>
            <div className="stat-number">{branches.count}+</div>
            <div className="stat-label">Branches Worldwide</div>
          </div>
          <div className="stat-card" ref={locations.ref}>
            <div className="stat-number">{locations.count}+</div>
            <div className="stat-label">Uganda Locations</div>
          </div>
          <div className="stat-card" ref={year.ref}>
            <div className="stat-number">{year.count}</div>
            <div className="stat-label">Year Founded</div>
          </div>
          <div className="stat-card" ref={lives.ref}>
            <div className="stat-number">{lives.count}s</div>
            <div className="stat-label">Lives Transformed</div>
          </div>
        </div>
      </section>

      {/* Mission with Image Reveal */}
      <section className="mission-section" id="mission">
        <div className="container">
          <div className="mission-grid animate-on-scroll" ref={missionRef}>
            <div className="mission-image image-reveal">
              <img
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
                alt="Church community gathered in worship"
                loading="lazy"
              />
            </div>
            <div className="mission-text">
              <span className="section-label">Our Story</span>
              <h2>We Are Raising An Apostolic Generation</h2>
              <p>
                What began as a humble gathering of fewer than 10 individuals has transformed into
                a mega celebration center. The ministry's impact is felt through a spectrum of services,
                dynamic Bible studies, engaging fellowships, and impactful outreach programs.
              </p>
              <p>
                Bishop Isaiah holds a master's degree in Journalism from the City University of London.
                He is passionate about teaching and preaching the word of God for the salvation and
                restoration of men and women.
              </p>
              <div className="mission-features">
                <div className="mission-feature">
                  <div className="feature-icon"><Globe size={20} /></div>
                  <span>80+ Branches Across the World</span>
                </div>
                <div className="mission-feature">
                  <div className="feature-icon"><Users size={20} /></div>
                  <span>Dynamic Community of Believers</span>
                </div>
                <div className="mission-feature">
                  <div className="feature-icon"><Flame size={20} /></div>
                  <span>Apostolic Power & Teaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with 3D Cards */}
      <section className="services-section section" id="services">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2>Services & Meetings</h2>
              <p>Join us for transformative worship experiences throughout the week</p>
            </div>
          </AnimatedSection>
          <div className="services-grid animate-on-scroll" ref={servicesRef}>
            {[
              { icon: Church, title: "Sunday Services", id: "sunday-services", desc: "7am, 9am (Teen's Service), 11am and 4pm. Please check for variations with your local branch." },
              { icon: BookOpen, title: "Bible Study", id: "bible-study", desc: "Deep dive into God's word with interactive Bible study sessions and home cell fellowships." },
              { icon: Star, title: "Overnight Prayers", id: "overnight-prayers", desc: "Powerful overnight prayer sessions for breakthrough and divine encounters." },
              { icon: Headphones, title: "Lunch Hour Services", id: "lunch-hour-services", desc: "Mid-day refreshing for working professionals and students." },
              { icon: Users, title: "Home Cells", id: "home-cells", desc: "Small group fellowships in homes for deeper connection and spiritual growth." },
              { icon: Flame, title: "Night Services", id: "night-services", desc: "Special evening worship gatherings for spiritual empowerment." },
            ].map((service) => (
              <Link key={service.title} to={`/services/${service.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card3D className="service-card-home">
                  <div className="svc-icon"><service.icon size={28} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                    color: "var(--gold-400)", fontSize: "0.85rem", fontWeight: 600,
                    marginTop: "1rem", fontFamily: "var(--font-mono)"
                  }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </Card3D>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Impact Section */}
      <section className="impact-section section" id="impact">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Our Reach</span>
              <h2>Ministry Impact</h2>
              <p>Transforming lives and communities across Uganda and beyond</p>
            </div>
          </AnimatedSection>
          <div className="impact-grid animate-on-scroll" ref={impactRef}>
            <Card3D className="impact-card">
              <div className="impact-card-icon"><Mic size={28} /></div>
              <div className="impact-number">500+</div>
              <div className="impact-label">Sermons Preached</div>
              <div className="impact-bar"><div className="impact-bar-fill" style={{ width: "85%" }} /></div>
            </Card3D>
            <Card3D className="impact-card">
              <div className="impact-card-icon"><HandHeart size={28} /></div>
              <div className="impact-number">10K+</div>
              <div className="impact-label">Lives Touched</div>
              <div className="impact-bar"><div className="impact-bar-fill" style={{ width: "92%" }} /></div>
            </Card3D>
            <Card3D className="impact-card">
              <div className="impact-card-icon"><Heart size={28} /></div>
              <div className="impact-number">200+</div>
              <div className="impact-label">Community Outreaches</div>
              <div className="impact-bar"><div className="impact-bar-fill" style={{ width: "70%" }} /></div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Featured Events with Image Reveals */}
      <section className="featured-events section" id="events">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Upcoming</span>
              <h2>Featured Events</h2>
              <p>Don't miss these powerful gatherings</p>
            </div>
          </AnimatedSection>
          <div className="featured-events-grid animate-on-scroll" ref={eventsRef}>
            {events.map((event, i) => (
              <Card3D key={event.id} className="event-card">
                <div className="event-card-image image-reveal">
                  <img
                    src={eventImages[i % eventImages.length]}
                    alt={`${event.name} event`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className="event-card-image-overlay" />
                  <div className="event-date-badge">{event.date}</div>
                </div>
                <div className="event-card-body">
                  <h3>{event.name}</h3>
                  <div className="event-meta">
                    <span><Clock size={14} /> {event.time}</span>
                    <span><MapPin size={14} /> {event.location}</span>
                  </div>
                  <p>{event.description.slice(0, 120)}...</p>
                  <Link to={`/events/${event.id}`} className="btn btn-primary">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section id="testimonials">
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <ParticleField />
        <div className="container animate-on-scroll" ref={ctaRef}>
          <h2>Join Us This Sunday</h2>
          <p>
            Experience the love of God and the warmth of our community. There's a Christ's Heart
            branch near you waiting with open arms.
          </p>
          <div className="cta-buttons">
            <Link to="/branches" className="btn btn-gold">
              <MapPin size={18} /> Find a Branch
            </Link>
            <Link to="/contact" className="btn btn-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
