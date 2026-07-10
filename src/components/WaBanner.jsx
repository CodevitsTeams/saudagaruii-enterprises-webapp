import React from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

export default function WaBanner() {
  return (
    <section className="wa-banner-section">
      <div className="wa-banner-content">
        <h2>Daftar Merchant Cukup Lewat WhatsApp</h2>
        <p>AI kami membantu kelola semua, dari foto, ringkasan, bahkan orderan. Tidak ada form rumit. Tidak perlu login web.</p>
        <div className="wa-features">
          <span><CheckCircle2 size={16} /> Registrasi Otomatis</span>
          <span><CheckCircle2 size={16} /> Upload Produk Mudah</span>
          <span><CheckCircle2 size={16} /> AI Photo Enhancement</span>
          <span><CheckCircle2 size={16} /> Dashboard Lengkap</span>
        </div>
      </div>
      <a href="https://wa.me/6287761314710" target="_blank" rel="noopener noreferrer" className="wa-btn">
        <div className="wa-btn-icon"><MessageSquare size={24} color="#0b4931" /></div>
        <span>Chat WA Sekarang</span>
      </a>
    </section>
  );
}
