# Méthodes

:::tip INFO
Les méthodes sont déclarées à l'intérieur d'une classe et définissent les comportements des objets de cette classe. Une méthode est composée d'un en-tête (qui inclut le type de retour, le nom et les paramètres) et d'un corps (qui contient les instructions à exécuter).
:::

Exemple:

::: code-group
```java [Chien.java]
public class Chien {
  //Variables d'instance
  String nom;
  String race;
  int age;
  
  //Méthode aboyer
  public void aboyer() {
    System.out.println("Woof!");
  }
  
  //Méthode afficherInfos
  public void afficherInfos() {
    System.out.println("Nom:" + nom + ", Race:" + race + ", Age:" + age);
  }
}
```
:::