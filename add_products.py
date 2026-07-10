import re

with open(r'e:\Downloads\UII\saudagar-uii\src\App.jsx', 'r', encoding='utf-8') as f:
    app_jsx = f.read()

# The grid ends at:
#               </div>
#             </div>
#
#           </div>
#         </section>

# Let's just create 6 new product items as a string and insert it before:
#           </div>
#         </section>

new_products = '''
            {/* Featured Product 7 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp7', name: 'Tas Ransel Kanvas Vintage', price: 185000, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400" alt="Bag" className="product-image" />
                <div className="badge-tag green-tag">Terlaris</div>
              </div>
              <div className="product-info">
                <div className="store-name">Saudagar Bag</div>
                <h3 className="product-name">Tas Ransel Kanvas Vintage</h3>
                <div className="price-area">
                  <span className="current-price">Rp185.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.9</span>
                  <span className="reviews">(215 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp7', name: 'Tas Ransel Kanvas Vintage', price: 185000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 8 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp8', name: 'Kopi Arabica Gayo 250g', price: 65000, image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400" alt="Coffee" className="product-image" />
                <div className="badge-tag yellow-tag">Rekomendasi AI</div>
              </div>
              <div className="product-info">
                <div className="store-name">Kopi Kampus</div>
                <h3 className="product-name">Kopi Arabica Gayo 250g</h3>
                <div className="price-area">
                  <span className="current-price">Rp65.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.8</span>
                  <span className="reviews">(190 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp8', name: 'Kopi Arabica Gayo 250g', price: 65000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 9 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp9', name: 'Lampu Meja Belajar LED', price: 125000, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400" alt="Lamp" className="product-image" />
                <div className="badge-tag blue-tag">Elektronik</div>
              </div>
              <div className="product-info">
                <div className="store-name">UII Tech Store</div>
                <h3 className="product-name">Lampu Meja Belajar LED</h3>
                <div className="price-area">
                  <span className="current-price">Rp125.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.7</span>
                  <span className="reviews">(88 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp9', name: 'Lampu Meja Belajar LED', price: 125000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 10 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp10', name: 'Tumbler Stainless 500ml', price: 75000, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400" alt="Tumbler" className="product-image" />
                <div className="badge-tag purple-tag">Official</div>
              </div>
              <div className="product-info">
                <div className="store-name">Merchandise UII</div>
                <h3 className="product-name">Tumbler Stainless 500ml</h3>
                <div className="price-area">
                  <span className="current-price">Rp75.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>5.0</span>
                  <span className="reviews">(310 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp10', name: 'Tumbler Stainless 500ml', price: 75000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 11 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp11', name: 'Masker Organik Greentea', price: 25000, image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=400" alt="Skincare" className="product-image" />
                <div className="badge-tag blue-tag">Kecantikan</div>
              </div>
              <div className="product-info">
                <div className="store-name">Beauty Care</div>
                <h3 className="product-name">Masker Organik Greentea</h3>
                <div className="price-area">
                  <span className="current-price">Rp25.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.8</span>
                  <span className="reviews">(156 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp11', name: 'Masker Organik Greentea', price: 25000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

            {/* Featured Product 12 */}
            <div className="product-card card-hover" style={{ cursor: "pointer" }} onClick={() => setSelectedProduct({ id: 'fp12', name: 'Kemeja Flanel Kotak-Kotak', price: 145000, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400' })}>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400" alt="Shirt" className="product-image" />
                <div className="badge-tag red-tag">Diskon</div>
              </div>
              <div className="product-info">
                <div className="store-name">Saudagar Fashion</div>
                <h3 className="product-name">Kemeja Flanel Kotak-Kotak</h3>
                <div className="price-area">
                  <span className="current-price">Rp145.000</span>
                  <span className="original-price">Rp185.000</span>
                </div>
                <div className="rating">
                  <Star size={14} fill="#facc15" color="#facc15" />
                  <span>4.9</span>
                  <span className="reviews">(410 ulasan)</span>
                </div>
                <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); addToCart({ id: 'fp12', name: 'Kemeja Flanel Kotak-Kotak', price: 145000 }); }} style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', background: 'var(--primary-color)', color: '#fff', cursor: 'pointer' }}>
                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>
'''

target_string = '''                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>

          </div>
        </section>'''

replacement = '''                  <Plus size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Keranjang
                </button>
              </div>
            </div>
''' + new_products + '''
          </div>
        </section>'''

app_jsx = app_jsx.replace(target_string, replacement)

with open(r'e:\Downloads\UII\saudagar-uii\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("Added 6 new products!")
