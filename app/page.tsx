"use client";

import { useState, useEffect } from "react";

const TICKER_TEXT = "WHERE IMAN MEETS AMERICA \u2022 ALL I CAN BE IS BOTH \u2022 EST. SINCE THE FIRST MOSQUE IN NORTH DAKOTA (1929) \u2022 HABIBI, YOU FOUND US \u2022 SALAAM, SHOP, REPEAT \u2022 MASHALLAH THIS MERCH \u2022 ";

const heroHeadlines = [
  {
    line1: "Where Faith",
    line2: "Meets Freedom.",
    sub: "Gear for Muslims who are unapologetically American and unapologetically Muslim.",
  },
  {
    line1: "We put the 'Mus' in",
    line2: "Must-Have Merch.",
    sub: "It was always going to be us. It was always going to be America.",
  },
  {
    line1: "Mashallah --",
    line2: "you're about to look great.",
    sub: "Your imam's reaction may vary. Your mom's won't.",
  },
  {
    line1: "Muslim American.",
    line2: "Est. a very long time ago.",
    sub: "We were here before the Statue of Liberty finished her speech.",
  },
  {
    line1: "We schlepped all the way to America",
    line2: "to sell you a tee.",
    sub: "Actually we flew. But the sentiment stands.",
  },
];

const glossaryTerms = [
  {
    term: "Inshallah",
    definition: "God willing. Also: we'll see. Also: absolutely not. Context is everything.",
  },
  {
    term: "Mashallah",
    definition: "God has willed it. Used when something is beautiful, impressive, or when someone's baby is ugly and you need a graceful exit.",
  },
  {
    term: "Habibi / Habibti",
    definition: "My love. Term of endearment for everyone -- your cousin, the cashier, a stranger who held the door.",
  },
  {
    term: "Alhamdulillah",
    definition: "Praise be to God. The universal Muslim response to How are you? Used for good news, bad news, and everything in between.",
  },
  {
    term: "Barakallah",
    definition: "May God bless you. What Muslim grandmothers say 47 times per visit.",
  },
  {
    term: "Jumu'ah",
    definition: "Friday prayer. The weekly gathering. Also the reason Muslim office workers block their calendars at noon on Fridays.",
  },
  {
    term: "Eid",
    definition: "The holiday. There are two. They involve prayer, food, new clothes, and more food. Non-Muslims are always invited. Bring an appetite.",
  },
  {
    term: "Ramadan",
    definition: "The holy month of fasting from dawn to sunset. The most communal, spiritual, sleepless, and delicious month of the Muslim year.",
  },
];

const holidays = [
  {
    name: "Ramadan",
    month: "Ramadan (9th month)",
    description: "The holy month of fasting. The whole community comes alive at iftar. Every night feels like a reunion.",
  },
  {
    name: "Eid al-Fitr",
    month: "Shawwal 1",
    description: "The feast after Ramadan. New clothes, prayer, family, food. Infinite food. You earned every bite.",
  },
  {
    name: "Eid al-Adha",
    month: "Dhul Hijjah 10",
    description: "The feast of sacrifice, honoring Ibrahim's devotion. Marks the end of Hajj. Second biggest Eid of the year.",
  },
  {
    name: "Islamic New Year",
    month: "Muharram 1",
    description: "The start of the Hijri calendar. Quiet, reflective. The Muslim New Year has a different energy than Times Square.",
  },
  {
    name: "Ashura",
    month: "Muharram 10",
    description: "A day of fasting and reflection. Observed differently by Sunni and Shia Muslims, but honored across the board.",
  },
  {
    name: "Mawlid al-Nabi",
    month: "Rabi' al-Awwal 12",
    description: "The birthday of the Prophet Muhammad (peace be upon him). Celebrated with gatherings, nasheed, and gratitude.",
  },
  {
    name: "Laylat al-Qadr",
    month: "Ramadan 27 (approx.)",
    description: "The Night of Power. Better than a thousand months. The night the Quran was first revealed. You want to be awake for this one.",
  },
  {
    name: "Hajj Season",
    month: "Dhul Hijjah 8-13",
    description: "The pilgrimage to Mecca. One of the five pillars of Islam. Two million people. One direction. Unforgettable.",
  },
];

const products = [
  {
    name: "AllahiCan Classic Tee",
    price: "$28",
    description: "Stars, stripes, and the basmala. Wear it all.",
    url: "https://store.allahican.com/products/classic-tee?tag=allahican-20",
  },
  {
    name: "Crescent & Stars Cap",
    price: "$25",
    description: "For the Muslim who needs a hat that gets it.",
    url: "https://store.allahican.com/products/crescent-cap?tag=allahican-20",
  },
];

const stats = [
  {
    number: "3.45M",
    label: "Muslim Americans",
    detail: "The estimated Muslim-American population -- a community that has been part of this country since the earliest days of its founding.",
  },
  {
    number: "1200s",
    label: "First Muslims in America",
    detail: "Muslim explorers and enslaved West Africans (many of whom were Muslim) arrived in the Americas centuries before the United States existed.",
  },
  {
    number: "1929",
    label: "First Mosque Built",
    detail: "The first mosque built specifically as a mosque in the United States was constructed in Ross, North Dakota. Yes, North Dakota. Allahu akbar.",
  },
];

const occasions = [
  { name: "Eid al-Fitr", emoji: "\u{1F319}", desc: "Celebrate the end of Ramadan in style." },
  { name: "Eid al-Adha", emoji: "\u{1F410}", desc: "Dress the part for the feast of sacrifice." },
  { name: "Ramadan", emoji: "\u2728", desc: "Gear for the most blessed month." },
  { name: "Baby Shower (Aqiqah)", emoji: "\u{1F476}", desc: "Welcome the little one with love." },
  { name: "Graduation", emoji: "\u{1F393}", desc: "Mashallah, they did it." },
  { name: "Just Because", emoji: "\u{1F49B}", desc: "You don't need a reason. Habibi, you deserve it." },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setHeroIndex((i) => (i + 1) % heroHeadlines.length);
        setFadeIn(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const hero = heroHeadlines[heroIndex];

  return (
    <div style={{ backgroundColor: "#0C2E0C", color: "#FAFAF8", fontFamily: "Georgia, serif" }}>
      {/* Ticker Tape */}
      <div
        style={{
          backgroundColor: "#C9A84C",
          color: "#060C06",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "8px 0",
          fontSize: "13px",
          fontWeight: "bold",
          letterSpacing: "0.5px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "ticker 35s linear infinite",
          }}
        >
          {TICKER_TEXT.repeat(4)}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "80px 24px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            opacity: fadeIn ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: "bold",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#ffffff", display: "block" }}>{hero.line1}</span>
            <span style={{ color: "#C9A84C", display: "block" }}>{hero.line2}</span>
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#FAFAF8",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
              opacity: 0.85,
            }}
          >
            {hero.sub}
          </p>
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://store.allahican.com?tag=allahican-20"
            style={{
              backgroundColor: "#C9A84C",
              color: "#060C06",
              padding: "14px 32px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Shop Now
          </a>
          <a
            href="/blog"
            style={{
              backgroundColor: "transparent",
              color: "#C9A84C",
              padding: "14px 32px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              border: "2px solid #C9A84C",
            }}
          >
            Read the Culture
          </a>
        </div>

        {/* Headline dots */}
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "8px" }}>
          {heroHeadlines.map((_, i) => (
            <button
              key={i}
              onClick={() => { setHeroIndex(i); setFadeIn(true); }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: i === heroIndex ? "#C9A84C" : "#2D7D32",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Go to headline ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section
        style={{
          backgroundColor: "#060C06",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
              The Store
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#ffffff" }}>
              Mashallah, great taste.
            </h2>
            <p style={{ color: "#FAFAF8", opacity: 0.75, marginTop: "12px", fontSize: "17px" }}>
              Wear your identity. Both of them. All of them.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "32px",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#1a4a1a",
                    borderRadius: "6px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                  }}
                >
                  {product.name.includes("Tee") ? "\u{1F455}" : "\u{1F9E2}"}
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
                  {product.name}
                </h3>
                <p style={{ color: "#FAFAF8", opacity: 0.8, fontSize: "15px", marginBottom: "16px" }}>
                  {product.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#C9A84C", fontSize: "22px", fontWeight: "bold" }}>{product.price}</span>
                  <span
                    style={{
                      backgroundColor: "#C9A84C",
                      color: "#060C06",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Shop
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href="https://store.allahican.com?tag=allahican-20"
              style={{
                color: "#C9A84C",
                fontSize: "16px",
                textDecoration: "none",
                borderBottom: "1px solid #C9A84C",
                paddingBottom: "2px",
              }}
            >
              View all products at store.allahican.com
            </a>
          </div>
        </div>
      </section>

      {/* Islamic Glossary */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
              The Glossary
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#ffffff" }}>
              Words Your Neighbors Should Know
            </h2>
            <p style={{ color: "#FAFAF8", opacity: 0.75, marginTop: "12px", fontSize: "17px" }}>
              A brief, essential guide to the words that hold a whole culture.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                style={{
                  backgroundColor: "#060C06",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    color: "#C9A84C",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontStyle: "italic",
                  }}
                >
                  {item.term}
                </div>
                <p style={{ color: "#FAFAF8", fontSize: "15px", lineHeight: 1.65, opacity: 0.9 }}>
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Holidays Calendar */}
      <section style={{ backgroundColor: "#060C06", padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
              Mark Your Calendar
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#ffffff" }}>
              Islamic Holidays
            </h2>
            <p style={{ color: "#FAFAF8", opacity: 0.75, marginTop: "12px", fontSize: "17px" }}>
              The Islamic calendar is lunar. Dates shift each year. The community does not.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
            }}
          >
            {holidays.map((holiday) => (
              <div
                key={holiday.name}
                style={{
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "24px",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#2D7D32",
                    borderRadius: "6px",
                    padding: "8px 12px",
                    fontSize: "12px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    alignSelf: "flex-start",
                    minWidth: "80px",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {holiday.month}
                </div>
                <div>
                  <h3 style={{ color: "#C9A84C", fontSize: "17px", fontWeight: "bold", marginBottom: "6px" }}>
                    {holiday.name}
                  </h3>
                  <p style={{ color: "#FAFAF8", fontSize: "14px", lineHeight: 1.6, opacity: 0.85 }}>
                    {holiday.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Stats */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
              By the Numbers
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#ffffff" }}>
              Muslim Americans, in Context
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#060C06",
                  border: "1px solid #C9A84C",
                  borderRadius: "8px",
                  padding: "32px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "48px", fontWeight: "bold", color: "#C9A84C", marginBottom: "8px" }}>
                  {stat.number}
                </div>
                <div style={{ color: "#ffffff", fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>
                  {stat.label}
                </div>
                <p style={{ color: "#FAFAF8", fontSize: "14px", lineHeight: 1.65, opacity: 0.8 }}>
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section style={{ backgroundColor: "#060C06", padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
              Every Occasion
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#ffffff" }}>
              There Is Always a Reason
            </h2>
            <p style={{ color: "#FAFAF8", opacity: 0.75, marginTop: "12px", fontSize: "17px" }}>
              Shop by occasion. Gift with intention. Barakallah.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {occasions.map((occ) => (
              <a
                key={occ.name}
                href={`https://store.allahican.com?occasion=${occ.name.toLowerCase().replace(/\s/g, "-")}&tag=allahican-20`}
                style={{
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "24px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{occ.emoji}</div>
                <div style={{ color: "#C9A84C", fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>
                  {occ.name}
                </div>
                <p style={{ color: "#FAFAF8", fontSize: "13px", opacity: 0.8 }}>{occ.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section style={{ padding: "64px 24px" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "#060C06",
            border: "2px solid #C9A84C",
            borderRadius: "12px",
            padding: "48px 32px",
          }}
        >
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#ffffff", marginBottom: "12px" }}>
            Stay in the ummah.
          </h2>
          <p style={{ color: "#C9A84C", fontSize: "20px", marginBottom: "8px" }}>Get the drop.</p>
          <p style={{ color: "#FAFAF8", opacity: 0.75, marginBottom: "32px", fontSize: "16px" }}>
            New drops, culture posts, and occasional reminders that you are doing great. Inshallah.
          </p>
          <form
            action="https://formspree.io/f/allahican"
            method="POST"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "12px 16px",
                borderRadius: "4px",
                border: "1px solid #2D7D32",
                backgroundColor: "#0C2E0C",
                color: "#FAFAF8",
                fontSize: "15px",
                flex: "1",
                minWidth: "220px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#C9A84C",
                color: "#060C06",
                padding: "12px 24px",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "15px",
                border: "none",
              }}
            >
              Subscribe
            </button>
          </form>
          <p style={{ color: "#8a8a8a", fontSize: "12px", marginTop: "16px" }}>
            No spam. Unsubscribe anytime. We respect your inbox like we respect Jumu'ah.
          </p>
        </div>
      </section>

      {/* Culture Blog Teaser */}
      <section style={{ backgroundColor: "#060C06", padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
            The Culture
          </p>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#ffffff", marginBottom: "16px" }}>
            Read. Learn. Share.
          </h2>
          <p style={{ color: "#FAFAF8", opacity: 0.75, marginBottom: "32px", fontSize: "17px", maxWidth: "560px", margin: "0 auto 32px" }}>
            From the history of Muslims in America to what Ramadan actually feels like,
            our culture blog is for everyone.
          </p>
          <a
            href="/blog"
            style={{
              backgroundColor: "#2D7D32",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Explore the Blog
          </a>
        </div>
      </section>
    </div>
  );
}
