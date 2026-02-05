# Mon Portfolio

Un site portfolio statique moderne et responsive, prêt à être déployé sur Vercel.

## 🚀 Fonctionnalités

- **Design moderne** avec animations fluides
- **Mode sombre/clair** avec persistance
- **Responsive** (mobile, tablette, desktop)
- **Section Projets** avec liens vers vos sites
- **Galerie Clients** pour les screenshots (sans liens)
- **Formulaire de contact**
- **Modal** pour visualiser les images en grand

## 📁 Structure

```
portfolio/
├── index.html      # Page principale
├── styles.css      # Styles CSS
├── script.js       # JavaScript
└── README.md       # Documentation
```

## 🎨 Personnalisation

### Modifier vos informations

Dans `index.html`, modifiez :

1. **Section Hero** : Votre nom, titre et description
2. **Section Projets** : Ajoutez vos projets avec liens
3. **Section Clients** : Ajoutez vos screenshots
4. **Section Contact** : Vos coordonnées

### Ajouter un projet avec lien

```html
<article class="project-card">
    <div class="project-image">
        <img src="votre-image.jpg" alt="Description">
        <div class="project-overlay">
            <a href="https://votre-site.com" target="_blank" class="btn btn-small">Voir le site</a>
        </div>
    </div>
    <div class="project-info">
        <h3>Nom du Projet</h3>
        <p>Description du projet</p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
        </div>
        <a href="https://votre-site.com" target="_blank" class="project-link">
            Visiter le site →
        </a>
    </div>
</article>
```

### Ajouter un screenshot client (sans lien)

```html
<article class="gallery-item" data-index="X">
    <div class="gallery-image">
        <img src="screenshot.jpg" alt="Description">
        <div class="gallery-overlay">
            <span class="zoom-icon">🔍</span>
        </div>
    </div>
    <div class="gallery-info">
        <h3>Nom du Projet</h3>
        <p>Description</p>
        <span class="client-badge">Projet Client</span>
    </div>
</article>
```

N'oubliez pas d'ajouter les données dans `script.js` (tableau `galleryData`) pour la modal.

## 🚀 Déploiement sur Vercel

### Option 1 : Via GitHub

1. Créez un repository GitHub et pushez votre code
2. Allez sur [vercel.com](https://vercel.com)
3. Connectez votre compte GitHub
4. Importez votre repository
5. Cliquez sur "Deploy"

### Option 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

## 📧 Configurer le formulaire de contact

Pour que le formulaire fonctionne vraiment, vous pouvez utiliser :

### Formspree (gratuit)

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Modifiez la balise `<form>` :

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

### EmailJS

1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
2. Suivez leur documentation pour l'intégration JavaScript

## 📱 Images

Remplacez les images placeholder par vos vraies images :

- Format recommandé : JPEG ou WebP
- Projets : 600x400px minimum
- Screenshots clients : 800x600px minimum

## 🎨 Personnaliser les couleurs

Dans `styles.css`, modifiez les variables CSS au début du fichier :

```css
:root {
    --accent-primary: #3b82f6;    /* Bleu principal */
    --accent-secondary: #8b5cf6;  /* Violet secondaire */
}
```

## 📄 Licence

Libre d'utilisation pour votre portfolio personnel.
