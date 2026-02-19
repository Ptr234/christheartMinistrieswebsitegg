import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface Service {
  name: string;
  days: number[]; // 0=Sun, 1=Mon...6=Sat
  hour: number;
  minute: number;
}

const SERVICES: Service[] = [
  { name: "Sunday Service (7am)", days: [0], hour: 7, minute: 0 },
  { name: "Sunday Service (9am)", days: [0], hour: 9, minute: 0 },
  { name: "Sunday Service (11am)", days: [0], hour: 11, minute: 0 },
  { name: "Sunday Service (4pm)", days: [0], hour: 16, minute: 0 },
  { name: "Lunch Hour Service", days: [1, 2, 3, 4, 5], hour: 12, minute: 45 },
];

function getNextService(): { time: Date; name: string } {
  const now = new Date();
  for (let dayOffset = 0; dayOffset < 8; dayOffset++) {
    const date = new Date(now);
    date.setDate(date.getDate() + dayOffset);
    const dayOfWeek = date.getDay();
    let earliest: { time: Date; name: string } | null = null;

    for (const svc of SERVICES) {
      if (svc.days.includes(dayOfWeek)) {
        const t = new Date(date);
        t.setHours(svc.hour, svc.minute, 0, 0);
        if (t > now && (!earliest || t < earliest.time)) {
          earliest = { time: t, name: svc.name };
        }
      }
    }
    if (earliest) return earliest;
  }
  // fallback
  const fallback = new Date();
  fallback.setDate(fallback.getDate() + 7);
  fallback.setHours(9, 0, 0, 0);
  return { time: fallback, name: "Sunday Service (9am)" };
}

export default function CountdownTimer() {
  const [nextSvc, setNextSvc] = useState(() => getNextService());
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const current = getNextService();
      setNextSvc(current);
      const diff = Math.max(0, current.time.getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown-timer">
      <div className="countdown-header">
        <Clock size={16} />
        <span>Next: <strong>{nextSvc.name}</strong></span>
      </div>
      <div className="countdown-units">
        {[
          { val: time.days, label: "Days" },
          { val: time.hours, label: "Hours" },
          { val: time.minutes, label: "Min" },
          { val: time.seconds, label: "Sec" },
        ].map((unit) => (
          <div key={unit.label} className="countdown-unit">
            <span className="countdown-value">{String(unit.val).padStart(2, "0")}</span>
            <span className="countdown-label">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
