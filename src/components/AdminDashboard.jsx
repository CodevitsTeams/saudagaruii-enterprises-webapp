import React, { useState, useRef } from 'react';
import {
  Search, Bell, LayoutDashboard, Store, Box, ShoppingCart, Heart,
  Target, Bot, Smartphone, BarChart2, Settings, Menu, TrendingUp, Package, Users, Plus, Download, Send, CheckCircle2, Eye, EyeOff,
  Check, X, RotateCcw, Edit2
} from 'lucide-react';
import '../AdminDashboard.css';

export default function AdminDashboard() {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Navigation State
  const [activeView, setActiveView] = useState('overview');

  // Settings State
  const [showApiKey, setShowApiKey] = useState(false);

  // Merchant View State
  const [activeMerchantTab, setActiveMerchantTab] = useState('menunggu');
  const [selectedMerchantChat, setSelectedMerchantChat] = useState('M-0421');

  // Product View State
  const [activeProductTab, setActiveProductTab] = useState('menunggu');

  const productData = [
    {
      id: 'PRD-1201', name: 'Batik Tulis Motif Kawung Premium', merchant: 'Batik Sekar Arum', category: 'Fashion',
      price: 'Rp 285.000', uploadMethod: 'via WA Upload', date: '10 Jul, 14:22',
      image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=150', aiScore: 94,
      aiChecks: ['Background Removed', 'Auto Enhanced', 'Centered', 'Quality Score A'], status: 'Menunggu'
    },
    {
      id: 'PRD-1202', name: 'Sambal Matah Bali Spesial 250gr', merchant: 'Dapur Bu Ketut', category: 'Kuliner',
      price: 'Rp 38.000', uploadMethod: 'via WA Upload', date: '10 Jul, 13:05',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', aiScore: 87,
      aiChecks: ['Background Removed', 'Auto Enhanced', 'Centered', 'Quality Score A'], status: 'Menunggu'
    },
    {
      id: 'PRD-1203', name: 'Minyak Kemiri Asli Sulawesi', merchant: 'Herbal Sejati', category: 'Herbal',
      price: 'Rp 75.000', uploadMethod: 'via WA Upload', date: '9 Jul, 18:44',
      image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=150', aiScore: 62,
      aiChecks: ['Background Removed', 'Auto Enhanced', 'Centered', 'Quality Score C'], status: 'Revisi'
    },
    {
      id: 'PRD-1204', name: 'Anyaman Bambu Premium Serat Halus', merchant: 'Kerajinan Nusantara', category: 'Kerajinan',
      price: 'Rp 120.000', uploadMethod: 'via WA Upload', date: '9 Jul, 15:30',
      image: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=150', aiScore: 91,
      aiChecks: ['Background Removed', 'Auto Enhanced', 'Centered', 'Quality Score A'], status: 'Menunggu'
    }
  ];

  const merchantData = [
    { id: 'M-0421', name: 'Batik Permata Ratu', date: '10 Jul 2024', owner: 'Ibu Ratna Sari', phone: '0812-3456-7890', category: 'Fashion', city: 'Yogyakarta', completeness: 95, status: 'Menunggu' },
    { id: 'M-0422', name: 'Warung Organik Pak Budi', date: '10 Jul 2024', owner: 'Budi Santoso', phone: '0815-9876-5432', category: 'Kuliner', city: 'Solo', completeness: 78, status: 'Revisi' },
    { id: 'M-0423', name: 'Herbal Nusantara', date: '9 Jul 2024', owner: 'Dewi Kartika', phone: '0857-1234-5678', category: 'Herbal', city: 'Semarang', completeness: 100, status: 'Menunggu' },
    { id: 'M-0424', name: 'Studio Kerajinan Tangan', date: '9 Jul 2024', owner: 'Ahmad Fauzi', phone: '0878-4567-8901', category: 'Kerajinan', city: 'Bandung', completeness: 88, status: 'Menunggu' },
    { id: 'M-0425', name: 'Kopi Gunung Merapi', date: '8 Jul 2024', owner: 'Slamet Riyadi', phone: '0819-2345-6789', category: 'Kuliner', city: 'Magelang', completeness: 100, status: 'Disetujui' },
  ];

  // Interactive Chart State
  const [activeChartPoint, setActiveChartPoint] = useState(null);
  const chartRef = useRef(null);

  const chartData = [
    { month: 'Jan', value: 'Rp 80 Jt', yPercent: 80 },   // 200/250
    { month: 'Feb', value: 'Rp 120 Jt', yPercent: 64 },  // 160/250
    { month: 'Mar', value: 'Rp 160 Jt', yPercent: 48 },  // 120/250
    { month: 'Apr', value: 'Rp 140 Jt', yPercent: 56 },  // 140/250
    { month: 'Mei', value: 'Rp 220 Jt', yPercent: 36 },  // 90/250
    { month: 'Jun', value: 'Rp 260 Jt', yPercent: 20 },  // 50/250
    { month: 'Jul', value: 'Rp 250 Jt', yPercent: 24 }   // 60/250
  ];

  const handleChartHover = (e) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;

    // There are 7 points, index 0 to 6
    let index = Math.round(percentage * 6);
    if (index < 0) index = 0;
    if (index > 6) index = 6;

    setActiveChartPoint(index);
  };

  const getSmoothPath = (data) => {
    let path = `M 0,${(data[0].yPercent / 100) * 250}`;
    for (let i = 0; i < data.length - 1; i++) {
      const x0 = (i / 6) * 800;
      const y0 = (data[i].yPercent / 100) * 250;
      const x1 = ((i + 1) / 6) * 800;
      const y1 = (data[i + 1].yPercent / 100) * 250;
      const cp1x = x0 + (x1 - x0) / 2;
      const cp2x = x0 + (x1 - x0) / 2;
      path += ` C ${cp1x},${y0} ${cp2x},${y1} ${x1},${y1}`;
    }
    return path;
  };

  const linePath = getSmoothPath(chartData);
  const fillPath = `${linePath} L 800,250 L 0,250 Z`;

  return (
    <div className="admin-dashboard-container">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-icon">S</div>
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-title">Saudagar UII</span>
            <span className="sidebar-logo-subtitle">ENTERPRISE</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className={`nav-item ${activeView === 'overview' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveView('overview'); }}>
            <div className="nav-item-left">
              <LayoutDashboard size={20} className="nav-icon" />
              <span>Overview</span>
            </div>
          </a>
          <a href="#" className={`nav-item ${activeView === 'merchants' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveView('merchants'); }}>
            <div className="nav-item-left">
              <Store size={20} className="nav-icon" />
              <span>Merchant</span>
            </div>
            <span className="nav-badge">14</span>
          </a>
          <a href="#" className={`nav-item ${activeView === 'products' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveView('products'); }}>
            <div className="nav-item-left">
              <Box size={20} className="nav-icon" />
              <span>Produk</span>
            </div>
            <span className="nav-badge">37</span>
          </a>
          <a href="#" className="nav-item">
            <div className="nav-item-left">
              <ShoppingCart size={20} className="nav-icon" />
              <span>Pesanan</span>
            </div>
            <span className="nav-badge">8</span>
          </a>
          <a href="#" className="nav-item">
            <div className="nav-item-left">
              <Users size={20} className="nav-icon" />
              <span>Customers</span>
            </div>
          </a>

          <div className="nav-divider"></div>

          <a href="#" className="nav-item">
            <div className="nav-item-left">
              <Heart size={20} className="nav-icon" />
              <span>Affiliate</span>
            </div>
          </a>
          <a href="#" className="nav-item">
            <div className="nav-item-left">
              <Target size={20} className="nav-icon" />
              <span>CRM & Marketing</span>
            </div>
          </a>
          <a href="#" className="nav-item">
            <div className="nav-item-left">
              <Bot size={20} className="nav-icon" />
              <span>AI Tools</span>
            </div>
          </a>
          <a href="#" className="nav-item">
            <div className="nav-item-left">
              <Smartphone size={20} className="nav-icon" />
              <span>Produk Digital</span>
            </div>
          </a>
          <a href="#" className="nav-item">
            <div className="nav-item-left">
              <BarChart2 size={20} className="nav-icon" />
              <span>Business Intel</span>
            </div>
          </a>
          <a href="#" className={`nav-item ${activeView === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveView('settings'); }}>
            <div className="nav-item-left">
              <Settings size={20} className="nav-icon" />
              <span>Pengaturan</span>
            </div>
          </a>
        </nav>

        <div className="sidebar-footer">
          Saudagar UII v2.0 Enterprise
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-topbar animate-delay-1">
          <div className="topbar-left">
            <button className="menu-trigger">
              <Menu size={24} />
            </button>
            <div className="search-container">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search commands, merchants, orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearching(true)}
                onBlur={() => setTimeout(() => setIsSearching(false), 200)}
              />
              <span className="search-shortcut">⌘K</span>

              {/* SEARCH DROPDOWN */}
              {isSearching && searchQuery && (
                <div className="search-dropdown animate-fade-in">
                  <div className="search-dropdown-header">Hasil Pencarian untuk "{searchQuery}"</div>
                  <div className="search-result-item">
                    <Box size={14} className="result-icon" />
                    <span>Mencari pesanan <strong>{searchQuery}</strong>...</span>
                  </div>
                  <div className="search-result-item">
                    <Store size={14} className="result-icon" />
                    <span>Mencari merchant <strong>{searchQuery}</strong>...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="topbar-right">
            <div className="system-status">
              <span className="status-pulse"></span>
              All Systems Operational
            </div>

            {/* NOTIFICATION */}
            <div className="notif-wrapper" onMouseLeave={() => setShowNotif(false)}>
              <div className={`notif-bell ${showNotif ? 'active' : ''}`} onClick={() => setShowNotif(!showNotif)}>
                <Bell size={20} />
                <span className="notif-dot"></span>
              </div>

              {showNotif && (
                <div className="dropdown-panel notif-panel animate-fade-in">
                  <div className="panel-header">
                    <h4>Notifikasi Terbaru</h4>
                    <span className="mark-read">Tandai sudah dibaca</span>
                  </div>
                  <div className="panel-body">
                    <div className="notif-item unread">
                      <div className="notif-icon bg-emerald"><ShoppingCart size={14} /></div>
                      <div className="notif-text">
                        <p><strong>Pesanan Baru</strong> #ORD-8822 masuk dari Jogja.</p>
                        <span>Baru saja</span>
                      </div>
                    </div>
                    <div className="notif-item unread">
                      <div className="notif-icon bg-blue"><Store size={14} /></div>
                      <div className="notif-text">
                        <p><strong>Merchant Baru</strong> "Kopi Nusantara" minta verifikasi.</p>
                        <span>5 menit lalu</span>
                      </div>
                    </div>
                    <div className="notif-item">
                      <div className="notif-icon bg-gray"><Settings size={14} /></div>
                      <div className="notif-text">
                        <p>Sistem backup harian berhasil dijalankan.</p>
                        <span>2 jam lalu</span>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    Lihat semua notifikasi
                  </div>
                </div>
              )}
            </div>

            {/* PROFILE */}
            <div className="profile-wrapper" onMouseLeave={() => setShowProfile(false)}>
              <div className={`admin-profile ${showProfile ? 'active' : ''}`} onClick={() => setShowProfile(!showProfile)}>
                <div className="profile-avatar">A</div>
                <span className="profile-name">Admin</span>
              </div>

              {showProfile && (
                <div className="dropdown-panel profile-panel animate-fade-in">
                  <div className="profile-header-info">
                    <div className="profile-avatar large">A</div>
                    <div>
                      <h4>Super Admin</h4>
                      <p>admin@saudagaruii.com</p>
                    </div>
                  </div>
                  <div className="profile-menu">
                    <a href="#"><Settings size={16} /> Pengaturan Akun</a>
                    <a href="#"><Heart size={16} /> Subscription (Pro)</a>
                    <div className="divider"></div>
                    <a href="/" className="text-danger"><Bot size={16} /> Keluar ke Market</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="dashboard-content">
          {activeView === 'overview' ? (
            <>
              <div className="dashboard-page-header animate-delay-2">
                <div className="page-header-text">
                  <h2>Overview</h2>
                  <p>Kamis, 10 Juli 2024 · Real-time Sync Active</p>
                </div>

                {/* QUICK ACTIONS */}
                <div className="quick-actions">
                  <button className="quick-action-btn">
                    <Download size={16} /> Export
                  </button>
                  <button className="quick-action-btn">
                    <Send size={16} /> Broadcast
                  </button>
                  <button className="quick-action-btn primary">
                    <Plus size={16} /> Merchant Baru
                  </button>
                </div>
              </div>

              {/* KPI CARDS (8 Cards) */}
              <div className="kpi-grid animate-delay-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>

                {/* Card 1 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,40 C20,30 40,35 60,20 C80,5 100,25 120,10 C140,-5 160,15 180,5 L200,0 L200,50 L0,50 Z" fill="rgba(16, 185, 129, 0.2)" />
                      <path d="M0,40 C20,30 40,35 60,20 C80,5 100,25 120,10 C140,-5 160,15 180,5" fill="none" stroke="#10b981" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#fef3c7' }}>
                        <span style={{ fontSize: '1.1rem' }}>💰</span>
                      </div>
                      <div className="kpi-trend trend-up">
                        <TrendingUp size={12} style={{ marginRight: '4px' }} /> +18.4%
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>Rp 1,45 Mlyr</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>GMV Hari Ini</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>dari 342 transaksi</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,40 C40,40 60,15 100,10 C140,5 160,20 200,0 L200,50 L0,50 Z" fill="rgba(99, 102, 241, 0.2)" />
                      <path d="M0,40 C40,40 60,15 100,10 C140,5 160,20 200,0" fill="none" stroke="#6366f1" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#e0e7ff' }}>
                        <span style={{ fontSize: '1.1rem' }}>🏪</span>
                      </div>
                      <div className="kpi-trend trend-up">
                        <TrendingUp size={12} style={{ marginRight: '4px' }} /> +24
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>2.847</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>Merchant Aktif</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>14 menunggu verifikasi</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,20 C40,30 80,10 120,15 C160,20 180,5 200,0 L200,50 L0,50 Z" fill="rgba(245, 158, 11, 0.2)" />
                      <path d="M0,20 C40,30 80,10 120,15 C160,20 180,5 200,0" fill="none" stroke="#f59e0b" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#ffedd5' }}>
                        <Package size={18} color="#ea580c" />
                      </div>
                      <div className="kpi-trend trend-up">
                        <TrendingUp size={12} style={{ marginRight: '4px' }} /> +89
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>12.431</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>Produk Aktif</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>37 menunggu review</div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,35 C50,30 80,20 120,25 C160,30 180,10 200,5 L200,50 L0,50 Z" fill="rgba(168, 85, 247, 0.2)" />
                      <path d="M0,35 C50,30 80,20 120,25 C160,30 180,10 200,5" fill="none" stroke="#a855f7" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#f3e8ff' }}>
                        <Users size={18} color="#9333ea" />
                      </div>
                      <div className="kpi-trend trend-up">
                        <TrendingUp size={12} style={{ marginRight: '4px' }} /> +12.1%
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>38.290</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>Total Customer</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>892 baru bulan ini</div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,40 C40,40 60,15 100,10 C140,5 160,20 200,0 L200,50 L0,50 Z" fill="rgba(59, 130, 246, 0.2)" />
                      <path d="M0,40 C40,40 60,15 100,10 C140,5 160,20 200,0" fill="none" stroke="#3b82f6" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#dbeafe' }}>
                        <ShoppingCart size={18} color="#2563eb" />
                      </div>
                      <div className="kpi-trend trend-up">
                        <TrendingUp size={12} style={{ marginRight: '4px' }} /> +5.2%
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>1.492</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>Total Pesanan</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>42 menunggu proses</div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,20 C40,30 80,10 120,15 C160,20 180,5 200,0 L200,50 L0,50 Z" fill="rgba(236, 72, 153, 0.2)" />
                      <path d="M0,20 C40,30 80,10 120,15 C160,20 180,5 200,0" fill="none" stroke="#ec4899" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#fce7f3' }}>
                        <Target size={18} color="#db2777" />
                      </div>
                      <div className="kpi-trend trend-neutral">
                        <span style={{ marginRight: '4px' }}>--</span> 0.0%
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>3.4%</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>Konversi Belanja</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>Rata-rata minggu ini</div>
                  </div>
                </div>

                {/* Card 7 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,40 C20,30 40,35 60,20 C80,5 100,25 120,10 C140,-5 160,15 180,5 L200,0 L200,50 L0,50 Z" fill="rgba(14, 165, 233, 0.2)" />
                      <path d="M0,40 C20,30 40,35 60,20 C80,5 100,25 120,10 C140,-5 160,15 180,5" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#e0f2fe' }}>
                        <Smartphone size={18} color="#0284c7" />
                      </div>
                      <div className="kpi-trend trend-up">
                        <TrendingUp size={12} style={{ marginRight: '4px' }} /> +15.3%
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>24.8K</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>Pengunjung Aktif</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>Live traffic hari ini</div>
                  </div>
                </div>

                {/* Card 8 */}
                <div className="kpi-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="kpi-sparkline" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', zIndex: 0, opacity: 0.3 }}>
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                      <path d="M0,35 C50,30 80,20 120,25 C160,30 180,10 200,5 L200,50 L0,50 Z" fill="rgba(20, 184, 166, 0.2)" />
                      <path d="M0,35 C50,30 80,20 120,25 C160,30 180,10 200,5" fill="none" stroke="#14b8a6" strokeWidth="2" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="kpi-card-header">
                      <div className="kpi-icon-box" style={{ background: '#ccfbf1' }}>
                        <BarChart2 size={18} color="#0d9488" />
                      </div>
                      <div className="kpi-trend trend-up">
                        <TrendingUp size={12} style={{ marginRight: '4px' }} /> +8.1%
                      </div>
                    </div>
                    <div className="kpi-value" style={{ position: 'relative', zIndex: 10 }}>Rp 8,4 Jt</div>
                    <div className="kpi-label" style={{ position: 'relative', zIndex: 10 }}>Komisi Platform</div>
                    <div className="kpi-subtext" style={{ position: 'relative', zIndex: 10 }}>Estimasi bulan ini</div>
                  </div>
                </div>

              </div>

              {/* CHARTS */}
              <div className="charts-grid animate-delay-4">
                {/* LINE CHART */}
                <div className="dashboard-panel">
                  <div className="panel-header">
                    <div className="panel-title">Revenue Analytics</div>
                    <div className="panel-actions">
                      <button className="filter-btn">1W</button>
                      <button className="filter-btn active">1M</button>
                      <button className="filter-btn">3M</button>
                      <button className="filter-btn">1Y</button>
                    </div>
                  </div>

                  <div className="dummy-line-chart">
                    <div className="y-axis">
                      <span>280Jt</span>
                      <span>210Jt</span>
                      <span>140Jt</span>
                      <span>70Jt</span>
                      <span>0</span>
                    </div>
                    <div
                      className="chart-area"
                      ref={chartRef}
                      onMouseMove={handleChartHover}
                      onMouseLeave={() => setActiveChartPoint(null)}
                      style={{ position: 'relative', cursor: 'crosshair' }}
                    >
                      <div className="chart-grid-line" style={{ top: '0%' }}></div>
                      <div className="chart-grid-line" style={{ top: '25%' }}></div>
                      <div className="chart-grid-line" style={{ top: '50%' }}></div>
                      <div className="chart-grid-line" style={{ top: '75%' }}></div>
                      <div className="chart-grid-line" style={{ top: '100%', borderBottomStyle: 'solid' }}></div>

                      <div className="svg-line-container">
                        <svg width="100%" height="100%" viewBox="0 0 800 250" preserveAspectRatio="none">
                          <path
                            d={fillPath}
                            fill="url(#gradient)"
                            opacity="0.8"
                          />
                          <path
                            d={linePath}
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="4"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {/* Interactive Tooltip & Crosshair */}
                        {activeChartPoint !== null && (
                          <>
                            <div style={{
                              position: 'absolute',
                              left: `${(activeChartPoint / 6) * 100}%`,
                              top: 0,
                              bottom: 0,
                              width: '1px',
                              background: 'rgba(0,0,0,0.1)',
                              pointerEvents: 'none',
                              zIndex: 5
                            }}></div>

                            <div className="chart-tooltip-dot" style={{
                              left: `${(activeChartPoint / 6) * 100}%`,
                              top: `${chartData[activeChartPoint].yPercent}%`,
                              background: '#fff',
                              border: '3px solid #10b981',
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              position: 'absolute',
                              pointerEvents: 'none',
                              zIndex: 10,
                              transform: 'translate(-50%, -50%)', /* Keep centered perfectly */
                              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)'
                            }}></div>

                            <div className="chart-tooltip" style={{
                              left: activeChartPoint > 4 ? `calc(${(activeChartPoint / 6) * 100}% - 140px)` : `calc(${(activeChartPoint / 6) * 100}% + 15px)`,
                              top: `${chartData[activeChartPoint].yPercent}%`,
                              position: 'absolute',
                              background: 'rgba(255, 255, 255, 0.95)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(0,0,0,0.06)',
                              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                              padding: '12px 16px',
                              borderRadius: '8px',
                              pointerEvents: 'none',
                              zIndex: 20,
                              minWidth: '130px',
                              opacity: 1, /* OVERRIDE CSS INVISIBILITY */
                              transform: 'translateY(-50%)' /* Center vertically with dot */
                            }}>
                              <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '4px', fontWeight: 500 }}>{chartData[activeChartPoint].month}</div>
                              <div style={{ color: '#0f766e', fontSize: '0.95rem', fontWeight: 600 }}>Revenue : {chartData[activeChartPoint].value}</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="x-axis">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>Mei</span>
                      <span>Jun</span>
                      <span>Jul</span>
                    </div>
                  </div>
                </div>

                {/* PIE CHART */}
                <div className="dashboard-panel">
                  <div className="panel-header">
                    <div className="panel-title">Sales by Category</div>
                  </div>

                  <div className="dummy-pie-chart-container">
                    <div className="pie-chart-wrapper">
                      <div className="pie-chart"></div>
                      <div className="pie-chart-total">
                        <span className="pie-chart-total-value">12.4K</span>
                        <span className="pie-chart-total-label">Orders</span>
                      </div>
                    </div>
                    <div className="pie-legend">
                      <div className="legend-item">
                        <div className="legend-color-label">
                          <div className="legend-color" style={{ background: '#021e18' }}></div>
                          <span>Fashion</span>
                        </div>
                        <span className="legend-percent">32%</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color-label">
                          <div className="legend-color" style={{ background: '#f59e0b' }}></div>
                          <span>Kuliner</span>
                        </div>
                        <span className="legend-percent">28%</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color-label">
                          <div className="legend-color" style={{ background: '#4f46e5' }}></div>
                          <span>Kecantikan</span>
                        </div>
                        <span className="legend-percent">28%</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color-label">
                          <div className="legend-color" style={{ background: '#ef4444' }}></div>
                          <span>Lainnya</span>
                        </div>
                        <span className="legend-percent">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LISTS */}
              <div className="lists-grid animate-delay-5">
                <div className="dashboard-panel">
                  <div className="panel-header">
                    <div className="panel-title">Onboarding Review (WhatsApp AI)</div>
                  </div>
                  <div className="list-wrapper">

                    <div className="list-item">
                      <div className="list-item-left">
                        <div className="item-avatar">B</div>
                        <div className="item-info">
                          <div className="item-title">Batik Permata Ratu</div>
                          <div className="item-subtitle">Fashion · Yogyakarta</div>
                        </div>
                      </div>
                      <div className="list-item-right">
                        <span className="status-badge status-pending">In Review</span>
                      </div>
                    </div>

                    <div className="list-item">
                      <div className="list-item-left">
                        <div className="item-avatar" style={{ background: '#fef2f2', color: '#b91c1c' }}>W</div>
                        <div className="item-info">
                          <div className="item-title">Warung Organik Pak Budi</div>
                          <div className="item-subtitle">Kuliner · Solo</div>
                        </div>
                      </div>
                      <div className="list-item-right">
                        <span className="status-badge status-revision">Action Req</span>
                      </div>
                    </div>

                    <div className="list-item">
                      <div className="list-item-left">
                        <div className="item-avatar" style={{ background: '#dcfce7', color: '#15803d' }}>H</div>
                        <div className="item-info">
                          <div className="item-title">Herbal Nusantara</div>
                          <div className="item-subtitle">Herbal · Semarang</div>
                        </div>
                      </div>
                      <div className="list-item-right">
                        <span className="status-badge status-success">Approved</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* TIMELINE ACTIVITY FEED */}
                <div className="dashboard-panel">
                  <div className="panel-header">
                    <div className="panel-title">Live Transaction Feed</div>
                  </div>

                  <div className="timeline-wrapper">

                    <div className="timeline-item">
                      <div className="timeline-line"></div>
                      <div className="timeline-dot processing"></div>
                      <div className="timeline-content">
                        <div className="timeline-info">
                          <div className="timeline-title">Payment Processed <span>#ORD-8821</span></div>
                          <div className="timeline-time">Batik Tulis Motif Parang · 2 mins ago</div>
                        </div>
                        <div className="timeline-right">Rp 285.000</div>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-line"></div>
                      <div className="timeline-dot success"></div>
                      <div className="timeline-content">
                        <div className="timeline-info">
                          <div className="timeline-title">Order Completed <span>#ORD-8820</span></div>
                          <div className="timeline-time">Kopi Arabica Flores · 15 mins ago</div>
                        </div>
                        <div className="timeline-right">Rp 125.000</div>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-line"></div>
                      <div className="timeline-dot warning"></div>
                      <div className="timeline-content">
                        <div className="timeline-info">
                          <div className="timeline-title">Verification Pending <span>#ORD-8819</span></div>
                          <div className="timeline-time">Minyak Kelapa VCO · 45 mins ago</div>
                        </div>
                        <div className="timeline-right">Rp 89.000</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </>
          ) : activeView === 'merchants' ? (
            <div className="merchants-view animate-fade-in">
              <div className="merchant-header-section">
                <div>
                  <h2 className="merchant-page-title">Manajemen Merchant</h2>
                  <p className="merchant-page-subtitle">Verifikasi & kelola pendaftaran merchant via WhatsApp AI</p>
                </div>
                <div className="merchant-header-actions">
                  <button className="btn-mass-reject">Tolak Massal</button>
                  <button className="btn-mass-approve"><CheckCircle2 size={16} /> Setujui Massal</button>
                </div>
              </div>

              {/* Status Filter Cards */}
              <div className="merchant-status-cards">
                <div
                  className={`m-status-card ${activeMerchantTab === 'menunggu' ? 'active-yellow' : ''}`}
                  onClick={() => setActiveMerchantTab('menunggu')}
                >
                  <div className="m-card-number text-yellow">14</div>
                  <div className="m-card-label text-yellow">Menunggu</div>
                </div>
                <div
                  className={`m-status-card ${activeMerchantTab === 'revisi' ? 'active-red' : ''}`}
                  onClick={() => setActiveMerchantTab('revisi')}
                >
                  <div className="m-card-number text-red">3</div>
                  <div className="m-card-label text-red">Perlu Revisi</div>
                </div>
                <div
                  className={`m-status-card ${activeMerchantTab === 'disetujui' ? 'active-green' : ''}`}
                  onClick={() => setActiveMerchantTab('disetujui')}
                >
                  <div className="m-card-number text-green">28</div>
                  <div className="m-card-label text-green">Disetujui</div>
                </div>
                <div
                  className={`m-status-card ${activeMerchantTab === 'semua' ? 'active-neutral' : ''}`}
                  onClick={() => setActiveMerchantTab('semua')}
                >
                  <div className="m-card-number">2847</div>
                  <div className="m-card-label">Total Merchant</div>
                </div>
              </div>

              {/* Merchant Table */}
              <div className="merchant-table-container">
                <table className="merchant-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}><input type="checkbox" /></th>
                      <th>ID</th>
                      <th>Nama Usaha</th>
                      <th>Pemilik</th>
                      <th>Kategori</th>
                      <th>Kota</th>
                      <th>Kelengkapan</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {merchantData.map(m => (
                      <tr key={m.id}>
                        <td><input type="checkbox" /></td>
                        <td className="m-id-cell">{m.id}</td>
                        <td>
                          <div className="m-name">{m.name}</div>
                          <div className="m-date">{m.date}</div>
                        </td>
                        <td>
                          <div className="m-owner">{m.owner}</div>
                          <div className="m-phone" style={{ fontFamily: 'monospace' }}>{m.phone}</div>
                        </td>
                        <td>
                          <span className="m-category-badge">{m.category}</span>
                        </td>
                        <td className="m-city">{m.city}</td>
                        <td>
                          <div className="m-completeness-wrapper">
                            <div className="m-progress-bar">
                              <div className={`m-progress-fill ${m.completeness === 100 ? 'bg-green' : m.completeness >= 90 ? 'bg-green-dark' : 'bg-orange'}`} style={{ width: `${m.completeness}%` }}></div>
                            </div>
                            <span className="m-completeness-text">{m.completeness}%</span>
                          </div>
                        </td>
                        <td>
                          <span className={`m-status-badge ${m.status.toLowerCase()}`}>{m.status}</span>
                        </td>
                        <td>
                          <div className="m-action-btns">
                            <button className="btn-m-approve">Setujui</button>
                            <button className="btn-m-revise">Revisi</button>
                            <button className="btn-m-view" onClick={() => setSelectedMerchantChat(m.id)}><Eye size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Chat Preview Section */}
              {selectedMerchantChat && (
                <div className="chat-preview-section">
                  <div className="chat-preview-header-title">
                    <Bot size={18} color="#94a3b8" />
                    <h3>Preview Percakapan WhatsApp AI: {merchantData.find(m => m.id === selectedMerchantChat)?.name || 'Batik Permata Ratu'}</h3>
                  </div>

                  <div className="wa-chat-container">
                    <div className="wa-chat-header">
                      <span>AI Merchant Onboarding - Saudagar UII</span>
                    </div>
                    <div className="wa-chat-body">
                      <div className="chat-bubble incoming">
                        <span className="chat-sender">Saudagar UII AI</span>
                        <div className="chat-text">
                          Halo! Selamat datang di Saudagar UII Marketplace 🎉<br />
                          Saya AI asisten untuk membantu registrasi toko Anda.<br />
                          Boleh saya tau nama usaha Anda?
                        </div>
                        <span className="chat-meta">10:41</span>
                      </div>

                      <div className="chat-bubble outgoing">
                        <div className="chat-text">
                          {merchantData.find(m => m.id === selectedMerchantChat)?.name || 'Batik Permata Ratu'}
                        </div>
                        <span className="chat-meta">10:42 <span className="chat-ticks read">✓✓</span></span>
                      </div>

                      <div className="chat-bubble incoming">
                        <span className="chat-sender">Saudagar UII AI</span>
                        <div className="chat-text">
                          Bagus! "{merchantData.find(m => m.id === selectedMerchantChat)?.name || 'Batik Permata Ratu'}", nama yang indah 🌸<br />
                          Sekarang, boleh cerita sedikit tentang produk yang Anda jual?
                        </div>
                        <span className="chat-meta">10:42</span>
                      </div>

                      <div className="chat-bubble outgoing">
                        <div className="chat-text">
                          kami jual batik tulis asli jogja, ada berbagai motif, harga mulai 150rb sampe 500rb
                        </div>
                        <span className="chat-meta">10:43 <span className="chat-ticks read">✓✓</span></span>
                      </div>

                      <div className="chat-bubble incoming">
                        <span className="chat-sender">Saudagar UII AI</span>
                        <div className="chat-text">
                          Sip! Batik tulis asli Yogyakarta dengan rentang harga Rp 150.000 - Rp 500.000. Sudah saya catat ✅<br />Bisa kirimkan foto toko atau foto salah satu produk unggulan Anda?
                        </div>
                        <span className="chat-meta">10:43</span>
                      </div>

                      <div className="chat-bubble outgoing has-image">
                        <div className="chat-image-container">
                          <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Batik product" />
                        </div>
                        <div className="chat-text">
                          ini foto motif mega mendung best seller di toko kami kak
                        </div>
                        <span className="chat-meta">10:45 <span className="chat-ticks read">✓✓</span></span>
                      </div>

                      <div className="chat-bubble incoming">
                        <span className="chat-sender">Saudagar UII AI</span>
                        <div className="chat-text">
                          Wah, motifnya sangat rapi dan warnanya cerah! 😍<br /><br />
                          Langkah terakhir, mohon ketikkan alamat lengkap toko atau lokasi pengiriman produk Anda ya.
                        </div>
                        <span className="chat-meta">10:45</span>
                      </div>

                      <div className="chat-bubble outgoing">
                        <div className="chat-text">
                          Jalan Malioboro No. 123, Kelurahan Sosromenduran, Gedong Tengen, Kota Yogyakarta, DIY 55271
                        </div>
                        <span className="chat-meta">10:46 <span className="chat-ticks read">✓✓</span></span>
                      </div>

                      <div className="chat-bubble incoming">
                        <span className="chat-sender">Saudagar UII AI</span>
                        <div className="chat-text">
                          Mantap! Alamat sudah kami verifikasi.<br /><br />
                          Data Anda sedang kami proses ke sistem. Mohon tunggu maksimal 1x24 jam untuk persetujuan dari Admin Saudagar UII ya. Nanti Anda akan mendapat notifikasi WhatsApp jika toko sudah aktif. Terimakasih! 🙏
                        </div>
                        <span className="chat-meta">10:46</span>
                      </div>

                      <div className="chat-bubble outgoing">
                        <div className="chat-text">
                          baik terimakasih bantuannya kak
                        </div>
                        <span className="chat-meta">10:48 <span className="chat-ticks read">✓✓</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : activeView === 'products' ? (
            <div className="products-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>Review Produk UMKM</h2>
                  <p>Produk dikirim merchant via WhatsApp, diproses AI sebelum review admin</p>
                </div>
              </div>

              {/* Status Filter Tabs */}
              <div className="product-filter-tabs">
                <button className={`p-tab ${activeProductTab === 'menunggu' ? 'active-green' : ''}`} onClick={() => setActiveProductTab('menunggu')}>
                  Menunggu Review <span className="p-badge">37</span>
                </button>
                <button className={`p-tab ${activeProductTab === 'revisi' ? 'active-yellow' : ''}`} onClick={() => setActiveProductTab('revisi')}>
                  Perlu Revisi <span className="p-badge">8</span>
                </button>
                <button className={`p-tab ${activeProductTab === 'disetujui' ? 'active-blue' : ''}`} onClick={() => setActiveProductTab('disetujui')}>
                  Disetujui <span className="p-badge">12430</span>
                </button>
                <button className={`p-tab ${activeProductTab === 'ditolak' ? 'active-red' : ''}`} onClick={() => setActiveProductTab('ditolak')}>
                  Ditolak <span className="p-badge">124</span>
                </button>
              </div>

              {/* Product List */}
              <div className="product-review-list">
                {(() => {
                  const filteredProducts = productData.filter(prod => {
                    if (activeProductTab === 'menunggu') return prod.status === 'Menunggu';
                    if (activeProductTab === 'revisi') return prod.status === 'Revisi';
                    if (activeProductTab === 'disetujui') return prod.status === 'Disetujui';
                    if (activeProductTab === 'ditolak') return prod.status === 'Ditolak';
                    return true;
                  });

                  if (filteredProducts.length === 0) {
                    return (
                      <div className="empty-state-container">
                        <Box size={48} color="#cbd5e1" strokeWidth={1.5} />
                        <h4>Tidak ada produk</h4>
                        <p>Oopss... belum ada produk dengan kategori <strong>{activeProductTab === 'menunggu' ? 'Menunggu Review' : activeProductTab === 'revisi' ? 'Perlu Revisi' : activeProductTab === 'disetujui' ? 'Disetujui' : 'Ditolak'}</strong> saat ini. Enjoy life..!</p>
                      </div>
                    );
                  }

                  return filteredProducts.map((prod) => (
                    <div key={prod.id} className="product-review-card">
                    <div className="pr-image-wrapper">
                      <img src={prod.image} alt={prod.name} className="pr-image" />
                      <div className={`pr-ai-score ${prod.aiScore >= 80 ? 'score-high' : 'score-low'}`}>
                        AI {prod.aiScore}
                      </div>
                    </div>

                    <div className="pr-content">
                      <div className="pr-header-row">
                        <div className="pr-title-group">
                          <h4 className="pr-title">{prod.name}</h4>
                          <div className="pr-merchant-info">{prod.merchant} · {prod.category}</div>
                        </div>
                        <div className={`pr-status-badge ${prod.status.toLowerCase()}`}>
                          {prod.status}
                        </div>
                      </div>

                      <div className="pr-meta-row">
                        <span className="pr-price">{prod.price}</span>
                        <span className="pr-id">{prod.id}</span>
                        <span className="pr-upload">{prod.uploadMethod} · {prod.date}</span>
                      </div>

                      <div className="pr-ai-checks">
                        {prod.aiChecks.map((check, idx) => (
                          <span key={idx} className="pr-check-pill">
                            <Check size={12} strokeWidth={3} /> {check}
                          </span>
                        ))}
                      </div>

                      <div className="pr-actions">
                        <button className="pr-btn-approve"><Check size={14} strokeWidth={2.5} /> Setujui</button>
                        <button className="pr-btn-revise"><RotateCcw size={14} strokeWidth={2.5} /> Minta Revisi</button>
                        <button className="pr-btn-reject"><X size={14} strokeWidth={2.5} /> Tolak</button>
                        <button className="pr-btn-preview"><Eye size={14} strokeWidth={2.5} /> Preview</button>
                        <button className="pr-btn-edit"><Edit2 size={14} strokeWidth={2.5} /> Edit</button>
                      </div>
                    </div>
                  </div>
                  ));
                })()}
              </div>
            </div>
          ) : activeView === 'settings' ? (
            <div className="settings-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>Pengaturan Sistem</h2>
                  <p>Konfigurasi platform & integrasi</p>
                </div>
              </div>

              <div className="settings-grid">

                {/* SETTINGS CARD 1 */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon bg-purple-light"><Bot size={18} color="#9333ea" /></div>
                    <h3>WhatsApp AI Integration</h3>
                  </div>
                  <div className="settings-body">
                    <div className="settings-row">
                      <span className="settings-label">Nomor WhatsApp AI</span>
                      <span className="settings-value">0811-SAUDAGAR</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">API Key WA Business</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="settings-value" style={{ fontFamily: showApiKey ? 'monospace' : 'inherit', letterSpacing: showApiKey ? '0' : '2px' }}>
                          {showApiKey ? 'sk_live_9f8d7c6b5a4z3y2x' : '••••••••••••••••'}
                        </span>
                        <button
                          onClick={() => setShowApiKey(!showApiKey)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', color: '#94a3b8' }}
                        >
                          {showApiKey ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Model AI</span>
                      <span className="settings-value highlight">GPT-4o + Custom Fine-tune</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Bahasa Utama</span>
                      <span className="settings-value">Bahasa Indonesia</span>
                    </div>
                  </div>
                  <div className="settings-footer">
                    <button className="btn-edit-settings">Edit Pengaturan</button>
                  </div>
                </div>

                {/* SETTINGS CARD 2 */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon bg-blue-light"><Smartphone size={18} color="#2563eb" /></div>
                    <h3>Payment Gateway</h3>
                  </div>
                  <div className="settings-body">
                    <div className="settings-row">
                      <span className="settings-label">QRIS Provider</span>
                      <span className="settings-value">DANA / Xendit</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Virtual Account</span>
                      <span className="settings-value">BCA, Mandiri, BNI, BRI</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">E-Wallet</span>
                      <span className="settings-value">GoPay, OVO, Dana, ShopeePay</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Settlement</span>
                      <span className="settings-value highlight-green">T+1 Hari Kerja</span>
                    </div>
                  </div>
                  <div className="settings-footer">
                    <button className="btn-edit-settings">Edit Pengaturan</button>
                  </div>
                </div>

                {/* SETTINGS CARD 3 */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon bg-orange-light"><Package size={18} color="#ea580c" /></div>
                    <h3>Logistik & Pengiriman</h3>
                  </div>
                  <div className="settings-body">
                    <div className="settings-row">
                      <span className="settings-label">Agregator</span>
                      <span className="settings-value">Shipper / Biteship</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Kurir Aktif</span>
                      <span className="settings-value">JNE, J&T, Sicepat, Anteraja, Gosend</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Tracking Otomatis</span>
                      <span className="settings-value badge-active">Aktif</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Pickup Request</span>
                      <span className="settings-value badge-active">Aktif</span>
                    </div>
                  </div>
                  <div className="settings-footer">
                    <button className="btn-edit-settings">Edit Pengaturan</button>
                  </div>
                </div>

                {/* SETTINGS CARD 4 */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon bg-red-light"><CheckCircle2 size={18} color="#ef4444" /></div>
                    <h3>Keamanan</h3>
                  </div>
                  <div className="settings-body">
                    <div className="settings-row">
                      <span className="settings-label">2FA Admin</span>
                      <span className="settings-value badge-active">Aktif (TOTP)</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Session Timeout</span>
                      <span className="settings-value">8 jam</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">IP Whitelist</span>
                      <span className="settings-value badge-active">Aktif (3 IP terdaftar)</span>
                    </div>
                    <div className="settings-row">
                      <span className="settings-label">Audit Log</span>
                      <span className="settings-value badge-active">Aktif - 90 hari retensi</span>
                    </div>
                  </div>
                  <div className="settings-footer">
                    <button className="btn-edit-settings">Edit Pengaturan</button>
                  </div>
                </div>

              </div>
            </div>
          ) : null}

        </div>
      </main>
    </div>
  );
}
