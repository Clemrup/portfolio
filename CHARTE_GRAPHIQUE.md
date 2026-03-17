# Charte Graphique - Portfolio de Clement RUPERT

Version: 1.0  
Date: 17/03/2026

## 1. Identite visuelle

- Positionnement: Portfolio professionnel, moderne, clair et technique.
- Ton graphique: Epure, lisible, dynamique.
- Style: Interface light propre avec prise en charge du mode sombre.

## 2. Logo et signature

- Logo actuel: mot-symbole "Portfolio".
- Traitement du logo: texte en degrade principal.
- Zone de protection: laisser au minimum un espace equivalent a la hauteur de la lettre P autour du logo.
- Tailles minimales conseillees:
  - Desktop: 24 px minimum
  - Mobile: 20 px minimum

## 3. Palette de couleurs

### Couleurs principales (mode clair)

- Fond principal: #FFFFFF
- Fond secondaire: #F8FAFC
- Fond tertiaire: #F1F5F9
- Texte principal: #0F172A
- Texte secondaire: #475569
- Texte discret: #94A3B8
- Accent 1: #3B82F6
- Accent 2: #8B5CF6
- Bordure: #E2E8F0

### Degrade principal

- linear-gradient(135deg, #3B82F6, #8B5CF6)

### Couleurs mode sombre

- Fond principal: #0F172A
- Fond secondaire: #1E293B
- Fond tertiaire: #334155
- Texte principal: #F8FAFC
- Texte secondaire: #CBD5E1
- Texte discret: #64748B
- Bordure: #334155

## 4. Typographie

- Police principale: Inter
- Police de secours: -apple-system, BlinkMacSystemFont, sans-serif

### Echelle typographique

- 14 px: textes secondaires courts
- 16 px: texte courant
- 18 px: sous-textes importants
- 20 px: petits titres
- 24 px: titres de section secondaires
- 32 px: titres section
- 40 px: grands titres
- 56 px: titre hero principal

### Hierarchie recommandee

- H1: 56 px, poids 700
- H2: 32-40 px, poids 700
- H3: 24 px, poids 600
- Corps: 16 px, interligne 1.6

## 5. Espacements et grille

### Echelle d'espacement

- XS: 8 px
- SM: 16 px
- MD: 24 px
- LG: 32 px
- XL: 48 px
- 2XL: 80 px

### Largeur de contenu

- Conteneur max: 1200 px
- Padding horizontal conteneur: 24 px

### Grille

- Desktop: sections a 2 colonnes selon contexte (hero, contact)
- Tablet/Mobile: empilement vertical, centrage du contenu prioritaire

## 6. Rayons et ombres

### Rayons

- Petit: 6 px
- Moyen: 8 px
- Grand: 16 px
- XL: 24 px
- Pilule (boutons): 9999 px

### Ombres

- Shadow sm: 0 1px 2px rgba(0,0,0,0.05)
- Shadow md: 0 4px 6px -1px rgba(0,0,0,0.1)
- Shadow lg: 0 10px 15px -3px rgba(0,0,0,0.1)
- Shadow xl: 0 20px 25px -5px rgba(0,0,0,0.1)

## 7. Composants UI

### Bouton primaire

- Fond: degrade principal
- Texte: blanc
- Forme: pilule
- Hover: translation verticale legere (-2 px) + ombre renforcee

### Bouton secondaire

- Fond: transparent
- Bordure: 2 px couleur bordure
- Texte: couleur principale
- Hover: bordure et texte en accent 1

### Liens

- Couleur normale: accent 1
- Hover: accent 2

### Navigation

- Barre fixe en haut
- Fond semi-transparent + flou (backdrop-filter)
- Ligne de separation inferieure

## 8. Iconographie et imagerie

- Style d'icones: simple, lisible, usage ponctuel.
- Visuels projets: captures d'ecran propres, ratio harmonise.
- Photo profil: format carre, coins arrondis XL.

## 9. Mouvement et transitions

- Rapide: 150 ms
- Standard: 300 ms
- Lente: 500 ms
- Animations a conserver:
  - Effet flottant de l'avatar
  - Transitions douces de theme
  - Hover discret sur boutons et cartes

## 10. Accessibilite

- Contraste texte/fond a maintenir en AA minimum.
- Taille texte minimale recommandee: 16 px pour le corps.
- Focus visible obligatoire sur boutons et liens (amelioration conseillee si non present partout).
- Cibles tactiles mobiles: minimum 44 x 44 px.

## 11. Regles d'usage

- Toujours utiliser les variables CSS existantes pour les couleurs et espacements.
- Eviter d'ajouter des couleurs hors palette sans validation.
- Limiter les variations de styles de boutons pour garder la coherence.
- Conserver un style sobre et professionnel (pas d'effets visuels excessifs).

## 12. Tokens CSS de reference

Les tokens suivants constituent la base officielle du design system du site:

- --bg-primary, --bg-secondary, --bg-tertiary
- --text-primary, --text-secondary, --text-muted
- --accent-primary, --accent-secondary, --accent-gradient
- --border-color
- --spacing-xs, --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl, --spacing-2xl
- --font-size-sm, --font-size-base, --font-size-lg, --font-size-xl, --font-size-2xl, --font-size-3xl, --font-size-4xl, --font-size-5xl
- --radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-full
- --transition-fast, --transition-base, --transition-slow

## 13. Evolutions recommandees (V1.1)

- Ajouter une variante de bouton tertiaire (ghost) pour les actions secondaires longues.
- Definir une palette etat (succes, info, warning, erreur) uniforme.
- Standardiser les tailles d'images projets pour des cartes parfaitement alignees.
- Ajouter une page dediee "Style Guide" visible en local pour tester rapidement tous les composants.
