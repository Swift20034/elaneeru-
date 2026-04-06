import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { TreePine, Waves, Wind, Heart } from "lucide-react";
import riverImg from "@/assets/river.jpg";

const experiences = [
  {
    icon: TreePine,
    title: "Estate Walks",
    desc: "Stroll through lush coffee and areca plantations, breathing in the fresh mountain air.",
  },
  {
    icon: Waves,
    title: "River Views",
    desc: "Sit by the gentle river and let the sound of flowing water wash away your worries.",
  },
  {
    icon: Wind,
    title: "Pure Tranquility",
    desc: "No horns, no traffic — just birdsong, rustling leaves, and complete peace.",
  },
  {
    icon: Heart,
    title: "Reconnect",
    desc: "Unplug from the digital world and rediscover the joy of simple living.",
  },
];

const ExperiencesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="experiences" ref={sectionRef} className="relative py-16 md:py-20 overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
        <img src={riverImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
        <div className="absolute inset-0 bg-foreground/55 backdrop-blur-md" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-nature-light font-medium tracking-[0.15em] uppercase text-sm">What Awaits You</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
              Experiences That <span className="italic text-nature-light">Stay Forever</span>
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">
              More than a stay — it's a journey into the heart of Malnad's untouched beauty.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 0.12}>
              <div className="glass-panel-light rounded-2xl p-8 hover:bg-white/[0.14] transition-all hover:-translate-y-1 group h-full">
                <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/10">
                  <exp.icon className="text-nature-light" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">{exp.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
