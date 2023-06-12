## Épisode 0 : comprendre le rôle des fichiers utilisés

### Introduction
Le but de chaque épisode est de présenter rapidement une notion ou un élément de la programmation en informatique. Dans
chaque épisode, il y a un exercice à réaliser afin de mettre en pratique et de comprendre le concept abordé.

Pour chaque épisode, il y a 3 répertoires : `cours`, `exercice` et `solution`.

Le répertoire `cours` contient les exemples des notions abordées dans l'épisode. Il est lié à une vidéo qui explique
son contenu (le lien sera présent ici dès que la vidéo sera disponible).

Le répertoire `exercice` contient les fichiers à utiliser pour réaliser l'exercice présenté à la section
[Exercice](#exercice). Pour réaliser l'exercice, l'unique fichier à modifier est `javascript/episode.js`. Pour voir le
résultat de votre code, il suffit d'ouvrir le fichier `exercice/episode.html` avec un navigateur web.

Le répertoire `solution` contient une solution de l'exercice proposé. Vous pouvez alors comparer votre code et le code
de la solution. Pour cela, il suffit d'ouvrir les fichiers `exercice/javascript/episode.js` et le fichier
`solution/javascript/episode.js`.

Ces trois répertoires contiennent les mêmes fichiers, c'est-à-dire :
* [episode.html](exercice/episode.html) : le fichier à ouvrir avec votre navigateur web (Firefox, Chrome, Safari,
  Microsoft Edge, etc.)
* [README.md](README.md) : instructions de cet épisode (ce que vous êtes en train de lire)
* [javascript/episode.js](exercice/javascript/episode.js) : le code informatique qui est exécuté lorsque vous ouvrez le
  fichier `episode.html` avec votre navigateur. C'est ce fichier qu'il faut modifier pendant cet exercice.
* [javascript/outils.js](exercice/javascript/outils.js) : les outils qui aideront à coder. Ces outils seront utilisés
  dans le fichier `episode.js`.

### But de l'épisode
Le but de cet épisode est de comprendre la notion de variable et celle de fonction.

Une variable sert à stocker une donnée. On peut voir une variable comme une boîte qui peut être remplie par du texte,
un nombre, etc. Il est très important de donner un nom explicite qui représente ce que contient la variable. On évitera
les noms comme `a`, `maVariable`, `truc`. On préférera `age`, `nomDeLaRue` ou `nomRue`. On ne met jamais d'accents ou de
caractères spéciaux dans un nom de variable à l'exception des caratères `-` et `_`. En JavaScript, la convention veut
qu'on utilise le camelCase pour les noms de variable :
```
les mots sont liés, sans espace. Chaque mot commence par une majuscule, sauf le premier
```
Pour en savoir plus sur les conventions de nommage, vous pouvez lire
[cet article](https://jeremiechazelle.dev/comment-ecrire-du-javascript-convention-de-nommage/).
Pour créer une variable, on utilise le mot clé `let`. On dit que l'on déclare une variable :
```
let nombrePommes;
```
Pour affecter une valeur à cette variable, on utilise l'opérateur `=`, comme ceci :
```
nombrePommes = 10;
```
Il est possible d'effectuer la déclaration et l'affectation de la variable sur une seule ligne :
```
let nombrePommes = 10;
```
Une variable doit être déclarée une seule fois mais elle peut subir de nombreuses affectations.

Une fonction sert à effectuer une opération. Elle prend (éventuellement) des variables en entrée et retourne une
variable en sortie. Par exemple, la fonction `ajoute10` prendra comme variable d'entrée un nombre, par exemple
`32`, et retournera en sortie un autre nombre, ici, `42`.
La création de la fonction `ajoute10` s'écrira de la façon suivante :
```
function ajoute10(unNombre) {
  return unNombre + 10;
}
```
Elle sera utilisée de la façon suivante :
```
let petitNombre = 32;
let grandNombre = ajoute10(petitNombre);
```
Les variables en entrée d'une fonction sont appelés les arguments d'entrèes ou les paramètres.

La variable retournée par la fonction par l'instruction `return` est appelée la valeur de sortie ou le retour de la
fonction.

Comme pour les variables, les fonctions doivent avoir un nom expliquant l'opération exécutée par la fonction. Le nom
d'une fonction est donc un verbe suivi d'un nom ou d'un groupe de nom, par exemple, `supprimeLettreE`. On utilise
aussi le camelCase pour écrire le nom d'une fonction.

**Normalement, une fonction utilise ces paramètres d'entrée pour calculer un résultat qu'elle retourne. Une fonction ne
devrait pas modifier ces paramètres d'entrée.**

### Exercice
1. Déclarer une variable nommée `chiffre` qui est égale à 9.
2. Écrire une fonction nommée `calculeDouble` qui multiplie le nombre passé en paramètre par 2.
3. Utiliser la fonction `calculeDouble` pour calculer le double de 9 et stocker le résultat dans la variable nommée `resultat`.
4. Afficher le résultat.
