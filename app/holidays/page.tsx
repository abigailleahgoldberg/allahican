import type { Metadata } from "next";
import { holidays } from "@/app/data/holidays";

export const metadata: Metadata = {
  title: "Islamic Holidays — AllahiCan",
  description:
    "Learn about the major Islamic holidays — Ramadan, Eid al-Fitr, Eid al-Adha, Laylat al-Qadr, Mawlid al-Nabi, and more. Significance, traditions, and Quran references.",
  openGraph: {
    title: "Islamic Holidays — AllahiCan",
    description:
      "Learn about the major Islamic holidays — their significance, traditions, and Quran references.",
    url: "https://allahican.com/holidays",
    siteName: "AllahiCan",
  },
};

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

export default function HolidaysPage() {
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
        <span style={{ color: "#C9A84C" }}>Islamic Holidays</span>
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
          The Islamic Calendar
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
          Islamic Holidays
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
          The Islamic calendar is lunar — dates shift each year relative to the Gregorian
          calendar. The spirit of each occasion, its meaning and its practice, does not.
        </p>
      </section>

      {/* Holiday grid */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {holidays.map((holiday) => (
            <a
              key={holiday.slug}
              href={`/holidays/${holiday.slug}`}
              style={{
                backgroundColor: "#060C06",
                border: `1px solid ${holiday.color}`,
                borderRadius: "8px",
                padding: "28px",
                textDecoration: "none",
                display: "block",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#0C2E0C",
                  border: `1px solid ${holiday.color}`,
                  borderRadius: "4px",
                  padding: "4px 10px",
                  fontSize: "11px",
                  color: holiday.color,
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {islamicMonthNames[holiday.month]}
                {holiday.day ? ` ${holiday.day}` : ""}
                {holiday.duration && holiday.duration > 1
                  ? ` – ${holiday.day! + holiday.duration - 1}`
                  : ""}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#ffffff",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "6px",
                  lineHeight: 1.25,
                }}
              >
                {holiday.name}
              </h2>

              {holiday.arabicName && (
                <div
                  style={{
                    color: holiday.color,
                    fontSize: "16px",
                    marginBottom: "12px",
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
                  opacity: 0.8,
                  fontSize: "14px",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {holiday.description}
              </p>

              <div
                style={{
                  color: holiday.color,
                  fontSize: "14px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                Learn more
                <svg
                  width="14"
                  height="14"
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
      </section>

      {/* Footer note */}
      <section
        style={{
          backgroundColor: "#060C06",
          borderTop: "1px solid #2D7D32",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p
            style={{
              color: "#FAFAF8",
              opacity: 0.7,
              fontSize: "15px",
              lineHeight: 1.7,
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            The Islamic calendar is lunar and approximately 11 days shorter than the Gregorian
            calendar each year. Specific Gregorian dates for Islamic holidays shift annually.
            Check with your local mosque for confirmed dates in your region.
          </p>
          <div style={{ marginTop: "24px" }}>
            <a
              href="/calendar"
              style={{
                color: "#C9A84C",
                fontSize: "15px",
                textDecoration: "none",
                borderBottom: "1px solid #C9A84C",
                paddingBottom: "2px",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              View the Islamic Calendar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
