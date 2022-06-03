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
        id: Math.random(),
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
      todos: this.state.todos.map((curr) => {
        if (curr.id === id) curr.isDone = !curr.isDone;
        return curr;
      }),
    });
  };

  updateFilterMode = (filterMode) => {
    this.setState({ filterMode: filterMode });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((task) => {
        if (task.isDone) {
          return;
        } else {
          return task;
        }
      }),
    });
  };

  render() {
    const { todos, filterMode } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <InputField funcAddNewTodo={this.addTodo} />
          <Todos
            todo={todos}
            funcDel={this.delItem}
            funcChecked={this.checked}
            filter={filterMode}
          />
          <Footer
            lengthCount={todos.length}
            funcUpdateFilterMode={this.updateFilterMode}
            funcClearCompleted={this.clearCompleted}
            filterMode={filterMode}
            todos={todos}
          />
        </div>
      </div>
    );
  }
}
