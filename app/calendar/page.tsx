import type { Metadata } from "next";
import { holidays } from "@/app/data/holidays";

export const metadata: Metadata = {
  title: "Islamic Calendar — AllahiCan",
  description:
    "The Islamic lunar calendar with all 12 months and major Islamic holidays. Ramadan, Eid al-Fitr, Eid al-Adha, Hajj, and more — placed in their Islamic months.",
  openGraph: {
    title: "Islamic Calendar — AllahiCan",
    description:
      "The Islamic lunar calendar — 12 months, 8 major holidays, and everything you need to know about the Hijri year.",
    url: "https://allahican.com/calendar",
    siteName: "AllahiCan",
  },
};

const islamicMonths = [
  { number: 1, name: "Muharram", meaning: "Forbidden — one of the four sacred months", days: 30 },
  { number: 2, name: "Safar", meaning: "Empty — traditionally a month of travel", days: 29 },
  { number: 3, name: "Rabi al-Awwal", meaning: "First spring", days: 30 },
  { number: 4, name: "Rabi al-Thani", meaning: "Second spring", days: 29 },
  { number: 5, name: "Jumada al-Ula", meaning: "First of parched land", days: 30 },
  { number: 6, name: "Jumada al-Thani", meaning: "Second of parched land", days: 29 },
  { number: 7, name: "Rajab", meaning: "Respect — one of the four sacred months", days: 30 },
  { number: 8, name: "Sha'ban", meaning: "Scattered — month of preparation", days: 29 },
  { number: 9, name: "Ramadan", meaning: "Scorching heat — the month of fasting", days: 30 },
  { number: 10, name: "Shawwal", meaning: "Uplift — month of Eid al-Fitr", days: 29 },
  { number: 11, name: "Dhul Qi'dah", meaning: "The one of rest — one of the four sacred months", days: 30 },
  { number: 12, name: "Dhul Hijjah", meaning: "The one of pilgrimage — month of Hajj and Eid al-Adha", days: 29 },
];

export default function CalendarPage() {
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
        <span style={{ color: "#C9A84C" }}>Islamic Calendar</span>
      </div>

      {/* Header */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 24px" }}>
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
          The Hijri Year
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
          Islamic Calendar
        </h1>
        <div
          style={{
            backgroundColor: "#060C06",
            border: "1px solid #C9A84C",
            borderRadius: "8px",
            padding: "20px 24px",
            maxWidth: "680px",
            marginBottom: "16px",
          }}
        >
          <p
            style={{
              color: "#FAFAF8",
              fontSize: "15px",
              lineHeight: 1.7,
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            <strong style={{ color: "#C9A84C" }}>The Islamic calendar is lunar.</strong>{" "}
            Each month begins with the sighting of the new crescent moon. The Hijri year is
            approximately 354 days — about 11 days shorter than the Gregorian year. As a
            result, Islamic holidays move forward through the Gregorian calendar each year,
            cycling through all seasons over approximately 33 years.
          </p>
        </div>
      </section>

      {/* Month grid */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {islamicMonths.map((month) => {
            const monthHolidays = holidays.filter((h) => h.month === month.number);
            return (
              <div
                key={month.number}
                style={{
                  backgroundColor: "#060C06",
                  border: monthHolidays.length > 0 ? "1px solid #C9A84C" : "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                {/* Month number badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#0C2E0C",
                      border: "1px solid #2D7D32",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontSize: "11px",
                      color: "#8a8a8a",
                      fontFamily: "var(--font-body), sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Month {month.number}
                  </div>
                  <span
                    style={{
                      color: "#8a8a8a",
                      fontSize: "12px",
                      fontFamily: "var(--font-body), sans-serif",
                    }}
                  >
                    {month.days} days
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    color: monthHolidays.length > 0 ? "#C9A84C" : "#ffffff",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  {month.name}
                </h2>

                <p
                  style={{
                    color: "#FAFAF8",
                    opacity: 0.6,
                    fontSize: "12px",
                    lineHeight: 1.5,
                    marginBottom: "16px",
                    fontStyle: "italic",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {month.meaning}
                </p>

                {/* Holidays in this month */}
                {monthHolidays.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {monthHolidays.map((holiday) => (
                      <a
                        key={holiday.slug}
                        href={`/holidays/${holiday.slug}`}
                        style={{
                          backgroundColor: "#0C2E0C",
                          border: `1px solid ${holiday.color}`,
                          borderRadius: "6px",
                          padding: "10px 14px",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: holiday.color,
                            flexShrink: 0,
                          }}
                        />
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              color: "#ffffff",
                              fontSize: "14px",
                              fontWeight: "bold",
                              fontFamily: "var(--font-heading), serif",
                              marginBottom: "2px",
                            }}
                          >
                            {holiday.name}
                          </div>
                          {holiday.day && (
                            <div
                              style={{
                                color: "#8a8a8a",
                                fontSize: "11px",
                                fontFamily: "var(--font-body), sans-serif",
                              }}
                            >
                              Day {holiday.day}
                              {holiday.duration && holiday.duration > 1
                                ? ` – ${holiday.day + holiday.duration - 1}`
                                : ""}
                            </div>
                          )}
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={holiday.color}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}

                {monthHolidays.length === 0 && (
                  <p
                    style={{
                      color: "#8a8a8a",
                      fontSize: "12px",
                      fontFamily: "var(--font-body), sans-serif",
                      fontStyle: "italic",
                    }}
                  >
                    No major holidays this month
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div
          style={{
            marginTop: "48px",
            backgroundColor: "#060C06",
            border: "1px solid #2D7D32",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#C9A84C",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Holiday Categories
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {[
              { color: "#C9A84C", label: "Major holiday / Pillar of Islam" },
              { color: "#2D7D32", label: "Important observance" },
              { color: "#8B6914", label: "Sacred night or solemn observance" },
            ].map((item) => (
              <div
                key={item.color}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "#FAFAF8",
                    fontSize: "14px",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* All holidays quick list */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <a
            href="/holidays"
            style={{
              color: "#C9A84C",
              fontSize: "16px",
              textDecoration: "none",
              borderBottom: "1px solid #C9A84C",
              paddingBottom: "2px",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            View detailed holiday pages
          </a>
        </div>
      </section>
    </div>
  );
}
