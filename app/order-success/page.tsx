"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export default function OrderSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div
      style={{
        backgroundColor: "#0C2E0C",
        color: "#FAFAF8",
        minHeight: "100vh",
        fontFamily: "var(--font-body), sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#060C06",
          border: "2px solid #C9A84C",
          borderRadius: "12px",
          padding: "56px 40px",
        }}
      >
        {/* Check icon */}
        <div
          style={{
            width: "72px",
            height: "72px",
            backgroundColor: "#2D7D32",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Alhamdulillah. Order placed.
        </h1>

        <p style={{ color: "#C9A84C", fontSize: "20px", marginBottom: "12px" }}>
          Mashallah, excellent taste.
        </p>

        <p
          style={{
            color: "#FAFAF8",
            opacity: 0.75,
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "36px",
          }}
        >
          Your order has been confirmed. You will receive an email with tracking
          information soon. Barakallah.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/shop"
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
            Keep Shopping
          </a>
          <a
            href="/"
            style={{
              backgroundColor: "transparent",
              color: "#C9A84C",
              padding: "12px 28px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              border: "2px solid #C9A84C",
            }}
          >
            Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
