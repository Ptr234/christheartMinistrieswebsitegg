import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

function getNextSunday() {
  const now = new Date();
  const day = now.getDay();
  const diff = day === 0 ? 7 : 7 - day;
  const next = new Date(now);
  next.setDate(now.getDate() + (day === 0 && now.getHours() < 11 ? 0 : diff));
  next.setHours(9, 0, 0, 0);
  return next;
}

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const target = getNextSunday();
      const diff = Math.max(0, target.getTime() - Date.now());
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
        <Clock size={18} />
        <span>Next Service In</span>
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
