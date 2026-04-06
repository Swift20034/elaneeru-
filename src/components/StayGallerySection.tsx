import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  stayGalleryFeaturedVideo,
  stayGalleryPhotos,
  stayGallerySupplementaryVideos,
} from "@/data/stayGalleryAssets";

const StayGallerySection = () => {
  const [photoLightbox, setPhotoLightbox] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<number | null>(null);

  return (
    <section
      id="stay-gallery"
      className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background via-nature-mist/45 to-nature-pale/40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.12),transparent_58%)] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-nature-deep/14 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-nature-light/22 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-stay-shell rounded-3xl p-6 sm:p-8 md:p-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm drop-shadow-sm">
                The Stay
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
                Rooms, views & <span className="italic text-primary">moments</span>
              </h2>
              <p className="mt-3 text-foreground/75 text-base md:text-lg">
                A closer look at Elaneeru — highlight reel first, then short clips and stills from the property.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured video — native aspect ratio (no object-cover crop) */}
          <ScrollReveal>
            <div className="glass-stay-feature rounded-2xl p-4 sm:p-6 md:p-8 mb-10 md:mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Highlight reel</span>
                <span className="text-xs text-foreground/65">Full quality • use controls to play with sound</span>
              </div>
              <div className="w-full flex justify-center overflow-x-auto rounded-xl ring-1 ring-primary/15 bg-black/5">
                <video
                  className="block w-full h-auto max-w-full rounded-lg"
                  controls
                  playsInline
                  preload="auto"
                  src={stayGalleryFeaturedVideo}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Supplementary videos — separate from photos */}
          <ScrollReveal>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center md:text-left">
              More from the stay
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-14">
              {stayGallerySupplementaryVideos.map((item, i) => (
                <ScrollReveal key={item.src} delay={i * 0.06}>
                  <button
                    type="button"
                    onClick={() => setVideoModal(i)}
                    className="group relative w-full text-left rounded-xl overflow-hidden glass-stay-video-tile hover:border-primary/40 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="relative aspect-video bg-muted">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover pointer-events-none"
                        muted
                        playsInline
                        loop
                        autoPlay
                        preload="metadata"
                        aria-hidden
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/95 text-primary shadow-lg group-hover:scale-105 transition-transform">
                          <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                        </span>
                      </div>
                      <span className="absolute bottom-3 left-3 right-3 text-primary-foreground text-sm font-medium drop-shadow-md">
                        {item.label}
                      </span>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Photo grid */}
          <ScrollReveal>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center md:text-left">
              Photo gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-3.5">
              {stayGalleryPhotos.map((photo, i) => (
                <ScrollReveal key={photo.src} delay={Math.min(i * 0.03, 0.4)}>
                  <motion.button
                    type="button"
                    onClick={() => setPhotoLightbox(i)}
                    whileHover={{ scale: 1.015 }}
                    className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl glass-stay-photo-tile hover:border-primary/35 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={i < 8 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Photo lightbox */}
      <AnimatePresence>
        {photoLightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setPhotoLightbox(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 z-10 text-primary-foreground/90 hover:text-primary-foreground p-2"
              aria-label="Close"
              onClick={() => setPhotoLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={stayGalleryPhotos[photoLightbox].src}
              alt={stayGalleryPhotos[photoLightbox].alt}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Supplementary video modal — full playback with controls */}
      <AnimatePresence>
        {videoModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/85 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setVideoModal(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 z-10 text-primary-foreground/90 hover:text-primary-foreground p-2"
              aria-label="Close"
              onClick={() => setVideoModal(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-primary-foreground/90 text-sm font-medium mb-3 text-center">
                {stayGallerySupplementaryVideos[videoModal].label}
              </p>
              <video
                key={stayGallerySupplementaryVideos[videoModal].src}
                className="w-full h-auto max-h-[80vh] rounded-xl border border-white/10 bg-black/40"
                controls
                playsInline
                autoPlay
                src={stayGallerySupplementaryVideos[videoModal].src}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StayGallerySection;
