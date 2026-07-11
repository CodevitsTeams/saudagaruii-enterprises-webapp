import React from 'react';
import { Star, X, ShoppingCart, ShieldCheck, Truck, ChevronRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="product-preview-modal animate-fade-in" onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', display: 'flex', width: '90%', maxWidth: '850px', maxHeight: '90vh', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.05)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
          <X size={20} color="#475569" />
        </button>

        {/* Left Side: Image */}
        <div style={{ flex: '1', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }} />
        </div>

        {/* Right Side: Details (Shopee Style) */}
        <div style={{ flex: '1.2', padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ background: '#ee4d2d', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>Mall</span>
            <span style={{ color: '#475569', fontSize: '0.9rem' }}>{product.storeName || 'Merchant Terverifikasi'}</span>
          </div>
          
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', marginBottom: '12px', lineHeight: '1.3' }}>
            {product.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ee4d2d', borderRight: '1px solid #e2e8f0', paddingRight: '16px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem', borderBottom: '1px solid #ee4d2d' }}>4.8</span>
              <div style={{ display: 'flex' }}><Star size={14} fill="#ee4d2d" color="#ee4d2d" /><Star size={14} fill="#ee4d2d" color="#ee4d2d" /><Star size={14} fill="#ee4d2d" color="#ee4d2d" /><Star size={14} fill="#ee4d2d" color="#ee4d2d" /><Star size={14} fill="#ee4d2d" color="#ee4d2d" /></div>
            </div>
            <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '16px', color: '#0f172a' }}>
              <span style={{ fontWeight: 'bold' }}>1,2RB</span> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Penilaian</span>
            </div>
            <div style={{ color: '#0f172a' }}>
              <span style={{ fontWeight: 'bold' }}>5,4RB</span> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Terjual</span>
            </div>
          </div>

          {/* Price Block */}
          <div style={{ background: '#fafafa', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
            {product.originalPrice && (
              <div style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '1rem', marginBottom: '4px' }}>
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.originalPrice)}
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: '#ee4d2d' }}>
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}
              </span>
              <span style={{ background: '#fcebea', color: '#ee4d2d', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>25% OFF</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', fontSize: '0.9rem' }}>
            <span style={{ color: '#64748b', width: '80px' }}>Pengiriman</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: '#0f172a' }}>
                <Truck size={16} color="#10b981" /> <span>Gratis Ongkir</span>
              </div>
              <div style={{ color: '#64748b' }}>Pengiriman ke <strong>Kota Yogyakarta</strong></div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', fontSize: '0.9rem' }}>
            <span style={{ color: '#64748b', width: '80px' }}>Proteksi</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
              <ShieldCheck size={16} color="#3b82f6" /> <span>Garansi 100% Ori</span> <ChevronRight size={14} color="#64748b" />
            </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', gap: '16px' }}>
            <button 
              onClick={() => { onAddToCart(product); onClose(); }} 
              style={{ flex: 1, padding: '14px', background: '#fcebea', color: '#ee4d2d', border: '1px solid #ee4d2d', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', transition: 'background 0.2s' }}
            >
              <ShoppingCart size={20} /> Masukkan Keranjang
            </button>
            <button 
              onClick={() => { if(onBuyNow) onBuyNow(product); else { onAddToCart(product); onClose(); } }} 
              style={{ flex: 1, padding: '14px', background: '#ee4d2d', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }}
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
