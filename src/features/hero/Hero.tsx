import { useRef } from "react";
import {
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { fadeUp, stagger } from "../../shared/motion/animation";
import { usePortfolio } from "../../app/providers/usePortfolio";
import "./Hero.css";

const heroPortraitSmallSrc = `${import.meta.env.BASE_URL}hero-portrait-160.webp`;

/* Hero portrait temporarily disabled.
const heroPortraitMediumSrc = `${import.meta.env.BASE_URL}hero-portrait-480.webp`;
const heroPortraitLargeSrc = `${import.meta.env.BASE_URL}hero-portrait-960.webp`;
*/

function Hero() {
  const { t } = usePortfolio();
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 28,
    mass: 0.22,
    stiffness: 115,
  });
  const watermarkY = useTransform(
    smoothProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -34],
  );
  const watermarkScale = useTransform(
    smoothProgress,
    [0, 1],
    [1.025, reduceMotion ? 1.025 : 2.7],
  );
  const watermarkOpacity = useTransform(
    smoothProgress,
    [0, 0.48, 0.92],
    [0.075, reduceMotion ? 0.075 : 0.095, reduceMotion ? 0.075 : 0],
  );
  const roleOpacity = useTransform(
    smoothProgress,
    [0, 0.5, 0.86],
    [0.78, reduceMotion ? 0.78 : 0.58, reduceMotion ? 0.78 : 0],
  );
  const introY = useTransform(
    smoothProgress,
    [0, 0.82],
    [0, reduceMotion ? 0 : -42],
  );
  const introOpacity = useTransform(
    smoothProgress,
    [0, 0.72],
    [1, reduceMotion ? 1 : 0.16],
  );
  const titleY = useTransform(
    smoothProgress,
    [0, 0.9],
    [0, reduceMotion ? 0 : -30],
  );
  const titleOpacity = useTransform(
    smoothProgress,
    [0, 0.84],
    [1, reduceMotion ? 1 : 0.42],
  );

  return (
    <m.section className="hero" id="home" ref={heroRef}>
      <m.div
        className="hero-watermark"
        aria-hidden="true"
        style={{
          scale: watermarkScale,
          x: "calc(-50% - 1vw)",
          y: watermarkY,
        }}
      >
        <m.span
          className="hero-watermark-name"
          style={{ opacity: watermarkOpacity }}
        >
          NELSON
        </m.span>
        <m.span className="hero-role-line" style={{ opacity: roleOpacity }}>
          {t("hero.eyebrow")}
        </m.span>
      </m.div>

      <m.div
        className="hero-intro"
        initial="hidden"
        animate="show"
        style={{ opacity: introOpacity, y: introY }}
        variants={stagger}
      >
        <m.p variants={fadeUp}>{t("hero.statement")}</m.p>
        <m.a href="#work" variants={fadeUp}>
          {t("hero.ctaSecondary")}
          <ArrowUpRight size={15} aria-hidden="true" />
        </m.a>
      </m.div>

      {/* Hero portrait temporarily disabled.
        <m.div
          className="hero-portrait-depth"
          aria-hidden="true"
          style={{ y: portraitY }}
        >
          <m.div
            className="hero-portrait"
            initial={{ opacity: 0, y: 38, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              alt=""
              decoding="async"
              fetchPriority="high"
              height={1701}
              sizes="(max-width: 680px) 58vw, (max-width: 960px) 38vw, 500px"
              src={heroPortraitMediumSrc}
              srcSet={`${heroPortraitMediumSrc} 480w, ${heroPortraitLargeSrc} 960w`}
              width={960}
            />
          </m.div>
        </m.div>
      */}

      <m.div
        className="hero-title-wrap"
        initial="hidden"
        animate="show"
        style={{ opacity: titleOpacity, y: titleY }}
        variants={stagger}
      >
        <m.span className="hero-year" variants={fadeUp}>
          ©2026
        </m.span>
        <m.h1 className="hero-title" variants={fadeUp}>
          <span className="title-given">Nelson Daniel</span>
          <span className="title-outline">Silva Gutierrez</span>
        </m.h1>
      </m.div>

      <m.a
        className="hero-contact-card"
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.64 }}
      >
        <span className="hero-contact-thumb">
          <img
            alt=""
            decoding="async"
            height={283}
            src={heroPortraitSmallSrc}
            width={160}
          />
        </span>
        <span className="hero-contact-copy">
          <small>{t("hero.ctaPrimary")}</small>
          <strong>Nelson Daniel</strong>
          <span>Full Stack / Tech Lead</span>
        </span>
        <span className="hero-contact-arrow">
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </m.a>

      <span className="hero-corner hero-corner-nw" aria-hidden="true">
        +
      </span>
      <span className="hero-corner hero-corner-ne" aria-hidden="true">
        +
      </span>
      <span className="hero-corner hero-corner-sw" aria-hidden="true">
        +
      </span>
      <span className="hero-corner hero-corner-se" aria-hidden="true">
        +
      </span>
      <Asterisk className="hero-spark" size={15} aria-hidden="true" />
    </m.section>
  );
}

export default Hero;
