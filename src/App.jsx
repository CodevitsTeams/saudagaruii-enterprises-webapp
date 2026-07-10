import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, ChevronRight, Volume2, Star, Sparkles, Tag, Truck, Link2, SearchIcon, ChevronLeft, Zap, Coffee, Shirt, Scissors, Laptop, BookOpen, Wrench, Smartphone, Globe, Mail, Phone, MessageSquare, Plus, CheckCircle2 } from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState('idle'); // idle, processing, qris, success

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleCheckout = () => {
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('qris');
      setTimeout(() => {
        setPaymentStep('success');
        setTimeout(() => {
          setCartItems([]);
          setPaymentStep('idle');
          setIsCartOpen(false);
        }, 3000);
      }, 4000);
    }, 2000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="app-container">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container banner-content">
          <div className="banner-links">
            <a href="#" className="banner-link">Marketplace UMKM Universitas Islam Indonesia</a>
            <span className="separator">•</span>
            <a href="#" className="banner-link">Onboarding Merchant via WhatsApp</a>
            <span className="separator">•</span>
            <a href="#" className="banner-link">Mudah & Cepat</a>
            <span className="separator">•</span>
            <a href="#" className="banner-link">AI Photo Enhancement Gratis untuk Semua Merchant</a>
          </div>
          <a href="#" className="banner-action">Daftar Merchant <ChevronRight size={14} /></a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${scrolled ? 'glass' : ''}`} style={{ transition: 'all 0.3s' }}>
        <div className="container header-container">
          <div className="logo-section">
            <div className="logo-icon">S</div>
            <div className="logo-text">
              <span className="logo-title">SAUDAGAR</span>
              <span className="logo-subtitle">UII</span>
            </div>
          </div>

          <div className="search-section">
            <div className="search-bar">
              <input type="text" placeholder="Cari produk, merchant, atau kategori..." />
              <button className="search-btn">
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="actions-section">
            <button className="action-icon" onClick={() => setIsCartOpen(true)} style={{ position: 'relative' }}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: '-8px', right: '-8px',
                  backgroundColor: 'var(--secondary-color)', color: 'white',
                  fontSize: '0.65rem', fontWeight: 'bold', width: '18px', height: '18px',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{cartCount}</span>
              )}
            </button>
            <button className="action-icon">
              <Heart size={20} />
            </button>
            <div className="auth-buttons">
              <button className="btn-icon-text">
                <User size={18} /> Masuk
              </button>
              <button className="btn-primary">Daftar</button>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Nav */}
      <nav className={`categories-nav ${scrolled ? 'glass' : ''}`} style={{ transition: 'all 0.3s' }}>
        <div className="container nav-container">
          <a href="#" className="nav-item active">Semua Kategori</a>
          <a href="#" className="nav-item">Makanan & Minuman</a>
          <a href="#" className="nav-item">Fashion</a>
          <a href="#" className="nav-item">Kerajinan</a>
          <a href="#" className="nav-item">Elektronik</a>
          <a href="#" className="nav-item">Kesehatan</a>
          <a href="#" className="nav-item">Pendidikan</a>
          <a href="#" className="nav-item">Jasa</a>
          <a href="#" className="nav-item">Digital</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content container">
        {/* Hero Section */}
        <section className="hero-section animate-fade-in">
          <div className="hero-background"></div>
          <div className="hero-content">
            <div className="badge badge-green hero-badge">PRO SMART UMKM</div>
            <h1 className="hero-title">Jualan Lebih Mudah<br />Bersama Saudagar UII</h1>
            <p className="hero-subtitle">
              Daftar merchant via WhatsApp, upload produk dengan AI,<br />
              dan raih lebih banyak pembeli dari seluruh Indonesia.
            </p>
            <div className="hero-actions">
              <button className="btn-primary hero-btn">Mulai Berjualan</button>
              <button className="btn-outline hero-btn">Pelajari Produk</button>
            </div>

            <div className="hero-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="hero-stamp">
            <span>Gratis<br />Daftar</span>
          </div>
        </section>

        {/* Info Grid */}
        <div className="info-grid animate-fade-in delay-100">

          {/* Pengumuman */}
          <section className="announcement-section">
            <div className="section-header">
              <div className="section-title">
                <div className="title-bar"></div>
                <h2>Pengumuman</h2>
              </div>
              <a href="#" className="see-all">Lihat semua</a>
            </div>

            <div className="announcement-list">
              <div className="announcement-item card-hover">
                <div className="announcement-icon blue">
                  <Volume2 size={20} />
                </div>
                <div className="announcement-content">
                  <div className="announcement-meta">
                    <span className="badge badge-blue">INFO</span>
                    <span className="date">4 Jun 2026</span>
                  </div>
                  <h3>Verifikasi Merchant Dipercepat</h3>
                  <p>Proses verifikasi kini hanya 1x24 jam. Daftar sekarang dan mulai berjualan besok.</p>
                </div>
                <ChevronRight size={16} className="item-arrow" />
              </div>

              <div className="announcement-item card-hover">
                <div className="announcement-icon yellow">
                  <Star size={20} />
                </div>
                <div className="announcement-content">
                  <div className="announcement-meta">
                    <span className="badge badge-yellow">PROMO</span>
                    <span className="date">2 Jun 2026</span>
                  </div>
                  <h3>Program Saudagar Mahasiswa UII</h3>
                  <p>Mahasiswa UII? Dapatkan hibah modal usaha selama 6 bulan pertama.</p>
                </div>
                <ChevronRight size={16} className="item-arrow" />
              </div>

              <div className="announcement-item card-hover">
                <div className="announcement-icon purple">
                  <Sparkles size={20} />
                </div>
                <div className="announcement-content">
                  <div className="announcement-meta">
                    <span className="badge badge-purple">UPDATE AI</span>
                    <span className="date">1 Jun 2026</span>
                  </div>
                  <h3>Fitur AI Photo Enhancement Hadir</h3>
                  <p>Jadikan foto produk kamu sekelas hasil studio profesional secara otomatis.</p>
                </div>
                <ChevronRight size={16} className="item-arrow" />
              </div>
            </div>
          </section>

          {/* Promo & Voucher */}
          <section className="promo-section">
            <div className="section-header">
              <div className="section-title">
                <div className="title-bar orange"></div>
                <h2>Promo & Voucher</h2>
              </div>
              <a href="#" className="see-all orange-text">Klaim semua</a>
            </div>

            <div className="promo-list">
              <div className="promo-item card-hover green-border">
                <div className="promo-icon-box green-bg">
                  <Tag size={24} color="#065f46" />
                </div>
                <div className="promo-content">
                  <div className="promo-tag green-text">FLASH SALE</div>
                  <h3>Cashback 10% via QRIS</h3>
                  <p>Max potongan Rp10.000. Berlaku s.d. 30 Jun</p>
                </div>
                <button className="btn-claim green-outline">Klaim</button>
              </div>

              <div className="promo-item card-hover yellow-border">
                <div className="promo-icon-box yellow-bg">
                  <Truck size={24} color="#92400e" />
                </div>
                <div className="promo-content">
                  <div className="promo-tag yellow-text">GRATIS ONGKIR</div>
                  <h3>Gratis Ongkir Seluruh Indonesia</h3>
                  <p>Kode: SAUDAGARFREE - untuk min Trx 50rb</p>
                </div>
                <button className="btn-claim yellow-outline">Klaim</button>
              </div>

              <div className="promo-item card-hover purple-border">
                <div className="promo-icon-box purple-bg">
                  <Link2 size={24} color="#5b21b6" />
                </div>
                <div className="promo-content">
                  <div className="promo-tag purple-text">KEMITRAAN AI</div>
                  <h3>Komisi Affiliate 15%</h3>
                  <p>Bagikan link produk dan dapatkan komisi setiap penjualan.</p>
                </div>
                <button className="btn-claim purple-outline">Klaim</button>
              </div>
            </div>
          </section>
        </div>

        {/* Kategori Produk */}
        <section className="categories-grid-section">
          <div className="section-header">
            <div className="section-title">
              <div className="title-bar"></div>
              <div>
                <h2>Kategori Produk</h2>
                <p className="subtitle">Ribuan produk UMKM berkualitas siap dibeli</p>
              </div>
            </div>
            <a href="#" className="see-all">Semua kategori &rarr;</a>
          </div>

          <div className="categories-grid">
            <div className="category-card card-hover">
              <div className="cat-icon"><Coffee size={24} color="#065f46" /></div>
              <span>Makanan & Minuman</span>
              <small>12rb+ produk</small>
            </div>
            <div className="category-card card-hover">
              <div className="cat-icon"><Shirt size={24} color="#065f46" /></div>
              <span>Fashion & Busana</span>
              <small>8.5rb+ produk</small>
            </div>
            <div className="category-card card-hover">
              <div className="cat-icon"><Scissors size={24} color="#065f46" /></div>
              <span>Kerajinan Tangan</span>
              <small>4.2rb+ produk</small>
            </div>
            <div className="category-card card-hover">
              <div className="cat-icon"><Laptop size={24} color="#065f46" /></div>
              <span>Elektronik</span>
              <small>3.1rb+ produk</small>
            </div>
            <div className="category-card card-hover">
              <div className="cat-icon"><Sparkles size={24} color="#065f46" /></div>
              <span>Perawatan & Kecantikan</span>
              <small>5.6rb+ produk</small>
            </div>
            <div className="category-card card-hover">
              <div className="cat-icon"><BookOpen size={24} color="#065f46" /></div>
              <span>Hobi & Pendidikan</span>
              <small>2.4rb+ produk</small>
            </div>
            <div className="category-card card-hover">
              <div className="cat-icon"><Wrench size={24} color="#065f46" /></div>
              <span>Jasa & Layanan</span>
              <small>1.2rb+ vendor</small>
            </div>
            <div className="category-card card-hover">
              <div className="cat-icon"><Smartphone size={24} color="#065f46" /></div>
              <span>Digital & PPOB</span>
              <small>24/7 Aktif</small>
            </div>
          </div>
        </section>

        {/* Flash Sale Section */}
        <section className="flash-sale-section">
          <div className="flash-sale-header">
            <div className="fs-title-area">
              <Zap size={28} color="#facc15" fill="#facc15" />
              <div>
                <h2>Flash Sale</h2>
                <p>Harga terbaik, stok terbatas!</p>
              </div>
            </div>
            <div className="fs-timer">
              <span>Berakhir dalam:</span>
              <div className="timer-box">09</div><span>:</span>
              <div className="timer-box">58</div><span>:</span>
              <div className="timer-box">22</div>
            </div>
          </div>

          <div className="fs-products">
            {/* Product 1 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="/batik_tulis.png" alt="Batik Tulis" className="product-image" />
                <div className="discount-tag">-15%</div>
              </div>
              <div className="product-info">
                <div className="store-name">Batik Nusantara</div>
                <h3 className="product-name">Batik Tulis Jogja Premium</h3>
                <div className="price-area">
                  <span className="current-price">Rp420.000</span>
                  <span className="original-price">Rp550.000</span>
                </div>
                <div className="stock-bar">
                  <div className="stock-fill" style={{ width: '75%' }}></div>
                </div>
                <p className="stock-text">Tersisa 15 buah</p>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fs1', name: 'Batik Tulis Jogja Premium', price: 420000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
            {/* Product 2 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="/sambal_matah.png" alt="Sambal Matah" className="product-image" />
                <div className="discount-tag">-20%</div>
              </div>
              <div className="product-info">
                <div className="store-name">Dapur Mama</div>
                <h3 className="product-name">Sambal Matah Asli Original</h3>
                <div className="price-area">
                  <span className="current-price">Rp25.000</span>
                  <span className="original-price">Rp35.000</span>
                </div>
                <div className="stock-bar">
                  <div className="stock-fill" style={{ width: '40%' }}></div>
                </div>
                <p className="stock-text">Tersisa 45 buah</p>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fs2', name: 'Sambal Matah Asli Original', price: 25000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
            {/* Product 3 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=400" alt="Tas" className="product-image" />
                <div className="discount-tag">-15%</div>
              </div>
              <div className="product-info">
                <div className="store-name">Kerajinan Rotan</div>
                <h3 className="product-name">Tas Anyaman Rotan Lombok</h3>
                <div className="price-area">
                  <span className="current-price">Rp115.000</span>
                  <span className="original-price">Rp150.000</span>
                </div>
                <div className="stock-bar">
                  <div className="stock-fill" style={{ width: '90%' }}></div>
                </div>
                <p className="stock-text">Tersisa 3 buah</p>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fs3', name: 'Tas Anyaman Rotan Lombok', price: 115000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
            {/* Product 4 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400" alt="Kopi" className="product-image" />
                <div className="discount-tag">-20%</div>
              </div>
              <div className="product-info">
                <div className="store-name">Kopi Nusantara</div>
                <h3 className="product-name">Kopi Arabika Gayo 100ml</h3>
                <div className="price-area">
                  <span className="current-price">Rp65.000</span>
                  <span className="original-price">Rp85.000</span>
                </div>
                <div className="stock-bar">
                  <div className="stock-fill" style={{ width: '60%' }}></div>
                </div>
                <p className="stock-text">Tersisa 20 buah</p>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fs4', name: 'Kopi Arabika Gayo 100ml', price: 65000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
          </div>
        </section>

        {/* Produk Unggulan */}
        <section className="featured-products-section">
          <div className="section-header">
            <div className="section-title">
              <div className="title-bar"></div>
              <div>
                <h2>Produk Unggulan</h2>
                <p className="subtitle">Dikurasi dan direkomendasikan khusus untuk Anda</p>
              </div>
            </div>
            <a href="#" className="see-all">Lihat semua &rarr;</a>
          </div>

          <div className="filter-chips">
            <button className="chip active">Produk Terbaru</button>
            <button className="chip">Terlaris</button>
            <button className="chip">Rekomendasi AI</button>
            <button className="chip">Official Merchant</button>
          </div>

          <div className="products-grid">
            {/* Featured Product 1 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400" alt="Baju" className="product-image" />
                <div className="badge-tag green-tag">Terlaris</div>
              </div>
              <div className="product-info">
                <div className="store-name">Saudagar Fashion</div>
                <h3 className="product-name">Kemeja Basic Pria Lengan Pendek</h3>
                <div className="price-area">
                  <span className="current-price">Rp120.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>5.0</span>
                  <span className="reviews">(125 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fp1', name: 'Kemeja Basic Pria Lengan Pendek', price: 120000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400" alt="Food" className="product-image" />
                <div className="badge-tag yellow-tag">Rekomendasi AI</div>
              </div>
              <div className="product-info">
                <div className="store-name">Warung Nasi</div>
                <h3 className="product-name">Paket Nasi Kuning Komplit</h3>
                <div className="price-area">
                  <span className="current-price">Rp35.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.8</span>
                  <span className="reviews">(89 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fp2', name: 'Paket Nasi Kuning Komplit', price: 35000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=400" alt="Craft" className="product-image" />
                <div className="badge-tag purple-tag">Official</div>
              </div>
              <div className="product-info">
                <div className="store-name">Art & Craft UII</div>
                <h3 className="product-name">Kalung Etnik Kayu Handmade</h3>
                <div className="price-area">
                  <span className="current-price">Rp85.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.9</span>
                  <span className="reviews">(42 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fp3', name: 'Kalung Etnik Kayu Handmade', price: 85000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 4 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://loremflickr.com/400/400/leather,wallet" alt="Dompet Kulit" className="product-image" />
                <div className="badge-tag blue-tag">Lokal</div>
              </div>
              <div className="product-info">
                <div className="store-name">Kulit Garut Asli</div>
                <h3 className="product-name">Dompet Kulit Pria Premium</h3>
                <div className="price-area">
                  <span className="current-price">Rp250.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.8</span>
                  <span className="reviews">(85 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fp4', name: 'Dompet Kulit Pria Premium', price: 250000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 5 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&q=80&w=400" alt="Audio" className="product-image" />
                <div className="badge-tag blue-tag">Elektronik</div>
              </div>
              <div className="product-info">
                <div className="store-name">UII Tech Store</div>
                <h3 className="product-name">Speaker Bluetooth Mini Portable</h3>
                <div className="price-area">
                  <span className="current-price">Rp210.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.7</span>
                  <span className="reviews">(56 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fp5', name: 'Speaker Bluetooth Mini Portable', price: 210000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 6 */}
            <div className="product-card card-hover">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400" alt="Snack" className="product-image" />
                <div className="badge-tag red-tag">Diskon</div>
              </div>
              <div className="product-info">
                <div className="store-name">Cemilan Lokal</div>
                <h3 className="product-name">Keripik Singkong Pedas Level 5</h3>
                <div className="price-area">
                  <span className="current-price">Rp15.000</span>
                  <span className="original-price">Rp20.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.8</span>
                  <span className="reviews">(324 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={() => addToCart({ id: 'fp6', name: 'Keripik Singkong Pedas Level 5', price: 15000 })} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="logo-section light">
              <div className="logo-icon">S</div>
              <div className="logo-text">
                <span className="logo-title text-white">SAUDAGAR</span>
                <span className="logo-subtitle text-gray-300">UII</span>
              </div>
            </div>
            <p className="footer-desc">
              Marketplace UMKM Universitas Islam Indonesia. Mendukung wirausaha lokal dengan teknologi AI.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><MessageSquare size={20} /></a>
              <a href="#" className="social-icon"><Phone size={20} /></a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>TENTANG KAMI</h4>
              <a href="#">Profil Saudagar UII</a>
              <a href="#">Visi Misi</a>
              <a href="#">Karir</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
            </div>
            <div className="footer-col">
              <h4>MERCHANT</h4>
              <a href="#">Daftar Merchant</a>
              <a href="#">Panduan Merchant</a>
              <a href="#">AI Tools</a>
              <a href="#">Verifikasi</a>
              <a href="#">Dashboard Merchant</a>
            </div>
            <div className="footer-col">
              <h4>PEMBELI</h4>
              <a href="#">Cara Belanja</a>
              <a href="#">Metode Pembayaran</a>
              <a href="#">Pengiriman</a>
              <a href="#">Pengembalian</a>
              <a href="#">Voucher</a>
            </div>
            <div className="footer-col">
              <h4>BANTUAN</h4>
              <a href="#">Pusat Bantuan</a>
              <a href="#">AI Customer Service</a>
              <a href="#">Hubungi CS WhatsApp</a>
              <a href="#">Email Support</a>
              <a href="#">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container bottom-content">
            <p>&copy; 2026 Saudagar - AI Marketplace UMKM Ecosystem.</p>
            <div className="payment-methods">
              <span className="payment-badge">QRIS</span>
              <span className="payment-badge">VA</span>
              <span className="payment-badge">GoPay</span>
              <span className="payment-badge">OVO</span>
              <span className="payment-badge">Dana</span>
              <span className="payment-badge">Visa</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart & Payment Modals */}
      {isCartOpen && (
        <div className="modal-overlay" onClick={() => paymentStep === 'idle' && setIsCartOpen(false)}>
          {paymentStep === 'idle' ? (
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cart-header">
                <h3>Keranjang Belanja</h3>
                <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
              </div>

              <div className="cart-items">
                {cartItems.length === 0 ? (
                  <p style={{ textAlign: 'center', color: 'var(--text-gray)', padding: '2rem 0' }}>Keranjang Anda masih kosong.</p>
                ) : (
                  cartItems.map((item, idx) => (
                    <div key={idx} className="cart-item">
                      <div className="cart-item-info">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-price">{formatPrice(item.price)}</span>
                      </div>
                      <div className="cart-item-qty">
                        x{item.qty}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <button
                  className="btn-checkout"
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  style={{ opacity: cartItems.length === 0 ? 0.5 : 1, cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer', border: 'none' }}
                >
                  Proses Checkout & Bayar
                </button>
              </div>
            </div>
          ) : (
            <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
              {paymentStep === 'processing' && (
                <div className="payment-loading">
                  <div className="spinner"></div>
                  <h3>Memproses Pesanan...</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Menghubungkan ke Payment Gateway</p>
                </div>
              )}

              {paymentStep === 'qris' && (
                <div className="payment-loading animate-fade-in">
                  <h3>Scan QRIS</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Buka aplikasi M-Banking atau e-Wallet Anda dan scan QR Code di bawah ini.</p>
                  <div className="qris-code">
                    [MOCK QRIS]
                  </div>
                  <div className="cart-total" style={{ width: '100%', borderTop: '1px solid #f3f4f6', paddingTop: '1rem', marginTop: '1rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>Total Bayar:</span>
                    <span style={{ color: 'var(--primary-color)' }}>{formatPrice(cartTotal)}</span>
                  </div>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="payment-success animate-fade-in">
                  <div className="success-icon">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3>Pembayaran Berhasil!</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', textAlign: 'center' }}>
                    Pesanan Anda telah dibayar dan sedang diteruskan ke merchant.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default App;
