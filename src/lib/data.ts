import type { Project, CareerItem, EducationItem, SkillCategory } from './types';

export const GITHUB_USERNAME = 'ayushpatra11';
export const LEETCODE_USERNAME = 'ayushpatra11';

export const projects: Project[] = [
  {
    title: 'Neuromorphic Routing on Network-on-Chip',
    description:
      'MSc dissertation. A C++ pipeline benchmarking fast, accurate, and energy-aware spike routing techniques for neuromorphic platforms. SNN representations were derived using SNNTorch in Python, with two routing algorithms evaluated at scale.',
    tags: ['C++', 'Python', 'SNNTorch', 'NoC', 'Neuromorphic Computing', 'Systems'],
    github: 'https://github.com/ayushpatra11/NeuromorphicModelling',
    featured: true,
  },
  {
    title: 'Intrusion Detection — ML on Network Traffic',
    description:
      'Supervised learning model trained to classify network traffic as benign or malicious on the UNSW-NB15 dataset, achieving 87% test accuracy and a False Alarm Rate of 0.009.',
    tags: ['Python', 'Scikit-Learn', 'ML', 'Network Security', 'UNSW-NB15'],
    featured: true,
  },
  {
    title: 'netvisor — Kernel Networking CLI',
    description:
      'CLI tool for orchestrating kernel network configuration in environments that use LXD, MAAS, OVN and Kubernetes. Designed to surface conflicts across multiple networking layers and prevent resource allocation clashes. Currently in active development.',
    tags: ['Go', 'Linux Kernel', 'LXD', 'MAAS', 'OVN', 'Kubernetes', 'Networking', 'CLI'],
    github: 'https://github.com/ayushpatra11/netvisor',
    featured: true,
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
      'Built a ReactJS and SQLite3 ETL dashboard displaying live xApp traffic in real time; integrated custom xApps with the OAI 5G core via containerisation.',
    ],
    tags: ['C++', 'Python', '5G / OAI', 'ORAN', 'ReactJS', 'SQLite3', 'System Design', 'Unit Testing', 'GDB / Valgrind', 'Fault Analysis', 'CI / CD'],
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
    tags: ['React', 'HTML / CSS', 'JavaScript', 'Figma', 'UI / UX', 'Component Design'],
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
      'GreatUniHackathon — HireAI project',
    ],
    logo: '/images/muj.png',
  },
  {
    institution: 'Manipal University Jaipur',
    degree: 'Bachelor of Technology',
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
      'Grade: 96.2% — 12th, CBSE',
      'Click Photography Club, Cinephilia Videography Club',
    ],
    logo: '/images/hxls.png',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: '⚙️',
    skills: ['C++', 'Python', 'Go', 'TypeScript', 'JavaScript', 'Bash / Expect', 'SQL'],
  },
  {
    name: 'Networking & Systems',
    icon: '🌐',
    skills: ['TCP / IP', 'BGP', 'OSPF', 'SDN', '5G / ORAN', 'OVN', 'eBPF (learning)', 'Wireshark'],
  },
  {
    name: 'Engineering Practices',
    icon: '🛠️',
    skills: ['System Design', 'SOLID Principles', 'Unit Testing', 'Integration Testing', 'CI / CD', 'Runtime Profiling', 'Code Review', 'GDB / Valgrind'],
  },
  {
    name: 'Frameworks & Tools',
    icon: '🚀',
    skills: ['Linux / Unix', 'Git / GitLab', 'ReactJS', 'PyTorch', 'LangChain', 'SNNTorch', 'FastAPI', 'PostgreSQL'],
  },
];
