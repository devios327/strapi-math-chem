# Strapi plugin math-chem ∑🧪✨
This Strapi plugin for mathematical and chemical formulas provides advanced capabilities in creating and managing content. Easily insert, edit, and display equations in your web content, making it more informative and interactive. 
![img](https://raw.githubusercontent.com/devios327/strapi-math-chem/main/mathtype-panel-min.png)
This plugin allows you to easily integrate formulas into your Strapi-based website or application, expanding the functionality of your content management system.

## Features
- Great formula coverage
- Publication-quality equations
- Styling and fonts
- Handwriting recognition
- Chemistry: ChemType

## How it works
After installing and configuration, Strapi field "Rich text" will be custom CKEditor with math type and chem type.
Press the MathType icon or the ChemType icon to create and edit equations and formulas.
![img](https://raw.githubusercontent.com/devios327/strapi-math-chem/main/mathtype-editor-1-min.png)
Output format is [MathML](https://developer.mozilla.org/ru/docs/Web/MathML):
![img](https://raw.githubusercontent.com/devios327/strapi-math-chem/main/output-mathml-min.png)


## Installation
To install this plugin, you need to add an NPM dependency to your Strapi application.

```js
# Using Yarn
yarn add devios327/math-chem

# Or using NPM
npm install devios327/math-chem
```

## Configuration
Firstly, add and enable plugin in config file:
```
./config/plugins.js.
```

```js
module.exports = {
  // ...
  'math-chem': {
    enabled: true,
    resolve: './src/plugins/math-chem'
  },
  // ...
}
```
Secondly, add Content Security Policy to global middlewares. This add resource with [MathType Integrations](https://docs.wiris.com/mathtype/?lang=en) to Content Security Policy.
```
./config/middlewares.js
```

```js
module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'",  'www.wiris.net'],
          'script-src-attr': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'www.wiris.net'],
          'font-src': ["'self'", "'unsafe-inline'", 'www.wiris.net'],
          'connect-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'www.wiris.net'],
          'style-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'www.wiris.net'],
          'img-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'www.wiris.net'],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
```

Then, you'll need to build your admin panel:
```js
# Using Yarn
yarn build

# Or using NPM
npm run build
```

# Enjoy!
