import React, { useState, useEffect } from 'react';

export default function Hero({ waLink }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", background: "#f8fafc" }}>
      <div className="hero-slider-container">
        
        {/* Slide 1: Powering Industry */}
        <div className={`hero-slide ${activeSlide === 0 ? 'active' : ''}`} style={{ width: "100%" }}>
          <img
            src="/images/jakarta-hero.png"
            alt="Solar Panels Rooftop"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(12, 30, 18, 0.78)", zIndex: 2 }}></div>
          
          <div style={{ position: "relative", zIndex: 5, maxWidth: 1180, margin: "0 auto", padding: "160px 24px 100px", width: "100%" }}>
            <div style={{ textAlign: "center", color: "#ffffff" }}>
              <h1 style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", maxWidth: 860, margin: "0 auto 24px" }}>
                Tagihan Listrik Anda <span style={{ color: "#6BBF2A" }}>Bisa Turun hingga 80%</span> dengan Panel Surya
              </h1>
              <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.7, color: "#cbd5e1", maxWidth: 700, margin: "0 auto 40px", fontWeight: 500 }}>
                Pasang panel surya sekali, nikmati listrik murah selama 25+ tahun. Tanpa modal besar — kami bantu dari survei gratis, pemasangan, sampai garansi purna jual.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={waLink} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#6BBF2A", color: "#ffffff", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 999, textDecoration: "none" }}>
                  Konsultasi Gratis Sekarang
                </a>
                <a href="#simulasi" style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", color: "#ffffff", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 999, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.3)" }}>
                  Hitung Penghematan Saya
                </a>
              </div>



              {/* Bottom slide indicator */}
              <div style={{ marginTop: 40, fontSize: 18, fontWeight: 700, color: "#ffffff" }}>
                01 <span style={{ opacity: 0.5, fontSize: 13, fontWeight: 500 }}>/02</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Mitra Strategis */}
        <div className={`hero-slide ${activeSlide === 1 ? 'active' : ''}`} style={{ background: "var(--sunSoft)", width: "100%" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "140px 24px 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center", width: "100%" }}>
            
            {/* Left Content */}
            <div style={{ zIndex: 10 }}>
              <span style={{ color: "var(--coral)", fontWeight: 800, fontSize: 13, letterSpacing: "1px", textTransform: "uppercase" }}>TENTANG Suryantara Energy</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 800, color: "#1B2B5E", lineHeight: 1.15, margin: "16px 0 20px", letterSpacing: "-1px" }}>
                Biaya Energi Pabrik Anda <span style={{ color: "#6BBF2A" }}>Terlalu Mahal?</span><br/>Kami Pangkas Hingga Separuhnya.
              </h2>
              <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: 30, maxWidth: 480 }}>
                Ratusan pabrik dan gedung komersial di Indonesia sudah membuktikannya. PLTS atap kami hasilkan listrik murah dari matahari — langsung mengurangi tagihan PLN tanpa ganggu operasional.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={waLink} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "var(--coral)", color: "#ffffff", fontWeight: 700, fontSize: 15, padding: "14px 36px", borderRadius: 999, textDecoration: "none" }}>
                  Diskusi dengan Tim Kami
                </a>
                <a href="#portofolio" style={{ display: "inline-block", background: "transparent", color: "#1B2B5E", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 999, textDecoration: "none", border: "1.5px solid #1B2B5E" }}>
                  Lihat Proyek Kami
                </a>
              </div>
            </div>

            {/* Right Photo Slider */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative", width: "100%", height: "clamp(260px, 35vw, 420px)" }}>
              <InnerSlider />
            </div>

          </div>
        </div>

        {/* Vertical Pagination Dots Navigation */}
        <div className="hero-dots-nav">
          <div className={`hero-dot-wrapper ${activeSlide === 0 ? 'active' : ''}`} onClick={() => setActiveSlide(0)}>
            <span className="hero-dot-num">01</span>
            <div className="hero-dot"></div>
          </div>
          <div className={`hero-dot-wrapper ${activeSlide === 1 ? 'active' : ''}`} onClick={() => setActiveSlide(1)}>
            <span className="hero-dot-num">02</span>
            <div className="hero-dot"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

const SLIDER_IMAGES = [
  "/images/portofolio/b2b/B2B_PORTFOLIO1.jpeg",
  "/images/portofolio/b2b/B2B_PORTFOLIO2.jpeg",
  "/images/portofolio/b2c/B2C_PORTFOLIO2.jpeg",
  "/images/portofolio/b2b/B2B_PORTFOLIO6.jpeg",
];

function InnerSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
      {SLIDER_IMAGES.map((img, i) => (
        <img 
          key={img} 
          src={img} 
          alt="Portfolio Slider"
          style={{ 
            position: "absolute", 
            inset: 0, 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            opacity: i === idx ? 1 : 0, 
            transition: "opacity 1s ease-in-out" 
          }} 
        />
      ))}
      <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", padding: "8px 16px", borderRadius: 999, fontSize: 13, fontWeight: 700, color: "#1B2B5E" }}>
        Proyek Selesai
      </div>
    </div>
  );
}
