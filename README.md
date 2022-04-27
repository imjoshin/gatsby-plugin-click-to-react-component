# gatsby-plugin-click-to-react-component

Provides drop-in features for [click-to-component](https://github.com/ericclemmons/click-to-component).

## Install

`npm install click-to-react-component gatsby-plugin-click-to-react-component`

## How to use

1. Include the plugin in your `gatsby-config.js` file.

```javascript:title=gatsby-config.js
plugins: [
  ...
  `gatsby-plugin-click-to-react-component`,
  ...
]
```

2. Use as described in [click-to-component](https://github.com/ericclemmons/click-to-component#features)'s docs!

## Configuration

In `gatsby-config.js`, configuration can be set as follows:

```javascript:title=gatsby-config.js
plugins: [
  ...
  {
    resolve: `gatsby-plugin-click-to-react-component`,
    options: {
      // whether or not click-to-react-component is enabled
      // the library auto-tree shakes in production mode already
      // this would be useful for other environmental situations
      enabled: true,
      
      // any other options passed here will be passed into
      // <ClickToComponent {...pluginOptions} /> for
      // future compatibility
    }
  },
  ...
]
```

