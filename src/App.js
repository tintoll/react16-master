import React, { Component, Fragment } from 'react';


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
      </Fragment>
    );
  }
}

export default App;
