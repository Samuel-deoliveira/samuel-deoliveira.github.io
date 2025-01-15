# Variable private

:::tip INFO
La variable est **<span style="color: #8067aa">accessible uniquement à l'intérieur</span>** de la classe dans laquelle elle est déclarée. **<span style="color: #8067aa">Les autres classes n'y ont pas accès</span>**.
:::

**<span style="color: #8067aa">Exemple</span>**:

::: code-group
```java [Exemple.java]
public class Exemple {
  private int variablePrivate;
}
```
:::

:::warning
Dans cette exemple, `variablePrivate` ne sera accessible qu'à l'intérieur de la classe `Exemple`.
:::