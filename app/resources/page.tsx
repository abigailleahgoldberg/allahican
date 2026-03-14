import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Resources — AllahiCan",
  description:
    "Trusted Islamic resources — Quran.com, IslamicFinder, SeekersGuidance, Sunnah.com, Islamic Relief, and more. Learn, pray, and connect.",
  openGraph: {
    title: "Islamic Resources — AllahiCan",
    description:
      "Trusted resources for Quran study, prayer times, Islamic learning, hadith, and community.",
    url: "https://allahican.com/resources",
    siteName: "AllahiCan",
  },
};

const resources = [
  {
    name: "Quran.com",
    url: "https://quran.com",
    category: "Quran Study",
    description:
      "The Quran in Arabic with multiple English translations, tafsir (commentary), word-by-word analysis, and audio recitations from renowned Qaris. One of the most complete and accessible Quran resources online.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: "#C9A84C",
  },
  {
    name: "IslamicFinder",
    url: "https://www.islamicfinder.org",
    category: "Prayer Times & Calendar",
    description:
      "Accurate prayer times for any location, the Islamic calendar with Gregorian date conversions, Hijri date calculations, and a Qibla direction finder. The go-to resource for daily Muslim observance.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "#C9A84C",
  },
  {
    name: "SeekersGuidance",
    url: "https://seekersguidance.org",
    category: "Islamic Learning",
    description:
      "Scholarly Islamic education from qualified traditional scholars. Free courses on fiqh, aqeedah, Quran, Seerah, and Islamic spirituality. Rooted in traditional scholarship and accessible to Muslims worldwide.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: "#2D7D32",
  },
  {
    name: "Sunnah.com",
    url: "https://sunnah.com",
    category: "Hadith Collections",
    description:
      "The major hadith collections — Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami' at-Tirmidhi, and more — fully searchable in Arabic with English translations. An essential resource for understanding the Prophet's teachings.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    color: "#C9A84C",
  },
  {
    name: "Islamic Relief",
    url: "https://www.islamic-relief.org",
    category: "Humanitarian Aid",
    description:
      "One of the world's leading Muslim humanitarian organizations, providing emergency relief, development programs, and Zakat/Sadaqah distribution globally. Rooted in the Islamic values of compassion and justice.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    color: "#2D7D32",
  },
  {
    name: "ICNA",
    url: "https://www.icna.org",
    category: "Community Organization",
    description:
      "The Islamic Circle of North America — one of the largest Muslim American organizations. Provides community services, education, dawah, social justice advocacy, and support for Muslims across the United States and Canada.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#2D7D32",
  },
];

export default function ResourcesPage() {
  return (
    <div style={{ backgroundColor: "#0C2E0C", color: "#FAFAF8", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "24px 24px 0",
          fontSize: "13px",
          color: "#8a8a8a",
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        <a href="/" style={{ color: "#8a8a8a", textDecoration: "none" }}>
          Home
        </a>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "#C9A84C" }}>Resources</span>
      </div>

      {/* Header */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 40px" }}>
        <p
          style={{
            color: "#C9A84C",
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "12px",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Trusted & Recommended
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          Islamic Resources
        </h1>
        <p
          style={{
            color: "#FAFAF8",
            opacity: 0.8,
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "640px",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          A curated list of trusted resources for Quran study, prayer guidance, Islamic
          learning, hadith, humanitarian giving, and community connection.
        </p>
      </section>

      {/* Resources grid */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {resources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#060C06",
                border: `1px solid ${resource.color}`,
                borderRadius: "8px",
                padding: "28px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "#0C2E0C",
                    border: `1px solid ${resource.color}`,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {resource.icon}
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a8a8a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>

              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#0C2E0C",
                  border: `1px solid ${resource.color}`,
                  borderRadius: "4px",
                  padding: "3px 8px",
                  fontSize: "11px",
                  color: resource.color,
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                  fontFamily: "var(--font-body), sans-serif",
                  width: "fit-content",
                }}
              >
                {resource.category}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#ffffff",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {resource.name}
              </h2>

              <p
                style={{
                  color: "#FAFAF8",
                  opacity: 0.8,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  flex: 1,
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {resource.description}
              </p>

              <div
                style={{
                  marginTop: "20px",
                  color: resource.color,
                  fontSize: "13px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                Visit {resource.name}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Note */}
        <div
          style={{
            marginTop: "48px",
            backgroundColor: "#060C06",
            border: "1px solid #2D7D32",
            borderRadius: "8px",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#FAFAF8",
              opacity: 0.65,
              fontSize: "14px",
              lineHeight: 1.7,
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            AllahiCan does not have a financial relationship with any of the resources
            listed above. These are included because we genuinely recommend them to the
            Muslim American community. Links open in a new tab.
          </p>
        </div>
      </section>
    </div>
  );
}
