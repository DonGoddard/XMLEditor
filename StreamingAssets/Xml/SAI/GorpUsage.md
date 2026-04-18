# Gorp Data Context — XamlWindow Usage Guide

**GORP** (Gestalt Object Relational Programming) is a typed, XML-based data format you can use to supply real values for `{Binding}` expressions in the XAML visual editor. It is an alternative to the JSON source format — select which one to use with the **JSON | Gorp** tab in the Data Context panel.

---

## Quick Start

1. Open XamlWindow and select a `.xaml` file.
2. In the right panel, expand **Data Context** and click the **Gorp** tab.
3. Paste or write a Gorp model (see format below).
4. Click **Apply** — the status line shows `● Gorp · N values`.
5. Set a TextBlock's `Text` attribute to `{Binding Title}`.
6. Click **▶ Preview** in the title bar — the canvas shows the resolved value.

---

## Document Structure

A Gorp data context document is an XML file with a `<gorp>` root element containing a `<models>` section:

```xml
<gorp>
  <models>
    <model namespace="data">
      <variables>
        <variable name="Title"    type="string">Hello World</variable>
        <variable name="Count"    type="int">42</variable>
        <variable name="Price"    type="double">9.99</variable>
        <variable name="Active"   type="bool">true</variable>
      </variables>
      <pathvariables>
        <pathvariable path="User" name="Name"  type="string">Alice</pathvariable>
        <pathvariable path="User" name="Age"   type="int">30</pathvariable>
      </pathvariables>
      <arrays>
        <array name="Tags" type="[string]">Alpha, Beta, Gamma</array>
        <array name="Scores" type="[int]">10, 20, 30</array>
      </arrays>
    </model>
  </models>
</gorp>
```

---

## The Three Data Elements

### `<variable>` — flat value

```xml
<variable name="Title" type="string">Hello World</variable>
```

Binds as `{Binding Title}` → `Hello World`

| Attribute | Required | Description |
|---|---|---|
| `name` | yes | The binding key used in `{Binding Name}` |
| `type` | yes | `string`, `int`, `double`, `float`, `bool`, `key` |
| `isimmutable` | no | `"true"` marks the variable read-only (cosmetic in the editor) |

**Type notes:**
- `string` / `key` — string value; surrounding `"quotes"` in the element text are stripped automatically.
- `int` / `double` / `float` — parsed as a number; displays without a trailing `.0` when it is a whole number.
- `bool` — `true` or `false` (case-insensitive); displays as `True` or `False`.

---

### `<pathvariable>` — dotted-path value

```xml
<pathvariable path="User" name="Name" type="string">Alice</pathvariable>
<pathvariable path="User" name="Age"  type="int">30</pathvariable>
```

The key is formed as `path.name`. Binds as:
- `{Binding User.Name}` → `Alice`
- `{Binding User.Age}`  → `30`

Paths can be arbitrarily deep — just use deeper dot notation:

```xml
<pathvariable path="Company.Address" name="City" type="string">London</pathvariable>
```

Binds as `{Binding Company.Address.City}` → `London`

---

### `<array>` — list of values

```xml
<array name="Tags" type="[string]">Alpha, Beta, Gamma</array>
```

Values are comma-separated. Binds as:
- `{Binding Tags}` → `3 items`  (count string — useful for ItemsControl labels)

Array elements are resolved by taking the first item when a binding path walks into an array.

---

## Multiple Models

You can define more than one model in a single document. The parser distinguishes **data models** (variables, pathvariables, and/or arrays that carry real values) from **output-only models** (a single `bool result` variable that exists only as an algorithm output slot).

| Model type | Rule | Example |
|---|---|---|
| One data model | Namespace omitted — `{Binding Name}` works directly | All built-in example files |
| Two+ data models | Namespace prepended to avoid collisions | Custom multi-domain files |
| Output-only model | Never counted, never prefixed | `escape`, `Simple.Escape` |

**Output-only pattern** — a model is treated as non-meaningful when it has:
- exactly one variable
- that variable is named `result` with type `bool`
- no pathvariables and no arrays

```xml
<!-- This is an output model — NOT counted -->
<model namespace="Simple.Escape">
  <variables>
    <variable name="result" type="bool">false</variable>
  </variables>
</model>
```

**Built-in example files** (`Gorp.Simple.xml`, `Gorp.Loop.xml`, `Gorp.Exists.xml`, `Gorp.Algorithm.xml`) each have one data model (`orp`) and one output model (`escape` / `Simple.Escape`). Every key is registered under **both** the bare name and the fully-qualified `namespace.key` form:

```
{Binding harvey}           → 17      (bare)
{Binding orp.harvey}       → 17      (qualified — always works)
{Binding timbucktu.sunrise}→ 89      (bare pathvariable)
{Binding orp.timbucktu.sunrise} → 89 (qualified pathvariable)
{Binding hillgiant}        → 3 items (bare array)
{Binding orp.hillgiant}    → 3 items (qualified array)
{Binding escape.result}    → False   (qualified — output model)
```

**Two data models** (prefix required):

```xml
<gorp>
  <models>
    <model namespace="product">
      <variables>
        <variable name="Name"  type="string">Widget</variable>
        <variable name="Price" type="double">19.99</variable>
      </variables>
    </model>
    <model namespace="user">
      <variables>
        <variable name="Name" type="string">Alice</variable>
      </variables>
    </model>
  </models>
</gorp>
```

Both forms always work:
- `{Binding Name}` → last-written value (`Alice`, since `user` is defined second)
- `{Binding product.Name}`  → `Widget`  (unambiguous)
- `{Binding product.Price}` → `19.99`
- `{Binding user.Name}`     → `Alice`

Use the qualified form whenever there is a name collision across models.

---

## Binding Syntax (in XAML attributes)

Gorp values slot into standard WPF binding expressions. All of the following work in Preview mode:

| Expression | Effect |
|---|---|
| `{Binding Title}` | Resolves the `Title` variable |
| `{Binding User.Name}` | Resolves the pathvariable `path="User" name="Name"` |
| `{Binding Count, StringFormat=Items: {0}}` | Shows `Items: 42` |
| `{Binding Missing, FallbackValue=N/A}` | Shows `N/A` when the key does not exist |

---

## Computed Expressions

The **Computed** section below the Gorp field lets you derive new values from model variables using `[Key]` syntax (the same section used in JSON mode):

| Name | Expression | Result |
|---|---|---|
| `Full` | `[First] + ' ' + [Last]` | `Jane Doe` |
| `Total` | `[Price] * [Qty]` | `29.97` |
| `Label` | `'Items: ' + [Count]` | `Items: 42` |

Computed names are available as bindings just like model variables: `{Binding Full}`.

---

## Supported Types Reference

| Gorp type | C# type stored | Notes |
|---|---|---|
| `string` | `string` | Surrounding `"..."` stripped from element text |
| `key` | `string` | Same as `string`; used for identifier-like values |
| `int` | `double` | Whole numbers display without `.0` |
| `double` | `double` | Full precision |
| `float` | `double` | Parsed as double |
| `bool` | `bool` | `true`/`false` → `True`/`False` in canvas |
| `[T]` (array) | `List<object>` | Each element typed by inner type |

---

## Loading the Example Files

The `StreamingAssets/Xml/SAI/` folder contains several ready-to-use Gorp XML files:

| File | What it demonstrates |
|---|---|
| `Gorp.Simple.xml` | Variables, pathvariables, and a Simple algorithm |
| `Gorp.Loop.xml` | Bounded loop pattern with `<goto>` and `limit` |
| `Gorp.Exists.xml` | `Exists`, `And`, `Or`, `Less`, `Equal`, `Greater` logic |
| `Gorp.Algorithm.xml` | `Forall` + `Filter` + MathML expression `(x/3)+1` |

Paste the `<gorp>...</gorp>` content of any of these into the Gorp field and click **Apply** to load its model data. The algorithm sections are parsed for future Phase B (MathML execution) — in Phase A only the `<models>` section is evaluated.

---

## Inline Data Shape (Algorithm Files)

Some Gorp files embed model data directly inside an `<algorithm><input>` element rather than a top-level `<models>` section. The parser handles both shapes:

```xml
<!-- Standard shape -->
<gorp>
  <models>
    <model namespace="orp"> ... </model>
  </models>
</gorp>

<!-- Inline / algorithm-embedded shape -->
<gorp>
  <algorithm namespace="floop">
    <input name="orp">
      <variables> ... </variables>
      <pathvariables> ... </pathvariables>
      <arrays> ... </arrays>
    </input>
  </algorithm>
</gorp>
```

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Status shows `✕ ...` in red | Malformed XML | Check for unclosed tags or invalid characters |
| `{Binding X}` stays literal in Preview | Key not found in model | Check the variable `name` matches exactly (case-sensitive) |
| `{Binding path.name}` returns nothing | Wrong dot syntax | Must match `path` + `.` + `name` attributes exactly |
| Array binding shows nothing | Empty array | Add at least one value |
| Multiple models: binding fails | Two meaningful models present | Use `{Binding namespace.Key}` when two or more models have variables |
