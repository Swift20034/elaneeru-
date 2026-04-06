import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Users, IndianRupee, Clock, Utensils } from "lucide-react";
import aboutHeroImg from "@/assets/stay photos/WhatsApp Image 2026-04-05 at 9.35.48 PM.jpeg";

const easePremium = [0.22, 1, 0.36, 1] as const;

function AboutHeroImage({ src, alt }: { src: string; alt: string }) {
  const reduceMotion = useReducedMotion();

  const haloVariants = {
    rest: { opacity: 0.65, scale: 1 },
    hover: reduceMotion
      ? {}
      : {
          opacity: 1,
          scale: 1.03,
          transition: { duration: 0.55, ease: easePremium },
        },
  };

  const frameVariants = {
    rest: {
      y: 0,
      boxShadow: "0 25px 50px -12px hsl(var(--nature-deep) / 0.12)",
    },
    hover: reduceMotion
      ? {}
      : {
          y: -8,
          boxShadow:
            "0 40px 72px -16px hsl(var(--nature-deep) / 0.24), 0 0 0 1px hsl(var(--primary) / 0.22), 0 0 56px -10px hsl(var(--primary) / 0.18)",
          transition: { duration: 0.55, ease: easePremium },
        },
  };

  const imgVariants = {
    rest: { scale: 1 },
    hover: reduceMotion
      ? {}
      : {
          scale: 1.07,
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
          opacity: 0.28,
          transition: { duration: 0.85, ease: easePremium, delay: 0.06 },
        },
  };

  const containerVariants = {
    rest: {},
    hover: { transition: { staggerChildren: 0.04, delayChildren: 0 } },
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-nature-light/20 to-transparent rounded-3xl pointer-events-none" />
      <motion.div
        variants={haloVariants}
        className="absolute -inset-2 rounded-[1.35rem] bg-gradient-to-br from-primary/18 via-nature-light/12 to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10">
        <motion.div
          className="relative rounded-2xl overflow-hidden ring-1 ring-border/50 will-change-transform"
          variants={frameVariants}
        >
          <div className="h-[500px] w-full overflow-hidden bg-muted">
            <motion.img
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-center will-change-transform"
              variants={imgVariants}
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nature-deep/50 via-nature-deep/8 to-primary/8"
            variants={overlayVariants}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
            variants={overlayVariants}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-[42%] bg-gradient-to-r from-transparent via-white/18 to-transparent skew-x-[-16deg]"
            variants={sheenVariants}
            aria-hidden
          />
        </motion.div>
      </div>
      <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl z-20">
        <div className="text-3xl font-display font-bold">6+</div>
        <div className="text-xs uppercase tracking-wider opacity-80">Years of Love</div>
      </div>
    </motion.div>
  );
}

const highlights = [
  { icon: Users, label: "Guests", value: "Up to 60", desc: "Comfortable accommodation" },
  { icon: IndianRupee, label: "Per Person", value: "₹1,500–₹2,000", desc: "All meals included" },
  { icon: Clock, label: "Experience", value: "6+ Years", desc: "Trusted by hundreds" },
  { icon: Utensils, label: "Meals", value: "4 Daily", desc: "Veg & Non-Veg options" },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-20 bg-nature-mist relative overflow-hidden">
    {/* Decorative bg */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-nature-light/10 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-nature-light/10 blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Image */}
        <ScrollReveal direction="left">
          <AboutHeroImage
            src={aboutHeroImg}
            alt="Elaneeru Homestay — welcoming spaces and stay experience in Chikkamagaluru"
          />
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal direction="right">
          <span className="text-primary font-medium tracking-[0.15em] uppercase text-sm">Our Story</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            A Home Away<br />
            <span className="italic text-primary">From Home</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Nestled in the misty hills of Chikkamagaluru, Elaneeru Homestay has been welcoming guests for over six beautiful years. 
            What started as a family's love for sharing the magic of Malnad has grown into a cherished retreat for travelers 
            seeking peace, authentic food, and the warmth of a real home.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Surrounded by coffee plantations, areca palms, and the gentle sounds of nature — every moment here is a reminder 
            to slow down, breathe deep, and reconnect with what truly matters.
          </p>
        </ScrollReveal>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
        {highlights.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.1}>
            <div className="glass-panel rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-nature-deep/10 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={22} />
              </div>
              <div className="font-display text-xl font-bold text-foreground">{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
