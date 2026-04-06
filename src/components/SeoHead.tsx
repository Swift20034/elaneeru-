import { useLayoutEffect } from "react";
import { buildStructuredData } from "@/data/structuredData";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/config/site";

/**
 * Early JSON-LD + OG URL sync (layout effect) for crawlers and correct preview URLs on Vercel.
 */
const SeoHead = () => {
  useLayoutEffect(() => {
    const absolute = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

    const ld = document.getElementById("structured-data");
    if (ld) ld.textContent = JSON.stringify(buildStructuredData(SITE_URL));

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = absolute("/");

    const setMeta = (attr: "property" | "name", key: string, content: string) => {
      const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (el) el.content = content;
    };

    setMeta("property", "og:url", absolute("/"));
    setMeta("property", "og:image", DEFAULT_OG_IMAGE);
    setMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
  }, []);

  return null;
};

export default SeoHead;
