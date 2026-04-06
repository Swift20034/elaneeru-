import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Amazing peaceful stay — felt like home. The food was beyond delicious, and waking up to misty mountain views was pure magic.",
    name: "Priya S.",
    from: "Bangalore",
  },
  {
    text: "Best place to relax away from city life. The family was so warm and welcoming. Already planning my next trip!",
    name: "Rahul M.",
    from: "Mumbai",
  },
  {
    text: "The Malnad-style food alone is worth the trip. Fresh, authentic, and made with so much love. We felt completely at peace here.",
    name: "Anjali K.",
    from: "Mysore",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-20 bg-nature-mist">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-[0.15em] uppercase text-sm">Guest Stories</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Words From <span className="italic text-primary">Our Guests</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((review, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="glass-panel rounded-2xl p-8 hover:shadow-lg transition-shadow relative h-full flex flex-col">
              <Quote className="text-nature-light/30 absolute top-6 right-6" size={32} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold-accent text-gold-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed flex-1 italic">"{review.text}"</p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="font-semibold text-foreground">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.from}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
