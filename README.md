## 📦 Install

```
yarn add @13enbi/css-parse
```

## 🔨 Usage

```ts
import { parse, stringify } from '@13enbi/css-parse';

const css = `a {
	color: red;
}`

const result = parse(css);

const str = stringify(result);
```
