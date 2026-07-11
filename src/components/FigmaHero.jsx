import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap, Handshake } from 'lucide-react';

export default function FigmaHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: 'UMKM NAIK KELAS & AI POWERED',
      title: 'Produk Lokal Terbaik<br />dari Penjuru Nusantara',
      subtitle: 'Temukan ribuan produk pilihan UMKM (Bahan berkualitas, fashion, kerajinan, dan lain-lain). Dijamin original 100%.',
      bgImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
      btn1: 'Belanja Sekarang',
      btn2: 'Jual Produkmu',
      stats: [
        { value: '12.400+', label: 'Total Transaksi' },
        { value: '2.100+', label: 'Total Merchant' },
        { value: '98%', label: 'Rating Kepuasan' }
      ]
    },
    {
      id: 2,
      tag: 'TEKNOLOGI AI TERDEPAN',
      title: 'Jualan Makin Mudah<br />Dengan Asisten Cerdas',
      subtitle: 'Tingkatkan omzet dengan AI Photo Studio, AI Copywriter, dan Chatbot cerdas yang siap melayani 24/7.',
      bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
      btn1: 'Pelajari Fitur AI',
      btn2: 'Mulai Jualan',
      stats: [
        { value: '3x', label: 'Lipat Penjualan' },
        { value: '24/7', label: 'CS Otomatis' },
        { value: '4K', label: 'Resolusi Foto AI' }
      ]
    },
    {
      id: 3,
      tag: 'EKOSISTEM KAMPUS UII',
      title: 'Dukung Karya<br />Mahasiswa & Alumni',
      subtitle: 'Platform resmi yang menghubungkan karya inovatif civitas akademika UII dengan pasar nasional.',
      bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
      btn1: 'Dukung Mahasiswa',
      btn2: 'Gabung Mitra',
      stats: [
        { value: '5.000+', label: 'Mahasiswa Aktif' },
        { value: '500+', label: 'Bisnis Alumni' },
        { value: '10+', label: 'Fakultas Terlibat' }
      ]
    },
    {
      id: 4,
      tag: 'PROMO SPESIAL',
      title: 'Kejutan Diskon<br />Setiap Harinya',
      subtitle: 'Nikmati gratis ongkir, voucher eksklusif, dan cashback melimpah khusus untuk transaksi di Saudagar UII.',
      bgImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop',
      btn1: 'Klaim Promo',
      btn2: 'Lihat Katalog',
      stats: [
        { value: '50%', label: 'Diskon Maksimal' },
        { value: 'Rp0', label: 'Gratis Ongkir' },
        { value: '2x', label: 'Poin Cashback' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-grid-section animate-fade-in">
      <div className="hero-main-banner">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide-bg ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(11, 73, 49, 0.9) 0%, rgba(11, 73, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url('${slide.bgImage}')`
            }}
          >
            <div className="hmb-content">
              <span className="hmb-tag">{slide.tag}</span>
              <h1 className="hmb-title" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
              <p className="hmb-subtitle">{slide.subtitle}</p>
              <div className="hmb-buttons">
                <button className="hmb-btn">{slide.btn1}</button>
                <button className="hmb-btn-outline">{slide.btn2}</button>
              </div>

              <div className="hmb-stats">
                {slide.stats.map((s, i) => (
                  <div className="stat" key={i}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* Pagination Dots */}
        <div className="hmb-pagination">
          {slides.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            ></span>
          ))}
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
