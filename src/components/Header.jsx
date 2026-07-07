import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown, ArrowUpRight } from 'lucide-react';

export default function Header({ waLink }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ['about-us', 'portfolio', 'simulation', 'technology', 'packet', 'article'];
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e2e8f0" }}>

      {/* Main Header Bar */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        {/* Brand Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logosne.svg" alt="Suryantara Energy" style={{ height: "80px", objectFit: "contain" }} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a href="#about-us" className="sun-energy-nav-link" style={{ color: activeSection === 'about-us' ? 'var(--coral)' : undefined }}>Tentang Kami</a>
          <a href="#portfolio" className="sun-energy-nav-link" style={{ color: activeSection === 'portfolio' ? 'var(--coral)' : undefined }}>Portofolio</a>
          <a href="#simulation" className="sun-energy-nav-link" style={{ color: activeSection === 'simulation' ? 'var(--coral)' : undefined }}>Simulasi</a>
          <a href="#technology" className="sun-energy-nav-link" style={{ color: activeSection === 'technology' ? 'var(--coral)' : undefined }}>Teknologi &amp; Inovasi</a>
          <a href="#packet" className="sun-energy-nav-link" style={{ color: activeSection === 'packet' ? 'var(--coral)' : undefined }}>Biaya</a>
          <a href="#article" className="sun-energy-nav-link" style={{ color: activeSection === 'article' ? 'var(--coral)' : undefined }}>Blog</a>
          
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="get-quote-btn">
            Get A Quote
          </a>
          <button style={{ background: "none", border: "none", color: "#334155", cursor: "pointer", padding: 4 }}>
            <Search size={18} />
          </button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="show-mobile-btn"
          style={{ background: "none", border: "none", color: "#1B2B5E", cursor: "pointer", display: "none" }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 14, position: "absolute", top: 65, left: 0, width: "100%", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)", zIndex: 50 }}>
          <a href="#about-us" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: activeSection === 'about-us' ? 'var(--coral)' : "#334155", fontWeight: 700, fontSize: 15 }}>Tentang Kami</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: activeSection === 'portfolio' ? 'var(--coral)' : "#334155", fontWeight: 700, fontSize: 15 }}>Portofolio</a>
          <a href="#simulation" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: activeSection === 'simulation' ? 'var(--coral)' : "#334155", fontWeight: 700, fontSize: 15 }}>Simulasi</a>
          <a href="#technology" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: activeSection === 'technology' ? 'var(--coral)' : "#334155", fontWeight: 700, fontSize: 15 }}>Teknologi &amp; Inovasi</a>
          <a href="#packet" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: activeSection === 'packet' ? 'var(--coral)' : "#334155", fontWeight: 700, fontSize: 15 }}>Biaya</a>
          <a href="#article" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: activeSection === 'article' ? 'var(--coral)' : "#334155", fontWeight: 700, fontSize: 15 }}>Blog</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, background: "var(--coral)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "12px 0", borderRadius: 999, textDecoration: "none" }}>
            Get A Quote
          </a>
        </div>
      )}
    </header>
  );
}
