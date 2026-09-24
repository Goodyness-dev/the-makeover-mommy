export const BUSINESS_INFO = {
  name: "The Makeover Mommy",
  legalName: "The Makeover Mommy LLC",
  tagline: "Effortless Natural Beauty. Wake Up Flawless Every Day.",
  shortDescription: "Folsom's premier permanent makeup and paramedical tattoo studio, led by 18x certified artist Porsche Ray. Specializing in hyper-realistic microblading, ombre powder brows, velvet lip blushing, eyeliner, and restorative 3D areola tattooing.",
  address: {
    street: "6693 Folsom-Auburn Road, Suite E",
    suite: "Suite E (Inside Motsy Beauty Lounge)",
    city: "Folsom",
    state: "CA",
    zip: "95630",
    formatted: "6693 Folsom-Auburn Road Suite E, Folsom, CA 95630",
    serviceArea: "Folsom, El Dorado Hills, Granite Bay, Roseville, and Greater Sacramento, CA"
  },
  phone: "(916) 542-8801",
  secondaryPhone: "(916) 618-9463",
  website: "https://themakeovermommy.com",
  email: "themakeovermommyllc@gmail.com",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=6693+Folsom-Auburn+Road+Suite+E,+Folsom,+CA+95630",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=6693%20Folsom-Auburn%20Road%20Suite%20E%2C%20Folsom%2C%20CA%2095630&t=&z=15&ie=UTF8&iwloc=&output=embed",
  
  hours: [
    { day: "Monday", open: "Closed", close: "Closed", note: "Private Consults" },
    { day: "Tuesday", open: "9:00 AM", close: "6:00 PM", note: "" },
    { day: "Wednesday", open: "9:00 AM", close: "6:00 PM", note: "" },
    { day: "Thursday", open: "9:00 AM", close: "6:00 PM", note: "" },
    { day: "Friday", open: "9:00 AM", close: "6:00 PM", note: "" },
    { day: "Saturday", open: "9:00 AM", close: "4:00 PM", note: "By Appointment Only" },
    { day: "Sunday", open: "Closed", close: "Closed", note: "" },
  ],

  artist: {
    name: "Porsche Ray",
    title: "Founder & 18x Certified Permanent Makeup Artist",
    credentials: "18x Certified PMU Master • Paramedical Tattoo Specialist • Bloodborne Pathogens Certified • State Licensed & Insured",
    bio: "With years of master-level artistry and 18 advanced certifications, Porsche Ray transforms morning routines with soft, hyper-realistic, and undetectable permanent cosmetic enhancements. Trained extensively in microblading, lip blush contouring, scalp micropigmentation (SMP), and scar camouflage, she brings compassionate, medical-grade precision to every procedure inside Folsom's elegant Motsy Beauty Lounge.",
    quote: "My mission is simple: to make waking up beautiful effortless. I blend fine-needle artistry, bespoke color theory, and genuine human connection to highlight your natural elegance."
  },

  cancellationPolicy: "Cancellations made within 14 days of your scheduled appointment or no-shows forfeit the 20% deposit. If your reserved slot can be filled from the active waitlist, your deposit is refunded within 3 business days. Rescheduling at least 14 days prior retains 100% of your deposit credited to the new session.",

  survivorPromise: "Free 3D Areola Restorative Tattoos for all breast cancer survivors healed from surgery for at least 6 months. Restoring wholeness, confidence, and dignity with gentle compassion.",

  reviews: [
    {
      author: "Jessica T.",
      location: "Folsom, CA",
      source: "Google Review",
      rating: 5,
      date: "3 weeks ago",
      comment: "Porsche is a true artist and genius! I was so nervous about getting microblading done on my sparse brows, but she took 45 minutes just mapping my facial symmetry and finding the exact shade. They look so natural that my coworkers thought I was just blessed with great genetics. Waking up ready has changed my morning routine completely!"
    },
    {
      author: "Amanda M.",
      location: "El Dorado Hills, CA",
      source: "Google Review",
      rating: 5,
      date: "1 month ago",
      comment: "I had lip blushing done with Porsche and the color is an absolute dream! Soft velvet rose that defines my borders without looking drawn on. Her studio inside Motsy Lounge is immaculate, sanitized to hospital standards, and she has the gentlest touch. Worth every single penny."
    },
    {
      author: "Danielle K.",
      location: "Granite Bay, CA",
      source: "Verified Client",
      rating: 5,
      date: "2 months ago",
      comment: "As a breast cancer survivor, finding someone who does 3D areola reconstruction with such compassion, warmth, and artistic mastery brought tears to my eyes. Porsche gave me a piece of myself back. She does this for survivors with so much grace. She is an angel."
    },
    {
      author: "Elena V.",
      location: "Roseville, CA",
      source: "Google Review",
      rating: 5,
      date: "2 months ago",
      comment: "Got the Blade & Shade combo brow and lash line enhancement. I haven't touched eyebrow pencil or eyeliner in 4 months. The retention is incredible, no awkward fading, and she uses the highest quality vegan pigments. Truly the best PMU in Northern California."
    }
  ]
};

export const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hour = now.getHours();
  
  if (day === 0 || day === 1) return false; // Sun & Mon closed
  if (day === 6) {
    return hour >= 9 && hour < 16; // Sat 9am-4pm
  }
  return hour >= 9 && hour < 18; // Tue-Fri 9am-6pm
};
