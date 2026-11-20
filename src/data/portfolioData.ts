import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ya Fa Elin",
    headline: "Computer Science Student | Web & Software Development",
    roles: [
      "Computer Science Student",
      "Web Developer",
      "Software Developer",
      "Operations Coordinator"
    ],
    bioShort: "Computer Science undergraduate with hands-on experience in web development, Linux administration, cloud fundamentals, inventory control, and customer operations.",
    bioLong: [
      "I am a Computer Science undergraduate at Norton University with hands-on experience in web development, Linux administration, and Microsoft Azure fundamentals.",
      "My technical foundation includes HTML, CSS, JavaScript, Node.js, Express.js, Python, and MySQL. I combine these skills with practical experience in inventory operations, stock control, logistics, and customer service.",
      "I am organized, accurate, and comfortable coordinating with technical teams, finance teams, suppliers, and customers."
    ],
    location: "Phnom Penh, Cambodia",
    availability: "Open to web and software development opportunities",
    yearsOfExperience: "Hands-on",
    resumeUrl: `${import.meta.env.BASE_URL}Ya_Fa_Elin_CV.pdf`,
    phone: "0969250005",
    social: {
      github: "",
      linkedin: "",
      facebook: "https://www.facebook.com/share/1Eie8DcZWt/",
      twitter: "",
      email: "everlot007@gmail.com",
      discord: ""
    }
  },
  stats: [
    {
      value: "2023",
      label: "B.Sc. Start",
      subtext: "Computer Science at Norton University"
    },
    {
      value: "3",
      label: "Work Roles",
      subtext: "Operations and inventory experience"
    },
    {
      value: "Khmer",
      label: "Native Language",
      subtext: "Intermediate English communication"
    },
    {
      value: "Web",
      label: "Development",
      subtext: "HTML, CSS, JavaScript, Node.js"
    }
  ],
  skills: [
    { name: "HTML", level: 85, category: "Frontend", icon: "code", featured: true },
    { name: "CSS", level: 80, category: "Frontend", icon: "layout", featured: true },
    { name: "JavaScript", level: 82, category: "Frontend", icon: "code", featured: true },
    { name: "Node.js", level: 78, category: "Backend", icon: "server", featured: true },
    { name: "Express.js", level: 78, category: "Backend", icon: "server" },
    { name: "Python", level: 75, category: "Backend", icon: "terminal" },
    { name: "MySQL", level: 75, category: "Backend", icon: "database", featured: true },
    { name: "Linux", level: 78, category: "Cloud & DevOps", icon: "terminal", featured: true },
    { name: "Microsoft Azure", level: 70, category: "Cloud & DevOps", icon: "server" },
    { name: "Microsoft Excel", level: 82, category: "Tools & Design", icon: "layout" },
    { name: "Microsoft Word", level: 82, category: "Tools & Design", icon: "layout" },
    { name: "Microsoft PowerPoint", level: 80, category: "Tools & Design", icon: "layout" },
    { name: "Canva", level: 75, category: "Tools & Design", icon: "sparkles" }
  ],
  projects: [],
  experiences: [
    {
      id: "exp-1",
      role: "Operations & Delivery Coordinator",
      company: "Family Beef Business",
      location: "Phnom Penh, Cambodia",
      period: "2023 - Present",
      type: "work",
      description: [
        "Coordinate end-to-end order fulfillment, from hygienic product preparation and packaging to timely customer delivery.",
        "Maintain product quality and reliable supply logistics while responding to customer needs."
      ],
      technologies: ["Order Fulfillment", "Customer Service", "Logistics", "Quality Control"]
    },
    {
      id: "exp-2",
      role: "Stock Controller",
      company: "MicroMart",
      location: "Phnom Penh, Cambodia",
      period: "2021 - 2022",
      type: "work",
      description: [
        "Performed monthly physical stock counts and reconciled records with the finance department.",
        "Received, inspected, and organized supplier shipments and prepared procurement lists.",
        "Maintained accurate stock-in, stock-out, and post-movement verification records.",
        "Packaged products for transportation and escalated operational or system issues to management and technical teams."
      ],
      technologies: ["Inventory Control", "Stock Reconciliation", "Procurement", "Reporting"]
    },
    {
      id: "exp-3",
      role: "Operations Assistant",
      company: "Family Beef Business",
      location: "Phnom Penh, Cambodia",
      period: "2019 - 2021",
      type: "work",
      description: [
        "Supported daily operations, inventory preparation, and local customer deliveries."
      ],
      technologies: ["Inventory Preparation", "Delivery", "Customer Operations"]
    },
    {
      id: "edu-1",
      role: "Bachelor of Science in Computer Science",
      company: "Norton University",
      location: "Phnom Penh, Cambodia",
      period: "2023 - Present",
      type: "education",
      description: [
        "Currently pursuing a Bachelor of Science in Computer Science."
      ],
      technologies: ["Web Development", "Programming", "Databases", "Linux", "Cloud Fundamentals"]
    },
    {
      id: "edu-2",
      role: "English Language Program",
      company: "Australian Centre for Education (ACE)",
      location: "Phnom Penh, Cambodia",
      period: "2022 - 2023",
      type: "education",
      description: [
        "Completed an English language program."
      ],
      technologies: ["English Communication"]
    },
    {
      id: "edu-3",
      role: "Bachelor of Architecture - Coursework",
      company: "Norton University",
      location: "Phnom Penh, Cambodia",
      period: "2021 - 2022",
      type: "education",
      description: [
        "Completed architecture coursework before continuing in Computer Science."
      ],
      technologies: ["Architecture", "Design"]
    }
  ],
  services: [],
  testimonials: []
};
