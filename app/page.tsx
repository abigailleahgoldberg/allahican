"use client";

import { useState } from "react";

/* ───────────────────── COLOR SYSTEM ───────────────────── */
const C = {
  green: "#1B4332",
  gold: "#C9A84C",
  lightGold: "#F5E6C8",
  bg: "#FAFAF8",
  dark: "#0D1F17",
  white: "#FFFFFF",
};

/* ───────────────────── SVG PATTERNS ───────────────────── */
const GeometricPattern = ({ opacity = 0.06 }: { opacity?: number }) => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="40" cy="40" r="30" fill="none" stroke={C.gold} strokeWidth="0.5" />
        <circle cx="40" cy="40" r="20" fill="none" stroke={C.gold} strokeWidth="0.5" />
        <line x1="10" y1="40" x2="70" y2="40" stroke={C.gold} strokeWidth="0.3" />
        <line x1="40" y1="10" x2="40" y2="70" stroke={C.gold} strokeWidth="0.3" />
        <line x1="15" y1="15" x2="65" y2="65" stroke={C.gold} strokeWidth="0.3" />
        <line x1="65" y1="15" x2="15" y2="65" stroke={C.gold} strokeWidth="0.3" />
        {/* 8-point star */}
        <polygon
          points="40,12 44,34 66,28 48,42 58,64 40,50 22,64 32,42 14,28 36,34"
          fill="none"
          stroke={C.gold}
          strokeWidth="0.4"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#geo)" />
  </svg>
);

const CrescentSvg = ({ size = 48, color = C.gold }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="1.5" fill="none" />
    <circle cx="30" cy="24" r="14" fill={color === C.gold ? C.green : C.white} />
    <circle cx="38" cy="10" r="3" fill={color} />
  </svg>
);

/* ───────────────────── SECTION ICONS (SVG) ───────────────────── */
const PracticeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="4" width="40" height="40" rx="8" stroke={C.green} strokeWidth="2" fill="none" />
    <path d="M24 12v12l8 4" stroke={C.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CelebrateIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="20" stroke={C.green} strokeWidth="2" fill="none" />
    <circle cx="24" cy="20" r="6" stroke={C.gold} strokeWidth="2" fill="none" />
    <path d="M14 38c0-6 4-10 10-10s10 4 10 10" stroke={C.gold} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const RepresentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 40V16l12-8 12 8v24" stroke={C.green} strokeWidth="2" fill="none" strokeLinejoin="round" />
    <rect x="18" y="26" width="12" height="14" stroke={C.gold} strokeWidth="2" fill="none" />
    <circle cx="24" cy="20" r="4" stroke={C.gold} strokeWidth="2" fill="none" />
  </svg>
);

/* ───────────────────── DATA ───────────────────── */
const pillars = [
  {
    icon: <PracticeIcon />,
    title: "Practice",
    desc: "Five daily prayers, fasting during Ramadan, giving zakat. The pillars of Islam are not just rituals — they are the rhythm of Muslim-American life.",
  },
  {
    icon: <CelebrateIcon />,
    title: "Celebrate",
    desc: "From the joy of Eid to the reflection of Ramadan to the love of Mawlid — our holidays are how we mark time, together.",
  },
  {
    icon: <RepresentIcon />,
    title: "Represent",
    desc: "Muslim-American pride apparel and gear for people who live their faith out loud. Because representation is not optional.",
  },
];

const vocabCards = [
  { arabic: "سلام", word: "Salaam", def: "Peace — the universal Muslim greeting. You say it when you arrive, when you leave, and to anyone you meet." },
  { arabic: "إن شاء الله", word: "Inshallah", def: "God willing. Used for future plans, hopeful outcomes, and sometimes polite refusals." },
  { arabic: "ما شاء الله", word: "Mashallah", def: "God has willed it. Said when something is beautiful, impressive, or worthy of gratitude." },
  { arabic: "بسم الله", word: "Bismillah", def: "In the name of God. Said before eating, beginning work, or starting anything meaningful." },
  { arabic: "حلال", word: "Halal", def: "Permissible under Islamic law. Most commonly refers to food prepared according to Islamic guidelines." },
  { arabic: "حرام", word: "Haram", def: "Forbidden under Islamic law. Also used colloquially to mean something is a shame or waste." },
  { arabic: "أمة", word: "Ummah", def: "The global Muslim community — a bond that transcends borders, languages, and cultures." },
  { arabic: "دعاء", word: "Dua", def: "A personal prayer or supplication to God. Unlike salah, dua can be made anytime, anywhere." },
];

const holidays = [
  { name: "Ramadan", date: "Feb 28 – Mar 29, 2026", desc: "The holy month of fasting, prayer, and reflection — observed from dawn to sunset for 30 days." },
  { name: "Eid al-Fitr", date: "March 30, 2026", desc: "The Festival of Breaking the Fast. A joyful celebration marking the end of Ramadan." },
  { name: "Eid al-Adha", date: "June 6, 2026", desc: "The Festival of Sacrifice. Honors Ibrahim's willingness to sacrifice his son in obedience to God." },
  { name: "Islamic New Year", date: "June 27, 2026", desc: "Marks the beginning of the new Islamic calendar year and the Hijra of Prophet Muhammad." },
  { name: "Mawlid al-Nabi", date: "Sept 5, 2026", desc: "Celebrates the birth of Prophet Muhammad. Observed with prayers, stories, and community gatherings." },
  { name: "Laylat al-Qadr", date: "Last 10 nights of Ramadan", desc: "The Night of Power — believed to be the night the Quran was first revealed. Better than a thousand months." },
];

const stats = [
  { num: "3.5M+", label: "Muslim Americans" },
  { num: "1.8 Billion", label: "Muslims Worldwide" },
  { num: "1,400+", label: "Years of Islamic Tradition" },
  { num: "30+", label: "Countries in the American Muslim Community" },
];

const faqItems = [
  {
    q: "Can I touch the Quran?",
    badge: "YES",
    badgeColor: "#2D7D32",
    a: "Non-Muslims can hold, read, and study the Quran. Many Muslims appreciate genuine curiosity. Some Muslims prefer to handle it with wudu (ritual washing), but that's a personal practice, not a rule for guests.",
  },
  {
    q: "Is it OK to say Allahu Akbar?",
    badge: "YES",
    badgeColor: "#2D7D32",
    a: "It means 'God is Greatest' and is said in prayer, in gratitude, and in moments of awe — billions of times a day, peacefully, around the world. It is not a threat. It is a declaration of faith.",
  },
  {
    q: "Should I take off my shoes?",
    badge: "IT DEPENDS",
    badgeColor: C.gold,
    a: "In a mosque, yes — always remove your shoes. In a Muslim home, look for shoes by the door and follow the host's lead. When in doubt, ask. Nobody will be offended.",
  },
  {
    q: "Can I ask about the hijab?",
    badge: "YES",
    badgeColor: "#2D7D32",
    a: "Respectful curiosity is welcome. Ask about meaning, not about why someone 'has to' wear it. Many women choose to wear hijab as an expression of faith, identity, and dignity — not because they are forced.",
  },
];

const blogPosts = [
  { title: "What Eid al-Fitr Actually Looks Like in America", excerpt: "From sunrise prayers in convention centers to backyard cookouts with biryani and burgers — Eid in America is its own beautiful thing.", category: "Culture" },
  { title: "The Muslim-American Identity Is Not a Contradiction", excerpt: "You don't have to choose between the flag and the crescent. A reflection on faith, freedom, and belonging.", category: "Identity" },
  { title: "A Beginner's Guide to Ramadan for Non-Muslims", excerpt: "Your coworker is fasting. Your neighbor is fasting. Here's what that means and how to be supportive.", category: "Education" },
];

/* ───────────────────── RESPONSIVE HELPER ───────────────────── */
const section = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  padding: "80px 24px",
  maxWidth: "1200px",
  margin: "0 auto",
  ...extra,
});

/* ───────────────────── PAGE ───────────────────── */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: C.bg, color: C.dark, fontFamily: "var(--font-body), sans-serif" }}>

      {/* ══════════════ HERO ══════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: C.green,
          padding: "120px 24px 100px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <GeometricPattern opacity={0.08} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              color: C.white,
              lineHeight: 1.1,
              margin: "0 0 24px",
              fontWeight: 400,
            }}
          >
            Where Faith Meets Freedom.
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
              margin: "0 0 40px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            The home for Muslim-Americans living their faith out loud.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/holidays"
              style={{
                display: "inline-block",
                padding: "16px 36px",
                backgroundColor: C.gold,
                color: C.dark,
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                borderRadius: "4px",
                letterSpacing: "0.5px",
              }}
            >
              Explore the Culture
            </a>
            <a
              href="/shop"
              style={{
                display: "inline-block",
                padding: "16px 36px",
                backgroundColor: "transparent",
                color: C.white,
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                borderRadius: "4px",
                border: `2px solid ${C.white}`,
                letterSpacing: "0.5px",
              }}
            >
              Visit the Shop
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ THREE PILLARS ══════════════ */}
      <section style={section()}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          {pillars.map((p) => (
            <div key={p.title} style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ marginBottom: "20px" }}>{p.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-heading), serif",
                  fontSize: "1.6rem",
                  color: C.green,
                  marginBottom: "12px",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4a4a4a" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ VOCABULARY ══════════════ */}
      <section style={{ backgroundColor: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                color: C.green,
                marginBottom: "12px",
              }}
            >
              Words Your Neighbors Should Know
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666", maxWidth: "560px", margin: "0 auto" }}>
              The vocabulary of Muslim-American life, explained simply.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {vocabCards.map((v) => (
              <div
                key={v.word}
                style={{
                  backgroundColor: C.lightGold,
                  borderRadius: "8px",
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    fontSize: "1.6rem",
                    color: C.green,
                    marginBottom: "4px",
                    direction: "rtl",
                  }}
                >
                  {v.arabic}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: C.dark,
                    marginBottom: "8px",
                  }}
                >
                  {v.word}
                </div>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#4a4a4a", margin: 0 }}>
                  {v.def}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ UPCOMING HOLIDAYS ══════════════ */}
      <section style={section()}>
        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: C.green,
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Upcoming Islamic Holidays
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {holidays.map((h) => (
            <div
              key={h.name}
              style={{
                backgroundColor: C.white,
                borderRadius: "8px",
                borderTop: `4px solid ${C.gold}`,
                padding: "28px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading), serif",
                  fontSize: "1.3rem",
                  color: C.green,
                  marginBottom: "4px",
                }}
              >
                {h.name}
              </h3>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: C.gold,
                  marginBottom: "12px",
                  letterSpacing: "0.3px",
                }}
              >
                {h.date}
              </div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#4a4a4a", margin: 0 }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ COMMUNITY STATS ══════════════ */}
      <section
        style={{
          backgroundColor: C.green,
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GeometricPattern opacity={0.05} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "var(--font-heading), serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: C.gold,
                  fontWeight: 400,
                  marginBottom: "8px",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ IS THIS OFFENSIVE? FAQ ══════════════ */}
      <section style={section()}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: C.green,
              marginBottom: "12px",
            }}
          >
            Is This Offensive? Honest Answers.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", maxWidth: "520px", margin: "0 auto" }}>
            Real questions, direct answers — no judgment.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {faqItems.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                background: C.white,
                border: "1px solid #e8e8e8",
                borderRadius: "8px",
                padding: "28px 24px",
                textAlign: "left",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.2s",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: f.badgeColor,
                    color: C.white,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {f.badge}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading), serif",
                  fontSize: "1.15rem",
                  color: C.green,
                  marginBottom: "10px",
                }}
              >
                {f.q}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "#4a4a4a",
                  margin: 0,
                  maxHeight: openFaq === i ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                {f.a}
              </p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  fontSize: "0.82rem",
                  color: C.gold,
                  fontWeight: 600,
                }}
              >
                {openFaq === i ? "Close" : "Read answer"}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ══════════════ DAILY AYAH CTA ══════════════ */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            border: `2px solid ${C.gold}`,
            borderRadius: "12px",
            padding: "56px 40px",
            position: "relative",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <CrescentSvg size={56} color={C.gold} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              color: C.green,
              marginBottom: "16px",
            }}
          >
            Start Each Day With the Words of the Quran
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#666",
              maxWidth: "480px",
              margin: "0 auto 32px",
            }}
          >
            A new ayah every day — with translation, transliteration, and reflection. Begin your morning with intention.
          </p>
          <a
            href="/daily-ayah"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              backgroundColor: C.green,
              color: C.white,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              borderRadius: "4px",
              letterSpacing: "0.5px",
            }}
          >
            Read Today&apos;s Ayah
          </a>
        </div>
      </section>

      {/* ══════════════ LATEST BLOG ══════════════ */}
      <section style={{ backgroundColor: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: C.green,
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            From the Blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {blogPosts.map((post) => (
              <a
                key={post.title}
                href="/blog"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  backgroundColor: C.bg,
                }}
              >
                <div style={{ height: "6px", backgroundColor: C.green }} />
                <div style={{ padding: "28px 24px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: C.gold,
                      marginBottom: "12px",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading), serif",
                      fontSize: "1.2rem",
                      color: C.green,
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#4a4a4a", margin: 0 }}>
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SHOP CTA ══════════════ */}
      <section
        style={{
          backgroundColor: C.green,
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GeometricPattern opacity={0.05} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: C.gold,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Wear Your Faith. Own Your Identity.
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "36px",
              lineHeight: 1.6,
            }}
          >
            Muslim-American pride apparel — designed with intention, built for people who live their faith out loud.
          </p>
          <a
            href="/shop"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              backgroundColor: C.gold,
              color: C.dark,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              borderRadius: "4px",
              letterSpacing: "0.5px",
            }}
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}
