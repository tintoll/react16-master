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
class App extends Component {
  render() {
    return (
      <Fragment>
        <span>returnType</span>
        <ReturnType />
        <Potals />
      </Fragment>
    );
  }
}

export default App;
