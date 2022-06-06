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
      selectAll: false,
      isEmpty: true,
      visibleButtonClearAll: false,
      visibleCheckBoxSelectAll: false,
    };
  }

  changeSelectAllFlag = (newValue) => {
    this.setState({ selectAll: newValue });
    this.setState({
      todos: this.state.todos.map((todo) => {
        todo.isDone = newValue;
        return todo;
      }),
    });
    this.updateVisibleButtonClearAll();
    this.updateVisibleCheckBoxSelectAll();
  };

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
    this.setState({ isEmpty: false });
    this.updateVisibleButtonClearAll();
    setTimeout(() => this.updateVisibleCheckBoxSelectAll(), 300);
  };

  delItem = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((curr) => curr.id !== id),
    });
    if (todos.length === 1) {
      this.setState({ isEmpty: true });
      this.setState({ selectAll: false });
    }
    //если выполнять сразу, то текущие states не успевают обновиться и
    //  updater работает с устаревшими параметрами
    setTimeout(() => this.updateVisibleButtonClearAll(), 300);
    setTimeout(() => this.updateVisibleCheckBoxSelectAll(), 300);
  };

  checked = (id) => {
    this.setState({
      todos: this.state.todos.map((curr) => {
        if (curr.id === id) curr.isDone = !curr.isDone;
        return curr;
      }),
    });
    this.updateVisibleButtonClearAll();
  };

  updateFilterMode = (filterMode) => {
    this.setState({ filterMode: filterMode });
  };

  updateVisibleCheckBoxSelectAll = () => {
    if (this.state.todos.length > 0) {
      this.setState({ visibleCheckBoxSelectAll: true });
    } else {
      this.setState({ visibleCheckBoxSelectAll: false });
    }
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
    this.setState({ selectAll: false });
    this.updateVisibleButtonClearAll();

    //если выполнять сразу, то текущие states не успевают обновиться и
    //  updater работает с устаревшими параметрами
    setTimeout(() => this.updateVisibleButtonClearAll(), 300);
    setTimeout(() => this.updateVisibleCheckBoxSelectAll(), 500);
  };

  changeIsEmpty = (newState) => {
    this.setState({ isEmpty: newState });
  };

  updateVisibleButtonClearAll = () => {
    if (this.state.todos.filter((todo) => todo.isDone).length === 0) {
      this.setState({ visibleButtonClearAll: false });
    } else {
      this.setState({ visibleButtonClearAll: true });
    }
  };

  changeCaptionTodo = (id, newCaption) => {
    this.setState({
      todos: this.state.todos.map((current) => {
        if (current.id === id) {
          current.todo = newCaption;
        }
        return current;
      }),
    });
  };

  render() {
    const {
      todos,
      filterMode,
      visibleButtonClearAll,
      selectAll,
      isEmpty,
      visibleCheckBoxSelectAll,
    } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <InputField
            funcAddNewTodo={this.addTodo}
            changeSelectAllFlag={this.changeSelectAllFlag}
            isEmpty={isEmpty}
            changeIsEmpty={this.changeIsEmpty}
            selectAllFlag={selectAll}
            visibleCheckBoxSelectAll={visibleCheckBoxSelectAll}
            updateVisibleCheckBoxSelectAll={this.updateVisibleCheckBoxSelectAll}
          />
          <Todos
            todo={todos}
            funcDel={this.delItem}
            funcChecked={this.checked}
            filter={filterMode}
            updateVisibleButtonClearAll={this.updateVisibleButtonClearAll}
            updateVisibleCheckBoxSelectAll={this.updateVisibleCheckBoxSelectAll}
            changeCaptionTodo={this.changeCaptionTodo}
          />
          <Footer
            lengthCount={todos.length}
            funcUpdateFilterMode={this.updateFilterMode}
            funcClearCompleted={this.clearCompleted}
            filterMode={filterMode}
            todos={todos}
            visibleButtonClear={visibleButtonClearAll}
          />
        </div>
      </div>
    );
  }
}
