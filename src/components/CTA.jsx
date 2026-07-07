import React from 'react';

const CheckGreen = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--coral)" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CheckGray = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#94a3b8", opacity: 0.5 }}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const CheckWhite = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "#ffffff" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function CTA({ waLink }) {
  return (
    <section id="packet" style={{ scrollMarginTop: 80, background: "#ffffff", padding: "100px 0 80px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "var(--coral)", letterSpacing: 1, textTransform: "uppercase" }}>TIPE PEMBIAYAAN</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "#1B2B5E", marginTop: 10 }}>
            Inovasi Skema Pembiayaan
          </h2>
        </div>

        {/* Packages Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30, alignItems: "stretch", marginTop: 40 }}>
          
          {/* Card 1: On-Grid */}
          <div className="financing-card">
            <span style={{ color: "var(--coral)", fontWeight: 800, fontSize: 18, textTransform: "uppercase", letterSpacing: 0.5 }}>Paket On-Grid</span>
            <div style={{ marginTop: 12, marginBottom: 24 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#1B2B5E" }}>Mulai Rp 35 Juta</div>
              <div style={{ color: "#64748b", fontSize: 14, fontWeight: 600, marginTop: 4 }}>Kapasitas 1100 Wp (Atau Rp 14-15 Juta / kWp)</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Panel Surya Tier 1 &amp; Micro/String Inverter</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Pemasangan &amp; Perizinan (NIDI &amp; SLO)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Free Survey (Khusus Jabodetabek)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Garansi Panel Surya 12 Tahun</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Garansi Inverter 5 Tahun</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span style={{ color: "var(--coral)" }}>Opsi Cicilan 12x Tanpa Bunga</span>
              </div>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", display: "block", textAlign: "center", border: "2px solid var(--coral)", color: "var(--coral)", fontWeight: 700, fontSize: 15, padding: "12px 0", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
               onMouseOver={(e) => { e.currentTarget.style.background = "var(--coral)"; e.currentTarget.style.color = "#fff"; }}
               onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--coral)"; }}>
              Minta Penawaran On-Grid
            </a>
          </div>

          {/* Card 2: Hybrid */}
          <div className="financing-card">
            <span style={{ color: "var(--coral)", fontWeight: 800, fontSize: 18, textTransform: "uppercase", letterSpacing: 0.5 }}>Paket Hybrid</span>
            <div style={{ marginTop: 12, marginBottom: 24 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#1B2B5E" }}>Mulai Rp 60 Juta</div>
              <div style={{ color: "#64748b", fontSize: 14, fontWeight: 600, marginTop: 4 }}>Kapasitas 2500 Wp (Atau Rp 16-18 Juta / kWp)</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Panel Surya Tier 1, Inverter &amp; Baterai (5kWh)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Pemasangan &amp; Perizinan (NIDI &amp; SLO)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Free Survey (Khusus Jabodetabek)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Garansi Panel Surya 12 Tahun</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span>Garansi Inverter &amp; Baterai 5 Tahun</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                <CheckGreen /> <span style={{ color: "var(--coral)" }}>Opsi Cicilan 12x Tanpa Bunga</span>
              </div>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", display: "block", textAlign: "center", border: "2px solid var(--coral)", color: "var(--coral)", fontWeight: 700, fontSize: 15, padding: "12px 0", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
               onMouseOver={(e) => { e.currentTarget.style.background = "var(--coral)"; e.currentTarget.style.color = "#fff"; }}
               onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--coral)"; }}>
              Minta Penawaran Hybrid
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
