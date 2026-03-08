import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "../data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} -- AllahiCan`,
    description: post.description,
  };
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 style="color:#C9A84C;font-size:24px;font-weight:bold;margin:32px 0 14px;">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#ffffff;">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#C9A84C;">$1</a>')
    .replace(/^- (.+)$/gm, '<li style="margin-bottom:6px;color:#FAFAF8;">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul style="margin:12px 0 12px 24px;">${match}</ul>`)
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("<h2") || block.startsWith("<ul")) return block;
      if (block.trim() === "") return "";
      return `<p style="color:#FAFAF8;font-size:17px;line-height:1.75;margin-bottom:20px;">${block.trim()}</p>`;
    })
    .join("\n");
}

const categoryColors: Record<string, string> = {
  Culture: "#2D7D32",
  History: "#C9A84C",
  Religion: "#1a5c9e",
  Community: "#7b3fa0",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const html = renderMarkdown(post.content);

  return (
    <div style={{ backgroundColor: "#0C2E0C", color: "#FAFAF8", fontFamily: "Georgia, serif", minHeight: "100vh" }}>
      {/* Article Header */}
      <div
        style={{
          backgroundColor: "#060C06",
          borderBottom: "1px solid #2D7D32",
          padding: "56px 24px 48px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ marginBottom: "20px" }}>
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
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: "bold",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              color: "#FAFAF8",
              opacity: 0.75,
              fontSize: "19px",
              lineHeight: 1.6,
            }}
          >
            {post.description}
          </p>
        </div>
      </div>

      {/* Article Body */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Back link */}
        <div
          style={{
            borderTop: "1px solid #2D7D32",
            marginTop: "48px",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <a
            href="/blog"
            style={{
              color: "#C9A84C",
              fontSize: "15px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            &larr; Back to all posts
          </a>
          <a
            href="https://store.allahican.com?tag=allahican-20"
            style={{
              backgroundColor: "#C9A84C",
              color: "#060C06",
              padding: "10px 22px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Shop AllahiCan
          </a>
        </div>
      </div>
    </div>
  );
}
