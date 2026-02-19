import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Calendar, Clock, MapPin, ArrowRight, Flame } from "lucide-react";
import { events } from "../data/events";
import { getPromoEvent, getCountdownText } from "../utils/eventDate";

const DISMISS_KEY = "eventPromoDismissed";

export default function EventPromoPopup() {
  const [visible, setVisible] = useState(false);
  const promoEvent = getPromoEvent(events);

  useEffect(() => {
    if (!promoEvent) return;

    // Don't show if user dismissed this event already today
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) {
      const { eventId, timestamp } = JSON.parse(dismissed);
      const hoursSince = (Date.now() - timestamp) / (1000 * 60 * 60);
      if (eventId === promoEvent.id && hoursSince < 24) return;
    }

    // Show after a short delay for better UX
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, [promoEvent]);

  if (!promoEvent || !visible) return null;

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(
      DISMISS_KEY,
      JSON.stringify({ eventId: promoEvent.id, timestamp: Date.now() })
    );
  };

  const countdown = getCountdownText(promoEvent);

  return (
    <>
      {/* Backdrop */}
      <div className="promo-backdrop" onClick={dismiss} />

      {/* Popup */}
      <div className="promo-popup">
        <button className="promo-close" onClick={dismiss} aria-label="Close">
          <X size={20} />
        </button>

        {/* Image header */}
        <div className="promo-image">
          <img src={promoEvent.image} alt={promoEvent.name} />
          <div className="promo-image-overlay" />
          <div className="promo-badge">
            <Flame size={14} /> {countdown}
          </div>
        </div>

        {/* Content */}
        <div className="promo-content">
          <span className="promo-category">{promoEvent.category}</span>
          <h3>{promoEvent.name}</h3>
          <p className="promo-tagline">{promoEvent.tagline}</p>

          <div className="promo-meta">
            <span><Calendar size={14} /> {promoEvent.date}</span>
            <span><Clock size={14} /> {promoEvent.time}</span>
            <span><MapPin size={14} /> {promoEvent.location}</span>
          </div>

          <p className="promo-desc">{promoEvent.description.slice(0, 150)}...</p>

          <div className="promo-actions">
            <Link
              to={`/events/${promoEvent.id}`}
              className="btn btn-primary"
              onClick={dismiss}
            >
              Register Now <ArrowRight size={16} />
            </Link>
            <button className="btn btn-ghost" onClick={dismiss}>
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
