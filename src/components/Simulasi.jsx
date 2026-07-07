import React, { useState, useMemo } from 'react';
import { Calendar, Layers, Leaf, AlertCircle, RefreshCw } from 'lucide-react';

const WA_NUMBER = "6285121385675";
const YIELD_BASE = 120;
const YIELD_LOW = 108;
const YIELD_HIGH = 126; // kWh/kWp/bulan
const PPN = 0.11;
const TARIFF_GROWTH = 0.04;
const DEGRADE = 0.005;
const CO2_PER_KWH = 0.85;
const CO2_PER_TREE = 21;

const PACKAGES = [
  { wp: 2500, kwp: 2.5, price: 60000000, panels: 4, inverter: "3,6 kW", battery: "2,5 kWh" },
  { wp: 3700, kwp: 3.7, price: 70000000, panels: 6, inverter: "3,6 kW", battery: "5 kWh" },
  { wp: 5500, kwp: 5.5, price: 90000000, panels: 9, inverter: "6 kW", battery: "5 kWh" },
  { wp: 7500, kwp: 7.5, price: 125000000, panels: 12, inverter: "8 kW", battery: "5 kWh" },
  { wp: 10500, kwp: 10.5, price: 190000000, panels: 17, inverter: "10 kW", battery: "5 kWh ×2" }
];

const PROFILES = [
  { id: "siang", label: "Lebih banyak siang", icon: "☀️", ratio: 0.90, desc: "Ada orang di rumah / usaha / AC siang" },
  { id: "seimbang", label: "Siang & malam imbang", icon: "⛅", ratio: 0.78, desc: "Pemakaian merata sepanjang hari" },
  { id: "malam", label: "Lebih banyak malam", icon: "🌙", ratio: 0.65, desc: "Sering ditinggal kerja, kepakai malam" }
];

export default function Simulasi() {
  const [bill, setBill] = useState(1000000);
  const [tariff, setTariff] = useState(1444.7);
  const [profileId, setProfileId] = useState("seimbang");
  const [selectedWp, setSelectedWp] = useState(null);

  // Form State
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [area, setArea] = useState('');
  const [formErr, setFormErr] = useState(false);

  const profile = useMemo(() => PROFILES.find(p => p.id === profileId), [profileId]);
  const monthlyKwh = useMemo(() => (bill > 0 ? bill / tariff : 0), [bill, tariff]);

  const recommendedPkg = useMemo(() => {
    let best = PACKAGES[0];
    let diff = Infinity;
    for (let i = 0; i < PACKAGES.length; i++) {
      const d = Math.abs(PACKAGES[i].kwp * YIELD_BASE - monthlyKwh);
      if (d < diff) {
        diff = d;
        best = PACKAGES[i];
      }
    }
    return best;
  }, [monthlyKwh]);

  const currentPkg = useMemo(() => {
    if (selectedWp) {
      const pkg = PACKAGES.find(p => p.wp === selectedWp);
      if (pkg) return pkg;
    }
    return recommendedPkg;
  }, [selectedWp, recommendedPkg]);

  const rp = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");

  const fmtRange = (a, b) => {
    if (Math.round(a) === Math.round(b)) return rp(a);
    return rp(a) + " – " + rp(b);
  };
  
  const rpShort = (n) => {
    if (n >= 1e9) return "Rp " + (n / 1e9).toFixed(1).replace(".", ",") + " M";
    if (n >= 1e6) return "Rp " + Math.round(n / 1e6) + " jt";
    if (n >= 1e3) return "Rp " + Math.round(n / 1e3) + " rb";
    return "Rp " + Math.round(n);
  };

  const offset = (pkg, yld, ratio) => Math.min(pkg.kwp * yld * ratio, monthlyKwh);

  const paybackYears = (annualY1, invest) => {
    if (annualY1 <= 0) return null;
    let cum = 0;
    for (let y = 1; y <= 25; y++) {
      const s = annualY1 * Math.pow(1 + TARIFF_GROWTH, y - 1) * (1 - DEGRADE * (y - 1));
      const prev = cum;
      cum += s;
      if (cum >= invest) return y - 1 + (invest - prev) / (cum - prev);
    }
    return null;
  };

  const buildSeries = (annualY1) => {
    const arr = [];
    let cum = 0;
    for (let y = 1; y <= 25; y++) {
      cum += annualY1 * Math.pow(1 + TARIFF_GROWTH, y - 1) * (1 - DEGRADE * (y - 1));
      arr.push(cum);
    }
    return arr;
  };

  const calc = useMemo(() => {
    const pkg = currentPkg;
    const r = profile.ratio;
    const t = tariff;
    
    const saveBase = offset(pkg, YIELD_BASE, r) * t;
    const saveLow = offset(pkg, YIELD_LOW, r * 0.9) * t;
    const saveHigh = offset(pkg, YIELD_HIGH, r) * t;
    const invest = pkg.price * (1 + PPN);

    const pctLow = bill > 0 ? Math.min(100, (saveLow / bill) * 100) : 0;
    const pctHigh = bill > 0 ? Math.min(100, (saveHigh / bill) * 100) : 0;

    const payFast = paybackYears(saveHigh * 12, invest);
    const paySlow = paybackYears(saveLow * 12, invest);
    const payBase = paybackYears(saveBase * 12, invest);

    const serLow = buildSeries(saveLow * 12);
    const serBase = buildSeries(saveBase * 12);
    const serHigh = buildSeries(saveHigh * 12);
    const total25 = serBase[24];

    const offBase = offset(pkg, YIELD_BASE, r);
    const co2 = offBase * 12 * CO2_PER_KWH;

    return {
      pkg,
      r,
      invest,
      saveBase,
      saveLow,
      saveHigh,
      pctLow,
      pctHigh,
      payFast,
      paySlow,
      payBase,
      total25,
      co2,
      trees: Math.round(co2 / CO2_PER_TREE),
      production: pkg.kwp * YIELD_BASE,
      usable: pkg.kwp * YIELD_BASE * r,
      offBase,
      serLow,
      serBase,
      serHigh
    };
  }, [currentPkg, profile, tariff, bill]);

  // Handle formatting input tagihan
  const handleBillInputChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, "");
    const numericVal = Math.min(parseInt(rawVal) || 0, 50000000);
    setBill(numericVal);
  };

  const handleBillRangeChange = (e) => {
    setBill(parseInt(e.target.value));
  };

  // Submit WhatsApp Form
  const handleSubmitSurvey = (e) => {
    e.preventDefault();
    if (!nama.trim() || !wa.trim()) {
      setFormErr(true);
      return;
    }
    setFormErr(false);



    const msg = `Halo SURYANTARA ☀️ Saya mau jadwalkan survei gratis.\n\n` +
      `Nama: ${nama}\n` +
      `WhatsApp: ${wa}\n` +
      `Area: ${area.trim() || "-"}\n\n` +
      `Dari kalkulator:\n` +
      `• Paket: ${calc.pkg.wp} WP (${rp(calc.pkg.price)})\n` +
      `• Tagihan sekarang: ±${rp(bill)}/bulan\n` +
      `• Perkiraan hemat: ±${fmtRange(calc.saveLow, calc.saveHigh)}/bulan\n` +
      `• Balik modal: ${calc.payFast && calc.paySlow ? `±${calc.payFast.toFixed(1).replace(".", ",")}–${calc.paySlow.toFixed(1).replace(".", ",")} tahun` : ">25 tahun"}\n\n` +
      `Mohon dihubungi untuk jadwal survei. Terima kasih!`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // HAND-DRAWN SVG CHART PLOTTING
  const chartSvg = useMemo(() => {
    const W = 360;
    const H = 190;
    const padL = 46;
    const padR = 10;
    const padT = 8;
    const padB = 24;

    const maxY = Math.max(calc.serHigh[24], calc.invest * 1.12, 1);
    const getX = (yearIdx) => padL + (yearIdx / 24) * (W - padL - padR);
    const getY = (val) => H - padB - (val / maxY) * (H - padT - padB);

    // Build shaded area for savings range (band low to high)
    let bandD = "M";
    for (let i = 0; i < 25; i++) {
      bandD += (i === 0 ? "" : "L") + getX(i).toFixed(1) + " " + getY(calc.serHigh[i]).toFixed(1) + " ";
    }
    for (let j = 24; j >= 0; j--) {
      bandD += "L" + getX(j).toFixed(1) + " " + getY(calc.serLow[j]).toFixed(1) + " ";
    }
    bandD += "Z";

    // Build base savings line
    let baseD = "";
    for (let i = 0; i < 25; i++) {
      baseD += (i === 0 ? "M" : "L") + getX(i).toFixed(1) + " " + getY(calc.serBase[i]).toFixed(1) + " ";
    }

    const invY = getY(calc.invest);

    return {
      bandD,
      baseD,
      invY,
      W,
      H,
      padL,
      padR,
      padT,
      padB,
      years: [1, 5, 10, 15, 20, 25],
      paybackX: calc.payBase && calc.payBase <= 25 ? getX(calc.payBase - 1) : null,
      maxY
    };
  }, [calc]);

  const fmtRangeShort = (a, b) => {
    const hi = Math.max(a, b);
    let div = 1;
    let suf = "";
    if (hi >= 1e6) {
      div = 1e6;
      suf = " jt";
    } else if (hi >= 1e3) {
      div = 1e3;
      suf = " rb";
    }
    const f = (v) => {
      return div === 1e6
        ? (v / div).toFixed(2).replace(/\.?0+$/, "")
        : Math.round(v / div).toString();
    };
    const lo = f(a);
    const high = f(b);
    return (lo === high ? "Rp " + high : "Rp " + lo + "–" + high) + suf;
  };

  const pctSliderFill = ((bill - 200000) / (10000000 - 200000)) * 100;

  return (
    <div className="grid">
      {/* INPUT PANEL */}
      <div className="card inputcard">
        {/* Step 1: Bill Input */}
        <label className="q">
          <span className="qhead">
            <span className="step">1</span> Tagihan listrik PLN per bulan
          </span>
          <div className="billbox">
            <span>Rp</span>
            <input
              type="text"
              inputMode="numeric"
              value={bill.toLocaleString("id-ID")}
              onChange={handleBillInputChange}
            />
          </div>
          <input
            id="billRange"
            type="range"
            min="200000"
            max="10000000"
            step="50000"
            value={Math.min(bill, 10000000)}
            onChange={handleBillRangeChange}
            style={{
              background: `linear-gradient(90deg, var(--coral) ${pctSliderFill}%, var(--line) ${pctSliderFill}%)`
            }}
          />
          <div className="rangelabels">
            <span>Rp 200 rb</span>
            <span>Rp 10 jt</span>
          </div>
        </label>

        {/* Step 2: Tariff Dropdown */}
        <label className="q" style={{ marginTop: 24 }}>
          <span className="qhead">
            <span className="step">2</span> Golongan listrik di rumah
          </span>
          <span className="hint">Bisa dilihat di meteran atau struk token. Ragu? Pilih yang paling dekat.</span>
          <div className="selwrap">
            <select
              value={tariff}
              onChange={(e) => setTariff(parseFloat(e.target.value))}
            >
              <option value="1352">900 VA (nonsubsidi)</option>
              <option value="1444.7">1.300 VA</option>
              <option value="1444.7">2.200 VA</option>
              <option value="1699.53">3.500–5.500 VA</option>
              <option value="1699.53">6.600 VA ke atas</option>
            </select>
          </div>
          <div className="kwh">
            Setara pemakaian ± <b style={{ color: "var(--ink)" }}>{Math.round(monthlyKwh).toLocaleString("id-ID")} kWh</b>/bulan
          </div>
        </label>

        {/* Step 3: Usage Profile */}
        <div className="q" style={{ marginTop: 24 }}>
          <span className="qhead">
            <span className="step">3</span> Kapan listrik paling banyak kepakai?
          </span>
          <div className="profiles">
            {PROFILES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setProfileId(p.id)}
                className={`profile${p.id === profileId ? " active" : ""}`}
              >
                <div className="pi">{p.icon}</div>
                <div className="pl">{p.label}</div>
                <div className="pd">{p.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Package selector */}
        <div style={{ marginTop: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>Paket yang dipakai</span>
            {selectedWp && selectedWp !== recommendedPkg.wp && (
              <button
                type="button"
                onClick={() => setSelectedWp(null)}
                className="linkbtn"
              >
                <RefreshCw size={12} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} /> Pakai saran kami
              </button>
            )}
          </div>
          
          <div className="pkgrow">
            {PACKAGES.map((pkg) => {
              const isSelected = pkg.wp === currentPkg.wp;
              const isRecommended = pkg.wp === recommendedPkg.wp;
              return (
                <button
                  key={pkg.wp}
                  type="button"
                  onClick={() => setSelectedWp(pkg.wp)}
                  className={`pkg${isSelected ? " active" : ""}`}
                >
                  {isRecommended && (
                    <div className="rec">
                      ★ Disarankan
                    </div>
                  )}
                  <div className="pw">{pkg.wp.toLocaleString("id-ID")} WP</div>
                  <div className="pp">{rpShort(pkg.price)}</div>
                </button>
              );
            })}
          </div>

          <div className="pkgspec">
            Specs: <b>{calc.pkg.panels} panel</b> · inverter {calc.pkg.inverter} · baterai {calc.pkg.battery}
          </div>
        </div>
      </div>

      {/* RESULTS DISPLAY */}
      <div>
        {/* Savings Card */}
        <div className="hero">
          <div className="sun">☀️</div>
          <div className="hl">Perkiraan hemat tagihan</div>
          <div className="hv">
            {calc.saveBase > 0 ? fmtRangeShort(calc.saveLow, calc.saveHigh) : "Rp 0"}
            <small>/bln</small>
          </div>
          <div className="chip">
            ▼ Tagihan turun {Math.round(calc.pctLow)}–{Math.round(calc.pctHigh)}%
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="metrics">
          <div className="metric">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" style={{ marginBottom: 4 }}><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3L2 6M22 6l-3-3"/></svg>
            <div className="ml">Balik modal</div>
            <div className="mv">{calc.payFast && calc.paySlow ? `±${calc.payFast.toFixed(1).replace(".", ",")}–${calc.paySlow.toFixed(1).replace(".", ",")}` : ">25"}</div>
            <div className="mu">tahun</div>
          </div>
          
          <div className="metric">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" style={{ marginBottom: 4 }}><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M16 12h.01M2 10h20"/></svg>
            <div className="ml">Total hemat 25 thn</div>
            <div className="mv">{rpShort(calc.total25)}</div>
            <div className="mu">&nbsp;</div>
          </div>

          <div className="metric">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" style={{ marginBottom: 4 }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
            <div className="ml">Setara nanam</div>
            <div className="mv" style={{ color: "var(--green)" }}>{calc.trees.toLocaleString("id-ID")}</div>
            <div className="mu">pohon/thn</div>
          </div>
        </div>

        {/* Handmade SVG Chart */}
        <div className="card chartcard">
          <div className="ct">Hemat menumpuk, modal terbayar</div>
          <div className="cd">Area = rentang perkiraan hemat (terendah–tertinggi). Saat melewati garis modal, kamu balik modal.</div>
          
          <div style={{ maxWidth: "100%" }}>
            <svg id="chart" viewBox={`0 0 ${chartSvg.W} ${chartSvg.H}`} width="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
              {/* Modal Target Dashed Line */}
              <line
                x1={chartSvg.padL}
                y1={chartSvg.invY.toFixed(1)}
                x2={chartSvg.W - chartSvg.padR}
                y2={chartSvg.invY.toFixed(1)}
                stroke="#2b2240"
                strokeWidth="1.5"
                strokeDasharray="5 4"
              />
              <text
                x={chartSvg.W - chartSvg.padR}
                y={(chartSvg.invY - 5).toFixed(1)}
                textAnchor="end"
                fontSize="9"
                fill="#2b2240"
                fontWeight="700"
              >
                Modal {rpShort(calc.invest)}
              </text>

              {/* Shaded Area */}
              <path d={chartSvg.bandD} fill="rgba(255,107,53,0.22)" />

              {/* Base Savings Line */}
              <path d={chartSvg.baseD} fill="none" stroke="#ff6b35" strokeWidth="2.5" />

              {/* Payback Intersection Marker */}
              {chartSvg.paybackX !== null && (
                <>
                  <line
                    x1={chartSvg.paybackX.toFixed(1)}
                    y1={chartSvg.padT}
                    x2={chartSvg.paybackX.toFixed(1)}
                    y2={chartSvg.H - chartSvg.padB}
                    stroke="#1fa463"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <circle cx={chartSvg.paybackX.toFixed(1)} cy={chartSvg.invY.toFixed(1)} r="4" fill="#1fa463" />
                </>
              )}

              {/* X Axis Labels */}
              {chartSvg.years.map((yr, idx) => {
                const xVal = chartSvg.padL + (idx / 5) * (chartSvg.W - chartSvg.padL - chartSvg.padR);
                return (
                  <text key={yr} x={xVal.toFixed(1)} y={chartSvg.H - 8} textAnchor="middle" fontSize="9" fill="#6b6480">
                    {yr}th
                  </text>
                );
              })}

              {/* Y Axis Labels */}
              <text x={chartSvg.padL - 6} y={chartSvg.H - chartSvg.padB} textAnchor="end" fontSize="9" fill="#6b6480">0</text>
              <text x={chartSvg.padL - 6} y={chartSvg.padT + 8} textAnchor="end" fontSize="9" fill="#6b6480">{rpShort(chartSvg.maxY)}</text>
            </svg>
          </div>

          <div className="legend">
            <span><i style={{ background: "rgba(255,107,53,.3)" }}></i>Rentang hemat</span>
            <span><i style={{ background: "var(--ink)", height: 2 }}></i>Modal awal</span>
          </div>
        </div>

        {/* Calculations Detail (Details Accordion) */}
        <details className="card detail">
          <summary>
            <span><span className="ic">ⓘ</span> Lihat rincian perhitungan</span>
            <span className="ic" id="detArrow">▾</span>
          </summary>
          <div className="body">
            <div className="why">
              <b>Kenapa tagihan nggak langsung nol?</b><br />
              Sejak aturan baru PLTS Atap (2024), listrik berlebih yang masuk ke PLN tidak dihitung sebagai pengurang tagihan.
              Jadi hemat kamu cuma dari listrik panel yang benar-benar <b>dipakai sendiri</b> — siang langsung dari panel, malam dari baterai. Sisanya tetap dari PLN, dan ada biaya beban yang tetap jalan.
            </div>
            
            <div>
              <div className="drow">
                <span>Listrik dihasilkan panel</span>
                <b>{Math.round(calc.production)} kWh/bulan</b>
              </div>
              <div className="drow">
                <span>Yang bisa dipakai sendiri</span>
                <b>{Math.round(calc.usable)} kWh/bulan ({Math.round(calc.r * 100)}%)</b>
              </div>
              <div className="drow">
                <span>Listrik PLN yang tergantikan</span>
                <b>{Math.round(calc.offBase)} kWh/bulan</b>
              </div>
              <div className="drow">
                <span>Harga paket (belum PPN)</span>
                <b>{rp(calc.pkg.price)}</b>
              </div>
              <div className="drow">
                <span>Total modal (≈ +11% PPN)</span>
                <b>{rp(calc.invest)}</b>
              </div>
              <div className="drow">
                <span>Hemat per tahun (perkiraan, thn ke-1)</span>
                <b>{fmtRange(calc.saveLow * 12, calc.saveHigh * 12)}</b>
              </div>
              <div className="drow">
                <span>CO₂ yang dikurangi</span>
                <b>{Math.round(calc.co2).toLocaleString("id-ID")} kg/tahun</b>
              </div>
            </div>

            <div className="assume">
              Asumsi: 1 kWp ≈ {YIELD_LOW}–{YIELD_HIGH} kWh/bulan · tarif PLN naik ±4%/tahun · performa panel turun ±0,5%/tahun · proyeksi 25 tahun. Semua angka <b>perkiraan</b>; hasil pasti ditentukan engineer setelah survei lokasi.
            </div>
          </div>
        </details>

        {/* Lead/Inquiry Form */}
        <div className="card form">
          <h3>Lanjut ke survei gratis</h3>
          <p className="fs">Tinggalkan kontak, engineer kami yang akan cek lokasi dan hitung penawaran paling pas buat kamu. Hasil hitungan di atas ikut terkirim otomatis.</p>
          
          <form onSubmit={handleSubmitSurvey} className="fields" style={{ display: "grid", marginTop: 16 }}>
            <div className="field">
              <label>Nama</label>
              <input
                type="text"
                placeholder="Nama kamu"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            
            <div className="field">
              <label>Nomor WhatsApp</label>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="08xxxxxxxxxx"
                value={wa}
                onChange={(e) => setWa(e.target.value)}
              />
            </div>
            
            <div className="field full">
              <label>Area / Kecamatan (buat cek zona survei gratis)</label>
              <input
                type="text"
                placeholder="cth: Cilandak, Jakarta Selatan"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            {formErr && (
              <div className="field full" style={{ color: "var(--coral)", fontSize: 12, fontWeight: 600, marginTop: 8 }}>
                Mohon isi nama dan nomor WhatsApp dulu ya.
              </div>
            )}

            <button
              type="submit"
              className="cta"
              style={{ gridColumn: "1/-1" }}
            >
              Kirim &amp; Jadwalkan Survei Gratis
            </button>
            <div className="note" style={{ gridColumn: "1/-1" }}>
              Gratis khusus Jabodetabek · cicilan 12× tanpa bunga · data kamu langsung diteruskan ke tim kami via WhatsApp
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
