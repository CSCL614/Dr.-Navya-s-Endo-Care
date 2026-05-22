export interface HospitalEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  conductedBy: string;
  contact: string;
  whatsappNumber: string;
  imageUrl: string;
  registrationLink?: string;
}

export interface PopupConfig {
  enabled: boolean;
  activeEventId: string;
  autoHideDays: number; // Number of days to remember the "Don't show again" choice
}

// Global Popup Configuration
// Change `enabled` to false to easily disable the popup from the backend.
export const popupConfig: PopupConfig = {
  enabled: true,
  activeEventId: "camp-01",
  autoHideDays: 7, 
};

// Database of all events
export const upcomingEvents: HospitalEvent[] = [
  {
    id: "camp-01",
    title: "Free Diabetes & Thyroid Health Camp",
    description: "Join us for a comprehensive free health camp focusing on early detection and management of Diabetes and Thyroid disorders. Free preliminary screenings included.",
    date: "2026-06-25T09:00:00", // ISO string for accurate countdown math
    time: "9:00 AM – 5:00 PM",
    venue: "DR NAVYA'S ENDO CARE Hospital",
    conductedBy: "Dr Navya – Endocrinology Specialist",
    contact: "+91 90327 73508",
    whatsappNumber: "919032773508", // International format without +
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e5953?q=80&w=1200&auto=format&fit=crop", 
  },
  {
    id: "seminar-02",
    title: "PCOS Awareness Seminar",
    description: "An educational seminar detailing lifestyle interventions and modern medical treatments for managing Polycystic Ovary Syndrome.",
    date: "2026-07-15T10:30:00",
    time: "10:30 AM – 1:00 PM",
    venue: "Metropolis Community Hall",
    conductedBy: "Dr Navya",
    contact: "+91 11111 11111",
    whatsappNumber: "911111111111",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
  }
];

export const pastEvents: HospitalEvent[] = [
  {
    id: "camp-past-01",
    title: "World Diabetes Day Mega Camp",
    description: "Over 500 patients screened and provided with free consultation and lifestyle management plans.",
    date: "2025-11-14T09:00:00",
    time: "9:00 AM - 6:00 PM",
    venue: "DR NAVYA'S ENDO CARE",
    conductedBy: "Dr Navya & Team",
    contact: "",
    whatsappNumber: "",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "camp-past-02",
    title: "Thyroid Awareness Walkathon",
    description: "A community initiative to raise awareness about the early signs and symptoms of thyroid dysfunction.",
    date: "2025-01-25T07:00:00",
    time: "7:00 AM - 9:00 AM",
    venue: "Health City Park",
    conductedBy: "Endo Care Foundation",
    contact: "",
    whatsappNumber: "",
    imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop",
  }
];
