import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise -- AllahiCan",
  description: "Reach Muslim-American consumers who are engaged, values-driven, and ready to support brands that get it. Advertise with AllahiCan.",
};

const placements = [
  {
    name: "Homepage Banner",
    description: "Top-of-page placement on allahican.com. Seen by every visitor. First impression, maximum reach.",
    specs: "1200 x 120px -- Desktop. 600 x 100px -- Mobile.",
    price: "Contact for pricing",
  },
  {
    name: "Blog Post Sponsorship",
    description: "Your brand mentioned in a relevant culture post. Reach readers who are actively learning and engaged.",
    specs: "In-text mention + end-of-post callout. 400+ words of context.",
    price: "Contact for pricing",
  },
  {
    name: "Newsletter Feature",
    description: "Featured placement in the AllahiCan email list. Direct to inboxes. No algorithm, no noise.",
    specs: "Header or mid-email placement. Text + link.",
    price: "Contact for pricing",
  },
  {
    name: "Footer Network Link",
    description: "Permanent link in the AllahiCan footer, alongside our trusted network of partner sites.",
    specs: "Text link with site name. Persistent placement on every page.",
    price: "Contact for pricing",
  },
];

const goodFit = [
  "Halal food brands and grocery services",
  "Muslim-owned businesses of all kinds",
  "Islamic fashion and modest clothing",
  "Travel and Hajj/Umrah services",
  "Education, tutoring, and Quran learning platforms",
  "Financial services with Islamic finance options",
  "Books, media, and cultural organizations",
  "Family and community services",
  "American brands that want to reach Muslim consumers authentically",
];

const notAccepted = [
  "Gambling, casinos, or betting services",
  "Alcohol or other intoxicants",
  "Adult content of any kind",
  "Anti-Muslim messaging or organizations",
  "Any content that demeans or stereotypes Muslim communities",
  "Predatory financial products",
  "Political campaign advertising",
];

export default function AdvertisePage() {
  return (
    <div style={{ backgroundColor: "#0C2E0C", color: "#FAFAF8", fontFamily: "Georgia, serif", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#060C06",
          borderBottom: "1px solid #2D7D32",
          padding: "56px 24px 48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#C9A84C",
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Partner With Us
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "bold", color: "#ffffff", marginBottom: "16px" }}>
          Reach Muslim Americans.
        </h1>
        <p style={{ color: "#FAFAF8", opacity: 0.75, fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
          AllahiCan reaches an engaged, values-driven Muslim-American audience.
          If your brand belongs in this conversation, we want to hear from you.
        </p>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "56px 24px" }}>

        {/* Why Advertise */}
        <div
          style={{
            backgroundColor: "#060C06",
            border: "1px solid #2D7D32",
            borderRadius: "10px",
            padding: "40px",
            marginBottom: "56px",
          }}
        >
          <h2 style={{ color: "#C9A84C", fontSize: "26px", fontWeight: "bold", marginBottom: "16px" }}>
            Why AllahiCan?
          </h2>
          <p style={{ color: "#FAFAF8", fontSize: "16px", lineHeight: 1.75, marginBottom: "16px" }}>
            The Muslim-American market is 3.45 million people strong, growing, and underserved by mainstream media.
            AllahiCan is a destination for Muslim Americans who are proud of both identities and looking for brands
            that understand them.
          </p>
          <p style={{ color: "#FAFAF8", fontSize: "16px", lineHeight: 1.75, marginBottom: "16px" }}>
            Our readers are not looking for a brand that tolerates them. They are looking for a brand that gets them.
            If that is you, this is where you belong.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "24px",
              marginTop: "32px",
            }}
          >
            {[
              { number: "3.45M+", label: "Muslim Americans" },
              { number: "1929", label: "Muslims in America since" },
              { number: "100%", label: "Culture-focused content" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#C9A84C", fontSize: "32px", fontWeight: "bold", marginBottom: "4px" }}>
                  {stat.number}
                </div>
                <div style={{ color: "#FAFAF8", opacity: 0.7, fontSize: "13px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Placements */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "bold", marginBottom: "32px" }}>
            Ad Placements
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {placements.map((placement) => (
              <div
                key={placement.name}
                style={{
                  backgroundColor: "#060C06",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "28px",
                }}
              >
                <h3 style={{ color: "#C9A84C", fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
                  {placement.name}
                </h3>
                <p style={{ color: "#FAFAF8", fontSize: "15px", lineHeight: 1.65, marginBottom: "12px", opacity: 0.85 }}>
                  {placement.description}
                </p>
                <p style={{ color: "#FAFAF8", opacity: 0.5, fontSize: "13px", marginBottom: "16px" }}>
                  {placement.specs}
                </p>
                <div style={{ color: "#C9A84C", fontWeight: "bold", fontSize: "15px" }}>{placement.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Good Fit */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              backgroundColor: "#060C06",
              border: "1px solid #2D7D32",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <h2 style={{ color: "#2D7D32", fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
              We Work Well With...
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {goodFit.map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#FAFAF8",
                    fontSize: "14px",
                    marginBottom: "8px",
                    paddingLeft: "18px",
                    position: "relative",
                    opacity: 0.9,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#2D7D32" }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              backgroundColor: "#060C06",
              border: "1px solid #8B1A1A",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <h2 style={{ color: "#cc3333", fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
              We Do Not Accept...
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {notAccepted.map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#FAFAF8",
                    fontSize: "14px",
                    marginBottom: "8px",
                    paddingLeft: "18px",
                    position: "relative",
                    opacity: 0.9,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#cc3333" }}>x</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ color: "#FAFAF8", opacity: 0.55, fontSize: "13px", marginTop: "16px" }}>
              These categories are not subject to negotiation. Our audience comes first.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            backgroundColor: "#060C06",
            border: "2px solid #C9A84C",
            borderRadius: "10px",
            padding: "48px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>
            Let's Talk
          </h2>
          <p style={{ color: "#FAFAF8", opacity: 0.75, fontSize: "16px", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
            Send us a note with your brand, your goals, and which placement you are interested in.
            We will get back to you within two business days. Inshallah.
          </p>
          <form
            action="https://formspree.io/f/allahican-advertise"
            method="POST"
            style={{ maxWidth: "480px", margin: "0 auto", textAlign: "left" }}
          >
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", marginBottom: "6px", fontWeight: "bold" }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "4px",
                  color: "#FAFAF8",
                  fontSize: "15px",
                }}
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", marginBottom: "6px", fontWeight: "bold" }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "4px",
                  color: "#FAFAF8",
                  fontSize: "15px",
                }}
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", marginBottom: "6px", fontWeight: "bold" }}>
                Brand / Website
              </label>
              <input
                type="text"
                name="brand"
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "4px",
                  color: "#FAFAF8",
                  fontSize: "15px",
                }}
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", marginBottom: "6px", fontWeight: "bold" }}>
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  borderRadius: "4px",
                  color: "#FAFAF8",
                  fontSize: "15px",
                  resize: "vertical",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#C9A84C",
                color: "#060C06",
                padding: "14px",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
