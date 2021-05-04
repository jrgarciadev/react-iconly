# 🌈 React Iconly Icons

[![NPM](https://img.shields.io/npm/v/react-iconly.svg)](https://www.npmjs.com/package/react-iconly)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm downloads](https://img.shields.io/npm/dm/react-iconly.svg?style=flat-round)](https://www.npmjs.com/package/react-iconly)

> React component for Iconly icons

**react-iconly** is a collection of simply beautiful open source icons for React.js. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

## Based on Iconly Essential Icons [Iconly v2](https://ui8.net/piqodesign/products/iconly-essential-icons)

🌐 [Website](https://react-iconly.jrgarciadev.com/)

### Sets

- Bold
- Bulk
- Light Border
- Broken
- Two Tone
- Curved (New)

### Installation

    yarn add react-iconly

or

    npm i react-iconly

### Usage

```jsx
import React from 'react'
import { Home } from 'react-iconly'

const App = () => {
  return <Home />
}

export default App
```

You can also wrap your app inside a `IconlyProvider` component, this will make all the icons that are within the context use the Provider properties

If you set specific props for each Icon the Provider properties will be overwritten

```jsx
import React from 'react'
import { IconlyProvider, Home, Notification } from 'react-iconly'

const App = () => {
  return (
    <IconlyProvider
      set='bulk'
      primaryColor='blueviolet'
      secondaryColor='blue'
      stroke='bold'
      size='xlarge'
    >
      <Home />
      <Notification primaryColor='yellow' />
    </IconlyProvider>
  )
}

export default App
```

You can also use Iconly component and then set then icon name you prefer:

```jsx
import React from 'react'
import { Iconly } from 'react-iconly'

const App = () => {
  return (
    <Iconly name='Search' set='bulk' primaryColor='blueviolet' size='xlarge' />
  )
}

export default App
```

Icons can be configured with inline props:

```jsx
<Home
  set='curved'
  primaryColor='blueviolet'
  secondaryColor='blue'
  stroke='bold'
  size='xlarge'
/>
```

You can also include the whole icon pack:

```jsx
import React from 'react'
import * as IconlyPack from 'react-iconly'

const App = () => {
  return (
    <IconlyPack.Home
      set='bulk'
      primaryColor='blueviolet'
      secondaryColor='blue'
      stroke='bold'
      size='xlarge'
    />
  )
}

export default App
```

Custom style example

```jsx
import React from 'react'
import { Send } from 'react-iconly'

const App = () => {
  return (
    <Send
      style={{ transform: 'rotate(45deg)' }}
      primaryColor='red'
      stroke='bold'
      size='xlarge'
    />
  )
}

export default App
```

## Props

| Prop             | Type                                               | Default                           | Note                                                                                                                                             |
| ---------------- | -------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`          | `string`                                           |                                   | String to use as the aria-label for the icon. Use an empty string when you already have readable text around the icon,like text inside a button. |
| `filled`         | `boolean`                                          | `false`                           | Set de icons sets to 'bold'.                                                                                                                     |
| `primaryColor`   | `string`                                           | `currentColor`                    | Primary colour for icons.                                                                                                                        |
| `secondaryColor` | `string`                                           | `currentColor`                    | Secondary colour for **two-tone** and **bulk** icons set.                                                                                        |
| `size`           | `number`                                           | `small` `medium` `large` `xlarge` | `medium`                                                                                                                                         | Control the size of the icon, you can set a custom **number** size |
| `set`            | `light` `bold` `two-tone` `bulk` `broken` `curved` | `light`                           | Iconly set option.                                                                                                                               |
| `stroke`         | `light` `regular` `bold`                           | `regular`                         | Sets the line stroke for **light** and **two-tone** icons set.                                                                                   |
| `style`          | `object`                                           |                                   | Custom styles property.                                                                                                                          |

---

## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

Please adhere to this project's `CODE_OF_CONDUCT`.

## License

MIT © [jrgarciadev](https://github.com/jrgarciadev)
