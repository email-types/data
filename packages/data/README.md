[msotype]: https://github.com/email-types/email-types/msotype
[stylis-plugin-mso]:
  https://github.com/email-types/email-types/stylis-plugin-mso

# Email Types Data

General TypeScript definitions and compatibility data that can be used when
building emails. Checkout [msotype] and [stylis-plugin-mso] for examples.

```sh
yarn add --dev @email-types/data
```

## Data

|                 | Description                                            | Exports                                                                              |
| :-------------- | :----------------------------------------------------- | :----------------------------------------------------------------------------------- |
| [**mso**](#mso) | Data about the different features of the MSO language. | • `properties` <br> • `syntaxes` <br> • `operators` <br> • `types` <br> • `versions` | `AlternativePropertiesHyphen` |
| **features**    | _todo_                                                 | _todo_                                                                               |
| **providers**   | _todo_                                                 | _todo_                                                                               |

### MSO

#### Properties

Property data for MSO (Microsoft Office), including data for the `mso-` CSS
vendor prefix. There are 2 categories of property data.

- **`alternatives`** - Properties that end with an `-alt` postfix that are
  direct alternatives to a standard CSS property.
- **`standard`** - Properties that correspond to a Microsoft Office feature.
  While these do not have a CSS equivalent, they may or may not have an effect
  on Microsoft Outlook

#### Syntaxes

MSO value definition syntax is used for the formal syntax of MSO properties. For
example, the `color` property uses the following syntax where <named-color> is
referring to a syntax that is defined in `syntaxes.ts`.

```ts
color: {
  syntax: '<named-color>';
}
```

#### Operators

Operator syntax that can be used to create MSO conditional expressions,
comments.

#### Types

CSS basic data types, such as `<sting>` and `<length>`, that are acceptable
values that can be used by MSO properties.

#### Versions

MSO version vectors that map to specific Outlook clients. This is commonly used
to target specific versions of Outlook with conditional comments.

### Notes

**Key, Value References**

Any key, value that uses the `$Ref<T>` type is referencing a key of a different
`interface` or `type`, unless the value is set to `Unsure`, `None`, `null`, or
`undefined`.

For example:

```ts
interface Foo {
  name: 'Beep' | 'Bop';
}

interface Bar {
  boop: $Ref<Foo>;
}

const bar: Bar = {
  boop: 'Bep',
};
```
