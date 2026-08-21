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

type BlogSlug =
  | "better-business-website"
  | "effective-business-website"
  | "ui-ux-principles"
  | "why-website-performance-matters"
  | "when-to-redesign"
  | "strong-digital-presence";

interface Post {
  slug: BlogSlug;
  title: string;
  category: "Web Development" | "UI/UX" | "Performance" | "Business" | "Digital Strategy";
  excerpt: string;
  intro: string;
  body: string[];
  related: string[];
}

const blogPosts: Post[] = [
  {
    slug: "better-business-website",
    title: "How a Better Website Can Help Your Business Grow",
    category: "Web Development",
    excerpt: "A modern business website should do more than look good. It should communicate clearly, build trust, make it easy for customers to take action, and provide a reliable experience across every device.",
    intro: "A website is often the first place a potential customer learns about your business. Making that first impression clear, trustworthy, and easy to act on can make a real difference to how your business grows.",
    body: [
      "Many business websites are built to look presentable but not to do anything useful. A visit should move a potential customer from curious to confident, from browsing to taking the next step. That requires clarity in what you say and how you present it.",
      "Clear communication starts with telling visitors who you are, what you offer, and who it is for. When a visitor understands this quickly, they are far more likely to trust your business and keep exploring.",
      "Trust also comes from a reliable experience. A site that loads quickly, works on every device, and never looks broken builds confidence in the quality of your work. Small issues in the experience can quietly erode that confidence.",
      "Finally, a website should make action easy. Whether the next step is contacting you, requesting a quote, or buying a service, a clear and simple path helps visitors move forward. A website built with these principles supports growth rather than standing in the way of it.",
    ],
    related: ["What Makes a Business Website Effective?", "Why Website Performance Matters", "Building a Strong Digital Presence for Your Business"],
  },
  {
    slug: "effective-business-website",
    title: "What Makes a Business Website Effective?",
    category: "Web Development",
    excerpt: "An effective business website is clear, focused, and built around what visitors need to understand and do. We look at the few fundamentals that matter most.",
    intro: "An effective website does not need to be complicated. When it is clear, well-structured, and aligned with your business goals, it works harder for you.",
    body: [
      "An effective business website is clear about purpose. It should be obvious who the business is for, what it offers, and what a visitor should do next. When this is easy to understand, visitors can make decisions quickly.",
      "Structure matters as much as content. A logical flow that guides visitors from overview to detail, and then to a call to action, makes a website feel deliberate and professional.",
      "Consistency in design and messaging reinforces trust. When every page feels like part of the same reliable experience, visitors are more confident in the business behind it.",
      "Lastly, an effective website is maintained. Outdated content and broken sections undermine the good work of the rest of the site. Keeping the fundamentals consistent over time keeps a website effective.",
    ],
    related: ["How a Better Website Can Help Your Business Grow", "When Should You Redesign Your Website?", "Building a Strong Digital Presence for Your Business"],
  },
  {
    slug: "ui-ux-principles",
    title: "UI/UX Principles That Make Websites Easier to Use",
    category: "UI/UX",
    excerpt: "Good user experience comes from a few fundamental principles. We explain the ideas that most directly affect how easy a website is to use.",
    intro: "Websites that feel effortless to use are rarely an accident. They follow a set of core principles that put the visitor's needs first.",
    body: [
      "Clarity is the foundation of good UX. Every screen should make it obvious what the visitor is looking at and what they can do next. When the intent is clear, the experience feels simple.",
      "Consistency helps visitors learn quickly. Familiar patterns for navigation, buttons, and layout let people move through a website without having to think about how it works.",
      "Responsive design is a basic expectation. A website should work comfortably on a phone, a tablet, and a desktop, without losing readability or function at any size.",
      "Feedback keeps people confident. When someone submits a form, changes a setting, or completes an action, a clear response confirms the result. Small details like these make a product feel reliable and considered.",
    ],
    related: ["What Makes a Business Website Effective?", "How a Better Website Can Help Your Business Grow"],
  },
  {
    slug: "why-website-performance-matters",
    title: "Why Website Performance Matters",
    category: "Performance",
    excerpt: "How fast a website loads affects how people perceive it and whether they stay. We look at why performance deserves your attention.",
    intro: "Performance is a quality of the experience, not just a technical detail. A fast website feels professional, while a slow one can put people off.",
    body: [
      "People judge a website quickly. A page that loads promptly feels sharp and reliable, while a slow load can create doubt before anyone has read a single word.",
      "Performance affects experience across devices. On mobile connections especially, a heavy or slow site feels frustrating and can discourage people from returning.",
      "Speed also supports clarity and action. When pages respond instantly, visitors stay engaged and are more likely to complete the step you want them to take.",
      "Improving performance is not only about fast hosting. It can involve cleaner code, optimised assets, and removing what does not earn its place. A faster website benefits both visitors and the business.",
    ],
    related: ["How a Better Website Can Help Your Business Grow", "What Makes a Business Website Effective?", "Building a Strong Digital Presence for Your Business"],
  },
  {
    slug: "when-to-redesign",
    title: "When Should You Redesign Your Website?",
    category: "Digital Strategy",
    excerpt: "Knowing when to redesign a website is about more than wanting something new. We look at signs that a site may no longer be serving its purpose.",
    intro: "A redesign is a meaningful decision. Recognising that a website no longer supports your goals is the first step towards improving it.",
    body: [
      "A website may need attention when it no longer reflects your business or how you serve customers. Outdated messaging and visuals can make a business feel less current than it is.",
      "Usability problems are a strong signal. If visitors have trouble finding information, the site is hard to navigate, or it is not well suited to mobile, a redesign can address the root causes.",
      "Performance and technical issues also matter. A site that is slow, difficult to update, or built on outdated foundations can hold a business back even when the design looks fine.",
      "A redesign should preserve what already works. The goal is to improve the experience and the outcomes, not to replace everything for the sake of change.",
    ],
    related: ["What Makes a Business Website Effective?", "Why Website Performance Matters", "Building a Strong Digital Presence for Your Business"],
  },
  {
    slug: "strong-digital-presence",
    title: "Building a Strong Digital Presence for Your Business",
    category: "Business",
    excerpt: "A strong digital presence is about being clear, consistent, and easy to find. We look at the foundations of presenting your business well online.",
    intro: "A digital presence is how your business appears and behaves online. Building it well helps people understand and trust what you offer.",
    body: [
      "A clear, professional website is the centre of a digital presence. It gives people a reliable place to learn about your business and how to work with you.",
      "Consistency matters across your presence. When your messaging and visual identity are consistent, your business is easier to recognise and remember.",
      "Being easy to find helps people connect with you. Clear structure, helpful content, and descriptive pages all make it easier for the right people to discover your business.",
      "A strong presence is ongoing. Keeping your website and messaging current shows that your business is active, attentive, and ready to help.",
    ],
    related: ["How a Better Website Can Help Your Business Grow", "What Makes a Business Website Effective?", "When Should You Redesign Your Website?"],
  },
];

const blogCategories = ["All", "Web Development", "UI/UX", "Performance", "Business", "Digital Strategy"] as const;

type View =
  | { name: "home" }
  | { name: "service"; slug: ServiceSlug }
  | { name: "about" }
  | { name: "blog" }
  | { name: "article"; slug: BlogSlug };

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

function AboutPage({ onStart }: { onStart: () => void }) {
  const values = [
    ["Clarity", "We believe good digital experiences should be easy to understand, easy to use, and focused on what matters."],
    ["Quality", "We care about the details, from visual design and responsive layouts to performance, accessibility, and maintainable development."],
    ["Practical Thinking", "We focus on solutions that make sense for the business instead of adding unnecessary complexity."],
    ["User Focus", "We design around the people who will actually use the product, not just how the product looks."],
    ["Continuous Improvement", "A digital product should continue to improve as the business, users, and technology evolve."],
  ];
  return (
    <div className="about-page">
      <section className="section about-hero">
        <Reveal><div className="eyebrow">ABOUT KODALIC</div></Reveal>
        <Reveal><h1>Building digital experiences<br />with <em>purpose.</em></h1></Reveal>
        <Reveal><p className="about-intro">Kodalic is a digital technology agency focused on designing and developing modern websites and digital experiences for businesses that want to build a stronger presence online.</p></Reveal>
      </section>

      <section className="section about-duo">
        <Reveal className="about-card">
          <h2>Our Mission</h2>
          <p>To make digital experiences clearer, more useful, and more effective by combining thoughtful design with practical technology.</p>
        </Reveal>
        <Reveal className="about-card">
          <h2>Our Vision</h2>
          <p>To become a trusted digital partner for businesses that want to use technology to communicate better, serve their customers, and grow online.</p>
        </Reveal>
      </section>

      <section className="section about-values">
        <Reveal><div className="eyebrow">WHAT WE VALUE</div></Reveal>
        <Reveal><h2>What We <em>Value</em></h2></Reveal>
        <div className="about-value-grid">
          {values.map(([t, d], i) => (
            <Reveal className="about-value-card" key={t}>
              <span className="about-value-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section about-why">
        <Reveal className="about-why-card">
          <div className="eyebrow">WHY KODALIC?</div>
          <h2>Design thinking, frontend development,<br /><em>practical technology.</em></h2>
          <p>Kodalic combines design thinking, frontend development, and practical technology to create digital experiences that are built around real business needs.</p>
        </Reveal>
      </section>

      <section className="section about-cta">
        <Reveal><div className="about-cta-card">
          <h2>Let's discuss what you're<br />trying to <em>build.</em></h2>
          <p>Tell us about your project and how Kodalic can help bring it to life.</p>
          <button className="primary-btn" onClick={onStart}>Start a Project <ArrowRight size={18} /></button>
        </div></Reveal>
      </section>
    </div>
  );
}

const projectTypes = [
  "Web Development", "UI/UX Design", "Website Redesign", "E-Commerce",
  "Custom Solution", "Performance Optimization", "Ongoing Support", "Other",
];
const budgets = ["Under $1,000", "$1,000–$3,000", "$3,000–$5,000", "$5,000–$10,000", "$10,000+", "Not sure yet"];
const timelines = ["ASAP", "2–4 weeks", "1–2 months", "3+ months", "Flexible"];

interface FormState {
  fullName: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({ fullName: "", company: "", email: "", projectType: "", budget: "", timeline: "", description: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormState, v: string) => {
    setForm((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = (): Partial<FormState> => {
    const e: Partial<FormState> = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!form.email.trim()) {
      e.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.projectType) e.projectType = "Please choose a project type.";
    if (!form.description.trim()) e.description = "Please tell us a little about your project.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.values(e).some(Boolean)) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  };

  const errFor = (k: keyof FormState) => errors[k];
  const desc = (k: keyof FormState) => errFor(k) ? `${k}Error` : undefined;

  return (
    <div className="contact-form">
      {submitted ? (
        <div className="enquiry-success" role="status" aria-live="polite">
          <div className="enquiry-success-icon"><Check size={26} /></div>
          <h3>Thank you, {form.fullName.trim() || "there"}.</h3>
          <p>Thank you for sharing the details about your project with Kodalic.</p>
          <button className="text-btn" onClick={() => { setSubmitted(false); }}>Submit another enquiry</button>
        </div>
      ) : (
        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="enquiry-grid">
            <div className="field">
              <label htmlFor="fullName">Full Name <span className="req">*</span></label>
              <input id="fullName" type="text" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} aria-required="true" aria-invalid={!!errFor("fullName")} aria-describedby={desc("fullName")} required />
              {errFor("fullName") && <span className="field-error" id="fullNameError"><X size={13} /> {errFor("fullName")}</span>}
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" value={form.company} onChange={(e) => set("company", e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address <span className="req">*</span></label>
              <input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} aria-required="true" aria-invalid={!!errFor("email")} aria-describedby={desc("email")} required />
              {errFor("email") && <span className="field-error" id="emailError"><X size={13} /> {errFor("email")}</span>}
            </div>
            <div className="field">
              <label htmlFor="projectType">Project Type <span className="req">*</span></label>
              <select id="projectType" value={form.projectType} onChange={(e) => set("projectType", e.target.value)} aria-required="true" aria-invalid={!!errFor("projectType")} aria-describedby={desc("projectType")} required>
                <option value="" disabled>Select a project type</option>
                {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errFor("projectType") && <span className="field-error" id="projectTypeError"><X size={13} /> {errFor("projectType")}</span>}
            </div>
            <div className="field">
              <label htmlFor="budget">Budget</label>
              <select id="budget" value={form.budget} onChange={(e) => set("budget", e.target.value)}>
                <option value="" disabled>Select a budget range</option>
                {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="timeline">Timeline</label>
              <select id="timeline" value={form.timeline} onChange={(e) => set("timeline", e.target.value)}>
                <option value="" disabled>Select a timeline</option>
                {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="description">Project Description <span className="req">*</span></label>
              <textarea id="description" rows={5} placeholder="Tell us what you are trying to build, improve, or solve." value={form.description} onChange={(e) => set("description", e.target.value)} aria-required="true" aria-invalid={!!errFor("description")} aria-describedby={desc("description")} required />
              {errFor("description") && <span className="field-error" id="descriptionError"><X size={13} /> {errFor("description")}</span>}
            </div>
          </div>
          <button type="submit" className="primary-btn enquiry-submit">Send Project Inquiry <ArrowRight size={18} /></button>
        </form>
      )}
    </div>
  );
}

function ContactModal({ closing, onClose }: { closing: boolean; onClose: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !cardRef.current) return;
    const focusables = cardRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement | null;
    if (e.shiftKey) {
      if (active === first || active === cardRef.current) { e.preventDefault(); last.focus(); }
    } else if (active === last) {
      e.preventDefault(); first.focus();
    }
  };

  return (
    <div className={`modal-backdrop ${closing ? "closing" : ""}`} onClick={onClose}>
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiryModalTitle"
        className={`modal-card ${closing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={trapTab}
      >
        <button ref={closeBtnRef} className="modal-close" aria-label="Close project enquiry" onClick={onClose}><X size={20} /></button>
        <div className="modal-head">
          <div className="eyebrow">START A PROJECT</div>
          <h2 id="enquiryModalTitle">Let's discuss what<br /><em>you're building.</em></h2>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

function BlogPage({ onOpen, onStart }: { onOpen: (slug: BlogSlug) => void; onStart: () => void }) {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const featured = blogPosts[0];
  const others = blogPosts.slice(1);

  const matches = (p: Post) => {
    const catOk = active === "All" || p.category === active;
    const q = query.trim().toLowerCase();
    const qOk = !q || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return catOk && qOk;
  };

  const filtered = others.filter(matches);
  const featuredVisible = matches(featured);

  return (
    <div className="blog-page">
      <section className="section blog-hero">
        <Reveal><div className="eyebrow">INSIGHTS</div></Reveal>
        <Reveal><h1>Ideas for building better<br /><em>digital experiences.</em></h1></Reveal>
        <Reveal><p className="blog-intro">Practical ideas about web design, development, performance, user experience, and building a stronger digital presence.</p></Reveal>
      </section>

      <section className="section blog-tools">
        <div className="blog-tools-row">
          <div className="blog-filters" role="group" aria-label="Filter articles by category">
            {blogCategories.map((c) => (
              <button
                key={c}
                className={`filter-chip ${active === c ? "active" : ""}`}
                aria-pressed={active === c}
                onClick={() => setActive(c)}
              >{c}</button>
            ))}
          </div>
          <div className="blog-search">
            <label htmlFor="articleSearch" className="visually-hidden">Search articles</label>
            <input id="articleSearch" type="search" placeholder="Search articles..." value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>
      </section>

      <section className="section blog-list">
        {featuredVisible && (
          <Reveal>
            <article className="blog-card featured">
              <span className="blog-cat">{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <button className="text-btn" onClick={() => onOpen(featured.slug)}>Read article <ArrowRight size={16} /></button>
            </article>
          </Reveal>
        )}

        {filtered.length === 0 ? (
          <Reveal><p className="blog-empty">No articles match your search or filter.</p></Reveal>
        ) : (
          <div className="blog-grid">
            {filtered.map((p) => (
              <Reveal className="blog-card" key={p.slug}>
                <span className="blog-cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <button className="text-btn" onClick={() => onOpen(p.slug)}>Read article <ArrowRight size={16} /></button>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="section blog-cta">
        <Reveal><div className="about-cta-card">
          <h2>Have a project in <em>mind?</em></h2>
          <p>Let's discuss what you are trying to build and how Kodalic can help.</p>
          <button className="primary-btn" onClick={onStart}>Start a Project <ArrowRight size={18} /></button>
        </div></Reveal>
      </section>
    </div>
  );
}

function ArticlePage({ post, onBack, onStart, onOpen }: { post: Post; onBack: () => void; onStart: () => void; onOpen: (slug: BlogSlug) => void }) {
  const related = blogPosts.filter((p) => post.related.includes(p.title));
  return (
    <div className="article-page">
      <article className="section article">
        <button className="text-btn detail-back" onClick={onBack}><ArrowLeft size={16} /> Back to Blog</button>
        <Reveal><span className="blog-cat">{post.category}</span></Reveal>
        <Reveal><h1>{post.title}</h1></Reveal>
        <Reveal><p className="detail-intro">{post.intro}</p></Reveal>
        <div className="article-body">
          {post.body.map((p) => <Reveal key={p}><p>{p}</p></Reveal>)}
        </div>
        {related.length > 0 && (
          <Reveal><div className="article-related">
            <h2>Related Topics</h2>
            <ul>
              {related.map((r) => <li key={r.slug}><button onClick={() => onOpen(r.slug)}>{r.title}</button></li>)}
            </ul>
          </div></Reveal>
        )}
        <Reveal><div className="detail-cta">
          <h2>Have a project in mind?</h2>
          <p>Let's discuss what you are trying to build and how Kodalic can help.</p>
          <button className="primary-btn" onClick={onStart}>Start a Project <ArrowRight size={18} /></button>
        </div></Reveal>
      </article>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [view, setView] = useState<View>({ name: "home" });
  const [contactOpen, setContactOpen] = useState(false);
  const [contactClosing, setContactClosing] = useState(false);
  const prevView = useRef<View | null>(null);
  const returnTarget = useRef<string | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const openEnquiry = () => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setContactClosing(false);
    setContactOpen(true);
  };

  const closeEnquiry = () => {
    if (!contactOpen || contactClosing) return;
    setContactClosing(true);
    window.setTimeout(() => {
      setContactOpen(false);
      setContactClosing(false);
      lastFocus.current?.focus?.();
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = contactOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [contactOpen]);

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
      const hash = window.location.hash || "";
      const article = hash.match(/^#\/blog\/([\w-]+)/);
      const isArticle = !!(article && blogPosts.some((p) => p.slug === article[1]));
      if (isArticle && article) {
        setView({ name: "article", slug: article[1] as BlogSlug });
        return;
      }
      const m = hash.match(/^#\/service\/([\w-]+)/);
      const isService = !!(m && services.some((s) => s.slug === m[1]));
      if (isService && m) {
        setView({ name: "service", slug: m[1] as ServiceSlug });
        return;
      }
      if (prevView.current?.name === "service" && !isService) {
        returnTarget.current = "services";
      }
      if (/^#\/about$/.test(hash)) {
        setView({ name: "about" });
      } else if (/^#\/blog$/.test(hash)) {
        setView({ name: "blog" });
      } else {
        setView({ name: "home" });
      }
    };
    parseHash();
    window.addEventListener("popstate", parseHash);
    return () => window.removeEventListener("popstate", parseHash);
  }, []);

  useEffect(() => {
    if (view.name !== "home") {
      window.scrollTo(0, 0);
    }
  }, [view]);

  useEffect(() => {
    if (view.name === "home" && returnTarget.current) {
      const target = returnTarget.current;
      returnTarget.current = null;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(target)));
    }
  }, [view]);

  useEffect(() => {
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="og:${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", `og:${prop}`);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const homeTitle = "Kodalic | Web Design & Development Agency";
    const homeDesc = "Kodalic designs and develops modern websites and digital experiences for businesses. Explore web development, UI/UX design, redesign, e-commerce, performance, and ongoing support.";

    if (view.name === "home") {
      document.title = homeTitle;
      setMeta("description", homeDesc);
      setOg("title", homeTitle);
      setOg("description", homeDesc);
      setOg("type", "website");
    } else if (view.name === "service") {
      const s = services.find((x) => x.slug === view.slug);
      document.title = `${s ? s.title : "Service"} | Kodalic`;
      setMeta("description", s ? s.description : homeDesc);
      setOg("title", document.title);
      setOg("description", s ? s.description : homeDesc);
      setOg("type", "website");
    } else if (view.name === "about") {
      document.title = "About Kodalic | Web Design & Development Agency";
      setMeta("description", "Kodalic is a digital technology agency focused on modern websites and digital experiences designed around real business needs.");
      setOg("title", document.title);
      setOg("description", "Kodalic is a digital technology agency focused on modern websites and digital experiences designed around real business needs.");
      setOg("type", "website");
    } else if (view.name === "blog") {
      document.title = "Kodalic Insights | Web Design & Development";
      setMeta("description", "Explore practical ideas from Kodalic about web development, UI/UX design, website performance, and building a stronger digital presence.");
      setOg("title", document.title);
      setOg("description", "Explore practical ideas from Kodalic about web development, UI/UX design, website performance, and building a stronger digital presence.");
      setOg("type", "website");
    } else {
      const p = blogPosts.find((x) => x.slug === view.slug);
      const t = p ? p.title : "Article";
      document.title = `${t} | Kodalic`;
      setMeta("description", p ? p.excerpt : homeDesc);
      setOg("title", document.title);
      setOg("description", p ? p.excerpt : homeDesc);
      setOg("type", "article");
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
    let hash = "#/";
    if (v.name === "service") hash = `#/service/${v.slug}`;
    else if (v.name === "about") hash = "#/about";
    else if (v.name === "blog") hash = "#/blog";
    else if (v.name === "article") hash = `#/blog/${v.slug}`;
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

  const articlePost = view.name === "article" ? blogPosts.find((x) => x.slug === view.slug) : undefined;
  const currentService = view.name === "service" ? services.find((x) => x.slug === view.slug) : undefined;

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
            <button onClick={() => navigate({ name: "about" })}>About</button>
            <button onClick={() => goSection("why")}>Why Kodalic</button>
            <button onClick={() => goSection("process")}>Process</button>
            <button onClick={() => goSection("work")}>Our Work</button>
          </nav>

          <div className="nav-actions">
            <button className="login" onClick={() => goSection("contact")}>LOG IN</button>
            <button className="signup" onClick={openEnquiry}>START A PROJECT</button>
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
            <button className="primary-btn" onClick={openEnquiry}>Start a Project <ArrowRight size={18} /></button>
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

        <section className="contact-region" id="contact">
          <div className="account-banner reveal">
          <div className="account-copy">
            <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
            <h2>Let's discuss what<br />you're building.</h2>
            <div className="checks">
              <span><Check /> No Commitment, Just a Conversation</span>
              <span><Check /> Clear Next Steps and Timeline</span>
            </div>
            <div className="account-cta">
              <button className="primary-btn" onClick={openEnquiry}>Start a Project <ArrowRight size={18} /></button>
            </div>
          </div>
          <div className="account-visual">
            <img className="account-image" src={accountImg} alt="Web developer coding a modern website on a laptop" />
          </div>
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
            <button className="primary-btn" onClick={openEnquiry}>Start a Project <ArrowRight size={18} /></button>
          </div>
        </section>
          </>
        ) : view.name === "service" && currentService ? (
          <ServiceDetail
            service={currentService}
            onHome={() => navigate({ name: "home" })}
            onStart={openEnquiry}
          />
        ) : view.name === "about" ? (
          <AboutPage onStart={openEnquiry} />
        ) : view.name === "blog" ? (
          <BlogPage
            onOpen={(slug) => navigate({ name: "article", slug })}
            onStart={openEnquiry}
          />
        ) : view.name === "article" && articlePost ? (
          <ArticlePage
            post={articlePost}
            onBack={() => navigate({ name: "blog" })}
            onStart={openEnquiry}
            onOpen={(slug) => navigate({ name: "article", slug })}
          />
        ) : (
          <BlogPage
            onOpen={(slug) => navigate({ name: "article", slug })}
            onStart={openEnquiry}
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
          <div><h4>Company</h4><button onClick={() => navigate({ name: "about" })}>About Kodalic</button><button onClick={() => goSection("why")}>Why Kodalic</button><button onClick={() => goSection("work")}>Our Work</button><button onClick={() => goSection("process")}>Process</button></div>
          <div><h4>Services</h4><button onClick={() => goSection("services")}>Web Development</button><button onClick={() => goSection("services")}>UI/UX Design</button><button onClick={() => goSection("services")}>Website Redesign</button><button onClick={() => goSection("services")}>Custom Solutions</button><button onClick={() => goSection("services")}>Performance Optimization</button><button onClick={() => goSection("services")}>Ongoing Support</button><button onClick={() => goSection("services")}>E-Commerce</button></div>
          <div><h4>Learn</h4><button onClick={() => navigate({ name: "blog" })}>Blog</button><button onClick={() => goSection("faq")}>FAQ</button><button onClick={openEnquiry}>Start a Project</button></div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-legal">
          <span>© 2026 Kodalic. All rights reserved.</span>
          <button onClick={() => scrollTo("top")}>Privacy Policy</button>
          <button onClick={() => scrollTo("top")}>Terms of Service</button>
        </div>
      </footer>

      {contactOpen && <ContactModal closing={contactClosing} onClose={closeEnquiry} />}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);