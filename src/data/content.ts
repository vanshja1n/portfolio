import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock08 from '../assets/images/mock08.png';
import mock10 from '../assets/images/mock10.png';
import profileImg from '../assets/images/profile.png';

export const PROFILE_IMAGE = profileImg;

export const site = {
  name: 'Vansh Jain',
  role: 'Student • Developer',
  tagline:
    'I build polished web experiences with clean architecture, thoughtful product design, and a strong focus on performance.',
  availability: 'Available for software engineering internships • full-stack roles',
  github: 'https://github.com/vanshja1n/',
  linkedin: 'https://www.linkedin.com/in/thisisvanshjain/',
  email: 'vj8067202@gmail.com',
  location: 'India • Remote / Hybrid',
  blog: 'https://vanshjain.rf.gd/blog/',
  profileImage: PROFILE_IMAGE,
};

export const about = {
  headline: 'Designing calm digital products that feel premium, intuitive, and fast.',
  paragraphs: [
    'I’m a developer who enjoys turning product ideas into responsive, accessible web experiences. My work blends modern React interfaces, thoughtful UX, and robust full-stack implementation with an eye on detail and scale.',
    'My focus is building products that feel effortless to use, from the first interaction to deployment.',
  ],
};

export const stats = [
  { value: 'Full-Stack', label: 'Architecture' },
  { value: 'Product', label: 'Mindset' },
  { value: 'Performance', label: 'First' },
];

export const projects = [
  {
    id: 'blockchain',
    number: '01',
    title: 'Vansh Blockchain Simulator',
    tagline: 'Building trust through an interactive blockchain experience.',
    image: mock06,
    description: 'An interactive blockchain simulator that visualizes wallet creation, digital signatures, Proof of Work mining, and block validation in real time.',
    stack: ['React', 'JavaScript', 'Blockchain Concepts', 'SHA-256', 'Interactive UI'],
    tech: ['React', 'JavaScript', 'Blockchain Concepts', 'SHA-256', 'Interactive UI'],
    type: 'Simulation',
    year: '2024',
    link: 'https://vansh-blockchain-simv3.vercel.app/',
    live: 'https://vansh-blockchain-simv3.vercel.app/',
    github: 'https://github.com/vanshja1n/vansh-blockchain-sim',
    featured: true,
  },
  {
    id: 'invoice',
    number: '02',
    title: 'Invoice & Inventory Management',
    tagline: 'Simplifying business workflows with a modern invoicing platform.',
    image: mock08,
    description: 'A complete invoice and inventory management application featuring customer management, analytics, PDF generation, multiple invoice templates, and offline local storage.',
    stack: ['React', 'Vite', 'IndexedDB', 'Tailwind CSS', 'jsPDF'],
    tech: ['React', 'Vite', 'IndexedDB', 'Tailwind CSS', 'jsPDF'],
    type: 'Application',
    year: '2024',
    link: 'https://react-invoice-vj.vercel.app/',
    live: 'https://react-invoice-vj.vercel.app/',
    github: 'https://github.com/vanshja1n/react-invoice-vj',
    featured: true,
  },
  {
    id: 'booknest',
    number: '03',
    title: 'BookNest',
    tagline: 'Connecting readers through a community-driven book exchange.',
    image: mock05,
    description: 'A full-stack platform for discovering, exchanging, and managing books with secure authentication, personalized recommendations, and a seamless user experience.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
    type: 'Platform',
    year: '2024',
    link: 'https://book-nest-oec2.vercel.app/',
    live: 'https://book-nest-oec2.vercel.app/',
    github: 'https://github.com/vanshja1n/BookNest',
    featured: false,
  },
  {
    id: 'cartzilla',
    number: '04',
    title: 'Cartzilla Flash Sale',
    tagline: 'Designed for speed, engagement, and high-conversion shopping.',
    image: mock10,
    description: 'A responsive flash sale experience featuring live countdowns, dynamic product browsing, cart management, and a fast, intuitive shopping flow.',
    stack: ['React', 'Vite', 'REST APIs', 'State Management'],
    tech: ['React', 'Vite', 'REST APIs', 'State Management'],
    type: 'E-commerce',
    year: '2023',
    link: 'https://cart-zilla-sable.vercel.app/',
    live: 'https://cart-zilla-sable.vercel.app/',
    github: 'https://github.com/vanshja1n/cartzilla',
    featured: false,
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Crafting responsive UI systems with React, TypeScript, and polished interactions.',
    items: ['React', 'TypeScript', 'Vite', 'Material UI', 'Responsive Design'],
  },
  {
    title: 'Backend & APIs',
    description: 'Building secure, scalable services with Node.js, REST APIs, and modern data flows.',
    items: ['Node.js', 'Express.js', 'Python', 'SQL', 'REST APIs'],
  },
  {
    title: 'Product & Delivery',
    description: 'Bridging development, design thinking, and iteration through debugging and collaboration.',
    items: ['Git', 'GitHub', 'Figma', 'Debugging', 'Problem Solving'],
  },
  {
    title: 'Design Focus',
    description: 'Bringing a premium visual language to interfaces with strong clarity and motion.',
    items: ['UI Systems', 'Animation', 'Accessibility', 'Teamwork', 'Communication'],
  },
];

export const skillsIntro =
  'I have hands-on experience building responsive websites and full-stack web applications using React, TypeScript, Node.js, and SQL. I enjoy blending product-minded UI work with practical engineering and clear communication.';

export const milestones = [
  {
    title: 'Software Engineering Experience',
    period: '2024 – Present',
    type: 'Experience',
    text: 'Building end-to-end web products with React, Node.js, and modern UI systems while sharpening product thinking through rapid iteration and clean implementation.',
  },
  {
    title: 'Computer Science Foundations',
    period: '2022 – Present',
    type: 'Education',
    text: 'Developing a strong foundation in data structures, problem solving, system design, and software development principles while working on real projects.',
  },
];

export const navItems = [
  { label: "Editor's Note", href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const indexItems = [
  { number: '01', label: "EDITOR'S NOTE", href: '#about' },
  { number: '02', label: 'WORK', href: '#work' },
  { number: '03', label: 'STACK', href: '#stack' },
  { number: '04', label: 'CONTACT', href: '#contact' },
];
