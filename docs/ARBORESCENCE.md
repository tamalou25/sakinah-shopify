# 🌳 Arborescence Détaillée - Sakinah Shopify

## 📁 Structure Complète du Projet

```
sakinah-shopify/
│
├── 📄 README.md                    # Documentation principale
├── 📄 LICENSE                      # Licence MIT
├── 🚫 .gitignore                   # Fichiers ignorés Git
│
├── 📂 assets/                      # Ressources statiques
│   ├── theme.css                   # Design system complet
│   ├── custom.js                   # JavaScript fonctionnel
│   ├── logo-sakinah.svg            # Logo principal
│   ├── favicon.svg                 # Favicon
│   └── hero-pattern.svg            # Motif background hero
│
├── 📂 layout/                      # Templates de base
│   └── theme.liquid                # Layout principal HTML
│
├── 📂 sections/                    # Sections réutilisables
│   ├── header.liquid               # Navigation header
│   ├── hero.liquid                 # Section hero accueil
│   ├── featured-products.liquid    # Produits mis en avant
│   ├── testimonials.liquid         # Témoignages clients
│   ├── values.liquid               # Section valeurs USP
│   ├── newsletter.liquid           # Section newsletter
│   ├── footer.liquid               # Pied de page
│   └── announcement-bar.liquid     # Barre d'annonce
│
├── 📂 snippets/                    # Composants réutilisables
│   ├── cart-drawer.liquid          # Panier latéral
│   ├── product-card.liquid         # Carte produit
│   ├── newsletter-popup.liquid     # Popup newsletter
│   ├── social-meta-tags.liquid     # Meta tags sociaux
│   └── breadcrumbs.liquid          # Fil d'Ariane
│
├── 📂 templates/                   # Pages templates
│   ├── index.liquid                # Page d'accueil
│   ├── product.liquid              # Page produit
│   ├── collection.liquid           # Page collection
│   ├── cart.liquid                 # Page panier
│   ├── page.liquid                 # Page standard
│   ├── blog.liquid                 # Page blog
│   ├── article.liquid              # Page article
│   └── search.liquid               # Page recherche
│
├── 📂 locales/                     # Traductions
│   └── fr.json                     # Traduction français
│
├── 📂 config/                      # Configuration thème
│   └── settings_schema.json        # Paramètres customizer
│
├── 📂 data/                        # Données import
│   ├── produits-sakinah.csv        # 15 produits
│   ├── collections.csv             # Collections
│   └── pages.csv                   # Pages statiques
│
├── 📂 docs/                        # Documentation
│   ├── ARBORESCENCE.md             # Ce fichier
│   ├── GUIDE-INSTALLATION.md       # Guide démarrage
│   ├── GUIDE-PERSONNALISATION.md   # Guide custom
│   ├── APPS-RECOMMANDEES.md        # Liste apps
│   └── FAQ.md                      # Questions fréquentes
│
└── 📂 scripts/                     # Scripts utilitaires
    ├── deploy.sh                   # Script déploiement
    └── backup.sh                   # Script backup
```

---

## 📝 Description des Dossiers

### 🎨 **assets/**
Contient tous les fichiers CSS, JavaScript, images et polices.

- **theme.css** : Design system complet avec variables CSS, composants, utilitaires
- **custom.js** : Fonctionnalités JavaScript (panier, galerie, lazy loading, etc.)
- **Images** : Logos, favicons, patterns de fond

### 📚 **layout/**
Structure HTML de base du site.

- **theme.liquid** : Template principal contenant `<head>`, navigation, footer

### 🧩 **sections/**
Sections modulaires réutilisables via l'éditeur Shopify.

- **header.liquid** : Navigation sticky avec logo, menu, panier
- **hero.liquid** : Bannière hero avec titre, CTA, image de fond
- **featured-products.liquid** : Grille produits avec badges, ratings, add-to-cart
- **footer.liquid** : Pied de page avec liens, newsletter, certifications

### 🪡 **snippets/**
Composants réutilisables inclus dans d'autres fichiers.

- **cart-drawer.liquid** : Panier latéral avec mise à jour dynamique
- **product-card.liquid** : Carte produit standardisée
- **newsletter-popup.liquid** : Popup inscription newsletter

### 📜 **templates/**
Pages complètes du site.

- **index.liquid** : Page d'accueil (hero + best-sellers + valeurs + témoignages)
- **product.liquid** : Fiche produit (galerie, description, options, avis)
- **collection.liquid** : Page collection avec filtres et tri

### 🌐 **locales/**
Fichiers de traduction.

- **fr.json** : Toutes les chaînes traduisibles en français

### ⚙️ **config/**
Configuration du thème.

- **settings_schema.json** : Paramètres personnalisables dans le customizer Shopify

### 📊 **data/**
Données d'import.

- **produits-sakinah.csv** : 15 produits prêts à importer (tapis, parfums, accessoires)
- Contient : titres, descriptions, prix, SKU, inventaire, tags SEO

### 📖 **docs/**
Documentation complète.

- Guides d'installation, personnalisation, FAQ
- Liste apps recommandées avec tarifs

---

## 🛤️ Fichiers Clés

### 🔑 Fichiers Essentiels

| Fichier | Description | Priorité |
|---------|-------------|----------|
| `layout/theme.liquid` | Structure HTML de base | 🔴 Critique |
| `assets/theme.css` | Styles globaux | 🔴 Critique |
| `assets/custom.js` | Fonctionnalités JS | 🔴 Critique |
| `sections/header.liquid` | Navigation | 🔴 Critique |
| `sections/hero.liquid` | Hero accueil | 🟠 Important |
| `snippets/cart-drawer.liquid` | Panier | 🟠 Important |
| `data/produits-sakinah.csv` | Produits | 🟠 Important |

---

## 🎯 Pages du Site

### 🏠 **Page d'Accueil** (`templates/index.liquid`)

**Sections incluses :**
1. Hero (titre, CTA, image)
2. Best-sellers (3-4 produits phares)
3. Valeurs USP (4 points forts)
4. Témoignages (3 avis clients)
5. Newsletter (formulaire inscription)
6. Collections (aperçu catégories)

### 🛍️ **Page Collection** (`templates/collection.liquid`)

**Fonctionnalités :**
- Grille produits responsive (2-4 colonnes)
- Filtres (prix, type, tags)
- Tri (nouveautés, prix, popularité)
- Pagination

### 📜 **Page Produit** (`templates/product.liquid`)

**Sections :**
- Galerie photos (6-8 images)
- Titre, prix, badges promo
- Description riche HTML
- Options (taille, couleur si applicable)
- Quantité + Ajout panier
- Avis clients (Judge.me)
- Produits similaires
- FAQ produit

### 📖 **Pages Statiques**

- `/pages/notre-histoire` : Storytelling Sakinah
- `/pages/contact` : Formulaire + infos contact
- `/pages/livraison` : Infos livraison & retours
- `/pages/faq` : Questions fréquentes
- `/pages/cgv` : Conditions générales
- `/pages/confidentialite` : Politique RGPD

---

## 📦 Collections Organisées

### Structure Collections

```
🛍️ Boutique (Collection All)
├── 🕋 Tapis Individuels
│   ├── Tapis Rawdah Premium
│   ├── Tapis Voyage Compact
│   └── Tapis Velours Classique
│
├── 👶 Tapis Enfants
│   ├── Petit Muslimin (3-7 ans)
│   └── Junior (8-12 ans)
│
├── 👨‍👩‍👧‍👦 Tapis Groupe
│   ├── Duo Couple (2 pers)
│   └── Jumu'ah Family (4-6 pers)
│
├── 🌺 Parfums
│   ├── Rawdat Al-Madinah 10ml
│   ├── Oud & Musc Blanc 15ml
│   └── Rose de Taïf 12ml
│
├── 📿 Accessoires
│   ├── Chapelet Tasbih
│   └── Boussole Qibla
│
└── 🎁 Coffrets Cadeaux
    ├── Coffret Essentiel Prière
    ├── Coffret Parfums Découverte
    └── Kit Prière Nomade
```

---

## 📊 Données Produits

### Produits Inclus (15 total)

**Tapis de Prière (8 produits) :**
1. Tapis Rawdah Premium - 59,99€ ⭐️ Best-seller
2. Tapis Enfant Petit Muslimin - 36,99€
3. Tapis Groupe Jumu'ah Family - 209,99€
4. Tapis Voyage Compact - 44,99€
5. Tapis Velours Classique - 49,99€
6. Tapis Junior 8-12 ans - 42,99€
7. Tapis Duo Couple - 129,99€

**Parfums (4 produits) :**
8. Parfum Rawdat Al-Madinah 10ml - 16,99€ 🔥 Top ventes
9. Parfum Oud & Musc Blanc 15ml - 24,99€
10. Parfum Rose de Taïf 12ml - 21,99€

**Accessoires (2 produits) :**
11. Chapelet Tasbih Bois - 19,99€
12. Boussole Qibla - 14,99€

**Coffrets (3 produits) :**
13. Coffret Cadeau Essentiel - 99,99€
14. Coffret Parfums Découverte - 44,99€
15. Kit Prière Nomade - 64,99€

---

## 🔧 Fonctionnalités JavaScript

### `assets/custom.js` - Fonctions Implémentées

✅ **StickyHeader** : Header qui reste fixé au scroll
✅ **CartDrawer** : Panier latéral avec overlay
✅ **AddToCart** : Ajout panier AJAX sans rechargement
✅ **ProductGallery** : Galerie photos avec miniatures
✅ **LazyLoad** : Chargement différé images (performance)
✅ **NewsletterPopup** : Popup newsletter avec cookie
✅ **CollectionFilters** : Filtres collections dynamiques
✅ **CountdownTimer** : Compte à rebours promotions
✅ **SmoothScroll** : Défilement fluide ancres

---

## 🎨 Design System

### Variables CSS (`assets/theme.css`)

**Couleurs :**
```css
--vert-medine: #00A651
--or-rawdah: #C9A961
--noir-nuit: #1A1A1A
--gris-serein: #E8E6E3
--turquoise-coupole: #00B4A6
```

**Typographies :**
```css
--font-titre: 'Playfair Display'
--font-sous-titre: 'Montserrat'
--font-texte: 'Inter'
--font-arabe: 'Amiri'
```

**Espacements :**
```css
--spacing-xs: 0.5rem (8px)
--spacing-sm: 1rem (16px)
--spacing-md: 1.5rem (24px)
--spacing-lg: 2rem (32px)
--spacing-xl: 3rem (48px)
```

---

## 🚀 Prochaines Étapes

### Phase 1 : Installation (Semaine 1)
1. Cloner le repository
2. Connecter à Shopify via CLI
3. Pousser le thème
4. Importer produits CSV
5. Configurer collections

### Phase 2 : Personnalisation (Semaine 2)
1. Uploader logo et favicon
2. Personnaliser couleurs si besoin
3. Créer pages statiques (CGV, À propos, etc.)
4. Configurer menu navigation
5. Ajouter vraies photos produits

### Phase 3 : Apps & Optimisation (Semaine 3)
1. Installer apps essentielles (Judge.me, Klaviyo, etc.)
2. Configurer emails automatiques
3. Tester tunnel achat complet
4. Optimiser SEO (meta, alt, sitemap)
5. Tests mobile & desktop

### Phase 4 : Lancement (Semaine 4)
1. Soft launch (amis/famille)
2. Collecter feedbacks
3. Ajustements finaux
4. Lancement officiel
5. Campagnes marketing

---

## 📞 Support

Pour toute question sur cette arborescence :

- 📖 **Documentation** : Voir dossier `/docs/`
- 🐛 **Issues** : [GitHub Issues](https://github.com/tamalou25/sakinah-shopify/issues)
- 📧 **Email** : salam@sakinah.fr

---

**Mis à jour : Mars 2026**
**Version : 1.0.0**