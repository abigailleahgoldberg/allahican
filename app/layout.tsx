import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

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

const footerHeadingStyle: React.CSSProperties = {
  color: "#C9A84C",
  fontSize: "13px",
  fontWeight: "bold",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  marginBottom: "16px",
  fontFamily: "var(--font-body), sans-serif",
};

const footerLinkStyle: React.CSSProperties = {
  display: "block",
  color: "#FAFAF8",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "8px",
  fontFamily: "var(--font-body), sans-serif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}>
      <body className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}>
        <CartProvider>
          <Header />
          <main>{children}</main>

          <footer style={footerStyle}>
            <div style={footerInnerStyle}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "40px",
                  marginBottom: "40px",
                }}
              >
                <div>
                  <div style={footerHeadingStyle}>AllahiCan</div>
                  <p style={{ color: "#FAFAF8", fontSize: "14px", lineHeight: "1.7", fontFamily: "var(--font-body), sans-serif" }}>
                    Muslim-American pride. Est. a very long time ago.
                    We were here. We are here. Inshallah, we are not going anywhere.
                  </p>
                </div>

                <div>
                  <div style={footerHeadingStyle}>Navigate</div>
                  <a href="/" style={footerLinkStyle}>Home</a>
                  <a href="/blog" style={footerLinkStyle}>Culture Blog</a>
                  <a href="/shop" style={footerLinkStyle}>Shop</a>
                  <a href="/cart" style={footerLinkStyle}>Cart</a>
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
                  <a href="/cart" style={footerLinkStyle}>Your Cart</a>
                  <a href="https://store.allahican.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">AllahiCan Store</a>
                  <a href="https://store.allahican.com/tees" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">Tees</a>
                  <a href="https://store.allahican.com/hats" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">Hats</a>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid #2D7D32",
                  paddingTop: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <p style={{ color: "#8a8a8a", fontSize: "13px", fontFamily: "var(--font-body), sans-serif" }}>
                  &copy; {new Date().getFullYear()} AllahiCan. All rights reserved. Barakallah.
                </p>
                <p style={{ color: "#8a8a8a", fontSize: "13px", fontFamily: "var(--font-body), sans-serif" }}>
                  Made with love and alhamdulillah energy.
                </p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
