import React, { useEffect } from 'react';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';

export default function ArticleDetail({ article, onBack }) {
  
  // SEO Integration
  useEffect(() => {
    // Save original title and meta description
    const originalTitle = document.title;
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    const originalMetaDesc = metaDescriptionTag ? metaDescriptionTag.getAttribute('content') : '';
    
    // Set new SEO title and description
    document.title = `${article.title} | Suryantara Energy`;
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', article.excerpt || article.title);
    }
    
    window.scrollTo(0, 0);
    
    // Cleanup function to revert SEO tags when component unmounts
    return () => {
      document.title = originalTitle;
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', originalMetaDesc);
      }
    };
  }, [article]);

  if (!article) return null;

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", paddingBottom: 80 }}>
      {/* Article Header & Navigation */}
      <div style={{ background: "#ffffff", padding: "20px 24px", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button 
            onClick={onBack}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontSize: 16, fontWeight: 600, color: "#1B2B5E" }}
          >
            <ArrowLeft size={20} />
            Kembali ke Blog
          </button>
          
          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "#f1f5f9", border: "none", padding: "8px 16px", borderRadius: 999, fontSize: 14, fontWeight: 600, color: "#334155", cursor: "pointer" }}>
            <Share2 size={16} /> Bagikan
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "40px auto 0", padding: "0 24px" }}>
        
        {/* Category & Title */}
        <div style={{ marginBottom: 24 }}>
          <span style={{ background: "var(--sunSoft)", color: "#b9741a", fontSize: "13px", fontWeight: 800, padding: "6px 16px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.5px" }}>
            {article.category}
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#1B2B5E", marginTop: 20, lineHeight: 1.2, letterSpacing: "-0.5px" }}>
            {article.title}
          </h1>
        </div>

        {/* Meta info */}
        <div style={{ display: "flex", gap: 24, marginBottom: 40, borderBottom: "1px solid #e2e8f0", paddingBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 14, fontWeight: 500 }}>
            <Clock size={16} /> {article.date || "27 Juni 2026"}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 14, fontWeight: 500 }}>
            <User size={16} /> Ditulis oleh Tim Ahli Suryantara
          </div>
        </div>

        {/* Featured Image */}
        <div style={{ borderRadius: 24, overflow: "hidden", marginBottom: 40, boxShadow: "0 20px 40px rgba(0,0,0,0.06)", aspectRatio: "16/9" }}>
          <img 
            src={article.image} 
            alt={article.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Article Content */}
        <div style={{ fontSize: 17, lineHeight: 1.8, color: "#334155" }} className="article-content">
          {article.content ? (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          ) : (
            <>
              <p style={{ marginBottom: 20 }}>
                Penggunaan energi surya kini bukan lagi sekadar pilihan alternatif, melainkan kebutuhan mendesak bagi berbagai sektor di Indonesia. Sebagai salah satu langkah strategis untuk mengurangi jejak karbon dan menekan biaya operasional, instalasi panel surya (PLTS) menawarkan solusi jangka panjang yang menguntungkan.
              </p>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1B2B5E", marginTop: 32, marginBottom: 16 }}>Mengapa Hal Ini Penting?</h2>
              <p style={{ marginBottom: 20 }}>
                Banyak perusahaan dan perumahan mulai menyadari bahwa tagihan listrik konvensional terus meningkat setiap tahunnya. Dengan sistem energi surya yang dirancang khusus oleh <strong>Suryantara Energy</strong>, pengguna dapat menikmati penghematan hingga 80% pada tagihan bulanan mereka, sekaligus berpartisipasi aktif dalam upaya dekarbonisasi nasional.
              </p>
              <p style={{ marginBottom: 20 }}>
                Teknologi panel surya saat ini telah berkembang pesat. Panel Tier 1 yang kami sediakan mampu memberikan performa optimal bahkan dalam kondisi cahaya rendah. Selain itu, dengan garansi performa hingga 25 tahun, investasi awal pada sistem ini akan balik modal dalam waktu singkat dan terus memberikan keuntungan finansial selama puluhan tahun ke depan.
              </p>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1B2B5E", marginTop: 32, marginBottom: 16 }}>Langkah Selanjutnya</h2>
              <p style={{ marginBottom: 20 }}>
                Transisi menuju energi hijau membutuhkan perencanaan yang matang. Tim engineer kami siap mendampingi Anda mulai dari proses survey lokasi, desain sistem, pengurusan perizinan (NIDI & SLO), hingga pemeliharaan rutin. Ini saatnya untuk mengambil kendali atas konsumsi energi Anda.
              </p>
            </>
          )}
        </div>

        {/* CTA Section */}
        <div style={{ background: "linear-gradient(135deg, #1B2B5E, #141f45)", borderRadius: 24, padding: "40px", marginTop: 60, textAlign: "center", color: "#ffffff", boxShadow: "0 20px 40px rgba(27,43,94,0.15)" }}>
          <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Siap Beralih ke Energi Surya?</h3>
          <p style={{ fontSize: 16, color: "#cbd5e1", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Konsultasikan kebutuhan Anda bersama tim ahli Suryantara Energy. Kami siap memberikan survei dan estimasi harga gratis untuk proyek Anda.
          </p>
          <a 
            href="https://wa.me/6281910591454?text=Halo%20Suryantara%20Energy,%20saya%20tertarik%20untuk%20konsultasi%20pemasangan%20panel%20surya." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "var(--sun)", color: "#1B2B5E", fontWeight: 800, fontSize: 16, padding: "16px 32px", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 16px rgba(245,212,39,0.3)" }}
          >
            Hubungi Kami Sekarang
          </a>
        </div>

      </div>
    </div>
  );
}
