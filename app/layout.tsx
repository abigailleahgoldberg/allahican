import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AllahiCan -- Muslim-American Pride and Culture",
  description: "All I can be is American. Muslim. All of it. Muslim-American pride gear, culture, and community.",
  openGraph: {
    title: "AllahiCan -- Muslim-American Pride and Culture",
    description: "All I can be is American. Muslim. All of it.",
    url: "https://allahican.com",
    siteName: "AllahiCan",
  },
};

const navStyle: React.CSSProperties = {
  backgroundColor: "#060C06",
  borderBottom: "2px solid #C9A84C",
  padding: "0 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const logoStyle: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: "26px",
  fontWeight: "bold",
  letterSpacing: "-0.5px",
  textDecoration: "none",
};

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  listStyle: "none",
};

const navLinkStyle: React.CSSProperties = {
  color: "#FAFAF8",
  textDecoration: "none",
  fontSize: "15px",
  fontFamily: "Georgia, serif",
};

const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: "#C9A84C",
  color: "#060C06",
  padding: "8px 18px",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "14px",
  textDecoration: "none",
  fontFamily: "Georgia, serif",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#060C06",
  borderTop: "2px solid #C9A84C",
  padding: "48px 24px 32px",
  marginTop: "80px",
};

const footerInnerStyle: React.CSSProperties = {
  maxWidth: "960px",
  margin: "0 auto",
};

const footerGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "40px",
  marginBottom: "40px",
};

const footerHeadingStyle: React.CSSProperties = {
  color: "#C9A84C",
  fontSize: "13px",
  fontWeight: "bold",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  marginBottom: "16px",
  fontFamily: "Georgia, serif",
};

const footerLinkStyle: React.CSSProperties = {
  display: "block",
  color: "#FAFAF8",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "8px",
  fontFamily: "Georgia, serif",
};

const footerBottomStyle: React.CSSProperties = {
  borderTop: "1px solid #2D7D32",
  paddingTop: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav style={navStyle}>
          <a href="/" style={logoStyle}>
            <span style={{ color: "#ffffff" }}>Allahi</span>
            <span style={{ color: "#C9A84C" }}>Can</span>
          </a>
          <ul style={navLinksStyle}>
            <li>
              <a href="/blog" style={navLinkStyle}>Culture</a>
            </li>
            <li>
              <a href="/shop" style={navLinkStyle}>Shop</a>
            </li>
            <li>
              <a href="/advertise" style={navLinkStyle}>Advertise</a>
            </li>
            <li>
              <a href="https://store.allahican.com" style={ctaButtonStyle}>Get Involved</a>
            </li>
          </ul>
        </nav>

        <main>{children}</main>

        <footer style={footerStyle}>
          <div style={footerInnerStyle}>
            <div style={footerGridStyle}>
              <div>
                <div style={footerHeadingStyle}>AllahiCan</div>
                <p style={{ color: "#FAFAF8", fontSize: "14px", lineHeight: "1.7", fontFamily: "Georgia, serif" }}>
                  Muslim-American pride. Est. a very long time ago.
                  We were here. We are here. Inshallah, we are not going anywhere.
                </p>
              </div>

              <div>
                <div style={footerHeadingStyle}>Navigate</div>
                <a href="/" style={footerLinkStyle}>Home</a>
                <a href="/blog" style={footerLinkStyle}>Culture Blog</a>
                <a href="/shop" style={footerLinkStyle}>Shop</a>
                <a href="/advertise" style={footerLinkStyle}>Advertise</a>
              </div>

              <div>
                <div style={footerHeadingStyle}>The Network</div>
                <a href="https://jewsa.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">JewSA</a>
                <a href="https://hindusa-app.vercel.app" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">HindUSA</a>
                <a href="https://webearish.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">WeBearish</a>
                <a href="https://u-god.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">U-God Sacred Texts</a>
                <a href="https://thevoiceofcash.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">The Voice of Cash</a>
                <a href="https://aiskillsagents.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">AI Skills Agents</a>
              </div>

              <div>
                <div style={footerHeadingStyle}>Shop</div>
                <a href="https://store.allahican.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">AllahiCan Store</a>
                <a href="https://store.allahican.com/tees" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">Tees</a>
                <a href="https://store.allahican.com/hats" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">Hats</a>
              </div>
            </div>

            <div style={footerBottomStyle}>
              <p style={{ color: "#8a8a8a", fontSize: "13px", fontFamily: "Georgia, serif" }}>
                &copy; {new Date().getFullYear()} AllahiCan. All rights reserved. Barakallah.
              </p>
              <p style={{ color: "#8a8a8a", fontSize: "13px", fontFamily: "Georgia, serif" }}>
                Made with love and alhamdulillah energy.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
