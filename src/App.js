import React, { Component, Fragment } from 'react';

import { createPortal } from "react-dom";
class Potals extends Component {
  render(){
    return (
      createPortal(<Message />, document.getElementById('touchme'))
    )
  }
}
const Message = () => "I'm Message";

class ReturnType extends Component {
  render(){
    return "hello";  
  };
}

class ErrorMaker extends Component {
  state = {
    friends : ['hong', 'kim', 'lii']
  }
  componentDidMount = () => {
    // 값을 undefined로 만들어서 map함수를 호출하면 에러가난다.
    setTimeout(() => {
      this.setState({
        friends : undefined
      })
    }, 2000);
  }

  render() {
    const {friends } = this.state;
    return friends.map(friend => ` ${friend} `);    
  }
}

class App extends Component {
  state = {
    hasError :false
  }

  componentDidCatch = () => {
    this.setState({
      hasError : true
    })
  }

  render() {
    const {hasError} = this.state;
    return (
      <Fragment>
        <span>returnType</span>
        <ReturnType />
        <Potals />
        { hasError ? 'Sorry Somting wlong': <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
