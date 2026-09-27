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
  altText: string;
  featured: boolean;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "80-gsm-silver",
    name: "80 - 220 GSM Silver circle",
    tagline: "Lightweight • Economical • Versatile",
    description: "",
    suitableFor: [
      "Disposable paper plates",
      "Everyday food-serving applications",
      "High-volume plate production",
      "Lightweight plate requirements"
    ],
    specs: {
      gsm: "80 GSM - 220 GSM",
      finish: "Silver"
    },
    image: "/src/assets/80-gsm-silver-paper-plate-raw-material.jpeg",
    altText: "80 GSM silver paper for paper plate manufacturing",
    featured: true,
    available: true
  },
  {
    id: "p2",
    slug: "120-gsm-silver",
    name: "120 GSM Silver Circle",
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
    image: "/src/assets/120-gsm-silver-paper-plate-raw-material.jpeg",
    altText: "120 GSM silver paper raw material for paper plates",
    featured: true,
    available: true
  },
  {
    id: "p3",
    slug: "180-gsm-silver",
    name: "180 - 220 GSM Silver Sheet (Any size)",
    tagline: "Stronger Material for Durable Plates",
    description: "180 GSM silver paper offers increased thickness and rigidity compared with lighter GSM materials. It is suitable for applications where manufacturers require a stronger paper plate while maintaining an attractive silver finish.",
    suitableFor: [
      "Stronger disposable plates",
      "Larger plate formats",
      "Commercial applications",
      "Higher-rigidity plate requirements"
    ],
    specs: {
      gsm: "180 - 220 GSM",
      finish: "Silver"
    },
    image: "/src/assets/180-gsm-silver-paper-plate-raw-material.jpeg",
    altText: "180 GSM silver paper for strong paper plate manufacturing",
    featured: true,
    available: true
  },
  {
    id: "p4",
    slug: "200-gsm-duplex-circle",
    name: "200 GSM Duplex Circle",
    tagline: "Heavy-Duty Duplex Material",
    description: "200 GSM silver paper provides increased thickness and rigidity for applications requiring a more substantial paper plate material. Its silver finish combines functional performance with a clean and attractive appearance.",
    suitableFor: [
      "Heavy-duty paper plates",
      "Stronger plate designs",
      "Larger serving plates",
      "Commercial applications"
    ],
    specs: {
      gsm: "200 GSM",
      finish: "Duplex"
    },
    image: "/src/assets/200-gsm-silver-paper-plate-raw-material.jpeg",
    altText: "200 GSM heavy duty silver paper for paper plate manufacturing",
    featured: true,
    available: true
  },
  {
    id: "p5",
    slug: "200-gsm-kraft-chipboard",
    name: "80 - 200 GSM Kraft & Chipboard, wrinkle Plates",
    tagline: "Strength for Sturdy Plate Production",
    description: "200 GSM Kraft and chipboard materials provide a stronger and more rigid base for paper plate manufacturing. These materials are suitable for manufacturers looking for increased structural strength and durability.",
    suitableFor: [
      "Sturdy paper plates",
      "Heavy-duty applications",
      "Larger plate formats",
      "Manufacturing requiring increased rigidity"
    ],
    specs: {
      gsm: "80 - 200 GSM",
      materials: "Kraft & Chipboard, Wrinkle (5 inc to 12 inc) "
    },
    image: "/src/assets/200-gsm-kraft-chipboard-paper-plate-raw-material.jpeg",
    altText: "200 GSM kraft paper and chipboard for paper plate manufacturing",
    featured: true,
    available: true
  },
  {
    id: "p6",
    slug: "80-gsm-thali-green-sheet",
    name: "80 - 180 GSM Thali Green Plate",
    tagline: "Traditional Look. Practical Material.",
    description: "Our 80 GSM Thali green sheets and plate materials are suitable for manufacturing green-coloured Thali-style disposable plates. The distinctive green appearance makes them suitable for traditional food-serving applications and various events and functions.",
    suitableFor: [
      "Thali plates",
      "Traditional food serving",
      "Events and functions",
      "Disposable food-service applications"
    ],
    specs: {
      gsm: "80 - 180 GSM",
      colour: "Green"
    },
    image: "/src/assets/80-gsm-thali-green-sheet-paper-plate-raw-material.jpeg",
    altText: "80 GSM thali green sheet for traditional paper plates",
    featured: true,
    available: true
  },
  {
    id: "p7",
    slug: "saree-box-colour-plate",
    name: "Green Thali Sheet (80 - 180 GSM)",
    tagline: "Green Materials for Special Applications",
    description: "DIA Enterprises also offers colour plate materials suitable for decorative and specialty paper plate applications. These materials provide manufacturers with additional colour options for producing visually appealing disposable plates.",
    suitableFor: [
      "Colour paper plates",
      "Decorative applications",
      "Events and functions",
      "Specialty plate requirements"
    ],
    specs: {
      application: "Green",
      finish: "Available in green Color"
    },
    image: "/plate-7.jpeg",
    altText: "Green Thali Sheet for decorative and specialty paper plate applications",
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
      finish: "Colored / Multi Colored",
      materials: "Duplex Board"
    },
    image: "/src/assets/saree-box-colour-paper-plate-raw-material.jpeg",
    altText: "colour plate raw material for decorative paper plate manufacturing",
    featured: true,
    available: true
  }
];
