import React from 'react';

export default function Testimoni() {
  const testimonials = [
    {
      quote: "Tagihan listrik pabrik kami turun drastis sejak pemasangan. Prosesnya profesional, rapi, dan tepat waktu.",
      name: "Bpk. Hendra",
      role: "Manajer Operasional · Manufaktur"
    },
    {
      quote: "Pemasangan di rumah cepat dan bersih. Sekarang tagihan bulanan jauh lebih ringan dari sebelumnya.",
      name: "Ibu Sari",
      role: "Pemilik Rumah · Bandung"
    },
    {
      quote: "Tim engineer-nya jujur soal hitung-hitungan. Tidak ada janji muluk, hasilnya sesuai perkiraan.",
      name: "Bpk. Wijaya",
      role: "Pemilik Gudang · Bekasi"
    }
  ];

  return (
    <section style={{ background: "#fdf6ec" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(60px,8vw,104px) 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#ff6b35", letterSpacing: 1, textTransform: "uppercase" }}>Testimoni</span>
          <h2 style={{ fontSize: "clamp(1.7rem,3.6vw,2.6rem)", fontWeight: 800, letterSpacing: "-.6px", lineHeight: 1.12, marginTop: 12, color: "#2b2240" }}>
            Apa kata mereka
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22, marginTop: 40 }}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{ background: "#fff", border: "1px solid #efe6d8", borderRadius: 20, padding: 28 }}>
              <div style={{ color: "#f5a623", fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ color: "#2b2240", fontSize: 16, lineHeight: 1.6, margin: "14px 0 18px", fontWeight: 500 }}>{t.quote}</p>
              <div style={{ fontWeight: 800, fontSize: 14.5, color: "#2b2240" }}>{t.name}</div>
              <div style={{ fontSize: 13, color: "#6b6480", marginTop: 2 }}>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
