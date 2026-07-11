import React, { useState, useRef } from 'react';
import {
  Search, Bell, LayoutDashboard, Store, Box, ShoppingCart, Heart,
  Target, Bot, Smartphone, BarChart2, Settings, Menu, TrendingUp, Package, Users, Plus, Download, Send, CheckCircle2, Eye, EyeOff,
  Check, X, RotateCcw, Edit2, Clock, Truck, TrendingDown, Banknote, Trophy, UserPlus, Activity, Mail, MessageCircle, Gift, Star, RefreshCw, Zap, Moon, Sparkles, BellRing, Camera, PenTool, Shield, AlertTriangle, Ban, MessageSquare, Image, AlignLeft, Rocket, ImagePlus, Sun, Contrast, Maximize2, Crop, CloudLightning, Rotate3D, MicOff, SunDim, Focus, Eraser, CheckSquare, Gamepad2, Coins, Wallet, CreditCard, MonitorSmartphone, Diamond, Lightbulb, Brain
} from 'lucide-react';
import '../AdminDashboard.css';

export default function AdminDashboard() {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Navigation State
  const [activeView, setActiveView] = useState('overview');
  const [activeAIToolTab, setActiveAIToolTab] = useState('photo');

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

  const [orderCurrentPage, setOrderCurrentPage] = useState(1);
  const orderItemsPerPage = 50;

  const orderData = Array.from({ length: 200 }).map((_, i) => {
    const statuses = ['Dikirim', 'Dibayar', 'Diproses', 'Selesai', 'Dibatalkan', 'Menunggu Bayar'];
    const buyers = ['Andi Wijaya', 'Siti Rahayu', 'Budi Santoso', 'Dewi Kusuma', 'Rizal Hakim', 'Joko Susilo', 'Rina Wati'];
    const products = ['Batik Tulis Motif Parang', 'Kopi Arabica Flores', 'Minyak Kelapa VCO', 'Tas Rajut Handmade', 'Sambal Matah Bali'];
    const merchants = ['Batik Sekar Arum', 'Kopi Nusantara', 'Herbal Sejati', 'Rajut Cantik', 'Dapur Bu Ketut'];
    
    return {
      id: `#ORD-${10000 - i}`,
      buyer: buyers[i % buyers.length],
      product: products[i % products.length],
      merchant: merchants[i % merchants.length],
      total: `Rp ${((i % 10) + 1) * 45}.000`,
      status: statuses[i % statuses.length],
      date: `10 Jul 2024`
    };
  });

  const totalOrderPages = Math.ceil(orderData.length / orderItemsPerPage);
  const paginatedOrders = orderData.slice((orderCurrentPage - 1) * orderItemsPerPage, orderCurrentPage * orderItemsPerPage);

  const affiliateData = [
    { rank: 1, name: 'Agung Prasetyo', code: 'AGP-2024', clicks: '4.521', orders: 312, omzet: 'Rp 42.8 Jt', komisi: 'Rp 6.4 Jt', convRate: '6.9%' },
    { rank: 2, name: 'Maya Indira', code: 'MAY-2024', clicks: '3.210', orders: 241, omzet: 'Rp 31.2 Jt', komisi: 'Rp 4.7 Jt', convRate: '7.5%' },
    { rank: 3, name: 'Rian Mahfudz', code: 'RMH-2024', clicks: '2.890', orders: 198, omzet: 'Rp 27.6 Jt', komisi: 'Rp 4.1 Jt', convRate: '6.8%' },
    { rank: 4, name: 'Sari Dewi Pratiwi', code: 'SDP-2024', clicks: '2.340', orders: 167, omzet: 'Rp 22.1 Jt', komisi: 'Rp 3.3 Jt', convRate: '7.1%' },
    { rank: 5, name: 'Hendra Gunawan', code: 'HGN-2024', clicks: '1.980', orders: 134, omzet: 'Rp 18.7 Jt', komisi: 'Rp 2.8 Jt', convRate: '6.7%' },
  ];

  const affiliateChartData = [
    { day: 'Sen', clicks: 420, conv: 35, clickH: '40%', convH: '10%' },
    { day: 'Sel', clicks: 580, conv: 52, clickH: '50%', convH: '15%' },
    { day: 'Rab', clicks: 610, conv: 64, clickH: '60%', convH: '18%' },
    { day: 'Kam', clicks: 490, conv: 41, clickH: '45%', convH: '12%' },
    { day: 'Jum', clicks: 820, conv: 75, clickH: '75%', convH: '20%' },
    { day: 'Sab', clicks: 1050, conv: 98, clickH: '90%', convH: '25%' },
    { day: 'Min', clicks: 710, conv: 60, clickH: '65%', convH: '15%' },
  ];

  const customerData = [
    { id: 'CUST-001', name: 'Ahmad Fauzi', email: 'ahmad.f@gmail.com', phone: '0812-3456-7890', orders: 12, spent: 'Rp 1.450.000', lastActive: '2 jam lalu', status: 'Aktif', segment: 'Gold' },
    { id: 'CUST-002', name: 'Siti Aminah', email: 'sitia.mina@yahoo.com', phone: '0856-7890-1234', orders: 5, spent: 'Rp 650.000', lastActive: '5 jam lalu', status: 'Aktif', segment: 'Silver' },
    { id: 'CUST-003', name: 'Budi Prakoso', email: 'bprakoso@perusahaan.co.id', phone: '0811-2233-4455', orders: 1, spent: 'Rp 120.000', lastActive: '1 hari lalu', status: 'Tidak Aktif', segment: 'Bronze' },
    { id: 'CUST-004', name: 'Ratna Sari', email: 'ratnasari.jogja@gmail.com', phone: '0878-1122-3344', orders: 8, spent: 'Rp 1.100.000', lastActive: 'Baru saja', status: 'Aktif', segment: 'Gold' },
    { id: 'CUST-005', name: 'Dwi Saputra', email: 'dwisaputra99@gmail.com', phone: '0899-8877-6655', orders: 3, spent: 'Rp 340.000', lastActive: '3 hari lalu', status: 'Aktif', segment: 'Bronze' },
    { id: 'CUST-006', name: 'Mega Wati', email: 'megaw.kopi@gmail.com', phone: '0813-5566-7788', orders: 24, spent: 'Rp 3.200.000', lastActive: '30 menit lalu', status: 'Aktif', segment: 'Platinum' },
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
          <a href="#" className={`nav-item ${activeView === 'orders' ? 'active' : ''}`} onClick={() => setActiveView('orders')}>
            <div className="nav-item-left">
              <ShoppingCart size={20} className="nav-icon" />
              <span>Pesanan</span>
            </div>
            <span className="nav-badge">8</span>
          </a>
          <a href="#" className={`nav-item ${activeView === 'customers' ? 'active' : ''}`} onClick={() => setActiveView('customers')}>
            <div className="nav-item-left">
              <Users size={20} className="nav-icon" />
              <span>Customers</span>
            </div>
          </a>

          <div className="nav-divider"></div>

          <a href="#" className={`nav-item ${activeView === 'affiliate' ? 'active' : ''}`} onClick={() => setActiveView('affiliate')}>
            <div className="nav-item-left">
              <Heart size={20} className="nav-icon" />
              <span>Affiliate</span>
            </div>
          </a>
          <a href="#" className={`nav-item ${activeView === 'crm' ? 'active' : ''}`} onClick={() => setActiveView('crm')}>
            <div className="nav-item-left">
              <Target size={20} className="nav-icon" />
              <span>CRM & Marketing</span>
            </div>
          </a>
          <a href="#" className={`nav-item ${activeView === 'aitools' ? 'active' : ''}`} onClick={() => setActiveView('aitools')}>
            <div className="nav-item-left">
              <Bot size={20} className="nav-icon" />
              <span>AI Tools Suite</span>
            </div>
          </a>
          <a href="#" className={`nav-item ${activeView === 'digital' ? 'active' : ''}`} onClick={() => setActiveView('digital')}>
            <div className="nav-item-left">
              <Smartphone size={20} className="nav-icon" />
              <span>Produk Digital</span>
            </div>
          </a>
          <a href="#" className={`nav-item ${activeView === 'bi' ? 'active' : ''}`} onClick={() => setActiveView('bi')}>
            <div className="nav-item-left">
              <BarChart2 size={20} className="nav-icon" />
              <span>Business Intelligence</span>
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
                  <div className="kpi-bg-icon"><Banknote size={110} color="#d97706" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Store size={110} color="#4f46e5" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Package size={110} color="#ea580c" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Users size={110} color="#9333ea" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><ShoppingCart size={110} color="#2563eb" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Target size={110} color="#db2777" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Smartphone size={110} color="#0284c7" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><BarChart2 size={110} color="#0d9488" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Clock size={110} color="#eab308" strokeWidth={1} /></div>
                  <div className="m-card-number text-yellow" style={{position: 'relative', zIndex: 1}}>14</div>
                  <div className="m-card-label text-yellow" style={{position: 'relative', zIndex: 1}}>Menunggu</div>
                </div>
                <div
                  className={`m-status-card ${activeMerchantTab === 'revisi' ? 'active-red' : ''}`}
                  onClick={() => setActiveMerchantTab('revisi')}
                >
                  <div className="kpi-bg-icon"><RotateCcw size={110} color="#ef4444" strokeWidth={1} /></div>
                  <div className="m-card-number text-red" style={{position: 'relative', zIndex: 1}}>3</div>
                  <div className="m-card-label text-red" style={{position: 'relative', zIndex: 1}}>Perlu Revisi</div>
                </div>
                <div
                  className={`m-status-card ${activeMerchantTab === 'disetujui' ? 'active-green' : ''}`}
                  onClick={() => setActiveMerchantTab('disetujui')}
                >
                  <div className="kpi-bg-icon"><CheckCircle2 size={110} color="#10b981" strokeWidth={1} /></div>
                  <div className="m-card-number text-green" style={{position: 'relative', zIndex: 1}}>28</div>
                  <div className="m-card-label text-green" style={{position: 'relative', zIndex: 1}}>Disetujui</div>
                </div>
                <div
                  className={`m-status-card ${activeMerchantTab === 'semua' ? 'active-neutral' : ''}`}
                  onClick={() => setActiveMerchantTab('semua')}
                >
                  <div className="kpi-bg-icon"><Store size={110} color="#94a3b8" strokeWidth={1} /></div>
                  <div className="m-card-number" style={{position: 'relative', zIndex: 1}}>2847</div>
                  <div className="m-card-label" style={{position: 'relative', zIndex: 1}}>Total Merchant</div>
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
                        <p>Oopss... belum ada produk dengan kategori <strong>{activeProductTab === 'menunggu' ? 'Menunggu Review' : activeProductTab === 'revisi' ? 'Perlu Revisi' : activeProductTab === 'disetujui' ? 'Disetujui' : 'Ditolak'}</strong> saat ini. Enjoy your day..!</p>
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
          ) : activeView === 'orders' ? (
            <div className="orders-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>Manajemen Pesanan</h2>
                  <p>Pantau dan kelola seluruh transaksi marketplace</p>
                </div>
              </div>

              {/* Order KPI Cards */}
              <div className="order-kpi-grid">
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Clock size={110} color="#d97706" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-yellow-light">
                    <Clock size={22} color="#d97706" />
                  </div>
                  <div className="kpi-content">
                    <h3>12</h3>
                    <p>Menunggu Bayar</p>
                  </div>
                  <div className="kpi-trend trend-down">
                    <TrendingDown size={14} /> <span>2%</span>
                  </div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Package size={110} color="#059669" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-green-light">
                    <Package size={22} color="#059669" />
                  </div>
                  <div className="kpi-content">
                    <h3>47</h3>
                    <p>Dibayar/Diproses</p>
                  </div>
                  <div className="kpi-trend trend-up">
                    <TrendingUp size={14} /> <span>14%</span>
                  </div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Truck size={110} color="#2563eb" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-blue-light">
                    <Truck size={22} color="#2563eb" />
                  </div>
                  <div className="kpi-content">
                    <h3>128</h3>
                    <p>Dikirim</p>
                  </div>
                  <div className="kpi-trend trend-up">
                    <TrendingUp size={14} /> <span>5%</span>
                  </div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><CheckCircle2 size={110} color="#10b981" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-emerald-light">
                    <CheckCircle2 size={22} color="#10b981" />
                  </div>
                  <div className="kpi-content">
                    <h3>89</h3>
                    <p>Selesai Hari Ini</p>
                  </div>
                  <div className="kpi-trend trend-up">
                    <TrendingUp size={14} /> <span>24%</span>
                  </div>
                </div>
              </div>

              {/* Toolbar */}
              <div className="order-toolbar-container">
                <div className="order-search-box">
                  <Search size={16} color="#94a3b8" />
                  <input type="text" placeholder="Cari pesanan, pembeli, produk..." />
                </div>
                <select className="order-filter-dropdown">
                  <option>Semua Status</option>
                  <option>Menunggu Bayar</option>
                  <option>Dibayar</option>
                  <option>Diproses</option>
                  <option>Dikirim</option>
                  <option>Selesai</option>
                  <option>Dibatalkan</option>
                </select>
              </div>

              {/* Table */}
              <div className="order-table-container">
                <table className="order-table">
                  <thead>
                    <tr>
                      <th>ID Pesanan</th>
                      <th>Pembeli</th>
                      <th>Produk</th>
                      <th>Merchant</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Waktu</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedOrders.map((order, i) => (
                      <tr key={i}>
                        <td className="o-id">{order.id}</td>
                        <td className="o-buyer">{order.buyer}</td>
                        <td className="o-product">{order.product}</td>
                        <td className="o-merchant">{order.merchant}</td>
                        <td className="o-total">{order.total}</td>
                        <td>
                          <span className={`o-badge badge-${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="o-date">{order.date}</td>
                        <td>
                          <button className="btn-o-detail">Detail</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination-container">
                  <span className="pagination-info">Menampilkan {(orderCurrentPage - 1) * orderItemsPerPage + 1} - {Math.min(orderCurrentPage * orderItemsPerPage, orderData.length)} dari {orderData.length} pesanan</span>
                  <div className="pagination-controls">
                    <button 
                      disabled={orderCurrentPage === 1} 
                      onClick={() => setOrderCurrentPage(prev => Math.max(prev - 1, 1))}
                      className="btn-page"
                    >
                      Prev
                    </button>
                    {Array.from({ length: totalOrderPages }).map((_, idx) => (
                      <button 
                        key={idx} 
                        className={`btn-page ${orderCurrentPage === idx + 1 ? 'active' : ''}`}
                        onClick={() => setOrderCurrentPage(idx + 1)}
                      >
                        {idx + 1}
                      </button>
                    ))}
                    <button 
                      disabled={orderCurrentPage === totalOrderPages} 
                      onClick={() => setOrderCurrentPage(prev => Math.min(prev + 1, totalOrderPages))}
                      className="btn-page"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : activeView === 'customers' ? (
            <div className="customers-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>Customer Database</h2>
                  <p>Kelola data pelanggan & analitik perilaku pengguna</p>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                  <button className="btn-secondary" style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', border: '1px solid #e2e8f0', background: 'white'}}>
                    <Download size={16} /> Export Data
                  </button>
                  <button className="btn-primary" style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', background: '#047857', color: 'white', border: 'none', fontWeight: '600', cursor: 'pointer'}}>
                    <UserPlus size={16} /> Tambah Customer
                  </button>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="order-kpi-grid">
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Users size={110} color="#3b82f6" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-blue-light"><Users size={22} color="#3b82f6" /></div>
                  <div className="kpi-content">
                    <h3>12,450</h3>
                    <p>Total Customers</p>
                    <span className="kpi-subtext">Terdaftar di platform</span>
                  </div>
                  <div className="kpi-trend trend-up"><TrendingUp size={14} /> <span>14.5%</span></div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Activity size={110} color="#10b981" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-emerald-light"><Activity size={22} color="#10b981" /></div>
                  <div className="kpi-content">
                    <h3>4,210</h3>
                    <p>Active Users</p>
                    <span className="kpi-subtext">Dalam 30 hari terakhir</span>
                  </div>
                  <div className="kpi-trend trend-up"><TrendingUp size={14} /> <span>5.2%</span></div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><ShoppingCart size={110} color="#d97706" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-yellow-light"><ShoppingCart size={22} color="#d97706" /></div>
                  <div className="kpi-content">
                    <h3>Rp 145 Rb</h3>
                    <p>Avg. Order Value</p>
                    <span className="kpi-subtext">Rata-rata belanja</span>
                  </div>
                  <div className="kpi-trend trend-up"><TrendingUp size={14} /> <span>2.1%</span></div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><UserPlus size={110} color="#8b5cf6" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-purple-light"><UserPlus size={22} color="#8b5cf6" /></div>
                  <div className="kpi-content">
                    <h3>342</h3>
                    <p>New Signups</p>
                    <span className="kpi-subtext">Minggu ini</span>
                  </div>
                  <div className="kpi-trend trend-down"><TrendingDown size={14} /> <span>1.5%</span></div>
                </div>
              </div>

              {/* Customers Table */}
              <div className="affiliate-table-card" style={{marginTop: '1.5rem'}}>
                <div className="card-header" style={{display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                  <h3 className="card-title" style={{margin: 0}}><Users size={18} color="#047857" /> Data Pelanggan</h3>
                  <div className="table-search" style={{position: 'relative'}}>
                    <Search size={16} color="#94a3b8" style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)'}} />
                    <input type="text" placeholder="Cari nama, email, hp..." style={{padding: '8px 16px 8px 36px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '250px', outline: 'none', fontFamily: 'inherit'}} />
                  </div>
                </div>
                
                <div className="order-table-container" style={{border: 'none', borderRadius: 0}}>
                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Pelanggan</th>
                        <th>Kontak</th>
                        <th>Status / Segment</th>
                        <th>Total Order</th>
                        <th>Total Belanja</th>
                        <th>Last Active</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerData.map((cust) => (
                        <tr key={cust.id}>
                          <td>
                            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                              <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#e0f2fe', color: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px'}}>
                                {cust.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <div style={{fontWeight: '700', color: '#0f172a'}}>{cust.name}</div>
                                <div style={{fontSize: '0.75rem', color: '#64748b', fontFamily: 'monospace'}}>{cust.id}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                              <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#334155'}}><Mail size={12} color="#94a3b8" /> {cust.email}</div>
                              <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#334155'}}><Smartphone size={12} color="#94a3b8" /> {cust.phone}</div>
                            </div>
                          </td>
                          <td>
                            <div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
                              <span className={`status-badge ${cust.status === 'Aktif' ? 'status-dikirim' : 'status-dibatalkan'}`}>{cust.status}</span>
                              <span style={{
                                padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700',
                                background: cust.segment === 'Platinum' ? '#1e293b' : cust.segment === 'Gold' ? '#fef08a' : cust.segment === 'Silver' ? '#f1f5f9' : '#ffedd5',
                                color: cust.segment === 'Platinum' ? '#f8fafc' : cust.segment === 'Gold' ? '#854d0e' : cust.segment === 'Silver' ? '#475569' : '#9a3412'
                              }}>
                                {cust.segment}
                              </span>
                            </div>
                          </td>
                          <td style={{fontWeight: '600', color: '#0f172a'}}>{cust.orders}</td>
                          <td style={{fontWeight: '700', color: '#047857'}}>{cust.spent}</td>
                          <td style={{fontSize: '0.85rem', color: '#64748b'}}>{cust.lastActive}</td>
                          <td><button className="btn-o-detail">Lihat Profil</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activeView === 'affiliate' ? (
            <div className="affiliate-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>Affiliate Management</h2>
                  <p>Kelola program affiliate & leaderboard</p>
                </div>
                <button className="btn-primary" style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', background: '#047857', color: 'white', border: 'none', fontWeight: '600', cursor: 'pointer'}}>
                  <Plus size={16} /> Tambah Affiliate
                </button>
              </div>

              {/* KPI Cards */}
              <div className="order-kpi-grid">
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Target size={110} color="#d97706" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-yellow-light"><Target size={22} color="#d97706" /></div>
                  <div className="kpi-content">
                    <h3>890</h3>
                    <p>Affiliate Aktif</p>
                    <span className="kpi-subtext">48 pending approval</span>
                  </div>
                  <div className="kpi-trend trend-up"><TrendingUp size={14} /> <span>12%</span></div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Smartphone size={110} color="#475569" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-slate-light"><Smartphone size={22} color="#475569" /></div>
                  <div className="kpi-content">
                    <h3>184.2K</h3>
                    <p>Total Klik (Bulan)</p>
                    <span className="kpi-subtext">via WA & link</span>
                  </div>
                  <div className="kpi-trend trend-up"><TrendingUp size={14} /> <span>23.4%</span></div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><BarChart2 size={110} color="#9333ea" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-purple-light"><BarChart2 size={22} color="#9333ea" /></div>
                  <div className="kpi-content">
                    <h3>7.2%</h3>
                    <p>Conversion Rate</p>
                    <span className="kpi-subtext">rata-rata semua affiliate</span>
                  </div>
                  <div className="kpi-trend trend-up"><TrendingUp size={14} /> <span>0.8%</span></div>
                </div>
                <div className="order-kpi-card">
                  <div className="kpi-bg-icon"><Banknote size={110} color="#10b981" strokeWidth={1} /></div>
                  <div className="kpi-icon-wrapper bg-emerald-light"><Banknote size={22} color="#10b981" /></div>
                  <div className="kpi-content">
                    <h3>Rp 48,3 Jt</h3>
                    <p>Komisi Terbayar</p>
                    <span className="kpi-subtext">bulan Juli 2024</span>
                  </div>
                  <div className="kpi-trend trend-up"><TrendingUp size={14} /> <span>18.1%</span></div>
                </div>
              </div>

              {/* Middle Section: Chart & Leaderboard */}
              <div className="affiliate-middle-grid">
                <div className="affiliate-chart-card">
                  <h3 className="card-title">Klik & Konversi 7 Hari Terakhir</h3>
                  <div className="mock-chart-container">
                    <div className="chart-grid-lines">
                      <div className="c-line"></div>
                      <div className="c-line"></div>
                      <div className="c-line"></div>
                      <div className="c-line"></div>
                    </div>
                    <div className="mock-chart-bars">
                      {affiliateChartData.map((data, idx) => (
                        <div className="mc-col group" key={data.day} style={{'--animation-order': idx}}>
                          <div className="mc-tooltip">
                            <div className="tt-row"><div className="tt-dot light"></div> <span>{data.clicks} Klik</span></div>
                            <div className="tt-row"><div className="tt-dot dark"></div> <span>{data.conv} Konversi</span></div>
                          </div>
                          <div className="mc-bar-light" style={{height: data.clickH}}></div>
                          <div className="mc-bar-dark" style={{height: data.convH}}></div>
                          <span className="mc-label">{data.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="affiliate-leaderboard-card">
                  <h3 className="card-title"><Trophy size={18} color="#d97706" /> Leaderboard</h3>
                  <div className="leaderboard-list">
                    {affiliateData.map((aff) => (
                      <div key={aff.code} className="leaderboard-item">
                        <div className={`lb-rank rank-${aff.rank}`}>{aff.rank}</div>
                        <div className="lb-info">
                          <h4>{aff.name}</h4>
                          <span>{aff.code}</span>
                        </div>
                        <div className="lb-stats">
                          <h4>{aff.komisi}</h4>
                          <span>{aff.orders} order</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="affiliate-table-card">
                <h3 className="card-title">Daftar Affiliate</h3>
                <div className="order-table-container" style={{border: 'none', borderRadius: 0}}>
                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Nama</th>
                        <th>Kode</th>
                        <th>Total Klik</th>
                        <th>Total Order</th>
                        <th>Omzet</th>
                        <th>Komisi</th>
                        <th>Conv. Rate</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {affiliateData.map((aff) => (
                        <tr key={aff.code}>
                          <td className={`a-rank rank-text-${aff.rank}`}>#{aff.rank}</td>
                          <td className="a-name">{aff.name}</td>
                          <td className="a-code">{aff.code}</td>
                          <td className="a-clicks">{aff.clicks}</td>
                          <td className="a-orders">{aff.orders}</td>
                          <td className="a-omzet">{aff.omzet}</td>
                          <td className="a-komisi">{aff.komisi}</td>
                          <td className="a-conv">{aff.convRate}</td>
                          <td><button className="btn-o-detail">Detail</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activeView === 'crm' ? (
            <div className="crm-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>CRM & Marketing</h2>
                  <p>Segmentasi pelanggan, broadcast WA, & automation</p>
                </div>
              </div>

              <div className="crm-top-grid">
                {/* Segmentasi Card */}
                <div className="crm-card">
                  <h3 className="crm-card-title">Segmentasi Pelanggan</h3>
                  <div className="seg-list">
                    <div className="seg-item">
                      <div className="seg-label"><div className="seg-dot" style={{background: '#047857'}}></div> Pembeli Aktif</div>
                      <div className="seg-bar-bg"><div className="seg-bar-fill" style={{background: '#047857', width: '85%'}}></div></div>
                      <div className="seg-value">12.840</div>
                    </div>
                    <div className="seg-item">
                      <div className="seg-label"><div className="seg-dot" style={{background: '#94a3b8'}}></div> Pembeli Tidak Aktif (&gt;60h)</div>
                      <div className="seg-bar-bg"><div className="seg-bar-fill" style={{background: '#94a3b8', width: '55%'}}></div></div>
                      <div className="seg-value">8.210</div>
                    </div>
                    <div className="seg-item">
                      <div className="seg-label"><div className="seg-dot" style={{background: '#d97706'}}></div> Repeat Customer</div>
                      <div className="seg-bar-bg"><div className="seg-bar-fill" style={{background: '#d97706', width: '65%'}}></div></div>
                      <div className="seg-value">9.430</div>
                    </div>
                    <div className="seg-item">
                      <div className="seg-label"><div className="seg-dot" style={{background: '#8b5cf6'}}></div> High Value (&gt;Rp 500k)</div>
                      <div className="seg-bar-bg"><div className="seg-bar-fill" style={{background: '#8b5cf6', width: '25%'}}></div></div>
                      <div className="seg-value">3.210</div>
                    </div>
                    <div className="seg-item">
                      <div className="seg-label"><div className="seg-dot" style={{background: '#0ea5e9'}}></div> Affiliate</div>
                      <div className="seg-bar-bg"><div className="seg-bar-fill" style={{background: '#0ea5e9', width: '8%'}}></div></div>
                      <div className="seg-value">890</div>
                    </div>
                  </div>
                </div>

                {/* WA Blast Card */}
                <div className="crm-card">
                  <h3 className="crm-card-title">🚨 WA Blast Terjadwal</h3>
                  <div className="wa-list">
                    <div className="wa-item">
                      <div className="wa-info">
                        <h4>Flash Sale Weekend</h4>
                        <p>Repeat Customer · 10 Jul, 08:00</p>
                        <p style={{marginTop: '2px'}}>9.430 terkirim · 68% dibuka</p>
                      </div>
                      <div className="wa-status terkirim">Terkirim</div>
                    </div>
                    <div className="wa-item">
                      <div className="wa-info">
                        <h4>Welcome New Member</h4>
                        <p>Pembeli Baru · Otomatis</p>
                      </div>
                      <div className="wa-status aktif">Aktif</div>
                    </div>
                    <div className="wa-item">
                      <div className="wa-info">
                        <h4>Keranjang Ditinggalkan</h4>
                        <p>Cart Abandoner · Otomatis +1h</p>
                      </div>
                      <div className="wa-status aktif">Aktif</div>
                    </div>
                    <div className="wa-item">
                      <div className="wa-info">
                        <h4>Ulang Tahun Pelanggan</h4>
                        <p>All Customer · Otomatis H-1</p>
                      </div>
                      <div className="wa-status aktif">Aktif</div>
                    </div>
                  </div>
                  <button className="btn-broadcast">+ Buat Broadcast Baru</button>
                </div>
              </div>

              {/* AI Marketing Automation */}
              <div className="crm-card" style={{marginTop: '1.5rem'}}>
                <div className="bi-insight-header" style={{marginBottom: '1rem'}}>
                  <Bot size={22} color="#6366f1" /> <h3 className="crm-card-title" style={{margin: 0}}>AI Marketing Automation</h3>
                </div>
                <div className="ai-grid">
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><MessageSquare size={110} color="#3b82f6" strokeWidth={1} /></div>
                    <div className="ai-icon"><MessageSquare size={20} color="#3b82f6" /></div>
                    <div className="ai-title">Welcome Message</div>
                    <div className="ai-trigger">Trigger: Daftar baru</div>
                    <div className="ai-status">Aktif</div>
                  </div>
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><ShoppingCart size={110} color="#10b981" strokeWidth={1} /></div>
                    <div className="ai-icon"><ShoppingCart size={20} color="#10b981" /></div>
                    <div className="ai-title">Keranjang Ditinggalkan</div>
                    <div className="ai-trigger">Trigger: +1 jam</div>
                    <div className="ai-status">Aktif</div>
                  </div>
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><Gift size={110} color="#f59e0b" strokeWidth={1} /></div>
                    <div className="ai-icon"><Gift size={20} color="#f59e0b" /></div>
                    <div className="ai-title">Ulang Tahun</div>
                    <div className="ai-trigger">Trigger: H-1</div>
                    <div className="ai-status">Aktif</div>
                  </div>
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><Star size={110} color="#eab308" strokeWidth={1} /></div>
                    <div className="ai-icon"><Star size={20} color="#eab308" /></div>
                    <div className="ai-title">Review Request</div>
                    <div className="ai-trigger">Trigger: Setelah selesai</div>
                    <div className="ai-status">Aktif</div>
                  </div>
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><RefreshCw size={110} color="#6366f1" strokeWidth={1} /></div>
                    <div className="ai-icon"><RefreshCw size={20} color="#6366f1" /></div>
                    <div className="ai-title">Repeat Order</div>
                    <div className="ai-trigger">Trigger: 30 hari pasca beli</div>
                    <div className="ai-status">Aktif</div>
                  </div>
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><Zap size={110} color="#ef4444" strokeWidth={1} /></div>
                    <div className="ai-icon"><Zap size={20} color="#ef4444" /></div>
                    <div className="ai-title">Flash Sale Alert</div>
                    <div className="ai-trigger">Trigger: Event promo</div>
                    <div className="ai-status" style={{color: '#94a3b8'}}>Non-aktif</div>
                  </div>
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><Moon size={110} color="#8b5cf6" strokeWidth={1} /></div>
                    <div className="ai-icon"><Moon size={20} color="#8b5cf6" /></div>
                    <div className="ai-title">Re-engagement</div>
                    <div className="ai-trigger">Trigger: &gt;60 hari non-aktif</div>
                    <div className="ai-status">Aktif</div>
                  </div>
                  <div className="ai-card">
                    <div className="kpi-bg-icon"><Sparkles size={110} color="#ec4899" strokeWidth={1} /></div>
                    <div className="ai-icon"><Sparkles size={20} color="#ec4899" /></div>
                    <div className="ai-title">Produk Baru</div>
                    <div className="ai-trigger">Trigger: Kategori favorit</div>
                    <div className="ai-status">Aktif</div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeView === 'aitools' ? (
            <div className="aitools-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>AI Tools Suite</h2>
                  <p>Alat AI untuk merchant & operasional marketplace</p>
                </div>
              </div>

              {/* AI Tabs */}
              <div className="ai-tabs-container">
                <button className={`ai-tab-btn ${activeAIToolTab === 'photo' ? 'active' : ''}`} onClick={() => setActiveAIToolTab('photo')}>
                  <Camera size={16} className={activeAIToolTab === 'photo' ? 'tab-icon-active' : 'tab-icon'} /> AI Photo Enhancement
                </button>
                <button className={`ai-tab-btn ${activeAIToolTab === 'content' ? 'active' : ''}`} onClick={() => setActiveAIToolTab('content')}>
                  <PenTool size={16} className={activeAIToolTab === 'content' ? 'tab-icon-active' : 'tab-icon'} /> AI Content Generator
                </button>
                <button className={`ai-tab-btn ${activeAIToolTab === 'wa' ? 'active' : ''}`} onClick={() => setActiveAIToolTab('wa')}>
                  <MessageCircle size={16} className={activeAIToolTab === 'wa' ? 'tab-icon-active' : 'tab-icon'} /> WhatsApp AI
                </button>
                <button className={`ai-tab-btn ${activeAIToolTab === 'fraud' ? 'active' : ''}`} onClick={() => setActiveAIToolTab('fraud')}>
                  <Shield size={16} className={activeAIToolTab === 'fraud' ? 'tab-icon-active' : 'tab-icon'} /> AI Fraud Detection
                </button>
              </div>

              {/* AI Tab Content */}
              <div className="ai-tab-content">
                
                {activeAIToolTab === 'photo' && (
                  <div className="ai-photo-grid">
                    <div className="ai-tools-card">
                      <h3 className="ait-card-title">AI Photo Enhancement Studio</h3>
                      <div className="ait-check-grid">
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Image size={14} color="#6366f1" /> Background Removal</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><ImagePlus size={14} color="#0f766e" /> Background Replace</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Sun size={14} color="#f59e0b" /> Auto Relighting</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Contrast size={14} color="#ec4899" /> Color Enhancement</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Maximize2 size={14} color="#0ea5e9" /> Super Resolution</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Crop size={14} color="#ef4444" /> Smart Crop</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><CloudLightning size={14} color="#6366f1" /> Shadow Generation</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Rotate3D size={14} color="#8b5cf6" /> Perspective Fix</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><MicOff size={14} color="#3b82f6" /> Noise Reduction</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><SunDim size={14} color="#f59e0b" /> HDR Enhancement</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Focus size={14} color="#ec4899" /> Object Detection</span></label>
                        <label className="ait-checkbox"><input type="checkbox" defaultChecked /> <span><Eraser size={14} color="#3b82f6" /> Remove Object</span></label>
                      </div>
                      <button className="btn-ai-process"><Rocket size={16} /> Proses dengan AI</button>
                    </div>
                    <div className="ai-tools-card">
                      <h3 className="ait-card-title">Preview Hasil AI</h3>
                      <div className="ait-preview-split">
                        <div className="preview-col">
                          <span className="preview-label">Sebelum</span>
                          <div className="preview-img-box before-img"></div>
                        </div>
                        <div className="preview-col">
                          <span className="preview-label"><Sparkles size={14} color="#eab308" /> Sesudah AI</span>
                          <div className="preview-img-box after-img">
                            <span className="img-placeholder-text">Klik 'Proses' untuk melihat hasil</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeAIToolTab === 'content' && (
                  <div className="ai-tools-card">
                    <h3 className="ait-card-title">AI Content Generator</h3>
                    <div className="ait-content-grid">
                      <div className="ait-c-left">
                        <textarea 
                          className="ait-textarea" 
                          placeholder="Batik tulis asli Yogyakarta, motif kawung, bahan sutra premium, dikerjakan oleh pengrajin berpengalaman 20 tahun"
                          defaultValue="Batik tulis asli Yogyakarta, motif kawung, bahan sutra premium, dikerjakan oleh pengrajin berpengalaman 20 tahun"
                        ></textarea>
                        <div className="ait-c-options">
                          <label className="ait-mini-check"><input type="checkbox" defaultChecked /> Judul SEO</label>
                          <label className="ait-mini-check"><input type="checkbox" defaultChecked /> Deskripsi</label>
                          <label className="ait-mini-check"><input type="checkbox" defaultChecked /> Keunggulan</label>
                          <label className="ait-mini-check"><input type="checkbox" defaultChecked /> Hashtag</label>
                          <label className="ait-mini-check"><input type="checkbox" defaultChecked /> Caption IG</label>
                          <label className="ait-mini-check"><input type="checkbox" defaultChecked /> Keyword</label>
                        </div>
                        <div className="ait-c-actions">
                          <button className="btn-ai-process" style={{flex: 1}}><Bot size={16} /> Generate AI</button>
                          <select className="ait-select">
                            <option>ID Indonesia</option>
                            <option>EN English</option>
                          </select>
                        </div>
                      </div>
                      <div className="ait-c-right">
                        <div className="ait-result-header"><Sparkles size={16} color="#d97706" /> Hasil Generate AI</div>
                        
                        <div className="ait-res-block">
                          <span className="res-label">Judul SEO</span>
                          <p className="res-value highlight">Batik Tulis Kawung Sutra Asli Yogyakarta - Pengrajin 20 Tahun | Saudagar UII</p>
                        </div>
                        <div className="ait-res-block">
                          <span className="res-label">Deskripsi</span>
                          <p className="res-value">Hadirkan keindahan budaya Jawa di setiap helai kain. Batik tulis kawung kami dikerjakan oleh pengrajin berpengalaman 20 tahun menggunakan bahan sutra premium pilihan...</p>
                        </div>
                        <div className="ait-res-block">
                          <span className="res-label">Hashtag</span>
                          <p className="res-value" style={{color: '#10b981'}}>#batiktulis #batikjogja #batiksutra #umkmindonesia #batikkawung</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeAIToolTab === 'wa' && (
                  <div className="ai-tools-card">
                    <h3 className="ait-card-title">WhatsApp AI Status & Monitoring</h3>
                    
                    <div className="wa-kpi-grid">
                      <div className="wa-kpi-card">
                        <div className="kpi-bg-icon"><MessageSquare size={110} color="#c084fc" strokeWidth={1} /></div>
                        <div className="wk-icon"><MessageSquare size={20} color="#c084fc" /></div>
                        <div className="wk-value">1.284</div>
                        <div className="wk-label">Chat Aktif Hari Ini</div>
                        <div className="wk-sub">merchant onboarding</div>
                      </div>
                      <div className="wa-kpi-card">
                        <div className="kpi-bg-icon"><CheckSquare size={110} color="#10b981" strokeWidth={1} /></div>
                        <div className="wk-header">
                          <div className="wk-icon bg-green"><CheckSquare size={20} color="#10b981" /></div>
                          <span className="wk-trend">+12%</span>
                        </div>
                        <div className="wk-value">47</div>
                        <div className="wk-label">Registrasi Selesai</div>
                        <div className="wk-sub">via AI hari ini</div>
                      </div>
                      <div className="wa-kpi-card">
                        <div className="kpi-bg-icon"><Zap size={110} color="#f97316" strokeWidth={1} /></div>
                        <div className="wk-icon"><Zap size={20} color="#f97316" /></div>
                        <div className="wk-value">&lt;2 detik</div>
                        <div className="wk-label">Respons AI</div>
                        <div className="wk-sub">rata-rata</div>
                      </div>
                    </div>

                    <div className="wa-funnel-section">
                      <h4 className="wa-funnel-title">Alur Percakapan Aktif</h4>
                      <div className="wa-funnel-list">
                        <div className="wa-f-item">
                          <div className="wf-label">Mulai Registrasi</div>
                          <div className="wf-bar-bg"><div className="wf-bar-fill" style={{width: '100%'}}></div></div>
                          <div className="wf-value">312 <span>(100%)</span></div>
                        </div>
                        <div className="wa-f-item">
                          <div className="wf-label">Nama Usaha Dikumpulkan</div>
                          <div className="wf-bar-bg"><div className="wf-bar-fill" style={{width: '95.5%'}}></div></div>
                          <div className="wf-value">298 <span>(95.5%)</span></div>
                        </div>
                        <div className="wa-f-item">
                          <div className="wf-label">Data Lokasi Dikumpulkan</div>
                          <div className="wf-bar-bg"><div className="wf-bar-fill" style={{width: '86.9%'}}></div></div>
                          <div className="wf-value">271 <span>(86.9%)</span></div>
                        </div>
                        <div className="wa-f-item">
                          <div className="wf-label">Foto Produk Diterima</div>
                          <div className="wf-bar-bg"><div className="wf-bar-fill" style={{width: '63.5%'}}></div></div>
                          <div className="wf-value">198 <span>(63.5%)</span></div>
                        </div>
                        <div className="wa-f-item">
                          <div className="wf-label">Data Rekening Bank</div>
                          <div className="wf-bar-bg"><div className="wf-bar-fill" style={{width: '35.9%'}}></div></div>
                          <div className="wf-value">112 <span>(35.9%)</span></div>
                        </div>
                        <div className="wa-f-item">
                          <div className="wf-label">Registrasi Selesai</div>
                          <div className="wf-bar-bg"><div className="wf-bar-fill" style={{width: '15.1%'}}></div></div>
                          <div className="wf-value">47 <span>(15.1%)</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeAIToolTab === 'fraud' && (
                  <div className="ai-tools-card">
                    <h3 className="ait-card-title">AI Fraud Detection</h3>
                    
                    <div className="fraud-kpi-grid">
                      <div className="wa-kpi-card bg-gray">
                        <div className="kpi-bg-icon"><Search size={110} color="#3b82f6" strokeWidth={1} /></div>
                        <div className="wk-icon no-bg"><Search size={22} color="#3b82f6" /></div>
                        <div className="wk-value">38.290</div>
                        <div className="wk-label">Akun Dipantau</div>
                      </div>
                      <div className="wa-kpi-card bg-gray">
                        <div className="kpi-bg-icon"><AlertTriangle size={110} color="#eab308" strokeWidth={1} /></div>
                        <div className="wk-icon no-bg"><AlertTriangle size={22} color="#eab308" /></div>
                        <div className="wk-value">23</div>
                        <div className="wk-label">Terdeteksi Risiko</div>
                      </div>
                      <div className="wa-kpi-card bg-gray">
                        <div className="kpi-bg-icon"><Ban size={110} color="#ef4444" strokeWidth={1} /></div>
                        <div className="wk-icon no-bg"><Ban size={22} color="#ef4444" /></div>
                        <div className="wk-value">4</div>
                        <div className="wk-label">Diblokir Hari Ini</div>
                      </div>
                      <div className="wa-kpi-card bg-gray">
                        <div className="kpi-bg-icon"><CheckSquare size={110} color="#10b981" strokeWidth={1} /></div>
                        <div className="wk-icon no-bg"><CheckSquare size={22} color="#10b981" /></div>
                        <div className="wk-value">97.3%</div>
                        <div className="wk-label">Akurasi AI</div>
                      </div>
                    </div>

                    <div className="fraud-list">
                      <div className="fraud-item bg-red-light">
                        <div className="f-icon red"></div>
                        <div className="f-info">
                          <h4>Akun Ganda <span>USR-4821</span></h4>
                          <p>Ditemukan 3 akun dengan nomor telepon sama</p>
                        </div>
                        <button className="btn-f-action red">Blokir</button>
                      </div>
                      <div className="fraud-item bg-yellow-light">
                        <div className="f-icon yellow"></div>
                        <div className="f-info">
                          <h4>Fake Order <span>TRX-9921</span></h4>
                          <p>Pola transaksi mencurigakan dari IP yang sama</p>
                        </div>
                        <button className="btn-f-action yellow">Investigasi</button>
                      </div>
                      <div className="fraud-item bg-yellow-light">
                        <div className="f-icon yellow"></div>
                        <div className="f-info">
                          <h4>Abuse Affiliate <span>AFF-2201</span></h4>
                          <p>Klik tidak organik terdeteksi pada link affiliate</p>
                        </div>
                        <button className="btn-f-action yellow">Suspend</button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ) : activeView === 'digital' ? (
            <div className="digital-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>Produk Digital & PPOB</h2>
                  <p>Monitoring transaksi layanan digital & utilitas</p>
                </div>
              </div>

              <div className="digi-kpi-grid">
                <div className="wa-kpi-card">
                  <div className="kpi-bg-icon"><Zap size={110} color="#f97316" strokeWidth={1} /></div>
                  <div className="wk-header">
                    <div className="wk-icon no-bg" style={{marginBottom: 0}}><Zap size={24} color="#f97316" /></div>
                    <span className="wk-trend">+7.8%</span>
                  </div>
                  <div className="wk-value" style={{marginTop: '0.5rem'}}>2.569</div>
                  <div className="wk-label">Total Transaksi Hari Ini</div>
                  <div className="wk-sub">semua layanan</div>
                </div>
                <div className="wa-kpi-card">
                  <div className="kpi-bg-icon"><Wallet size={110} color="#eab308" strokeWidth={1} /></div>
                  <div className="wk-header">
                    <div className="wk-icon no-bg" style={{marginBottom: 0}}><Wallet size={24} color="#eab308" /></div>
                    <span className="wk-trend">+5.3%</span>
                  </div>
                  <div className="wk-value" style={{marginTop: '0.5rem'}}>Rp 91,2 Jt</div>
                  <div className="wk-label">Revenue PPOB</div>
                  <div className="wk-sub">margin rata-rata 2.1%</div>
                </div>
                <div className="wa-kpi-card">
                  <div className="kpi-bg-icon"><CheckCircle2 size={110} color="#10b981" strokeWidth={1} /></div>
                  <div className="wk-icon no-bg" style={{marginBottom: 0}}><CheckCircle2 size={24} color="#10b981" /></div>
                  <div className="wk-value" style={{marginTop: '0.5rem'}}>99.2%</div>
                  <div className="wk-label">Success Rate</div>
                  <div className="wk-sub">SLA &lt; 10 detik</div>
                </div>
                <div className="wa-kpi-card">
                  <div className="kpi-bg-icon"><MonitorSmartphone size={110} color="#6366f1" strokeWidth={1} /></div>
                  <div className="wk-icon no-bg" style={{marginBottom: 0}}><MonitorSmartphone size={24} color="#6366f1" /></div>
                  <div className="wk-value" style={{marginTop: '0.5rem'}}>24</div>
                  <div className="wk-label">Layanan Aktif</div>
                  <div className="wk-sub">partner terintegrasi</div>
                </div>
              </div>

              <div className="digi-product-grid">
                <div className="digi-card">
                  <div className="digi-card-header">
                    <div className="digi-icon bg-orange"><Zap size={22} color="#f97316" /></div>
                    <span className="digi-status">Aktif</span>
                  </div>
                  <h3 className="digi-title">Token Listrik PLN</h3>
                  <div className="digi-stats">
                    <div className="d-stat-col">
                      <span className="d-stat-label">Tx Hari Ini</span>
                      <span className="d-stat-val">342</span>
                    </div>
                    <div className="d-stat-col text-right">
                      <span className="d-stat-label">Revenue</span>
                      <span className="d-stat-val text-green">Rp 8.6 Jt</span>
                    </div>
                  </div>
                  <div className="digi-margin">
                    Margin <span className="text-orange">2.1%</span>
                  </div>
                </div>

                <div className="digi-card">
                  <div className="digi-card-header">
                    <div className="digi-icon bg-indigo"><Smartphone size={22} color="#6366f1" /></div>
                    <span className="digi-status">Aktif</span>
                  </div>
                  <h3 className="digi-title">Pulsa All Operator</h3>
                  <div className="digi-stats">
                    <div className="d-stat-col">
                      <span className="d-stat-label">Tx Hari Ini</span>
                      <span className="d-stat-val">891</span>
                    </div>
                    <div className="d-stat-col text-right">
                      <span className="d-stat-label">Revenue</span>
                      <span className="d-stat-val text-green">Rp 26.7 Jt</span>
                    </div>
                  </div>
                  <div className="digi-margin">
                    Margin <span className="text-orange">1.8%</span>
                  </div>
                </div>

                <div className="digi-card">
                  <div className="digi-card-header">
                    <div className="digi-icon bg-blue"><Activity size={22} color="#3b82f6" /></div>
                    <span className="digi-status">Aktif</span>
                  </div>
                  <h3 className="digi-title">Paket Data Internet</h3>
                  <div className="digi-stats">
                    <div className="d-stat-col">
                      <span className="d-stat-label">Tx Hari Ini</span>
                      <span className="d-stat-val">567</span>
                    </div>
                    <div className="d-stat-col text-right">
                      <span className="d-stat-label">Revenue</span>
                      <span className="d-stat-val text-green">Rp 14.2 Jt</span>
                    </div>
                  </div>
                  <div className="digi-margin">
                    Margin <span className="text-orange">2.3%</span>
                  </div>
                </div>

                <div className="digi-card">
                  <div className="digi-card-header">
                    <div className="digi-icon bg-pink"><Heart size={22} color="#ec4899" /></div>
                    <span className="digi-status">Aktif</span>
                  </div>
                  <h3 className="digi-title">BPJS Kesehatan</h3>
                  <div className="digi-stats">
                    <div className="d-stat-col">
                      <span className="d-stat-label">Tx Hari Ini</span>
                      <span className="d-stat-val">123</span>
                    </div>
                    <div className="d-stat-col text-right">
                      <span className="d-stat-label">Revenue</span>
                      <span className="d-stat-val text-green">Rp 9.2 Jt</span>
                    </div>
                  </div>
                  <div className="digi-margin">
                    Margin <span className="text-orange">1.5%</span>
                  </div>
                </div>

                <div className="digi-card">
                  <div className="digi-card-header">
                    <div className="digi-icon bg-green"><Wallet size={22} color="#10b981" /></div>
                    <span className="digi-status">Aktif</span>
                  </div>
                  <h3 className="digi-title">Top Up GoPay</h3>
                  <div className="digi-stats">
                    <div className="d-stat-col">
                      <span className="d-stat-label">Tx Hari Ini</span>
                      <span className="d-stat-val">412</span>
                    </div>
                    <div className="d-stat-col text-right">
                      <span className="d-stat-label">Revenue</span>
                      <span className="d-stat-val text-green">Rp 20.6 Jt</span>
                    </div>
                  </div>
                  <div className="digi-margin">
                    Margin <span className="text-orange">1.2%</span>
                  </div>
                </div>

                <div className="digi-card">
                  <div className="digi-card-header">
                    <div className="digi-icon bg-purple"><Gamepad2 size={22} color="#a855f7" /></div>
                    <span className="digi-status">Aktif</span>
                  </div>
                  <h3 className="digi-title">Voucher Game</h3>
                  <div className="digi-stats">
                    <div className="d-stat-col">
                      <span className="d-stat-label">Tx Hari Ini</span>
                      <span className="d-stat-val">234</span>
                    </div>
                    <div className="d-stat-col text-right">
                      <span className="d-stat-label">Revenue</span>
                      <span className="d-stat-val text-green">Rp 11.7 Jt</span>
                    </div>
                  </div>
                  <div className="digi-margin">
                    Margin <span className="text-orange">3.4%</span>
                  </div>
                </div>
              </div>
            </div>
          ) : activeView === 'bi' ? (
            <div className="bi-view animate-fade-in">
              <div className="dashboard-page-header">
                <div className="page-header-text">
                  <h2>Business Intelligence</h2>
                  <p>AI-powered insight & prediksi performa marketplace</p>
                </div>
              </div>

              <div className="bi-kpi-grid">
                <div className="bi-kpi-card">
                  <div className="kpi-bg-icon"><BarChart2 size={110} color="#6366f1" strokeWidth={1} /></div>
                  <div className="bi-k-header">
                    <div className="bi-kpi-icon"><BarChart2 size={20} color="#6366f1" /></div>
                    <div className="bi-kpi-trend trend-up">+18.4%</div>
                  </div>
                  <div className="bi-kpi-val">Rp 4,2 Miliar</div>
                  <div className="bi-kpi-label">GMV Bulan Ini</div>
                  <div className="bi-kpi-sub">+18.4% vs bulan lalu</div>
                </div>
                <div className="bi-kpi-card">
                  <div className="kpi-bg-icon"><RefreshCw size={110} color="#3b82f6" strokeWidth={1} /></div>
                  <div className="bi-k-header">
                    <div className="bi-kpi-icon bg-blue-subtle"><RefreshCw size={20} color="#3b82f6" /></div>
                    <div className="bi-kpi-trend trend-up">+6.2%</div>
                  </div>
                  <div className="bi-kpi-val">Rp 127.400</div>
                  <div className="bi-kpi-label">Average Order Value</div>
                  <div className="bi-kpi-sub">+6.2% vs bulan lalu</div>
                </div>
                <div className="bi-kpi-card">
                  <div className="kpi-bg-icon"><ShoppingCart size={110} color="#64748b" strokeWidth={1} /></div>
                  <div className="bi-k-header">
                    <div className="bi-kpi-icon bg-gray-subtle"><ShoppingCart size={20} color="#64748b" /></div>
                    <div className="bi-kpi-trend trend-up">+0.2</div>
                  </div>
                  <div className="bi-kpi-val">2.4 item</div>
                  <div className="bi-kpi-label">Avg Basket Size</div>
                  <div className="bi-kpi-sub">per transaksi</div>
                </div>
                <div className="bi-kpi-card">
                  <div className="kpi-bg-icon"><Diamond size={110} color="#0ea5e9" strokeWidth={1} /></div>
                  <div className="bi-k-header">
                    <div className="bi-kpi-icon bg-cyan-subtle"><Diamond size={20} color="#0ea5e9" /></div>
                    <div className="bi-kpi-trend trend-up">+14.1%</div>
                  </div>
                  <div className="bi-kpi-val">Rp 892.000</div>
                  <div className="bi-kpi-label">Customer LTV</div>
                  <div className="bi-kpi-sub">lifetime value rata-rata</div>
                </div>
              </div>

              <div className="bi-middle-grid">
                <div className="bi-chart-card">
                  <h3 className="bi-card-title">Prediksi Revenue AI</h3>
                  <p className="bi-card-subtitle">Garis putus-putus = prediksi AI untuk 5 bulan ke depan</p>
                  <div className="bi-chart-placeholder">
                    <div className="mock-line-chart">
                      <div className="ml-y-axis">
                        <span>600jt</span><span>450jt</span><span>300jt</span><span>150jt</span><span>0jt</span>
                      </div>
                      <div className="ml-graph-area">
                        <svg viewBox="0 0 500 200" preserveAspectRatio="none">
                          <path d="M 0 160 L 50 155 L 100 140 L 150 150 L 200 130 L 250 140 L 300 110" fill="none" stroke="#047857" strokeWidth="2.5" />
                          <circle cx="0" cy="160" r="4" fill="#047857" />
                          <circle cx="50" cy="155" r="4" fill="#047857" />
                          <circle cx="100" cy="140" r="4" fill="#047857" />
                          <circle cx="150" cy="150" r="4" fill="#047857" />
                          <circle cx="200" cy="130" r="4" fill="#047857" />
                          <circle cx="250" cy="140" r="4" fill="#047857" />
                          <circle cx="300" cy="110" r="4" fill="#047857" />
                          <path d="M 300 110 L 350 90 L 400 80 L 450 70 L 500 40" fill="none" stroke="#d97706" strokeWidth="2.5" strokeDasharray="6 4" />
                          <circle cx="350" cy="90" r="4" fill="#d97706" />
                          <circle cx="400" cy="80" r="4" fill="#d97706" />
                          <circle cx="450" cy="70" r="4" fill="#d97706" />
                          <circle cx="500" cy="40" r="4" fill="#d97706" />
                        </svg>
                        <div className="ml-x-axis">
                          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span><span>Jul</span><span>Agu</span><span>Sep</span><span>Okt</span><span>Nov</span><span>Des</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bi-chart-card">
                  <h3 className="bi-card-title">Heatmap Transaksi per Wilayah</h3>
                  <div className="bi-heatmap-list">
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">Jawa Tengah</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-900" style={{width: '100%'}}>12.840</div></div>
                    </div>
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">Jawa Barat</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-800" style={{width: '82%'}}>10.520</div></div>
                    </div>
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">Jawa Timur</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-700" style={{width: '74%'}}>9.500</div></div>
                    </div>
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">DKI Jakarta</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-600" style={{width: '68%'}}>8.720</div></div>
                    </div>
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">DI. Yogyakarta</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-500" style={{width: '61%'}}>7.830</div></div>
                    </div>
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">Bali</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-400" style={{width: '43%'}}>5.520</div></div>
                    </div>
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">Sumatera Utara</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-300" style={{width: '35%'}}>4.490</div></div>
                    </div>
                    <div className="bi-hm-item">
                      <span className="bi-hm-label">Kalimantan Timur</span>
                      <div className="bi-hm-bar"><div className="bi-hm-fill bg-emerald-200 text-dark" style={{width: '22%'}}>2.820</div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bi-insight-section">
                <div className="bi-insight-header">
                  <Brain size={22} color="#a855f7" /> <h3>AI Insight & Rekomendasi Strategi</h3>
                </div>
                <div className="bi-insight-grid">
                  <div className="bi-in-card bg-green-light">
                    <div className="bi-in-badge bg-green"><TrendingUp size={14} /> Tren</div>
                    <h4 className="bi-in-title">Produk Kuliner Tumbuh Pesat</h4>
                    <p className="bi-in-desc">Kategori kuliner menunjukkan pertumbuhan 34% MoM. Rekomendasi: tambah merchant kuliner dari Jawa Tengah.</p>
                  </div>
                  <div className="bi-in-card bg-yellow-light">
                    <div className="bi-in-badge bg-yellow"><AlertTriangle size={14} /> Peringatan</div>
                    <h4 className="bi-in-title">Stok Batik Hampir Habis</h4>
                    <p className="bi-in-desc">12 merchant batik memiliki stok &lt;10 unit. Kirim notifikasi restok via WhatsApp AI segera.</p>
                  </div>
                  <div className="bi-in-card bg-purple-light">
                    <div className="bi-in-badge bg-purple"><Lightbulb size={14} /> Peluang</div>
                    <h4 className="bi-in-title">Flash Sale Sabtu Optimal</h4>
                    <p className="bi-in-desc">Konversi tertinggi terjadi Sabtu pukul 19:00-21:00. Jadwalkan flash sale berikutnya pada waktu ini.</p>
                  </div>
                </div>
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
                  <div className="kpi-bg-icon"><Bot size={110} color="#9333ea" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Smartphone size={110} color="#2563eb" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Package size={110} color="#ea580c" strokeWidth={1} /></div>
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
                  <div className="kpi-bg-icon"><Shield size={110} color="#ef4444" strokeWidth={1} /></div>
                  <div className="settings-card-header">
                    <div className="settings-icon bg-red-light"><Shield size={18} color="#ef4444" /></div>
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
