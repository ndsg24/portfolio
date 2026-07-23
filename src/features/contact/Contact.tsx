import { m } from "framer-motion";
import { ArrowUpRight, Languages, MessageCircle } from "lucide-react";
import { GitHubLogo } from "../../shared/components/BrandIcons/BrandIcons";
import { fadeUp, stagger } from "../../shared/motion/animation";
import { usePortfolio } from "../../app/providers/usePortfolio";
import "./Contact.css";

function Contact() {
  const { t } = usePortfolio();
  return (
    <section className="contact-section" id="contact">
      <m.div
        className="contact-band"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <div aria-hidden="true" className="contact-index">
          {t("contact.backdrop")}
        </div>
        <m.div className="contact-copy" variants={fadeUp}>
          <p className="eyebrow">{t("nav.contact")}</p>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.text")}</p>
        </m.div>
        <m.div className="contact-connect" variants={fadeUp}>
          <a
            className="contact-primary"
            href="https://www.linkedin.com/in/nelson-daniel-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-primary-icon">
              <MessageCircle size={22} aria-hidden="true" />
            </span>
            <span>
              <small>{t("contact.cta")}</small>
              <strong>LinkedIn</strong>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <a
              className="icon-link"
              href="https://github.com/ndsg24"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogo />
              GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <span className="contact-availability">
              <span aria-hidden="true" />
              {t("nav.available")}
            </span>
          </div>
          <div className="contact-languages">
            <Languages size={18} aria-hidden="true" />
            <span>{t("contact.languagesLabel")}</span>
            <strong>{t("contact.languages")}</strong>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}

export default Contact;
