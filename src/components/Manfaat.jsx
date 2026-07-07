import React from 'react';
import { TrendingDown, Clock, House, CheckCircle2 } from 'lucide-react';

export default function Manfaat() {
  const benefits = [
    {
      icon: <TrendingDown className="text-[#ff6b35]" size={24} />,
      title: "Tagihan turun signifikan",
      desc: "Hingga 50% lebih hemat tiap bulan. Listrik yang Anda hasilkan sendiri langsung memangkas pemakaian dari PLN.",
      bgColor: "#fff3df"
    },
    {
      icon: <Clock className="text-[#ff6b35]" size={24} />,
      title: "Balik modal, lalu untung",
      desc: "Sistem berumur 25 tahun lebih. Setelah masa balik modal, listrik yang dihasilkan menjadi penghematan murni.",
      bgColor: "#fff3df"
    },
    {
      icon: <House className="text-[#ff6b35]" size={24} />,
      title: "Nilai properti naik",
      desc: "Bangunan ber-panel surya lebih bernilai dan mencerminkan komitmen keberlanjutan — penting bagi rumah maupun bisnis.",
      bgColor: "#fff3df"
    },
    {
      icon: <CheckCircle2 className="text-[#1fa463]" size={24} />,
      title: "Andal, bebas repot",
      desc: "Garansi performa hingga 12 tahun, monitoring real-time, dan tim after-sales yang siap membantu.",
      bgColor: "#e7f6ee"
    }
  ];

  return (
    <section id="manfaat" style={{ scrollMarginTop: 80, background: "#fdf6ec" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(60px,8vw,104px) 24px" }}>
        <div style={{ maxWidth: 680 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#ff6b35", letterSpacing: 1, textTransform: "uppercase" }}>Kenapa tenaga surya</span>
          <h2 style={{ fontSize: "clamp(1.7rem,3.6vw,2.6rem)", fontWeight: 800, letterSpacing: "-.6px", lineHeight: 1.12, margin: "12px 0 0", color: "#2b2240" }}>
            Investasi yang membayar dirinya sendiri
          </h2>
          <p style={{ color: "#6b6480", fontSize: "clamp(1rem,1.8vw,1.12rem)", margin: "14px 0 0", lineHeight: 1.6 }}>
            Listrik dari matahari menggantikan listrik PLN yang harganya terus naik. Setiap tahun yang lewat, penghematannya makin terasa.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18, marginTop: 44 }}>
          {benefits.map((b, idx) => (
            <div key={idx} style={{ background: "#fff", border: "1px solid #efe6d8", borderRadius: 20, padding: 26 }}>
              <span style={{ width: 46, height: 46, borderRadius: 13, background: b.bgColor, display: "flex", alignItems: "center", justifyOrigin: "center", justifyContent: "center" }}>
                {b.icon}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: "18px 0 0", color: "#2b2240" }}>{b.title}</h3>
              <p style={{ color: "#6b6480", fontSize: 14.5, lineHeight: 1.55, marginTop: 8 }} dangerouslySetInnerHTML={{ __html: b.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
