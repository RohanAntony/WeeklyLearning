import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date: (new Date()).toLocaleString(),
      count: 0,
      displaycount: 0
    }
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),
      0
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){
    this.setState((state) => {
      let currentDate = (new Date()).toLocaleString();
      let randomInt = Math.random()
      let displaycount = state.displaycount,
          count = state.count + 1
      if(currentDate != state.date){
          displaycount = state.count
          count = 0
      }
      return {
        date: (new Date()).toLocaleString(),
        count: count,
        displaycount: displaycount
      }
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.date}</h1>
        <h1>Number of update iteration by React in last loop: {this.state.displaycount}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('root'));
