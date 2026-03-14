"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItemCount } = useCart();

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
    zIndex: 200,
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: "var(--font-heading), serif",
    fontSize: "26px",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
    textDecoration: "none",
  };

  return (
    <>
      <nav style={navStyle} aria-label="Main navigation">
        <a href="/" style={logoStyle}>
          <span style={{ color: "#ffffff" }}>Allahi</span>
          <span style={{ color: "#C9A84C" }}>Can</span>
        </a>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            listStyle: "none",
          }}
          className="desktop-nav"
        >
          <li>
            <a href="/blog" style={{ color: "#FAFAF8", textDecoration: "none", fontSize: "15px", fontFamily: "var(--font-body), sans-serif" }}>
              Culture
            </a>
          </li>
          <li>
            <a href="/holidays" style={{ color: "#FAFAF8", textDecoration: "none", fontSize: "15px", fontFamily: "var(--font-body), sans-serif" }}>
              Holidays
            </a>
          </li>
          <li>
            <a href="/calendar" style={{ color: "#FAFAF8", textDecoration: "none", fontSize: "15px", fontFamily: "var(--font-body), sans-serif" }}>
              Calendar
            </a>
          </li>
          <li>
            <a href="/daily-ayah" style={{ color: "#FAFAF8", textDecoration: "none", fontSize: "15px", fontFamily: "var(--font-body), sans-serif" }}>
              Daily Ayah
            </a>
          </li>
          <li>
            <a href="/shop" style={{ color: "#FAFAF8", textDecoration: "none", fontSize: "15px", fontFamily: "var(--font-body), sans-serif" }}>
              Shop
            </a>
          </li>
          <li>
            <a href="/advertise" style={{ color: "#FAFAF8", textDecoration: "none", fontSize: "15px", fontFamily: "var(--font-body), sans-serif" }}>
              Advertise
            </a>
          </li>
          <li>
            <a
              href="/cart"
              style={{
                color: "#FAFAF8",
                textDecoration: "none",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                position: "relative",
                fontFamily: "var(--font-body), sans-serif",
              }}
              aria-label={`Cart, ${cartItemCount} items`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    backgroundColor: "#C9A84C",
                    color: "#060C06",
                    fontSize: "11px",
                    fontWeight: "bold",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="https://store.allahican.com"
              style={{
                backgroundColor: "#C9A84C",
                color: "#060C06",
                padding: "8px 18px",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Get Involved
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hamburger-btn"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          style={{
            background: "none",
            border: "none",
            color: "#FAFAF8",
            padding: "8px",
            display: "none",
          }}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#060C06",
            zIndex: 199,
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px",
            gap: "8px",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {[
            { href: "/blog", label: "Culture" },
            { href: "/holidays", label: "Holidays" },
            { href: "/calendar", label: "Calendar" },
            { href: "/daily-ayah", label: "Daily Ayah" },
            { href: "/shop", label: "Shop" },
            { href: "/cart", label: `Cart${cartItemCount > 0 ? ` (${cartItemCount})` : ""}` },
            { href: "/advertise", label: "Advertise" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "#FAFAF8",
                fontSize: "24px",
                fontFamily: "var(--font-heading), serif",
                padding: "16px 0",
                borderBottom: "1px solid #2D7D32",
                textDecoration: "none",
                display: "block",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://store.allahican.com"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              backgroundColor: "#C9A84C",
              color: "#060C06",
              padding: "16px 24px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "18px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "24px",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Get Involved
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
