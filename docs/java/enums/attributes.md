# Attributes

:::tip INFO
Les énumérations peuvent avoir des attributs, tout comme les classes. Les attributs sont définis à l'intérieur de l'énumération et sont généralement privés.
:::

Exemple:

:::code-group
```java [Niveau.java]
public enum Niveau {
  BAS(1),
  MOYEN(2),
  HAUT(3);

  private int valeur;

  // Constructeur privé
  private Niveau(int valeur) {
    this.valeur = valeur;
  }

}
```
:::