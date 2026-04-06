/** Schema.org graph — base URL from env for Vercel previews vs production */
export function buildStructuredData(baseUrl: string) {
  const u = (path: string) => `${baseUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${u("/")}#website`,
        url: u("/"),
        name: "Elaneeru Homestay",
        description:
          "Premium Malnad homestay in Chikkamagaluru (Chikmagalur) — stays near Netravathi and Nethravathi treks, Elaneeru Waterfalls, coffee estates, and Western Ghats nature. Homestay hotels style comfort with home-cooked meals.",
        inLanguage: "en-IN",
        publisher: { "@id": `${u("/")}#lodging` },
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${u("/")}#lodging`,
        name: "Elaneeru Homestay",
        alternateName: [
          "Elaneer Homestay",
          "Elaneeru",
          "Elaneeru Homestay Chikkamagaluru",
          "Elaneer Homestay Chikmagalur",
          "Homestay in Chikkamagaluru",
          "Stays in Chikkamagaluru",
        ],
        description:
          "Book Elaneeru Homestay for stays in Chikkamagaluru and Chikmagalur district. A trusted homestay near Netravathi (Nethravathi) trek access, Kudremukh region adventures, Elaneeru Waterfalls (500 m), Hornadu and Kalaseshwara temples. Ideal for travellers searching homestay hotels, nature stays, and Malnad food with veg and non-veg meals included.",
        url: u("/"),
        telephone: "+918660288690",
        email: "chinthansrgowda@gmail.com",
        image: u("/favicon.png"),
        priceRange: "₹1500–₹2000 per person",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Elaneeru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.3161,
          longitude: 75.772,
        },
        areaServed: [
          { "@type": "City", name: "Chikkamagaluru" },
          { "@type": "AdministrativeArea", name: "Chikmagalur district, Karnataka" },
        ],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Four home-cooked Malnad meals daily", value: true },
          { "@type": "LocationFeatureSpecification", name: "Coffee and areca estate walks", value: true },
          { "@type": "LocationFeatureSpecification", name: "River and nature views", value: true },
          { "@type": "LocationFeatureSpecification", name: "Near Elaneeru Waterfalls", value: true },
          { "@type": "LocationFeatureSpecification", name: "Near Netravathi / Nethravathi trek routes", value: true },
        ],
        sameAs: ["https://www.instagram.com/elaneer._.homestay/"],
      },
      {
        "@type": "WebPage",
        "@id": `${u("/")}#webpage`,
        url: u("/"),
        name: "Elaneeru Homestay | Stays in Chikkamagaluru | Malnad Nature Retreat",
        isPartOf: { "@id": `${u("/")}#website` },
        about: { "@id": `${u("/")}#lodging` },
        primaryImageOfPage: { "@type": "ImageObject", url: u("/favicon.png") },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Elaneeru Homestay located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Elaneeru Homestay is in Elaneeru, Chikkamagaluru (Chikmagalur), Karnataka, in the Western Ghats — ideal for stays in Chikkamagaluru with easy access to waterfalls, treks including Netravathi / Nethravathi routes, and coffee country.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book a stay at Elaneeru Homestay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Message us on WhatsApp at +91 86602 88690 or use the Book buttons on this site. We respond quickly with availability and rates for your dates.",
            },
          },
          {
            "@type": "Question",
            name: "What is included in the stay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Comfortable accommodation with authentic Malnad-style meals — four times daily — with both vegetarian and non-vegetarian options, plus estate walks and peaceful nature surroundings.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: u("/"),
          },
        ],
      },
    ],
  };
}
