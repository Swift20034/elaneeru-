/** Canonical site origin — set VITE_SITE_URL on Vercel (no trailing slash). */
export const SITE_URL = String(import.meta.env.VITE_SITE_URL ?? "https://elaneeruhomestay.com").replace(
  /\/$/,
  "",
);

export const SITE_NAME = "Elaneeru Homestay";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;
export const DEFAULT_DOCUMENT_TITLE =
  "Elaneeru Homestay | Stays in Chikkamagaluru | Netravathi Trek & Malnad Retreat";
