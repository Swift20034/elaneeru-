import ScrollReveal from "./ScrollReveal";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background via-nature-mist/40 to-nature-pale/50">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,hsl(var(--primary)/0.14),transparent_55%)] pointer-events-none" />
    <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-primary/12 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-nature-deep/18 blur-3xl pointer-events-none" />
    <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-nature-light/25 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto glass-contact-shell rounded-3xl p-6 sm:p-8 md:p-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm drop-shadow-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Ready for Your <span className="italic text-primary">Escape?</span>
            </h2>
            <p className="mt-4 text-foreground/75 text-lg">
              Reach out to us — we're just a message away from making your dream getaway happen.
            </p>
          </div>
        </ScrollReveal>

        {/* Main CTA */}
        <ScrollReveal>
          <a
            href="https://wa.me/918660288690?text=Hi%2C%20I%20want%20to%20book%20a%20stay%20at%20Elaneeru%20Homestay"
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-contact-whatsapp text-primary-foreground rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-nature-deep/30 transition-all hover:-translate-y-1 group ring-1 ring-primary-foreground/10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 group-hover:scale-110 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-display text-2xl font-bold">Book on WhatsApp</span>
            </div>
            <p className="text-primary-foreground/80">Tap to chat with us instantly • +91 86602 88690</p>
          </a>
        </ScrollReveal>

        {/* Other contacts */}
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <ScrollReveal delay={0.1}>
            <a href="tel:+918660288690" className="glass-panel-green rounded-xl p-5 text-center hover:shadow-md hover:border-primary/40 transition-all block">
              <Phone className="mx-auto text-primary mb-2" size={22} />
              <div className="font-medium text-foreground text-sm">Call Us</div>
              <div className="text-xs text-muted-foreground mt-1">+91 86602 88690</div>
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a href="mailto:chinthansrgowda@gmail.com" className="glass-panel-green rounded-xl p-5 text-center hover:shadow-md hover:border-primary/40 transition-all block">
              <Mail className="mx-auto text-primary mb-2" size={22} />
              <div className="font-medium text-foreground text-sm">Email</div>
              <div className="text-xs text-muted-foreground mt-1 truncate">chinthansrgowda@gmail.com</div>
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a href="https://www.instagram.com/elaneer._.homestay/" target="_blank" rel="noopener noreferrer" className="glass-panel-green rounded-xl p-5 text-center hover:shadow-md hover:border-primary/40 transition-all block">
              <Instagram className="mx-auto text-primary mb-2" size={22} />
              <div className="font-medium text-foreground text-sm">Instagram</div>
              <div className="text-xs text-muted-foreground mt-1">@elaneer._.homestay</div>
            </a>
          </ScrollReveal>
        </div>

        {/* Location */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 glass-panel-green rounded-xl p-6 text-center hover:border-primary/40 transition-colors">
            <MapPin className="mx-auto text-primary mb-2" size={22} />
            <p className="font-medium text-foreground">Elaneeru, Chikkamagaluru, Karnataka</p>
            <p className="text-sm text-muted-foreground mt-1">Nestled in the Western Ghats</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
