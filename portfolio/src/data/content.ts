export const personal = {
  name: 'Lufene Mark Travis',
  title: 'Software Developer & CS Graduate',
  location: 'Kampala, Uganda',
  email: 'marktravis689@gmail.com',
  tagline: 'Building secure, intelligent systems — from full-stack web applications to ML-powered infrastructure tools — with a focus on real-world impact across Africa.',
  github: 'https://github.com/Humble689',
  linkedin: 'https://www.linkedin.com/in/lufene-mark-travis-97679134b',
  kaggle: 'https://www.kaggle.com/marktravis689',
  datacamp: 'https://www.datacamp.com/portfolio/marktravis689',
  formspree: 'https://formspree.io/f/xnjzekdg',
};

export const about = {
  bio: `I'm a Computer Science graduate from Uganda Christian University with a passion for turning complex engineering challenges into clean, working systems. My foundation spans full-stack web development, cybersecurity, AI/ML, and enterprise networking.

What drives me is building things that matter — whether that's a machine-learning intrusion detection system protecting SME networks, a gym management platform for a business in South Sudan, or contributing to data quality for international research. I bring an infrastructure-first mindset: reliability, security, and scalability from the ground up.`,
  highlights: [
    { label: 'Projects Built', value: '10+' },
    { label: 'Repositories', value: '54' },
    { label: 'Certifications', value: '3' },
    { label: 'Countries Reached', value: '3' },
  ],
};

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'C', 'HTML/CSS', 'LaTeX'],
    icon: '⌨️',
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
    icon: '🎨',
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Scikit-learn', 'TensorFlow', 'Pandas'],
    icon: '⚙️',
  },
  {
    category: 'AI & Automation',
    items: ['Agentic AI', 'Machine Learning', 'Data Analysis', 'NLP', 'Workflow Automation'],
    icon: '🤖',
  },
  {
    category: 'Networking & Security',
    items: ['Cisco Enterprise Networking', 'Network Security', 'VPN Configuration', 'System Administration', 'Wireshark'],
    icon: '🔒',
  },
  {
    category: 'Tools & DevOps',
    items: ['Git/GitHub', 'VS Code', 'Docker', 'Linux', 'Firebase', 'Vite'],
    icon: '🛠️',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Vanguard — ML Network Intrusion Detection System',
    description: 'A hybrid machine learning–powered NIDS targeting Ugandan SMEs. Combines supervised and unsupervised models to detect known and zero-day threats by analyzing network traffic in real time with a React/WebSocket dashboard.',
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'React', 'Scapy', 'Wireshark'],
    github: 'https://github.com/Group-Firewall/Vanguard',
    demo: null,
    featured: true,
    status: 'Final Year Project',
    highlights: [
      'Hybrid detection pipeline (Random Forest + Isolation Forest)',
      'Real-time packet capture via Scapy',
      'Live alert dashboard with WebSocket',
      'Evaluated on CICIDS benchmark datasets',
    ],
  },
  {
    id: 2,
    title: 'Job Portal — Full-Stack Platform',
    description: 'A full-stack web application connecting job seekers with employers through a streamlined, role-based interface. Features user authentication, job listings management, and application tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/Humble689/JobPortalFullStack_689689',
    demo: null,
    featured: true,
    status: 'Complete',
    highlights: [
      'Role-based access (employer / job seeker)',
      'Full CRUD for job listings',
      'Responsive mobile-first UI',
      'RESTful API architecture',
    ],
  },
  {
    id: 3,
    title: 'AI Study Buddy',
    description: 'An intelligent study assistant powered by Agentic AI. Automates learning workflows, generates practice questions, and provides dynamic educational support tailored to study material.',
    tags: ['Python', 'Agentic AI', 'NLP', 'Automation'],
    github: 'https://github.com/Humble689/study-buddy',
    demo: null,
    featured: true,
    status: 'In Progress',
    highlights: [
      'Agentic AI workflow for automated learning',
      'Dynamic Q&A generation from source material',
      'Session-based memory and context tracking',
      'Extensible plugin architecture',
    ],
  },
  {
    id: 4,
    title: 'AgroSmart Database',
    description: 'A structured relational database system for managing and optimizing agricultural data. Designed to support data-driven decisions for farm management, inventory, and yield tracking.',
    tags: ['SQL', 'PostgreSQL', 'Database Design', 'ERD'],
    github: 'https://github.com/Humble689/AgroSmart-DB',
    demo: null,
    featured: false,
    status: 'Complete',
    highlights: [
      'Normalized relational schema (3NF)',
      'Optimized queries for yield reporting',
      'Entity-relationship diagram documented',
    ],
  },
  {
    id: 5,
    title: 'Hashing Algorithm Implementation',
    description: 'A low-level C implementation of cryptographic hashing algorithms demonstrating core computer science principles of data integrity, security, and systems programming.',
    tags: ['C', 'Cryptography', 'Systems Programming'],
    github: 'https://github.com/Humble689/hashing',
    demo: null,
    featured: false,
    status: 'Complete',
    highlights: [
      'Hash function implementations from scratch',
      'Demonstrates deep CS fundamentals',
      'Relevant to cybersecurity coursework',
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: 'Digital Growth Support Intern',
    company: 'Absa Bank Uganda',
    period: 'Jun 2025 – Aug 2025',
    type: 'Internship',
    description: 'Supported Absa Uganda\'s digital transformation by optimizing internal workflows and monitoring network stability across digital banking platforms.',
    achievements: [
      'Monitored digital platform stability and resolved user-facing technical issues',
      'Documented recurring technical patterns, enabling faster resolution cycles',
      'Streamlined repetitive data processes to improve team productivity',
      'Participated in customer digital onboarding initiatives',
    ],
  },
  {
    id: 2,
    role: 'Data Quality Analyst (Volunteer)',
    company: 'Statistics Without Borders',
    period: 'Jan 2025 – Present',
    type: 'Volunteer',
    description: 'Validated datasets and analytical deliverables for international pro bono statistical projects serving underserved communities.',
    achievements: [
      'Reviewed global datasets against statistical quality standards',
      'Collaborated with international volunteer teams across time zones',
      'Ensured consistency and compliance across analytical reports',
      'Promoted rigorous data practices in open statistical projects',
    ],
  },
  {
    id: 3,
    role: 'Property Manager',
    company: 'Jokolera Estate',
    period: '2023 – 2024',
    type: 'Full-time',
    description: 'Managed a portfolio of four properties overseeing maintenance, tenant relations, and financial collections.',
    achievements: [
      'Achieved 10% lease renewal rate across all clients over a 2-year period',
      'Mediated tenant disputes using trained conflict resolution skills',
      'Maintained maintenance schedules and financial collections with zero defaults',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Uganda Christian University',
    location: 'Mukono, Uganda',
    period: '2023 – 2025',
    highlights: ['Final Year Project: Vanguard NIDS (ML-powered intrusion detection)', 'Volunteer Computer Technician'],
  },
  {
    degree: 'Uganda Advanced Certificate of Education (UACE)',
    institution: 'London College of St. Lawrence Maya',
    period: '2019 – 2022',
    highlights: [],
  },
];

export const certifications = [
  { name: 'Enterprise Networking', issuer: 'Cisco', icon: '🌐' },
  { name: 'Agentic AI', issuer: 'Udemy', icon: '🤖' },
  { name: 'Conflict Resolution', issuer: 'Udemy', icon: '🤝' },
];
