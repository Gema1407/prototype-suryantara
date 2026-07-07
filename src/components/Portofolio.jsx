import React, { useState } from 'react';

const PORTFOLIOS_DATA = [
  {
    id: "padma",
    name: "Padma Hotels",
    category: "GEDUNG KOMERSIAL",
    description: "Padma Resort Legian & Ubud telah menerapkan berbagai inisiatif ramah lingkungan untuk meminimalisir dampak lingkungan mereka dan telah membuat komitmen terhadap kebijakan manajemen berkelanjutan yang merupakan bagian dari sistem manajemen lingkungan.",
    image: "/images/portfolio-feature.png",
    num: "1/11"
  },
  {
    id: "bluebird",
    name: "Bluebird",
    category: "SEKTOR TRANSPORTASI",
    description: "Instalasi panel surya rooftop di area pool Bluebird untuk menyuplai energi operasional kantor dan stasiun pengisian daya taksi listrik secara mandiri dan ramah lingkungan.",
    image: "/images/industri-pabrik.png",
    num: "2/11"
  },
  {
    id: "tjiwi",
    name: "Tjiwi Kimia",
    category: "INDUSTRI MANUFAKTUR",
    description: "Penerapan sistem PLTS Atap berskala megawatt di pabrik kertas Tjiwi Kimia untuk mempercepat pemenuhan target bauran energi hijau pada lini produksi mereka.",
    image: "/images/industri-tentang.png",
    num: "3/11"
  },
  {
    id: "merredin",
    name: "Merredin Solar Farm",
    category: "UTILITY SCALE",
    description: "Pengembangan lahan pembangkit listrik tenaga surya berkapasitas besar guna mengalirkan energi bersih ke jaringan transmisi interkoneksi regional.",
    image: "/images/jakarta-hero.png",
    num: "4/11"
  },
  {
    id: "kia",
    name: "KIA Ceramic",
    category: "INDUSTRI KERAMIK",
    description: "Sistem energi surya terintegrasi pada atap fasilitas manufaktur KIA Ceramic guna mereduksi emisi karbon dari proses pembakaran bersuhu tinggi.",
    image: "/images/tegal-22kwp.png",
    num: "5/11"
  }
];

export default function Portofolio({ onOpenDetail }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = PORTFOLIOS_DATA[activeIndex];

  return (
    <section id="portfolio" style={{ scrollMarginTop: 80, background: "#f8fafc", position: "relative", overflow: "hidden" }}>
      {/* Background Image Container */}
      <div style={{ position: "relative", width: "100%", height: "660px" }}>
        <img
          src={activeItem.image}
          alt={activeItem.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "all 0.6s ease" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12, 30, 18, 0.45)" }}></div>

        {/* Content Overlay */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", zIndex: 10 }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", width: "100%" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 6, color: "#ffffff", marginBottom: 12 }}>
              <span style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "1.5px", color: "#a7f3d0" }}>PROYEK TERKEMUKA</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px" }}>Portofolio Utama &amp; Sorotan</h2>
            </div>

            {/* Glass Card */}
            <div className="portfolio-glass-card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>{activeItem.name}</h3>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#bfdbfe", letterSpacing: "0.8px", textTransform: "uppercase" }}>
                {activeItem.category}
              </span>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#e2e8f0", margin: "16px 0 24px" }}>
                {activeItem.description}
              </p>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={onOpenDetail} style={{ background: "var(--coral)", color: "#ffffff", border: "none", borderRadius: 999, padding: "10px 24px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    Selengkapnya &gt;
                  </button>
                  <button style={{ background: "transparent", color: "#ffffff", border: "1.5px solid #ffffff", borderRadius: 999, padding: "10px 24px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    Get a Quote &gt;
                  </button>
                </div>
                <span style={{ fontSize: "15px", fontWeight: 800, color: "#ffffff", opacity: 0.9 }}>{activeItem.num}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Controls Overlay at the bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(12,30,18,0.85)", borderTop: "1px solid rgba(255,255,255,0.1)", zIndex: 20 }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", display: "flex", gap: "clamp(16px, 4vw, 40px)", overflowX: "auto", whiteSpace: "nowrap" }}>
            {PORTFOLIOS_DATA.map((item, idx) => (
              <button
                key={item.id}
                className={`portfolio-tab-btn ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
