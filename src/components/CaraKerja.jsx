import React from 'react';
import { Search, FileText, ClipboardList, BarChart3 } from 'lucide-react';

export default function CaraKerja() {
  const steps = [
    {
      step: "01",
      title: "Konsultasi & survei gratis",
      desc: "Engineer kami meninjau lokasi dan kebutuhan listrik Anda tanpa biaya.",
      icon: <Search className="text-[#ff6b35]" size={26} />,
      bgIcon: "bg-[#fff3df]"
    },
    {
      step: "02",
      title: "Desain & penawaran",
      desc: "Kami rancang sistem paling sesuai beserta simulasi hemat dan estimasi balik modal.",
      icon: <FileText className="text-[#ff6b35]" size={26} />,
      bgIcon: "bg-[#fff3df]"
    },
    {
      step: "03",
      title: "Instalasi profesional",
      desc: "Pemasangan rapi dan aman oleh teknisi bersertifikat sesuai standar keselamatan.",
      icon: <ClipboardList className="text-[#ff6b35]" size={26} />,
      bgIcon: "bg-[#fff3df]"
    },
    {
      step: "04",
      title: "Monitoring & after-sales",
      desc: "Pantau produksi listrik real-time, didukung garansi dan layanan purna jual.",
      icon: <BarChart3 className="text-white" size={26} />,
      bgIcon: "bg-[#ff6b35] shadow-lg shadow-[#ff6b35]/30"
    }
  ];

  return (
    <section id="carakerja" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(60px,8vw,104px) 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#ff6b35", letterSpacing: 1, textTransform: "uppercase" }}>Cara kerja</span>
          <h2 style={{ fontSize: "clamp(1.7rem,3.6vw,2.6rem)", fontWeight: 800, letterSpacing: "-.6px", lineHeight: 1.12, marginTop: 12, color: "#2b2240" }}>
            4 Langkah survei tempat
          </h2>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 20, marginTop: 44 }}>
          {steps.map((s, idx) => (
            <div key={idx} style={{ background: "#fdf6ec", border: "1px solid #efe6d8", borderRadius: 18, padding: 26 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: 50, height: 50, borderRadius: 14, background: s.step === '04' ? '#ff6b35' : '#fff3df', display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", boxShadow: s.step === '04' ? "0 8px 18px rgba(255,107,53,.3)" : "none" }}>
                  {s.icon}
                </span>
                <span style={{ fontSize: 40, fontWeight: 800, color: s.step === '04' ? '#ffd9c8' : '#ece2d2', lineHeight: .9 }}>
                  {s.step}
                </span>
              </div>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: "#ff6b35", letterSpacing: .6, textTransform: "uppercase", marginTop: 18 }}>Langkah {s.step}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#2b2240", marginTop: 6 }}>{s.title}</h3>
              <p style={{ color: "#6b6480", fontSize: 14, lineHeight: 1.55, marginTop: 7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
