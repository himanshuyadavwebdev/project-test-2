import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
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
} from "lucide-react";
import "./styles.css";

const img = (id: string, w = 1200, q = 82) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

const services = [
  {
    title: "Web Development",
    location: "For startups & growing companies",
    price: "From idea to launch",
    returnRate: "Modern & responsive",
    image: img("photo-1461749280684-dccba630e2f6"),
  },
  {
    title: "UI & Digital Experiences",
    location: "For user-focused products",
    price: "Clear & intuitive",
    returnRate: "Designed around you",
    image: img("photo-1556761175-b413da4baf72"),
  },
  {
    title: "Website Redesign",
    location: "For outdated websites",
    price: "Fresh & professional",
    returnRate: "Modern & fast",
    image: img("photo-1460925895917-afdab827c52f"),
  },
  {
    title: "Custom Solutions",
    location: "For specific needs",
    price: "Built to fit",
    returnRate: "Purpose-built",
    image: img("photo-1504384308090-c894fdcc538d"),
  },
];

const faqs = [
  ["What services does Kodalic provide?", "Kodalic designs and develops modern websites, web applications, and digital experiences. We cover web development, UI/UX, redesigns, custom solutions, performance optimization, and ongoing support."],
  ["Who do you work with?", "We work with startups, small businesses, growing companies, founders, and established businesses that need a professional, reliable digital presence."],
  ["How do we start a project?", "Simply reach out through the contact form or email. We begin by understanding your business, goals, and requirements in a no-pressure discussion."],
  ["How much does a project cost?", "Cost depends on scope and requirements. After understanding your goals, we provide a clear, itemised proposal so you know exactly what you're investing in."],
  ["How long does a typical project take?", "Timelines vary by project. We agree on a realistic schedule up front and keep you informed through every stage of the process."],
  ["Do you provide ongoing support?", "Yes. We help improve and support your digital presence after launch, so your website keeps working well as your business evolves."],
  ["What makes Kodalic different?", "We focus on the business purpose behind every website. We combine modern technology, attention to detail, and clear communication to deliver dependable results."],
  ["Can you help redesign my existing website?", "Absolutely. We transform outdated websites into modern, responsive, professional digital experiences while keeping what already works."],
];

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollProgress(Math.min(window.scrollY / 300, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          <button className="brand" onClick={() => scrollTo("top")} aria-label="Kodalic home">
            <span className="brand-star">✳</span>Kodalic
          </button>

          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("why")}>Why Kodalic</button>
            <div className="nav-learn">
              <button onClick={() => scrollTo("process")}>Process <ChevronDown size={14} /></button>
            </div>
            <button onClick={() => scrollTo("work")}>Our Work</button>
          </nav>

          <div className="nav-actions">
            <button className="login" onClick={() => scrollTo("contact")}>LOG IN</button>
            <button className="signup" onClick={() => scrollTo("contact")}>START A PROJECT</button>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="trust"><span>★</span> Trusted by <b>growing businesses</b></div>
            <h1>Digital experiences built for businesses that<br /><span>want to move forward.</span></h1>
            <p>Kodalic designs and develops modern digital experiences that help businesses establish credibility, connect with their customers, and grow online.</p>
            <button className="primary-btn" onClick={() => scrollTo("contact")}>Start a Project <ArrowRight size={18} /></button>
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
            {["WEB DEVELOPMENT", "UI / UX", "REDESIGN", "CUSTOM SOLUTIONS", "PERFORMANCE", "ONGOING SUPPORT", "E-COMMERCE"].map((x) => <span key={x}>{x}</span>)}
          </div>
        </section>

        <section className="steps section" id="about">
          <Reveal><div className="eyebrow">START A PROJECT IN 3 SIMPLE STEPS</div></Reveal>
          <Reveal><h2>Thoughtful web experiences,<br /><em>made simple.</em></h2></Reveal>
          <div className="step-grid">
            {[
              ["01", "Share", "Tell us your idea", "Create a project brief in minutes. Tell us about your business, goals, and what you want to achieve. No jargon required.", Lightbulb],
              ["02", "Build", "We design & develop", "We turn your requirements into a modern, high-quality digital experience tailored to your business.", Code2],
              ["03", "Grow", "Launch & improve", "Launch with confidence, then keep improving and supporting your digital presence as your business evolves.", Rocket],
            ].map(([num, label, title, text, Icon]) => {
              const C = Icon as React.ElementType;
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

        <section className="account-banner" id="contact">
          <div className="account-copy">
            <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
            <h2>Let's discuss what<br />you're building.</h2>
            <div className="checks">
              <span><Check /> No Commitment, Just a Conversation</span>
              <span><Check /> Clear Next Steps and Timeline</span>
            </div>
            <button className="primary-btn" onClick={() => alert("Portfolio demo: contact flow would open here.")}>Start a Project <ArrowRight size={18} /></button>
          </div>
          <div className="account-visual">
            <div className="orbit"></div>
            <div className="mini-phone">
              <div className="mini-bar"></div>
              <div className="mini-title">Project progress</div>
              <div className="mini-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <div className="mini-stat"><span>Phase</span><b>Design & Build</b></div>
            </div>
          </div>
        </section>

        <section className="why section" id="why">
          <Reveal><div className="eyebrow">WHY BUSINESSES CHOOSE KODALIC</div></Reveal>
          <div className="why-grid">
            <Reveal className="why-image">
              <img src={img("photo-1522542550221-31fd19575a2d", 1400)} alt="Collaborative project work" />
              <div className="image-badge">Business-first<br /><small>digital thinking</small></div>
            </Reveal>
            <Reveal className="why-copy">
              <h2>We understand the business behind<br />the <em>website.</em></h2>
              <p>We don't just build websites. We learn what your business needs to achieve — leads, conversions, credibility, or growth — and create the right digital solution to get there.</p>
              <div className="metric-row">
                <div><b>Business</b><span>Focused approach</span></div>
                <div><b>Quality</b><span>Attention to detail</span></div>
                <div><b>Reliable</b><span>Dependable delivery</span></div>
              </div>
              <button className="text-btn" onClick={() => scrollTo("work")}>Explore our work <ArrowRight size={17} /></button>
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
            ].map(([n, t, d, Icon]) => {
              const C = Icon as React.ElementType;
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
          <Reveal><h2>Services built around<br /><em>your business.</em></h2></Reveal>
          <div className="property-slider">
            <button className="slider-arrow left" onClick={() => setServiceIndex(Math.max(0, serviceIndex - 1))} disabled={serviceIndex === 0}><ChevronLeft /></button>
            <div className="property-track" style={{ transform: `translateX(-${serviceIndex * 25}%)` }}>
              {services.map((p) => <article className="property-card" key={p.title}>
                <div className="property-image"><img src={p.image} alt={p.title} /><span>KODALIC</span></div>
                <div className="property-body"><div><h3>{p.title}</h3><p>{p.location}</p></div><div className="property-data"><b>{p.price}</b><span>{p.returnRate}</span></div><button onClick={() => alert("Portfolio demo: service details would open here.")}>Learn more <ArrowRight size={15} /></button></div>
              </article>)}
            </div>
            <button className="slider-arrow right" onClick={() => setServiceIndex(Math.min(services.length - 1, serviceIndex + 1))} disabled={serviceIndex === services.length - 1}><ChevronRight /></button>
          </div>
        </section>

        <section className="testimonial section" id="work">
          <div className="quote-mark">“</div>
          <Reveal><p>Kodalic understood exactly what our business needed. They delivered a modern, professional website that reflects who we are — and made the whole process clear and stress-free.</p></Reveal>
          <div className="person"><div className="avatar">S</div><div><b>[Client Name]</b><span>[Company], Kodalic client</span></div></div>
        </section>

        <section className="faq section">
          <Reveal><div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div></Reveal>
          <Reveal><h2>Questions,<br /><em>answered.</em></h2></Reveal>
          <div className="faq-list">
            {faqs.map(([q, a], i) => <div className={`faq-item ${faq === i ? "open" : ""}`} key={q}>
              <button onClick={() => setFaq(faq === i ? -1 : i)} aria-expanded={faq === i} aria-controls={`faq-answer-${i}`}><span>{q}</span><ChevronDown /></button>
              <div className="faq-answer" id={`faq-answer-${i}`}><p>{a}</p></div>
            </div>)}
          </div>
        </section>

        <section className="final-cta" id="contact-cta">
          <div className="eyebrow">START YOUR DIGITAL PRESENCE TODAY</div>
          <h2>Let's build something<br /><em>that moves your business forward.</em></h2>
          <p>Have a project in mind? Let's discuss what you're trying to build and how we can help.</p>
          <button className="primary-btn" onClick={() => alert("Portfolio demo: contact flow would open here.")}>Start a Project <ArrowRight size={18} /></button>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-main">
          <div><div className="brand footer-brand"><span className="brand-star">✳</span>Kodalic</div><p>Digital experiences built to<br />help businesses move forward.</p></div>
          <div><h4>Company</h4><button onClick={() => scrollTo("about")}>About</button><button onClick={() => scrollTo("work")}>Our Work</button><button onClick={() => scrollTo("footer")}>Careers</button></div>
          <div><h4>Services</h4><button onClick={() => scrollTo("services")}>Web Development</button><button onClick={() => scrollTo("services")}>UI / UX</button><button onClick={() => scrollTo("services")}>Redesign</button></div>
          <div><h4>Learn</h4><button onClick={() => scrollTo("process")}>Our Process</button><button onClick={() => scrollTo("contact")}>Help Center</button><button onClick={() => scrollTo("contact")}>Contact</button></div>
        </div>
        <div className="footer-legal">
          <span>© 2026 Kodalic. All rights reserved.</span>
          <span>Every project is crafted with attention, care, and modern technology.</span>
          <span>Built as a portfolio demonstration.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);