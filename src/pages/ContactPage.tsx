import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Cloud,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

import logo from "../assets/premtechs-logo.png";
import "../App.css";
import "./ContactPage.css";
import { FaWhatsapp } from "react-icons/fa";

type ContactFormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const services = [
  "Cloud Infrastructure",
  "Network and Security Architecture",
  "Cyber Security",
  "Cloud Migration",
  "Monitoring and Management",
  "Managed IT Services",
  "Other",
];

const initialFormData: ContactFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

/*
  Replace this link after creating your Calendly event.
  Example:
  https://calendly.com/premtechs/technology-consultation
*/
const CALENDLY_URL =
  "https://calendly.com/YOUR-CALENDLY-USERNAME/premtechs-consultation";

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const calendlyConfigured = useMemo(
    () => !CALENDLY_URL.includes("YOUR-CALENDLY-USERNAME"),
    [],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const updateField = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const nextErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your business email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      nextErrors.service = "Please choose a service.";
    }

    if (formData.message.trim().length < 20) {
      nextErrors.message =
        "Please provide at least 20 characters about your requirements.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    /*
      This first version opens the visitor's email application with
      a professionally formatted inquiry.

      Later, we can connect this form to Formspree, Resend, or a
      Vercel serverless function so it submits without opening email.
    */
    const subject = encodeURIComponent(
      `PremTechs inquiry — ${formData.service}`,
    );

    const body = encodeURIComponent(
      [
        "New PremTechs website inquiry",
        "",
        `Full name: ${formData.fullName}`,
        `Company: ${formData.companyName || "Not provided"}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "Not provided"}`,
        `Service: ${formData.service}`,
        "",
        "Project requirements:",
        formData.message,
      ].join("\n"),
    );

    await new Promise((resolve) => setTimeout(resolve, 650));

    window.location.href = `mailto:info@premtechs.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setSubmitting(false);
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setFormData(initialFormData);
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-container contact-navigation">
          <a href="/" className="brand" aria-label="PremTechs homepage">
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

          <nav
            className="contact-desktop-navigation"
            aria-label="Contact page navigation"
          >
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/#expertise">Expertise</a>
            <a href="/#projects">Projects</a>
            <a href="/#about">About Us</a>
          </nav>

          <a
            href="#schedule"
            className="contact-header-button"
          >
            Schedule a Call
            <ArrowRight size={17} />
          </a>

          <button
            type="button"
            className="contact-menu-button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div
        className={`contact-mobile-menu ${
          menuOpen ? "contact-mobile-menu--open" : ""
        }`}
      >
        <div className="contact-mobile-menu__header">
          <a href="/" className="brand">
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
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav>
          <a href="/#services">Services</a>
          <a href="/#solutions">Solutions</a>
          <a href="/#expertise">Expertise</a>
          <a href="/#projects">Projects</a>
          <a href="/#about">About Us</a>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>
            Schedule a Call
          </a>
        </nav>
      </div>

      <main>
        <section className="contact-hero">
          <div className="contact-orb contact-orb--one" />
          <div className="contact-orb contact-orb--two" />
          <div className="contact-grid-pattern" />

          <div className="contact-container contact-hero__grid">
            <div className="contact-hero__content">
              <a href="/" className="contact-back-link">
                <ArrowLeft size={17} />
                Back to PremTechs
              </a>

              <p className="contact-eyebrow">
                <span />
                Start a conversation
              </p>

              <h1>
                Let&apos;s build a stronger technology foundation.
              </h1>

              <p className="contact-hero__description">
                Tell us about your cloud, network, cybersecurity, or managed
                technology requirements. Our team will help you identify a
                practical and scalable next step.
              </p>

              <div className="contact-hero__benefits">
                <div>
                  <span>
                    <Check size={16} />
                  </span>

                  <div>
                    <strong>Focused consultation</strong>
                    <p>
                      A conversation centered on your real business and
                      technical requirements.
                    </p>
                  </div>
                </div>

                <div>
                  <span>
                    <Check size={16} />
                  </span>

                  <div>
                    <strong>Clear recommendations</strong>
                    <p>
                      Practical direction without unnecessary technical
                      complexity.
                    </p>
                  </div>
                </div>

                <div>
                  <span>
                    <Check size={16} />
                  </span>

                  <div>
                    <strong>Security-first thinking</strong>
                    <p>
                      Infrastructure planned with resilience and protection
                      built in.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-hero__visual" aria-hidden="true">
              <div className="contact-visual-ring contact-visual-ring--one" />
              <div className="contact-visual-ring contact-visual-ring--two" />

              <div className="contact-visual-center">
                <img src={logo} alt="" />
              </div>

              <span className="contact-visual-node contact-visual-node--cloud">
                <Cloud size={24} />
              </span>

              <span className="contact-visual-node contact-visual-node--network">
                <Network size={24} />
              </span>

              <span className="contact-visual-node contact-visual-node--security">
                <ShieldCheck size={24} />
              </span>

              <span className="contact-visual-node contact-visual-node--support">
                <Headphones size={24} />
              </span>
            </div>
          </div>
        </section>

        <section className="contact-main-section">
          <div className="contact-container contact-main-grid">
            <div className="contact-form-shell">
              <div className="contact-form-heading">
                <p className="contact-section-label">Project inquiry</p>
                <h2>Tell us what your organization needs.</h2>
                <p>
                  Complete the form and a PremTechs specialist will review your
                  requirements.
                </p>
              </div>

              {submitted ? (
                <div className="contact-success">
                  <span className="contact-success__icon">
                    <CheckCircle2 size={34} />
                  </span>

                  <p className="contact-section-label">
                    Inquiry prepared
                  </p>

                  <h3>Thank you, {formData.fullName.split(" ")[0]}.</h3>

                  <p>
                    Your email application should now open with your PremTechs
                    inquiry prepared. Send the message to complete your
                    request.
                  </p>

                  <button type="button" onClick={resetForm}>
                    Send another inquiry
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="contact-form-row">
                    <label className="contact-field">
                      <span>
                        Full name <strong>*</strong>
                      </span>

                      <div
                        className={`contact-input-shell ${
                          errors.fullName
                            ? "contact-input-shell--error"
                            : ""
                        }`}
                      >
                        <UserRound size={18} />

                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(event) =>
                            updateField("fullName", event.target.value)
                          }
                          placeholder="Your full name"
                          autoComplete="name"
                        />
                      </div>

                      {errors.fullName && (
                        <small>{errors.fullName}</small>
                      )}
                    </label>

                    <label className="contact-field">
                      <span>Company name</span>

                      <div className="contact-input-shell">
                        <Building2 size={18} />

                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(event) =>
                            updateField(
                              "companyName",
                              event.target.value,
                            )
                          }
                          placeholder="Your organization"
                          autoComplete="organization"
                        />
                      </div>
                    </label>
                  </div>

                  <div className="contact-form-row">
                    <label className="contact-field">
                      <span>
                        Business email <strong>*</strong>
                      </span>

                      <div
                        className={`contact-input-shell ${
                          errors.email
                            ? "contact-input-shell--error"
                            : ""
                        }`}
                      >
                        <Mail size={18} />

                        <input
                          type="email"
                          value={formData.email}
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                          placeholder="name@company.com"
                          autoComplete="email"
                        />
                      </div>

                      {errors.email && <small>{errors.email}</small>}
                    </label>

                    <label className="contact-field">
                      <span>Phone number</span>

                      <div className="contact-input-shell">
                        <Phone size={18} />

                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(event) =>
                            updateField("phone", event.target.value)
                          }
                          placeholder="+1 000 000 0000"
                          autoComplete="tel"
                        />
                      </div>
                    </label>
                  </div>

                  <label className="contact-field">
                    <span>
                      Service required <strong>*</strong>
                    </span>

                    <div
                      className={`contact-input-shell contact-select-shell ${
                        errors.service
                          ? "contact-input-shell--error"
                          : ""
                      }`}
                    >
                      <Sparkles size={18} />

                      <select
                        value={formData.service}
                        onChange={(event) =>
                          updateField("service", event.target.value)
                        }
                      >
                        <option value="">Choose a service</option>

                        {services.map((service) => (
                          <option value={service} key={service}>
                            {service}
                          </option>
                        ))}
                      </select>

                      <ChevronDown size={18} />
                    </div>

                    {errors.service && <small>{errors.service}</small>}
                  </label>

                  <label className="contact-field">
                    <span>
                      Project requirements <strong>*</strong>
                    </span>

                    <div
                      className={`contact-input-shell contact-textarea-shell ${
                        errors.message
                          ? "contact-input-shell--error"
                          : ""
                      }`}
                    >
                      <FaWhatsapp size={21} />
                      <textarea
                        rows={6}
                        value={formData.message}
                        onChange={(event) =>
                          updateField("message", event.target.value)
                        }
                        placeholder="Tell us about your current environment, challenges, priorities, locations, timeline, or project goals."
                      />
                    </div>

                    <div className="contact-field__footer">
                      {errors.message ? (
                        <small>{errors.message}</small>
                      ) : (
                        <small>
                          Include enough detail for us to understand the
                          request.
                        </small>
                      )}

                      <small>{formData.message.length} characters</small>
                    </div>
                  </label>

                  <button
                    type="submit"
                    className="contact-submit-button"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="contact-button-spinner" />
                        Preparing inquiry...
                      </>
                    ) : (
                      <>
                        Send Project Inquiry
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="contact-form-note">
                    By submitting this inquiry, you agree that PremTechs may
                    contact you about your request.
                  </p>
                </form>
              )}
            </div>

            <aside className="contact-information">
              <div className="contact-information__intro">
                <p className="contact-section-label">Contact details</p>
                <h2>Speak with PremTechs.</h2>
                <p>
                  Contact our team directly or schedule a consultation at a
                  convenient time.
                </p>
              </div>

              <div className="contact-detail-list">
                <a href="mailto:info@premtechs.com">
                  <span>
                    <Mail size={21} />
                  </span>

                  <div>
                    <small>Email us</small>
                    <strong>info@premtechs.com</strong>
                  </div>

                  <ArrowRight size={18} />
                </a>

                <a href="tel:+201055035575">
                  <span>
                    <Phone size={21} />
                  </span>

                  <div>
                    <small>Call us</small>
                    <strong>+20 1055035575</strong>
                  </div>

                  <ArrowRight size={18} />
                </a>


                <a
                  href="https://wa.me/971585193371"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaWhatsapp size={21} />
                  </span>

                  <div>
                    <small>WhatsApp</small>
                   <strong>+971 58 519 3371</strong>
                  </div>

                  <ArrowRight size={18} />
                </a>
                

                <div>
                  <span>
                    <Clock3 size={21} />
                  </span>

                  <div>
                    <small>Business hours</small>
                    <strong>Monday–Friday, 9:00 AM–6:00 PM</strong>
                  </div>
                </div>

                <div>
                  <span>
                    <MapPin size={21} />
                  </span>

                  <div>
                    <small>Service availability</small>
                    <strong>Remote and on-site consultation</strong>
                  </div>
                </div>
              </div>

              <div className="contact-response-note">
                <CheckCircle2 size={22} />

                <div>
                  <strong>Professional response</strong>
                  <p>
                    Business inquiries are normally reviewed within one
                    business day.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="schedule-section" id="schedule">
          <div className="contact-container schedule-shell">
            <div className="schedule-copy">
              <p className="contact-section-label contact-section-label--light">
                Schedule a consultation
              </p>

              <h2>Choose a time to discuss your technology goals.</h2>

              <p>
                Book a focused 30-minute consultation with PremTechs to discuss
                your current environment, business priorities, and possible
                next steps.
              </p>

              <div className="schedule-features">
                <span>
                  <Check size={16} />
                  30-minute consultation
                </span>

                <span>
                  <Check size={16} />
                  Google Meet or Microsoft Teams
                </span>

                <span>
                  <Check size={16} />
                  Automatic confirmation
                </span>
              </div>
            </div>

            <div className="schedule-card">
              <span className="schedule-card__icon">
                <CalendarDays size={30} />
              </span>

              <p className="contact-section-label">
                PremTechs consultation
              </p>

              <h3>Technology Discovery Call</h3>

              <p>
                Select a convenient date and time for an introductory
                conversation with our team.
              </p>

              <div className="schedule-card__details">
                <span>
                  <Clock3 size={17} />
                  30 minutes
                </span>

                <span>
                  <Network size={17} />
                  Online meeting
                </span>
              </div>

              {calendlyConfigured ? (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Available Times
                  <ArrowRight size={18} />
                </a>
              ) : (
                <div className="schedule-placeholder">
                  <strong>Calendly setup required</strong>
                  <p>
                    Create your Calendly event, then replace the
                    CALENDLY_URL value near the top of this file.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="contact-footer">
        <div className="contact-container contact-footer__content">
          <a href="/" className="brand">
            <span className="brand__symbol brand__symbol--footer">
              <img src={logo} alt="PremTechs logo" />
            </span>

            <span className="brand__text">
              <strong>
                Prem<span>Techs</span>
              </strong>
              <small>Cloud • Network • Security</small>
            </span>
          </a>

          <p>
            © {new Date().getFullYear()} PremTechs. All rights reserved.
          </p>

          <div>
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/#about">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;