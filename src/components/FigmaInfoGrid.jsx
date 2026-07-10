import React from 'react';
import { Volume2, Star, Sparkles, Tag, Truck, Link2, ChevronRight } from 'lucide-react';

export default function FigmaInfoGrid() {
  return (
    <section className="prof-info-grid animate-fade-in delay-100">
      
      {/* PENGUMUMAN */}
      <div className="prof-section">
        <div className="prof-header">
          <div className="prof-title">
            <div className="prof-line bg-green"></div>
            <h2>Pengumuman</h2>
          </div>
          <a href="#" className="prof-link text-green">Lihat semua</a>
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
      </div>

      {/* PROMO & VOUCHER */}
      <div className="prof-section">
        <div className="prof-header">
          <div className="prof-title">
            <div className="prof-line bg-orange"></div>
            <h2>Promo & Voucher</h2>
          </div>
          <a href="#" className="prof-link text-orange">Klaim semua</a>
        </div>

        <div className="shopee-list">
          <div className="shopee-ticket-wrapper">
            <h4 className="shopee-ticket-title">Promo Gratis Ongkir</h4>
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
            <h4 className="shopee-ticket-title">Persentase Diskon</h4>
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
            <h4 className="shopee-ticket-title">Cashback Koin</h4>
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
      </div>

    </section>
  );
}
