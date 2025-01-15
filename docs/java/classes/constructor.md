# Constructeur

:::tip INFO
Les constructeurs sont des méthodes spéciales qui permettent d'initialiser les objets d'une classe. Ils ont le même nom que la classe et n'ont pas de type de retour. Une classe peut avoir plusieurs constructeurs avec différents paramètres (c'est ce qu'ont appel la surcharge de constructeur).
:::

Exemple:

::: code-group
```java [Chien.java]
public class Chien {
  String nom;
  String race;
  int age;

  public Chien(){
    this.nom = "Inconnu";
    this.race = "Inconnu";
    this.age = 0;
  }

  public Chien(String nom, String race, int age) {
    this.nom = nom;
    this.race = race;
    this.age = age;
  }

  // ...

}
```