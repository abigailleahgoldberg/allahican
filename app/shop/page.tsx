import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop -- AllahiCan",
  description: "Muslim-American pride gear. Tees, hats, and more. Stars, stripes, and the basmala.",
};

const products = [
  {
    name: "AllahiCan Classic Tee",
    price: "$28",
    description: "Stars, stripes, and the basmala. Wear it all. 100% cotton, unisex fit. The shirt that started everything.",
    tag: "Bestseller",
    emoji: "\u{1F455}",
    url: "https://store.allahican.com/products/classic-tee?tag=allahican-20",
    details: [
      "100% ring-spun cotton",
      "Unisex sizing, S through 3XL",
      "Basmala printed on front",
      "Washes well. Wears better.",
    ],
  },
  {
    name: "Crescent & Stars Cap",
    price: "$25",
    description: "For the Muslim who needs a hat that gets it. Structured 6-panel cap with crescent moon embroidery. America on the brim.",
    tag: "New",
    emoji: "\u{1F9E2}",
    url: "https://store.allahican.com/products/crescent-cap?tag=allahican-20",
    details: [
      "Structured 6-panel design",
      "Adjustable strap, one size fits all",
      "Embroidered crescent and stars",
      "Forest green with gold accents",
    ],
  },
];

export default function ShopPage() {
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
          The Store
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "bold", color: "#ffffff", marginBottom: "16px" }}>
          Mashallah. Great taste.
        </h1>
        <p style={{ color: "#FAFAF8", opacity: 0.75, fontSize: "18px", maxWidth: "520px", margin: "0 auto" }}>
          Wear your identity. Both of them. All of them.
          Muslim-American pride in every thread.
        </p>
      </div>

      {/* Products */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "56px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "40px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                backgroundColor: "#060C06",
                border: "1px solid #2D7D32",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {/* Product Image Placeholder */}
              <div
                style={{
                  backgroundColor: "#1a4a1a",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span style={{ fontSize: "80px" }}>{product.emoji}</span>
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    backgroundColor: "#C9A84C",
                    color: "#060C06",
                    fontSize: "12px",
                    fontWeight: "bold",
                    padding: "4px 10px",
                    borderRadius: "3px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Product Info */}
              <div style={{ padding: "28px" }}>
                <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>
                  {product.name}
                </h2>
                <p style={{ color: "#FAFAF8", opacity: 0.8, fontSize: "16px", lineHeight: 1.6, marginBottom: "20px" }}>
                  {product.description}
                </p>

                <ul style={{ listStyle: "none", marginBottom: "24px", padding: 0 }}>
                  {product.details.map((detail) => (
                    <li
                      key={detail}
                      style={{
                        color: "#FAFAF8",
                        opacity: 0.7,
                        fontSize: "14px",
                        marginBottom: "6px",
                        paddingLeft: "18px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#C9A84C",
                        }}
                      >
                        +
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#C9A84C", fontSize: "28px", fontWeight: "bold" }}>
                    {product.price}
                  </span>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#C9A84C",
                      color: "#060C06",
                      padding: "12px 28px",
                      borderRadius: "4px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      textDecoration: "none",
                    }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Store Link */}
        <div
          style={{
            marginTop: "56px",
            padding: "40px",
            backgroundColor: "#060C06",
            border: "2px solid #C9A84C",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>
            More drops. More gear. More you.
          </h2>
          <p style={{ color: "#FAFAF8", opacity: 0.75, fontSize: "16px", marginBottom: "28px" }}>
            Visit the full AllahiCan store for new releases, seasonal pieces,
            and gifts for every occasion from Eid to graduation.
          </p>
          <a
            href="https://store.allahican.com?tag=allahican-20"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#C9A84C",
              color: "#060C06",
              padding: "14px 36px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Visit store.allahican.com
          </a>
        </div>

        {/* Occasions */}
        <div style={{ marginTop: "56px" }}>
          <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "bold", marginBottom: "8px", textAlign: "center" }}>
            Shop by Occasion
          </h2>
          <p style={{ color: "#FAFAF8", opacity: 0.7, textAlign: "center", marginBottom: "32px", fontSize: "16px" }}>
            There is always a reason. We have the gear.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {[
              "Eid al-Fitr",
              "Eid al-Adha",
              "Ramadan",
              "Aqiqah (Baby Shower)",
              "Graduation",
              "Just Because",
            ].map((occasion) => (
              <a
                key={occasion}
                href={`https://store.allahican.com?occasion=${occasion.toLowerCase().replace(/\s|[()]/g, "-")}&tag=allahican-20`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#0C2E0C",
                  border: "1px solid #2D7D32",
                  color: "#FAFAF8",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {occasion}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
