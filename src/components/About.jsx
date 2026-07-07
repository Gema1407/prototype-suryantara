import React from 'react';

export default function About() {
  return (
    <section id="about-us" style={{ scrollMarginTop: 80, background: "var(--sunSoft)", padding: "100px 0 60px", position: "relative" }}>
      {/* Metrics Overlay Card */}
      <div style={{ display: "none", maxWidth: 1180, margin: "-50px auto 60px", padding: "0 24px", position: "relative", zIndex: 30 }}>
        <div style={{ background: "#ffffff", borderRadius: 24, padding: "36px 24px", boxShadow: "0 20px 40px rgba(12,30,18,0.06)", border: "1px solid #f1f5f9" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#1B2B5E", textAlign: "center", marginBottom: 36 }}>
            Pencapaian 2025 dalam Angka
          </h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, textAlign: "center" }}>
            
            {/* Metric 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--sunSoft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#1B2B5E" }}>350+</span>
              <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600, marginTop: 4 }}>Proyek*</span>
            </div>

            {/* Metric 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--sunSoft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                </svg>
              </div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#1B2B5E" }}>385+ MW</span>
              <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600, marginTop: 4 }}>Kapasitas Terpasang*</span>
            </div>

            {/* Metric 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--sunSoft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#1B2B5E" }}>20+</span>
              <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600, marginTop: 4 }}>Sektor Industri</span>
            </div>

            {/* Metric 4 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--sunSoft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#1B2B5E" }}>50+</span>
              <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600, marginTop: 4 }}>Kota & Kabupaten Lokasi Proyek*</span>
            </div>

            {/* Metric 5 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--sunSoft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#1B2B5E" }}>4.600.000+ MWh</span>
              <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600, marginTop: 4 }}>Energi Bersih Dihasilkan*</span>
            </div>

          </div>

          <div style={{ marginTop: 24, fontSize: 11, color: "#94a3b8", textAlign: "left", lineHeight: 1.5 }}>
            *Angka kumulatif mencakup portofolio proyek afiliasi dan kemitraan strategis nasional.
          </div>
        </div>
      </div>

      {/* About Main Section Content */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 44, alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 13, fontWeight: 800, color: "var(--coral)", letterSpacing: 1, textTransform: "uppercase" }}>TENTANG KAMI</span>
          <h2 style={{ fontSize: "clamp(1.6rem,3.4vw,2.4rem)", fontWeight: 800, letterSpacing: "-.6px", lineHeight: 1.14, marginTop: 12, color: "#1B2B5E" }}>
            Spesialis Energi Surya Terintegrasi di Indonesia
          </h2>
          <p style={{ color: "#334155", fontSize: 16, lineHeight: 1.65, marginTop: 16 }}>
            Kami adalah penyedia solusi sistem tenaga surya atap (rooftop solar system) terkemuka di Indonesia. Dengan komitmen keandalan, keselamatan, dan efisiensi jangka panjang, kami membantu sektor industri, komersial, dan residensial untuk menghemat biaya operasional sekaligus berpartisipasi aktif dalam dekarbonisasi.
          </p>
        </div>
        <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 14px 36px rgba(12,30,18,.06)" }}>
          <img
            src="/images/industri-tentang.png"
            alt="Pemasangan Panel Surya"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Founder / Team Trust Section */}
      <div style={{ maxWidth: 1180, margin: "80px auto 0", padding: "0 24px" }}>
        <div style={{ background: "#ffffff", borderRadius: 24, padding: "40px", boxShadow: "0 20px 40px rgba(12,30,18,0.06)", border: "1px solid #f1f5f9", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center" }}>
          
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "1/1", width: "100%", maxWidth: 380, margin: "0" }}>
            <img
              src="/images/team_experts.png"
              alt="Tim Suryantara Energy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#1B2B5E", marginBottom: 16 }}>
              Dedikasi dari Para Ahli di Belakang Layar
            </h3>
            <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
              Suryantara Energy dibangun oleh tim engineer dan spesialis energi terbarukan lokal dengan standar internasional. Kami percaya bahwa transisi energi tidak boleh rumit—itulah mengapa tim kami mendampingi Anda dari proses desain, perizinan, pemasangan, hingga garansi pemeliharaan selama puluhan tahun ke depan.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ fontWeight: 700, color: "#1B2B5E", borderLeft: "3px solid #6BBF2A", paddingLeft: 16 }}>
                "Masa depan yang lebih hijau dimulai dari atap Anda hari ini."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
