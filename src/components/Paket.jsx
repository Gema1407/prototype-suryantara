import React, { useState } from 'react';

const SYSTEMS_DATA = {
  ongrid: {
    title: "On Grid",
    description: "Memaksimalkan daya yang dihasilkan matahari pada siang hari dan memanfaatkan listrik yang disediakan oleh jaringan listrik nasional pada malam hari.",
    features: [
      "Mengurangi tagihan listrik siang hari secara signifikan",
      "Tanpa investasi baterai yang mahal",
      "Kelebihan listrik bisa dikirim kembali ke grid PLN (Net Metering)"
    ],
    image: "/images/bandung-residensial.png"
  },
  offgrid: {
    title: "Off Grid",
    description: "Sistem independen sepenuhnya terputus dari jaringan PLN, mengandalkan baterai berkapasitas tinggi untuk menyuplai daya sepanjang hari.",
    features: [
      "Mandiri energi 100% tanpa ketergantungan PLN",
      "Cocok untuk area terpencil tanpa jangkauan transmisi",
      "Sistem penyimpanan daya baterai cerdas"
    ],
    image: "/images/tegal-22kwp.png"
  },
  hybrid: {
    title: "Hybrid",
    description: "Menggabungkan kelebihan sistem On Grid dan Off Grid. Menggunakan baterai cadangan untuk menjaga stabilitas daya saat pemadaman sekaligus meminimalkan biaya.",
    features: [
      "Proteksi backup otomatis saat mati lampu",
      "Menghemat daya siang dan malam",
      "Pengelolaan konsumsi listrik pintar secara real-time"
    ],
    image: "/images/hybrid-11kwp.png"
  }
};

export default function Paket({ waLink }) {
  const [selectedSystem, setSelectedSystem] = useState("ongrid");

  const systemKeys = ["ongrid", "offgrid", "hybrid"];
  const selectedIndex = systemKeys.indexOf(selectedSystem);
  const progressWidth = `${(selectedIndex / (systemKeys.length - 1)) * 100}%`;

  return (
    <section id="technology" style={{ scrollMarginTop: 80, background: "#ffffff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}>
          
          {/* Left Side Info */}
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, color: "var(--coral)", letterSpacing: 1, textTransform: "uppercase" }}>SOLUSI KAMI</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "#1B2B5E", lineHeight: 1.15, margin: "12px 0 30px" }}>
              Berbagai Tipe Sistem PLTS
            </h2>

            {/* Timeline Picker */}
            <div className="plts-timeline-container">
              <div className="plts-timeline-line"></div>
              <div className="plts-timeline-progress" style={{ width: progressWidth }}></div>
              
              <div className={`plts-timeline-step ${selectedSystem === "ongrid" ? "active" : ""}`} onClick={() => setSelectedSystem("ongrid")}>
                <span>On Grid</span>
                <div className="plts-timeline-dot"></div>
              </div>
              <div className={`plts-timeline-step ${selectedSystem === "offgrid" ? "active" : ""}`} onClick={() => setSelectedSystem("offgrid")}>
                <span>Off Grid</span>
                <div className="plts-timeline-dot"></div>
              </div>
              <div className={`plts-timeline-step ${selectedSystem === "hybrid" ? "active" : ""}`} onClick={() => setSelectedSystem("hybrid")}>
                <span>Hybrid</span>
                <div className="plts-timeline-dot"></div>
              </div>
            </div>

            {/* Selected System Content */}
            <div style={{ marginTop: 40, minHeight: 180 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--sunSoft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1B2B5E" }}>
                  {SYSTEMS_DATA[selectedSystem].title}
                </h3>
              </div>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.6, marginBottom: 20 }}>
                {SYSTEMS_DATA[selectedSystem].description}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
                {SYSTEMS_DATA[selectedSystem].features.map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "14px", color: "#334155", fontWeight: 600 }}>
                    <span style={{ color: "var(--coral)", fontSize: 16 }}>✔</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--coral)", color: "#ffffff", fontWeight: 700, fontSize: 15, padding: "12px 30px", borderRadius: 999, textDecoration: "none" }}>
                Konsultasi Pemasangan
              </a>
            </div>

          </div>

          {/* Right Side Isometric Graphic */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{ width: "100%", maxWidth: 460, borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", border: "1px solid #f1f5f9" }}>
              <img
                src={SYSTEMS_DATA[selectedSystem].image}
                alt={SYSTEMS_DATA[selectedSystem].title}
                style={{ width: "100%", height: 320, objectFit: "cover" }}
              />
            </div>
            {/* Overlay Icon */}
            <div style={{ position: "absolute", bottom: -20, right: 20, background: "#ffffff", borderRadius: "50%", padding: 16, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
