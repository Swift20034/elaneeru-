/** Canonical site origin — set VITE_SITE_URL on Vercel (no trailing slash). */
export const SITE_URL = String(import.meta.env.VITE_SITE_URL ?? "https://elaneeruhomestay.com").replace(
  /\/$/,
  "",
);

export const SITE_NAME = "Elaneeru Homestay";

/** Google Maps pin for directions (short link resolves to the homestay location). */
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/io2QEkaELzGYgSGw7";

/** Same location as the pin — used for embed + schema. */
export const LOCATION_LAT = 13.1784869;
export const LOCATION_LNG = 75.3433728;

/** Embedded map (no API key) — matches coordinates above. */
export const GOOGLE_MAPS_EMBED_SRC = `https://www.google.com/maps?q=${LOCATION_LAT}%2C${LOCATION_LNG}&z=16&output=embed&hl=en`;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;
export const DEFAULT_DOCUMENT_TITLE =
  "Elaneeru Homestay | Stays in Chikkamagaluru | Netravathi Trek & Malnad Retreat";
