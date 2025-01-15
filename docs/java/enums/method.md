# Méthodes

:::tip INFO
Les énumérations peuvent également avoir des méthodes, tout comme les classes. Les méthodes sont définies à l'intérieur de l'énumération et peuvent être utilisées pour effectuer des opérations sur les attributs de l'énumération.
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

  // Méthode pour obtenir la valeur du niveau
  public int getValeur() {
    return valeur;
  }
  
}
```
:::

Dans cet exemple, l'énumération `Niveau` a une méthode `getValeur()` qui retourne la valeur de l'attribut `valeur`.