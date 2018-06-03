import React, { Component } from 'react';


const MAX_PIZZAS = 20;
const eatPizza = (state,props) => {
  const { pizzas } = state;
  if(pizzas < MAX_PIZZAS) {
    return {
      pizzas : pizzas + 1
    }
  } else {
    return null; // state를 널을 해주면 update를 하지않는다.
  }
}
class Contorllered extends Component {
  state = {
    pizzas : 0
  }

  render() {
    const { pizzas }  = this.state;
    return (
      <button onClick={this._handleClick}>{ `i eaten ${pizzas} pizzs`}</button>
    )
  }
  _handleClick = () => {
    this.setState(eatPizza); // state를 관리하는 부분을 함수로 넘겨서 사용할수있다.
  }
}

class App extends Component {
  render() {
    return (
      <Contorllered />
    );
  }
}

export default App;
