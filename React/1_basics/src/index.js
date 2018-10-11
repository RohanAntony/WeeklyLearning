import React from 'react';
import ReactDOM from 'react-dom'; //Load the react dom which is used to call the integration
import App from './App'; //load your app module which contains the custom element App which is added to root

//ReactDOM .render acts as a integration tool which setups react application in the given element
ReactDOM.render(<App />, document.getElementById('root'));
