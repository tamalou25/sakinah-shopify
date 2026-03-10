# 🕌 Sakinah - L'Harmonie de Médine

> Site e-commerce Shopify spécialisé dans les produits spirituels musulmans

[![Shopify](https://img.shields.io/badge/Shopify-2.0-95BF47?logo=shopify)](https://www.shopify.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

## 🎯 Présentation

**Sakinah** est une boutique en ligne proposant des tapis de prière Rawdah premium, des parfums authentiques de Médine et des accessoires spirituels pour musulmans en France.

### ✨ Caractéristiques

- 🕋 **Tapis Rawdah Premium** : Inspirés du jardin sacré de Médine
- 🌺 **Parfums Authentiques** : Fragrances halal sans alcool
- 👶 **Collection Enfants** : Tapis adaptés aux petits musulmans
- 👨‍👩‍👧‍👦 **Tapis Groupe** : Pour prières familiales
- 🎁 **Coffrets Cadeaux** : Idéaux pour Ramadan, Aïd, mariages

## 📁 Structure du Projet

```
sakinah-shopify/
├── assets/              # CSS, JS, images
├── config/              # Configuration thème
├── layout/              # Templates de base
├── locales/             # Traductions
├── sections/            # Sections réutilisables
├── snippets/            # Composants
├── templates/           # Pages produits/collections
├── data/                # Données produits (CSV)
├── docs/                # Documentation
└── scripts/             # Scripts utilitaires
```

## 🚀 Démarrage Rapide

### Prérequis

- Compte Shopify (essai gratuit 14 jours)
- [Shopify CLI](https://shopify.dev/themes/tools/cli) installé
- Node.js 16+ (optionnel)

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/tamalou25/sakinah-shopify.git
cd sakinah-shopify
```

2. **Se connecter à Shopify**
```bash
shopify login --store sakinah-medine.myshopify.com
```

3. **Pousser le thème**
```bash
shopify theme push
```

4. **Importer les produits**
```bash
# Via Shopify Admin > Produits > Importer
# Utiliser le fichier : data/produits-sakinah.csv
```

## 🎨 Personnalisation

### Couleurs

Modifier les variables dans `assets/theme.css` :

```css
:root {
  --vert-medine: #00A651;
  --or-rawdah: #C9A961;
  --noir-nuit: #1A1A1A;
}
```

### Logo

Remplacer `assets/logo-sakinah.svg` par votre logo.

## 📦 Import Produits

Le fichier `data/produits-sakinah.csv` contient 15 produits prêt à importer :

- 5 Tapis individuels
- 3 Tapis enfants
- 2 Tapis groupe
- 3 Parfums
- 2 Accessoires

## 🛠️ Apps Shopify Recommandées

| App | Fonction | Prix |
|-----|----------|------|
| [Judge.me](https://judge.me) | Avis clients | Gratuit |
| [Klaviyo](https://klaviyo.com) | Email marketing | Gratuit |
| [Loox](https://loox.app) | Photo reviews | 29€/mois |
| [AfterShip](https://aftership.com) | Suivi livraison | 12€/mois |
| [ReConvert](https://reconvert.io) | Upsell | 8€/mois |

## 📊 Performance

- ⚡ Score Lighthouse : 95+
- 📱 Mobile-first design
- 🔒 HTTPS & Sécurisé
- ♻️ SEO optimisé

## 📝 Pages Incluses

- 🏠 Accueil (hero, best-sellers, témoignages)
- 🛍️ Boutique (collections organisées)
- 📖 À propos (histoire de Sakinah)
- 📧 Contact (formulaire + FAQ)
- 📝 Blog (guides spirituels)
- ⚖️ Légal (CGV, RGPD, mentions)

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit (`git commit -m 'Ajout fonctionnalité'`)
4. Push (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📞 Support

- 📧 Email : salam@sakinah.fr
- 📝 Documentation : [docs/](docs/)
- 🐛 Issues : [GitHub Issues](https://github.com/tamalou25/sakinah-shopify/issues)

## 📜 Licence

MIT License - voir [LICENSE](LICENSE)

## 🚀 Roadmap 2026

- [x] Structure de base
- [x] Import produits
- [ ] Configuration apps
- [ ] Lancement soft (avril 2026)
- [ ] Campagne Ramadan 2027
- [ ] Showroom Paris

---

**Fait avec 💚 par l'équipe Sakinah**

*"Transformez votre foyer en sanctuaire de paix"*