import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronLeft, Bot, Package, BarChart2, Users, Mail, Eye, EyeOff, Lock } from 'lucide-react';
import '../AdminLogin.css';

export default function AdminLogin({ onBack, onLogin, onRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="admin-login-container">
      {/* LEFT PANEL */}
      <div className="admin-left-panel">
        <div className="admin-glass-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
          alt="Admin Background"
          className="admin-bg-image"
        />
        <div className="admin-left-content">
          <div className="admin-logo">
            <div className="admin-logo-icon">S</div>
            <div className="admin-logo-text">
              <span className="admin-logo-title">Saudagar UII</span>
              <span className="admin-logo-subtitle">MARKETPLACE UMKM</span>
            </div>
          </div>

          <h1>Dashboard Terpusat untuk Ekosistem UMKM Indonesia</h1>
          <p>
            Kelola merchant, verifikasi produk, pantau transaksi, analisis performa, dan jalankan kampanye marketing, semua dalam satu dashboard.
          </p>

          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <div className="stat-icon-wrapper">
                <Bot size={24} color="#fca5a5" />
              </div>
              <div className="stat-value">2.800+ merchant</div>
              <div className="stat-label">AI Merchant Onboarding</div>
            </div>

            <div className="admin-stat-card">
              <div className="stat-icon-wrapper">
                <Package size={24} color="#fdba74" />
              </div>
              <div className="stat-value">12.400+ produk</div>
              <div className="stat-label">Produk Terverifikasi</div>
            </div>

            <div className="admin-stat-card">
              <div className="stat-icon-wrapper">
                <BarChart2 size={24} color="#86efac" />
              </div>
              <div className="stat-value">Rp 4,2 Miliar</div>
              <div className="stat-label">Total Transaksi</div>
            </div>

            <div className="admin-stat-card">
              <div className="stat-icon-wrapper">
                <Users size={24} color="#fcd34d" />
              </div>
              <div className="stat-value">890 affiliate</div>
              <div className="stat-label">Affiliate Aktif</div>
            </div>
          </div>
        </div>


      </div>

      {/* RIGHT PANEL */}
      <div className="admin-right-panel">
        <button className="btn-back-corner" onClick={onBack}>
          <ChevronLeft size={20} />
          <span>Kembali</span>
        </button>

        <div className="admin-form-container">
          <div className="admin-form-box">
            <h2>Selamat Datang</h2>
            <p className="subtitle">Masuk ke panel admin Saudagar UII Marketplace</p>

            <div className="form-group">
              <label>Email Admin</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon-left" />
                <input type="email" placeholder="admin@saudagaruii.id" defaultValue="admin@saudagaruii.id" style={{ paddingLeft: '2.5rem' }} />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon-left" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  defaultValue="password123"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                />
                <button
                  type="button"
                  className="input-icon-right btn-toggle-pwd"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Ingat saya
              </label>
              <a href="#" className="forgot-pwd">Lupa password?</a>
            </div>

            <button
              className="btn-login"
              onClick={() => {
                if (onLogin) onLogin();
              }}
            >
              Masuk ke Dashboard
            </button>

            <div className="divider">Atau masuk dengan</div>

            <div className="social-login-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
              <button className="btn-demo" style={{ width: '100%', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Sign in with Google
              </button>

              <button className="btn-demo" style={{ width: '100%', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.29-.88 3.56-.88 1.48.06 2.65.62 3.47 1.6-3 1.77-2.45 5.56.5 6.69-1.03 2.5-2.22 4.14-2.61 4.76zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Sign in with Apple
              </button>
            </div>

            <div className="admin-footer-links" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Belum mempunyai akun? <a href="#" onClick={(e) => { e.preventDefault(); if (onRegister) onRegister(); }} style={{ color: '#064e3b', fontWeight: '600', textDecoration: 'none' }}>Daftar di sini</a>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
