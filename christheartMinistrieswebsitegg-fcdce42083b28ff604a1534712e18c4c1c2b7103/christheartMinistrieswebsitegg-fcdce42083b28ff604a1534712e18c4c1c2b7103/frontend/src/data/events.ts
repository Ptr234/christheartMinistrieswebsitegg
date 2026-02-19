import type { ChurchEvent } from "../types";
import { IMAGES } from "../utils/imageFallbacks";

export const events: ChurchEvent[] = [
  {
    id: "marriage-flair",
    name: "Marriage Flair",
    date: "21st February 2026",
    time: "9:00 AM – 5:00 PM",
    location: "Christ's Heart Kampala",
    description:
      "A powerful celebration of love, covenant, and God's design for marriage. Marriage Flair brings couples and singles together for a day of teaching, testimonies, and prayer focused on building strong, God-honouring homes. Featuring practical sessions on communication, intimacy, and raising godly families.",
    image: IMAGES.events[0],
    tagline: "Celebrate Love. Build God's Way.",
    category: "Marriage & Family",
  },
  {
    id: "virtuous-woman",
    name: "Virtuous Woman Conference",
    date: "8th–10th May 2026",
    time: "9:00 AM – 5:00 PM",
    location: "Christ's Heart Kampala – Mabirizi Complex",
    description:
      "A powerful three-day women's conference celebrating the strength, grace, and beauty of the godly woman. Featuring worship, keynote speakers, panel discussions, and ministry time focused on identity, purpose, and destiny. Women from all branches come together for a weekend of empowerment, sisterhood, and spiritual renewal.",
    image: IMAGES.events[1],
    tagline: "Crowned With Grace. Walking in Power.",
    category: "Women's Conference",
  },
  {
    id: "chmi-anniversary",
    name: "CHMI 19th Anniversary & Gerenge Prayer Camp",
    date: "5th–7th June 2026",
    time: "All Day",
    location: "Gerenge, Uganda",
    description:
      "A landmark three-day celebration marking 19 years of Christ's Heart Ministries International. Combined with our powerful Gerenge Prayer Camp, this gathering unites believers from all branches in worship, thanksgiving, and intercession. Expect powerful testimonies, prophetic ministry, and a fresh outpouring as we celebrate God's faithfulness.",
    image: IMAGES.events[2],
    tagline: "19 Years of Apostolic Grace. The Best Is Yet to Come.",
    category: "Anniversary",
  },
  {
    id: "the-blend",
    name: "The Blend",
    date: "18th July 2026",
    time: "9:00 AM – 6:00 PM",
    location: "Christ's Heart Kampala",
    description:
      "An inter-generational gathering where different generations of believers — from children to elders — come together in worship, fellowship, and ministry. The Blend celebrates unity across age groups, honouring what each generation carries and creating a powerful atmosphere where the old and new flow together in one Spirit.",
    image: IMAGES.events[3],
    tagline: "Generations United. One Spirit. One Vision.",
    category: "Conference",
  },
  {
    id: "babies-conference",
    name: "Babies Conference",
    date: "1st August 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Christ's Heart Kampala",
    description:
      "A joyful and anointed conference dedicated to celebrating new life and equipping parents in raising the next generation. Featuring teaching on godly parenting, baby dedications, prayer over families, and practical sessions on raising children in faith. A must-attend for young families and expecting parents.",
    image: IMAGES.events[4],
    tagline: "A Generation Born for Greatness.",
    category: "Family",
  },
  {
    id: "men-of-action",
    name: "Men of Action",
    date: "5th September 2026",
    time: "8:00 AM – 4:00 PM",
    location: "Christ's Heart Kampala",
    description:
      "A conference dedicated to building godly men who lead with integrity, purpose, and faith. Featuring dynamic speakers, breakout sessions on leadership, family, career, and spiritual warfare, plus powerful fellowship designed specifically for men ready to rise and take their God-given place.",
    image: IMAGES.events[5],
    tagline: "Rise. Lead. Transform.",
    category: "Men's Conference",
  },
  {
    id: "november-blessing",
    name: "November Blessing",
    date: "9th–15th November 2026",
    time: "9:00 AM – 5:00 PM Daily",
    location: "Christ's Heart Kampala – Mabirizi Complex",
    description:
      "Our annual week-long gathering of praise, worship, and prophetic declarations as we enter the season of thanksgiving. Join thousands of believers for seven days of supernatural encounters, divine blessings, and life-changing ministry. Featuring powerful worship, international guest speakers, and an atmosphere charged with God's presence.",
    image: IMAGES.events[6],
    tagline: "Step Into a Season of Supernatural Overflow.",
    category: "Conference",
  },
  {
    id: "crossover-night",
    name: "Crossover Night",
    date: "31st December 2026",
    time: "10:00 PM – 2:00 AM",
    location: "All Branches",
    description:
      "Cross over into the new year in the presence of God. Our Crossover Night is a powerful all-branches gathering featuring extended worship, prophetic declarations, thanksgiving, and prayer as we usher in the new year with faith and expectation. Do not enter 2027 without seeking God's face first.",
    image: IMAGES.events[7],
    tagline: "Cross Over in Power. Enter the New Year With God.",
    category: "Special Service",
  },
];
