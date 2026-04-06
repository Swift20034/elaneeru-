import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HeartHandshake, MapPinned, Sparkles, MessageCircle } from "lucide-react";
import ownerPhoto from "@/assets/owner photo/WhatsApp Image 2026-04-06 at 1.15.26 PM.jpeg";

const easePremium = [0.22, 1, 0.36, 1] as const;

function OwnerHostPhoto({ src, alt }: { src: string; alt: string }) {
  const reduceMotion = useReducedMotion();

  const haloVariants = {
    rest: { opacity: 0.75, scale: 1 },
    hover: reduceMotion
      ? {}
      : {
          opacity: 1,
          scale: 1.04,
          transition: { duration: 0.55, ease: easePremium },
        },
  };

  const frameVariants = {
    rest: {
      y: 0,
      boxShadow: "0 25px 50px -12px hsl(var(--nature-deep) / 0.14)",
    },
    hover: reduceMotion
      ? {}
      : {
          y: -6,
          boxShadow:
            "0 36px 70px -14px hsl(var(--nature-deep) / 0.22), 0 0 0 1px hsl(var(--primary) / 0.18), 0 0 48px -8px hsl(var(--primary) / 0.15)",
          transition: { duration: 0.55, ease: easePremium },
        },
  };

  const imgVariants = {
    rest: { scale: 1 },
    hover: reduceMotion
      ? {}
      : {
          scale: 1.08,
          transition: { duration: 0.75, ease: easePremium },
        },
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: reduceMotion
      ? {}
      : {
          opacity: 1,
          transition: { duration: 0.45, ease: easePremium },
        },
  };

  const sheenVariants = {
    rest: { x: "-120%", opacity: 0 },
    hover: reduceMotion
      ? {}
      : {
          x: "120%",
          opacity: 0.35,
          transition: { duration: 0.85, ease: easePremium, delay: 0.08 },
        },
  };

  const containerVariants = {
    rest: {},
    hover: {
      transition: { staggerChildren: 0.05, delayChildren: 0 },
    },
  };

  return (
    <motion.div
      className="relative w-full max-w-[min(100%,20rem)] mx-auto lg:mx-0 lg:max-w-[280px] xl:max-w-[300px]"
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        variants={haloVariants}
        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-nature-light/10 to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="relative z-[1]">
        <motion.div
          className="relative rounded-2xl overflow-hidden ring-1 ring-border/60 will-change-transform"
          variants={frameVariants}
        >
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <motion.img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-center will-change-transform"
              variants={imgVariants}
              loading="lazy"
              width={480}
              height={600}
            />
          </div>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nature-deep/55 via-nature-deep/10 to-primary/10"
            variants={overlayVariants}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent"
            variants={overlayVariants}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-[45%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-18deg]"
            variants={sheenVariants}
            aria-hidden
          />
        </motion.div>
      </div>
      <div className="absolute -bottom-5 -left-2 sm:left-4 glass-panel rounded-2xl px-5 py-4 shadow-lg max-w-[240px] z-[2]">
        <p className="font-display text-2xl font-bold text-primary">6+ yrs</p>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">Hosting guests</p>
      </div>
    </motion.div>
  );
}

const highlights = [
  {
    icon: HeartHandshake,
    title: "Personal welcome",
    desc: "On arrival, you are looked after like family — not a room number.",
  },
  {
    icon: MapPinned,
    title: "Local know-how",
    desc: "Insider tips for waterfalls, treks, and quiet corners away from the crowds.",
  },
  {
    icon: Sparkles,
    title: "Malnad roots",
    desc: "Years of hosting travellers with the same care we show our own guests at home.",
  },
  {
    icon: MessageCircle,
    title: "Easy to reach",
    desc: "Questions before you book or during your stay — just message on WhatsApp.",
  },
];

const OwnerSection = () => (
  <section id="host" className="py-16 md:py-20 bg-background relative overflow-hidden">
    <div className="absolute top-24 right-0 w-80 h-80 rounded-full bg-nature-light/15 blur-3xl pointer-events-none" />
    <div className="absolute bottom-12 left-0 w-64 h-64 rounded-full bg-gold-accent/10 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-8 xl:gap-10 items-start lg:items-center">
        <ScrollReveal direction="left" className="text-left min-w-0">
          <span className="text-primary font-medium tracking-[0.15em] uppercase text-sm">Your Host</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            The Face Behind
            <br />
            <span className="italic text-primary">Elaneeru</span>
          </h2>
          <p className="mt-2 text-lg text-foreground font-medium">Chinthan — Host, Elaneeru Homestay</p>
          <blockquote className="mt-6 pl-5 border-l-2 border-primary/60 text-muted-foreground text-lg leading-relaxed italic">
            “I opened our doors so people could feel the real Malnad — the food, the mist, and the calm. When you stay
            with us, my job is simple: you leave rested, full, and already planning your next visit.”
          </blockquote>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From morning coffee on the estate to helping you plan the day’s walk or drive, you will meet the same person
            who answers your messages — consistency and warmth, every time.
          </p>
          <a
            href="https://wa.me/918660288690?text=Hi%20Chinthan%2C%20I%20have%20a%20question%20about%20Elaneeru%20Homestay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 glass-cta-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Message the host
          </a>
        </ScrollReveal>

        <ScrollReveal direction="right" className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-self-start">
          <OwnerHostPhoto
            src={ownerPhoto}
            alt="Chinthan, host of Elaneeru Homestay in Chikkamagaluru"
          />
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {highlights.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <div className="h-full glass-panel rounded-2xl p-6 hover:shadow-md hover:shadow-nature-deep/10 transition-all hover:-translate-y-0.5">
              <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OwnerSection;
