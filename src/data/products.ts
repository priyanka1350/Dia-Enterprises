export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  suitableFor: string[];
  specs: {
    gsm?: string;
    finish?: string;
    materials?: string;
    colour?: string;
    application?: string;
  };
  image: string;
  featured: boolean;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "80-gsm-silver",
    name: "80 GSM Silver",
    tagline: "Lightweight • Economical • Versatile",
    description: "80 GSM silver paper is a lightweight raw material suitable for producing disposable paper plates for everyday food-serving applications. Its silver finish provides an attractive appearance while keeping the material lightweight and practical for high-volume production.",
    suitableFor: [
      "Disposable paper plates",
      "Everyday food-serving applications",
      "High-volume plate production",
      "Lightweight plate requirements"
    ],
    specs: {
      gsm: "80 GSM",
      finish: "Silver"
    },
    image: "/plate-1.jpeg",
    featured: true,
    available: true
  },
  {
    id: "p2",
    slug: "120-gsm-silver",
    name: "120 GSM Silver",
    tagline: "Balanced Strength & Versatility",
    description: "120 GSM silver paper provides a balance between lightweight handling and improved material strength. It is suitable for manufacturers looking for a versatile raw material for a range of disposable paper plate applications.",
    suitableFor: [
      "Disposable paper plates",
      "General-purpose plate production",
      "Medium-strength applications",
      "Commercial food-service requirements"
    ],
    specs: {
      gsm: "120 GSM",
      finish: "Silver"
    },
    image: "/plate-2.jpeg",
    featured: true,
    available: true
  },
  {
    id: "p3",
    slug: "180-gsm-silver",
    name: "180 GSM Silver",
    tagline: "Stronger Material for Durable Plates",
    description: "180 GSM silver paper offers increased thickness and rigidity compared with lighter GSM materials. It is suitable for applications where manufacturers require a stronger paper plate while maintaining an attractive silver finish.",
    suitableFor: [
      "Stronger disposable plates",
      "Larger plate formats",
      "Commercial applications",
      "Higher-rigidity plate requirements"
    ],
    specs: {
      gsm: "180 GSM",
      finish: "Silver"
    },
    image: "/plate-3.jpeg",
    featured: true,
    available: true
  },
  {
    id: "p4",
    slug: "200-gsm-silver",
    name: "200 GSM Silver",
    tagline: "Heavy-Duty Silver Material",
    description: "200 GSM silver paper provides increased thickness and rigidity for applications requiring a more substantial paper plate material. Its silver finish combines functional performance with a clean and attractive appearance.",
    suitableFor: [
      "Heavy-duty paper plates",
      "Stronger plate designs",
      "Larger serving plates",
      "Commercial applications"
    ],
    specs: {
      gsm: "200 GSM",
      finish: "Silver"
    },
    image: "/plate-4.jpeg",
    featured: true,
    available: true
  },
  {
    id: "p5",
    slug: "200-gsm-kraft-chipboard",
    name: "200 GSM Kraft & Chipboard",
    tagline: "Strength for Sturdy Plate Production",
    description: "200 GSM Kraft and chipboard materials provide a stronger and more rigid base for paper plate manufacturing. These materials are suitable for manufacturers looking for increased structural strength and durability.",
    suitableFor: [
      "Sturdy paper plates",
      "Heavy-duty applications",
      "Larger plate formats",
      "Manufacturing requiring increased rigidity"
    ],
    specs: {
      gsm: "200 GSM",
      materials: "Kraft & Chipboard"
    },
    image: "/plate-5.jpeg",
    featured: true,
    available: true
  },
  {
    id: "p6",
    slug: "80-gsm-thali-green-sheet",
    name: "80 GSM Thali Green Sheet & Plate",
    tagline: "Traditional Look. Practical Material.",
    description: "Our 80 GSM Thali green sheets and plate materials are suitable for manufacturing green-coloured Thali-style disposable plates. The distinctive green appearance makes them suitable for traditional food-serving applications and various events and functions.",
    suitableFor: [
      "Thali plates",
      "Traditional food serving",
      "Events and functions",
      "Disposable food-service applications"
    ],
    specs: {
      gsm: "80 GSM",
      colour: "Green"
    },
    image: "/plate-6.jpeg",
    featured: true,
    available: true
  },
  {
    id: "p7",
    slug: "saree-box-colour-plate",
    name: "Saree Box Colour Plate",
    tagline: "Colourful Materials for Special Applications",
    description: "DIA Enterprises also offers colour plate materials suitable for decorative and specialty paper plate applications. These materials provide manufacturers with additional colour options for producing visually appealing disposable plates.",
    suitableFor: [
      "Colour paper plates",
      "Decorative applications",
      "Events and functions",
      "Specialty plate requirements"
    ],
    specs: {
      application: "Colour Plate",
      finish: "Available in colour options"
    },
    image: "/plate-7.jpeg",
    featured: true,
    available: true
  },
  {
    id: "p8",
    slug: "duplex-board",
    name: "Duplex Board",
    tagline: "Premium Board for Quality Plate Production",
    description: "Duplex board is a high-quality two-layered paperboard material used in paper plate manufacturing. Its coated white top surface combined with a grey inner layer provides excellent printability, rigidity, and a clean finish — making it ideal for premium disposable plate applications.",
    suitableFor: [
      "Premium disposable paper plates",
      "Printable plate surfaces",
      "High-rigidity plate requirements",
      "Commercial and event catering"
    ],
    specs: {
      finish: "Coated White / Grey Back",
      materials: "Duplex Board"
    },
    image: "/duplex.jpeg",
    featured: true,
    available: true
  }
];
