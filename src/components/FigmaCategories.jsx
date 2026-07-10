import React from 'react';
import { Coffee, Shirt, Home, Heart, Sparkles, Smartphone, Palette, Leaf, BookOpen } from 'lucide-react';

export default function FigmaCategories() {
  const iconColor = "#ea580c"; // use orange to match the new vibe, or #0b4931
  const iconSize = 32;

  return (
    <section className="figma-categories">
      <div className="prof-categories-row">
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Coffee size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Kuliner</span>
          <small className="prof-cat-count">1.2k produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Shirt size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Fashion</span>
          <small className="prof-cat-count">3.4k produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Home size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Rumah Tangga</span>
          <small className="prof-cat-count">890 produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Heart size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Herbal &amp; Kesehatan</span>
          <small className="prof-cat-count">640 produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Sparkles size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Kecantikan</span>
          <small className="prof-cat-count">2.1k produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Smartphone size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Elektronik</span>
          <small className="prof-cat-count">410 produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Palette size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Kerajinan</span>
          <small className="prof-cat-count">770 produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><Leaf size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Pertanian</span>
          <small className="prof-cat-count">320 produk</small>
        </div>
        <div className="prof-cat-card">
          <div className="prof-cat-emoji"><BookOpen size={iconSize} color={iconColor} strokeWidth={1.5} /></div>
          <span className="prof-cat-name">Pendidikan</span>
          <small className="prof-cat-count">190 produk</small>
        </div>
      </div>
    </section>
  );
}
