# Parcours des constantes

:::tip INFO
Vous pouvez parcourir toutes les constantes d'une énumération à l'aide d'une boucle for et de la méthode `values()`.
:::

Exemple:

```java
for (Couleur couleur : Couleur.values()) {
  System.out.println(couleur);
}
```

Cette boucle affichera toutes les constantes de l'énumération Couleur.