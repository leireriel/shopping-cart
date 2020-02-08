# Shopping Cart 🛒

<!-- Captura de la app -->
<!-- App link ➜ (link) -->
<!-- enlace a repo en github -->

## 👀 What is this?

This is a ... <br />
Enjoy it! 🔥

## 📅 What am I working on now

Creating project structure :)

## 🏗️ Getting started

You need to have installed [Node.js](https://nodejs.org/), and then:

1. `$ git clone https://github.com/leireriel/shopping-cart.git`
2. `$ npm install`
3. `$ npm start` + open `http://localhost:3000/`

## ⛩️ Structure

```
shopping-cart
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── layouts
│   ├── modals
│   ├── routes
│   │   └── App
│   ├── services
│   ├── styles
│   ├── utils
|   └── index.js
├── tests
│   ├── App.test.js
|   └── setupTests.js
├── .babelrc
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 📦 Dependencies

* [react](https://www.npmjs.com/package/react) ⚛ 
* [prop-types](https://www.npmjs.com/package/prop-types)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [node-sass](https://www.npmjs.com/package/node-sass)

I also used the following dependencies, included in Create React App 2.0. <br />
In order to see or modify the dependencies in `package.json` you can `$ npm run eject`, which I did not as I liked the react configuration for this modules:
* ESLint
* Babel
* Webpack
* Jest

Babel plugins
* [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)

## 💪 Challenges

...

## 💡 To Do

...
<!-- alias para importar sin ../../ rutas absolutas! :), no relativas -->
<!-- ver si eslint y optional-chaining están funcionando -->
<!-- Tests -->

## 🔧 Production build

To generate a production ready version on `docs` folder:

1. Add `"homepage": "./"` in `package.json`
2. Make sure there are only `https` in your project (replace all references to http with https)
3. `$ npm run build` + `$ mv build docs`

Now you can upload your public folder to GitHub Pages or similar :)

## 🤜🤛 Suggestions

All suggestions are welcome, please open an issue 💜
