import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Coffee, Sun, Cookie, Moon } from "lucide-react";
import foodImg from "@/assets/food.jpg";

const easePremium = [0.22, 1, 0.36, 1] as const;

function FoodHeroImage({ src, alt }: { src: string; alt: string }) {
  const reduceMotion = useReducedMotion();

  const haloVariants = {
    rest: { opacity: 0.6, scale: 1 },
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
      boxShadow: "0 25px 50px -12px hsl(var(--nature-deep) / 0.14)",
    },
    hover: reduceMotion
      ? {}
      : {
          y: -8,
          boxShadow:
            "0 40px 72px -16px hsl(var(--nature-deep) / 0.22), 0 0 0 1px hsl(var(--primary) / 0.2), 0 0 52px -10px hsl(var(--primary) / 0.16)",
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

  const vignetteVariants = {
    rest: { opacity: 1 },
    hover: reduceMotion
      ? {}
      : {
          opacity: 0.88,
          transition: { duration: 0.45, ease: easePremium },
        },
  };

  const warmthVariants = {
    rest: { opacity: 0 },
    hover: reduceMotion
      ? {}
      : {
          opacity: 1,
          transition: { duration: 0.5, ease: easePremium },
        },
  };

  const glossVariants = {
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
          opacity: 0.32,
          transition: { duration: 0.85, ease: easePremium, delay: 0.06 },
        },
  };

  const captionVariants = {
    rest: { y: 0 },
    hover: reduceMotion
      ? {}
      : {
          y: -4,
          transition: { duration: 0.5, ease: easePremium },
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
      <div className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-nature-light/15 to-transparent pointer-events-none" />
      <motion.div
        variants={haloVariants}
        className="absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-primary/16 via-amber-500/8 to-transparent pointer-events-none"
        aria-hidden
      />
      <motion.div
        className="relative rounded-2xl overflow-hidden ring-1 ring-border/45 will-change-transform"
        variants={frameVariants}
      >
        <div className="h-[450px] w-full overflow-hidden bg-muted">
          <motion.img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-center will-change-transform"
            variants={imgVariants}
            loading="lazy"
            width={1024}
            height={768}
          />
        </div>
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-foreground/35 via-foreground/10 to-transparent"
          variants={vignetteVariants}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/28 via-primary/5 to-transparent"
          variants={warmthVariants}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent"
          variants={glossVariants}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/22 to-transparent skew-x-[-14deg]"
          variants={sheenVariants}
          aria-hidden
        />
        <motion.div
          className="absolute bottom-6 left-6 right-6 z-10"
          variants={captionVariants}
        >
          <div className="glass-panel rounded-xl p-4 shadow-lg ring-1 ring-primary/10">
            <p className="font-display text-foreground font-semibold">4 Meals Daily • Veg & Non-Veg</p>
            <p className="text-sm text-muted-foreground">Authentic Malnad cuisine, freshly prepared</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const meals = [
  { icon: Coffee, name: "Breakfast", desc: "Fresh dosas, idli, upma & more" },
  { icon: Sun, name: "Lunch", desc: "Traditional Malnad thali with rice & curries" },
  { icon: Cookie, name: "Snacks", desc: "Evening tea with local delicacies" },
  { icon: Moon, name: "Dinner", desc: "Homestyle comfort food to end your day" },
];

const FoodSection = () => (
  <section id="food" className="py-16 md:py-20 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-nature-light/20 to-transparent" />

    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-[0.15em] uppercase text-sm">Taste of Malnad</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Food That Feels Like <span className="italic text-primary">Home</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every meal is prepared with love using fresh, local ingredients — served the traditional way on banana leaves.
            Both vegetarian and non-vegetarian options available.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Meals grid */}
        <div className="grid grid-cols-2 gap-4">
          {meals.map((meal, i) => (
            <ScrollReveal key={meal.name} delay={i * 0.1}>
              <div className="glass-subtle rounded-2xl p-6 hover:border-border/55 transition-colors group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <meal.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{meal.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{meal.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Food image */}
        <ScrollReveal direction="right">
          <FoodHeroImage
            src={foodImg}
            alt="Traditional Malnad home-cooked meal served on banana leaf at Elaneeru Homestay"
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default FoodSection;
