import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", color: "#334155", borderTop: "1px solid #e2e8f0" }}>

      {/* Top Footer Section */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 24px 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40 }}>

        <div>
          <img src="/logosne.svg" alt="Suryantara Energy" style={{ height: "80px", objectFit: "contain", marginBottom: 24 }} />
          <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#1B2B5E", marginBottom: 12 }}>Ikuti Kami</h4>
          <div style={{ display: "flex", gap: 12 }}>
            {/* Instagram */}
            <a href="#ig" style={{ width: 36, height: 36, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#334155" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Youtube */}
            <a href="#yt" style={{ width: 36, height: 36, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#334155" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            {/* Linkedin */}
            <a href="#li" style={{ width: 36, height: 36, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#334155" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#fb" style={{ width: 36, height: 36, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#334155" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Bandung Head Office */}
        <div style={{ gridColumn: "span 2" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>KANTOR PUSAT</span>
          <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1B2B5E", marginTop: 4, marginBottom: 8 }}>Suryantara Energy</h4>
          <p style={{ fontSize: "13px", color: "#64748b", marginBottom: 16, lineHeight: 1.5, paddingRight: 20 }}>
            Penyedia instalasi panel surya terbaik di Bandung dan Indonesia untuk hunian, bisnis, dan sektor industri.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: "14px", lineHeight: 1.5, color: "#475569" }}>
            <div style={{ display: "flex", gap: 10 }}>
              <MapPin size={18} style={{ flexShrink: 0, color: "var(--coral)", marginTop: 2 }} />
              <span>Jl. Cisitu Indah IV No. 12, Dago - Kota Bandung</span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Mail size={18} style={{ color: "var(--coral)" }} />
              <span>connect@suryantaraenergy.co.id</span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Phone size={18} style={{ color: "var(--coral)" }} />
              <span>085121385675</span>
            </div>
          </div>
        </div>

        {/* Operational Info */}
        <div>
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>LAYANAN</span>
          <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1B2B5E", marginTop: 4, marginBottom: 12 }}>Jam Operasional</h4>
          <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>
            Senin - Jumat: 09.00 - 17.00 WIB<br />
            Sabtu - Minggu: Tutup (Hanya Layanan Darurat)
          </p>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div style={{ borderTop: "1px solid #f1f5f9", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, fontSize: "12px", color: "#64748b", fontWeight: 500 }}>
          <span>Copyright 2026 © Suryantara Energy by PT. Labtech Inovasi Indonesia. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#syarat" style={{ color: "#64748b", textDecoration: "none" }}>Syarat &amp; Ketentuan</a>
            <span>•</span>
            <a href="#kebijakan" style={{ color: "#64748b", textDecoration: "none" }}>Kebijakan Privasi</a>
            <span>•</span>
            <a href="#faq" style={{ color: "#64748b", textDecoration: "none" }}>FAQ</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
