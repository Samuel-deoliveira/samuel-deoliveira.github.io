# Variable protected

:::tip INFO
La variable est **<span style="color: #8067aa">accessible à l'intérieur de la classe</span>**, ainsi que dans **<span style="color: #8067aa">les classes du même paquet</span>** et **<span style="color: #8067aa">les classes qui héritent de cette classe</span>**. Les classes qui n'héritent pas de cette classe et ne sont pas dans le même paquet n'y ont pas accès.
:::

**<span style="color: #8067aa">Exemple</span>**:

::: code-group
```java [Exemple.java]
public class Exemple {
  protected int variableProtected;
}
```
:::

:::warning
Dans cette exemple, `variableProtected` sera accessible à l'intérieur de la classe `Exemple`.
:::