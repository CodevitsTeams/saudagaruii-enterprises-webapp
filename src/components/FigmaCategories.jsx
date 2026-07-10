import React from 'react';
import { Coffee, Shirt, Globe, Heart, Sparkles, Wrench, Tag, Scissors } from 'lucide-react';

export default function FigmaCategories() {
  const categories = [
    { icon: <Coffee size={28} color="#0b4931" />, name: 'Kuliner' },
    { icon: <Shirt size={28} color="#0b4931" />, name: 'Fashion' },
    { icon: <Globe size={28} color="#0b4931" />, name: 'Rumah Tangga' },
    { icon: <Heart size={28} color="#0b4931" />, name: 'Herbal & Kesehatan' },
    { icon: <Sparkles size={28} color="#0b4931" />, name: 'Kecantikan' },
    { icon: <Wrench size={28} color="#0b4931" />, name: 'Mainan & Hobi' },
    { icon: <Tag size={28} color="#0b4931" />, name: 'Souvenir' },
    { icon: <Scissors size={28} color="#0b4931" />, name: 'Perawatan' }
  ];

  return (
    <section className="figma-categories">
      {categories.map((c, idx) => (
        <div className="fc-item" key={idx} onClick={() => alert(`Kategori ${c.name} dipilih`)}>
          <div className="fc-icon-wrapper">{c.icon}</div>
          <span className="fc-name">{c.name}</span>
        </div>
      ))}
    </section>
  );
}
