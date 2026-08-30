export const siteConfig = {
  name: 'NUMERO MINDS ENTERPRISES LLP',
  shortName: 'Numero Minds',
  tagline: 'Digital Growth Made Simple.',
  description: 'Numero Minds helps growing businesses build, market, automate, and grow with affordable professional digital solutions.',
  phoneDisplay: '+91 75097 75959',
  phone: '7509775959',
  whatsapp: '9197509775959',
  address: '2 22 158/4, PLOT NO 17 P ARUNA CO OPERATIVE SOCIETY, RANGA REDDY, HYDERABAD, Telangana, India – 500072',
  mapsEmbedUrl: '',
  socialLinks: { instagram: '', facebook: '', linkedin: '', youtube: '' },
} as const;

export const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello Numero Minds Enterprises, I would like to discuss digital growth solutions for my business.')}`;
export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  { id: 'web', number: '01', title: 'Website Development', short: 'Digital headquarters that earn trust before the first call.', body: 'We design and build fast, responsive websites that make your value obvious, your story credible, and the next step easy to take.', outcomes: ['Sharper positioning', 'Mobile-first UX', 'Conversion-ready architecture'], icon: 'code' },
  { id: 'social', number: '02', title: 'Social Media', short: 'A consistent point of view for the people already paying attention.', body: 'We turn scattered posting into a clear content system: useful ideas, a distinct voice, and a rhythm your team can actually sustain.', outcomes: ['Content direction', 'Editorial calendars', 'Community-ready creative'], icon: 'share' },
  { id: 'performance', number: '03', title: 'Performance Marketing', short: 'Paid growth with a reason behind every rupee.', body: 'We connect audience, message, landing page, and measurement so paid campaigns become a learning loop — not a monthly mystery.', outcomes: ['Campaign strategy', 'Creative testing', 'Measurement setup'], icon: 'chart' },
  { id: 'ecommerce', number: '04', title: 'E-Commerce', short: 'Online stores built around buying confidence.', body: 'From catalogue logic to checkout flow, we create commerce experiences that feel easy to browse, simple to manage, and ready to improve.', outcomes: ['Storefront UX', 'Catalogue structure', 'Lifecycle thinking'], icon: 'bag' },
  { id: 'erp', number: '05', title: 'ERP / CRM', short: 'Less operational guesswork. More useful visibility.', body: 'We help growing teams bring leads, customers, and internal workflows into systems that support the way the business already works.', outcomes: ['Process mapping', 'System selection', 'Practical adoption'], icon: 'layers' },
];

export const faqs = [
  { q: 'Do you work with businesses outside Hyderabad?', a: 'Yes. Hyderabad is home base, but our process is designed for remote collaboration across India and beyond. The work stays close through clear briefs, regular working sessions, and shared systems.' },
  { q: 'How do we know what to start with?', a: 'We start with a focused conversation about your current bottleneck, not a pre-selected package. Sometimes the right first move is a website; sometimes it is fixing the path between enquiry and follow-up.' },
  { q: 'Do you work with small teams?', a: 'That is where we do our best work. We build practical systems around the people and capacity you have, without adding layers of agency theatre.' },
  { q: 'Can you work with our existing tools?', a: 'Usually. We prefer to understand what is already working before recommending change. When a new tool is useful, we keep the setup proportionate and document the handover.' },
];

export type PortfolioCategory = 'All' | 'Website' | 'Campaign' | 'Systems';
export const portfolioProjects = [
  { id: 'atlas', label: 'DEMO / SAMPLE', title: 'Atlas Workshop', category: 'Website' as PortfolioCategory, description: 'A clearer digital front door for a specialist fabrication studio.', accent: 'cyan', tags: ['Positioning', 'Web design'] },
  { id: 'fieldnote', label: 'DEMO / SAMPLE', title: 'Fieldnote Foods', category: 'Campaign' as PortfolioCategory, description: 'A launch system for a considered, regional food brand.', accent: 'violet', tags: ['Content system', 'Paid social'] },
  { id: 'orbit', label: 'DEMO / SAMPLE', title: 'Orbit Commerce', category: 'Systems' as PortfolioCategory, description: 'A lean lead-to-order view for a growing distribution team.', accent: 'blue', tags: ['CRM thinking', 'Workflow'] },
  { id: 'kora', label: 'DEMO / SAMPLE', title: 'Kora Living', category: 'Website' as PortfolioCategory, description: 'A catalogue experience built to make considered purchases easier.', accent: 'amber', tags: ['E-commerce', 'UX direction'] },
  { id: 'northstar', label: 'DEMO / SAMPLE', title: 'Northstar Learning', category: 'Campaign' as PortfolioCategory, description: 'A practical acquisition loop for a skills-led education offer.', accent: 'cyan', tags: ['Landing pages', 'Measurement'] },
  { id: 'serein', label: 'DEMO / SAMPLE', title: 'Serein Clinics', category: 'Systems' as PortfolioCategory, description: 'A more human enquiry flow for a multi-location practice.', accent: 'violet', tags: ['CRM', 'Process mapping'] },
];