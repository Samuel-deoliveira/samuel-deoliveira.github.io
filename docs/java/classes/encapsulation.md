# Encapsulation

:::tip
L'encapsulation est un principe de la programmation orientée objet qui consiste à masquer les détails de mise en oeuvre d'une classe et à exposer uniquement une interface publique. En Java, cela peut être réalisé en utilisant des modificateurs d'accès pour les variables d'instance (généralement `private`) et en fournissant des méthodes publiques pour accéder et modifier ces variables, appelées aussi getters et setters.
:::

Exemple:

::: code-group
```java [Chien.java]
public class Chien {

  //Variable d'instance privées
  private String nom;
  private String race;
  private int age;

  //Constructeur avec paramètres
  public Chien(String nom, String race, int age) {
    this.nom = nom;
    this.race = race;
    this.age = age;
  }

  //Getter pour nom
  public String getNom() {
    return nom;
  }

  //Setter pour nom
  public void setNom(String nom){
    this.nom = nom;
  } 

  // Getter pour race
  public String getRace() {
    return race;
  }

  // Setter pour race
  public void setRace(String race) {
    this.race = race;
  }

  // Getter pour age
  public int getAge() {
    return age;
  }

  // Setter pour age
  public void setAge(int age) {
    this.age = age;
  }
    
}
```
:::

:::warning WARNING
Dans cet exemple, les variables d'instance `nom`, `race` et `age` sont définies comme [`private`](https://google.com), ce qui signifie qu'elles sont accessibles qu'à l'intérieur de la classe `Chien`. Pour accéder et modifier ces variables depuis d'autres classes, nous utilisons les méthodes publiques getters et setters.
:::