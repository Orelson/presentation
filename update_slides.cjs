const fs = require('fs');
const path = './src/data/slides.js';

let content = fs.readFileSync(path, 'utf8');

// 1. Increment all id: N where N >= 2
content = content.replace(/(\s+id:\s*)(\d+)(,)/g, (match, prefix, numStr, suffix) => {
  const num = parseInt(numStr, 10);
  if (num >= 2) {
    return prefix + (num + 1) + suffix;
  }
  return match;
});

// 2. Prepare outline slide
const outlineSlide = `  {
    id: 2,
    type: "outline",
    title: "Plan de la Présentation",
    subtitle: "Architecture générale et feuille de route du dossier de présentation CAMEPT 2026",
    headerCategory: "SOMMAIRE EXÉCUTIF",
    content: {
      sections: [
        {
          num: "01",
          title: "Contexte & Vision Souveraine",
          desc: "Le paradoxe africain, le positionnement stratégique du Gabon et l'ambition institutionnelle (Vision 2050).",
          slides: "Slides 03 — 05",
          icon: "Compass",
          color: "blue"
        },
        {
          num: "02",
          title: "Portefeuille de Projets : PNCD",
          desc: "Présentation des opportunités bancables dans les Mines, l'Énergie, le Pétrole et les Transports.",
          slides: "Slide 06",
          icon: "Layers",
          color: "orange"
        },
        {
          num: "03",
          title: "Plateforme & Diplomatie Économique",
          desc: "Le sommet panafricain d'investissement et l'axe d'excellence Libreville - Rabat - Abidjan.",
          slides: "Slides 07 — 10",
          icon: "Globe",
          color: "yellow"
        },
        {
          num: "04",
          title: "Architecture & Programme Détaillé",
          desc: "Les 12 Boardrooms transactionnelles, la scénographie 360° et le programme solennel des 3 journées.",
          slides: "Slides 11 — 19",
          icon: "Calendar",
          color: "green"
        },
        {
          num: "05",
          title: "Retombées Nationales & Gouvernance",
          desc: "Impact direct pour la Nation, présentation des organisateurs et mécanisme de suivi post-congres.",
          slides: "Slides 20 — 24",
          icon: "Award",
          color: "blue"
        }
      ]
    }
  },`;

// 3. Insert after slide 1 (which ends before slide 3, formerly slide 2)
// We look for 'id: 3,\n    type: "paradox",' because ID 2 was incremented to 3!
const targetStr = '    id: 3,\r\n    type: "paradox",';
const targetStrLf = '    id: 3,\n    type: "paradox",';

if (content.includes(targetStr)) {
  content = content.replace(targetStr, outlineSlide + '\r\n  {\r\n' + targetStr);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully inserted outline slide and incremented IDs (CRLF)!');
} else if (content.includes(targetStrLf)) {
  content = content.replace(targetStrLf, outlineSlide + '\n  {\n' + targetStrLf);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully inserted outline slide and incremented IDs (LF)!');
} else {
  console.error('Could not find target string to insert outline slide!');
  process.exit(1);
}
