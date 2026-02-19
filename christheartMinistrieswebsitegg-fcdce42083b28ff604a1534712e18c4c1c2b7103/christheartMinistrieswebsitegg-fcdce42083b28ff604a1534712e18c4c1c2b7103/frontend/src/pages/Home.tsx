import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, Users, BookOpen, Clock, Headphones,
  Church, Globe, Star, ArrowRight, Flame
} from "lucide-react";
import { events } from "../data/events";
import { getUpcomingEvents } from "../utils/eventDate";
import { IMAGES, ALL_IMAGES } from "../utils/imageFallbacks";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCursorGlow } from "../hooks/useCursorGlow";
import ParticleField from "../components/ParticleField";
import CountdownTimer from "../components/CountdownTimer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import TypingText from "../components/TypingText";
import SectionNav from "../components/SectionNav";
import Card3D from "../components/Card3D";
import OptimizedImage from "../components/OptimizedImage";

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

const sections = [
  { id: "hero", label: "Hero" },
  { id: "mission", label: "Our Story" },
  { id: "services", label: "Services" },
  { id: "events", label: "Events" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Join Us" },
];

const SERVICES_DATA = [
  {
    icon: Church,
    title: "Sunday Services",
    id: "sunday-services",
    desc: "7am, 9am (Teen's Service), 11am and 4pm. Please check for variations with your local branch.",
    bgImg: ALL_IMAGES[0],
  },
  {
    icon: BookOpen,
    title: "Discipleship Class",
    id: "discipleship-class",
    desc: "Deep dive into God's word with interactive discipleship sessions and home cell fellowships.",
    bgImg: ALL_IMAGES[2],
  },
  {
    icon: Star,
    title: "Overnight Prayers",
    id: "overnight-prayers",
    desc: "Powerful overnight prayer sessions for breakthrough and divine encounters.",
    bgImg: ALL_IMAGES[4],
  },
  {
    icon: Headphones,
    title: "Lunch Hour Services",
    id: "lunch-hour-services",
    desc: "Mid-day refreshing. Kampala branch: 12:45pm – 1:45pm.",
    bgImg: ALL_IMAGES[6],
  },
  {
    icon: Users,
    title: "Home Cells",
    id: "home-cells",
    desc: "Small group fellowships in homes for deeper connection and spiritual growth.",
    bgImg: ALL_IMAGES[3],
  },
  {
    icon: Flame,
    title: "Night Services",
    id: "night-services",
    desc: "Special evening worship gatherings for spiritual empowerment.",
    bgImg: ALL_IMAGES[5],
  },
];

export default function Home() {
  const missionRef = useScrollAnimation<HTMLDivElement>();
  const servicesRef = useScrollAnimation<HTMLDivElement>();
  const ctaRef = useScrollAnimation<HTMLDivElement>();
  const cursorGlowRef = useCursorGlow();

  // Preload hero background for fast LCP
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = `${import.meta.env.BASE_URL}images/hero-bg.jpg`;
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const upcomingEvents = getUpcomingEvents(events);

  return (
    <>
      <SectionNav sections={sections} />

      {/* Hero */}
      <section className="hero cursor-glow" id="hero" ref={cursorGlowRef} style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.jpg)` }}>
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
                  "Branches Worldwide",
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
              spirituality in Uganda and throughout Africa, with a broad international presence.
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
                  <p>Kampala: 12:45pm – 1:45pm</p>
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
                  <h4>Discipleship Class & Home Cells</h4>
                  <p>Mid-week fellowship groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission with Image Reveal */}
      <section className="mission-section" id="mission">
        <div className="container">
          <div className="mission-grid animate-on-scroll" ref={missionRef}>
            <div className="mission-image image-reveal">
              <OptimizedImage
                src={IMAGES.mission}
                alt="Apostle Isaiah & Rev. Deborah Mbuga"
                loading="eager"
                aspectRatio="4/3"
              />
            </div>
            <div className="mission-text">
              <span className="section-label">Our Story</span>
              <h2>We Are Raising An Apostolic Generation</h2>
              <p>
                What began as a humble gathering has transformed into a vibrant ministry. The ministry's
                impact is felt through a spectrum of services, discipleship, engaging fellowships,
                and impactful outreach programs.
              </p>
              <p>
                Apostle Isaiah holds a master's degree in Journalism from the City University of London.
                He is passionate about teaching and preaching the word of God for the salvation and
                restoration of men and women.
              </p>
              <div className="mission-features">
                <div className="mission-feature">
                  <div className="feature-icon"><Globe size={20} /></div>
                  <span>Branches Across the World</span>
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

      {/* Services with 3D Cards + Background Images */}
      <section className="services-section section" id="services">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Services & Gatherings</h2>
              <p>Join us for transformative worship experiences throughout the week</p>
            </div>
          </AnimatedSection>
          <div className="services-grid animate-on-scroll" ref={servicesRef}>
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.title}
                to={`/services/${service.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card3D
                  className="service-card-home"
                  style={{ "--svc-bg-img": `url(${service.bgImg})` } as React.CSSProperties}
                >
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

      {/* Featured Events – Horizontal Marquee */}
      <section className="featured-events section" id="events">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Upcoming</span>
              <h2>Events & Gatherings</h2>
              <p>Don't miss these powerful moments</p>
            </div>
          </AnimatedSection>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="events-marquee">
            <div className="events-marquee-track">
              {[...upcomingEvents, ...upcomingEvents].map((event, i) => (
                <Link
                  to={`/events/${event.id}`}
                  key={`${event.id}-${i}`}
                  className="event-marquee-card"
                >
                  <div className="event-marquee-img">
                    <img src={event.image} alt={event.name} loading="lazy" />
                    <div className="event-marquee-overlay" />
                    <span className="event-marquee-date">{event.date}</span>
                  </div>
                  <div className="event-marquee-body">
                    <span className="event-marquee-cat">{event.category}</span>
                    <h4>{event.name}</h4>
                    <p>{event.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="container" style={{ textAlign: "center", padding: "3rem 0", color: "var(--text-light)" }}>
            <p>Check back soon for upcoming events.</p>
          </div>
        )}

        <div className="container" style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/events" className="btn btn-primary">
            View All Events <ArrowRight size={16} />
          </Link>
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
