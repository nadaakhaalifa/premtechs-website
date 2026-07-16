import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Cloud,
  Database,
  Globe2,
  Headphones,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import logo from "./assets/premtechs-logo.png";
import "./App.css";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
};

type ArchitectureCard = {
  number: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const technologyPartners = [
  "Oracle",
  "Microsoft",
  "Google",
  "Cisco",
  "Fortinet",
  "Palo Alto",
];

const services: Service[] = [
  {
    icon: <Cloud size={26} />,
    title: "Cloud Infrastructure",
    description:
      "Secure and scalable cloud environments built for performance, availability, and long-term business growth.",
    points: ["Cloud architecture", "Hybrid cloud", "Backup and recovery"],
  },
  {
    icon: <Network size={26} />,
    title: "Network and Security Architecture",
    description:
      "Resilient enterprise networks connecting people, locations, systems, applications, and cloud environments.",
    points: ["LAN and WAN", "SD-WAN", "Wireless infrastructure"],
  },
  {
    icon: <Layers3 size={26} />,
    title: "Cloud Migration",
    description:
      "Structured migration planning that moves applications, systems, and data with minimal disruption.",
    points: ["Migration planning", "Workload assessment", "Post-migration support"],
  },
    {
    icon: <ShieldCheck size={26} />,
    title: "Cyber Security",
    description:
      "Layered protection for infrastructure, identities, applications, endpoints, users, and critical data.",
    points: ["Zero trust", "Firewall strategy", "Threat protection"],
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Monitoring & Management",
    description:
      "Continuous monitoring and optimization across cloud, network, security, server, and application environments.",
    points: ["24/7 monitoring", "Performance reporting", "Proactive maintenance"],
  },
  {
    icon: <Headphones size={26} />,
    title: "Managed IT Services",
    description:
      "Reliable technology support and proactive management that keeps your business productive and secure.",
    points: ["Technical support", "System maintenance", "IT operations"],
  },
];

const architectureCards: ArchitectureCard[] = [
  {
    number: "01",
    icon: <Cloud size={25} />,
    eyebrow: "Cloud foundation",
    title: "Cloud Infrastructure",
    description:
      "We design cloud environments around your applications, users, security requirements, performance needs, and growth plans.",
    features: [
      "Microsoft Azure and Microsoft 365",
      "Oracle Cloud Infrastructure",
      "Google Cloud environments",
      "Hybrid and multi-cloud architecture",
      "Backup and disaster recovery",
      "Cloud governance and optimization",
    ],
  },
  {
    number: "02",
    icon: <Network size={25} />,
    eyebrow: "Connected operations",
    title: "Network and Security Architecture",
    description:
      "We create reliable network foundations that keep users, branches, devices, cloud services, and applications connected.",
    features: [
      "LAN, WAN, and SD-WAN design",
      "Routing and switching",
      "Enterprise wireless networks",
      "Multi-location connectivity",
      "Network segmentation",
      "Performance and resilience planning",
    ],
  },
  {
    number: "03",
    icon: <ShieldCheck size={25} />,
    eyebrow: "Security by design",
    title: "Cyber Security",
    description:
      "We build layered cybersecurity strategies that reduce risk while supporting productivity, accessibility, and business continuity.",
    features: [
      "Fortinet security solutions",
      "Palo Alto Networks architecture",
      "Zero-trust security strategy",
      "Identity and access management",
      "Endpoint and network protection",
      "Security assessments and monitoring",
    ],
  },
];

const projects = [
  {
    number: "01",
    type: "Cloud transformation",
    title: "Modern hybrid-cloud infrastructure",
    description:
      "A scalable cloud architecture designed to improve performance, resilience, secure access, and operational visibility.",
    tags: ["Cloud", "Identity", "Backup"],
  },
  {
    number: "02",
    type: "Network modernization",
    title: "Secure multi-location connectivity",
    description:
      "A centralized network strategy connecting branches, cloud services, remote users, and critical applications.",
    tags: ["SD-WAN", "Wireless", "Monitoring"],
  },
  {
    number: "03",
    type: "Security architecture",
    title: "Layered enterprise protection",
    description:
      "A security-first infrastructure combining segmentation, firewalls, endpoint controls, identity, and continuous monitoring.",
    tags: ["Zero Trust", "Firewall", "Endpoint"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <style>{`
        .hero-logo-stage {
          position: relative;
          min-height: 680px;
          width: min(100%, 760px);
          display: grid;
          place-items: center;
          isolation: isolate;
          perspective: 1200px;
        }
        .hero-logo-stage__aura {
          position: absolute;
          width: 78%;
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(circle at 48% 44%, rgba(255,255,255,.98) 0 17%, rgba(220,246,238,.78) 38%, rgba(116,207,190,.22) 64%, transparent 74%);
          filter: blur(1px);
          box-shadow: 0 40px 110px rgba(18, 104, 100, .16);
        }
        .hero-logo-stage__mesh {
          position: absolute; inset: 8%; border-radius: 50%; opacity: .32;
          background-image: linear-gradient(rgba(24,125,119,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(24,125,119,.12) 1px, transparent 1px);
          background-size: 34px 34px; mask-image: radial-gradient(circle, #000 20%, transparent 72%);
        }
        .hero-logo-stage__orbit { position:absolute; border-radius:50%; border:1px solid rgba(42,145,136,.32); }
        .hero-logo-stage__orbit--outer { width: 88%; aspect-ratio:1; animation: premOrbit 22s linear infinite; }
        .hero-logo-stage__orbit--inner { width: 66%; aspect-ratio:1; border-style:dashed; animation: premOrbitReverse 16s linear infinite; }
        .orbit-dot { position:absolute; width:10px; height:10px; border-radius:50%; background:#4db7aa; box-shadow:0 0 20px rgba(77,183,170,.9); }
        .orbit-dot--one { left: 49%; top:-5px; }
        .orbit-dot--two { right:7%; bottom:18%; width:7px; height:7px; }
        .hero-logo-stage__beam { position:absolute; width:74%; height:1px; background:linear-gradient(90deg,transparent,rgba(86,184,172,.65),transparent); transform-origin:center; }
        .hero-logo-stage__beam--one { transform:rotate(28deg); animation:beamPulse 4.5s ease-in-out infinite; }
        .hero-logo-stage__beam--two { transform:rotate(-20deg); animation:beamPulse 4.5s ease-in-out infinite 1.2s; }
        .hero-logo-stage__platform { position:absolute; bottom:11%; width:60%; height:18%; border-radius:50%; background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(205,236,226,.9)); box-shadow:0 34px 70px rgba(21,91,88,.2), inset 0 0 0 1px rgba(255,255,255,.8); transform:rotateX(68deg); }
        .platform-ring { position:absolute; inset:16%; border-radius:50%; border:1px solid rgba(31,141,133,.32); }
        .platform-ring--two { inset:32%; border-color:rgba(31,141,133,.5); }
        .platform-glow { position:absolute; inset:35%; border-radius:50%; background:#8fd7ca; filter:blur(16px); opacity:.65; }
        .hero-logo-stage__logo-wrap { position:relative; z-index:4; width:min(78%, 520px); animation:logoFloat 5s ease-in-out infinite; transform-style:preserve-3d; }
        .hero-logo-stage__logo { display:block; width:100%; max-height:500px; object-fit:contain; filter:drop-shadow(0 42px 34px rgba(8,52,67,.24)); transform:scale(1.18); }
        .hero-float { position:absolute; z-index:6; display:flex; align-items:center; gap:11px; padding:13px 15px; border:1px solid rgba(255,255,255,.72); border-radius:18px; background:rgba(255,255,255,.62); box-shadow:0 20px 55px rgba(18,91,87,.12); backdrop-filter:blur(16px); color:#0a4550; }
        .hero-float__icon { width:40px; height:40px; display:grid; place-items:center; border-radius:13px; color:#17857d; background:linear-gradient(145deg,#e5f5ee,#cce8df); }
        .hero-float strong,.hero-float small { display:block; }
        .hero-float strong { font-size:.8rem; } .hero-float small { margin-top:2px; font-size:.65rem; color:#6c8281; }
        .hero-float--cloud { left:0; top:20%; animation:chipFloat 4s ease-in-out infinite; }
        .hero-float--security { right:-1%; bottom:20%; color:white; border-color:rgba(255,255,255,.12); background:linear-gradient(145deg,#0c5057,#15867d); animation:chipFloat 4.7s ease-in-out infinite .6s; }
        .hero-float--security .hero-float__icon { color:white; background:rgba(255,255,255,.14); }
        .hero-float--security small { color:rgba(255,255,255,.68); }
        .hero-float--network { left:8%; bottom:18%; animation:chipFloat 4.4s ease-in-out infinite 1.1s; }
        .hero-mini-node { position:absolute; z-index:5; width:50px; height:50px; display:grid; place-items:center; border-radius:16px; color:#167f78; background:rgba(255,255,255,.74); border:1px solid rgba(255,255,255,.8); box-shadow:0 18px 40px rgba(16,94,90,.13); backdrop-filter:blur(12px); }
        .hero-mini-node--server { right:13%; top:14%; animation:chipFloat 4.1s ease-in-out infinite .3s; }
        .hero-mini-node--database { left:18%; top:9%; animation:chipFloat 4.8s ease-in-out infinite .9s; }
        .hero-logo-stage__status { position:absolute; z-index:7; bottom:4%; display:flex; align-items:center; gap:9px; padding:10px 15px; border-radius:999px; color:#496d6b; background:rgba(255,255,255,.62); border:1px solid rgba(255,255,255,.72); backdrop-filter:blur(12px); font-size:.72rem; font-weight:700; letter-spacing:.02em; }
        .hero-logo-stage__status span { width:8px; height:8px; border-radius:50%; background:#38a99d; box-shadow:0 0 0 6px rgba(56,169,157,.12); animation:statusPulse 1.8s ease-in-out infinite; }
        @keyframes premOrbit { to { transform:rotate(360deg); } }
        @keyframes premOrbitReverse { to { transform:rotate(-360deg); } }
        @keyframes logoFloat { 0%,100%{transform:translateY(0) rotateY(-3deg)} 50%{transform:translateY(-18px) rotateY(3deg)} }
        @keyframes chipFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-11px)} }
        @keyframes beamPulse { 0%,100%{opacity:.18} 50%{opacity:.7} }
        @keyframes statusPulse { 0%,100%{transform:scale(.9);opacity:.75} 50%{transform:scale(1.15);opacity:1} }
        @media (max-width: 1100px) { .hero-logo-stage { min-height:600px; max-width:680px; margin-inline:auto; } .hero-float--cloud{left:3%}.hero-float--security{right:3%} }
        @media (max-width: 760px) {
          .hero-logo-stage { min-height:500px; width:100%; margin-top:10px; }
          .hero-logo-stage__aura { width:92%; } .hero-logo-stage__orbit--outer{width:96%}.hero-logo-stage__orbit--inner{width:72%}
          .hero-logo-stage__logo-wrap { width:76%; } .hero-logo-stage__logo{transform:scale(1.26)}
          .hero-logo-stage__platform { width:68%; bottom:12%; }
          .hero-float { padding:10px 11px; border-radius:15px; } .hero-float__icon{width:34px;height:34px;border-radius:11px}
          .hero-float--cloud { left:0; top:17%; } .hero-float--security{right:0;bottom:16%}.hero-float--network{display:none}
          .hero-mini-node--database{left:8%;top:7%}.hero-mini-node--server{right:8%;top:8%}
          .hero-logo-stage__status{bottom:1%;font-size:.64rem}
        }
        @media (max-width: 460px) {
          .hero-logo-stage { min-height:410px; } .hero-logo-stage__logo-wrap{width:78%}.hero-logo-stage__logo{transform:scale(1.32)}
          .hero-float strong{font-size:.69rem}.hero-float small{font-size:.56rem}.hero-float--cloud{top:20%}.hero-float--security{bottom:17%}
          .hero-mini-node{width:42px;height:42px;border-radius:13px}.hero-logo-stage__status{display:none}
        }
        @media (prefers-reduced-motion: reduce) { .hero-logo-stage *, .hero-logo-stage *::before, .hero-logo-stage *::after { animation:none !important; } }
      `}</style>
      <header
        className={`site-header ${
          headerScrolled ? "site-header--scrolled" : ""
        }`}
      >
        <div className="container navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand__symbol">
              <img src={logo} alt="PremTechs logo" />
            </span>

            <span className="brand__text">
              <strong>
                Prem<span>Techs</span>
              </strong>
              <small>Cloud • Network • Security</small>
            </span>
          </a>

          <nav className="desktop-navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="header-button">
            Schedule a Call
            <ArrowRight size={17} />
          </a>

          <button
            type="button"
            className="menu-button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__header">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand__symbol">
              <img src={logo} alt="PremTechs logo" />
            </span>

            <span className="brand__text">
              <strong>
                Prem<span>Techs</span>
              </strong>
              <small>Cloud • Network • Security</small>
            </span>
          </a>

          <button
            type="button"
            className="menu-close"
            aria-label="Close navigation"
            onClick={closeMenu}
          >
            <X size={25} />
          </button>
        </div>

        <nav className="mobile-navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.label} onClick={closeMenu}>
              {item.label}
              <ChevronRight size={20} />
            </a>
          ))}
        </nav>

        <a href="#contact" className="mobile-call-button" onClick={closeMenu}>
          Schedule a Call
          <ArrowRight size={18} />
        </a>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />

          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow">
                <span />
                Cloud • Network • Security
              </p>

              <h2>
                Enterprise Cloud, Network &amp; Security Solutions
              </h2>

              <h3>Built for Growth. Secured for Tomorrow.</h3>

              <p className="hero__description">
                PremTechs designs, secures, and manages reliable cloud
                infrastructure, enterprise networks, and cybersecurity
                environments for modern organizations.
              </p>

              <div className="hero__actions">
                <a href="#solutions" className="button button--primary">
                  Explore Solutions
                  <ArrowRight size={18} />
                </a>

                <a href="#contact" className="button button--secondary">
                  Talk to an Expert
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="hero__assurances">
                <span>
                  <Check size={16} />
                  Security-first design
                </span>

                <span>
                  <Check size={16} />
                  Enterprise scalability
                </span>

                <span>
                  <Check size={16} />
                  Long-term support
                </span>
              </div>
            </div>

            <div className="hero-logo-stage" aria-label="PremTechs connected technology platform">
              <div className="hero-logo-stage__aura" />
              <div className="hero-logo-stage__mesh" />
              <div className="hero-logo-stage__orbit hero-logo-stage__orbit--outer">
                <span className="orbit-dot orbit-dot--one" />
                <span className="orbit-dot orbit-dot--two" />
              </div>
              <div className="hero-logo-stage__orbit hero-logo-stage__orbit--inner" />

              <div className="hero-logo-stage__beam hero-logo-stage__beam--one" />
              <div className="hero-logo-stage__beam hero-logo-stage__beam--two" />

              <div className="hero-logo-stage__platform">
                <span className="platform-ring platform-ring--one" />
                <span className="platform-ring platform-ring--two" />
                <span className="platform-glow" />
              </div>

              <div className="hero-logo-stage__logo-wrap">
                <img src={logo} alt="PremTechs" className="hero-logo-stage__logo" />
              </div>

              <div className="hero-float hero-float--cloud">
                <span className="hero-float__icon"><Cloud size={24} /></span>
                <span><strong>Cloud Ready</strong><small>Secure & scalable</small></span>
              </div>

              <div className="hero-float hero-float--security">
                <span className="hero-float__icon"><ShieldCheck size={24} /></span>
                <span><strong>Protected</strong><small>Security built in</small></span>
              </div>

              <div className="hero-float hero-float--network">
                <span className="hero-float__icon"><Network size={23} /></span>
                <span><strong>Connected</strong><small>Always available</small></span>
              </div>

              <div className="hero-mini-node hero-mini-node--server"><Server size={18} /></div>
              <div className="hero-mini-node hero-mini-node--database"><Database size={18} /></div>

              <div className="hero-logo-stage__status">
                <span />
                PremTechs infrastructure online
              </div>
            </div>
          </div>

          <div className="container technology-strip">
            <p>Solutions &amp; Technologies</p>

            <div className="technology-strip__items">
              {technologyPartners.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="section-label">Our services</p>

              <h2>End-to-end technology designed for your success.</h2>

              <p>
                One experienced technology partner for the infrastructure,
                connectivity, protection, and support your business depends on.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card__top">
                    <span className="service-card__icon">{service.icon}</span>
                    <span className="service-card__number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="service-card__points">
                    {service.points.map((point) => (
                      <span key={point}>
                        <Check size={14} />
                        {point}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" aria-label={`Learn about ${service.title}`}>
                    Explore service
                    <ArrowRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="performance-section" id="expertise">
          <div className="container performance-grid">
            <div className="performance-item">
              <Cloud size={30} />
              <div>
                <strong>Multi-cloud</strong>
                <span>Architecture expertise</span>
              </div>
            </div>

            <div className="performance-item">
              <Network size={30} />
              <div>
                <strong>Enterprise</strong>
                <span>Network design</span>
              </div>
            </div>

            <div className="performance-item">
              <ShieldCheck size={30} />
              <div>
                <strong>Security-first</strong>
                <span>Infrastructure strategy</span>
              </div>
            </div>

            <div className="performance-item">
              <Headphones size={30} />
              <div>
                <strong>24/7</strong>
                <span>Monitoring available</span>
              </div>
            </div>

            <div className="performance-item">
              <Globe2 size={30} />
              <div>
                <strong>Built to scale</strong>
                <span>Across locations</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section architecture" id="solutions">
          <div className="container">
            <div className="section-heading architecture__heading">
              <div>
                <p className="section-label">Core solutions</p>
                <h2>Three foundations for reliable modern operations.</h2>
              </div>

              <p>
                Every solution is designed as part of one connected technology
                environment—not as an isolated product or temporary fix.
              </p>
            </div>

            <div className="architecture-list">
              {architectureCards.map((item) => (
                <article className="architecture-card" key={item.title}>
                  <div className="architecture-card__intro">
                    <div className="architecture-card__identity">
                      <span className="architecture-card__number">
                        {item.number}
                      </span>

                      <span className="architecture-card__icon">
                        {item.icon}
                      </span>
                    </div>

                    <p className="section-label">{item.eyebrow}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <a href="#contact">
                      Discuss this solution
                      <ArrowRight size={18} />
                    </a>
                  </div>

                  <div className="architecture-card__features">
                    {item.features.map((feature) => (
                      <div key={feature}>
                        <span>
                          <Check size={16} />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="architecture-card__visual">
                    <div className="architecture-orbit architecture-orbit--one" />
                    <div className="architecture-orbit architecture-orbit--two" />

                    <div className="architecture-logo">
                      <img src={logo} alt="" aria-hidden="true" />
                    </div>

                    <span className="architecture-node architecture-node--one">
                      {item.icon}
                    </span>

                    <span className="architecture-node architecture-node--two">
                      <LockKeyhole size={20} />
                    </span>

                    <span className="architecture-node architecture-node--three">
                      <Server size={20} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach" id="about">
          <div className="container approach-grid">
            <div className="approach-copy">
              <p className="section-label">Our approach</p>

              <h2>Clear strategy before complex technology.</h2>

              <p>
                PremTechs starts with your business requirements, current
                environment, risks, priorities, and future direction. We then
                create a practical architecture that your organization can
                operate and grow with confidence.
              </p>

              <a href="#contact" className="button button--primary">
                Start a Conversation
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="approach-process">
              <div className="process-line" />

              <article>
                <span>01</span>
                <div>
                  <h3>Discover</h3>
                  <p>
                    Understand your systems, teams, risks, challenges, and
                    business goals.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Design</h3>
                  <p>
                    Create a secure, scalable, and practical architecture for
                    your organization.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Deploy</h3>
                  <p>
                    Implement carefully with clear communication and minimal
                    operational disruption.
                  </p>
                </div>
              </article>

              <article>
                <span>04</span>
                <div>
                  <h3>Optimize</h3>
                  <p>
                    Monitor, support, improve, and adapt the environment as your
                    business grows.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="container">
            <div className="section-heading projects__heading">
              <div>
                <p className="section-label">Selected solutions</p>
                <h2>Technology architecture with real business purpose.</h2>
              </div>

              <a href="#contact" className="button button--secondary">
                Discuss Your Project
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__header">
                    <span>{project.type}</span>
                    <strong>{project.number}</strong>
                  </div>

                  <div className="project-card__visual">
                    <div className="project-visual__line project-visual__line--one" />
                    <div className="project-visual__line project-visual__line--two" />
                    <div className="project-visual__circle" />

                    <img src={logo} alt="" aria-hidden="true" />
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href="#contact">
                    Explore solution
                    <ArrowRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section expertise">
          <div className="container expertise-shell">
            <div className="expertise-content">
              <p className="section-label section-label--light">
                Technology expertise
              </p>

              <h2>Designed across the complete technology environment.</h2>

              <p>
                PremTechs connects cloud platforms, network infrastructure,
                cybersecurity controls, monitoring, support, and business
                continuity into one clear operating strategy.
              </p>

              <div className="expertise-pill-list">
                <span>Oracle Cloud</span>
                <span>Microsoft Azure</span>
                <span>Google Cloud</span>
                <span>Cisco Networking</span>
                <span>Fortinet Security</span>
                <span>Palo Alto Networks</span>
              </div>
            </div>

            <div className="expertise-diagram">
              <div className="expertise-diagram__ring expertise-diagram__ring--one" />
              <div className="expertise-diagram__ring expertise-diagram__ring--two" />

              <div className="expertise-diagram__center">
                <img src={logo} alt="PremTechs" />
              </div>

              <span className="expertise-diagram__item expertise-diagram__item--cloud">
                <Cloud size={22} />
                Cloud
              </span>

              <span className="expertise-diagram__item expertise-diagram__item--network">
                <Network size={22} />
                Network
              </span>

              <span className="expertise-diagram__item expertise-diagram__item--security">
                <ShieldCheck size={22} />
                Security
              </span>

              <span className="expertise-diagram__item expertise-diagram__item--support">
                <Headphones size={22} />
                Support
              </span>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-shell">
            <div className="contact-copy">
              <p className="section-label section-label--light">
                Start a conversation
              </p>

              <h2>
                Build a stronger technology foundation for your organization.
              </h2>

              <p>
                Tell us about your infrastructure, security requirements,
                connectivity challenges, or cloud goals. We will help you
                identify the right next step.
              </p>

              <div className="contact-actions">
                <a
                  href="mailto:info@premtechs.com"
                  className="button contact-button--light"
                >
                  info@premtechs.com
                  <ArrowRight size={18} />
                </a>

                <a
                  href="tel:+10000000000"
                  className="button contact-button--outline"
                >
                  Schedule a Call
                </a>
              </div>
            </div>

            <div className="contact-card">
              <Sparkles size={29} />

              <h3>Technology consultation</h3>

              <p>
                Discuss your environment with a team focused on practical,
                secure, and scalable solutions.
              </p>

              <div>
                <span>
                  <Check size={16} />
                  Cloud infrastructure
                </span>

                <span>
                  <Check size={16} />
                  Network architecture
                </span>

                <span>
                  <Check size={16} />
                  Security strategy
                </span>

                <span>
                  <Check size={16} />
                  Managed technology
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand__symbol brand__symbol--footer">
                <img src={logo} alt="PremTechs logo" />
              </span>

              <span className="brand__text">
                <strong className="footer-brand-name">
                  Prem<span>Techs</span>
                </strong>

                <small>Cloud • Network • Security</small>
              </span>
            </a>

            <p>
              Enterprise cloud, networking, security, and managed technology
              solutions built around your business.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Company</h3>
              <a href="#about">About Us</a>
              <a href="#projects">Projects</a>
              <a href="#expertise">Expertise</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h3>Solutions</h3>
              <a href="#solutions">Cloud Infrastructure</a>
              <a href="#solutions">Network Architecture</a>
              <a href="#solutions">Security Architecture</a>
              <a href="#services">Managed IT Services</a>
            </div>

            <div>
              <h3>Technologies</h3>
              <a href="#expertise">Oracle</a>
              <a href="#expertise">Microsoft</a>
              <a href="#expertise">Google</a>
              <a href="#expertise">Cisco</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} PremTechs. All rights reserved.</span>

          <div>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;