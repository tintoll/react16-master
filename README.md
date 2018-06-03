# React 16버전에 추가된 기능들 알아보기 



### ReturnType

v16이전에는 아래와 같이 2개를 리턴할수가 없었습니다. 그래서 div 태그를 최상위에 만들어서 넣어주거나 배열로 만들어서 넘겼습니다. 

```javascript
class App extends Component {
  render() {
    return (
      <header></header>
      <footer></footer>
    );
  }
}
// 아래와 같이 사용해야 했습니다. 
class App extends Component {
  render() {
    return (
      <div>  
      	<header></header>
      	<footer></footer>
      </div>
    );
  }
}
```

v16에서는 **Fragment** 이용하여 묶어주면 됩니다.

```javascript
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header></header>
        <footer></footer>
      </Fragment>
    );
  }
}

export default App;

// 또는 축약형으로 <> </>해도 된다. create-react-app에서는 현재 에러가난다.
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <header></header>
        <footer></footer>
      </>
    );
  }
}

export default App;

```



리턴을 string을 할수 있게 되었습니다.

```javascript
class ReturnType extends Component {
  render(){
    return "hello";  
  };
}
```



### Potals

리액트는 처음 지정한 엘리먼트 안에서만 조작이 가능하다. 하지만 potals를 사용하면 그외의 엘리멘트를 조작할수 있다. 

```javascript
// html
// root가 React 가 렌더링하는 엘리먼트이다. potal을 이용해서 header > span을 조작할수있다.
	<header>
      <h1>Header Title</h1>
      <span id="touchme"></span>
    </header>
    <div id="root"></div>

// App.js
import { createPortal } from "react-dom";
class Potals extends Component {
  render(){
    return (
      createPortal(<Message />, document.getElementById('touchme'))
    )
  }
}
const Message = () => "I'm Message";

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
```

위와같이 createPotal을 이용해서 변경해줄 엘리먼트를 선택하여 넣어주면된다. 



### Error Boundries - componentDidCatch

부모 컴포넌트에서 자식컴포넌트가 에러가 발생하면 앱이 죽어버린다. 

이럴경우 componentDidCatch를 이용해서 앱이 죽지 않고 에러처리를 할수 있는 방법을 알아보자 

```javascript
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
  // componentDidCatch 안에서 에러를 찾고 	
  componentDidCatch = (error, info) => {
    this.setState({
      hasError : true
    })
  }
  // 에러가 발생했을때 예외처리르 해주면 됩니다.	
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
```

