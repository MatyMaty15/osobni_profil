# Osobní IT Profil 2.0

Dynamický web s automatickým načítáním dat ze souboru JSON.

## 📋 Popis projektu

Tento projekt rozšiřuje tradičního osobního IT profilu o:
- **Dynamické načítání** dat z `profile.json` pomocí fetch API
- **Responsivní design** s moderním vzhledem
- **Dovednosti** (Skills) - seznam technologií a schopností
- **Zájmy** (Interests) - seznam oblastí zájmu
- **Projekty** (Projects) - karta s projekty, popisem a odkazem

## 🎯 Funkce

✅ Fetch data z profile.json
✅ Dynamické vykreslení jména uživatele
✅ Generování seznamu dovedností
✅ Vykreslení zájmů (tagy)
✅ Zobrazení projektů v kartách
✅ Error handling s .catch()
✅ Responsivní design
✅ Animace a interaktivní prvky

## 📁 Struktura projektu

```
/
├── index.html          # HTML struktura
├── style.css           # Styly
├── app.js              # JavaScript logika
├── profile.json        # Data v JSON formátu
└── README.md           # Dokumentace
```

## 📄 Struktura profile.json

```json
{
  "name": "Tvoje Jméno",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "Git"
  ],
  "interests": [
    "Web development",
    "AI nástroje"
  ],
  "projects": [
    {
      "title": "Projekt 1",
      "description": "Popis projektu",
      "link": "https://..."
    }
  ]
}
```

## 🚀 Jak spustit

1. Klonovat repozitář
```bash
git clone https://github.com/username/osobni_profil.git
cd osobni_profil
```

2. Otevřít `index.html` v prohlížeči nebo spustit na webovém serveru

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server
```

3. Otevřít http://localhost:8000

## 🔧 Technologie

- **HTML5** - Struktura
- **CSS3** - Styling s flexbox a grid
- **JavaScript (ES6)** - Fetch API, DOM manipulation
- **JSON** - Data storage

## 📝 Metody JavaScriptu

- `fetch()` - Načítání dat
- `.then()` - Zpracování Promise
- `.catch()` - Error handling
- `document.querySelector()` - Výběr elementů
- `document.createElement()` - Tvorba prvků
- `.forEach()` - Iterace přes pole
- `.appendChild()` - Přidání prvku do DOM
- `textContent` - Vložení textu
- `innerHTML` - Vložení HTML

## 🌐 Deployment

Projekt je koncipován pro GitHub Pages:

1. Pushnut do GitHub repozitáře
2. Aktivovat GitHub Pages v Settings
3. Web běží na `https://username.github.io/osobni_profil`

## 📌 Git workflow

Projekt využívá Conventional Commits:

- `feat:` - nová funkce
- `fix:` - oprava chyby
- `style:` - styling bez funkčních změn
- `refactor:` - přepsání bez změny funkce
- `docs:` - dokumentace
- `chore:` - údržba

## 📝 Příklady commitů

```bash
git commit -m "feat(data): add profile data structure"
git commit -m "feat(ui): create html structure"
git commit -m "style: add responsive styling"
git commit -m "feat(js): implement fetch functionality"
git commit -m "docs(readme): add project documentation"
```

## 🎨 Přizpůsobení

Chceš-li upravit profil:
1. Uprav data v `profile.json` - změň jméno, dovednosti, zájmy
2. Volitelně uprav barvy v `style.css`
3. Commitni změny s `git commit`
4. Pushni s `git push`

## 📧 Kontakt

Tvůj kontakt / odkaz na profil

---

Made with ❤️ | 2026