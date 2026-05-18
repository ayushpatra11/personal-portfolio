import type { Project, CareerItem, EducationItem, SkillCategory } from './types';

export const GITHUB_USERNAME = 'ayushpatra11';
export const LEETCODE_USERNAME = 'ayushpatra11';

export const projects: Project[] = [
  {
    title: 'Intrusion Detection — ML on Network Traffic',
    description:
      'Trained a supervised learning model to classify network traffic as benign or malicious using the UNSW-NB15 dataset. Achieved 87% test accuracy with a False Alarm Rate of just 0.009 — best on record at the time.',
    tags: ['Python', 'Scikit-Learn', 'Network Security', 'ML', 'UNSW-NB15'],
    featured: true,
  },
  {
    title: 'HireAI — Psychometric Hiring Chatbot',
    description:
      'AI-driven chatbot for psychometric analysis and hiring, evaluating problem-solving and higher-order thinking. Built at GreatUniHackathon (University of Manchester) with three collaborators. Integrates Reply\'s Challenge insights via prompt engineering.',
    tags: ['ReactJS', 'LangChain', 'OpenAI API', 'Streamlit', 'Python'],
    github: 'https://github.com/ayushpatra11',
    featured: true,
  },
  {
    title: 'Neuromorphic Routing on Network-on-Chip',
    description:
      'C++ pipeline comparing fast, accurate, energy-aware spike routing techniques for neuromorphic platforms. Derived intermediate SNN representations using SNNTorch in Python for benchmarking across two routing algorithms.',
    tags: ['C++', 'Python', 'SNNTorch', 'NoC', 'Neuromorphic'],
    featured: true,
  },
  {
    title: 'CNN vs Traditional Image Classification',
    description:
      'Comparative study: SIFT + BoW + SVM (30% accuracy) vs MobileNetV3 CNN (92.6%) on CIFAR using PyTorch. Demonstrated CNN superiority in learning spatially-aware, high-level features over handcrafted methods.',
    tags: ['PyTorch', 'MobileNetV3', 'CIFAR', 'Computer Vision', 'Python'],
    featured: false,
  },
  {
    title: 'Heart Care Platform',
    description:
      'Full-stack healthcare app for browsing hospitals, booking appointments, and tracking vitals. Frontend in React, backend in Django REST framework with a team of 3.',
    tags: ['React', 'Django', 'Python', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/ayushpatra11/heart-care',
    video: '/videos/heartcare.mp4',
    featured: false,
  },
  {
    title: 'Apple Store 3D',
    description:
      'Immersive 3D Apple Store experience with realistic product models, smooth camera transitions, and interactive UI built with Three.js and React.',
    tags: ['React', 'Three.js', 'WebGL', 'JavaScript'],
    github: 'https://github.com/ayushpatra11/apple-store-3d',
    video: '/videos/applestore.mp4',
    featured: false,
  },
];

export const career: CareerItem[] = [
  {
    company: 'Hughes Systique Corporation',
    role: 'Software Developer Engineer',
    period: 'Jul 2022 – Aug 2024',
    location: 'Gurgaon, India',
    description: [
      'Designed an end-to-end low-latency call resource allocation algorithm for Layer 4 in C++, achieving a 97% call success rate and increasing calibration efficiency by ~30%.',
      'Enhanced proprietary telecom simulators in Python for heavy call-load scenarios, hitting a 99.1% call completion rate.',
      'Conducted runtime profiling, fault analysis, and performance tuning under peak loads of 2,500 calls/second.',
      'Built a ReactJS + SQLite3 full-stack ETL application displaying live xApp traffic with 100% accuracy; integrated custom xApps with the OAI 5G core via Docker-based containerisation.',
    ],
    tags: ['C++', 'Python', '5G / OAI', 'ReactJS', 'SQLite3', 'Docker', 'Telecom'],
    current: false,
  },
  {
    company: 'SaudaTech',
    role: 'Front-End Developer',
    period: 'Aug 2021 – Nov 2021',
    location: 'Gurgaon, India',
    description: [
      'Designed mobile and web interfaces for the Broker Mitra App using Figma, improving UX and product design.',
      'Implemented OTP login and refined the UI, streamlining the flow for 50+ monthly active users.',
    ],
    tags: ['React', 'HTML/CSS', 'JavaScript', 'Figma', 'UI/UX'],
    current: false,
  },
];

export const education: EducationItem[] = [
  {
    institution: 'The University of Manchester',
    degree: 'Master of Science',
    field: 'Advanced Computer Science',
    period: 'Sep 2024 – Sep 2025',
    achievements: [
      'Grade: 72.5%',
      'Manchester, United Kingdom',
      'Focus: Networking, Neuromorphic Computing, ML, Distributed Systems',
      'GreatUniHackathon participant — HireAI project',
    ],
    logo: '/images/muj.png',
  },
  {
    institution: 'Manipal University Jaipur',
    degree: "Bachelor of Technology",
    field: 'Computer Science Engineering',
    period: 'Jul 2018 – Jun 2022',
    achievements: [
      'Grade: 88.00%',
      'TMA-Pai Merit Scholar',
      'ACM Student Chapter, Aperture Photography Club',
    ],
    logo: '/images/muj.png',
  },
  {
    institution: 'Heritage Xperiential Learning School',
    degree: 'High School Diploma',
    field: 'Science (CBSE)',
    period: '2004 – 2018',
    achievements: [
      '96.2% — 12th Grade, CBSE',
      'Click Photography Club, Cinephilia Videography Club',
    ],
    logo: '/images/hxls.png',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: '⚙️',
    skills: ['C++', 'Python', 'Golang', 'TypeScript', 'JavaScript', 'Bash / Expect', 'SQL'],
  },
  {
    name: 'Networking & Protocols',
    icon: '🌐',
    skills: ['TCP / UDP / IP', 'BGP', 'OSPF', '5G / OAI', 'Wireshark', 'eBPF (learning)', 'DNS'],
  },
  {
    name: 'Frameworks & Libraries',
    icon: '🚀',
    skills: ['FastAPI', 'ReactJS', 'NodeJS', 'PyTorch', 'LangChain', 'NumPy / Pandas', 'SNNTorch'],
  },
  {
    name: 'Tools & Infrastructure',
    icon: '🛠️',
    skills: ['Linux / Unix', 'Docker', 'Git / GitLab', 'GDB / Valgrind', 'PostgreSQL', 'SSH / SFTP', 'CI/CD'],
  },
];
