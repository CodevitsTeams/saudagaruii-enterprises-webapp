import React from 'react';
import { Volume2, Star, Sparkles, Tag, Truck, Link2, ChevronRight } from 'lucide-react';

export default function FigmaInfoGrid() {
  return (
    <section className="bespoke-info-grid animate-fade-in delay-100">
      
      {/* PENGUMUMAN - Editorial & Floating Glass Style */}
      <section className="bespoke-section">
        <div className="bespoke-header">
          <div className="b-title">
            <span className="b-dot bg-green"></span>
            <h2>Pengumuman</h2>
          </div>
          <a href="#" className="b-link">Lihat semua &rarr;</a>
        </div>

        <div className="bespoke-list">
          {/* Card 1 */}
          <div className="bespoke-card announcement-glass">
            <div className="bg-watermark"><Volume2 size={120} /></div>
            <div className="card-top">
              <span className="glow-pill blue">INFO</span>
              <span className="b-date">4 Jun 2026</span>
            </div>
            <div className="card-body">
              <h3>Verifikasi Merchant Dipercepat</h3>
              <p>Proses verifikasi kini hanya 1x24 jam. Daftar sekarang dan mulai berjualan besok.</p>
            </div>
            <div className="card-bottom">
              <div className="read-more">Baca selengkapnya <ChevronRight size={16} /></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bespoke-card announcement-glass">
            <div className="bg-watermark"><Star size={120} /></div>
            <div className="card-top">
              <span className="glow-pill yellow">PROMO</span>
              <span className="b-date">2 Jun 2026</span>
            </div>
            <div className="card-body">
              <h3>Program Saudagar Mahasiswa UII</h3>
              <p>Mahasiswa UII? Dapatkan hibah modal usaha selama 6 bulan pertama.</p>
            </div>
            <div className="card-bottom">
              <div className="read-more">Baca selengkapnya <ChevronRight size={16} /></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bespoke-card announcement-glass">
            <div className="bg-watermark"><Sparkles size={120} /></div>
            <div className="card-top">
              <span className="glow-pill purple">UPDATE AI</span>
              <span className="b-date">1 Jun 2026</span>
            </div>
            <div className="card-body">
              <h3>Fitur AI Photo Enhancement Hadir</h3>
              <p>Jadikan foto produk kamu sekelas hasil studio profesional secara otomatis.</p>
            </div>
            <div className="card-bottom">
              <div className="read-more">Baca selengkapnya <ChevronRight size={16} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO & VOUCHER - Authentic Perforated Ticket Style */}
      <section className="bespoke-section">
        <div className="bespoke-header">
          <div className="b-title">
            <span className="b-dot bg-orange"></span>
            <h2>Promo & Voucher</h2>
          </div>
          <a href="#" className="b-link text-orange">Klaim semua &rarr;</a>
        </div>

        <div className="bespoke-list">
          {/* Ticket 1 */}
          <div className="ticket-card">
            <div className="ticket-left bg-gradient-green">
              <Tag size={32} color="#fff" />
              <span className="vertical-text">FLASH SALE</span>
            </div>
            <div className="ticket-divider"></div>
            <div className="ticket-right">
              <div className="ticket-content">
                <h3>Cashback 10% via QRIS</h3>
                <p>Max potongan Rp10.000. Berlaku s.d. 30 Jun</p>
              </div>
              <button className="ticket-btn green">Klaim</button>
            </div>
          </div>

          {/* Ticket 2 */}
          <div className="ticket-card">
            <div className="ticket-left bg-gradient-orange">
              <Truck size={32} color="#fff" />
              <span className="vertical-text">GRATIS ONGKIR</span>
            </div>
            <div className="ticket-divider"></div>
            <div className="ticket-right">
              <div className="ticket-content">
                <h3>Gratis Ongkir Seluruh Indonesia</h3>
                <p>Kode: SAUDAGARFREE - untuk min Trx 50rb</p>
              </div>
              <button className="ticket-btn orange">Klaim</button>
            </div>
          </div>

          {/* Ticket 3 */}
          <div className="ticket-card">
            <div className="ticket-left bg-gradient-purple">
              <Link2 size={32} color="#fff" />
              <span className="vertical-text">KEMITRAAN AI</span>
            </div>
            <div className="ticket-divider"></div>
            <div className="ticket-right">
              <div className="ticket-content">
                <h3>Komisi Affiliate 15%</h3>
                <p>Bagikan link produk dan dapatkan komisi setiap penjualan.</p>
              </div>
              <button className="ticket-btn purple">Klaim</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
