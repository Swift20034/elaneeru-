import ScrollReveal from "./ScrollReveal";
import { MapPin, Mountain, Droplets, Landmark, Sunrise } from "lucide-react";

const attractions = [
  { name: "Elaneeru Waterfalls", distance: "500 meters", icon: Droplets, type: "waterfall" },
  { name: "Nethravathi Trek", distance: "Nearby", icon: Mountain, type: "trek" },
  { name: "Kudremukh Trek", distance: "Popular", icon: Mountain, type: "trek" },
  { name: "Bandaje Trek", distance: "Must-do", icon: Mountain, type: "trek" },
  { name: "Gangadi Kallu Trek", distance: "Nearby", icon: Mountain, type: "trek" },
  { name: "Kuranjal Trek", distance: "Nearby", icon: Mountain, type: "trek" },
  { name: "Hasiru Gudda Morning Viewpoint", distance: "Sunrise views", icon: Sunrise, type: "viewpoint" },
  { name: "Ranijari Trek & Falls", distance: "Scenic", icon: Droplets, type: "waterfall" },
  { name: "Hornadu Temple", distance: "Sacred", icon: Landmark, type: "temple" },
  { name: "Kalaseshwara Temple", distance: "Historic", icon: Landmark, type: "temple" },
];

const AttractionsSection = () => (
  <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background via-nature-mist/48 to-nature-pale/38">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,hsl(var(--primary)/0.1),transparent_55%)] pointer-events-none" />
    <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-nature-light/25 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="glass-explore-shell rounded-3xl p-6 sm:p-8 md:p-10 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm drop-shadow-sm">
              Explore Around
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Adventures & <span className="italic text-primary">Sacred Places</span>
            </h2>
            <p className="mt-4 text-foreground/75 text-base md:text-lg">
              From waterfalls just steps away to epic treks and ancient temples — there's magic in every direction.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {attractions.map((place, i) => (
            <ScrollReveal key={place.name} delay={i * 0.08}>
              <div className="glass-panel-green rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-nature-deep/12 group">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-white/40 shadow-sm backdrop-blur-sm ${
                    place.type === "waterfall"
                      ? "bg-sky-100/80 text-sky-600"
                      : place.type === "trek"
                        ? "bg-primary/15 text-primary"
                        : place.type === "viewpoint"
                          ? "bg-amber-100/85 text-amber-700"
                          : "bg-accent/25 text-accent"
                  }`}
                >
                  <place.icon size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {place.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-foreground/50 shrink-0" />
                    <span className="text-xs text-foreground/65">{place.distance}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AttractionsSection;
