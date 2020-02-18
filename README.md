# Shopping Cart 🛒

[Link to app online!](https://leireriel.github.io/shopping-cart/)

[Link to project in GitHub](https://github.com/leireriel/shopping-cart)

## 👀 What is this?

This is an App created with React and Redux.

It is a small shopping cart that can grow easy :)

Enjoy it! 🔥

## 🔧 Getting started

You need to have installed [Node.js](https://nodejs.org/), and then:

1. `$ git clone https://github.com/leireriel/shopping-cart.git`
2. `$ npm i`
3. `$ npm start` + open `http://localhost:3000/`

## ⛩️ Structure

```
shopping-cart
├── docs ---------------------- build folder
│   └── ...
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── Modals
│   │   │   └── ...
│   │   ├── Order
│   │   │   └── ...
│   │   ├── Shop
│   │   │   └── ...
│   │   └── Title
│   │       └── ...
│   ├── img
│   │   └── ...
│   ├── reducers
│   │   └── ...
│   ├── styles
│   │   └── ...
│   ├── App.js
|   └── index.js
└── tests
    └── ...
```

## 📦 Dependencies and config

I used `Create React App` ⚛ because it provides me with Webpack, Babel and ESLint configuration that is sufficient for my little project. It also comes with Jest.

If I wanted to modify the configutation of the modules I could run `$ npm run eject`.

Also I installed:
* [prop-types](https://www.npmjs.com/package/prop-types)
* [redux](https://www.npmjs.com/package/redux)
* [react-redux](https://www.npmjs.com/package/react-redux)
* [sass](https://www.npmjs.com/package/sass) for the modal
* [shortid](https://www.npmjs.com/package/shortid) to get keys to render a list

And this Babel plugin:
* [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)

To consider:
* Note that I have set `NODE_PATH=src` in `.env` file, in order to allow absolute paths on imports.

## 👩‍💻 How I worked and what are the reasons for my approach

In this App all the state is controlled by *Redux*. I wanted it that way in order to make the app more robust and clean. Besides I implemented *Redux hooks* as useSelector and useDispatch, which I think help to mantain clean the structure of the project.

The structure has *three big components*: Modals, Shop and Order.

1. *Modals*

The Modals directory has an `index.js` and the modal of the details product view (`ModalProduct.js`). It is prepared to have more modals and render only one each time. In `App.js` the Modals component wraps the store (Shop and Order components). This way I can render the modal (if a property in Redux state has been triggered) or the store.

**App.js**

Mi idea is that the App could grow, have an authentication process and routes. If that happens, I would create a `Routes` directory in the root of mi `src`. Inside it I would have one route composed by the Store (the current big components Shop and Order), and more routes, for example one for log in.
Then my `App.js` could render either the modal or the route for the shop, the login, etc., depending on the URL.

**Redux**

I have one property in Redux state for modal. Is is global and serves for the whole app, so there can only be one modal open in the application at the same time. By default, it is set to `false`. When an action is called, this property receives a `true`, a name of type of modal and the copies. That is how the component Modals can render one modal or another, depending on the type received.

**Actions**

The modal in `ModalProduct.js` has the action to add one item to the cart. It is the same action that receives the component Shop and it is accesible from the main view of the cart. Thanks to Redux, it is very very easy to add more actions like the one for remove one item. Also it is very simple to bring the state and show the total of items added to the cart for that product.

**Styles**

The styles for the modal are located in the common folder styles. I installed `sass` and created some variables for colors and breakpoints that can be reusable. I did not touch the main.css provided in the exercise, but could convert it to an scss and generate a component for the button and use the common variables.
I made the scss for my modal `responsive` :)

2. *Shop*

This component is the most complex. It has two big parts:

**ProductsList**

This component generates a `Product` component for each product in the array of data. I have prepared an array in `data.js` that contains objects, one per product. In this case there are three objects, but you can create more objects right now and the App will work just fine! How can it be? It is possible because this component iterates over the array and creates dinamically a `Product` component for each of them.

**The app is ready to receive an array with a lot of products, it is very easy to grow!**

In my mind, there could be a petition to an `API` that would provide an array. I would create a `service.js` file to make the call and the App would continue to work perfectly.

**Product**

This component is the bigger. It render the details of the product, the amount, price per unit and price total of each product.

**One single reducer**

Each `Product` component has three actions (add item, remove item, open modal). When the user interacts with a product and an action is called, the reducer receives the name of the product. This way we have one single reducer, that serves for infinite products, because it receives the data of the product dinamically. Also the initial state of the reducer is created dinamically depending on the array of products (the array that I created in data.js or the potential response from the API).
So we have an app that can grow very easy because both the products cart and the Redux state work dinamically depending on one initial array of data.

**Location of reducers**

The reducers and actions for both products and modal (add item, remove item, open modal) are located inside the `Product` component, in `modules`. That's because I thought the App can grow easily if each component contains its related parts.
Consequently, in the `reducers` folder that is in the root of `src`, there is only one index.js that receives all the reducers of each component and combines them in a rootReducer.

3. *Order*

This component `iterates` over all products stored in the `Redux` state. It adds the values of the number of products, the total and the total with discounts.

**Discounts**

This subcomponent of Order renders the discount separately from its parent, because it doesn't show the total but the discount of each separate product.
The best way I could think of to make this work was to directly access the property of Redux that has the name of the product and its discount. It works fine, but I think it could be improved to make it easier to implement the rendering of discounts for many products.

*In summary*

Redux:

✔️ Each component has their own modules (actions, reducers) in order to make the App able to grow easy.

✔️ I used React hooks (function components with memo to avoid re renders).

✔️ I used Redux hooks (useSelector and useDispatch). All application states works with Redux.

DONE extras! 💪

✔️ Discounts (the values are stored inside the state of each product)

✔️ Modal at level App (can be reutilizable) -sass for styles

✔️ The modal is responsive and is prepared to put more types of modals very easily with Redux.

## 📝 To Do

* Tests with Jest

I didn't have time enough.

## 🤜🤛 Suggestions

All suggestions are welcome, please open an issue 💜
