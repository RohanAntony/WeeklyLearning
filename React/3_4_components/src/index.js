import React from 'react';
import ReactDOM from 'react-dom';

const GreetUserFunction = (props) => {
  return <h1>Welcome, {props.name}</h1>;
}

class GreetUserClass extends React.Component{
  constructor(props){
    super(props)
    this.name = props.name
    // alternatively use this.props.name directly in render function
  }

  render(){
    return <h1>Welcome, {this.name}</h1>
  }
}

const GreetUserFunctionWithoutProps = () => {
  return <h1> Hello User </h1>
}

const App = ( ) => {
  return (
    <div>
      <GreetUserFunction name="Rohan"/>
      <GreetUserClass name="Antony"/>
      <GreetUserFunctionWithoutProps name="Test"/>
    </div>
  )
}

// User defined components must be capitalised
// The below code doesn't work even if compilation is successful

// const app = () => {
//   return (
//     <div>
//       <GreetUserFunction name="Rohan"/>
//       <GreetUserClass name="Antony"/>
//       <GreetUserFunctionWithoutProps name="Test"/>
//     </div>
//   )
// }
// ReactDOM.render(<app />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
