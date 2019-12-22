[wiki-dtd]: https://en.wikipedia.org/wiki/Document_type_definition
[dep-mdn-data]: https://github.com/mdn/data

<div align="center">

# Email Types Data

General TypeScript definitions and data that can be used when building emails.

```sh
yarn add @email-types/data
```

</div>

---

| Category          | Description                                                            | Exports                                                               |
| :---------------- | :--------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| [**css**](#css)   | Email specific data about the different features of the CSS language.  | • `data-types`                                                        |
| [**html**](#html) | Email specific data about the different features of the HTML language. | • `doctypes`                                                          |
| [**mso**](#mso)   | Data about the different features of the MSO language.                 | • `properties` <br> • `syntaxes` <br> • `operators` <br> • `versions` |

## CSS

<details>
  <summary><strong>Examples</strong></summary>
  <ul>
    <li><a href="https://github.com/email-types/msotype" target="_blank">msotype</a></li>
  </ul>
</details>

<p></p>

Email specific data about the different features of the CSS language. All CSS
data is generated using [`mdn-data`][dep-mdn-data] during the build pipeline,
exposing only what's relevant to reduce the overall package size.

```ts
import * as css from '@email-types/data/css';
```

### DataTypes

CSS basic data types, such as `<string>`, `<number>`, and `<length>`.

## HTML

<details>
  <summary><strong>Examples</strong></summary>
  <ul>
    <li><a href="https://github.com/email-types/doctype" target="_blank">email-doctype</a></li>
  </ul>
</details>

<p></p>

Email specific data about the different features of the HTML language.

```ts
import * as html from '@email-types/data/html';
```

### Doctypes

HTML [Document Type Definition (DTD)][wiki-dtd] data that can be used in emails.
It does not include unsupported or deprecated doctype versions.

Checkout [email-doctype] for an example using this data.

## MSO

<details>
  <summary><strong>Examples</strong></summary>
  <ul>
    <li><a href="https://github.com/email-types/msotype" target="_blank">msotype</a></li>
        <li><a href="https://github.com/email-types/stylis-plugin-mso" target="_blank">stylis-plugin-mso</a></li>
  </ul>
</details>

<p></p>

Data about the different features of the Microsoft Office ("MSO") language.

```ts
import * as mso from '@email-types/data/mso';
```

### Properties

MSO style property data, including data for the `mso-` CSS vendor prefix. When
using this data, you should consider the following:

**`css alternatives`** - Properties that end with an `-alt` postfix that are
direct alternatives to a standard CSS property.

**`office only`** - Properties that do not end with an `-alt` postfix and have
no CSS equivalent. Instead, they correspond to a Microsoft Office feature.
However, since some versions of Microsoft Outlook use Microsoft Word as it's
rendering engine, these properties may or may not have an effect on your email.

- **todo**: Test each of these properties to understand how they effect
  rendering of emails. Then document it all.

### Syntaxes

MSO syntax is value definitions used for the formal syntax of MSO properties.
For example, the `mso-border-alt` property allows for `<border-style>` values.
This is referring to a syntax defined in `syntaxes.ts`.

```ts
// example properties.ts
{
  'mso-border-alt': {
    syntax: '<border-style>',
  }
}

// example syntaxes.ts
{
  'border-style': {
    syntax: 'dashed | dotted | <string>';
  }
}
```

### Operators

MSO operator syntax that can be used to create MSO conditional expressions,
comments.

### Versions

MSO version vectors that map to specific Outlook clients. This is commonly
used—in combination with an [`operator`](#operators)—to target specific versions
of Outlook when creating conditional expressions, comments.

## Upcoming

**Clients**

Data about the different email clients—which will include `applications` and
`webmail`.
