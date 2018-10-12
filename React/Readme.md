# React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
- Not necessarily but usage of JSX is helpful

## 1. Basics
    - Bootstraping can be done through `create-react-app` which is installed globally using `npm install -g create-react-app`
    - `npm start` will start the development server that can be viewed at http://localhost:3000
    - `export default App` is a default export and can be imported with `import App from './App.js'`
    - You need to `import React from 'react'` and `import ReactDOM from 'react-dom'`
    - You can use `ReactDOM.render(<App />, document.getElementById('root'));` to integrate the app
    - Refer [Mozilla reference](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) for more details about named and default export. Only one default export per module but multiple named export are allowed.

## 2. JSX
    - Is a preprocessor(most probably) which converts HTML type code to JS code for React
    - Not required for react but preferred way of development
    - `const element = <h1> Hello world! </h1>;` renders an element with h1 tag and 'Hello World' as text
    - We can use the `{ variablesHere }` to dynamically populate the template
    - `const element = <h1> Hello, { userName }</h1>;`
    - `userName` can be both string or another JSX object like `const userName = <span> Rohan </span>`
    - Functions can be called inside `{ }` to format the data
    - `{ content }` can be used in an JSX code to load JSX expressions or even in tag properties such as `<img src={image.href} alt={image.alt} />`
    - ReactDOM uses camel case naming for properties such as `<div className='danger'></div>`
    - Babel compiles JSX down to `React.createElement()` calls.

## 3. Rendering
    - React uses `ReactDOM.render( object, elementToRenderAt)`
    - If you want to render an expression, pass the object as an object and not component
    - Ex: `const element = <h1> Hello </h1>` is rendered as `ReactDOM.render(element, document.getElementById('root'))`
    - If you want to render a component, pass it as a HTML object
    - `class App extends React.Component` is rendered as `ReactDOM.render(<App />, document.getElementById('root'))`
