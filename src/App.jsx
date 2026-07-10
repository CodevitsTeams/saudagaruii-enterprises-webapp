import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Bell, User, ChevronRight, Volume2, Star, Sparkles, Tag, Truck, Link2, SearchIcon, ChevronLeft, Zap, Coffee, Shirt, Scissors, Laptop, BookOpen, Wrench, Smartphone, Globe, Mail, Phone, MessageSquare, Plus, CheckCircle2 } from 'lucide-react';
import './App.css';
import './Figma.css';
import FigmaHero from './components/FigmaHero';
import FigmaCategories from './components/FigmaCategories';
import WaBanner from './components/WaBanner';
import FigmaInfoGrid from './components/FigmaInfoGrid';
import ProductModal from './components/ProductModal';
import TrustEcosystem from './components/TrustEcosystem';
import AIChatAssistant from './components/AIChatAssistant';
import AdminLogin from './components/AdminLogin';

function App() {
  const [currentPage, setCurrentPage] = useState('marketplace');
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState('idle'); // idle, processing, qris, success
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Produk Terbaru');
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 58,
    seconds: 22
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            } else {
              hours = 9;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

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

  if (currentPage === 'admin_login') {
    return <AdminLogin onBack={() => setCurrentPage('marketplace')} />;
  }

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
              <span className="logo-title">SAUDAGAR UII</span>
              <span className="logo-subtitle">MARKETPLACE UMKM</span>
            </div>
          </div>

          <div className="search-section" style={{ position: 'relative' }}>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Cari produk, merchant, atau kategori..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
              <button className="search-btn">
                <Search size={18} />
              </button>
            </div>

            {isSearchOpen && (
              <div className="search-dropdown animate-slide-up" style={{
                position: 'absolute', top: '110%', left: 0, right: 0,
                backgroundColor: 'white', borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0', zIndex: 50,
                padding: '1.2rem', overflow: 'hidden', textAlign: 'left'
              }}>
                {searchQuery ? (
                  <div>
                    <h5 style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>HASIL PENCARIAN</h5>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <Search size={16} color="#94a3b8" />
                      <span style={{ fontSize: '0.9rem', color: '#1e293b' }}>Mencari "<strong>{searchQuery}</strong>" di <strong>Semua Kategori</strong></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <Search size={16} color="#94a3b8" />
                      <span style={{ fontSize: '0.9rem', color: '#1e293b' }}>Mencari "<strong>{searchQuery}</strong>" di <strong>Toko Merchant</strong></span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h5 style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>PENCARIAN POPULER</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ padding: '0.4rem 0.8rem', backgroundColor: '#f1f5f9', borderRadius: '20px', fontSize: '0.8rem', color: '#334155', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#e2e8f0'} onMouseOut={(e) => e.target.style.backgroundColor = '#f1f5f9'} onClick={() => setSearchQuery('Batik Tulis')}>Batik Tulis Jogja</span>
                      <span style={{ padding: '0.4rem 0.8rem', backgroundColor: '#f1f5f9', borderRadius: '20px', fontSize: '0.8rem', color: '#334155', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#e2e8f0'} onMouseOut={(e) => e.target.style.backgroundColor = '#f1f5f9'} onClick={() => setSearchQuery('Sambal Matah')}>Sambal Matah Asli</span>
                      <span style={{ padding: '0.4rem 0.8rem', backgroundColor: '#f1f5f9', borderRadius: '20px', fontSize: '0.8rem', color: '#334155', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#e2e8f0'} onMouseOut={(e) => e.target.style.backgroundColor = '#f1f5f9'} onClick={() => setSearchQuery('Kopi Gayo')}>Kopi Arabika Gayo</span>
                    </div>
                  </div>
                )}
              </div>
            )}
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
            <div style={{ position: 'relative' }}>
              <button className="action-icon" onClick={() => setIsWishlistOpen(!isWishlistOpen)} style={{ position: 'relative' }}>
                <Heart size={20} />
                <span style={{
                  position: 'absolute', top: '-2px', right: '-2px',
                  backgroundColor: '#ea580c', border: '2px solid white',
                  width: '10px', height: '10px', borderRadius: '50%'
                }}></span>
              </button>

              {isWishlistOpen && (
                <div className="notif-dropdown animate-slide-up" style={{ width: '320px', right: '-60px' }}>
                  <div className="notif-header">
                    <h4>Produk Disukai</h4>
                    <span className="mark-read" onClick={() => setIsWishlistOpen(false)}>Tutup</span>
                  </div>
                  <div className="notif-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <div className="notif-item">
                      <div style={{ width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                         <img src="/batik_tulis.png" alt="Batik" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="notif-content" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>Batik Tulis Jogja Premium</p>
                        <span style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '0.9rem' }}>Rp420.000</span>
                      </div>
                    </div>
                    <div className="notif-item">
                      <div style={{ width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                         <img src="/sambal_matah.png" alt="Sambal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="notif-content" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>Sambal Matah Asli Original</p>
                        <span style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '0.9rem' }}>Rp25.000</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <button style={{ width: '100%', padding: '0.6rem', background: '#ea580c', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.target.style.background = '#c2410c'} onMouseOut={(e) => e.target.style.background = '#ea580c'}>Lihat Semua Favorit</button>
                  </div>
                </div>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <button className="action-icon" onClick={() => setIsNotifOpen(!isNotifOpen)} style={{ position: 'relative' }}>
                <Bell size={20} />
                <span style={{
                  position: 'absolute', top: '-2px', right: '-2px',
                  backgroundColor: '#ef4444', border: '2px solid white',
                  width: '10px', height: '10px', borderRadius: '50%'
                }}></span>
              </button>

              {isNotifOpen && (
                <div className="notif-dropdown animate-slide-up">
                  <div className="notif-header">
                    <h4>Notifikasi Terbaru</h4>
                    <span className="mark-read" onClick={() => setIsNotifOpen(false)}>Tandai sudah dibaca</span>
                  </div>
                  <div className="notif-list">
                    <div className="notif-item unread">
                      <div className="notif-icon bg-gradient-orange"><Star size={14} color="#fff" /></div>
                      <div className="notif-content">
                        <p><strong>Promo Kilat!</strong> Diskon 50% untuk produk Fashion pria malam ini.</p>
                        <span>2 menit yang lalu</span>
                      </div>
                    </div>
                    <div className="notif-item unread">
                      <div className="notif-icon bg-gradient-green"><ShoppingCart size={14} color="#fff" /></div>
                      <div className="notif-content">
                        <p><strong>Seseorang dari FIAI</strong> baru saja membeli Nasi Kuning Komplit.</p>
                        <span>15 menit yang lalu</span>
                      </div>
                    </div>
                    <div className="notif-item">
                      <div className="notif-icon bg-gradient-blue"><CheckCircle2 size={14} color="#fff" /></div>
                      <div className="notif-content">
                        <p><strong>Selamat!</strong> Akun Merchant Anda telah diverifikasi oleh tim UII.</p>
                        <span>1 hari yang lalu</span>
                      </div>
                    </div>
                  </div>
                  <div className="notif-footer">Lihat Semua Notifikasi</div>
                </div>
              )}
            </div>
            <div className="auth-buttons">
              <button className="btn-icon-text" onClick={() => setCurrentPage('admin_login')}>
                <User size={18} /> Masuk
              </button>
              <button className="btn-primary">Daftar</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content container">
        <FigmaHero />
        <FigmaCategories />

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

            <div className="prof-list">
              <div className="prof-card">
                <div className="prof-card-icon bg-light-blue"><Volume2 size={20} color="#2563eb" /></div>
                <div className="prof-card-content">
                  <div className="prof-meta"><span className="prof-pill blue">INFO</span> 4 Jun 2026</div>
                  <h3>Verifikasi Merchant Dipercepat</h3>
                  <p>Proses verifikasi kini hanya 1x24 jam. Daftar sekarang dan mulai berjualan besok.</p>
                </div>
                <div className="prof-card-action"><ChevronRight size={18} color="#94a3b8" /></div>
              </div>

              <div className="prof-card">
                <div className="prof-card-icon bg-light-yellow"><Star size={20} color="#d97706" /></div>
                <div className="prof-card-content">
                  <div className="prof-meta"><span className="prof-pill yellow">PROMO</span> 2 Jun 2026</div>
                  <h3>Program Saudagar Mahasiswa UII</h3>
                  <p>Mahasiswa UII? Dapatkan hibah modal usaha selama 6 bulan pertama.</p>
                </div>
                <div className="prof-card-action"><ChevronRight size={18} color="#94a3b8" /></div>
              </div>

              <div className="prof-card">
                <div className="prof-card-icon bg-light-purple"><Sparkles size={20} color="#9333ea" /></div>
                <div className="prof-card-content">
                  <div className="prof-meta"><span className="prof-pill purple">UPDATE AI</span> 1 Jun 2026</div>
                  <h3>Fitur AI Photo Enhancement Hadir</h3>
                  <p>Jadikan foto produk kamu sekelas hasil studio profesional secara otomatis.</p>
                </div>
                <div className="prof-card-action"><ChevronRight size={18} color="#94a3b8" /></div>
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

            <div className="shopee-list">
              <div className="shopee-ticket-wrapper">

                <div className="shopee-ticket">
                  <div className="st-left">
                    <div className="st-name">Diskon Rp10RB Min. Blj Rp200RB</div>
                    <div className="st-progress-bg">
                      <div className="st-progress-fill" style={{ width: '40%' }}></div>
                    </div>
                    <div className="st-date">Hingga: 31.01.2026</div>
                  </div>
                  <div className="st-divider"></div>
                  <div className="st-right">
                    <button className="st-btn">Klaim</button>
                  </div>
                </div>
              </div>

              <div className="shopee-ticket-wrapper">

                <div className="shopee-ticket">
                  <div className="st-left">
                    <div className="st-name">Diskon 20% Min. Blj Rp200RB s/d Rp5RB</div>
                    <div className="st-progress-bg">
                      <div className="st-progress-fill" style={{ width: '25%' }}></div>
                    </div>
                    <div className="st-date">Hingga: 31.01.2026</div>
                  </div>
                  <div className="st-divider"></div>
                  <div className="st-right">
                    <button className="st-btn">Klaim</button>
                  </div>
                </div>
              </div>

              <div className="shopee-ticket-wrapper">

                <div className="shopee-ticket">
                  <div className="st-left">
                    <div className="st-name">Cashback 10% Min. Blj Rp150RB s/d 5RB koin</div>
                    <div className="st-progress-bg">
                      <div className="st-progress-fill" style={{ width: '60%' }}></div>
                    </div>
                    <div className="st-date">Hingga: 31.01.2026</div>
                  </div>
                  <div className="st-divider"></div>
                  <div className="st-right">
                    <button className="st-btn">Klaim</button>
                  </div>
                </div>
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
              <div className="timer-box">{String(timeLeft.hours).padStart(2, '0')}</div><span>:</span>
              <div className="timer-box">{String(timeLeft.minutes).padStart(2, '0')}</div><span>:</span>
              <div className="timer-box">{String(timeLeft.seconds).padStart(2, '0')}</div>
            </div>
          </div>

          <div className="fs-products">
            {/* Product 1 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fs1', name: 'Batik Tulis Jogja Premium', price: 420000, image: '/batik_tulis.png' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fs1', name: 'Batik Tulis Jogja Premium', price: 420000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
            {/* Product 2 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fs2', name: 'Sambal Matah Asli Original', price: 25000, image: '/sambal_matah.png' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fs2', name: 'Sambal Matah Asli Original', price: 25000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
            {/* Product 3 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fs3', name: 'Tas Anyaman Rotan Lombok', price: 115000, image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=400' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fs3', name: 'Tas Anyaman Rotan Lombok', price: 115000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
            {/* Product 4 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fs4', name: 'Kopi Arabika Gayo 100ml', price: 65000, image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fs4', name: 'Kopi Arabika Gayo 100ml', price: 65000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>+ Keranjang</button>
              </div>
            </div>
          </div>
        </section>

        <WaBanner />

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
            {['Produk Terbaru', 'Terlaris', 'Rekomendasi AI', 'Official Merchant'].map((filter) => (
              <button
                key={filter}
                className={`chip ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {/* Featured Product 1 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp1', name: 'Kemeja Basic Pria Lengan Pendek', price: 120000, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp1', name: 'Kemeja Basic Pria Lengan Pendek', price: 120000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp2', name: 'Paket Nasi Kuning Komplit', price: 35000, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp2', name: 'Paket Nasi Kuning Komplit', price: 35000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp3', name: 'Kalung Etnik Kayu Handmade', price: 85000, image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=400' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp3', name: 'Kalung Etnik Kayu Handmade', price: 85000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 4 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp4', name: 'Dompet Kulit Pria Premium', price: 250000, image: 'https://loremflickr.com/400/400/leather,wallet' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp4', name: 'Dompet Kulit Pria Premium', price: 250000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 5 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp5', name: 'Speaker Bluetooth Mini Portable', price: 210000, image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&q=80&w=400' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp5', name: 'Speaker Bluetooth Mini Portable', price: 210000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 6 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp6', name: 'Keripik Singkong Pedas Level 5', price: 15000, image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400' })}>
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
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp6', name: 'Keripik Singkong Pedas Level 5', price: 15000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 7 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp7', name: 'Tas Ransel Kanvas Vintage', price: 185000, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400" alt="Bag" className="product-image" />
                <div className="badge-tag green-tag">Terlaris</div>
              </div>
              <div className="product-info">
                <div className="store-name">Saudagar Bag</div>
                <h3 className="product-name">Tas Ransel Kanvas Vintage</h3>
                <div className="price-area">
                  <span className="current-price">Rp185.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.9</span>
                  <span className="reviews">(215 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp7', name: 'Tas Ransel Kanvas Vintage', price: 185000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 8 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp8', name: 'Kopi Arabica Gayo 250g', price: 65000, image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400" alt="Coffee" className="product-image" />
                <div className="badge-tag yellow-tag">Rekomendasi AI</div>
              </div>
              <div className="product-info">
                <div className="store-name">Kopi Kampus</div>
                <h3 className="product-name">Kopi Arabica Gayo 250g</h3>
                <div className="price-area">
                  <span className="current-price">Rp65.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.8</span>
                  <span className="reviews">(190 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp8', name: 'Kopi Arabica Gayo 250g', price: 65000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 9 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp9', name: 'Lampu Meja Belajar LED', price: 125000, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400" alt="Lamp" className="product-image" />
                <div className="badge-tag blue-tag">Elektronik</div>
              </div>
              <div className="product-info">
                <div className="store-name">UII Tech Store</div>
                <h3 className="product-name">Lampu Meja Belajar LED</h3>
                <div className="price-area">
                  <span className="current-price">Rp125.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.7</span>
                  <span className="reviews">(88 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp9', name: 'Lampu Meja Belajar LED', price: 125000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 10 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp10', name: 'Tumbler Stainless 500ml', price: 75000, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400" alt="Tumbler" className="product-image" />
                <div className="badge-tag purple-tag">Official</div>
              </div>
              <div className="product-info">
                <div className="store-name">Merchandise UII</div>
                <h3 className="product-name">Tumbler Stainless 500ml</h3>
                <div className="price-area">
                  <span className="current-price">Rp75.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>5.0</span>
                  <span className="reviews">(310 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp10', name: 'Tumbler Stainless 500ml', price: 75000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 11 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp11', name: 'Masker Organik Greentea', price: 25000, image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=400" alt="Skincare" className="product-image" />
                <div className="badge-tag blue-tag">Kecantikan</div>
              </div>
              <div className="product-info">
                <div className="store-name">Beauty Care</div>
                <h3 className="product-name">Masker Organik Greentea</h3>
                <div className="price-area">
                  <span className="current-price">Rp25.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.8</span>
                  <span className="reviews">(156 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp11', name: 'Masker Organik Greentea', price: 25000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 12 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp12', name: 'Kemeja Flanel Kotak-Kotak', price: 145000, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400" alt="Shirt" className="product-image" />
                <div className="badge-tag red-tag">Diskon</div>
              </div>
              <div className="product-info">
                <div className="store-name">Saudagar Fashion</div>
                <h3 className="product-name">Kemeja Flanel Kotak-Kotak</h3>
                <div className="price-area">
                  <span className="current-price">Rp145.000</span>
                  <span className="original-price">Rp185.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.9</span>
                  <span className="reviews">(410 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp12', name: 'Kemeja Flanel Kotak-Kotak', price: 145000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Trust & AI Ecosystem */}
      <TrustEcosystem />

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
              Marketplace UMKM Universitas Islam Indonesia. Mendukung wirausaha lokal dan UMKM dengan teknologi AI.
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
              <span className="payment-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" alt="QRIS" style={{ height: '18px', objectFit: 'contain' }} /></span>
              <span className="payment-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ color: '#ee4d2d', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-0.5px', fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>SeaBank</span></span>
              <span className="payment-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg" alt="GoPay" style={{ height: '16px', objectFit: 'contain' }} /></span>
              <span className="payment-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg" alt="OVO" style={{ height: '16px', objectFit: 'contain' }} /></span>
              <span className="payment-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg" alt="Dana" style={{ height: '16px', objectFit: 'contain' }} /></span>
              <span className="payment-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg viewBox="0 0 38 12" style={{ height: '14px', fill: '#1434CB' }}><path d="M14.34,11.3H11.58L13.31,0.5H16.07L14.34,11.3ZM26.24,7.66C26.24,5.43,23.11,5.3,23.13,4.04C23.14,3.67,23.47,3.27,24.23,3.16C24.61,3.1,25.43,3.06,26.26,3.44L26.75,0.48C26.3,0.32,25.75,0.18,25.04,0.18C22.42,0.18,20.57,1.57,20.55,3.84C20.53,5.52,22.06,6.46,23.23,7.03C24.43,7.61,24.84,7.97,24.84,8.48C24.82,9.26,23.9,9.58,23.19,9.58C22.12,9.58,21.5,9.29,21.05,9.06L20.54,12.08C20.99,12.28,21.78,12.47,22.61,12.47C25.41,12.47,27.24,11.08,27.24,8.74L26.24,7.66ZM33.34,11.3H36.3L34.34,0.5H31.95C31.25,0.5,30.68,0.91,30.4,1.56L25.96,11.3H28.84L29.41,9.7H32.96L33.34,11.3ZM30.2,7.56L31.62,3.67L32.42,7.56H30.2ZM11.1,11.3L7.96,2.99C7.81,2.5,7.69,2.37,7.28,2.15C5.7,1.35,2.71,0.67,0,0.5L0.08,0.85C0.52,0.94,1.48,1.21,2.02,1.58C2.33,1.8,2.44,2.05,2.52,2.44L4.81,11.3H7.72Z" /></svg></span>
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

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      {/* Floating Chat Assistant */}
      <AIChatAssistant />

    </div>
  );
}

export default App;
