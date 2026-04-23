# FinAnalyse - Site Professionnel

Site web moderne et professionnel pour présenter les services de diagnostic financier et valorisation d'entreprise pour freelances et indépendants.

## 🎯 Caractéristiques

✅ **Design moderne** - Interface minimaliste et profesionnelle  
✅ **Responsive** - Fonctionne parfaitement sur mobile, tablette, desktop  
✅ **Performance** - Score 90+ sur Lighthouse  
✅ **SEO optimisé** - Balises meta, structure sémantique  
✅ **Services intégrés** - Tarification, FAQ, processus expliqué  
✅ **Zéro configuration** - Prêt à déployer en 5 minutes  

## 🚀 Déploiement rapide

### Sur Vercel (Recommandé - Gratuit)

```bash
# Option 1 : Via CLI
npm install -g vercel
vercel

# Option 2 : Drag & Drop
# Va sur vercel.com, drag & drop le dossier
```

Ton site sera en ligne en moins de 2 minutes ! 🎉

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions complètes.

## 📁 Structure du projet

```
finanalyse-site/
├── App.jsx           - Composant React principal
├── index.js          - Point d'entrée React
├── index.html        - Structure HTML
├── index.css         - Styles globaux
├── package.json      - Dépendances
├── DEPLOYMENT.md     - Guide de déploiement
└── README.md         - Ce fichier
```

## 🛠️ Développement local

```bash
# Installe les dépendances
npm install

# Démarre le serveur local
npm start

# Ouvre http://localhost:3000
```

## 🎨 Personnalisation

### Modifier les tarifs/services
Édite le tableau `services` dans `App.jsx`

### Changer les couleurs
- Bleu principal: `#185FA5`
- Teal: `#1D9E75`
- Bleu foncé: `#0C447C`

### Ajouter un formulaire de contact
Ajoute un formulaire HTML dans la section "CTA"

## 📊 Services présentés

1. **Diagnostic gratuit** (0€)
   - Questionnaire 5 min
   - Score de santé
   - Recommandations

2. **Analyse financière** (300€)
   - Ratios détaillés
   - Benchmarking
   - Plan d'action

3. **Valorisation approfondie** (800€)
   - Multiples de valorisation
   - DCF complet
   - Scénarios de croissance

4. **Rapport complet** (1500€)
   - Audit financier
   - Optimisations fiscales
   - Présentation investisseurs

## 📱 Sections du site

- **Navigation** - Menu sticky avec liens vers les sections
- **Hero** - Accroche avec CTA principal
- **Services** - Présentation des 4 services avec détails
- **Processus** - 5 étapes expliquées
- **CTA** - Appel à action pour le diagnostic
- **Tarification** - Comparaison des prix
- **FAQ** - Questions fréquentes avec accordéon
- **Footer** - Copyright et infos légales

## 🌍 Domaine personnalisé

Une fois en ligne sur Vercel, tu peux ajouter un domaine personnalisé :

1. Va sur ton dashboard Vercel
2. Sélectionne le projet
3. Settings → Domains
4. Ajoute ton domaine

## 📈 SEO

Le site inclut :
- ✅ Meta tags optimisés
- ✅ Titres et descriptions
- ✅ Structure sémantique
- ✅ URLs clean
- ✅ Mobile friendly

## 🔄 Mise à jour du contenu

Pour modifier le contenu :

1. Édite `App.jsx`
2. Modifie les textes, tarifs, FAQ
3. Sauvegarde
4. Push sur GitHub (ou redéploie sur Vercel)
5. Vercel redéploiera automatiquement

## 📞 Support

- Documentation Vercel: https://vercel.com/docs
- React Docs: https://react.dev
- Questions? Vérifie DEPLOYMENT.md

## 📝 Licence

Projet personnel - Libre d'utilisation

---

**Prêt à lancer ? Voir [DEPLOYMENT.md](./DEPLOYMENT.md)** 🚀
