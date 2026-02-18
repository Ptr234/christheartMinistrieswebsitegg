import type { ChurchEvent } from "../types";
import { IMAGES } from "../utils/imageFallbacks";

export const events: ChurchEvent[] = [
  {
    id: "november-blessing",
    name: "November Blessing",
    date: "November 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Christ's Heart Kampala - Mabirizi Complex",
    description:
      "An annual gathering of praise, worship, and prophetic declarations as we enter the season of thanksgiving. Join thousands of believers for a day of supernatural encounters, divine blessings, and life-changing ministry. Featuring powerful worship, guest speakers, and an atmosphere charged with God's presence.",
    image: IMAGES.events[0],
    tagline: "Step Into a Season of Supernatural Overflow",
    category: "Conference",
  },
  {
    id: "youth-camp",
    name: "Youth Camp",
    date: "August 2026",
    time: "All Day Event",
    location: "To Be Announced",
    description:
      "A transformative youth camp experience designed to empower the next generation of leaders. Three days of dynamic worship, team-building adventures, sports, mentorship talks, and powerful evening services that will set young hearts ablaze for God.",
    image: IMAGES.events[1],
    tagline: "Ignite Your Purpose. Discover Your Destiny.",
    category: "Camp",
  },
  {
    id: "men-of-action",
    name: "Men of Action",
    date: "March 2026",
    time: "8:00 AM - 4:00 PM",
    location: "Christ's Heart Kampala",
    description:
      "A conference dedicated to building godly men who lead with integrity, purpose, and faith. Featuring dynamic speakers, breakout sessions on leadership, family, and career, plus powerful fellowship designed specifically for men ready to rise.",
    image: IMAGES.events[2],
    tagline: "Rise. Lead. Transform.",
    category: "Men's Conference",
  },
  {
    id: "virtuous-woman",
    name: "Virtuous Woman",
    date: "May 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Christ's Heart Kampala - Mabirizi Complex",
    description:
      "A powerful women's conference celebrating the strength, grace, and beauty of the godly woman. Featuring worship, keynote speakers, panel discussions, and ministry time focused on identity, purpose, and destiny. Women from all branches come together for a day of empowerment, sisterhood, and spiritual renewal.",
    image: IMAGES.events[3],
    tagline: "Crowned With Grace. Walking in Power.",
    category: "Women's Conference",
  },
  {
    id: "prayer-and-fasting",
    name: "21 Days of Prayer & Fasting",
    date: "January 2026",
    time: "6:00 AM & 6:00 PM Daily",
    location: "All Branches",
    description:
      "Start the new year with a powerful 21-day corporate fast across all Christ's Heart branches worldwide. Daily morning and evening prayer sessions, guided devotionals, and a climactic breaking-of-fast celebration that sets the tone for a victorious year.",
    image: IMAGES.events[4],
    tagline: "Seek His Face. Shift the Atmosphere.",
    category: "Spiritual Discipline",
  },
  {
    id: "family-fun-day",
    name: "Family Fun Day",
    date: "December 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Christ's Heart Kampala Grounds",
    description:
      "A joyful celebration bringing the whole church family together. Games for children, food stalls, live music, talent showcases, bouncing castles, face painting, and an end-of-year thanksgiving service. A perfect day to bond, celebrate, and give God the glory.",
    image: IMAGES.events[5],
    tagline: "Celebrate. Connect. Give Thanks.",
    category: "Family",
  },
];
