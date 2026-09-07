// Content inventory sourced from https://www.bigbullerickshaw.in/
// Every fact below traces to the live site (home, /e-rickshaw-loader/, /about-us/).
// No specifications, figures, or certifications have been invented.

export const company = {
  legalName: "Big Bull Traders Pvt Ltd",
  brandRickshaw: "Big Bull",
  brandScooter: "Prakriti",
  tagline: "ICAT-approved electric mobility, manufactured in India.",
  phone: "+91 93309 00491",
  email: "info@bigbullerickshaw.in",
  office:
    "17th Floor, Room No. 10, Chatterjee International Centre, 33A Jawaharlal Nehru Road, Park Street Area, Kolkata, West Bengal – 700071 (Beside Metro Bhavan)",
  manufacturing: "West Bengal and Gujarat",
  bookingUrl: "https://bigbull.viewpage.co/rickshaw-pcs",
  dealershipUrl: "https://bigbull.viewpage.co/Dealership-Rickshaw-form",
  scooterSite: "https://prakritiev.in/",
  sparePartsSite: "https://babagold.co.in/",
  social: {
    facebook: "https://www.facebook.com/bigbullerickshaw",
    instagram: "https://www.instagram.com/big_bull_erickshaw/",
    linkedin: "https://www.linkedin.com/company/bigbull-trader/",
    youtube: "https://www.youtube.com/@BigBullEVehicles",
  },
};

export const vision =
  "By using the best of resources at hand, Big Bull works to change the lives of the people directly or indirectly connected to its product and its business — through responsible practices and a commitment to green, sustainable manufacturing.";

export const mission =
  "Big Bull exists to promote the widespread use of electro-mobility across India, taking small initiatives every day toward a greener future while generating employment and delivering comfortable rides at a lower cost.";

export const whyChoose = [
  "Quality product built to compete with imported alternatives",
  "100% genuine and quality spare parts across every e-rickshaw model",
  "A dedicated vehicle design team for custom models and new designs",
  "In-house, state-of-the-art manufacturing facilities in West Bengal",
  "90% indigenous product content, overseen through the full product lifecycle",
];

export type Vehicle = {
  id: string;
  category: "rickshaw" | "loader" | "scooter";
  name: string;
  line: string;
  tagline: string;
  description: string;
  image: string;
  cta: string;
  ctaUrl: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "b5",
    category: "rickshaw",
    name: "Big Bull B5",
    line: "E-Rickshaw",
    tagline: "Be heavy, be fast.",
    description:
      "A rear-view camera, an Android mobile holder for GPS navigation, and a 43mm front hydraulic shocker with spring. Offered in iron and steel body variants, with a laser-guard front glass the brand states delivers a mileage benefit.",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/07/Web-site-square1-1024x1024.png",
    cta: "Book now",
    ctaUrl: company.bookingUrl,
  },
  {
    id: "eco-plus",
    category: "rickshaw",
    name: "Big Bull ECO Plus",
    line: "E-Rickshaw",
    tagline: "Everyday operation, simplified.",
    description:
      "A 1200W motor paired with a foot accelerator — built as a straightforward, dependable model for daily commercial routes.",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/07/Web-site-square3.png",
    cta: "Book now",
    ctaUrl: company.bookingUrl,
  },
  {
    id: "loader",
    category: "loader",
    name: "Big Bull Loader",
    line: "E-Loader",
    tagline: "Load and go beyond.",
    description:
      "A three-wheeled electric loader for carrying goods, available in 1.7-tonne and 1.8-tonne capacities with a 1500W motor and controller.",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/07/Web-site-square2.png",
    cta: "Book now",
    ctaUrl: company.bookingUrl,
  },
  {
    id: "b1",
    category: "rickshaw",
    name: "Big Bull B1",
    line: "E-Rickshaw",
    tagline: "The new beginning.",
    description:
      "A strong body, 1000W motor and 24-tube controller, running on long-lasting BIS-approved tyres — built for easy handling from the first ride.",
    image: "https://www.bigbullerickshaw.in/wp-content/uploads/2023/09/b1-1.png",
    cta: "Book now",
    ctaUrl: company.bookingUrl,
  },
  {
    id: "b2",
    category: "rickshaw",
    name: "Big Bull B2",
    line: "E-Rickshaw",
    tagline: "Be fast or be last.",
    description:
      "A dynamic-design model with a 1000W motor and 24-tube controller in a strong, easy-to-handle body.",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/08/WebB2SS-1024x1024.png",
    cta: "Book now",
    ctaUrl: company.bookingUrl,
  },
  {
    id: "b3",
    category: "rickshaw",
    name: "Big Bull B3",
    line: "E-Rickshaw — Super",
    tagline: "Love the life you live.",
    description:
      "The Super line's flagship build in mild-steel body construction — 12kg of body weight, a 1000W motor, a 36-tube smart controller and black alloy wheels.",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/08/WebB3-1024x1024.png",
    cta: "Book now",
    ctaUrl: company.bookingUrl,
  },
  {
    id: "b6",
    category: "rickshaw",
    name: "Big Bull B6",
    line: "E-Rickshaw",
    tagline: "Strongest ever.",
    description:
      "Big Bull's strongest-bodied model, with a rear camera mounted up top and an advanced motor built for higher top speed.",
    image: "https://www.bigbullerickshaw.in/wp-content/uploads/2023/09/b6-1.png",
    cta: "Book now",
    ctaUrl: company.bookingUrl,
  },
  {
    id: "glider",
    category: "scooter",
    name: "Prakriti Glider",
    line: "E-Scooter",
    tagline: "Top-class performance, best-in-class mileage.",
    description:
      "The Prakriti line's performance-oriented electric scooter, built for efficient everyday riding.",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2023/05/showroom-pic.png",
    cta: "Explore on Prakriti",
    ctaUrl: company.scooterSite,
  },
  {
    id: "super",
    category: "scooter",
    name: "Prakriti Super",
    line: "E-Scooter",
    tagline: "High-class design, a full range of colours.",
    description:
      "Cruise control, a reverse button switch and PU paint with an 18-month warranty round out the Super's feature set.",
    image: "https://www.bigbullerickshaw.in/wp-content/uploads/2023/05/web-pic-7.png",
    cta: "Explore on Prakriti",
    ctaUrl: company.scooterSite,
  },
];

export const explodedComponents = [
  {
    id: "body",
    label: "Body shell",
    copy: "The outer shell and canopy that shape the cabin and shield the driver and passengers.",
  },
  {
    id: "chassis",
    label: "Chassis",
    copy: "The structural base every other component mounts to — the foundation for everyday commercial duty.",
  },
  {
    id: "battery",
    label: "Battery pack",
    copy: "Stores the charge that powers the drivetrain, seated low in the frame for stability.",
  },
  {
    id: "motor",
    label: "BLDC motor",
    copy: "An IP67 waterproof brushless DC motor — sealed against dust and monsoon conditions.",
  },
  {
    id: "controller",
    label: "Controller",
    copy: "Regulates power delivery from battery to motor; Big Bull models use multi-tube controllers rated for continuous commercial use.",
  },
  {
    id: "suspension",
    label: "Suspension",
    copy: "Front and rear shock absorbers tuned for load-bearing comfort on real Indian roads.",
  },
  {
    id: "wheels",
    label: "Wheels & tyres",
    copy: "Long-lasting, BIS-approved tyres built to carry passengers and cargo through daily wear.",
  },
];

export const trustPoints = [
  {
    title: "ICAT approved",
    copy: "Big Bull's battery rickshaws carry ICAT certification from the International Centre for Automotive Technology, confirming they meet defined safety and performance standards.",
  },
  {
    title: "Genuine spare parts",
    copy: "100% genuine, quality spare parts are supplied across every e-rickshaw model, backed by a dedicated after-sales network.",
  },
  {
    title: "In-house quality inspection",
    copy: "Every vehicle is checked by an in-house quality inspection team and put through rigorous inspection before it leaves for sale.",
  },
  {
    title: "In-house manufacturing",
    copy: "State-of-the-art manufacturing facilities in West Bengal and Gujarat produce the majority of components in-house.",
  },
  {
    title: "Dedicated R&D wing",
    copy: "A dedicated R&D department works on upgrading Big Bull's electric vehicles on an ongoing basis.",
  },
  {
    title: "State-approved network",
    copy: "Big Bull's rickshaws are state-approved, with dealers and distributors present across Gujarat, Maharashtra, Assam, Odisha, Rajasthan, Uttarakhand, Jharkhand, Chhattisgarh, Uttar Pradesh, Bihar and West Bengal.",
  },
];

export const manufacturingStages = [
  {
    n: "01",
    title: "Design",
    copy: "A dedicated in-house vehicle design team develops new models and customised builds for commercial buyers.",
  },
  {
    n: "02",
    title: "Engineering",
    copy: "BLDC motors, controllers, chassis and suspension are engineered for continuous, load-bearing commercial duty.",
  },
  {
    n: "03",
    title: "Manufacturing",
    copy: "Vehicles are built at Big Bull's own facilities in West Bengal and Gujarat, with roughly 90% indigenous components.",
  },
  {
    n: "04",
    title: "Quality inspection",
    copy: "An in-house inspection team runs every vehicle through rigorous checks before it is cleared for sale.",
  },
  {
    n: "05",
    title: "Delivery",
    copy: "Vehicles move out through Big Bull's dealer and distributor network across eleven Indian states.",
  },
];

export const dealerStates = [
  "West Bengal",
  "Gujarat",
  "Maharashtra",
  "Assam",
  "Odisha",
  "Rajasthan",
  "Uttarakhand",
  "Jharkhand",
  "Chhattisgarh",
  "Uttar Pradesh",
  "Bihar",
];

export const businessBenefits = [
  {
    title: "Electric operation",
    copy: "Zero tailpipe emissions and running costs tied to electricity rather than fuel prices.",
  },
  {
    title: "Lower maintenance",
    copy: "Fewer moving parts than a combustion vehicle, which the brand positions as a lower ongoing service burden.",
  },
  {
    title: "Genuine parts, ready supply",
    copy: "A dedicated spare parts line (Babagold) keeps replacement components genuine and available.",
  },
  {
    title: "A service network behind you",
    copy: "Service centres and an in-house inspection team support the vehicle for as long as you run it.",
  },
  {
    title: "Financing available",
    copy: "Multiple finance partners offer EMI options for buyers financing a vehicle as a business asset.",
  },
];

export const blogPosts = [
  {
    title: "Maintenance of electric rickshaw for future use",
    date: "20 Sep",
    category: "E-Rickshaw · Electric car",
    url: "https://www.bigbullerickshaw.in/maintenance-of-electric-rickshaw/",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/09/Blog-heading12-1024x768.png",
  },
  {
    title: "Empowering local communities with e-rickshaw economic impact",
    date: "20 Aug",
    category: "E-Rickshaw",
    url: "https://www.bigbullerickshaw.in/e-rickshaw-economic-impact/",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/08/Blog-heading10-2-1024x768.png",
  },
  {
    title: "Rise of electric rickshaws in public transportation emergencies",
    date: "19 Jul",
    category: "E-Rickshaw · Electric car",
    url: "https://www.bigbullerickshaw.in/rise-of-electric-rickshaw-in-public-transportation-emergencies/",
    image:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2024/07/Blog-heading8-1024x768.png",
  },
];

export const leadership = [
  {
    name: "Deepak Gupta",
    role: "Director, Marketing & Operations",
    copy: "Leads marketing strategy and operations, working to strengthen Big Bull's market position.",
  },
  {
    name: "Deepak Shaw",
    role: "Director, Sales",
    copy: "Leads the sales process — client relationships, dealer development and product pricing.",
  },
];

export const heroImage =
  "https://www.bigbullerickshaw.in/wp-content/uploads/2023/12/b5-cover-1024x709.png";
