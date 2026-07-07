import React from 'react';
import { Check } from 'lucide-react';

export default function UntukSiapa() {
  const targets = [
    {
      type: "Residensial",
      title: "Untuk Rumah Tinggal",
      desc: "Pangkas tagihan bulanan keluarga dengan sistem rooftop yang dipasang rapi di atap genteng maupun metal.",
      img: "/images/bandung-residensial.png",
      bullets: [
        "Hemat tagihan listrik tiap bulan",
        "Opsi cicilan ringan tersedia",
        "Sistem hybrid + baterai untuk cadangan"
      ]
    },
    {
      type: "Bisnis & Industri",
      title: "Untuk Bisnis & Industri",
      desc: "Tekan biaya operasional pabrik, gudang, dan gedung komersial dengan sistem skala besar ber-ROI cepat.",
      img: "/images/industri-pabrik.png",
      bullets: [
        "Turunkan biaya listrik operasional",
        "Kapasitas puluhan–ratusan kWp",
        "Dukung target ESG & keberlanjutan"
      ]
    }
  ];

  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(60px,8vw,104px) 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#ff6b35", letterSpacing: 1, textTransform: "uppercase" }}>Untuk siapa</span>
          <h2 style={{ fontSize: "clamp(1.7rem,3.6vw,2.6rem)", fontWeight: 800, letterSpacing: "-.6px", lineHeight: 1.12, marginTop: 12, color: "#2b2240" }}>
            Satu mitra untuk rumah &amp; industri
          </h2>
          <p style={{ color: "#6b6480", fontSize: "clamp(1rem,1.8vw,1.12rem)", marginTop: 14 }}>
            Skala berbeda, prinsip sama: desain yang tepat, pemasangan rapi, dan hemat yang nyata.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))", gap: 24, marginTop: 44 }}>
          {targets.map((t, idx) => (
            <div key={idx} style={{ background: "#fdf6ec", border: "1px solid #efe6d8", borderRadius: 22, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", width: "100%" }}>
                <img
                  src={t.img}
                  alt={t.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span style={{ position: "absolute", top: 14, left: 14, background: "rgba(43,34,64,.88)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "6px 13px", borderRadius: 999 }}>
                  {t.type}
                </span>
              </div>
              <div style={{ padding: 26, flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: 21, fontWeight: 800, color: "#2b2240", margin: 0 }}>{t.title}</h3>
                  <p style={{ color: "#6b6480", fontSize: 15, lineHeight: 1.55, margin: "8px 0 18px" }}>{t.desc}</p>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {t.bullets.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, marginTop: 1 }}>
                        <Check className="text-[#ff6b35]" size={20} strokeWidth={2.4} />
                      </span>
                      <span style={{ fontSize: 14.5, color: "#473560" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
