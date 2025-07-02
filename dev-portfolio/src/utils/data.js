// Icons
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

// Project Images
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";

// Skills
export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 92, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 85, color: "bg-green-700" },
      { name: "Redis", level: 80, color: "bg-red-500" },
      { name: "Prisma", level: 82, color: "bg-indigo-600" },
      { name: "Firebase", level: 78, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-gray-900" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

// Tech Stack
export const TECH_STACK = [
  "JavaScript", "HTML5", "CSS3", "Sass", "Webpack", "Gulp", "Babel", "ESLint",
  "Prettier", "npm", "Yarn", "Vite", "Axios", "React Query", "Redux", "Zustand",
  "Jotai", "Recoil", "SWR", "D3.js", "Chart.js", "Three.js", "GSAP", "Locomotive Scroll",
  "ScrollReveal", "AOS", "Formik", "Yup", "React Hook Form", "Zod", "React Router",
  "Next.js Router", "TanStack Router", "Stripe", "PayPal", "Auth.js", "Passport.js",
  "OAuth", "JWT", "Bcrypt", "NodeMailer", "Socket.io", "WebRTC", "Pusher", "Apollo Client",
  "React Apollo", "Express Apollo", "TypeGraphQL", "Mongoose", "Sequelize", "TypeORM",
  "PostgreSQL", "MySQL", "SQLite", "REST APIs", "GraphQL APIs", "TRPC", "Jest", "Cypress",
  "Figma", "Adobe XD", "Notion", "Slack",
];

// Stats
export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: "Green Cart - Grocery Delivery",
    description: "Developed a user-friendly e-commerce website for grocery delivery with advanced filtering, search, and admin panel for inventory and order management.",
    image: PROJECT_IMG_1,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Urban Nest - AI-Powered Real Estate Platform",
    description: "An Airbnb-like platform with AI integration for intelligent property listing, filtering, and user recommendations. Built with EJS and MySQL backend.",
    image: PROJECT_IMG_2,
    tags: ["Node.js", "Express", "EJS", "MySQL", "OpenAI API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "BuildEstate - Modern Real Estate Platform",
    description: "A scalable real estate solution with AI-powered insights for market analysis, property recommendations, and investment forecasting.",
    image: PROJECT_IMG_3,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "AI",
  },
  {
    id: 4,
    title: "StyleScape - Clothing E-Commerce",
    description: "Built a stylish clothing e-commerce platform with dynamic product pages, filters, cart functionality, and responsive UI.",
    image: PROJECT_IMG_4,
    tags: ["React", "Tailwind", "Context API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Wallpaper Sharing Platform",
    description: "A website that allows users to upload and browse wallpapers by categories, tags, and uploaders. Admin dashboard included.",
    image: PROJECT_IMG_5,
    tags: ["React", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "To-Do App with Appwrite",
    description: "A secure and modern To-Do list app using Appwrite backend services with React frontend and real-time updates.",
    image: PROJECT_IMG_6,
    tags: ["React", "Appwrite", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
];

// Journey
export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description: "Began learning HTML, CSS, JavaScript, and C++. Built simple websites and Java console projects.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "Bachelor's Degree",
    company: "SPPU, Maharashtra",
    description: "Completed my Bachelor's degree in Computer Science. Focused on software development and algorithms.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "MCA Enrollment",
    company: "R. H. Sapat COE, Nashik",
    description: "Started MCA to deepen my knowledge in full-stack development, databases, and software engineering.",
    icon: BookOpen,
    color: "bg-teal-500",
  },
  {
    year: "2024",
    title: "Built Major Projects",
    company: "Independent",
    description: "Created multiple real-world full-stack projects including Urban Nest, Green Cart, and BuildEstate.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2025",
    title: "Backend Developer Intern",
    company: "TechMET IT Solutions",
    description: "Worked on real projects using Node.js and MySQL, built scalable APIs and contributed to production-ready systems.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2025",
    title: "Freelance & Open Source",
    company: "Freelance",
    description: "Currently working on freelance projects, contributing to open-source, and exploring new technologies like Appwrite and AI integration.",
    icon: Heart,
    color: "bg-red-500",
  },
];

// Passions
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/kundanpatil-dev",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/kundanpatil",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com/kundan_codes",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:kpatil.pale@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

// Contact Info
export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Pale, Maharashtra, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kpatil.pale@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8805783614",
  },
];
