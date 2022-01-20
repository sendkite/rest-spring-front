import React from 'react';
import Todo from './Todo';
import AddTodo from "./AddTodo";
import { Paper, List, Container } from "@material-ui/core";
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

  // 저장 이벤트
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; // key를 위한 id추가
    item.done = false; // done 초기화
    thisItems.push(item); // 배열에 아이템 추가
    this.setState({ items: thisItems }); // 업데이트는 반드시 this.setState로 해야됨.
    console.log("items : ", this.state.items);
  };


  render() {

    let todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          { this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    )

    return (
      
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={ this.add } />
          <div className="TodoList">{ todoItems }</div>
        </Container>
      </div>
    );
  };
}

export default App;
