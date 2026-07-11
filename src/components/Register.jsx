import React, { useState } from 'react';
import { ChevronLeft, Mail, Lock, User, Phone, Eye, EyeOff, Store, ArrowRight } from 'lucide-react';
import '../Register.css';

export default function Register({ onBack, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState('customer'); // customer or merchant

  return (
    <div className="register-container">
      {/* LEFT PANEL: High-end Editorial Image */}
      <div className="register-left fade-in-up">
        <div className="register-glass-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
          alt="Marketplace Background" 
          className="register-bg-image"
        />
        
        <div className="register-left-content">
          <div className="register-logo">
            <div className="register-logo-icon">S</div>
            <div className="register-logo-text">
              <span className="register-logo-title">Saudagar UII</span>
              <span className="register-logo-subtitle">MARKETPLACE UMKM</span>
            </div>
          </div>
        </div>
        
        <div className="register-hero-text">
          <h1>Ayo Mulai <br/>Langkah Baru.</h1>
          <p>
            Bergabunglah dengan ribuan customer dan merchant UMKM inspiratif di seluruh nusantara. 
            Jelajahi produk lokal berkualitas tinggi, didukung oleh teknologi AI yang cerdas dan aman.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: Minimalist Apple-style Form */}
      <div className="register-right">
        <button className="btn-back-minimal" onClick={onBack}>
          <ChevronLeft size={18} />
          Kembali ke Marketplace
        </button>

        <div className="register-right-inner">
          <div className="register-header fade-in-up delay-1">
            <h2>Create Account</h2>
            <p>Satu akun Saudagar UII untuk semua kebutuhan Anda.</p>
          </div>

          <div className="register-form fade-in-up delay-2">
            
            <div className="account-type-selector" style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
              <label style={{ flex: 1, cursor: 'pointer' }}>
                <input type="radio" name="acc_type" checked={accountType === 'customer'} onChange={() => setAccountType('customer')} style={{ display: 'none' }} />
                <div style={{ padding: '1rem', border: `2px solid ${accountType === 'customer' ? '#1d1d1f' : '#e2e8f0'}`, borderRadius: '12px', textAlign: 'center', transition: 'all 0.2s', background: accountType === 'customer' ? '#f8fafc' : '#fff' }}>
                  <User size={24} color={accountType === 'customer' ? '#1d1d1f' : '#94a3b8'} style={{ margin: '0 auto 0.5rem' }} />
                  <div style={{ fontWeight: 600, color: accountType === 'customer' ? '#1d1d1f' : '#64748b' }}>Customer</div>
                </div>
              </label>
              <label style={{ flex: 1, cursor: 'pointer' }}>
                <input type="radio" name="acc_type" checked={accountType === 'merchant'} onChange={() => setAccountType('merchant')} style={{ display: 'none' }} />
                <div style={{ padding: '1rem', border: `2px solid ${accountType === 'merchant' ? '#064e3b' : '#e2e8f0'}`, borderRadius: '12px', textAlign: 'center', transition: 'all 0.2s', background: accountType === 'merchant' ? '#ecfdf5' : '#fff' }}>
                  <Store size={24} color={accountType === 'merchant' ? '#064e3b' : '#94a3b8'} style={{ margin: '0 auto 0.5rem' }} />
                  <div style={{ fontWeight: 600, color: accountType === 'merchant' ? '#064e3b' : '#64748b' }}>Merchant</div>
                </div>
              </label>
            </div>

            <div className="register-input-group">
              <label>Nama Lengkap</label>
              <div className="register-input-wrapper">
                <User size={18} className="register-icon-left" />
                <input type="text" className="register-input" placeholder="Masukkan nama sesuai KTP" />
              </div>
            </div>

            <div className="register-input-group">
              <label>Email</label>
              <div className="register-input-wrapper">
                <Mail size={18} className="register-icon-left" />
                <input type="email" className="register-input" placeholder="nama@email.com" />
              </div>
            </div>

            {accountType === 'merchant' && (
              <div className="register-input-group">
                <label>Nomor WhatsApp</label>
                <div className="register-input-wrapper">
                  <Phone size={18} className="register-icon-left" />
                  <input type="tel" className="register-input" placeholder="0812xxxxxx" />
                </div>
              </div>
            )}

            <div className="register-input-group">
              <label>Password</label>
              <div className="register-input-wrapper">
                <Lock size={18} className="register-icon-left" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="register-input" 
                  placeholder="Minimal 8 karakter" 
                  style={{ paddingRight: '3rem' }}
                />
                <button 
                  type="button" 
                  style={{ position: 'absolute', right: '1rem', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <button className="register-btn-primary" onClick={() => { if(onBack) onBack(); }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Daftar Sekarang <ArrowRight size={18} />
              </span>
            </button>
          </div>

          <div className="register-divider fade-in-up delay-3">atau daftar dengan</div>

          <div className="register-social-options fade-in-up delay-3">
            <button className="register-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Lanjutkan dengan Google
            </button>
            <button className="register-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.29-.88 3.56-.88 1.48.06 2.65.62 3.47 1.6-3 1.77-2.45 5.56.5 6.69-1.03 2.5-2.22 4.14-2.61 4.76zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Lanjutkan dengan Apple
            </button>
          </div>

          <div className="register-footer fade-in-up delay-4">
            Sudah punya akun? <a href="#" onClick={(e) => { e.preventDefault(); if (onLogin) onLogin(); }}>Masuk sekarang</a>
          </div>

        </div>
      </div>
    </div>
  );
}
