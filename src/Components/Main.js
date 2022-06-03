import React from "react";
import InputField from "./InputField.js";
import Todos from "./Todos.js";
import Footer from "./Footer.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filterMode: "All",
    };
  }

  addTodo = (todo) => {
    this.setState((prevState) => {
      const newTodo = {
        todo,
        isDone: false,
        id: Math.random()
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
        } else {
          tmp = curr;
        }
        return tmp;
      }),
    });
  };

  updateFilterMode = (filterMode) => {
    this.setState({ filterMode: filterMode });
  };

  clearCompleted = () => {
    this.setState(
      {
        todos: this.state.todos.filter((task) => {
          let tmp;
          if(task.isDone){
            return;
          } else {
            return task
          }
        })
      })
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
            filter={this.state.filterMode}
          />
          <Footer
            lengthCount={this.state.todos.length}
            funcUpdateFilterMode={this.updateFilterMode}
            funcClearCompleted={this.clearCompleted}
            filterMode={this.state.filterMode}
            todos = {this.state.todos}
          />
        </div>
      </div>
    );
  }
}
