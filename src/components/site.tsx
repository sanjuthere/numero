import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { faqs, navItems, siteConfig, whatsappHref } from '@/lib/site-config';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" data-testid="link-logo">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary text-sm font-extrabold text-primary-foreground shadow-sm shadow-primary/20">
        <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-cyan-300/60 blur-[1px]" />
        <span className="relative font-display tracking-[-.12em]">NM</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[13px] font-extrabold tracking-[-.03em] text-foreground">NUMERO MINDS</span>
        <span className="mt-1 block font-mono text-[8px] font-medium tracking-[.2em] text-muted-foreground">ENTERPRISES LLP</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [location]);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'border-b border-border/80 bg-background/90 shadow-sm shadow-slate-200/40 backdrop-blur-xl' : 'bg-background/70 backdrop-blur-md'}`} data-testid="header-main">
      <div className="container-wide flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`relative py-2 text-[13px] font-semibold transition-colors hover:text-primary ${location === item.href ? 'text-foreground' : 'text-muted-foreground'}`} data-testid={`link-nav-${item.label.toLowerCase()}`}>
              {item.label}
              {location === item.href && <span className="absolute -bottom-1 left-0 h-0.5 w-5 rounded-full bg-primary" />}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/contact" className="group flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[13px] font-bold text-primary-foreground shadow-sm shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-secondary" data-testid="link-header-cta">
             Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} data-testid="button-mobile-menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 py-5 md:hidden" data-testid="menu-mobile">
          <nav className="container-wide flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`border-b border-border/70 py-4 font-display text-xl ${location === item.href ? 'text-primary' : 'text-foreground'}`} data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</Link>
            ))}
            <Link href="/contact" className="mt-4 flex items-center justify-between rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground" data-testid="link-mobile-cta">Get Started <ArrowRight className="h-4 w-4" /></Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-slate-700 bg-[hsl(222_47%_15%)] pt-16 text-slate-100" data-testid="footer-main">
      <div className="container-wide grid gap-12 pb-14 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <Logo />
          <p className="mt-7 max-w-sm text-sm leading-7 text-slate-300">Affordable professional digital solutions for growing businesses.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white" data-testid="link-footer-contact">Talk to Numero Minds <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div>
          <p className="mb-5 font-mono text-[10px] font-bold tracking-[.18em] text-cyan-300">EXPLORE</p>
          <div className="flex flex-col items-start gap-3 text-sm text-slate-300">
            {navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-white" data-testid={`link-footer-${item.label.toLowerCase()}`}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="mb-5 font-mono text-[10px] font-bold tracking-[.18em] text-cyan-300">REACH US</p>
          <a className="block text-sm text-white transition-colors hover:text-cyan-300" href={`tel:${siteConfig.phone}`} data-testid="link-footer-phone">{siteConfig.phoneDisplay}</a>
          <p className="mt-5 max-w-xs text-xs leading-5 text-slate-400">{siteConfig.address}</p>
        </div>
      </div>
      <div className="container-wide flex flex-col gap-3 border-t border-border/70 py-5 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {siteConfig.name}. Digital growth made simple.</span>
        <span className="font-mono tracking-[.13em] text-cyan-300/80">HYDERABAD / INDIA</span>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-accent/20 bg-card px-4 py-3 text-accent shadow-lg shadow-slate-300/30 transition hover:-translate-y-1 hover:border-accent/50" aria-label="Chat with Numero Minds on WhatsApp" data-testid="link-whatsapp-float"><MessageCircle className="h-5 w-5" /><span className="hidden text-xs font-bold sm:inline">Chat on WhatsApp</span></a>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="site-shell min-h-[100dvh] bg-background"><Header /><main>{children}</main><Footer /><WhatsAppFloat /></div>;
}

export function SectionHeading({ eyebrow, title, copy, align = 'left' }: { eyebrow: string; title: string; copy?: string; align?: 'left' | 'center' }) {
  return <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}><p className="eyebrow mb-5">{eyebrow}</p><h2 className="display text-balance text-4xl font-extrabold leading-[.98] text-foreground sm:text-5xl">{title}</h2>{copy && <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{copy}</p>}</div>;
}

export function ArrowLink({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'quiet' }) {
  return <Link href={href} className={`group inline-flex items-center gap-2 rounded-lg text-sm font-bold transition ${variant === 'primary' ? 'bg-primary px-5 py-3 text-primary-foreground shadow-sm shadow-primary/20 hover:-translate-y-0.5 hover:bg-secondary' : 'text-primary hover:text-secondary'}`} data-testid={`link-arrow-${String(children).toLowerCase().replaceAll(' ', '-')}`}>{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>;
}

export function ServiceIcon({ type }: { type: string }) {
  const paths: Record<string, string> = { code: '01', share: '02', chart: '03', bag: '04', layers: '05' };
  return <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-mono text-xs font-bold text-primary">{paths[type] ?? '00'}</span>;
}

export function FaqAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="divide-y divide-border border-y border-border" data-testid="faq-list">{faqs.map((faq, index) => <div key={faq.q}><button type="button" onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left" aria-expanded={active === index} data-testid={`button-faq-${index}`}><span className="font-display text-lg text-foreground">{faq.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${active === index ? 'rotate-180' : ''}`} /></button>{active === index && <div className="max-w-2xl pb-5 pr-10 text-sm leading-7 text-muted-foreground" data-testid={`text-faq-answer-${index}`}>{faq.a}</div>}</div>)}</div>;
}

export function Seo({ title, description, path, faq = false }: { title: string; description: string; path: string; faq?: boolean }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(property ? 'property' : 'name', name); document.head.appendChild(tag); }
      tag.content = content;
    };
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('og:title', title, true); setMeta('og:description', description, true); setMeta('og:type', 'website', true); setMeta('og:url', `${window.location.origin}${path}`, true);
    setMeta('twitter:card', 'summary', false); setMeta('twitter:title', title, false); setMeta('twitter:description', description, false);
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${window.location.origin}${path}`;
    const schema = faq ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) } : { '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', name: siteConfig.name, url: window.location.origin, telephone: siteConfig.phoneDisplay, address: { '@type': 'PostalAddress', streetAddress: siteConfig.address, addressLocality: 'Hyderabad', addressCountry: 'IN' } }, { '@type': 'WebSite', name: siteConfig.shortName, url: window.location.origin }] };
    let script = document.getElementById('site-schema') as HTMLScriptElement | null;
    if (!script) { script = document.createElement('script'); script.id = 'site-schema'; script.type = 'application/ld+json'; document.head.appendChild(script); }
    script.textContent = JSON.stringify(schema);
  }, [title, description, path, faq]);
  return null;
}

export function Callout({ title = 'Your next useful move starts here.', copy = 'Tell us where growth feels stuck. We will help you see the path forward.' }: { title?: string; copy?: string }) {
  return <section className="container-wide py-20"><div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,hsl(224_76%_48%),hsl(245_58%_56%))] px-6 py-10 text-white shadow-xl shadow-blue-900/15 sm:px-12 sm:py-14"><div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" /><div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="max-w-2xl"><p className="mb-5 font-mono text-[10px] font-bold tracking-[.18em] text-cyan-200">ONE CLEAR CONVERSATION</p><h2 className="display text-4xl font-extrabold leading-none sm:text-5xl">{title}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-blue-100">{copy}</p></div><ArrowLink href="/contact">Start a conversation</ArrowLink></div></div></section>;
}