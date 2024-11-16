# **Base 2 : Flexbox et Grid**

## **Introduction : Flexbox vs Grid**

1. **Pourquoi Flexbox et Grid ?**

   - Introduis brièvement le contexte historique : avant, la mise en page était souvent réalisée avec des flottants et des `display: inline-block`, ce qui entraînait des limitations.
   - **Explication des spécificités** :
     - **Flexbox** : conçu pour des mises en page en une seule direction (ligne ou colonne), avec un bon contrôle de l'alignement et de la distribution d’espace.
     - **CSS Grid** : parfait pour des mises en page en deux dimensions (lignes et colonnes), idéal pour créer des grilles cohérentes.

2. **Cas d'utilisation typiques**
   - Un petit tableau pour illustrer quand privilégier Flexbox ou Grid :
     - **Flexbox** : navigation, barres latérales, cartes alignées horizontalement ou verticalement.
     - **Grid** : galeries d’images, mises en page de page complète avec en-tête, contenu, pied de page.
   - Présente le but du talk : clarifier les différences, les cas d'utilisation et montrer comment les combiner pour des mises en page modernes.

## **Démonstrations interactives dans VS Code**

Dans chaque exemple, alterne entre le code dans VS Code et le rendu en direct via un serveur live (par exemple, avec l'extension Live Server). Cela permet au public de voir immédiatement le résultat de chaque modification.

### **Exemple 1 : Centrage d'un élément unique avec Flexbox**

- **But** : montrer la simplicité de Flexbox pour centrer du contenu.
- **Code** :

  ```html
  <div class="flexbox-container">
    <div class="centered-item">Centré</div>
  </div>
  ```

  ```css
  .flexbox-container {
    display: flex;
    justify-content: center; /* Centre horizontalement */
    align-items: center; /* Centre verticalement */
    height: 100vh;
  }
  .centered-item {
    width: 100px;
    height: 100px;
    background-color: #4caf50;
    color: white;
    text-align: center;
  }
  ```

- **Explications interactives** :
  - Montre l’effet de `justify-content` et `align-items` en changeant leurs valeurs.
  - Pose la question : "Comment feriez-vous cela avec Grid ? Quelles différences aurions-nous ?"

### **Exemple 2 : Mise en page de cartes avec Flexbox**

- **But** : montrer Flexbox pour un agencement en ligne avec un débordement géré.
- **Code** :

  ```html
  <div class="card-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </div>
  ```

  ```css
  .card-container {
    display: flex;
    flex-wrap: wrap; /* Permet le retour à la ligne */
    gap: 10px;
  }
  .card {
    width: 150px;
    height: 100px;
    background-color: #2196f3;
    color: white;
    text-align: center;
  }
  ```

- **Explications interactives** :
  - Montre ce que fait `flex-wrap` en l’activant/désactivant, et change `gap`.
  - Explique comment Flexbox est efficace ici pour aligner des éléments dans une seule direction.

### **Exemple 3 : Grille d'images avec CSS Grid**

- **But** : illustrer la puissance de Grid pour créer une grille en deux dimensions.
- **Code** :

  ```html
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Trois colonnes égales */
    gap: 15px;
  }
  .grid-item {
    background-color: #ff5722;
    color: white;
    text-align: center;
    padding: 20px;
  }
  ```

- **Explications interactives** :
  - Montre l’effet de `grid-template-columns` en modifiant le nombre de colonnes et la taille.
  - Utilise `grid-template-rows` pour illustrer la flexibilité du contrôle en deux dimensions.

### **Exemple 4 : Page complète combinant Flexbox et Grid**

- **But** : illustrer comment Flexbox et Grid fonctionnent bien ensemble.
- **Code** :

  ```html
  <div class="page-container">
    <header>Header</header>
    <div class="sidebar">Sidebar</div>
    <main>Main Content</main>
    <footer>Footer</footer>
  </div>
  ```

  ```css
  .page-container {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 200px 1fr;
    height: 100vh;
  }
  header {
    grid-area: header;
    background-color: #3f51b5;
  }
  .sidebar {
    grid-area: sidebar;
    background-color: #9c27b0;
  }
  main {
    grid-area: main;
    background-color: #4caf50;
  }
  footer {
    grid-area: footer;
    background-color: #ff9800;
  }
  ```

- **Explications interactives** :
  - Montre comment Grid organise la structure principale, et où Flexbox pourrait être utilisé pour aligner des éléments à l'intérieur de `main` ou `footer`.
  - Pose une question de récapitulation : “Que préférez-vous pour une structure comme celle-ci, et pourquoi ?”

## **Conclusion et Interactivité**

- **Résumé des points clés** : Reviens rapidement sur les avantages spécifiques de chaque méthode.
- **Questions et participation** : Encourage les questions pour clarifier des points ou approfondir.
- **Propose des exercices** : Comme modifier les colonnes et les lignes dans Grid, ou ajouter de nouveaux éléments dans un conteneur Flex pour voir l’effet de `flex-wrap` et de `justify-content`.

Avec cette approche détaillée et ces exemples concrets, tu pourras vraiment rendre ton talk interactif et pratique. Prêt à coder en direct ?
