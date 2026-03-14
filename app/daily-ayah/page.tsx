"use client";

import { useState, useEffect } from "react";

interface DailyAyah {
  text: string;
  reference: string;
  surah: string;
  ayah: number;
  theme: string;
}

export default function DailyAyahPage() {
  const [ayah, setAyah] = useState<DailyAyah | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/daily")
      .then((r) => r.json())
      .then(setAyah)
      .catch(() => setError(true));
  }, []);

  const handleCopy = () => {
    if (!ayah) return;
    const text = `"${ayah.text}" — ${ayah.reference}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#0C2E0C",
        color: "#FAFAF8",
        minHeight: "100vh",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "24px 24px 0",
          fontSize: "13px",
          color: "#8a8a8a",
        }}
      >
        <a href="/" style={{ color: "#8a8a8a", textDecoration: "none" }}>
          Home
        </a>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "#C9A84C" }}>Daily Ayah</span>
      </div>

      {/* Header */}
      <section
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "48px 24px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#C9A84C",
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          From the Quran
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Daily Ayah
        </h1>
        <p
          style={{
            color: "#FAFAF8",
            opacity: 0.75,
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          A verse from the Quran — curated daily, selected from a collection of timeless
          ayahs on mercy, patience, faith, justice, gratitude, and guidance.
        </p>
      </section>

      {/* Ayah card */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 80px" }}>
        {error && (
          <div
            style={{
              backgroundColor: "#060C06",
              border: "1px solid #8B6914",
              borderRadius: "8px",
              padding: "32px",
              textAlign: "center",
              color: "#FAFAF8",
              opacity: 0.7,
            }}
          >
            Unable to load today&apos;s ayah. Please try again.
          </div>
        )}

        {!ayah && !error && (
          <div
            style={{
              backgroundColor: "#060C06",
              border: "1px solid #2D7D32",
              borderRadius: "8px",
              padding: "64px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "3px solid #2D7D32",
                borderTopColor: "#C9A84C",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto",
              }}
            />
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}

        {ayah && (
          <div>
            {/* Theme badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#060C06",
                  border: "1px solid #C9A84C",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  color: "#C9A84C",
                  fontSize: "12px",
                  fontWeight: "bold",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                {ayah.theme}
              </span>
            </div>

            {/* Verse card */}
            <div
              style={{
                backgroundColor: "#060C06",
                borderLeft: "4px solid #C9A84C",
                borderRadius: "0 8px 8px 0",
                padding: "40px 36px",
                marginBottom: "20px",
              }}
            >
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    lineHeight: 1.8,
                    color: "#FAFAF8",
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{ayah.text}&rdquo;
                </p>
                <cite
                  style={{
                    fontStyle: "normal",
                    color: "#C9A84C",
                    fontSize: "15px",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  — {ayah.reference}
                </cite>
              </blockquote>
            </div>

            {/* Surah info */}
            <div
              style={{
                backgroundColor: "#060C06",
                border: "1px solid #2D7D32",
                borderRadius: "8px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2D7D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <div>
                  <div style={{ color: "#ffffff", fontSize: "15px", fontWeight: "bold" }}>
                    Surah {ayah.surah}
                  </div>
                  <div style={{ color: "#8a8a8a", fontSize: "12px" }}>
                    Ayah {ayah.ayah}
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "#8a8a8a",
                  fontSize: "12px",
                }}
              >
                Changes daily
              </div>
            </div>

            {/* Copy button */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleCopy}
                style={{
                  backgroundColor: copied ? "#2D7D32" : "transparent",
                  color: copied ? "#ffffff" : "#C9A84C",
                  border: "2px solid",
                  borderColor: copied ? "#2D7D32" : "#C9A84C",
                  padding: "12px 28px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-body), sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {copied ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy to clipboard
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Divider and footer note */}
        <div
          style={{
            marginTop: "60px",
            borderTop: "1px solid #2D7D32",
            paddingTop: "32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#FAFAF8",
              opacity: 0.55,
              fontSize: "13px",
              lineHeight: 1.7,
            }}
          >
            The Quran contains 114 surahs (chapters) and 6,236 ayahs (verses). This daily
            ayah is selected from a curated collection of well-known verses using respected
            English translations. The Quran was revealed in Arabic — translation conveys
            meaning but cannot fully capture the original.
          </p>
        </div>
      </section>
    </div>
  );
}
