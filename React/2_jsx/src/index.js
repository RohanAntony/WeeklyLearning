import React from 'react';
import ReactDOM from 'react-dom';

const Element = (
  <h2> Hello, World! </h2>
);

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Rohan',
  lastName: 'Antony'
};

const App = (
  <div>
    { Element }
    <h1>
      Hello, {formatName(user)}!
    </h1>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
