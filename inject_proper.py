import re

app_jsx_path = r'e:\Downloads\UII\saudagar-uii\src\App.jsx'
with open(app_jsx_path, 'r', encoding='utf-8') as f:
    app_jsx = f.read()

# Add Imports at the top
if "import './Figma.css';" not in app_jsx:
    app_jsx = app_jsx.replace(
        "import './App.css';",
        "import './App.css';\nimport './Figma.css';\nimport FigmaHero from './components/FigmaHero';\nimport FigmaCategories from './components/FigmaCategories';\nimport WaBanner from './components/WaBanner';"
    )

# Replace Hero Section and Categories Nav
old_hero_regex = re.compile(r'\{\/\* Categories Nav \*\/}.*?</section>', re.DOTALL)

new_hero_jsx = '''{/* Main Content */}
      <main className="main-content container">
        <FigmaHero />
        <FigmaCategories />'''

if '<FigmaHero />' not in app_jsx:
    app_jsx = old_hero_regex.sub(new_hero_jsx, app_jsx, count=1)

# Inject WaBanner
if '<WaBanner />' not in app_jsx:
    app_jsx = app_jsx.replace('{/* Produk Unggulan */}', '<WaBanner />\n\n        {/* Produk Unggulan */}')

# Fix Product Card Buttons to be solid green
app_jsx = app_jsx.replace(
    "border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--primary-color)'",
    "border: 'none', background: 'var(--primary-color)', color: '#fff'"
)

with open(app_jsx_path, 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("Properly injected components and CSS into App.jsx")
