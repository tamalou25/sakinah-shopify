# 🚀 Guide d'Installation - Sakinah Shopify

## Prérequis

Avant de commencer, assurez-vous d'avoir :

- ✅ Un compte Shopify (essai gratuit 14 jours)
- ✅ [Shopify CLI](https://shopify.dev/themes/tools/cli) installé
- ✅ Git installé
- ✅ Node.js 16+ (optionnel mais recommandé)

---

## 💻 Installation Shopify CLI

### macOS / Linux

```bash
brew tap shopify/shopify
brew install shopify-cli
```

### Windows

Télécharger l'installeur : [Shopify CLI Windows](https://shopify.dev/themes/tools/cli/installation)

Ou via npm :

```bash
npm install -g @shopify/cli @shopify/theme
```

Vérifier l'installation :

```bash
shopify version
# Devrait afficher : Shopify CLI 3.x.x
```

---

## 📂 Étape 1 : Cloner le Repository

```bash
# Cloner le projet
git clone https://github.com/tamalou25/sakinah-shopify.git

# Aller dans le dossier
cd sakinah-shopify

# Vérifier les fichiers
ls -la
```

Vous devriez voir :
```
assets/
layout/
sections/
snippets/
templates/
data/
docs/
README.md
```

---

## 🏢 Étape 2 : Créer une Boutique Shopify

1. **Aller sur** [shopify.com/fr](https://www.shopify.com/fr)
2. **Cliquer** "Essai gratuit"
3. **Remplir** le formulaire :
   - Email : votre-email@example.com
   - Nom boutique : **sakinah-medine** (ou autre)
4. **Valider** → Vous avez 14 jours gratuits

**URL de votre boutique :**
```
https://sakinah-medine.myshopify.com
```

⚠️ **Notez cette URL, vous en aurez besoin !**

---

## 🔑 Étape 3 : Connexion Shopify CLI

### Se connecter à Shopify

```bash
shopify auth login
```

Une page web s'ouvre → Connectez-vous avec votre compte Shopify.

### Sélectionner votre boutique

```bash
shopify theme list
```

Choisir votre boutique dans la liste affichée.

---

## 📦 Étape 4 : Pousser le Thème

### Option A : Pousser comme nouveau thème (Recommandé)

```bash
shopify theme push --unpublished
```

Cette commande :
- Crée un nouveau thème "Sakinah"
- L'envoie sur Shopify
- Ne le publie pas (mode brouillon)

**Résultat attendu :**
```
✅ Thème créé avec succès !
ID: 123456789
Nom: Sakinah
Statut: Non publié

Aperçu : https://sakinah-medine.myshopify.com?preview_theme_id=123456789
```

### Option B : Développement local

```bash
shopify theme dev
```

Cette commande :
- Lance un serveur local
- Synchronise les changements en temps réel
- Ouvre l'aperçu dans le navigateur

**URL locale :**
```
http://127.0.0.1:9292
```

---

## 📊 Étape 5 : Importer les Produits

### Via l'Admin Shopify (Interface)

1. **Aller dans** `Admin Shopify > Produits`
2. **Cliquer** "Importer"
3. **Sélectionner** le fichier `data/produits-sakinah.csv`
4. **Mapper** les colonnes (normalement auto-détecté)
5. **Cliquer** "Importer les produits"

⏳ **Temps d'import : 2-3 minutes pour 15 produits**

### Via Shopify CLI (Avancé)

```bash
# Installer l'outil d'import
npm install -g shopify-product-import

# Importer le CSV
shopify-product-import --csv data/produits-sakinah.csv --store sakinah-medine
```

---

## 📋 Étape 6 : Créer les Collections

### Manuellement dans l'Admin

1. **Aller dans** `Admin > Produits > Collections`
2. **Cliquer** "Créer une collection"

**Créer ces 6 collections :**

| Nom | Type | Conditions |
|-----|------|------------|
| Tapis Individuels | Auto | Type contient "Tapis de Prière" ET Tag contient "individuel" |
| Tapis Enfants | Auto | Tag contient "enfant" |
| Tapis Groupe | Auto | Tag contient "groupe" |
| Parfums | Auto | Type = "Parfum" |
| Accessoires | Auto | Type = "Accessoire" |
| Coffrets Cadeaux | Auto | Type = "Coffret" |

### Via Script (Optionnel)

```bash
# Script à venir dans scripts/create-collections.sh
```

---

## 🎨 Étape 7 : Personnaliser le Thème

### Accéder au Customizer

```
Admin Shopify > Boutique en ligne > Thèmes > Personnaliser
```

### Uploader le Logo

1. **Section Header**
2. **Logo** → Uploader `assets/logo-sakinah.svg`
3. **Hauteur** : 50px

### Configurer le Hero

1. **Section Hero**
2. **Titre** : "Sakinah - L'Harmonie de Médine"
3. **Sous-titre** : "Transformez votre foyer en sanctuaire de paix"
4. **Image de fond** : Uploader une image de tapis/Médine
5. **Bouton principal** :
   - Texte : "Découvrir la Collection Rawdah"
   - Lien : `/collections/tapis-individuels`

### Ajouter les Produits Mis en Avant

1. **Section Featured Products**
2. **Ajouter 3 blocs "Produit"**
3. **Sélectionner** :
   - Tapis Rawdah Premium
   - Parfum Rawdat Al-Madinah
   - Tapis Enfant Petit Muslimin

---

## 📧 Étape 8 : Configurer les Pages

### Créer les Pages Statiques

```
Admin > Boutique en ligne > Pages > Ajouter une page
```

**Pages à créer :**

1. **Notre Histoire**
   - Handle : `notre-histoire`
   - Template : `page`
   - Contenu : Copier depuis la documentation fournie

2. **Contact**
   - Handle : `contact`
   - Template : `page.contact`
   - Ajouter formulaire de contact

3. **Livraison & Retours**
   - Handle : `livraison`
   - Détails : France, Colissimo, délais

4. **FAQ**
   - Handle : `faq`
   - Questions/réponses structurées

### Pages Légales (RGPD Obligatoire)

```
Admin > Paramètres > Mentions légales
```

Shopify génère automatiquement :
- Politique de remboursement
- Politique de confidentialité
- Conditions générales de vente
- Mentions légales

⚠️ **À personnaliser avec vos infos légales (SIRET, adresse, etc.)**

---

## 🛠️ Étape 9 : Configurer la Navigation

### Menu Principal

```
Admin > Boutique en ligne > Navigation > Menu principal
```

**Structure recommandée :**

```
🏠 Accueil (/)
🛍️ Boutique (/collections/all)
  ├─ Tapis Individuels (/collections/tapis-individuels)
  ├─ Tapis Enfants (/collections/tapis-enfants)
  ├─ Tapis Groupe (/collections/tapis-groupe)
  ├─ Parfums (/collections/parfums)
  └─ Accessoires (/collections/accessoires)
💚 À propos (/pages/notre-histoire)
📖 Blog (/blogs/guides)
📧 Contact (/pages/contact)
```

### Menu Footer

Créer 3 menus séparés :

1. **Menu Boutique**
2. **Menu Informations**
3. **Menu Légal**

---

## 💳 Étape 10 : Configurer les Paiements

### Activer Shopify Payments

```
Admin > Paramètres > Paiements > Shopify Payments
```

**Configurer :**
- ✅ Cartes bancaires (Visa, Mastercard, Amex)
- ✅ Apple Pay
- ✅ Google Pay

### Ajouter PayPal

```
Admin > Paramètres > Paiements > Autres modes de paiement
```

- Chercher "PayPal"
- Activer "PayPal Express Checkout"
- Se connecter avec compte PayPal Business

---

## 🚚 Étape 11 : Configurer la Livraison

### Zones de Livraison

```
Admin > Paramètres > Expédition et livraison
```

**Zone 1 : France Métropolitaine**
- Méthode : Colissimo Standard
- Tarif : 5,90€
- Gratuite dès 79€ d'achat
- Délai : 2-4 jours

**Zone 2 : DOM-TOM**
- Méthode : Colissimo Outre-Mer
- Tarif : 12,90€
- Délai : 7-12 jours

**Zone 3 : Union Européenne**
- Méthode : Colissimo International
- Tarif : 9,90€
- Délai : 5-8 jours

---

## ✅ Étape 12 : Tests Finaux

### Checklist Avant Lancement

- [ ] Thème poussé et visible en aperçu
- [ ] 15 produits importés avec photos
- [ ] 6 collections créées et peuplées
- [ ] Pages statiques créées (À propos, Contact, FAQ)
- [ ] Pages légales personnalisées (CGV, RGPD)
- [ ] Navigation configurée (header + footer)
- [ ] Logo et favicon uploadés
- [ ] Paiements activés (CB + PayPal)
- [ ] Livraison configurée (zones + tarifs)
- [ ] Test commande complète (panier → paiement)
- [ ] Test responsive mobile
- [ ] Vitesse site >80 (PageSpeed Insights)

### Passer une Commande Test

```
Admin > Paramètres > Paiements > Activer le mode test
```

1. Ajouter produit au panier
2. Remplir infos livraison
3. Utiliser carte test Shopify :
   - Numéro : `1` (Bogus Gateway)
   - CVV : `123`
   - Date : Futur
4. Valider commande
5. Vérifier confirmation email

---

## 🎉 Étape 13 : Publier le Thème

### Via l'Admin

```
Admin > Boutique en ligne > Thèmes
```

1. Trouver "Sakinah" dans les thèmes non publiés
2. Cliquer sur "..." → "Publier"
3. Confirmer

🎉 **Votre boutique est en ligne !**

URL publique :
```
https://sakinah-medine.myshopify.com
```

### Acheter un Nom de Domaine (Optionnel)

```
Admin > Paramètres > Domaines > Acheter un domaine
```

Exemple : `sakinah.fr` (19€/an)

---

## 🔧 Dépannage

### Problème : "Shopify CLI not found"

**Solution :**
```bash
# Réinstaller Shopify CLI
brew reinstall shopify-cli

# Ou via npm
npm install -g @shopify/cli @shopify/theme
```

### Problème : "Permission denied"

**Solution :**
```bash
sudo chown -R $(whoami) sakinah-shopify/
```

### Problème : "Theme push failed"

**Solution :**
```bash
# Vérifier la connexion
shopify whoami

# Se reconnecter
shopify auth logout
shopify auth login
```

### Problème : "CSV import failed"

**Solution :**
- Vérifier l'encodage du fichier (UTF-8)
- Ouvrir le CSV dans Excel → Enregistrer sous UTF-8
- Réessayer l'import

---

## 📞 Support

**Besoin d'aide ?**

- 📖 Documentation : [docs/](../docs/)
- 🐛 GitHub Issues : [Créer une issue](https://github.com/tamalou25/sakinah-shopify/issues)
- 📧 Email : salam@sakinah.fr
- 💬 Discord : [Rejoindre le serveur](#)

---

## 🎯 Prochaines Étapes

Après l'installation, consultez :

1. 🎨 [GUIDE-PERSONNALISATION.md](GUIDE-PERSONNALISATION.md)
2. 📦 [APPS-RECOMMANDEES.md](APPS-RECOMMANDEES.md)
3. ❓ [FAQ.md](FAQ.md)

---

**Félicitations ! Vous avez installé Sakinah avec succès ! 🎉**

*Qu'Allah bénisse votre projet et le rende source de baraka. 🤲*