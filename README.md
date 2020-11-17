# 🌈  React Iconly Icons - In progress...

[![NPM](https://img.shields.io/npm/v/react-iconly.svg)](https://www.npmjs.com/package/react-iconly) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm downloads](https://img.shields.io/npm/dm/react-iconly.svg?style=flat-round)](https://www.npmjs.com/package/react-iconly)


> React component for Iconly icons

**react-iconly** is a collection of simply beautiful open source icons for React.js. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

## Based on Iconly Essential Icons [Iconly v2](https://ui8.net/piqodesign/products/iconly-essential-icons)

### Sets
- Bold
- Bulk 
- Light Border
- Broken 
- Two Tone

### Installation
    yarn add react-feather
    
  or
    
    npm i react-feather

### Usage

```jsx
import React from 'react';
import { Home } from 'react-iconly';

const App = () => {
  return <Home />
};

export default App;
```

Icons can be configured with inline props:
```jsx
<Home set="two-tone" primaryColor="blueviolet" secondaryColor="blue" stroke="bold" size="xlarge"/>
```
You can also include the whole icon pack:

```jsx
import React from 'react';
import * as Iconly from 'react-iconly';

const App = () => {
  return <Iconly.Home set="bulk" primaryColor="blueviolet" secondaryColor="blue" stroke="bold" size="xlarge"/>
};

export default App;
```


## Props

| Prop | Type | Default | Note |
|---|---|---|---|
| `label` | `string` |  | String to use as the aria-label for the icon. Use an empty string when you already have readable text around the icon,like text inside a button.
| `filled` | `boolean` | `false` | Set de icons sets to 'bold'.
| `primaryColor` | `string` | `currentColor` | Primary colour for icons.
| `secondaryColor` | `string` | `currentColor` | Secondary colour for **two-tone** icons set.
| `size` | `number | small, medium, large, xlarge` | `medium` | Control the size of the icon, you can set a custom **number** size
| `set` | `bold, bulk, light, broken, two-tone` | `light` | Iconly set option.
| `stroke` | `light, regular, bold` | `regular` | Sets the line stroke for icons.
| `style` | `object | string` |  | Custom styles property.

-----

## License

MIT © [jrgarciadev](https://github.com/jrgarciadev)
