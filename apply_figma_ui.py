import re

# 1. Update App.jsx
app_jsx_path = r'e:\Downloads\UII\saudagar-uii\src\App.jsx'
with open(app_jsx_path, 'r', encoding='utf-8') as f:
    app_jsx = f.read()

# Replace old categories nav and hero section
old_hero_regex = re.compile(r'\{\/\* Categories Nav \*\/}.*?</section>', re.DOTALL)

new_hero_jsx = '''{/* Main Content */}
      <main className="main-content container">
        {/* Figma Style Hero Grid */}
        <section className="hero-grid-section animate-fade-in" style={{ marginTop: '2rem' }}>
          <div className="hero-main-banner" style={{backgroundImage: "linear-gradient(to right, rgba(11, 73, 49, 0.9) 0%, rgba(11, 73, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200')"}}>
             <div className="hmb-content">
                <span className="hmb-tag">UMKM NAIK KELAS & AI POWERED</span>
                <h1 className="hmb-title">Produk Lokal Terbaik<br/>dari Penjuru Nusantara</h1>
                <p className="hmb-subtitle">Temukan ribuan produk pilihan UMKM (Bahan berkualitas,<br/>fashion, kerajinan, dan lain-lain). Dijamin original 100%.</p>
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
                   <div className="sb-icon">💬</div>
                   <div className="sb-text">
                      <h3>Daftar Jadi Merchant UMKM</h3>
                      <p>Jangkau jutaan pembeli aktif.</p>
                   </div>
                </div>
                <button className="sb-btn">Daftar Sekarang &rarr;</button>
             </div>
             
             <div className="side-banner sb-flash">
                <div className="sb-top">
                   <div className="sb-icon">⚡</div>
                   <div className="sb-text">
                      <h3>Flash Sale Hari Ini!</h3>
                      <p>Diskon hingga 50% untuk produk terpilih.</p>
                   </div>
                </div>
                <button className="sb-btn" style={{color: '#d97706'}}>Lihat Promo &rarr;</button>
             </div>
             
             <div className="side-banner sb-affiliate">
                <div className="sb-top">
                   <div className="sb-icon">🤝</div>
                   <div className="sb-text">
                      <h3>Program Affiliate</h3>
                      <p>Dapatkan komisi hingga 10% setiap referensi.</p>
                   </div>
                </div>
                <button className="sb-btn" style={{color: '#6d28d9'}}>Bergabung &rarr;</button>
             </div>
          </div>
        </section>

        {/* Categories Grid (Icons) */}
        <section className="figma-categories">
           {[
             {icon: '🍜', name: 'Kuliner'},
             {icon: '👗', name: 'Fashion'},
             {icon: '🏡', name: 'Rumah Tangga'},
             {icon: '🌿', name: 'Herbal & Kesehatan'},
             {icon: '💄', name: 'Kecantikan'},
             {icon: '🧸', name: 'Mainan & Hobi'},
             {icon: '🎁', name: 'Souvenir'},
             {icon: '🧴', name: 'Perawatan'}
           ].map(c => (
              <div className="fc-item" key={c.name} onClick={() => showToast(`Kategori ${c.name} dipilih`)}>
                 <div className="fc-icon-wrapper"><span className="fc-icon">{c.icon}</span></div>
                 <span className="fc-name">{c.name}</span>
              </div>
           ))}
        </section>'''

# Replace it
app_jsx = old_hero_regex.sub(new_hero_jsx, app_jsx, count=1)

# Inject WhatsApp Banner above Produk Unggulan
wa_banner_jsx = '''
        {/* WhatsApp Banner */}
        <section className="wa-banner-section">
           <div className="wa-banner-content">
              <h2>Daftar Merchant Cukup Lewat WhatsApp</h2>
              <p>AI kami membantu kelola semua—dari foto, ringkasan, bahkan orderan. Tidak ada form rumit. Tidak perlu login web.</p>
              <div className="wa-features">
                 <span><CheckCircle2 size={16}/> Registrasi Otomatis</span>
                 <span><CheckCircle2 size={16}/> Upload Produk Mudah</span>
                 <span><CheckCircle2 size={16}/> AI Photo Enhancement</span>
                 <span><CheckCircle2 size={16}/> Dashboard Lengkap</span>
              </div>
           </div>
           <a href="https://wa.me/6287761314710" target="_blank" rel="noopener noreferrer" className="wa-btn">
              <div className="wa-btn-icon"><MessageSquare size={24}/></div>
              <span>Chat WA Sekarang</span>
           </a>
        </section>
        
        {/* Produk Unggulan */}'''

app_jsx = app_jsx.replace('{/* Produk Unggulan */}', wa_banner_jsx)

# Modify the cart button in product cards to solid green
app_jsx = app_jsx.replace("border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)'", "border: 'none', background: 'var(--primary-color)', color: '#fff'")

with open(app_jsx_path, 'w', encoding='utf-8') as f:
    f.write(app_jsx)


# 2. Update App.css
app_css_path = r'e:\Downloads\UII\saudagar-uii\src\App.css'
with open(app_css_path, 'r', encoding='utf-8') as f:
    app_css = f.read()

new_css = '''
/* --- FIGMA UI OVERHAUL CSS --- */

.hero-grid-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.hero-main-banner {
  border-radius: 24px;
  background-size: cover;
  background-position: center;
  padding: 3rem;
  display: flex;
  align-items: flex-end;
  color: #fff;
  min-height: 400px;
  position: relative;
  overflow: hidden;
}

.hmb-content {
  position: relative;
  z-index: 2;
  max-width: 80%;
}

.hmb-tag {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(4px);
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  display: inline-block;
  color: #fff;
}

.hmb-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #fff;
}

.hmb-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.hmb-btn {
  background: #f59e0b;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
}

.hmb-stats {
  display: flex;
  gap: 2rem;
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: 1.5rem;
}

.hmb-stats .stat {
  display: flex;
  flex-direction: column;
}

.hmb-stats strong {
  font-size: 1.25rem;
  color: #10b981;
}

.hmb-stats span {
  font-size: 0.75rem;
  opacity: 0.8;
}

.hero-side-banners {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.side-banner {
  flex: 1;
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
}

.sb-top {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.sb-icon {
  font-size: 24px;
  background: rgba(255,255,255,0.2);
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
}

.sb-text h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #fff;
}

.sb-text p {
  font-size: 0.85rem;
  opacity: 0.9;
  line-height: 1.4;
}

.sb-btn {
  align-self: flex-start;
  background: #fff;
  border: none;
  padding: 6px 16px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 1rem;
  color: #0b4931;
}

.sb-merchant { background: #0b4931; }
.sb-flash { background: #f59e0b; }
.sb-affiliate { background: #7c3aed; }

.figma-categories {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  padding: 0 1rem;
  overflow-x: auto;
}

.fc-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  min-width: 90px;
}

.fc-icon-wrapper {
  width: 64px;
  height: 64px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  transition: all 0.3s;
}

.fc-item:hover .fc-icon-wrapper {
  border-color: #10b981;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(16, 185, 129, 0.1);
}

.fc-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: #475569;
  text-align: center;
}

.wa-banner-section {
  background: #0b4931;
  border-radius: 24px;
  padding: 2.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  color: #fff;
}

.wa-banner-content h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.wa-banner-content p {
  opacity: 0.9;
  margin-bottom: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
}

.wa-features {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.wa-features span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  background: rgba(255,255,255,0.1);
  padding: 6px 12px;
  border-radius: 50px;
}

.wa-btn {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 1.5rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;
  min-width: 200px;
}

.wa-btn:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-5px);
}

.wa-btn-icon {
  background: #10b981;
  width: 64px; height: 64px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}

.wa-btn span {
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 1024px) {
  .hero-grid-section { grid-template-columns: 1fr; }
  .wa-banner-section { flex-direction: column; gap: 2rem; text-align: center; }
  .wa-features { justify-content: center; }
}

'''
if '.hero-grid-section' not in app_css:
    with open(app_css_path, 'a', encoding='utf-8') as f:
        f.write(new_css)

print("UI successfully overhauled!")
