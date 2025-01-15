# Variable sans modificateur


parfois appelé "package-private"

:::tip INFO
La variable est **<span style="color: #8067aa">accessible à l'intérieur de la classe</span>** et **<span style="color: #8067aa">dans les classes du même paquet</span>**. Les classes à l'intérieur de la classe et dans les classes du même paquet. **<span style="color: #8067aa">Les classes en dehors du paquet n'y ont pas accès, qu'elles héritent ou non de la classe</span>**.
:::

**<span style="color: #8067aa">Exemple</span>**:

::: code-group
```java [Exemple.java]
public class Exemple {
  int variablePaquet;
}
```
:::

:::warning
Dans cette exemple, `variablePaquet` sera accessible à l'intérieur de la classe `Exemple` et aux classes du même paquet.
:::