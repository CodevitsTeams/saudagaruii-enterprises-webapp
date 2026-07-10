import React from 'react';
import { MessageSquare, Zap, Handshake } from 'lucide-react';

export default function FigmaHero() {
  return (
    <section className="hero-grid-section animate-fade-in">
      <div className="hero-main-banner">
        <div className="hmb-content">
          <span className="hmb-tag">UMKM NAIK KELAS & AI POWERED</span>
          <h1 className="hmb-title">Produk Lokal Terbaik<br />dari Penjuru Nusantara</h1>
          <p className="hmb-subtitle">Temukan ribuan produk pilihan UMKM (Bahan berkualitas, fashion, kerajinan, dan lain-lain). Dijamin original 100%.</p>
          <button className="hmb-btn">Belanja Sekarang</button>

          <div className="hmb-stats">
            <div className="stat"><strong>12.400+</strong><span>Total Transaksi</span></div>
            <div className="stat"><strong>2.100+</strong><span>Total Merchant</span></div>
            <div className="stat"><strong>98%</strong><span>Rating Kepuasan</span></div>
          </div>
        </div>
      </div>

      <div className="hero-side-banners">
        <div className="side-banner sb-merchant">
          <div className="sb-top">
            <div className="sb-icon"><MessageSquare size={20} color="#0b4931" /></div>
            <div className="sb-text">
              <h3>Daftar Jadi Merchant UMKM</h3>
              <p>Jangkau jutaan pembeli aktif.</p>
            </div>
          </div>
          <button className="sb-btn" style={{ color: '#0b4931' }}>Daftar Sekarang &rarr;</button>
        </div>

        <div className="side-banner sb-flash">
          <div className="sb-top">
            <div className="sb-icon"><Zap size={20} color="#d97706" /></div>
            <div className="sb-text">
              <h3>Flash Sale Hari Ini!</h3>
              <p>Diskon hingga 50% untuk produk terpilih.</p>
            </div>
          </div>
          <button className="sb-btn" style={{ color: '#d97706' }}>Lihat Promo &rarr;</button>
        </div>

        <div className="side-banner sb-affiliate">
          <div className="sb-top">
            <div className="sb-icon"><Handshake size={20} color="#6d28d9" /></div>
            <div className="sb-text">
              <h3>Program Affiliate</h3>
              <p>Dapatkan komisi hingga 10% setiap referensi.</p>
            </div>
          </div>
          <button className="sb-btn" style={{ color: '#6d28d9' }}>Bergabung &rarr;</button>
        </div>
      </div>
    </section>
  );
}
