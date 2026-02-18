import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Christ's Heart Ministries changed my life completely. The love and warmth I found here is beyond words. I came broken and left whole.",
    name: "Sarah Nakamya",
    branch: "Christ's Heart Kampala",
  },
  {
    text: "The teaching at Christ's Heart is powerful and transformative. Apostle Isaiah's messages are Spirit-led and life-changing.",
    name: "David Ssempijja",
    branch: "Christ's Heart Mukono",
  },
  {
    text: "I found my family at Christ's Heart. The home cell fellowships have deepened my faith and given me lifelong friendships.",
    name: "Grace Namutebi",
    branch: "Christ's Heart Lugazi",
  },
  {
    text: "The youth camp was a turning point for my son. He came back on fire for God and has never been the same since.",
    name: "Peter Kiwanuka",
    branch: "Christ's Heart Jinja",
  },
  {
    text: "From the worship to the Word, every service at Christ's Heart draws you closer to God. This is truly a house of transformation.",
    name: "Rebecca Achieng",
    branch: "Christ's Heart Entebbe",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const t = testimonials[current];

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel-inner">
        <Quote size={40} className="testimonial-quote-icon" />
        <div className={`testimonial-slide ${isTransitioning ? "transitioning" : ""}`}>
          <p className="testimonial-text">"{t.text}"</p>
          <div className="testimonial-author-info">
            <div className="testimonial-author-avatar">
              {t.name.charAt(0)}
            </div>
            <div>
              <p className="testimonial-author-name">{t.name}</p>
              <p className="testimonial-author-branch">{t.branch}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-controls">
          <button onClick={goPrev} aria-label="Previous testimonial"><ChevronLeft size={20} /></button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === current ? "active" : ""}`}
                onClick={() => { setIsTransitioning(true); setTimeout(() => { setCurrent(i); setIsTransitioning(false); }, 300); }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={goNext} aria-label="Next testimonial"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  );
}
