import React from 'react';

const YT_POSTS = [
  { id: 1, img: "/images/jakarta-hero.png", title: "9th Year Anniversary Growth - To a decade of impact" },
  { id: 2, img: "/images/portfolio-feature.png", title: "To a Decade of Impact - 2025 Highlights" },
  { id: 3, img: "/images/industri-pabrik.png", title: "Transforming Pulp & Paper Manufacturing with Clean Energy" }
];

const IG_POSTS = [
  { id: 1, img: "/images/bandung-residensial.png", title: "Tidak Hanya Panel, Alat Ini Juga Berjasa dalam Sistem PLTS" },
  { id: 2, img: "/images/industri-tentang.png", title: "Life at SUN Challenge: Edisi Bikin Kata" },
  { id: 3, img: "/images/hybrid-11kwp.png", title: "Yuk Mengenal Kartini di Sektor Energi!" },
  { id: 4, img: "/images/tegal-22kwp.png", title: "Raih Sustainable Energy Leader Award 2026" }
];

export default function SocialMedia() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#1B2B5E", textAlign: "center", marginBottom: 48 }}>
          Ikut Media Sosial Kami
        </h2>

        {/* YouTube Section */}
        <div style={{ marginBottom: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="none">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
            <span style={{ fontSize: "16px", fontWeight: 800, color: "#1B2B5E" }}>Suryantara Energy</span>
          </div>

          <div className="social-media-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {YT_POSTS.map((video) => (
              <div key={video.id} className="youtube-card">
                <img src={video.img} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="youtube-play-overlay">
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--coral)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(107,191,42,0.3)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Section */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#fae8ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </span>
            <span style={{ fontSize: "16px", fontWeight: 800, color: "#1B2B5E" }}>Suryantara Energy</span>
          </div>

          <div className="social-media-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {IG_POSTS.map((post) => (
              <div key={post.id} className="instagram-card">
                <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%)", display: "flex", alignItems: "flex-end", padding: 14 }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}>
                    {post.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
