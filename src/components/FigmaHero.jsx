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
          <div className="hmb-buttons">
            <button className="hmb-btn">Belanja Sekarang</button>
            <button className="hmb-btn-outline">Jual Produkmu</button>
          </div>

          <div className="hmb-stats">
            <div className="stat"><strong>12.400+</strong><span>Total Transaksi</span></div>
            <div className="stat"><strong>2.100+</strong><span>Total Merchant</span></div>
            <div className="stat"><strong>98%</strong><span>Rating Kepuasan</span></div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="hmb-pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="hero-side-banners solid-banner-stack" style={{ gap: '1rem', marginTop: 0 }}>
        <div className="solid-banner-card bg-emerald-900" style={{ 
          padding: '1.25rem',
          backgroundImage: "linear-gradient(to right, rgba(6, 78, 59, 0.95), rgba(6, 78, 59, 0.6)), url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="banner-content">
            <h3 style={{ fontSize: '1.15rem' }}>Daftar Jadi Merchant UMKM</h3>
            <p style={{ fontSize: '0.85rem' }}>Jangkau jutaan pembeli aktif.</p>
            <button className="banner-btn green-btn">Daftar Sekarang &rarr;</button>
          </div>
          <div className="banner-icon" style={{ top: '1rem', right: '1rem', fontSize: '1.8rem' }}>💬</div>
        </div>

        <div className="solid-banner-card bg-amber-700" style={{ 
          padding: '1.25rem',
          backgroundImage: "linear-gradient(to right, rgba(180, 83, 9, 0.95), rgba(180, 83, 9, 0.6)), url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="banner-content">
            <h3 style={{ fontSize: '1.15rem' }}>Flash Sale Hari Ini!</h3>
            <p style={{ fontSize: '0.85rem' }}>Diskon hingga 50% untuk produk terpilih.</p>
            <button className="banner-btn yellow-btn">Lihat Promo &rarr;</button>
          </div>
          <div className="banner-icon" style={{ top: '1rem', right: '1rem', fontSize: '1.8rem' }}>⚡</div>
        </div>

        <div className="solid-banner-card bg-violet-700" style={{ 
          padding: '1.25rem',
          backgroundImage: "linear-gradient(to right, rgba(109, 40, 217, 0.95), rgba(109, 40, 217, 0.6)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="banner-content">
            <h3 style={{ fontSize: '1.15rem' }}>Program Affiliate</h3>
            <p style={{ fontSize: '0.85rem' }}>Dapatkan komisi hingga 10% setiap referensi.</p>
            <button className="banner-btn purple-btn">Bergabung &rarr;</button>
          </div>
          <div className="banner-icon" style={{ top: '1rem', right: '1rem', fontSize: '1.8rem' }}>🤝</div>
        </div>
      </div>
    </section>
  );
}
