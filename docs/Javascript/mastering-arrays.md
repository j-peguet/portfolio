---
id: mastering-arrays
title: Mastering Arrays
---

Pour apprendre à connaitre et maitriser les tableaux en JS.

## Trier
### sort
Cette méthode trie les éléments du tableau en fonction d'une condition.
```js live
function Sort() {
  let myArray = [6,9,4,8,3,7,1,5,2]

  // Tri les éléments par ordre croissant
  let sortedArray = myArray.sort((a, b) => a - b)

  return (
    <div>
      <h2>{sortedArray.map(element => `${element} ,`)}</h2>
    </div>
  )
}
```

## Filtrage
### filter
Cette méthode retourne un nouveau tableau contenant uniquement les éléments correspondant à la condition.
```js live
function Filter() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  // Ne retourne que les éléments supérieur à 4
  let filteredArray = myArray.filter(element => element > 4)

  return (
    <div>
      <h2>{filteredArray.map(element => `${element} ,`)}</h2>
    </div>
  )
}
```

### find
Cette méthode retourne le premier élément du tableau correspondant à la condition.
```js live
function Find() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  // Retourne l'élément 4
  let element = myArray.find(element => element == 4)

  return (
    <div>
      <h2>{element}</h2>
    </div>
  )
}
```

### findIndex
Cette méthode ressemble beaucoup à la méthode [find](#find) mais retourne la position de l'élément dans le tableau.
```js live
function FindIndex() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  // Retourne la position de '4'
  let element = myArray.findIndex(element => element == 4)

  return (
    <div>
      <h2>{element}</h2>
    </div>
  )
}
```

## Ordonner
### reverse
Cette méthode inverse l'ordre de tous les éléments du tableau.
```js live
function Reverse() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  let reverseArray = myArray.reverse()

  return (
    <div>
      <h2>{reverseArray.map(element => `${element} ,`)}</h2>
    </div>
  )
}
```

## Parcourir le tableau
### map
Cette méthode retourne un nouveau tableau rempli avec le callback de la fonction passé en paramètre.
```js live
function Map() {
  let myArray = [1,2,3,4,5,6,7,8,9]

 // Pour chaque élément, le double est retourné.
  let doubleArray = myArray.map(element => element * 2)

  return (
    <div>
      <h2>{doubleArray.map(element => `${element} ,`)}</h2>
    </div>
  )
}
```

### forEach
Cette méthode exécute une fonction pour chaque élément du tableau.
```js live
function ForEach() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  let sum = 0

  myArray.forEach(element => {sum = sum + element})

  return (
    <div>
      <h2>{sum}</h2>
    </div>
  )
}
```

### reduce
Cette méthode prend deux arguments, l'accumulateur (acc) et l'élément courant (n).

Pour chaque élément le résultat sera stocké dans l'accumulateur.
```js live
function Reduce() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  let sum = myArray.reduce((acc, n) => acc + n)

  return (
    <div>
      <h2>{sum}</h2>
    </div>
  )
}
```

## Faire une condition
### includes
Cette méthode permet de savoir si un élément ce trouve dans un tableau
```js live
function Includes() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  let bool

  if(myArray.includes(6)){
    bool = 'true'
  } else {
    bool = 'false'
  }

  return (
    <div>
      <h2>{bool}</h2>
    </div>
  )
}
```

### some
Cette méthode permet de savoir si au moins un élément du tableau valide la condition donnée.
```js live
function Some() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  let bool

  // Vérifie si au moins un élément est supérieur à 6
  if(myArray.some(element => element > 6)){
    bool = 'true'
  } else {
    bool = 'false'
  }

  return (
    <div>
      <h2>{bool}</h2>
    </div>
  )
}
```

### every
Cette méthode permet de savoir si tous les éléments du tableau valident la condition donnée.
```js live
function Every() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  let bool

  // Vérifie si tous les éléments sont supérieur à 6
  if(myArray.every(element => element > 6)){
    bool = 'true'
  } else {
    bool = 'false'
  }

  return (
    <div>
      <h2>{bool}</h2>
    </div>
  )
}
```

## Transformation
### fill
Cette méthode permet de remplacer tous les éléments du tableau par une valeur.
```js live
function Fill() {
  let myArray = [1,2,3,4,5,6,7,8,9]

  // Ne retourne que les éléments supérieur à 4
  let filteredArray = myArray.fill(4)

  return (
    <div>
      <h2>{filteredArray.map(element => `${element} ,`)}</h2>
    </div>
  )
}
```

### flat
Cette méthode permet de supprimer les tableaux imbriqués.
```js live
function Flat() {
  let myArray = [[1,2],[3,4,5],[6,7],[8,9]]

  let fattenArray = myArray.flat(2)

  return (
    <div>
      <h2>{fattenArray.map(element => `${element} ,`)}</h2>
    </div>
  )
}
```

### flatMap
Cette méthode permet de supprimer les tableaux imbriqués tous en appliquant une fonction a chaque élément.

Cette méthode combine les fonctions [flat](#flat) et [map](#map).
```js live
function FlatMap() {
  let myArray = [[1],[3],[6],[8]]

  let fattenArray = myArray.flatMap(n => n * 3)

  return (
    <div>
      <h2>{fattenArray.map(element => `${element} ,`)}</h2>
    </div>
  )
}
```