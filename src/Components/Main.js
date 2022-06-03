import React from "react";
import InputField from "./InputField.js";
import Todos from "./Todos.js";
import Footer from "./Footer.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    this.setState((prevState) => {
      const newTodo = {
        todo,
        isDone: false,
        id: this.state.todos.length,
      };

      return {
        ...prevState,
        todos: [...prevState.todos, newTodo],
      };
    });
  };

  delItem = (id) => {
    this.setState({
      todos: this.state.todos.filter((curr) => curr.id !== id),
    });
  };

  checked = (id) => {
    this.setState({
      todos: this.state.todos.filter((curr) => {
        let tmp;
        if (curr.id === id) {
          tmp = curr;
          tmp.isDone = !tmp.isDone;  
        } else{
          tmp = curr;
        }
        return tmp;
      }),
    });
    console.log(this.state.todos);
  };

 

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <InputField func={this.addTodo} />
          <Todos
            todo={this.state.todos}
            funcDel={this.delItem}
            funcChecked={this.checked}
          />
          <Footer lengthCount={this.state.todos.length}/>
        </div>
      </div>
    );
  }
}
