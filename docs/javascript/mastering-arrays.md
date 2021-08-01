---
id: mastering-arrays
title: Mastering Arrays
---

:::caution Attention
Cette page est en cours de réalisation. Des éléments peuvent être **incorrect** !!
:::

## map
```js live
function Map() {
  let myArray = [1,2,3,4,5,6,7,8,9]

 // Pour chaque élément, le double est retourné.
  let doubleArray = myArray.map(element => element * 2)

  return (
    <div>
      <h2>{doubleArray.map(element => {return `${element} ,`})}</h2>
    </div>
  );
}
```
## forEach
## filter
## find
## findIndex
## reduce
## some
## every
## includes
## fill
## reverse
## flat
## flatMap
## sort