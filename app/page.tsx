"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";

const TICKER_TEXT =
  "WHERE IMAN MEETS AMERICA \u2022 ALL I CAN BE IS BOTH \u2022 EST. SINCE THE FIRST MOSQUE IN NORTH DAKOTA (1929) \u2022 HABIBI, YOU FOUND US \u2022 SALAAM, SHOP, REPEAT \u2022 MASHALLAH THIS MERCH \u2022 ";

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
    definition:
      "God willing. Also: we'll see. Also: absolutely not. Context is everything.",
  },
  {
    term: "Mashallah",
    definition:
      "God has willed it. Used when something is beautiful, impressive, or when someone's baby is ugly and you need a graceful exit.",
  },
  {
    term: "Habibi / Habibti",
    definition:
      "My love. Term of endearment for everyone -- your cousin, the cashier, a stranger who held the door.",
  },
  {
    term: "Alhamdulillah",
    definition:
      "Praise be to God. The universal Muslim response to How are you? Used for good news, bad news, and everything in between.",
  },
  {
    term: "Barakallah",
    definition:
      "May God bless you. What Muslim grandmothers say 47 times per visit.",
  },
  {
    term: "Jumu'ah",
    definition:
      "Friday prayer. The weekly gathering. Also the reason Muslim office workers block their calendars at noon on Fridays.",
  },
  {
    term: "Eid",
    definition:
      "The holiday. There are two. They involve prayer, food, new clothes, and more food. Non-Muslims are always invited. Bring an appetite.",
  },
  {
    term: "Ramadan",
    definition:
      "The holy month of fasting from dawn to sunset. The most communal, spiritual, sleepless, and delicious month of the Muslim year.",
  },
];

const holidays = [
  {
    name: "Ramadan",
    slug: "ramadan",
    description: "The holy month of fasting. The whole community comes alive at iftar.",
  },
  {
    name: "Eid al-Fitr",
    slug: "eid-al-fitr",
    description: "The feast after Ramadan. New clothes, prayer, family, infinite food.",
  },
  {
    name: "Eid al-Adha",
    slug: "eid-al-adha",
    description: "The feast of sacrifice, honoring Ibrahim's devotion. Second biggest Eid.",
  },
  {
    name: "Laylat al-Qadr",
    slug: "laylat-al-qadr",
    description: "The Night of Power. Better than a thousand months. Stay awake.",
  },
  {
    name: "Mawlid al-Nabi",
    slug: "mawlid-al-nabi",
    description: "The birthday of the Prophet (peace be upon him). Nasheed and gratitude.",
  },
  {
    name: "Islamic New Year",
    slug: "islamic-new-year",
    description: "Start of the Hijri calendar. Quiet, reflective. Different energy than Times Square.",
  },
  {
    name: "Ashura",
    slug: "ashura",
    description: "A day of fasting and reflection. Honored across the board.",
  },
  {
    name: "Hajj Season",
    slug: "hajj",
    description: "The pilgrimage to Mecca. Two million people. One direction.",
  },
];

const products = [
  {
    id: "classic-tee",
    name: "AllahiCan Classic Tee",
    price: 28,
    priceFormatted: "$28",
    description: "Stars, stripes, and the basmala. Wear it all.",
    url: "https://store.allahican.com/products/classic-tee?tag=allahican-20",
  },
  {
    id: "crescent-cap",
    name: "Crescent & Stars Cap",
    price: 25,
    priceFormatted: "$25",
    description: "For the Muslim who needs a hat that gets it.",
    url: "https://store.allahican.com/products/crescent-cap?tag=allahican-20",
  },
];

const stats = [
  {
    number: "3.45M+",
    label: "Muslim Americans",
  },
  {
    number: "3,800+",
    label: "Mosques Nationwide",
  },
  {
    number: "1200s",
    label: "First Muslims in America",
  },
  {
    number: "1929",
    label: "First Mosque Built",
  },
  {
    number: "23%",
    label: "Annual Growth",
  },
  {
    number: "15-30%",
    label: "Enslaved Africans Were Muslim",
  },
];

const occasions = [
  {
    name: "Eid al-Fitr",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
    desc: "Celebrate the end of Ramadan in style.",
    href: "https://store.allahican.com?occasion=eid-al-fitr&tag=allahican-20",
  },
  {
    name: "Eid al-Adha",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    desc: "Dress the part for the feast of sacrifice.",
    href: "https://store.allahican.com?occasion=eid-al-adha&tag=allahican-20",
  },
  {
    name: "Ramadan",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    desc: "Gear for the most blessed month.",
    href: "https://store.allahican.com?occasion=ramadan&tag=allahican-20",
  },
  {
    name: "Hajj",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    desc: "Honor the pilgrimage with the right gear.",
    href: "https://store.allahican.com?occasion=hajj&tag=allahican-20",
  },
  {
    name: "Wedding / Nikah",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    desc: "Gift the couple something meaningful.",
    href: "https://store.allahican.com?occasion=wedding&tag=allahican-20",
  },
  {
    name: "Graduation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    desc: "Mashallah, they did it.",
    href: "https://store.allahican.com?occasion=graduation&tag=allahican-20",
  },
  {
    name: "New Muslim Welcome",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    desc: "Welcome to the ummah. Here is your first look.",
    href: "https://store.allahican.com?occasion=new-muslim&tag=allahican-20",
  },
  {
    name: "Just Because",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    desc: "You don't need a reason. Habibi, you deserve it.",
    href: "https://store.allahican.com?tag=allahican-20",
  },
];

const faqItems = [
  {
    q: "Is this offensive to Muslims?",
    a: "We are Muslim-Americans making gear for Muslim-Americans (and anyone who loves them). The people behind AllahiCan are believers. This merch is made with respect, not as a costume. If you are buying it in that spirit, you are welcome.",
  },
  {
    q: "Can non-Muslims wear AllahiCan gear?",
    a: "Yes. If you support Muslim Americans, if you have Muslim family or friends, if you want to express solidarity -- that is exactly the spirit we built this for. Just wear it with respect.",
  },
  {
    q: "Is using Islamic phrases on clothing disrespectful?",
    a: "This is a real question, and we take it seriously. Our designs treat Islamic text with reverence. We consulted community members in the design process. Wearing your identity and your faith is not disrespect -- it is pride. Your imam may have opinions. Opinions are free.",
  },
  {
    q: "Who made AllahiCan?",
    a: "AllahiCan is part of the Voice of Cash network -- a collection of identity-forward American culture brands. We exist because Muslim Americans have been here since the beginning and deserve to see themselves reflected in American culture, not just in news coverage.",
  },
  {
    q: "Is the gear halal?",
    a: "The clothing is made from conventional materials. We do not make halal claims about the manufacturing process. What we do claim: every design is made with intention, every phrase is used with respect, and no one at AllahiCan is laughing at you.",
  },
];

// Decorative section divider
function SectionDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        gap: "16px",
      }}
    >
      <div style={{ flex: 1, height: "1px", backgroundColor: "#2D7D32", opacity: 0.4 }} />
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <div style={{ width: "6px", height: "6px", backgroundColor: "#C9A84C", transform: "rotate(45deg)" }} />
        <div style={{ width: "4px", height: "4px", backgroundColor: "#C9A84C", opacity: 0.5, transform: "rotate(45deg)" }} />
        <div style={{ width: "6px", height: "6px", backgroundColor: "#C9A84C", transform: "rotate(45deg)" }} />
      </div>
      <div style={{ flex: 1, height: "1px", backgroundColor: "#2D7D32", opacity: 0.4 }} />
    </div>
  );
}

// FAQ Accordion item
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#0C2E0C",
        border: "1px solid #2D7D32",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "24px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          fontFamily: "var(--font-heading), serif",
          color: "#C9A84C",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div
          style={{
            padding: "0 28px 24px",
            borderTop: "1px solid #2D7D32",
          }}
        >
          <p
            style={{
              color: "#FAFAF8",
              fontSize: "15px",
              lineHeight: 1.75,
              opacity: 0.9,
              paddingTop: "20px",
            }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [subscribeError, setSubscribeError] = useState("");
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  const { addToCart } = useCart();

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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("loading");
    setSubscribeError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
        setSubscribeError(data.error || "Something went wrong.");
      }
    } catch {
      setSubscribeStatus("error");
      setSubscribeError("Something went wrong. Try again.");
    }
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: "#0C2E0C",
        color: "#FAFAF8",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
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
        @media (max-width: 900px) {
          .hero-section { padding: 64px 20px 56px !important; }
          .hero-h1 { font-size: clamp(28px, 7vw, 48px) !important; }
          .hero-sub { font-size: 17px !important; }
          .hero-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .hero-cta-row a { text-align: center !important; }
          .section-padded { padding: 64px 20px !important; }
          .grid-products { grid-template-columns: 1fr !important; }
          .grid-glossary { grid-template-columns: 1fr !important; }
          .grid-holidays { grid-template-columns: 1fr !important; }
          .grid-stats { grid-template-columns: 1fr 1fr !important; }
          .grid-occasions { grid-template-columns: 1fr 1fr !important; }
          .email-form-row { flex-direction: column !important; }
          .email-form-row input { min-width: unset !important; }
          .mobile-cta-bar { display: flex !important; }
          .stats-row { flex-direction: column !important; }
          .stats-divider { display: none !important; }
        }
        @media (max-width: 480px) {
          .grid-occasions { grid-template-columns: 1fr !important; }
          .grid-stats { grid-template-columns: 1fr !important; }
        }
        .mobile-cta-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 150;
          background: #060C06;
          border-top: 2px solid #C9A84C;
          padding: 12px 16px;
          gap: 10px;
        }
        .faq-answer {
          animation: fadeUp 0.2s ease;
        }
        .glossary-card:hover {
          border-color: #C9A84C !important;
          transition: border-color 0.2s ease;
        }
        .holiday-card:hover .holiday-arrow {
          transform: translateX(4px);
        }
        .holiday-arrow {
          transition: transform 0.2s ease;
        }
        .product-card:hover {
          border-color: #C9A84C !important;
          transition: border-color 0.2s ease;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "100px 24px 80px",
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
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: "bold",
              lineHeight: 1.1,
              marginBottom: "28px",
            }}
          >
            <span style={{ color: "#ffffff", display: "block" }}>{hero.line1}</span>
            <span style={{ color: "#C9A84C", display: "block" }}>{hero.line2}</span>
          </h1>
          <p
            className="hero-sub"
            style={{
              fontSize: "20px",
              color: "#FAFAF8",
              maxWidth: "520px",
              margin: "0 auto 48px",
              lineHeight: 1.65,
              opacity: 0.8,
            }}
          >
            {hero.sub}
          </p>
        </div>

        <div
          className="hero-cta-row"
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="/shop"
            style={{
              backgroundColor: "#C9A84C",
              color: "#060C06",
              padding: "15px 36px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              letterSpacing: "0.3px",
            }}
          >
            Shop Now
          </a>
          <a
            href="/blog"
            style={{
              backgroundColor: "transparent",
              color: "#C9A84C",
              padding: "15px 36px",
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
        <div style={{ marginTop: "48px", display: "flex", justifyContent: "center", gap: "10px" }}>
          {heroHeadlines.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setHeroIndex(i);
                setFadeIn(true);
              }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: i === heroIndex ? "#C9A84C" : "#2D7D32",
                cursor: "pointer",
                padding: 0,
                transition: "background-color 0.2s ease",
              }}
              aria-label={`Go to headline ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ── PRODUCTS ── */}
      <section
        className="section-padded"
        style={{
          backgroundColor: "#060C06",
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                color: "#C9A84C",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              The Store
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Mashallah, great taste.
            </h2>
          </div>

          <div
            className="grid-products"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                className="product-card"
                style={{
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Product image area */}
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    backgroundColor: "#1a4a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid #2D7D32",
                  }}
                >
                  {product.id === "classic-tee" ? (
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
                    </svg>
                  ) : (
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  )}
                </div>

                {/* Product info */}
                <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading), serif",
                      color: "#ffffff",
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "6px",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      color: "#FAFAF8",
                      opacity: 0.7,
                      fontSize: "15px",
                      marginBottom: "20px",
                      flex: 1,
                    }}
                  >
                    {product.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "#C9A84C",
                        fontSize: "28px",
                        fontWeight: "bold",
                        fontFamily: "var(--font-heading), serif",
                      }}
                    >
                      {product.priceFormatted}
                    </span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => handleAddToCart(product)}
                        style={{
                          backgroundColor: addedToCart === product.id ? "#2D7D32" : "#C9A84C",
                          color: "#060C06",
                          padding: "10px 18px",
                          borderRadius: "4px",
                          fontWeight: "bold",
                          fontSize: "14px",
                          border: "none",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                          fontFamily: "var(--font-body), sans-serif",
                        }}
                      >
                        {addedToCart === product.id ? "Added" : "Add to Cart"}
                      </button>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "transparent",
                          color: "#C9A84C",
                          padding: "10px 18px",
                          borderRadius: "4px",
                          fontWeight: "bold",
                          fontSize: "14px",
                          border: "1px solid #C9A84C",
                          textDecoration: "none",
                        }}
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href="https://store.allahican.com?tag=allahican-20"
              style={{
                color: "#C9A84C",
                fontSize: "15px",
                textDecoration: "none",
                borderBottom: "1px solid #C9A84C",
                paddingBottom: "2px",
                opacity: 0.85,
              }}
            >
              View all products at store.allahican.com
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── BRAND STORY ── */}
      <section
        className="section-padded"
        style={{ padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Our Story
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "28px",
            }}
          >
            Why AllahiCan Exists
          </h2>
          <p
            style={{
              color: "#FAFAF8",
              fontSize: "18px",
              lineHeight: 1.8,
              opacity: 0.85,
              marginBottom: "16px",
            }}
          >
            Muslim Americans have been here since before this country was a country.
            They built it. They fought for it. And for most of that time, American culture
            looked right through them.
          </p>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "18px",
              lineHeight: 1.8,
              fontFamily: "var(--font-heading), serif",
              fontStyle: "italic",
              marginBottom: "32px",
            }}
          >
            AllahiCan exists to close that gap.
          </p>
          <a
            href="/blog"
            style={{
              color: "#C9A84C",
              fontSize: "15px",
              textDecoration: "none",
              borderBottom: "1px solid #C9A84C",
              paddingBottom: "2px",
            }}
          >
            Read the full story
          </a>
        </div>
      </section>

      <SectionDivider />

      {/* ── GLOSSARY ── */}
      <section
        className="section-padded"
        style={{ backgroundColor: "#060C06", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                color: "#C9A84C",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              The Glossary
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Words Your Neighbors Should Know
            </h2>
          </div>

          <div
            className="grid-glossary"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                className="glossary-card"
                style={{
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderLeft: "4px solid #C9A84C",
                  borderRadius: "8px",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    color: "#C9A84C",
                    fontSize: "21px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontFamily: "var(--font-heading), serif",
                    fontStyle: "italic",
                  }}
                >
                  {item.term}
                </div>
                <p
                  style={{
                    color: "#FAFAF8",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    opacity: 0.85,
                  }}
                >
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── HOLIDAYS ── */}
      <section
        className="section-padded"
        style={{ padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                color: "#C9A84C",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              The Islamic Calendar
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "12px",
              }}
            >
              Islamic Holidays
            </h2>
            <p style={{ color: "#FAFAF8", opacity: 0.65, fontSize: "16px" }}>
              The Islamic calendar is lunar. Dates shift each year. The spirit does not.
            </p>
          </div>

          <div
            className="grid-holidays"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {holidays.map((holiday) => (
              <a
                key={holiday.slug}
                href={`/holidays/${holiday.slug}`}
                className="holiday-card"
                style={{
                  backgroundColor: "#060C06",
                  border: "1px solid #2D7D32",
                  borderTop: "3px solid #C9A84C",
                  borderRadius: "8px",
                  padding: "24px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {holiday.name}
                </h3>
                <p
                  style={{
                    color: "#FAFAF8",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    opacity: 0.75,
                    marginBottom: "16px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  } as React.CSSProperties}
                >
                  {holiday.description}
                </p>
                <span
                  style={{
                    color: "#C9A84C",
                    fontSize: "13px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Learn more
                  <svg
                    className="holiday-arrow"
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
                </span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href="/holidays"
              style={{
                color: "#C9A84C",
                fontSize: "15px",
                textDecoration: "none",
                borderBottom: "1px solid #C9A84C",
                paddingBottom: "2px",
                opacity: 0.85,
              }}
            >
              View all Islamic holidays
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── STATS ── */}
      <section
        className="section-padded"
        style={{ backgroundColor: "#060C06", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                color: "#C9A84C",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              By the Numbers
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Muslim Americans, in Context
            </h2>
          </div>

          {/* Stats horizontal row */}
          <div
            className="stats-row"
            style={{
              display: "flex",
              alignItems: "stretch",
              backgroundColor: "#0C2E0C",
              border: "1px solid #C9A84C",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {stats.map((stat, i) => (
              <>
                <div
                  key={stat.label}
                  style={{
                    flex: 1,
                    padding: "40px 24px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading), serif",
                      fontSize: "clamp(32px, 3.5vw, 52px)",
                      fontWeight: "bold",
                      color: "#C9A84C",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      color: "#FAFAF8",
                      fontSize: "13px",
                      lineHeight: 1.4,
                      opacity: 0.8,
                      maxWidth: "120px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div
                    className="stats-divider"
                    style={{ width: "1px", backgroundColor: "#2D7D32", opacity: 0.5, flexShrink: 0 }}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── OCCASIONS ── */}
      <section
        className="section-padded"
        style={{ padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                color: "#C9A84C",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Every Occasion
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "12px",
              }}
            >
              There Is Always a Reason
            </h2>
            <p style={{ color: "#FAFAF8", opacity: 0.65, fontSize: "16px" }}>
              Shop by occasion. Gift with intention. Barakallah.
            </p>
          </div>

          <div
            className="grid-occasions"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {occasions.map((occ) => (
              <a
                key={occ.name}
                href={occ.href}
                style={{
                  backgroundColor: "#060C06",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "28px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
                  {occ.icon}
                </div>
                <div
                  style={{
                    color: "#C9A84C",
                    fontWeight: "bold",
                    fontSize: "15px",
                    marginBottom: "8px",
                    fontFamily: "var(--font-heading), serif",
                  }}
                >
                  {occ.name}
                </div>
                <p style={{ color: "#FAFAF8", fontSize: "13px", opacity: 0.7, lineHeight: 1.5 }}>
                  {occ.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── FAQ ── */}
      <section
        className="section-padded"
        style={{ backgroundColor: "#060C06", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                color: "#C9A84C",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Real Talk
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "12px",
              }}
            >
              Is This Offensive?
            </h2>
            <p style={{ color: "#FAFAF8", opacity: 0.65, fontSize: "16px" }}>
              Honest answers to the questions people actually ask.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqItems.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── NEWSLETTER ── */}
      <section
        className="section-padded"
        style={{ padding: "96px 24px" }}
      >
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "#060C06",
            border: "2px solid #C9A84C",
            borderRadius: "12px",
            padding: "56px 40px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "32px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            Stay connected.
          </h2>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "16px",
              marginBottom: "36px",
              opacity: 0.9,
            }}
          >
            New drops, culture posts. No spam.
          </p>

          {subscribeStatus === "success" ? (
            <div
              style={{
                backgroundColor: "#0C2E0C",
                border: "1px solid #2D7D32",
                borderRadius: "8px",
                padding: "20px",
                color: "#FAFAF8",
                fontSize: "16px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2D7D32"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ margin: "0 auto 8px", display: "block" }}
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Alhamdulillah. You are subscribed.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
              className="email-form-row"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: "13px 16px",
                  borderRadius: "4px",
                  border: "1px solid #2D7D32",
                  backgroundColor: "#0C2E0C",
                  color: "#FAFAF8",
                  fontSize: "15px",
                  flex: "1",
                  minWidth: "220px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              />
              <button
                type="submit"
                disabled={subscribeStatus === "loading"}
                style={{
                  backgroundColor: subscribeStatus === "loading" ? "#8a8a8a" : "#C9A84C",
                  color: "#060C06",
                  padding: "13px 24px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  border: "none",
                  cursor: subscribeStatus === "loading" ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {subscribeStatus === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          )}

          {subscribeStatus === "error" && (
            <p style={{ color: "#ff6b6b", fontSize: "13px", marginTop: "12px" }}>
              {subscribeError}
            </p>
          )}
        </div>
      </section>

      <SectionDivider />

      {/* ── BLOG TEASER ── */}
      <section
        className="section-padded"
        style={{ backgroundColor: "#060C06", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            The Culture
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Read. Learn. Share.
          </h2>
          <p
            style={{
              color: "#FAFAF8",
              opacity: 0.7,
              marginBottom: "40px",
              fontSize: "17px",
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            From Muslim American history to what Ramadan actually feels like.
            For everyone.
          </p>
          <a
            href="/blog"
            style={{
              backgroundColor: "#2D7D32",
              color: "#ffffff",
              padding: "15px 36px",
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

      {/* Mobile sticky CTA bar */}
      <div className="mobile-cta-bar" style={{ paddingBottom: "env(safe-area-inset-bottom, 12px)" }}>
        <a
          href="/shop"
          style={{
            flex: 1,
            backgroundColor: "#C9A84C",
            color: "#060C06",
            padding: "12px",
            borderRadius: "4px",
            fontWeight: "bold",
            fontSize: "15px",
            textDecoration: "none",
            textAlign: "center",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Shop Now
        </a>
        <a
          href="/cart"
          style={{
            flex: 1,
            backgroundColor: "transparent",
            color: "#C9A84C",
            padding: "12px",
            borderRadius: "4px",
            fontWeight: "bold",
            fontSize: "15px",
            textDecoration: "none",
            textAlign: "center",
            border: "2px solid #C9A84C",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Cart
        </a>
      </div>
    </div>
  );
}
