import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  Plus,
  Minus,
  ChevronRight,
  Check,
  Menu,
  X,
  Layout,
  Code2,
  Gauge,
  Rocket,
  Lightbulb,
  Users,
  Cpu,
  Wrench,
} from "lucide-react";
import "./styles.css";
import accountImg from "./assets/image.png";
import ctaBg from "./assets/cta-bg.jpg";

const img = (id: string, w = 1200, q = 82) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

type ServiceSlug = "web-development" | "ui-ux-design" | "website-redesign" | "custom-solutions";

interface Service {
  slug: ServiceSlug;
  title: string;
  description: string;
  image: string;
  hero: string;
  detailIntro: string;
  helpHeading: string;
  help: string[];
  approach: string;
  tech: string[];
  techHeading: string;
  ctaTitle: string;
  ctaText: string;
}

const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "We design and develop responsive, modern websites that are fast, accessible, and built around your business goals.",
    image: img("photo-1461749280684-dccba630e2f6"),
    hero: "Modern websites built for performance, usability, and growth.",
    detailIntro: "We design and develop responsive websites that combine clear structure, thoughtful design, and reliable frontend development. Every website is built to work smoothly across devices and provide visitors with a fast, intuitive experience.",
    helpHeading: "WHAT WE CAN HELP WITH",
    help: [
      "Business websites",
      "Marketing websites",
      "Landing pages",
      "Responsive frontend development",
      "Interactive web experiences",
      "E-commerce websites",
      "Website performance improvements",
      "Ongoing website development",
    ],
    approach: "Every project starts with understanding what the website needs to achieve. From there, we plan the structure, create the experience, develop the interface, test across devices, and refine the final product before launch.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"],
    techHeading: "BUILT WITH MODERN TECHNOLOGIES",
    ctaTitle: "Have a website project in mind?",
    ctaText: "Tell us what you're building and let's discuss the right approach for your project.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "We create clear, intuitive interfaces and user experiences that make digital products easier and more enjoyable to use.",
    image: img("photo-1556761175-b413da4baf72"),
    hero: "Clear, intuitive digital experiences designed around real users.",
    detailIntro: "We design interfaces that make websites and digital products easier to understand and use. Our approach focuses on clear information hierarchy, intuitive interactions, responsive layouts, and consistent visual systems.",
    helpHeading: "WHAT WE CAN HELP WITH",
    help: [
      "Website UI design",
      "Landing page design",
      "Product interface design",
      "Responsive design",
      "User flows",
      "Wireframes",
      "Design systems",
      "Interface improvements",
    ],
    approach: "We start by understanding the users, business goals, and information that needs to be communicated. We then establish the structure and user flow before refining the visual interface and responsive experience.",
    tech: [],
    techHeading: "",
    ctaTitle: "Need a clearer digital experience?",
    ctaText: "Tell us about your product or website and let's explore how the experience can be improved.",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    description: "We improve outdated websites with better structure, stronger visual design, clearer messaging, and a more modern user experience.",
    image: img("photo-1460925895917-afdab827c52f"),
    hero: "Turn an outdated website into a clearer, faster, more modern experience.",
    detailIntro: "A redesign is more than changing colors and typography. We review the existing website, identify usability and communication problems, improve the structure, modernize the visual experience, and rebuild where necessary.",
    helpHeading: "WHAT WE CAN IMPROVE",
    help: [
      "Visual design",
      "Content hierarchy",
      "Navigation",
      "Mobile responsiveness",
      "Page structure",
      "User experience",
      "Performance",
      "Accessibility",
      "Conversion paths",
    ],
    approach: "We first evaluate what is working and what is creating friction. Instead of replacing everything without reason, we preserve useful elements and improve the areas that are limiting the website.",
    tech: [],
    techHeading: "",
    ctaTitle: "Is your current website holding your business back?",
    ctaText: "Show us your existing website and let's discuss what should be improved.",
  },
  {
    slug: "custom-solutions",
    title: "Custom Solutions",
    description: "We build tailored digital experiences for businesses with specific requirements that standard solutions cannot fully address.",
    image: img("photo-1504384308090-c894fdcc538d"),
    hero: "Digital solutions designed around requirements that do not fit a template.",
    detailIntro: "Some projects need more than a standard website. We design and develop tailored digital experiences for businesses with specific workflows, functionality, integrations, or product requirements.",
    helpHeading: "WHAT WE CAN HELP WITH",
    help: [
      "Custom web applications",
      "Interactive interfaces",
      "Business dashboards",
      "Internal tools",
      "API integrations",
      "Custom frontend systems",
      "Data-driven interfaces",
      "Specialized web functionality",
    ],
    approach: "We define the problem first, then determine the simplest reliable solution. The project is broken into clear requirements, interface decisions, development stages, testing, and refinement.",
    tech: [],
    techHeading: "",
    ctaTitle: "Have something specific in mind?",
    ctaText: "Tell us what the product needs to do and we'll help define the right way to build it.",
  },
];

const faqs = [
  ["What services does Kodalic provide?", "Kodalic provides web development, UI/UX design, website redesign, custom digital solutions, performance optimization, e-commerce development, and ongoing website support."],
  ["Who do you work with?", "We work with businesses that need a modern website or digital experience, from new businesses building their online presence to established businesses looking to improve an existing website."],
  ["How does a project start?", "Every project starts with a conversation about your goals, requirements, audience, and priorities. From there, we define the scope, direction, and next steps."],
  ["How much does a website project cost?", "Project pricing depends on the scope, complexity, features, and requirements. After understanding your project, we can provide a more accurate estimate."],
  ["How long does a typical project take?", "Timelines depend on the size and complexity of the project, the required features, and feedback cycles. We establish a clear timeline before development begins."],
  ["Can you redesign my existing website?", "Yes. We can redesign an existing website to improve its visual design, structure, usability, responsiveness, and performance while keeping the parts that already work."],
  ["Do you provide ongoing website support?", "Yes. Ongoing support can include updates, fixes, performance improvements, content changes, and continued development after launch."],
  ["What technologies do you use?", "We use modern web technologies based on the requirements of each project, with a focus on reliable, responsive, maintainable, and scalable implementations."],
  ["Can you help improve website performance?", "Yes. We can identify performance issues and improve areas such as loading speed, responsiveness, asset delivery, and overall user experience."],
  ["Do you work with clients remotely?", "Yes. Projects can be planned, designed, developed, and communicated remotely using digital collaboration tools."],
  ["What happens after I submit a project enquiry?", "We review the information you provide and use it to understand your goals and requirements. We can then discuss the project, clarify the scope, and determine the next steps."],
  ["How do I start a project with Kodalic?", "Use the Start a Project button and tell us what you are looking to build. We will use the information to understand your project and discuss the next step."],
];

const capabilities = [
  { title: "FRONTEND", icon: Code2, items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "BACKEND & DATA", icon: Cpu, items: ["Node.js", "Express", "Firebase", "MongoDB"] },
  { title: "TOOLS & PRODUCT", icon: Wrench, items: ["Git", "GitHub", "Figma"] },
];

type View = { name: "home" } | { name: "service"; slug: ServiceSlug };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <div className={`reveal ${className}`}>{children}</div>;
}

function ServiceDetail({
  service,
  onHome,
  onStart,
}: {
  service: Service;
  onHome: () => void;
  onStart: () => void;
}) {
  return (
    <div className="service-detail">
      <div className="section detail-hero">
        <button className="text-btn detail-back" onClick={onHome}><ArrowLeft size={16} /> Back to Home</button>
        <Reveal><div className="eyebrow">WHAT WE DO</div></Reveal>
        <Reveal><h1>{service.title}</h1></Reveal>
        <Reveal><p className="detail-hero-copy">{service.hero}</p></Reveal>
        <Reveal><p className="detail-intro">{service.detailIntro}</p></Reveal>
      </div>

      <div className="section detail-block">
        <Reveal><h2>{service.helpHeading}</h2></Reveal>
        <ul className="help-list">
          {service.help.map((item) => <li key={item}><Check size={16} />{item}</li>)}
        </ul>
      </div>

      <div className="section detail-block">
        <Reveal><h2>OUR APPROACH</h2></Reveal>
        <Reveal><p className="detail-approach">{service.approach}</p></Reveal>
      </div>

      {service.tech.length > 0 && (
        <div className="section detail-block">
          <Reveal><h2>{service.techHeading}</h2></Reveal>
          <div className="tech-list">
            {service.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      )}

      <div className="section detail-block">
        <Reveal><div className="detail-cta">
          <h2>{service.ctaTitle}</h2>
          <p>{service.ctaText}</p>
          <button className="primary-btn" onClick={onStart}>Start a Project <ArrowRight size={18} /></button>
        </div></Reveal>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [view, setView] = useState<View>({ name: "home" });
  const prevView = useRef<View | null>(null);
  const returnTarget = useRef<string | null>(null);

  useEffect(() => {
    prevView.current = view;
  });

  useEffect(() => {
    const onScroll = () => setScrollProgress(Math.min(window.scrollY / 300, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const parseHash = () => {
      const m = (window.location.hash || "").match(/^#\/service\/([\w-]+)/);
      const isService = !!(m && services.some((s) => s.slug === m[1]));
      if (prevView.current?.name === "service" && !isService) {
        returnTarget.current = "services";
      }
      if (isService && m) {
        setView({ name: "service", slug: m[1] as ServiceSlug });
      } else {
        setView({ name: "home" });
      }
    };
    parseHash();
    window.addEventListener("popstate", parseHash);
    return () => window.removeEventListener("popstate", parseHash);
  }, []);

  useEffect(() => {
    if (view.name === "home" && returnTarget.current) {
      const target = returnTarget.current;
      returnTarget.current = null;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(target)));
    }
  }, [view]);

  useEffect(() => {
    if (view.name === "service") {
      const s = services.find((x) => x.slug === view.slug);
      document.title = `${s ? s.title : "Service"} | Kodalic`;
    } else {
      document.title = "Kodalic | Web Design & Development Agency";
    }
  }, [view]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "contact") {
      const nav = document.querySelector<HTMLElement>(".nav");
      const navHeight = nav ? nav.offsetHeight : 80;
      let top = 0;
      let node = el as HTMLElement | null;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      window.scrollTo({ top: top - navHeight - 55, behavior: "smooth" });
      return;
    }
    el.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = (v: View) => {
    setMenuOpen(false);
    setView(v);
    const hash = v.name === "home" ? "#/" : `#/service/${v.slug}`;
    window.history.pushState(null, "", hash);
    window.scrollTo(0, 0);
  };

  const goSection = (id: string) => {
    if (view.name !== "home") {
      navigate({ name: "home" });
      requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(id)));
      return;
    }
    scrollTo(id);
  };

  const reloadHome = () => {
    setMenuOpen(false);
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.location.reload();
  };

  return (
    <div className="site">
      <header
        className="nav"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${0.05 + scrollProgress * 0.95})`,
          borderColor: `rgba(44, 48, 66, ${scrollProgress * 0.06})`,
          boxShadow: `0 ${scrollProgress * 1}px ${scrollProgress * 3}px rgba(0, 0, 0, ${scrollProgress * 0.04})`,
        }}
      >
        <div className="nav-inner">
          <button className="brand" onClick={reloadHome} aria-label="Kodalic home">
            <span className="brand-star">✳</span>Kodalic
          </button>

          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
            <button onClick={() => goSection("services")}>Services</button>
            <button onClick={() => goSection("about")}>About</button>
            <button onClick={() => goSection("why")}>Why Kodalic</button>
            <button onClick={() => goSection("process")}>Process</button>
            <button onClick={() => goSection("work")}>Our Work</button>
          </nav>

          <div className="nav-actions">
            <button className="login" onClick={() => goSection("contact")}>LOG IN</button>
            <button className="signup" onClick={() => goSection("contact")}>START A PROJECT</button>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">
        {view.name === "home" ? (
          <>
        <section className="hero">
          <div className="hero-copy">
            <div className="trust"><span>★</span> Digital experiences for <b>growing businesses</b></div>
            <h1>Digital experiences built for businesses that<br /><span>want to move forward.</span></h1>
            <p>Kodalic designs and develops modern websites and digital experiences that help businesses build credibility, connect with customers, and grow online.</p>
            <button className="primary-btn" onClick={() => goSection("contact")}>Start a Project <ArrowRight size={18} /></button>
          </div>
          <div className="hero-art">
            <div className="hero-image-wrap">
              <img src={img("photo-1553877522-43269d4ea984", 1000)} alt="Modern development workspace" />
              <div className="phone">
                <div className="phone-top"><span>9:41</span><span>● ● ●</span></div>
                <div className="phone-title">Your digital project</div>
                <div className="phone-card">
                  <img src={img("photo-1461749280684-dccba630e2f6", 500)} alt="" />
                  <div><b>Web Development</b><span>From idea to launch</span></div>
                </div>
                <div className="phone-card">
                  <img src={img("photo-1556761175-b413da4baf72", 500)} alt="" />
                  <div><b>UI & Experience</b><span>Clear and intuitive</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured">
          <p>A trusted digital partner</p>
          <div className="logo-marquee">
            {["WEB DEVELOPMENT", "UI/UX DESIGN", "WEBSITE REDESIGN", "CUSTOM SOLUTIONS", "PERFORMANCE OPTIMIZATION", "ONGOING SUPPORT", "E-COMMERCE"].map((x) => <span key={x}>{x}</span>)}
          </div>
        </section>

        <section className="steps section" id="about">
          <Reveal><div className="eyebrow">START A PROJECT IN 3 SIMPLE STEPS</div></Reveal>
          <Reveal><h2>Thoughtful web experiences,<br /><em>made simple.</em></h2></Reveal>
          <div className="step-grid">
            {[
              ["01", "DISCOVER", "Tell us your idea", "Share your goals, requirements, audience, and what you want to build. We will define the right direction together.", Lightbulb],
              ["02", "BUILD", "We design & develop", "We turn the agreed direction into a responsive, polished, and functional digital experience.", Code2],
              ["03", "GROW", "Launch & improve", "Launch with confidence, then continue improving your digital experience as your business grows.", Rocket],
            ].map(([num, label, title, text, Icn]) => {
              const C = Icn as React.ElementType;
              return <Reveal className="step-card" key={String(num)}>
                <div className="step-number">{String(num)}</div>
                <div className="step-icon"><C size={24} /></div>
                <span>{String(label)}</span>
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </Reveal>
            })}
          </div>
        </section>

        <section className="account-banner reveal" id="contact">
          <div className="account-copy">
            <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
            <h2>Let's discuss what<br />you're building.</h2>
            <div className="checks">
              <span><Check /> No Commitment, Just a Conversation</span>
              <span><Check /> Clear Next Steps and Timeline</span>
            </div>
            <div className="account-cta">
              <button className="primary-btn" onClick={() => goSection("contact")}>Start a Project <ArrowRight size={18} /></button>
            </div>
          </div>
          <div className="account-visual">
            <img className="account-image" src={accountImg} alt="Web developer coding a modern website on a laptop" />
          </div>
        </section>
        <noscript><style>{`.account-banner.reveal, .account-banner .eyebrow, .account-banner h2,
          .account-banner .checks span, .account-banner .account-cta, .account-image {
            opacity: 1 !important; transform: none !important; transition: none !important;
          }`}</style></noscript>

        <section className="why section" id="why">
          <Reveal><div className="eyebrow">WHY KODALIC</div></Reveal>
          <div className="why-grid">
            <Reveal className="why-image">
              <img src={img("photo-1522542550221-31fd19575a2d", 1400)} alt="Collaborative project work" />
              <div className="image-badge">Business-first<br /><small>digital thinking</small></div>
            </Reveal>
            <Reveal className="why-copy">
              <h2>Built around what your business<br />actually <em>needs.</em></h2>
              <p>We combine thoughtful design, practical development, and performance-focused thinking to create digital experiences that are useful for your customers and your business.</p>
              <div className="metric-row">
                <div><b>Business</b><span>Focused approach</span></div>
                <div><b>Quality</b><span>Attention to detail</span></div>
                <div><b>Reliable</b><span>Dependable delivery</span></div>
              </div>
              <button className="text-btn" onClick={() => goSection("work")}>Explore our work <ArrowRight size={17} /></button>
            </Reveal>
          </div>
        </section>

        <section className="how section" id="process">
          <Reveal><div className="eyebrow">HOW WE WORK?</div></Reveal>
          <Reveal><h2>A clear, dependable<br /><em>process.</em></h2></Reveal>
          <div className="how-grid">
            {[
              ["01", "Discover", "Understand your business, audience, goals, and requirements.", Users],
              ["02", "Define", "Agree on direction, scope, priorities, and expected outcomes.", Lightbulb],
              ["03", "Design", "Create the visual and experience direction around your goals.", Layout],
              ["04", "Build", "Turn the approved direction into a functional digital experience.", Code2],
              ["05", "Refine", "Test, review, optimize, and improve the product.", Gauge],
              ["06", "Launch & Grow", "Deliver the final product and support it as you evolve.", Rocket],
            ].map(([n, t, d, Icn]) => {
              const C = Icn as React.ElementType;
              return <Reveal className="how-card" key={String(n)}>
                <div className="how-icon"><C size={23} /></div>
                <span>{String(n)}</span><h3>{String(t)}</h3><p>{String(d)}</p>
              </Reveal>
            })}
          </div>
        </section>

        <section className="compare section">
          <Reveal><div className="eyebrow">WHY A PROFESSIONAL PARTNER?</div></Reveal>
          <Reveal><h2>Think beyond the<br /><em>generic template.</em></h2></Reveal>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Approach</th><th>Custom Design</th><th>Business Focus</th><th>Performance</th><th>Reliability</th><th>Long-term Support</th><th>Attention to Detail</th></tr></thead>
              <tbody>
                {[
                  ["Template / DIY","✕","✕","Medium","Low","✕","Low"],
                  ["Freelancer","Varies","Varies","Varies","Varies","✕","Varies"],
                  ["Generic Agency","Medium","Medium","Medium","Medium","Limited","Varies"],
                  ["Kodalic","Yes","Yes","High","High","Yes","High"],
                ].map((row) => <tr className={row[0] === "Kodalic" ? "highlight" : ""} key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
          <p className="fine-print">* Qualitative demonstration figures based on the source site's presentation. Actual results vary by project.</p>
        </section>

        <section className="trust section">
          <Reveal><div className="eyebrow">BUILT TO EARN TRUST. DELIVERED TO PROTECT IT.</div></Reveal>
          <div className="trust-grid">
            <Reveal className="trust-copy">
              <h2>Quality-first &<br /><em>dependable.</em></h2>
              <p>Kodalic is built around doing the work properly, communicating clearly, and delivering reliable results. Every project receives attention across design, usability, responsiveness, and functionality.</p>
              <div className="trust-pills"><span>Quality first</span><span>Clear communication</span><span>Modern technology</span></div>
            </Reveal>
            <Reveal className="trust-art">
              <div className="seal"><Cpu size={58} /><b>KODALIC</b><span>DIGITAL PARTNER</span></div>
              <div className="seal small"><b>Quality</b><span>CRAFTSMANSHIP</span></div>
            </Reveal>
          </div>
          <div className="ownership">
            <Reveal><h2>Built on partnership.<br />Delivered with care.<br /><em>Made to last.</em></h2></Reveal>
            <div className="ownership-list">
              {["Business-focused thinking","Adding genuine value, not just features","Clear, honest communication","A long-term, dependable partnership"].map((x) => <Reveal className="ownership-item" key={x}><Check /><span>{x}</span></Reveal>)}
            </div>
          </div>
        </section>

        <section className="properties section" id="services">
          <Reveal><div className="eyebrow">WHAT WE DO</div></Reveal>
          <Reveal><h2>Digital solutions built around<br /><em>your business.</em></h2></Reveal>
          <div className="property-slider">
            <button className="slider-arrow left" onClick={() => setServiceIndex(Math.max(0, serviceIndex - 1))} disabled={serviceIndex === 0}><ChevronLeft /></button>
            <div className="property-track" style={{ transform: `translateX(-${serviceIndex * 25}%)` }}>
              {services.map((p) => <article className="property-card" key={p.title}>
                <div className="property-image"><img src={p.image} alt={p.title} /><span>KODALIC</span></div>
                <div className="property-body"><div><h3>{p.title}</h3><p>{p.description}</p></div><button onClick={() => navigate({ name: "service", slug: p.slug })}>Learn more <ArrowRight size={15} /></button></div>
              </article>)}
            </div>
            <button className="slider-arrow right" onClick={() => setServiceIndex(Math.min(services.length - 1, serviceIndex + 1))} disabled={serviceIndex === services.length - 1}><ChevronRight /></button>
          </div>
        </section>

        <section className="testimonial section" id="work">
          <Reveal><div className="eyebrow">OUR APPROACH</div></Reveal>
          <Reveal><h2>Digital experiences designed to<br /><em>make an impact.</em></h2></Reveal>
          <Reveal><p>We combine thoughtful strategy, clear design, and practical development to create digital experiences that help businesses communicate clearly, serve their customers, and grow online.</p></Reveal>
        </section>

        <section className="capabilities section" id="capabilities">
          <Reveal><div className="eyebrow">CAPABILITIES</div></Reveal>
          <Reveal><h2>Modern tools for modern digital experiences.</h2></Reveal>
          <Reveal><p className="cap-intro">We use proven web technologies to build responsive, maintainable, and performance-focused digital experiences.</p></Reveal>
          <div className="cap-grid">
            {capabilities.map((g) => {
              const C = g.icon as React.ElementType;
              return <Reveal className="cap-group" key={g.title}>
                <div className="cap-group-head"><C size={20} /><h3>{g.title}</h3></div>
                <ul className="cap-list">
                  {g.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </Reveal>
            })}
          </div>
        </section>

        <section className="faq section" id="faq">
          <Reveal><h2>FREQUENTLY ASKED<br />QUESTIONS</h2></Reveal>
          <div className="faq-list">
            {faqs.map(([q, a], i) => <div className={`faq-item ${faq === i ? "open" : ""}`} key={q}>
              <button onClick={() => setFaq(faq === i ? -1 : i)} aria-expanded={faq === i} aria-controls={`faq-answer-${i}`}><span>{q}</span><span className="faq-toggle" aria-hidden="true">{faq === i ? <Minus /> : <Plus />}</span></button>
              <div className="faq-answer" id={`faq-answer-${i}`}><p>{a}</p></div>
            </div>)}
          </div>
        </section>

        <section className="final-cta" id="contact-cta">
          <div className="cta-bg">
            <img src={ctaBg} alt="" />
            <div className="cta-overlay" />
          </div>
          <div className="cta-content">
            <div className="eyebrow">START YOUR DIGITAL PRESENCE TODAY</div>
            <h2>Let's build something<br /><em>that works for your business.</em></h2>
            <p>Have a project in mind? Tell us what you're trying to build and let's discuss how we can help.</p>
            <button className="primary-btn" onClick={() => goSection("contact")}>Start a Project <ArrowRight size={18} /></button>
          </div>
        </section>
          </>
        ) : (
          <ServiceDetail
            service={services.find((s) => s.slug === (view as { name: "service"; slug: ServiceSlug }).slug)!}
            onHome={() => navigate({ name: "home" })}
            onStart={() => goSection("contact")}
          />
        )}
      </main>

      <footer id="footer">
        <div className="footer-top">
          <span className="brand footer-brand"><span className="brand-star">✳</span>Kodalic</span>
          <span className="footer-tagline">Digital experiences built to help businesses move forward.</span>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-main">
          <div className="footer-about"><p>Kodalic helps businesses design and build modern websites and digital experiences that are clear, useful, and built to grow.</p></div>
          <div><h4>Company</h4><button onClick={() => goSection("about")}>About Kodalic</button><button onClick={() => goSection("why")}>Why Kodalic</button><button onClick={() => goSection("work")}>Our Work</button><button onClick={() => goSection("process")}>Process</button></div>
          <div><h4>Services</h4><button onClick={() => goSection("services")}>Web Development</button><button onClick={() => goSection("services")}>UI/UX Design</button><button onClick={() => goSection("services")}>Website Redesign</button><button onClick={() => goSection("services")}>Custom Solutions</button><button onClick={() => goSection("services")}>Performance Optimization</button><button onClick={() => goSection("services")}>Ongoing Support</button><button onClick={() => goSection("services")}>E-Commerce</button></div>
          <div><h4>Learn</h4><button onClick={() => goSection("faq")}>FAQ</button><button onClick={() => goSection("contact")}>Start a Project</button></div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-legal">
          <span>© 2026 Kodalic. All rights reserved.</span>
          <button onClick={() => scrollTo("top")}>Privacy Policy</button>
          <button onClick={() => scrollTo("top")}>Terms of Service</button>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);