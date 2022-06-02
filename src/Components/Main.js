import React from "react";
import InputField from "./InputField.js";
import Todos from "./Todos.js";
import Footer from "./Footer.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      etew: 0
    };
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      ...prevState,
      todos: this.state.todos.push({
        todo: todo,
        isDone: false,
        id: this.state.todos.length()
    })
    }))
  }



  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <InputField />
          <Todos />
          <Footer />
        </div>
      </div>
    );
  }
}
