# Welcome to @thaddeusjiang/react-table 👋

React Table Component, if you need resize the column, you should use this component.

[![Version](https://img.shields.io/npm/v/@thaddeusjiang/react-table.svg)](https://www.npmjs.com/package/@thaddeusjiang/react-table)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/ThaddeusJiang/react-table#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ThaddeusJiang/react-table/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/ThaddeusJiang/react-table)](https://github.com/ThaddeusJiang/react-table/blob/dev/LICENSE)
[![Twitter: ThaddeusJiang](https://img.shields.io/twitter/follow/ThaddeusJiang.svg?style=social)](https://twitter.com/ThaddeusJiang)

## features

- [x] out of box react table component with beautiful style.
- [x] resize column size of table.
- [x] automatic animations
- [x] override bodyClassName and cellClassName

### 🏠 [Homepage](https://github.com/ThaddeusJiang/react-table/tree/dev/packages/react-table#readme)

## Install

```sh
yarn add @thaddeusjiang/react-table @tanstack/react-table
```

## Usage

if you don't use [Tailwind CSS](https://tailwindcss.com/)

```ts
import { DataTable } from '@thaddeusjiang/react-table';
import '@thaddeusjiang/react-table/dist/index.css';

<DataTable columns={columns} data={data} sort={['name', 'asc']} />;
```

if you use [Tailwind CSS](https://tailwindcss.com/)

```ts
import { DataTable } from '@thaddeusjiang/react-table';

<DataTable columns={columns} data={data} sort={['name', 'asc']} />;
```

modify tailwind.config.js

```diff
// tailwind.config.js
+ const path = require("path");

module.exports = {
  content: [
    "./src/**/*{js,ts,jsx,tsx}",
+    path.join(
+      require.resolve("@thaddeusjiang/react-table"),
+      "../**/*.{js,ts,jsx,tsx}"
+    ),
  ],
  theme: {},
  plugins: [],
};
```

## [Examples](./stories/DataTable.stories.tsx)

## Author

👤 **Thaddeus Jiang**

- Website: https://thaddeusjiang.com/
- Twitter: [@ThaddeusJiang](https://twitter.com/ThaddeusJiang)
- Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/ThaddeusJiang/react-table/issues). You can also take a look at the [contributing guide](https://github.com/ThaddeusJiang/react-table/blob/dev/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Thaddeus Jiang](https://github.com/ThaddeusJiang).

This project is [MIT](https://github.com/ThaddeusJiang/react-table/blob/dev/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
