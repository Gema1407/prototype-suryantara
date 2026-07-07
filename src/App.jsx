import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manfaat from './components/Manfaat';
import UntukSiapa from './components/UntukSiapa';
import Paket from './components/Paket';
import CaraKerja from './components/CaraKerja';
import Simulasi from './components/Simulasi';
import Portofolio from './components/Portofolio';
import Testimoni from './components/Testimoni';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import News from './components/News';
import SocialMedia from './components/SocialMedia';
import PortfolioDetail from './components/PortfolioDetail';
import ArticleDetail from './components/ArticleDetail';
import { Sun } from 'lucide-react';

const WA_NUMBER = "6285121385675";
const PROYEK_SELESAI = 250;
const PARTNERS = [
  { src: '/images/portofolio/logo/labtech.webp', alt: 'Labtech' },
  { src: '/images/portofolio/logo/sne.svg', alt: 'Suryantara Energy' },
  { src: '/images/portofolio/logo/geosphere.svg', alt: 'Geosphere' },
  { src: '/images/portofolio/logo/labtech.webp', alt: 'Labtech' },
  { src: '/images/portofolio/logo/sne.svg', alt: 'Suryantara Energy' },
  { src: '/images/portofolio/logo/geosphere.svg', alt: 'Geosphere' }
];

export default function App() {
  const [showPortfolioDetail, setShowPortfolioDetail] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const defaultMsg = 'Halo SURYANTARA, saya tertarik konsultasi pemasangan panel surya. Mohon informasinya.';
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;

  if (selectedArticle) {
    return <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} waLink={waLink} />;
  }

  if (showPortfolioDetail) {
    return <PortfolioDetail onClose={() => setShowPortfolioDetail(false)} waLink={waLink} />;
  }

  return (
    <div className="bg-[#fdf6ec] text-[#2b2240] min-h-screen">
      {/* Header */}
      <Header waLink={waLink} />

      {/* Hero Section */}
      <Hero waLink={waLink} proyekSelesai={PROYEK_SELESAI} />

      {/* Partner Marquee */}
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #efe6d8", padding: "48px 0", overflow: "hidden", userSelect: "none" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontWeight: "bold", color: "#6b6480", fontSize: "14px", letterSpacing: "1px", marginBottom: "24px" }}>
            Dipercaya rumah tangga &amp; perusahaan di berbagai kota
          </p>
          <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
            <div className="animate-marquee" style={{ display: "flex", gap: "60px", width: "max-content", paddingLeft: "60px" }}>
              {/* First loop */}
              {PARTNERS.map((p, idx) => (
                <div key={`p1-${idx}`} style={{ display: "flex", alignItems: "center", opacity: 0.9, flexShrink: 0, padding: "0 20px" }}>
                  <img src={p.src} alt={p.alt} style={{ height: "40px", objectFit: "contain", transition: "all 0.3s" }} />
                </div>
              ))}
              {/* Second loop for infinite scroll */}
              {PARTNERS.map((p, idx) => (
                <div key={`p2-${idx}`} style={{ display: "flex", alignItems: "center", opacity: 0.9, flexShrink: 0, padding: "0 20px" }}>
                  <img src={p.src} alt={p.alt} style={{ height: "40px", objectFit: "contain", transition: "all 0.3s" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Tentang Kami */}
      <About proyekSelesai={PROYEK_SELESAI} />

      {/* 2. Portofolio & Testimoni */}
      <Portofolio onOpenDetail={() => setShowPortfolioDetail(true)} />
      <Testimoni />

      {/* 3. Simulasi (Calculator) */}
      <section id="simulation" style={{ scrollMarginTop: "80px", backgroundColor: "#ffffff", padding: "100px 0" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--coral)", letterSpacing: "1px", textTransform: "uppercase" }}>Simulasi hemat</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "#1B2B5E", marginTop: "12px", lineHeight: 1.15 }}>
              Hitung sendiri, gratis dalam 1 menit
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", marginTop: "12px", lineHeight: 1.6 }}>
              Masukkan tagihan listrik Anda dan lihat perkiraan hemat, balik modal, serta untung sampai 25 tahun.
            </p>
          </div>
          
          <Simulasi />
        </div>
      </section>

      {/* 4. Teknologi & Inovasi */}
      <Manfaat />
      <UntukSiapa />
      <Paket waLink={waLink} />
      <CaraKerja />

      {/* 5. Biaya (CTA) */}
      <CTA waLink={waLink} />

      {/* 6. Blog (Berita) */}
      <News onOpenDetail={setSelectedArticle} />

      {/* Additional Footer Sections */}
      <SocialMedia />
      <FAQ />


      {/* Footer */}
      <Footer />

      {/* Floating WA Button */}
      <FloatingWA waLink={waLink} />
    </div>
  );
}

