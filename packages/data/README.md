[msotype]:
  https://github.com/email-types/email-types/tree/master/packages/msotype
[stylis-plugin-mso]:
  https://github.com/email-types/email-types/tree/master/packages/stylis-plugin-mso

# Email Types Data

General TypeScript definitions and compatibility data that can be used when
building emails. Checkout [msotype] and [stylis-plugin-mso] for examples.

```sh
yarn add --dev @email-types/data
```

## Data

|                 | Description                                            | Exports                                         |
| :-------------- | :----------------------------------------------------- | :---------------------------------------------- |
| [**mso**](#mso) | Data about the different features of the MSO language. | • `properties` <br> • `syntaxes` <br> • `types` | `AlternativePropertiesHyphen` |
| **features**    | _todo_                                                 | _todo_                                          |
| **providers**   | _todo_                                                 | _todo_                                          |

### MSO

#### Properties

Data for MSO (Microsoft Office), including data for the `mso-` CSS vendor
prefix. There are 3 categories of data.

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

#### Types

CSS basic data types, such as `<sting>` and `<length>`, that are acceptable
values that can be used by MSO properties.
