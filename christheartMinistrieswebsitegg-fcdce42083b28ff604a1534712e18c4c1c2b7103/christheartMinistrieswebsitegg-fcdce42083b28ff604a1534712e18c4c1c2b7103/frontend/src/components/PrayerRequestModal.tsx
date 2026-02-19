import { useState } from "react";
import { X, Heart, Send, CheckCircle } from "lucide-react";

export default function PrayerRequestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setSubmitted(false), 300);
    }, 2500);
  };

  return (
    <>
      <button
        className="prayer-fab"
        onClick={() => setIsOpen(true)}
        aria-label="Submit a prayer request"
      >
        <Heart size={20} />
        <span>Prayer Request</span>
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)} aria-label="Close">
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                <Heart size={24} />
              </div>
              <h3>Prayer Request</h3>
              <p>Share your prayer needs with us. Our prayer team intercedes daily.</p>
            </div>

            {submitted ? (
              <div className="modal-success">
                <CheckCircle size={48} />
                <h4>Prayer Received</h4>
                <p>Our prayer team has been notified. We stand with you in faith.</p>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="prayer-name">Your Name</label>
                  <input id="prayer-name" type="text" placeholder="Your name (optional)" />
                </div>
                <div className="form-group">
                  <label htmlFor="prayer-email">Email</label>
                  <input id="prayer-email" type="email" placeholder="your@email.com (optional)" />
                </div>
                <div className="form-group">
                  <label htmlFor="prayer-request">Prayer Request</label>
                  <textarea
                    id="prayer-request"
                    placeholder="Share your prayer request here..."
                    required
                    rows={4}
                  />
                </div>
                <label className="prayer-private">
                  <input type="checkbox" defaultChecked />
                  <span>Keep my request private</span>
                </label>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <Send size={18} /> Submit Prayer Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
