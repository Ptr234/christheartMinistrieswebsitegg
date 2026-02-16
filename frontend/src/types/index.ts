export interface Pastor {
  name: string;
  role: string;
  image: string | null;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  city: string;
  lat: number;
  lng: number;
  pastors: Pastor[];
  testimonials: Testimonial[];
  images: string[];
  services: string;
}

export interface ChurchEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string | null;
}

export interface Sermon {
  id: number;
  title: string;
  preacher: string;
  date: string;
  description: string;
  type: "audio" | "video" | "pdf";
  downloadUrl: string;
}
