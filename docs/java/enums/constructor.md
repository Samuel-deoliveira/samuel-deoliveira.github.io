# Constructeurs

:::tip INFO
Les énumérations peuvent avoir des constructeurs pour initialiser leurs attributs. Les constructeurs d'énumération sont toujours privées et sont utilisées pour assigner des valeurs aux attributs lors de la création des constantes.
:::

Exemple:

:::code-group
```java [Niveau.java]
public enum Niveau {
  // ...
    
  // Constructeur privé
  private Niveau(int valeur) {
    this.valeur = valeur;
  }
  
}
```