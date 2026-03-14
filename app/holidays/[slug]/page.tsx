import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { holidays, getHolidayBySlug, getRelatedHolidays } from "@/app/data/holidays";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return holidays.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);
  if (!holiday) return {};
  return {
    title: `${holiday.name} — Islamic Holidays — AllahiCan`,
    description: holiday.description,
    openGraph: {
      title: `${holiday.name} — AllahiCan`,
      description: holiday.description,
      url: `https://allahican.com/holidays/${holiday.slug}`,
      siteName: "AllahiCan",
    },
  };
}

const islamicMonthNames: Record<number, string> = {
  1: "Muharram",
  2: "Safar",
  3: "Rabi al-Awwal",
  4: "Rabi al-Thani",
  5: "Jumada al-Ula",
  6: "Jumada al-Thani",
  7: "Rajab",
  8: "Sha'ban",
  9: "Ramadan",
  10: "Shawwal",
  11: "Dhul Qi'dah",
  12: "Dhul Hijjah",
};

export default async function HolidayDetailPage({ params }: Props) {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);
  if (!holiday) notFound();

  const related = getRelatedHolidays(slug, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: holiday.name,
    alternateName: holiday.arabicName,
    description: holiday.description,
    eventStatus: "https://schema.org/EventScheduled",
    organizer: {
      "@type": "Organization",
      name: "AllahiCan",
      url: "https://allahican.com",
    },
    url: `https://allahican.com/holidays/${holiday.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div style={{ backgroundColor: "#0C2E0C", color: "#FAFAF8", minHeight: "100vh" }}>
        {/* Breadcrumb */}
        <div
          style={{
            maxWidth: "800px",
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
          <a href="/holidays" style={{ color: "#8a8a8a", textDecoration: "none" }}>
            Islamic Holidays
          </a>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#C9A84C" }}>{holiday.name}</span>
        </div>

        {/* Header */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "48px 24px 40px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#060C06",
              border: `1px solid ${holiday.color}`,
              borderRadius: "4px",
              padding: "4px 12px",
              fontSize: "12px",
              color: holiday.color,
              fontWeight: "bold",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            {islamicMonthNames[holiday.month]}
            {holiday.day ? ` ${holiday.day}` : ""}
            {holiday.duration && holiday.duration > 1
              ? ` – ${holiday.day! + holiday.duration - 1}`
              : ""}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "12px",
              lineHeight: 1.15,
            }}
          >
            {holiday.name}
          </h1>

          {holiday.arabicName && (
            <div
              style={{
                color: holiday.color,
                fontSize: "clamp(22px, 3vw, 32px)",
                marginBottom: "20px",
                fontFamily: "serif",
                direction: "rtl",
              }}
            >
              {holiday.arabicName}
            </div>
          )}

          <p
            style={{
              color: "#FAFAF8",
              fontSize: "18px",
              lineHeight: 1.75,
              opacity: 0.9,
              maxWidth: "680px",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            {holiday.description}
          </p>
        </section>

        {/* Pillar badge */}
        {holiday.pillar && (
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 24px 24px",
            }}
          >
            <div
              style={{
                backgroundColor: "#060C06",
                border: `2px solid ${holiday.color}`,
                borderRadius: "8px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={holiday.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span
                style={{
                  color: "#FAFAF8",
                  fontSize: "15px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                <strong style={{ color: holiday.color }}>Pillar of Islam:</strong>{" "}
                {holiday.pillar}
              </span>
            </div>
          </div>
        )}

        {/* Content sections */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px 80px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Significance */}
          <section
            style={{
              backgroundColor: "#060C06",
              border: "1px solid #2D7D32",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#C9A84C",
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Significance
            </h2>
            <p
              style={{
                color: "#FAFAF8",
                fontSize: "16px",
                lineHeight: 1.8,
                opacity: 0.9,
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              {holiday.significance}
            </p>
          </section>

          {/* How it is observed */}
          <section
            style={{
              backgroundColor: "#060C06",
              border: "1px solid #2D7D32",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#C9A84C",
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              How It Is Observed
            </h2>
            <p
              style={{
                color: "#FAFAF8",
                fontSize: "16px",
                lineHeight: 1.8,
                opacity: 0.9,
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              {holiday.howObserved}
            </p>
          </section>

          {/* Quran reference */}
          {holiday.quranRef && holiday.quranText && (
            <section
              style={{
                backgroundColor: "#060C06",
                borderLeft: `4px solid ${holiday.color}`,
                borderRadius: "0 8px 8px 0",
                padding: "32px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#C9A84C",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                From the Quran
              </h2>
              <blockquote
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                <p
                  style={{
                    color: "#FAFAF8",
                    fontSize: "17px",
                    lineHeight: 1.8,
                    fontFamily: "var(--font-heading), serif",
                    fontStyle: "italic",
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;{holiday.quranText}&rdquo;
                </p>
                <cite
                  style={{
                    color: holiday.color,
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  — {holiday.quranRef}
                </cite>
              </blockquote>
            </section>
          )}
        </article>

        {/* Related holidays */}
        {related.length > 0 && (
          <section
            style={{
              backgroundColor: "#060C06",
              borderTop: "1px solid #2D7D32",
              padding: "48px 24px",
            }}
          >
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: "bold",
                  marginBottom: "28px",
                }}
              >
                More Islamic Holidays
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "20px",
                }}
              >
                {related.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`/holidays/${rel.slug}`}
                    style={{
                      backgroundColor: "#0C2E0C",
                      border: `1px solid ${rel.color}`,
                      borderRadius: "8px",
                      padding: "20px",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading), serif",
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "8px",
                      }}
                    >
                      {rel.name}
                    </h3>
                    <p
                      style={{
                        color: "#FAFAF8",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        opacity: 0.75,
                        marginBottom: "12px",
                        fontFamily: "var(--font-body), sans-serif",
                      }}
                    >
                      {rel.description.substring(0, 90)}...
                    </p>
                    <span
                      style={{
                        color: rel.color,
                        fontSize: "13px",
                        fontWeight: "bold",
                        fontFamily: "var(--font-body), sans-serif",
                      }}
                    >
                      Learn more
                    </span>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: "32px", textAlign: "center" }}>
                <a
                  href="/holidays"
                  style={{
                    color: "#C9A84C",
                    fontSize: "15px",
                    textDecoration: "none",
                    borderBottom: "1px solid #C9A84C",
                    paddingBottom: "2px",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  View all Islamic holidays
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
