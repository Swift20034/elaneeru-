import { useState, useEffect, useCallback, type MouseEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const BOOK_WHATSAPP_HREF =
  "https://wa.me/918660288690?text=Hi%2C%20I%20want%20to%20book%20a%20stay%20at%20Elaneeru%20Homestay";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Host", href: "#host" },
  { label: "Food", href: "#food" },
  { label: "Experiences", href: "#experiences" },
  { label: "Stay", href: "#stay-gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash: string) => {
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      const el = document.getElementById(id);
      if (!el) return false;
      const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";
      el.scrollIntoView({ behavior, block: "start" });
      window.history.replaceState(null, "", `#${id}`);
      return true;
    },
    [reduceMotion],
  );

  const handleMobileHashClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      scrollToHash(href);
      setMobileOpen(false);
    },
    [scrollToHash],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            key="nav-backdrop"
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-foreground/35 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white border-b border-border/50 shadow-sm"
            : "bg-transparent border-b border-transparent shadow-none",
        )}
      >
      <div className="container mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="nav-logo-glow-wrap inline-flex shrink-0 h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20 items-center justify-center">
            <span
              className={cn(
                "nav-logo-glow-aura",
                scrolled ? "nav-logo-glow-aura--scrolled" : "nav-logo-glow-aura--hero",
              )}
              aria-hidden
            />
            <img
              src={logo}
              alt="Elaneeru Homestay"
              className={cn(
                "nav-logo-glow-img h-full w-full object-contain",
                scrolled ? "nav-logo-glow-img--scrolled" : "nav-logo-glow-img--hero",
              )}
              width={80}
              height={80}
              decoding="async"
              fetchpriority="high"
            />
          </span>
          <div className="flex flex-col min-w-0">
            <span
              className={cn(
                "font-display text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm transition-colors",
                scrolled ? "text-primary" : "text-white",
              )}
            >
              Elaneeru
            </span>
            <span
              className={cn(
                "text-[0.65rem] sm:text-xs tracking-widest uppercase transition-colors",
                scrolled ? "text-muted-foreground" : "text-white/75",
              )}
            >
              Homestay
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/90 hover:text-white drop-shadow-sm",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                  scrolled ? "bg-primary" : "bg-white",
                )}
              />
            </a>
          ))}
          <motion.a
            href={BOOK_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "glass-cta-primary cta-book-now inline-flex items-center justify-center gap-1.5",
              "text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
          >
            <span className="relative z-[1]">Book Now</span>
            <MessageCircle className="relative z-[1] w-3.5 h-3.5 shrink-0 opacity-95" strokeWidth={2.25} aria-hidden />
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "md:hidden relative z-[1] p-2 transition-colors touch-manipulation",
            scrolled ? "text-foreground" : "text-white drop-shadow-md",
          )}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative z-[1] bg-white border-t border-border/50 overflow-hidden shadow-lg pointer-events-auto"
          >
            <div className="flex flex-col p-6 gap-4 pointer-events-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileHashClick(e, link.href)}
                  className="text-base font-medium text-foreground/80 hover:text-primary py-3 -my-1 touch-manipulation"
                >
                  {link.label}
                </a>
              ))}
              <motion.a
                href={BOOK_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  window.setTimeout(() => setMobileOpen(false), 0);
                }}
                className={cn(
                  "glass-cta-primary cta-book-now inline-flex items-center justify-center gap-2 w-full touch-manipulation",
                  "text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold text-center mt-2 tracking-wide",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 26 }}
              >
                <span className="relative z-[1]">Book on WhatsApp</span>
                <MessageCircle className="relative z-[1] w-4 h-4 shrink-0 opacity-95" strokeWidth={2.25} aria-hidden />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
};

export default Navbar;
