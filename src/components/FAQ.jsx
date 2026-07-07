import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Berapa lama balik modal investasi panel surya?',
      a: 'Umumnya 5–8 tahun, tergantung tagihan, profil pemakaian, dan paket yang dipilih. Gunakan simulator di atas untuk perkiraan spesifik kebutuhan Anda.'
    },
    {
      q: 'Apakah masih hemat saat mendung atau musim hujan?',
      a: 'Panel tetap menghasilkan listrik saat mendung meski lebih rendah. Sistem hybrid dengan baterai membantu menjaga pasokan tetap stabil.'
    },
    {
      q: 'Apakah saya perlu mengurus izin ke PLN?',
      a: 'Untuk sistem on-grid ada proses administrasi dengan PLN. Tim kami yang mengurus seluruh perizinan, jadi Anda tinggal terima beres.'
    },
    {
      q: 'Bagaimana dengan perawatannya?',
      a: 'Perawatan sangat minimal — umumnya cukup pembersihan berkala. Kami juga menyediakan layanan pemeliharaan dan monitoring produksi listrik.'
    },
    {
      q: 'Apakah tersedia opsi cicilan?',
      a: 'Ya, tersedia skema cicilan untuk meringankan investasi awal. Diskusikan detailnya bersama tim kami saat konsultasi gratis.'
    }
  ];

  return (
    <section id="faq" style={{ background: "#fdf6ec" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(60px,8vw,104px) 24px" }}>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#ff6b35", letterSpacing: 1, textTransform: "uppercase" }}>Pertanyaan umum</span>
          <h2 style={{ fontSize: "clamp(1.7rem,3.6vw,2.6rem)", fontWeight: 800, letterSpacing: "-.6px", lineHeight: 1.12, marginTop: 12, color: "#2b2240" }}>
            Hal yang sering ditanyakan
          </h2>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 36 }}>
          {faqs.map((f, idx) => (
            <details key={idx} style={{ background: "#fff", border: "1px solid #efe6d8", borderRadius: 16, overflow: "hidden" }}>
              <summary style={{ listStyle: "none", cursor: "pointer", padding: "18px 22px", fontWeight: 700, fontSize: 16, color: "#2b2240", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
                {f.q}
                <span className="fqp" style={{ color: "#ff6b35", fontSize: 22, fontWeight: 700, flex: "0 0 auto", transition: "transform .2s", lineHeight: 1 }}>+</span>
              </summary>
              <div style={{ padding: "0 22px 20px", color: "#6b6480", fontSize: 15, lineHeight: 1.6 }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
