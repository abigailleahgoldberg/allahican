"use client";

import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart, cartItemCount } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Checkout failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0C2E0C",
        color: "#FAFAF8",
        minHeight: "100vh",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Your Cart
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            {cartItemCount === 0
              ? "Your cart is empty."
              : `${cartItemCount} item${cartItemCount !== 1 ? "s" : ""} in your cart.`}
          </h1>
        </div>

        {cartItemCount === 0 ? (
          <div
            style={{
              backgroundColor: "#060C06",
              border: "1px solid #2D7D32",
              borderRadius: "8px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2D7D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ margin: "0 auto 16px", display: "block" }}
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <p style={{ color: "#FAFAF8", opacity: 0.7, marginBottom: "24px", fontSize: "17px" }}>
              Nothing here yet. Time to shop.
            </p>
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
                display: "inline-block",
              }}
            >
              Browse the Store
            </a>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#060C06",
                  border: "1px solid #2D7D32",
                  borderRadius: "8px",
                  padding: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontFamily: "var(--font-heading), serif",
                      fontSize: "18px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p style={{ color: "#FAFAF8", opacity: 0.7, fontSize: "14px" }}>
                    {item.description}
                  </p>
                  <p style={{ color: "#C9A84C", fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>
                    {item.priceFormatted}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* Quantity controls */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0",
                      border: "1px solid #2D7D32",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        backgroundColor: "#0C2E0C",
                        color: "#FAFAF8",
                        border: "none",
                        width: "36px",
                        height: "36px",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span
                      style={{
                        backgroundColor: "#060C06",
                        color: "#FAFAF8",
                        width: "40px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "15px",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        backgroundColor: "#0C2E0C",
                        color: "#FAFAF8",
                        border: "none",
                        width: "36px",
                        height: "36px",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <span style={{ color: "#C9A84C", fontWeight: "bold", minWidth: "60px", textAlign: "right", fontSize: "16px" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#8a8a8a",
                      cursor: "pointer",
                      padding: "4px",
                    }}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Order Summary */}
            <div
              style={{
                backgroundColor: "#060C06",
                border: "2px solid #C9A84C",
                borderRadius: "8px",
                padding: "28px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <span style={{ color: "#FAFAF8", fontSize: "18px" }}>Total</span>
                <span style={{ color: "#C9A84C", fontSize: "28px", fontWeight: "bold", fontFamily: "var(--font-heading), serif" }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              {error && (
                <p style={{ color: "#ff6b6b", fontSize: "14px", marginBottom: "16px" }}>
                  {error}
                </p>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                style={{
                  backgroundColor: loading ? "#8a8a8a" : "#C9A84C",
                  color: "#060C06",
                  border: "none",
                  padding: "16px 32px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  fontSize: "17px",
                  cursor: loading ? "not-allowed" : "pointer",
                  width: "100%",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {loading ? "Processing..." : "Proceed to Checkout"}
              </button>

              <button
                onClick={clearCart}
                style={{
                  backgroundColor: "transparent",
                  color: "#8a8a8a",
                  border: "none",
                  fontSize: "13px",
                  cursor: "pointer",
                  marginTop: "12px",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                Clear cart
              </button>
            </div>

            <div style={{ textAlign: "center", marginTop: "8px" }}>
              <a
                href="/shop"
                style={{
                  color: "#C9A84C",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderBottom: "1px solid #C9A84C",
                  paddingBottom: "2px",
                }}
              >
                Continue shopping
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
