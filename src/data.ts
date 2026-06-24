// ============================================================
// AIRIS PACS — content data (typed)
// ============================================================
import type { IconName } from './components/Icon';

export type PageKey = 'home' | 'contact' | 'events' | 'products';

export interface NavLink {
  label: string;
  href: string;
  page?: PageKey;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Events', href: '#events', page: 'events' },
  { label: 'Products', href: '#products', page: 'products' },
];

// Core Modules — bento cards
export interface Module {
  name: string;
  badge: string;
  img: string;
  desc: string;
  points: string[];
  span: 'sm' | 'lg';
}

export const MODULES: Module[] = [
  {
    name: 'AIRIS RIS', badge: 'INFORMATION SYSTEM', img: 'assets/modules/ris-mri.png',
    desc: 'The radiology information system that centralizes orders and scheduling.',
    points: ['Centralized worklist', 'Modality scheduling', 'Radiology order tracking'],
    span: 'sm',
  },
  {
    name: 'AIRIS Worklist', badge: 'OPERATIONS', img: 'assets/modules/worklist-illus.png',
    desc: 'An AI-driven operational layer that prioritizes studies and balances radiologist workload in real time.',
    points: ['AI-driven smart prioritization', 'Real-time study status', 'Automatic assignment', 'Critical finding alerts'],
    span: 'sm',
  },
  {
    name: 'AIRIS Viewer', badge: 'DIAGNOSTIC', img: 'assets/modules/viewer-illus.png',
    desc: 'A web-based diagnostic viewer you can open from any device, anywhere, with AI overlays.',
    points: ['Open studies from any device, anywhere', 'MPR & 3D reconstruction', 'AI overlay & measurement', 'Multi-device access'],
    span: 'sm',
  },
];

// ---- Products page — detailed core modules ----
// Order follows the AIRIS handbook "Core Modules" chapter: Worklist, Viewer, Radiology Worklist (RIS).
export interface ModuleCapability {
  title: string;
  desc: string;
}

export interface ModuleDetail {
  id: string;
  name: string;
  badge: string;
  icon: IconName;
  image: string;
  imageAlt: string;
  userImage: string;
  userImageAlt: string;
  summary: string;
  capabilities: ModuleCapability[];
}

export const MODULE_DETAILS: ModuleDetail[] = [
  {
    id: 'worklist',
    name: 'AIRIS Worklist',
    badge: 'Operations',
    icon: 'list',
    image: 'assets/airis-worklist.png',
    imageAlt: 'AIRIS Worklist operational dashboard showing prioritized studies and real-time status.',
    userImage: 'assets/user_airisworklist.png',
    userImageAlt: 'Radiology operations staff and radiographers using the AIRIS Worklist to triage and assign incoming studies.',
    summary:
      'An AI-driven operational layer that sits on top of your radiology queue — scoring every study by clinical urgency and balancing workload across radiologists in real time, so the most critical cases never wait.',
    capabilities: [
      { title: 'AI smart prioritization', desc: 'Each incoming study is scored for urgency by the AI engine and surfaced to the top of the queue automatically.' },
      { title: 'Real-time study status', desc: 'Track every study from acquisition through to the final report at a single glance.' },
      { title: 'Automatic assignment', desc: 'Cases are routed to the right radiologist to keep workload balanced across the team.' },
      { title: 'Critical finding alerts', desc: 'Time-sensitive findings trigger immediate notifications so nothing slips through.' },
    ],
  },
  {
    id: 'viewer',
    name: 'AIRIS Viewer',
    badge: 'Diagnostic',
    icon: 'monitor',
    image: 'assets/airis-viewer-img.png',
    imageAlt: 'AIRIS Viewer web-based diagnostic viewer with AI overlays and multiplanar reconstruction.',
    userImage: 'assets/user_airisviewer.png',
    userImageAlt: 'Radiologists reading studies in the AIRIS Viewer with AI overlays across desktop and mobile devices.',
    summary:
      'A web-based diagnostic viewer that opens from any device, anywhere — no installation required. Read studies with AI overlays, advanced reconstructions, and measurement tools built right in.',
    capabilities: [
      { title: 'Access from anywhere', desc: 'Open studies on any modern browser, from desktop, tablet, or mobile — no local install.' },
      { title: 'MPR & 3D reconstruction', desc: 'Multiplanar and volumetric reconstruction for confident, detailed reading.' },
      { title: 'AI overlay & measurement', desc: 'Segmentation, urgency scoring, and AI explanations rendered directly on the image.' },
      { title: 'Multi-device ready', desc: 'Responsive layouts adapt to whatever screen the radiologist is working on.' },
    ],
  },
  {
    id: 'ris',
    name: 'Radiology Worklist',
    badge: 'Information System',
    icon: 'database',
    image: 'assets/hero/ris.png',
    imageAlt: 'AIRIS Radiology Information System centralizing orders, scheduling, and reporting.',
    userImage: 'assets/user_radworklist.png',
    userImageAlt: 'Radiology administrators and front-desk staff managing orders and scheduling in the Radiologist Worklist.',
    summary:
      'The radiology information system at the core of AIRIS — centralizing orders, scheduling, and reporting, and integrating cleanly with hospital information systems (SIMRS) and imaging modalities.',
    capabilities: [
      { title: 'Centralized worklist', desc: 'A single source of truth for every order and study across the radiology department.' },
      { title: 'Modality scheduling', desc: 'Schedule and manage CT, MRI, X-Ray, and ultrasound appointments in one place.' },
      { title: 'Radiology order tracking', desc: 'Follow each order end-to-end, from request through to report delivery.' },
      { title: 'SIMRS integration', desc: 'Interoperable with hospital information systems via HL7 FHIR and DICOM standards.' },
    ],
  },
];

// AI flow diagram
export const FLOW = {
  sources: ['CT Scan', 'MRI', 'X-Ray / Ultrasound'],
  core: 'AIRIS PACS Core',
  engine: 'AI Engine',
  branches: [
    { label: 'AIRIS Worklist', detail: 'Urgency score & AI explanation', icon: 'list' as IconName },
    { label: 'AIRIS Viewer', detail: 'Segmentation & AI explanation', icon: 'monitor' as IconName },
  ],
  platformLogo: 'assets/logo-satusehat.png',
};

export interface Compliance {
  label: string;
  icon: IconName;
}

export const COMPLIANCE: Compliance[] = [
  { label: 'HL7 FHIR Ready', icon: 'activity' },
  { label: 'Data Safety Integrated', icon: 'lock' },
  { label: 'DICOM Compliant', icon: 'image' },
  { label: 'ISO 27001 Secured', icon: 'shield' },
];

export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: 'MORBIS', logo: 'assets/partner-morbis-logo.png' },
  { name: 'Universitas Indonesia Hospital', logo: 'assets/partner-rsui.png' },
];

export interface Highlight {
  icon: IconName;
  title: string;
  desc: string;
}

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'sparkles', title: 'AI-Native Radiology Infrastructure', desc: 'Built for the future of medical imaging with integrated AI capabilities for triage, prioritization, and clinical decision support.' },
  { icon: 'plug', title: 'Seamless Clinical Interoperability', desc: 'Designed to integrate with modalities, RIS workflows, SIMRS/HIS, and national health platforms for unified and efficient operations.' },
  { icon: 'cloud', title: 'Flexible & Scalable Deployment', desc: 'Deploy on-premise, in the cloud, or hybrid — tailored to hospitals of any size and infrastructure readiness.' },
  { icon: 'building', title: 'Designed for Indonesia, Built to Global Standards', desc: 'Co-developed with Indonesian institutions to align with local workflows, regulations, and data sovereignty — without compromising international quality.' },
  { icon: 'trendingDown', title: 'Optimized Total Cost of Ownership', desc: 'Cost-efficient, scalable, and transparent model with unlimited users, modalities, and examinations — no vendor lock-in.' },
  { icon: 'user', title: 'Faster Clinical Decisions, Anywhere Access', desc: 'Secure, cross-device access for radiologists and clinicians to accelerate reporting, enable remote collaboration, and improve patient response time.' },
  { icon: 'shield', title: 'Trusted, Secure, and Research-Ready', desc: 'Built with strong security, compliance, and research-ready infrastructure to support clinical excellence and real-world AI innovation.' },
];

export interface Benefit {
  icon: IconName;
  title: string;
  desc: string;
}

export const BENEFITS: Benefit[] = [
  { icon: 'trendingDown', title: 'Significant Cost Savings', desc: 'Eliminate recurring expenses on X-ray film, printing equipment maintenance, physical storage, and waste. Going digital with AIRIS PACS reduces operational costs from day one.' },
  { icon: 'shield', title: 'Integrated Radiology Reporting & Secure Access', desc: 'Physicians and patients can access diagnostic images and radiology reports digitally, securely, remotely, and without delays — all within a unified system.' },
  { icon: 'sparkles', title: 'Built for Scalable AI Adoption', desc: 'Start with digital radiology today and unlock AI-powered features when ready. Hospitals can flexibly deploy AI modules that match their specific clinical needs without infrastructure changes.' },
  { icon: 'zap', title: 'Accelerated Turnaround with Our AI Solutions', desc: 'Our AI solutions help prioritize urgent cases, enabling faster responses from radiologists — designed to boost reporting speed, accuracy, and efficiency.' },
];

export interface Testimonial {
  quote?: string;
  bullets?: string[];
  rating: number;
  name: string;
  role: string;
  org: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Memudahkan dalam kegiatan pelayanan.',
    rating: 4,
    name: 'Anonymous', role: 'Radiographer', org: 'RS Husada Mangga Besar',
  },
  {
    bullets: ['Ada history pemeriksaan sebelumnya', 'Pengukuran lengkap'],
    rating: 4,
    name: 'Anonymous', role: 'Radiolog', org: 'RS Husada Mangga Besar',
  },
  {
    quote: 'Lightweight, tool-tool yang diperlukan untuk membuat ekspertise sudah tersedia dan mudah diakses.',
    rating: 5,
    name: 'Anonymous', role: 'Radiolog', org: 'RSU Bunda Jakarta',
  },
];

export interface Expert {
  name: string;
  tag: string;
  photo: string;
  bio: string;
}

export const EXPERTS: Expert[] = [
  { name: 'Muhammad Febrian Rachmadi, S.Kom., M.Sc., PhD.', tag: 'Researcher & Lecturer Universitas Indonesia', photo: 'assets/team-1.png', bio: 'A researcher and lecturer at the Faculty of Computer Science, Universitas Indonesia. Strong background in AI and computer vision research topics, especially in medical image analysis and computation.' },
  { name: 'Big Zaman, S.Kom', tag: 'Chief Executive Officer Badr Interactive', photo: 'assets/team-2.png', bio: 'The Chief Executive Officer of BADR who is an expert in the business and management aspects of digital product research and development.' },
  { name: 'Dr. dr. Reyhan Eddy Yunus, SpRad (K), M.Sc.', tag: 'Senior Radiologist at RSCM and RSUI', photo: 'assets/team-3.png', bio: 'A senior radiologist at RSCM and RSUI with a wide range of research topics in radiology with AI and inclusive networking in the health industry.' },
];

export const ECATALOG_POINTS: string[] = [
  'Complete module specifications',
  'System architecture diagrams',
  'Integration & deployment scenarios',
  'Compliance standards checklist',
  'Package & licensing information',
];

export interface FooterLinkGroup {
  title: string;
  items: string[];
}

export const FOOTER_LINKS: FooterLinkGroup[] = [
  { title: 'Products', items: ['AIRIS OPTIMA', 'AIRIS PRIMA', 'AIRIS AURORA', 'AIRIS KONEKTIVA'] },
  { title: 'Company', items: ['About Us', 'Careers', 'Partners', 'News'] },
  { title: 'Resources', items: ['E-Catalog', 'Documentation', 'Case Studies', 'Contact Us'] },
];

// ---- Events page ----
export type EventTint = 'brand' | 'navy' | 'accent';

export interface AirisEvent {
  title: string;
  dateBadge: string;
  dateISO?: string;
  date?: string;
  categories: string[];
  icon: IconName;
  tint: EventTint;
  image?: string;
  location: string;
  role?: string;
  topic?: string;
  capacity?: string;
}

export const UPCOMING_EVENTS: AirisEvent[] = [
  {
    title: 'PARI Pengda',
    dateBadge: '26–28 June 2026', dateISO: '2026-06-26',
    categories: ['Exhibition', 'Workshop'], icon: 'sparkles', tint: 'brand',
    image: 'assets/events/pari-pengda.jpg',
    location: 'The Tavia Heritage Hotel, Jl. Letjen Suprapto No.1, Cempaka Putih, Jakarta Pusat 10520',
    role: 'Exhibition & Workshop',
    topic: 'Optimalisasi Pemeriksaan CXR untuk Workflow Kardiologi dengan Bantuan Asistensi AI',
  },
  {
    title: 'Indonesian Hospital Transformation Summit (IHTS) 2026',
    dateBadge: '12–13 August 2026', dateISO: '2026-08-12',
    categories: ['Exhibition'], icon: 'building', tint: 'navy',
    image: 'assets/events/ihts.jpg',
    location: 'Harris Convention & Hotel Serpong, Jl. Gading Serpong Boulevard No.237b, Pakulonan Barat, Kelapa Dua, Tangerang, Banten 15810',
    role: 'Exhibition',
  },
];

export const PAST_EVENTS: AirisEvent[] = [
  {
    title: 'Webinar: Digitalisasi Layanan Radiologi di Era SatuSehat',
    dateBadge: '12 March 2026', date: '12 March 2026',
    categories: ['Webinar'], icon: 'activity', tint: 'navy',
    location: 'Online', capacity: '620 attendees',
  },
  {
    title: 'Workshop: Implementasi PACS Tanpa Vendor Lock-in',
    dateBadge: '5 February 2026', date: '5 February 2026',
    categories: ['Workshop'], icon: 'workflow', tint: 'brand',
    location: 'Surabaya', capacity: '85 participants',
  },
  {
    title: 'AIRIS Talks: Masa Depan AI untuk Diagnostik Pencitraan',
    dateBadge: '20 January 2026', date: '20 January 2026',
    categories: ['Talkshow'], icon: 'globe', tint: 'accent',
    location: 'Bandung', capacity: '240 attendees',
  },
];

export interface EventPerk {
  icon: IconName;
  label: string;
}

export const EVENT_PERKS: EventPerk[] = [
  { icon: 'award', label: 'Official Certificate' },
  { icon: 'bookOpen', label: 'Exclusive Materials' },
  { icon: 'shareNetwork', label: 'Networking' },
];
