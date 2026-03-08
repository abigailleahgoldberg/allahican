import type { Metadata } from "next";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Culture Blog -- AllahiCan",
  description: "Muslim-American culture, history, and identity. From Ramadan to the first mosque in America, we cover it all.",
};

const categoryColors: Record<string, string> = {
  Culture: "#2D7D32",
  History: "#C9A84C",
  Religion: "#1a5c9e",
  Community: "#7b3fa0",
};

export default function BlogPage() {
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
          The Culture
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "bold", color: "#ffffff", marginBottom: "16px" }}>
          Muslim-American Stories
        </h1>
        <p style={{ color: "#FAFAF8", opacity: 0.75, fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
          History, faith, identity, and culture -- written for anyone who wants to understand.
        </p>
      </div>

      {/* Posts Grid */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "56px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                backgroundColor: "#060C06",
                border: "1px solid #2D7D32",
                borderRadius: "8px",
                padding: "28px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    backgroundColor: categoryColors[post.category] || "#2D7D32",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "3px",
                  }}
                >
                  {post.category}
                </span>
              </div>

              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  color: "#FAFAF8",
                  opacity: 0.75,
                  fontSize: "15px",
                  lineHeight: 1.6,
                  margin: 0,
                  flex: 1,
                }}
              >
                {post.description}
              </p>

              <span
                style={{
                  color: "#C9A84C",
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginTop: "4px",
                }}
              >
                Read more
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
