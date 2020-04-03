---
title: React, Typescript et types génériques
date: 2020-04-3T19:30:00.000Z
lang: fr
description: "Un petit mémo sur le polymophisme en Typescript, comment il fonctionne et comment en titrer parti pour concevoir des composants réutilisables avec React."
---

# Prerequis

Je vais estimer ici que vous conaissez les bases de Typescript, de React et d'ES6.


```ts
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

// highlight-start
class Animal {
    numLegs: number;
}
// highlight-end

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

```


# Codesandbox ?


`oembed: https://codesandbox.io/s/ynn88nx9x`
