import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideoLoop from "@/assets/hero section/WhatsApp Video 2026-04-06 at 8.16.02 AM.mp4";
import heroVideoIntro from "@/assets/hero section/WhatsApp Video 2026-04-05 at 10.05.28 PM.mp4";

/** Intro clip once, then main clip loops continuously. */
function HeroBackgroundVideo({ poster }: { poster: string }) {
  const [phase, setPhase] = useState<"intro" | "loop">("intro");
  const isLoopPhase = phase === "loop";
  const src = isLoopPhase ? heroVideoLoop : heroVideoIntro;

  return (
    <video
      key={phase}
      className="w-full h-full min-h-full min-w-full object-cover"
      autoPlay
      muted
      loop={isLoopPhase}
      playsInline
      poster={poster}
      preload="auto"
      aria-hidden
      onEnded={() => {
        if (!isLoopPhase) setPhase("loop");
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen min-h-dvh overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {reduceMotion ? (
          <img
            src={heroBg}
            alt="Elaneeru Homestay surrounded by lush green coffee plantations in Chikkamagaluru"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            fetchpriority="high"
          />
        ) : (
          <HeroBackgroundVideo poster={heroBg} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-nature-light/40 animate-float" />
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-nature-light/30 animate-float-delayed" />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-gold-accent/20 animate-pulse-soft" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen min-h-dvh flex flex-col items-center justify-center text-center px-6 font-bold"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <MapPin size={16} className="text-nature-light" />
          <span className="text-nature-light text-sm font-bold tracking-[0.2em] uppercase">
            Chikkamagaluru, Karnataka
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground max-w-4xl leading-[1.08] tracking-tight"
        >
          Experience Nature at{" "}
          <span className="italic text-nature-light font-bold">Elaneeru</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl font-bold leading-relaxed"
        >
          Where peace, greenery, and comfort come together in the heart of the Western Ghats
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/918660288690?text=Hi%2C%20I%20want%20to%20book%20a%20stay%20at%20Elaneeru%20Homestay"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-cta-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Your Stay on WhatsApp
          </a>
          <a
            href="#about"
            className="border border-primary-foreground/40 bg-primary-foreground/10 backdrop-blur-md text-primary-foreground px-8 py-4 rounded-full text-base font-bold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-primary-foreground/18 transition-all"
          >
            Explore More
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
