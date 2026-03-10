# Guide d'Installation - Rawdine Shopify

## 🛠️ Prérequis

- Compte Shopify (Plan Basic minimum)
- Accès admin au store
- Git installé (pour versionning)

## 🚀 Installation Rapide

### 1. Cloner le Repository

```bash
git clone https://github.com/tamalou25/sakinah-shopify.git
cd sakinah-shopify
```

### 2. Installer Shopify CLI

```bash
# macOS (Homebrew)
brew tap shopify/shopify
brew install shopify-cli

# Windows (Chocolatey)
choco install shopify-cli

# Linux
sudo apt install shopify-cli
```

### 3. Connecter au Store Shopify

```bash
shopify login --store rawdine.myshopify.com
```

### 4. Upload Theme

```bash
# Option A : Push complet
shopify theme push

# Option B : Preview sans publier
shopify theme dev
```

### 5. Importer Produits

1. Admin Shopify > **Produits** > **Importer**
2. Upload `data/products-import.csv`
3. Vérifier mapping colonnes
4. Importer

### 6. Configuration Theme

1. Admin > **Boutique en ligne** > **Thèmes**
2. **Personnaliser** le thème
3. Régler couleurs Rawdine (config/settings_schema.json)
4. Ajouter logo
5. Sauvegarder

## 📝 Configuration Avancée

### Couleurs Rawdine

```json
"color_primary": "#00A651",  // Vert Médine
"color_secondary": "#D4AF37", // Or Rawdah
"color_accent": "#000000",   // Noir
"color_background": "#FDFCF8" // Crème
```

### Menu Navigation

Créer menu "main-menu" :
- Accueil
- Boutique > Collections
- À Propos
- Contact

### Pages Légales

1. Admin > **Pages** > **Ajouter**
2. Copier contenu depuis `content/legal/`
3. Publier : CGV, Mentions Légales, Confidentialité

## 📦 Livraison

Configurer zones :
- France gratuite >100€
- Sinon 6,90€ Colissimo

## 💳 Paiements

Activer :
- Shopify Payments (CB)
- PayPal
- Apple Pay / Google Pay

## ✅ Checklist Pré-Lancement

- [ ] Produits importés avec images
- [ ] Collections créées (Tapis, Parfums, etc.)
- [ ] Pages légales publiées
- [ ] Menu configuré
- [ ] Livraison paramétrée
- [ ] Paiements activés
- [ ] Tests commande complète
- [ ] Google Analytics connecté
- [ ] Domaine personnalisé (rawdine.fr)

## 👥 Support

Problème ? Ouvre une issue :
https://github.com/tamalou25/sakinah-shopify/issues
