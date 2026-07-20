import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Cable,
  Cctv,
  Check,
  ChevronRight,
  Cloud,
  Globe2,
  Headphones,
  LockKeyhole,
  Menu,
  Network,
  RadioTower,
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
  eyebrow: string;
  description: string;
  points: string[];
  badgeOne: { icon: React.ReactNode; label: string };
  badgeTwo: { icon: React.ReactNode; label: string };
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
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "/contact" },
];

const technologyPartners = [
  "Oracle",
  "Microsoft",
  "Google",
  "Cisco",
  "Fortinet",
  "Palo Alto",
  "AWS",
];

const services: Service[] = [
  {
    icon: <Cloud />,
    title: "Cloud Infrastructure",
    eyebrow: "Cloud strategy & operations",
    description:
      "PremTechs designs, migrates, manages, and monitors secure cloud environments that support performance, resilience, business continuity, and long-term growth across public, private, hybrid, and multi-cloud platforms.",
    points: [
      "Cloud Migration (OCI, GCP, AWS, Azure & Alibaba Cloud)",
      "Managed IT Services",
      "Professional Services",
      "Infrastructure Monitoring",
      "Cloud architecture and optimization",
      "Backup, recovery and business continuity",
    ],
    badgeOne: { icon: <Server size={19} />, label: "Multi-cloud ready" },
    badgeTwo: { icon: <BarChart3 size={19} />, label: "Managed & monitored" },
  },
  {
    icon: <Network />,
    title: "Network and Security Infrastructure",
    eyebrow: "Connected & protected operations",
    description:
      "We build dependable network foundations that connect users, offices, devices, applications, cloud platforms, and remote teams while maintaining strong security, visibility, performance, and availability.",
    points: [
      "Network Design and Installation",
      "Switching and Routing",
      "Firewall Installation and Management",
      "VPN and Secure Remote Access",
      "Network Security and Monitoring",
      "Wireless Networks and Access Points",
    ],
    badgeOne: { icon: <ShieldCheck size={19} />, label: "Secure by design" },
    badgeTwo: { icon: <RadioTower size={19} />, label: "Always connected" },
  },
  {
    icon: <ShieldCheck />,
    title: "Cybersecurity",
    eyebrow: "Protection across every layer",
    description:
      "PremTechs delivers practical, layered cybersecurity that protects identities, endpoints, applications, cloud environments, networks, and critical data while helping your organization reduce risk and respond confidently to threats.",
    points: [
      "Cybersecurity Assessments",
      "Cloud Security",
      "Zero-Trust Security Strategy",
      "Identity and Access Management",
      "Multi-Factor Authentication",
      "Endpoint Protection",
      "Vulnerability Assessment and Security Hardening",
      "Security Monitoring and Incident Response",
    ],
    badgeOne: { icon: <LockKeyhole size={19} />, label: "Identity protected" },
    badgeTwo: { icon: <BarChart3 size={19} />, label: "Threat visibility" },
  },
  {
    icon: <BarChart3 />,
    title: "Monitoring & Managed IT",
    eyebrow: "Continuous operational support",
    description:
      "We provide proactive monitoring, professional services, technical support, maintenance, and operational management to keep your infrastructure stable, secure, visible, and aligned with your business priorities.",
    points: [
      "Infrastructure Monitoring",
      "Managed IT Services",
      "Professional Services",
      "Performance and Availability Monitoring",
      "Preventive Maintenance",
      "Technical Support and Incident Coordination",
    ],
    badgeOne: { icon: <Headphones size={19} />, label: "Responsive support" },
    badgeTwo: { icon: <Server size={19} />, label: "Proactive operations" },
  },
  {
    icon: <Cable />,
    title: "Cabling & Fiber Infrastructure",
    eyebrow: "Reliable physical infrastructure",
    description:
      "We design and install professional copper and fiber infrastructure that provides a clean, certified, scalable foundation for networks, data centers, wireless systems, surveillance, voice, and business-critical applications.",
    points: [
      "Structured Cabling Design and Installation",
      "Cat6 and Cat6A Network Cabling",
      "Fiber Optic Backbone Solutions",
      "Fiber Termination, Splicing and Testing",
      "Network Rack and Cabinet Installation",
      "Patch Panel and Cable Management Solutions",
      "Cable Testing, Certification and Fault Detection",
      "Professional Labeling and As-Built Documentation",
    ],
    badgeOne: { icon: <Server size={19} />, label: "Certified links" },
    badgeTwo: { icon: <Network size={19} />, label: "Built to scale" },
  },
  {
    icon: <Cctv />,
    title: "Surveillance & Communication Solutions",
    eyebrow: "Visibility, access & communication",
    description:
      "We integrate surveillance, access, attendance, intercom, voice, and unified communication technologies into one dependable environment that improves safety, control, collaboration, and operational awareness.",
    points: [
      "CCTV Surveillance Systems",
      "Access Control Systems",
      "Time Attendance Systems",
      "Intercom Systems",
      "Remote Monitoring",
      "IP Telephony",
      "Unified Communications",
      "IP PBX Systems",
      "SIP and Voice Solutions",
    ],
    badgeOne: { icon: <ShieldCheck size={19} />, label: "Intelligent security" },
    badgeTwo: { icon: <RadioTower size={19} />, label: "Unified communication" },
  },
];

const architectureCards: ArchitectureCard[] = [
  {
    number: "01",
    icon: <Cloud size={25} />,
    eyebrow: "Cloud transformation",
    title: "Cloud Infrastructure & Operations",
    description:
      "We plan, migrate, operate, and continuously improve secure cloud environments that support performance, availability, resilience, and long-term business growth.",
    features: [
      "Cloud migration across OCI, GCP, AWS, Azure, and Alibaba Cloud",
      "Public, private, hybrid, and multi-cloud architecture",
      "Managed IT and professional technology services",
      "Infrastructure health, performance, and availability monitoring",
      "Backup, disaster recovery, and business continuity planning",
      "Cloud governance, cost optimization, and lifecycle support",
    ],
  },
  {
    number: "02",
    icon: <Network size={25} />,
    eyebrow: "Secure connectivity",
    title: "Network & Security Infrastructure",
    description:
      "We create secure, high-performance network environments that connect users, offices, devices, applications, cloud platforms, and remote teams without compromising reliability or control.",
    features: [
      "Enterprise network planning, design, and installation",
      "Professional switching and routing implementation",
      "Firewall deployment, configuration, and ongoing management",
      "VPN and protected remote-access solutions",
      "Continuous network security and performance monitoring",
      "Business-grade wireless networks and access-point deployment",
    ],
  },
  {
    number: "03",
    icon: <ShieldCheck size={25} />,
    eyebrow: "Protection by design",
    title: "Cybersecurity",
    description:
      "We deliver layered security strategies that protect identities, endpoints, applications, cloud services, networks, and critical information while improving visibility and response readiness.",
    features: [
      "Cybersecurity posture and risk assessments",
      "Cloud-security architecture and control implementation",
      "Zero-trust strategy and identity-centered protection",
      "Identity access management and multi-factor authentication",
      "Endpoint protection, vulnerability assessment, and hardening",
      "Security monitoring, incident detection, and coordinated response",
    ],
  },
  {
    number: "04",
    icon: <Cable size={25} />,
    eyebrow: "Physical connectivity",
    title: "Cabling & Fiber Infrastructure",
    description:
      "We engineer clean, certified, and scalable copper and fiber systems that form the physical foundation for data, voice, wireless, surveillance, and business-critical technology.",
    features: [
      "Structured cabling planning and professional installation",
      "Cat6 and Cat6A network cabling systems",
      "Fiber-optic backbone design and deployment",
      "Fiber termination, fusion splicing, testing, and validation",
      "Network racks, cabinets, patch panels, and cable organization",
      "Certification, fault detection, labeling, and as-built documentation",
    ],
  },
  {
    number: "05",
    icon: <Cctv size={25} />,
    eyebrow: "Intelligent environments",
    title: "Surveillance & Communication Solutions",
    description:
      "We integrate security, access, monitoring, voice, and communication technologies into unified environments that improve visibility, safety, collaboration, and operational control.",
    features: [
      "IP CCTV surveillance and centralized video management",
      "Access-control, time-attendance, and intercom systems",
      "Secure local and remote monitoring capabilities",
      "Business IP telephony and enterprise voice deployment",
      "Unified communications and collaboration platforms",
      "IP PBX, SIP trunking, and scalable voice solutions",
    ],
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
          .hero-logo-stage__status{bottom:1%;font-size:.64rem}
        }
        @media (max-width: 460px) {
          .hero-logo-stage { min-height:410px; } .hero-logo-stage__logo-wrap{width:78%}.hero-logo-stage__logo{transform:scale(1.32)}
          .hero-float strong{font-size:.69rem}.hero-float small{font-size:.56rem}.hero-float--cloud{top:20%}.hero-float--security{bottom:17%}
          .hero-logo-stage__status{display:none}
        }

        .hero-brand-name {
          margin: 0 0 18px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(4.5rem, 9vw, 8.8rem);
          font-weight: 600;
          line-height: .78;
          letter-spacing: -.075em;
          color: #073f4d;
          text-shadow: 0 18px 48px rgba(10, 82, 85, .12);
        }
        .hero-brand-name span {
          color: #1a9288;
        }
        .hero-brand-tagline {
          margin: 0 0 22px;
          color: #167c77;
          font-size: .76rem;
          font-weight: 800;
          letter-spacing: .24em;
          text-transform: uppercase;
        }
        /* Fluid spacing and responsive content width */
        .container {
          width: min(calc(100% - clamp(32px, 8vw, 144px)), 1380px);
          margin-inline: auto;
        }

        .section {
          padding-block: clamp(76px, 9vw, 150px);
        }

        .brand-story {
          position: relative;
          overflow: hidden;
          padding-block: clamp(96px, 10vw, 168px);
          background:
            radial-gradient(circle at 12% 8%, rgba(123, 230, 210, .18), transparent 28%),
            radial-gradient(circle at 88% 88%, rgba(40, 177, 163, .16), transparent 32%),
            linear-gradient(135deg, #052d38 0%, #074b54 48%, #086e69 100%);
          color: white;
          isolation: isolate;
        }

        .brand-story::before {
          content: "PREMTECHS";
          position: absolute;
          left: 50%;
          bottom: -.13em;
          z-index: -1;
          transform: translateX(-50%);
          color: rgba(255,255,255,.035);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(8rem, 20vw, 21rem);
          font-weight: 700;
          line-height: .72;
          letter-spacing: -.08em;
          white-space: nowrap;
          pointer-events: none;
        }

        .brand-story::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          opacity: .12;
          background-image:
            linear-gradient(rgba(255,255,255,.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.11) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, #000 0, transparent 78%);
        }

        .brand-story__shell {
          position: relative;
          display: grid;
          grid-template-columns: minmax(340px, .82fr) minmax(0, 1.18fr);
          align-items: center;
          gap: clamp(52px, 8vw, 130px);
        }

        .brand-story__identity {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: clamp(390px, 42vw, 520px);
          padding: clamp(30px, 4vw, 52px);
          border: 1px solid rgba(255,255,255,.16);
          border-radius: clamp(28px, 3vw, 42px);
          background: linear-gradient(145deg, rgba(255,255,255,.11), rgba(255,255,255,.035));
          box-shadow: 0 32px 80px rgba(0, 18, 27, .22);
          backdrop-filter: blur(22px);
          overflow: hidden;
        }

        .brand-story__identity::before {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          right: -90px;
          top: -95px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(137,229,213,.26), transparent 68%);
          animation: brandPulse 6s ease-in-out infinite;
        }

        .brand-story__logo-lockup {
          position: relative;
          z-index: 1;
          display: grid;
          justify-items: start;
          align-content: start;
          gap: clamp(20px, 2.4vw, 30px);
          width: 100%;
          min-width: 0;
        }

        .brand-story__logo-frame {
          width: clamp(68px, 6.5vw, 94px);
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 24px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 22px 48px rgba(0,0,0,.18);
        }

        .brand-story__logo-frame img { width: 76%; height: 76%; object-fit: contain; }

        .brand-story__name {
          margin: 0;
          max-width: 100%;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.55rem, 3.7vw, 4.35rem);
          font-weight: 600;
          line-height: .92;
          letter-spacing: -.055em;
          white-space: nowrap;
        }

        .brand-story__name span { color: #91e6d7; }

        .brand-story__identity-copy { position: relative; z-index: 1; max-width: 410px; }
        .brand-story__identity-copy strong {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          color: #a8eee2;
          font-size: .72rem;
          letter-spacing: .2em;
          text-transform: uppercase;
        }
        .brand-story__identity-copy strong::before { content:""; width: 34px; height: 1px; background: currentColor; }
        .brand-story__identity-copy p { margin: 0; color: rgba(255,255,255,.74); font-size: clamp(.95rem, 1.1vw, 1.05rem); line-height: 1.8; }

        .brand-story__copy { min-width: 0; }
        .brand-story__copy .section-label { color: #91e6d7; letter-spacing: .22em; }

        .brand-story__headline {
          margin: 20px 0 30px;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3rem, 5.6vw, 6.5rem);
          font-weight: 500;
          line-height: .94;
          letter-spacing: -.058em;
          text-wrap: balance;
        }

        .brand-story__headline span {
          display: block;
          width: fit-content;
          background: linear-gradient(90deg, #fff 0%, #fff 38%, #9cebdd 54%, #fff 72%, #fff 100%);
          background-size: 240% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: brandTextSweep 7s ease-in-out infinite;
        }
        .brand-story__headline span:nth-child(2) { animation-delay: .45s; }
        .brand-story__headline span:nth-child(3) { animation-delay: .9s; }

        .brand-story__copy > p {
          max-width: 790px;
          margin: 0;
          color: rgba(255,255,255,.76);
          font-size: clamp(1rem, 1.25vw, 1.16rem);
          line-height: 1.9;
        }

        .brand-story__pillars {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 38px;
        }

        .brand-story__pillars span {
          display: flex;
          align-items: center;
          gap: 11px;
          min-height: 58px;
          padding: 15px 17px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 16px;
          background: rgba(255,255,255,.07);
          color: rgba(255,255,255,.94);
          font-size: .79rem;
          font-weight: 800;
          backdrop-filter: blur(12px);
          transition: transform .3s ease, background .3s ease, border-color .3s ease;
        }

        .brand-story__pillars span::before {
          content: "";
          width: 7px;
          height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #8ce2d4;
          box-shadow: 0 0 0 5px rgba(140,226,212,.10);
        }

        .brand-story__pillars span:hover {
          transform: translateY(-4px);
          border-color: rgba(150,235,220,.42);
          background: rgba(255,255,255,.12);
        }

        @keyframes brandTextSweep {
          0%, 20% { background-position: 100% 50%; }
          55%, 100% { background-position: -120% 50%; }
        }
        @keyframes brandPulse { 0%,100% { transform: scale(.9); opacity:.6; } 50% { transform: scale(1.12); opacity:1; } }

        @media (max-width: 1120px) {
          .brand-story__shell { grid-template-columns: 1fr; gap: 42px; }
          .brand-story__identity {
            min-height: auto;
            display: grid;
            grid-template-columns: minmax(260px, .8fr) minmax(0, 1.2fr);
            align-items: center;
            gap: clamp(30px, 5vw, 64px);
          }
          .brand-story__logo-lockup { align-content: center; }
          .brand-story__name { font-size: clamp(2.7rem, 6vw, 4.5rem); }
          .brand-story__pillars { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 700px) {
          .container { width: min(calc(100% - 32px), 1380px); }
          .section { padding-block: 76px; }
          .brand-story { padding-block: 82px; }
          .brand-story__identity { display: flex; min-height: 0; padding: 30px; gap: 54px; }
          .brand-story__logo-lockup { justify-items: center; text-align: center; }
          .brand-story__name { font-size: clamp(2.5rem, 11vw, 3.8rem); }
          .brand-story__identity-copy { max-width: none; }
          .brand-story__headline { font-size: clamp(2.7rem, 12vw, 4.4rem); }
          .brand-story__pillars { grid-template-columns: 1fr; }
        }

        @media (max-width: 460px) {
          .container { width: min(calc(100% - 24px), 1380px); }
          .brand-story__identity { min-height: 0; padding: 24px; border-radius: 26px; gap: 44px; }
          .brand-story__logo-frame { border-radius: 20px; }
          .brand-story__name { font-size: clamp(2.2rem, 12vw, 3.2rem); }
          .brand-story__headline { font-size: clamp(2.35rem, 12vw, 3.5rem); }
          .brand-story__copy > p { line-height: 1.75; }
        }

        .specialty-services { position:relative; overflow:hidden; background:linear-gradient(180deg,#f8f4ec 0%,#eef8f4 52%,#f8f4ec 100%); }
        .specialty-services::before { content:""; position:absolute; inset:0; background:radial-gradient(circle at 12% 18%,rgba(97,190,173,.18),transparent 28%),radial-gradient(circle at 88% 72%,rgba(8,51,67,.10),transparent 32%); pointer-events:none; }
        .specialty-services__intro { position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,1fr) minmax(280px,.65fr); align-items:end; gap:60px; margin-bottom:70px; }
        .specialty-services__intro h2 { max-width:840px; margin:14px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(2.8rem,5vw,5.6rem); font-weight:500; line-height:.98; letter-spacing:-.05em; color:#082e3f; }
        .specialty-services__intro > p { margin:0; color:#5d7374; line-height:1.85; }
        .specialty-service { position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,.9fr) minmax(440px,1.1fr); align-items:center; gap:80px; padding:72px 0; border-top:1px solid rgba(9,69,72,.11); }
        .specialty-service:last-child { border-bottom:1px solid rgba(9,69,72,.11); }
        .specialty-service--reverse .specialty-service__content { order:2; }
        .specialty-service--reverse .specialty-service__visual { order:1; }
        .specialty-service__number { display:inline-flex; align-items:center; gap:12px; color:#17837f; font-size:.72rem; font-weight:800; letter-spacing:.22em; text-transform:uppercase; }
        .specialty-service__number::before { content:""; width:40px; height:1px; background:#17837f; }
        .specialty-service__content h3 { max-width:650px; margin:20px 0 0; color:#082e3f; font-family:Georgia,"Times New Roman",serif; font-size:clamp(2.5rem,4vw,4.8rem); font-weight:500; line-height:1.02; letter-spacing:-.045em; }
        .specialty-service__content > p { max-width:650px; margin:24px 0 0; color:#5d7374; font-size:1.02rem; line-height:1.85; }
        .specialty-service__features { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px 24px; margin-top:30px; }
        .specialty-service__features span { display:flex; align-items:center; gap:10px; color:#274f53; font-size:.86rem; font-weight:700; }
        .specialty-service__features span svg { flex:0 0 auto; color:#1b9188; }
        .specialty-service__content > a { display:inline-flex; align-items:center; gap:10px; margin-top:34px; color:#0f7a75; font-weight:800; }
        .specialty-service__content > a svg { transition:transform .2s ease; }
        .specialty-service__content > a:hover svg { transform:translateX(5px); }
        .specialty-service__visual { position:relative; min-height:520px; display:grid; place-items:center; }
        .specialty-visual__halo { position:absolute; width:72%; aspect-ratio:1; border-radius:50%; background:radial-gradient(circle,#fff 0 23%,rgba(207,239,229,.74) 45%,rgba(87,181,166,.15) 68%,transparent 72%); box-shadow:0 45px 100px rgba(13,78,79,.14); }
        .specialty-visual__orbit { position:absolute; width:82%; aspect-ratio:1; border:1px solid rgba(31,143,135,.24); border-radius:50%; animation:premOrbit 24s linear infinite; }
        .specialty-visual__orbit::before,.specialty-visual__orbit::after { content:""; position:absolute; width:9px; height:9px; border-radius:50%; background:#42ad9f; box-shadow:0 0 18px rgba(66,173,159,.75); }
        .specialty-visual__orbit::before { top:-5px; left:49%; } .specialty-visual__orbit::after { right:8%; bottom:15%; width:7px; height:7px; }
        .specialty-visual__core { position:relative; z-index:2; display:grid; place-items:center; width:270px; height:270px; border-radius:42% 58% 53% 47% / 48% 44% 56% 52%; background:linear-gradient(145deg,#0a4d55,#249288); box-shadow:0 38px 80px rgba(10,72,76,.24); color:white; animation:logoFloat 5s ease-in-out infinite; }
        .specialty-visual__core svg { width:96px; height:96px; stroke-width:1.35; }
        .specialty-visual__badge { position:absolute; z-index:4; display:flex; align-items:center; gap:10px; padding:14px 16px; border:1px solid rgba(255,255,255,.75); border-radius:18px; background:rgba(255,255,255,.72); box-shadow:0 20px 45px rgba(11,78,78,.12); color:#174e52; backdrop-filter:blur(14px); font-size:.76rem; font-weight:800; }
        .specialty-visual__badge svg { color:#18877f; }
        .specialty-visual__badge--one { top:14%; left:2%; animation:chipFloat 4.3s ease-in-out infinite; }
        .specialty-visual__badge--two { right:1%; bottom:16%; animation:chipFloat 4.8s ease-in-out infinite .6s; }
        .specialty-visual__line { position:absolute; width:68%; height:1px; background:linear-gradient(90deg,transparent,rgba(52,151,142,.55),transparent); }
        .specialty-visual__line--one { transform:rotate(24deg); } .specialty-visual__line--two { transform:rotate(-20deg); }
        @media (max-width:1000px) { .specialty-services__intro,.specialty-service { grid-template-columns:1fr; gap:45px; } .specialty-service--reverse .specialty-service__content,.specialty-service--reverse .specialty-service__visual { order:initial; } .specialty-service__visual { min-height:470px; } }
        @media (max-width:620px) { .specialty-services__intro { gap:24px; margin-bottom:40px; } .specialty-service { padding:55px 0; } .specialty-service__features { grid-template-columns:1fr; } .specialty-service__visual { min-height:390px; } .specialty-visual__core { width:210px; height:210px; } .specialty-visual__core svg { width:72px; height:72px; } .specialty-visual__badge { padding:11px 12px; font-size:.66rem; } .specialty-visual__badge--one { left:0; top:12%; } .specialty-visual__badge--two { right:0; bottom:12%; } }

        @media (prefers-reduced-motion: reduce) { .hero-logo-stage *, .hero-logo-stage *::before, .hero-logo-stage *::after { animation:none !important; } }

        /* Premium interaction system */
        .site::before {
          content: "";
          position: fixed;
          left: var(--pointer-x, 50vw);
          top: var(--pointer-y, 50vh);
          width: 420px;
          height: 420px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 40;
          opacity: .15;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(91, 203, 188, .42), transparent 68%);
          mix-blend-mode: multiply;
          transition: opacity .25s ease;
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(34px) scale(.985);
          filter: blur(7px);
          transition:
            opacity .85s cubic-bezier(.2,.75,.2,1) var(--reveal-delay, 0ms),
            transform .85s cubic-bezier(.2,.75,.2,1) var(--reveal-delay, 0ms),
            filter .85s ease var(--reveal-delay, 0ms);
        }

        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        .hero-logo-stage__logo-wrap {
          translate: var(--parallax-x, 0) var(--parallax-y, 0);
          transition: translate .22s ease-out;
        }

        .hero-logo-stage__orbit--outer {
          translate: calc(var(--parallax-x, 0) * -.25) calc(var(--parallax-y, 0) * -.25);
        }

        .hero-logo-stage__orbit--inner {
          translate: calc(var(--parallax-x, 0) * .22) calc(var(--parallax-y, 0) * .22);
        }

        .service-card,
        .architecture-card,
        .specialty-service,
        .performance-item,
        .contact-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s ease, border-color .45s ease;
        }

        .service-card::before,
        .architecture-card::before,
        .specialty-service::before,
        .performance-item::before,
        .contact-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          pointer-events: none;
          z-index: -1;
          opacity: 0;
          background: radial-gradient(520px circle at 15% 5%, rgba(120, 220, 204, .2), transparent 45%);
          transition: opacity .45s ease;
        }

        .service-card:hover,
        .performance-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(10, 72, 78, .14);
        }

        .architecture-card:hover,
        .specialty-service:hover {
          transform: translateY(-7px);
          box-shadow: 0 36px 90px rgba(10, 72, 78, .14);
        }

        .service-card:hover::before,
        .architecture-card:hover::before,
        .specialty-service:hover::before,
        .performance-item:hover::before,
        .contact-card:hover::before { opacity: 1; }

        .service-card__icon,
        .architecture-card__icon,
        .specialty-visual__core {
          transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s ease;
        }

        .service-card:hover .service-card__icon,
        .architecture-card:hover .architecture-card__icon { transform: rotate(-7deg) scale(1.12); }

        .specialty-service:hover .specialty-visual__core {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 0 0 18px rgba(84, 190, 175, .08), 0 25px 55px rgba(13, 93, 91, .2);
        }

        .specialty-visual__orbit { animation: premOrbit 18s linear infinite; }
        .specialty-visual__badge { animation: chipFloat 4.6s ease-in-out infinite; }
        .specialty-visual__badge--two { animation-delay: .9s; }

        .service-card a svg,
        .architecture-card a svg,
        .specialty-service a svg,
        .button svg { transition: transform .25s ease; }
        .service-card a:hover svg,
        .architecture-card a:hover svg,
        .specialty-service a:hover svg,
        .button:hover svg { transform: translateX(5px); }

        .technology-strip__items span,
        .expertise-pill-list span,
        .project-card__tags span {
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }
        .technology-strip__items span:hover,
        .expertise-pill-list span:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(15, 92, 91, .1);
        }

        .architecture-node { animation: chipFloat 4.8s ease-in-out infinite; }
        .architecture-node--two { animation-delay: .7s; }
        .architecture-node--three { animation-delay: 1.4s; }

        @media (max-width: 760px) {
          .site::before { display: none; }
          .reveal-on-scroll { transform: translateY(22px); filter: blur(4px); }
          .service-card:hover, .architecture-card:hover, .specialty-service:hover, .performance-item:hover { transform: none; }
        }

        /* Refined service interactions: motion stays inside the section, never shifts the layout */
        .specialty-service {
          gap: clamp(52px, 7vw, 104px);
          padding-block: clamp(78px, 8vw, 126px);
          overflow: visible;
          transform: none !important;
          box-shadow: none !important;
        }
        .specialty-service::before { display: none; }
        .specialty-service__content { padding: clamp(12px, 2vw, 28px) 0; }
        .specialty-service__content h3 { margin-top: 18px; }
        .specialty-service__features { gap: 16px clamp(20px, 3vw, 34px); margin-top: 34px; }
        .specialty-service__features span {
          min-height: 34px;
          align-items: flex-start;
          line-height: 1.45;
        }
        .specialty-service__visual {
          min-height: clamp(430px, 42vw, 590px);
          border-radius: clamp(30px, 4vw, 54px);
          transition: background .4s ease, box-shadow .4s ease;
        }
        .specialty-service:hover .specialty-service__visual {
          background: radial-gradient(circle at center, rgba(255,255,255,.72), rgba(216,244,236,.2) 52%, transparent 72%);
          box-shadow: inset 0 0 0 1px rgba(29,139,131,.08), 0 28px 80px rgba(11,79,80,.09);
        }
        .specialty-service:hover .specialty-visual__core {
          transform: scale(1.045) rotate(2deg);
          box-shadow: 0 0 0 14px rgba(84,190,175,.07), 0 30px 68px rgba(13,93,91,.22);
        }
        .specialty-service:hover .specialty-visual__badge--one { transform: translateY(-5px); }
        .specialty-service:hover .specialty-visual__badge--two { transform: translateY(5px); }
        .specialty-visual__badge { transition: transform .35s ease, box-shadow .35s ease, background .35s ease; }
        .specialty-service:hover .specialty-visual__badge { background: rgba(255,255,255,.88); box-shadow: 0 22px 50px rgba(11,78,78,.15); }

        @media (prefers-reduced-motion: reduce) {
          .reveal-on-scroll, .reveal-on-scroll.is-visible {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }
          .specialty-visual__orbit, .specialty-visual__badge, .architecture-node { animation: none !important; }
        }


        /* Performance-first rendering: content is always visible. */
        .reveal-on-scroll,
        .reveal-on-scroll.is-visible {
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
          transition: none !important;
        }

        /* Avoid expensive full-page pointer tracking and compositing. */
        .site::before { display: none !important; }
        .hero-logo-stage__logo-wrap,
        .hero-logo-stage__orbit--outer,
        .hero-logo-stage__orbit--inner {
          translate: none !important;
        }

        /* Motion stays subtle on capable desktop devices. */
        @media (min-width: 761px) and (hover: hover) and (pointer: fine) {
          .specialty-service {
            transition: border-color .25s ease, background-color .25s ease;
          }
          .specialty-service:hover {
            transform: none !important;
            box-shadow: none !important;
          }
          .specialty-service:hover .specialty-visual__core {
            transform: scale(1.035);
            box-shadow: 0 28px 64px rgba(13, 93, 91, .18);
          }
        }

        /* Mobile performance mode: preserve the design without costly effects. */
        @media (max-width: 760px), (hover: none), (pointer: coarse) {
          .site *,
          .site *::before,
          .site *::after {
            animation: none !important;
            transition-duration: .16s !important;
            scroll-behavior: auto !important;
          }

          .site-header,
          .hero-float,
          .hero-logo-stage__status,
          .specialty-visual__badge,
          .about-brand-panel,
          .contact-card {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .hero { overflow: hidden; }
          .hero-logo-stage {
            min-height: 390px !important;
            perspective: none !important;
          }
          .hero-logo-stage__mesh,
          .hero-logo-stage__beam,
          .hero-logo-stage__orbit--inner,
          .platform-ring,
          .orbit-dot { display: none !important; }
          .hero-logo-stage__orbit--outer {
            width: 88% !important;
            opacity: .35;
          }
          .hero-logo-stage__logo-wrap { width: 72% !important; }
          .hero-logo-stage__logo {
            transform: scale(1.08) !important;
            filter: drop-shadow(0 22px 24px rgba(8,52,67,.18)) !important;
          }
          .hero-logo-stage__platform {
            width: 62% !important;
            height: 14% !important;
            box-shadow: 0 20px 40px rgba(21,91,88,.14) !important;
          }
          .hero-float {
            background: rgba(255,255,255,.94) !important;
            box-shadow: 0 10px 24px rgba(18,91,87,.09) !important;
          }

          .specialty-services__intro {
            margin-bottom: 20px !important;
          }
          .specialty-service {
            gap: 26px !important;
            padding: clamp(44px, 10vw, 64px) 0 !important;
            transform: none !important;
            box-shadow: none !important;
          }
          .specialty-service__content h3 {
            font-size: clamp(2.25rem, 11vw, 3.5rem) !important;
          }
          .specialty-service__content > p {
            margin-top: 18px !important;
            line-height: 1.72 !important;
          }
          .specialty-service__features {
            grid-template-columns: 1fr !important;
            gap: 11px !important;
            margin-top: 24px !important;
          }
          .specialty-service__visual {
            min-height: 300px !important;
            contain: layout paint;
          }
          .specialty-visual__halo {
            width: 76% !important;
            box-shadow: none !important;
            background: radial-gradient(circle,#fff 0 24%,rgba(207,239,229,.72) 48%,transparent 72%) !important;
          }
          .specialty-visual__orbit {
            width: 82% !important;
            opacity: .58;
          }
          .specialty-visual__line { display: none !important; }
          .specialty-visual__core {
            width: 170px !important;
            height: 170px !important;
            box-shadow: 0 22px 48px rgba(10,72,76,.18) !important;
          }
          .specialty-visual__core svg {
            width: 64px !important;
            height: 64px !important;
          }
          .specialty-visual__badge {
            padding: 10px 12px !important;
            border-radius: 14px !important;
            background: rgba(255,255,255,.96) !important;
            box-shadow: 0 8px 20px rgba(11,78,78,.08) !important;
          }

          .architecture-card__visual {
            min-height: 250px !important;
            contain: layout paint;
          }
          .architecture-orbit--two,
          .architecture-node--two,
          .architecture-node--three { display: none !important; }
          .architecture-logo { box-shadow: none !important; }

          .expertise-diagram__ring--two { display: none !important; }
          .performance-item:hover,
          .architecture-card:hover,
          .contact-card:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        }
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

          <a href="/contact" className="header-button">
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

        <a href="/contact" className="mobile-call-button" onClick={closeMenu}>
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
              <p className="hero-brand-tagline">Technology built around your business</p>
              <h1 className="hero-brand-name">
                Prem<span>Techs</span>
              </h1>

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

                <a href="/contact" className="button button--secondary">
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

              <div className="hero-logo-stage__status">
                <span />
                Powered by PremTechs
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

        <section className="brand-story" aria-labelledby="about-premtechs-title">
          <div className="container brand-story__shell">
            <div className="brand-story__identity">
              <div className="brand-story__logo-lockup">
                <span className="brand-story__logo-frame">
                  <img src={logo} alt="PremTechs symbol" />
                </span>
                <p className="brand-story__name">
                  Prem<span>Techs</span>
                </p>
              </div>

              <div className="brand-story__identity-copy">
                <strong>Technology that works as one</strong>
                <p>
                  One accountable partner for the systems that connect, protect,
                  and support your organization.
                </p>
              </div>
            </div>

            <div className="brand-story__copy">
              <p className="section-label section-label--light">About PremTechs</p>
              <h2 id="about-premtechs-title" className="brand-story__headline">
                <span>One technology partner.</span>
                <span>Every critical layer.</span>
                <span>Connected.</span>
              </h2>
              <p>
                PremTechs designs, secures, deploys, and supports complete technology
                environments across cloud, networking, cybersecurity, structured
                cabling, surveillance, communication systems, and managed IT. Our
                practical engineering approach gives organizations a reliable,
                scalable foundation that is easier to operate and ready to grow.
              </p>

              <div className="brand-story__pillars">
                <span>Cloud Infrastructure</span>
                <span>Network &amp; Security</span>
                <span>Cybersecurity</span>
                <span>Cabling &amp; Fiber</span>
                <span>Surveillance &amp; Communication</span>
                <span>Managed IT Services</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section specialty-services" id="services">
          <div className="container">
            <div className="specialty-services__intro">
              <div>
                <p className="section-label">Our services</p>
                <h2>Complete technology services, designed as one connected environment.</h2>
              </div>

              <p>
                PremTechs brings cloud, networking, cybersecurity, monitoring,
                physical infrastructure, surveillance, and communication systems
                together through one consistent strategy, delivery process, and
                long-term support model.
              </p>
            </div>

            {services.map((service, index) => (
              <article
                className={`specialty-service ${index % 2 === 1 ? "specialty-service--reverse" : ""}`}
                key={service.title}
              >
                <div className="specialty-service__content">
                  <span className="specialty-service__number">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="section-label">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="specialty-service__features">
                    {service.points.map((feature) => (
                      <span key={feature}>
                        <Check size={16} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a href="/contact">
                    Discuss this service
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className="specialty-service__visual" aria-hidden="true">
                  <div className="specialty-visual__halo" />
                  <div className="specialty-visual__orbit" />
                  <div className="specialty-visual__line specialty-visual__line--one" />
                  <div className="specialty-visual__line specialty-visual__line--two" />
                  <div className="specialty-visual__core">{service.icon}</div>
                  <span className="specialty-visual__badge specialty-visual__badge--one">
                    {service.badgeOne.icon}
                    {service.badgeOne.label}
                  </span>
                  <span className="specialty-visual__badge specialty-visual__badge--two">
                    {service.badgeTwo.icon}
                    {service.badgeTwo.label}
                  </span>
                </div>
              </article>
            ))}
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
                <h2>Reliable foundations for modern operations.</h2>
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

                    <a href="/contact">
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
              <p className="section-label">Strategy and delivery</p>

              <h2>Clear strategy and technology designed to move your business forward.</h2>

              <p>
                PremTechs delivers secure, reliable, and scalable solutions across
                cloud, networking, cybersecurity, surveillance, communications,
                and IT infrastructure. We manage every stage, from planning and
                implementation to testing, documentation, and ongoing support.
              </p>

              <a href="/contact" className="button button--primary">
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
              PremTechs builds secure, scalable, and future-ready technology
              environments around your business.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Company</h3>
              <a href="#about">About Us</a>
              <a href="#expertise">Expertise</a>
              <a href="/contact">Contact</a>
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