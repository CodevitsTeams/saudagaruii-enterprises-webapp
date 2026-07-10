import re

app_jsx_path = r'e:\Downloads\UII\saudagar-uii\src\App.jsx'
with open(app_jsx_path, 'r', encoding='utf-8') as f:
    app_jsx = f.read()

# Add Import
if 'import FigmaInfoGrid' not in app_jsx:
    app_jsx = app_jsx.replace("import WaBanner from './components/WaBanner';", "import WaBanner from './components/WaBanner';\nimport FigmaInfoGrid from './components/FigmaInfoGrid';")

# Replace old info-grid block with component
# The old info-grid starts at <section className="info-grid animate-fade-in delay-100">
# and ends right before {/* Kategori Produk */}
old_info_grid_regex = re.compile(r'<section className="info-grid animate-fade-in delay-100">.*?</section>\s*</div>\s*\{\/\* Kategori Produk \*\/}', re.DOTALL)

new_info_grid_jsx = '''<FigmaInfoGrid />
        </div>

        {/* Kategori Produk */}'''

if '<FigmaInfoGrid />' not in app_jsx:
    app_jsx = old_info_grid_regex.sub(new_info_grid_jsx, app_jsx, count=1)

with open(app_jsx_path, 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("Injected FigmaInfoGrid into App.jsx!")
