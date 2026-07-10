import React, { useRef } from 'react';
import { Camera, Edit3, MessageSquare, Star, ArrowRight, ShieldCheck, TrendingUp, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import '../TrustEcosystem.css';

export default function TrustEcosystem() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="trust-ecosystem animate-fade-in delay-200">
      
      {/* 1. Saudagar AI Features (Bento Box Showcase) */}
      <section className="bento-section">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="section-title">
            <div className="title-bar" style={{ backgroundColor: '#10b981' }}></div>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>Teknologi AI Saudagar</h2>
              <p style={{ color: '#64748b' }}>Tingkatkan penjualan Anda otomatis dengan AI cerdas kami.</p>
            </div>
          </div>
        </div>

        <div className="bento-grid">
          {/* Main Block: Photo Enhancement */}
          <div className="bento-box bento-large bento-photo">
            <div className="bento-bg bg-gradient-dark"></div>
            <div className="bento-content">
              <div className="bento-icon"><Camera size={28} /></div>
              <h3>AI Photo Studio</h3>
              <p>Ubah foto produk buram dari HP menjadi standar studio 4K secara otomatis dalam hitungan detik.</p>
            </div>
            {/* Visual element */}
            <div className="bento-visual visual-photo">
              <div className="photo-before">Before</div>
              <div className="photo-divider"></div>
              <div className="photo-after">After (4K)</div>
            </div>
          </div>

          {/* Sub Block 1: Copywriter */}
          <div className="bento-box bento-small bento-copy">
            <div className="bento-bg bg-gradient-blue"></div>
            <div className="bento-content">
              <div className="bento-icon"><Edit3 size={24} /></div>
              <h3>AI Copywriter</h3>
              <p>Generator deskripsi SEO-friendly yang memikat pelanggan.</p>
            </div>
            <div className="bento-visual visual-lines">
              <div className="line l-long"></div>
              <div className="line l-short"></div>
              <div className="line l-med"></div>
            </div>
          </div>

          {/* Sub Block 2: Customer Service */}
          <div className="bento-box bento-small bento-cs">
            <div className="bento-bg bg-gradient-purple"></div>
            <div className="bento-content">
              <div className="bento-icon"><MessageSquare size={24} /></div>
              <h3>AI Chat Assistant</h3>
              <p>Balas ratusan chat pembeli secara cerdas 24 jam nonstop.</p>
            </div>
            <div className="bento-visual visual-chat">
              <div className="chat-bubble left">Ready kak?</div>
              <div className="chat-bubble right">Halo! Ya barang ready stock, silakan diorder langsung 🙏</div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. Official Merchant & Mitra Binaan (Brand Marquee) */}
      <section className="marquee-section">
        <h3 className="marquee-title">Dipercaya oleh 5.000+ Merchant & Mitra Strategis UII</h3>
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Logos - duplicated for infinite scroll */}
            {[1,2].map((set) => (
              <React.Fragment key={set}>
                <div className="brand-logo"><ShieldCheck size={28} /> Koperasi UII</div>
                <div className="brand-logo"><TrendingUp size={28} /> Saudagar Fashion</div>
                <div className="brand-logo"><Users size={28} /> BEM FEB UII</div>
                <div className="brand-logo"><Star size={28} /> Tech Store Jogja</div>
                <div className="brand-logo"><ShieldCheck size={28} /> UKM Kerajinan</div>
                <div className="brand-logo"><TrendingUp size={28} /> Kuliner Mahasiswa</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>


      {/* 3. Kisah Sukses Saudagar (Testimonial Cards) */}
      <section className="testimonial-section">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="section-title">
            <div className="title-bar" style={{ backgroundColor: '#f59e0b' }}></div>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>Kisah Sukses Merchant</h2>
              <p style={{ color: '#64748b' }}>Lihat bagaimana ribuan UMKM dan mahasiswa UII meningkatkan omzet mereka.</p>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <button onClick={() => scroll('left')} className="carousel-arrow left-arrow">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="carousel-arrow right-arrow">
            <ChevronRight size={24} />
          </button>

          <div className="testimonial-carousel" ref={carouselRef}>
          {[
            {
              id: 1,
              quote: "Semenjak pakai Saudagar UII, bisnis thrift saya bisa jalan otomatis pakai fitur AI-nya padahal saya sibuk ngampus tiap hari.",
              initial: "B",
              name: "Budi Santoso",
              role: "Mahasiswa FH UII (Owner Thrift Jogja)",
              color: "bg-gradient-green"
            },
            {
              id: 2,
              quote: "AI Photo Enhancement-nya gila! Foto produk pakai kamera HP kentang langsung disulap kayak hasil jepretan studio fotografer pro.",
              initial: "A",
              name: "Aisyah R.",
              role: "Alumni FTI UII (Owner Hijab Premium)",
              color: "bg-gradient-purple"
            },
            {
              id: 3,
              quote: "Sistem pencairan dananya instan. Pelanggan juga makin nyaman karena CS dibalas sama AI chatbot saat tengah malam.",
              initial: "D",
              name: "Dian P.",
              role: "UMKM Mitra (Owner Cemilan Lokal)",
              color: "bg-gradient-orange"
            },
            {
              id: 4,
              quote: "Awalnya iseng jualan tugas karya seni dari kampus, eh malah keterusan dapat banyak orderan berkat rekomendasi AI Saudagar.",
              initial: "R",
              name: "Rizky Firmansyah",
              role: "Mahasiswa FIAI UII (Pengrajin Kayu)",
              color: "bg-gradient-blue"
            },
            {
              id: 5,
              quote: "Sebagai ibu rumah tangga, saya sangat terbantu dengan AI Copywriter. Gak pusing mikirin kata-kata promosi lagi, tinggal klik jadi!",
              initial: "S",
              name: "Siti Aminah",
              role: "Mitra Binaan UII (Warung Makan)",
              color: "bg-gradient-dark"
            },
            {
              id: 6,
              quote: "Marketplace paling supportif untuk mahasiswa. Fitur Official Merchant bikin brand hoodie lokal saya jadi kelihatan sangat profesional.",
              initial: "F",
              name: "Fajar Nugraha",
              role: "Ketua BEM FEB (Owner Streetwear)",
              color: "bg-gradient-green"
            },
            {
              id: 7,
              quote: "Dulu pusing balas chat satu-satu saat lagi ngerjain skripsi. Sekarang AI Chat Assistant yang handle 80% pertanyaan pelanggan.",
              initial: "N",
              name: "Nadia Larasati",
              role: "Mahasiswa Psikologi UII",
              color: "bg-gradient-purple"
            },
            {
              id: 8,
              quote: "Integrasi dengan WhatsApp sangat mulus. Gak perlu repot buka aplikasi berat, notifikasi orderan langsung masuk ke WA.",
              initial: "T",
              name: "Tono M.",
              role: "Pedagang Buku Bekas Jogja",
              color: "bg-gradient-orange"
            },
            {
              id: 9,
              quote: "Traffic dari sesama mahasiswa UII sangat tinggi. Omzet jualan basreng saya naik 300% di bulan pertama gabung!",
              initial: "M",
              name: "Maya Sari",
              role: "Mahasiswa FBE UII",
              color: "bg-gradient-blue"
            },
            {
              id: 10,
              quote: "UI/UX-nya luar biasa bersih. Berasa jualan di platform e-commerce internasional padahal ini buatan ekosistem kampus tercinta.",
              initial: "K",
              name: "Kevin Sanjaya",
              role: "Alumni Teknik Informatika",
              color: "bg-gradient-dark"
            }
          ].map(testi => (
            <div className="testi-card" key={testi.id}>
              <div className="testi-stars">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p className="testi-quote">"{testi.quote}"</p>
              <div className="testi-author">
                <div className={`author-avatar ${testi.color}`}>{testi.initial}</div>
                <div className="author-info">
                  <h4>{testi.name}</h4>
                  <span>{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

    </div>
  );
}
