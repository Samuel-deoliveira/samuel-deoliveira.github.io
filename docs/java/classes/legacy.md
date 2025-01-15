# Héritage

:::tip INFO
L'héritage est un autre principe fondamental de la programmation orientée objet qui permet à une classe d'hériter des propriétés et des méthodes d'une autre classe. En Java, l'héritage est réalisé en utilisant le mot-clé `extends`.
:::

Si nous avons une classe `Chien` et que nous voulons créer une classe `ChienDeGarde` qui hérite de `Chien`:

Exemple:

:::code-group
```java [ChienDeGarde.java]
public class ChienDeGarde extends Chien {
  private boolean entraine;

  // Constructeur avec paramètres
  public ChienDeGarde(String nom, String race, int age, boolean entraine) {
    super(nom, race, age);
    this.entraine = entraine;
  }

  // Getter pour entraine
  public boolean isEntraine() {
    return entraine;
  }

  // Setter pour entraine
  public void setEntraine(boolean entraine) {
    this.entraine = entraine;
  }

  // Méthode spécifique à ChienDeGarde
  public void garder() {
    if (entraine) {
      System.out.println(getNom() + " garde la maison.");
    } 
    else {
      System.out.println(getNom() + " n'est pas entraîné pour garder.");
    }
  }
}
```
:::

Dans cet exemple, la classe `ChienDeGarde` hérite de la classe `Chien` et a accès a ses variables d'instance (via les getters et setters) et à ses méthodes. La classe `ChienDeGarde` ajoute une variable d'instance supplémentaire `entraine` et une méthode `garder()` spécifique à cette classe.

Lorsque nous utilisons le mot-clé `super` dans le constructeur de `ChienDeGarde`, nous appelons le constructeur de la classe parente (`Chien`) pour initialiser les variables d'instance héritées. Cela permet de réutiliser le code de la classe parente et de suivre le principe DRY (Don't Repeat Yourself).