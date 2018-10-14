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

## 4. Components
- Components in React can be function components or class components
- Function components are defined by function returing a JSX HTML object
- Ex:
```
function GreetUserFunction(props){
  return <h1>Hello, {props.name}</h1>
}
```
- Class components can be defined by extending a class with `React.Component` and accessing the properties through `this.props`
- Ex:
```
class GreetUserClass extends React.Component{
  render(){
    return(
        <h1> Hello, { this.props.name }</h1>
    )
  }
}
```
- Component names must also be capitalized else React fails to identify these as custom componets and considers them as default HTML component
- Components should never modify props which are read only. Props are one way binding and use state to handle two way data binding.
- Class component constructor should always call base constructor with `props`

## 5. State
- States can only be implemented in class components and not in function components due to the limitation of not being able to modify state.
- Create a local variable called state in the class constructor that holds the current state.
- Use `componentDidMount()` and `componentWillUnmount()` as post constructor and pre destructor functions to perform startup and cleanup operations
- Use additional function which perform the state change operations
- To change the value of state, use `this.setState()` which sets the state variables to their new values.
- Do not modify state variables directly as they will not be updated in the GUI and do not use the state variables directly in `setState` and instead use the local `state` variable passed to `setState`.
- Ex:
```
function updateState(){
  // here this.state.val is a state variable
  this.setState({
      val: this.state.val + 1   //this is wrong as its async
  })
  this.setState((state, props) => {
      val: state.val + 1        //this is correct as the function is passed proper state value
  })
}
```
- State updates are merged and multiple state updates can be done in a single cycle. This doesn't mean all state updates need to done in single call.
- Neither parent nor child can know if a component is stateful or stateless. Passing state data to child components can be done by props whereas to parent component can be done function callbacks.
