import React from 'react';
import { ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    category: "News",
    title: "Industri Healthcare Mulai Bergerak ke Green Manufacturing, Integrated Healthcare I...",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO5.jpeg"
  },
  {
    id: 2,
    category: "News",
    title: "Greenovation 2026 Resmi Diluncurkan: Dorong Dekarbonisasi dan Ketahanan Energi di ...",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO11.jpeg"
  },
  {
    id: 3,
    category: "Blog",
    title: "PLTS atau Solar Panel Untuk Industri F&B dan FMCG",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO6.jpeg"
  },
  {
    id: 4,
    category: "News",
    title: "Indocement Bangun PLTS Terbesar di Sektor Semen di Indonesia Berkapasitas 71,9 MW",
    image: "/images/portofolio/b2b/B2B_PORTFOLIO12.jpeg"
  },
  {
    id: 5,
    category: "Blog",
    title: "Peran Panel Surya dalam Mengurangi Emisi Karbon di Indonesia",
    image: "/images/portofolio/b2c/B2C_PORTFOLIO3.jpeg"
  }
];

export default function News({ onOpenDetail }) {
  return (
    <section id="article" style={{ scrollMarginTop: 80, background: "#ffffff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header Grid */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, color: "var(--coral)", letterSpacing: 1, textTransform: "uppercase" }}>BERITA &amp; BLOG</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "#1B2B5E", marginTop: 10 }}>
              Artikel Terkini
            </h2>
          </div>
          <a href="#all-news" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: "var(--coral)", fontWeight: 700, fontSize: 15 }}>
            View All <ArrowRight size={16} />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="news-grid">
          {ARTICLES.map((art) => (
            <div 
              key={art.id} 
              className="news-card" 
              onClick={() => onOpenDetail && onOpenDetail(art)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={art.image}
                alt={art.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="news-card-overlay">
                <span style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "4px 12px", borderRadius: 999, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {art.category}
                </span>
                <h3 style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.4, color: "#ffffff" }}>
                  {art.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
