# Polymorphisme

:::tip INFO
Le polymorphisme est un autre principe de la programmation orientée objet qui permet à un objet d'adopter plusieurs formes. En Java, cela permet à une méthode de traiter des objets de différentes classes de manière générique, tant qu'ils héritent d'une classe commune ou implémentent une interface commune.
:::

Par exemple, si nous avons une méthode qui prend un objet de la classe Chien comme argument, elle pourra également traiter des objets de la classe ChienDeGarde, puisque ChienDeGarde hérite de Chien:

:::code-group
```java [Main.java]
public class Main { 
  public static void main(String[] args) {
    Chien monChien = new Chien("Max", "Labrador", 3);
    ChienDeGarde monChienDeGarde = new ChienDeGarde("Rex", "Berger Allemand", 4, true);

    afficherInfosChien(monChien);
    afficherInfosChien(monChienDeGarde);
  }

  public static void afficherInfosChien(Chien chien) {
    System.out.println("Nom: " + chien.getNom() + ", Race: " + chien.getRace() + ", Age: " + chien.getAge());
  }
}
```
:::

Dans cet exemple, la méthode afficherInfosChien() accepte un objet de type Chien en tant que paramètre. Puisque la classe ChienDeGarde hérite de la classe Chien, nous pouvons également passer un objet ChienDeGarde à cette méthode, et le polymorphisme nous permet de traiter ces deux types d'objets de manière générque.