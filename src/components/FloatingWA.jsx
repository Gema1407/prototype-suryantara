import React, { useState } from 'react';

export default function FloatingWA({ waLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 50, fontFamily: "inherit" }}>
      
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div style={{ position: "absolute", bottom: 70, right: 0, width: 320, background: "#ffffff", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.12)", border: "1px solid #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          
          {/* Header */}
          <div style={{ background: "#6BBF2A", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, color: "#ffffff" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25d366" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>Suryantara Energy</h4>
              <span style={{ fontSize: 12, opacity: 0.85 }}>Online · Konsultan Ahli</span>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ marginLeft: "auto", background: "none", border: "none", color: "#ffffff", fontSize: 18, cursor: "pointer", padding: 4 }}>×</button>
          </div>

          {/* Body content */}
          <div style={{ padding: 20, background: "#f8fafc" }}>
            <p style={{ margin: 0, fontSize: 14, color: "#475569", lineHeight: 1.5 }}>
              Halo! Ada yang bisa kami bantu? Silakan kirimkan pertanyaan Anda mengenai simulasi biaya dan pemasangan panel surya.
            </p>
          </div>

          {/* Action button */}
          <div style={{ padding: 16, background: "#ffffff", borderTop: "1px solid #f1f5f9" }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#25d366", color: "#ffffff", fontWeight: 700, fontSize: 14, padding: "12px 0", borderRadius: 999, textDecoration: "none", boxShadow: "0 4px 12px rgba(37,211,102,0.25)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Mulai Chat WhatsApp
            </a>
          </div>

        </div>
      )}

      {/* Floating Button Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#6BBF2A", color: "#ffffff", fontWeight: 800, fontSize: 16, padding: "14px 28px", borderRadius: 999, border: "none", cursor: "pointer", boxShadow: "0 10px 24px rgba(107,191,42,0.35)", transition: "all 0.2s" }}
        onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        {/* Chat Speech Bubble Icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span style={{ borderBottom: "2px solid #ffffff", paddingBottom: 2 }}>Chat</span>
      </button>

    </div>
  );
}
