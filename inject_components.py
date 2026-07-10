import re

app_jsx_path = r'e:\Downloads\UII\saudagar-uii\src\App.jsx'
with open(app_jsx_path, 'r', encoding='utf-8') as f:
    app_jsx = f.read()

# 1. Add Imports
if 'import FigmaHero' not in app_jsx:
    app_jsx = app_jsx.replace("import './App.css';", "import './App.css';\nimport FigmaHero from './components/FigmaHero';\nimport FigmaCategories from './components/FigmaCategories';\nimport WaBanner from './components/WaBanner';")

# 2. Replace Hero and Categories Nav
old_hero_regex = re.compile(r'\{\/\* Categories Nav \*\/}.*?</section>', re.DOTALL)

new_hero_jsx = '''{/* Main Content */}
      <main className="main-content container">
        <FigmaHero />
        <FigmaCategories />'''

app_jsx = old_hero_regex.sub(new_hero_jsx, app_jsx, count=1)

# 3. Inject WaBanner
if '<WaBanner />' not in app_jsx:
    app_jsx = app_jsx.replace('{/* Produk Unggulan */}', '<WaBanner />\n\n        {/* Produk Unggulan */}')

# 4. Fix Product Card Buttons
app_jsx = app_jsx.replace("border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)'", "border: 'none', background: 'var(--primary-color)', color: '#fff'")

with open(app_jsx_path, 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("Components successfully injected into App.jsx!")
