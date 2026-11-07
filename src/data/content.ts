import mock05 from '../assets/images/mock05.webp';
import mock06 from '../assets/images/mock06.webp';
import mock08 from '../assets/images/mock08.webp';
import mock10 from '../assets/images/mock10.webp';
import profileImg from '../assets/images/profile.webp';

export const PROFILE_IMAGE = profileImg;

export const site = {
  name: 'Vansh Jain',
  role: 'Student • Developer',
  tagline:
    'I build thoughtful digital products and trade the markets intraday, combining clean engineering, analytical thinking, and a curiosity for how technology and markets intersect.',
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
    'I’m a developer who turns product ideas into responsive, accessible web experiences, blending modern React interfaces, thoughtful UX, and robust full-stack implementation. I’m also passionate about financial markets and intraday trading, where I apply the same analytical and systematic mindset.',
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
    title: 'BAMZO',
    tagline: 'A modern online gaming platform with 350+ users worldwide.',
    image: mock06,
    description: 'BAMZO is a modern online gaming platform with 450+ free browser games and 350+ users worldwide. Play instantly without downloads across action, puzzle, strategy, racing, sports, casual and more.',
stack: ['HTML', 'CSS', 'JavaScript', 'Game Portal', 'Responsive UI'],
tech: ['HTML', 'CSS', 'JavaScript', 'Game Embeds', 'Vercel'],
    type: 'Simulation',
    year: '2024',
    link: 'https://bamzo.vercel.app/',
    live: 'https://bamzo.vercel.app/',
    github: 'https://github.com/vanshja1n/BAMZO',
    featured: true,
  },
  {
    id: 'slaptab',
    number: '02',
    title: 'SLAPTAB',
    tagline: 'Get slapped back into productivity.',
    image: mock08,
    description: 'A productivity-focused Chrome extension that helps users regain control of distracting websites through intelligent time limits, intentional interruptions, and a lightweight browser-native experience.',
    stack: ['JavaScript', 'Chrome Extensions', 'Local Storage', 'Browser APIs', 'Responsive UI'],
    tech: ['JavaScript', 'Chrome Extensions', 'Local Storage', 'Browser APIs', 'Responsive UI'],
    type: 'Extension',
    year: '2024',
    link: 'https://slaptab.vercel.app/',
    live: 'https://slaptab.vercel.app/',
    github: 'https://github.com/vanshja1n/SlapTab',
    featured: true,
  },
  {
    id: 'trading-pipeline',
    number: '03',
    title: 'Trading Pipeline',
    tagline: 'Research. Test. Refine.',
    image: mock05,
    description: 'A modular quantitative trading platform for Indian markets that combines NSE data, systematic strategies, backtesting, risk management, portfolio analytics, and interactive research into one workflow.',
    stack: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'NSE Data', 'Backtesting', 'Quantitative Research'],
    tech: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'NSE Data', 'Backtesting', 'Quantitative Research'],
    type: 'Platform',
    year: '2024',
    link: 'https://github.com/vanshja1n/trading-pipeline',
    live: 'https://github.com/vanshja1n/trading-pipeline',
    github: 'https://github.com/vanshja1n/trading-pipeline',
    featured: false,
  },
  {
    id: 'invoice',
    number: '04',
    title: 'Invoice & Inventory Management',
    tagline: 'Modern invoicing. Smarter inventory. Built for growing businesses.',
    image: mock10,
    description: 'A full-stack SaaS platform with secure cloud sync, inventory tracking, customer management, analytics, and professional PDF invoice generation.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'],
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'],
    type: 'Application',
    year: '2024',
    link: 'https://react-invoice-vj.vercel.app/',
    live: 'https://react-invoice-vj.vercel.app/',
    github: 'https://github.com/vanshja1n/react-invoice-vj',
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
