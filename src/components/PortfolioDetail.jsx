import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const B2B_PORTFOLIO = [
  {
    id: "b2b-1",
    name: "Tjiwi Kimia",
    category: "Industri Kertas",
    capacity: "2.5 MWp",
    description: "Instalasi PLTS Atap untuk pabrik berskala besar guna mendukung target energi terbarukan.",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO1.jpeg"
  },
  {
    id: "b2b-2",
    name: "Padma Hotels",
    category: "Gedung Komersial / Hospitality",
    capacity: "850 kWp",
    description: "Transisi ke energi hijau untuk mendukung operasional hotel ramah lingkungan.",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO2.jpeg"
  },
  {
    id: "b2b-3",
    name: "Bluebird Group",
    category: "Fasilitas Transportasi",
    capacity: "1.2 MWp",
    description: "Sumber daya panel surya untuk stasiun pengisian daya taksi listrik (EV charging).",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO3.jpeg"
  },
  {
    id: "b2b-4",
    name: "KIA Ceramic",
    category: "Manufaktur Keramik",
    capacity: "3.1 MWp",
    description: "Dekarbonisasi produksi pabrik manufaktur berat melalui instalasi surya ekstensif.",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO4.jpeg"
  }
];

const B2C_PORTFOLIO = [
  {
    id: "b2c-1",
    name: "Residensial Dago, Bandung",
    category: "Rumah Tangga",
    capacity: "5 kWp",
    description: "Sistem on-grid untuk rumah modern, menghemat tagihan listrik bulanan hingga 80%.",
    image: "/images/portofolio/b2c/B2C_PORTFOLIO1.jpeg"
  },
  {
    id: "b2c-2",
    name: "Townhouse Kemang",
    category: "Rumah Tangga",
    capacity: "7.5 kWp",
    description: "Sistem hybrid dengan baterai, mencegah mati lampu sekaligus menekan biaya.",
    image: "/images/portofolio/b2c/B2C_PORTFOLIO2.jpeg"
  },
  {
    id: "b2c-3",
    name: "Villa Ubud, Bali",
    category: "Properti Pribadi",
    capacity: "10 kWp",
    description: "Keandalan daya mandiri (off-grid) di area dengan infrastruktur PLN yang terbatas.",
    image: "/images/portofolio/b2c/B2C_PORTFOLIO3.jpeg"
  }
];

export default function PortfolioDetail({ onClose, waLink }) {
  const [activeTab, setActiveTab] = useState('b2b'); // 'b2b' or 'b2c'

  const displayedData = activeTab === 'b2b' ? B2B_PORTFOLIO : B2C_PORTFOLIO;

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* Navigation Header */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button 
            onClick={onClose}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700, color: "#1B2B5E" }}
          >
            <ArrowLeft size={20} /> Kembali ke Beranda
          </button>
          
          <img src="/logosne.svg" alt="Suryantara Energy" style={{ height: "40px", objectFit: "contain" }} />
          
          <a href={waLink} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#6BBF2A", color: "#ffffff", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 999, textDecoration: "none" }}>
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Page Content */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px" }}>
        
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#1B2B5E", marginBottom: 16 }}>Portofolio Proyek</h1>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Jelajahi rekam jejak instalasi kami di berbagai sektor. Temukan solusi yang telah terbukti menurunkan biaya energi untuk pabrik maupun rumah tangga.
          </p>
        </div>

        {/* Custom Tabs */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div style={{ background: "#ffffff", padding: "6px", borderRadius: 999, display: "inline-flex", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" }}>
            <button
              onClick={() => setActiveTab('b2b')}
              style={{
                background: activeTab === 'b2b' ? "#1B2B5E" : "transparent",
                color: activeTab === 'b2b' ? "#ffffff" : "#64748b",
                border: "none", borderRadius: 999, padding: "12px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s"
              }}
            >
              Komersial &amp; Industri (B2B)
            </button>
            <button
              onClick={() => setActiveTab('b2c')}
              style={{
                background: activeTab === 'b2c' ? "#1B2B5E" : "transparent",
                color: activeTab === 'b2c' ? "#ffffff" : "#64748b",
                border: "none", borderRadius: 999, padding: "12px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s"
              }}
            >
              Residensial (B2C)
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
          {displayedData.map(item => (
            <div key={item.id} style={{ background: "#ffffff", borderRadius: 20, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "4/3", position: "relative", backgroundColor: "#e2e8f0" }}>
                <img src={item.image} alt={item.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#6BBF2A", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{item.category}</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1B2B5E", marginBottom: 12 }}>{item.name}</h3>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, marginBottom: 20, flexGrow: 1 }}>
                  {item.description}
                </p>
                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>Kapasitas</span>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#1B2B5E" }}>{item.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        


      </div>
    </div>
  );
}
