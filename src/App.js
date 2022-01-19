import React from 'react';
import Todo from './Todo';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [
        {id : "0", title: "Hello world 1", done: true},
        {id : "1", title: "Hello world 2", done: false}
      ],
    };
  }

  render() {
    const text = 'JSX 문법을 사용하면 데이터 바인딩이 쉬워요'
    function test() {
      return "함수도 동적으로 추가 할 수 있어요";
    }

    let todoItems = this.state.items.map((item, idx) => (
      <Todo item={item} key={item.id} />
    ));

    return(
      <div className="App">
        <div className="black-nav">
          <div>Todo list</div>
        </div>
        
        <h4>{ text }</h4>
        <h4>{ test() }</h4>
        <h4>{ todoItems }</h4>
        
      </div>
    );
  };
}

export default App;
