import re

file_path = r'e:\Downloads\UII\saudagar-uii\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure we don't have double onClick from the previous bad replacement
content = content.replace(" onClick={() => setSelectedProduct({ id: 'fp1', name: 'Preview Product', price: 0, image: '' })}", "")

cards = re.split(r'(<div className="product-card card-hover">)', content)

new_content = ""
for part in cards:
    if '<img src="' in part and 'className="product-image"' in part and 'addToCart({ id:' in part:
        # Extract product info
        img_match = re.search(r'<img src="(.*?)"', part)
        add_match = re.search(r'addToCart\(\{\s*id:\s*\'(.*?)\',\s*name:\s*\'(.*?)\',\s*price:\s*(.*?)\s*\}\)', part)
        
        if img_match and add_match:
            img = img_match.group(1)
            p_id = add_match.group(1)
            name = add_match.group(2)
            price = add_match.group(3)
            
            # Escape single quotes in name if any
            name = name.replace("'", "\\'")
            
            # The previous element in `cards` is `<div className="product-card card-hover">`
            # We want to change that element to have the onClick
            new_content = new_content[:-len('<div className="product-card card-hover">')]
            # Use format string cleanly without complex escaping
            onClickStr = f" onClick={{() => setSelectedProduct({{ id: '{p_id}', name: '{name}', price: {price}, image: '{img}' }})}}"
            new_content += f'<div className="product-card card-hover" style={{{{ cursor: "pointer" }}}}{onClickStr}>'
            
            # Also we need to stop the button click from propagating
            part = part.replace('onClick={() => addToCart(', 'onClick={(e) => { e.stopPropagation(); addToCart(')
            part = part.replace('})}', '}); }}')
            
    new_content += part

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated all product cards with preview onClick")
