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
      visibleButtonClearAll: false
    };
  }

  changeSelectAllFlag = (newValue) => {
    this.setState({selectAll: newValue});
    this.setState({
      todos:this.state.todos.map((todo)=>{
        todo.isDone=newValue;
        return todo;
      })
    })
    this.updateVisibleButtonClearAll();
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
    this.setState({isEmpty:false});
    this.updateVisibleButtonClearAll();
  };

  delItem = (id) => {
    this.setState({
      todos: this.state.todos.filter((curr) => curr.id !== id),
    });
    console.log(this.state.todos.length);
    if(this.state.todos.length===1){
      this.setState({isEmpty:true});
      this.setState({selectAll:false});
    }
    //если выполнять сразу, то текущие states не успевают обновиться и 
    //  updater работает с устаревшими параметрами
    setTimeout(()=>this.updateVisibleButtonClearAll(),300);
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
    this.setState({selectAll:false});
    this.setState({isEmpty: true});
    this.updateVisibleButtonClearAll();
    
    //если выполнять сразу, то текущие states не успевают обновиться и 
    //  updater работает с устаревшими параметрами
    setTimeout(()=>this.updateVisibleButtonClearAll(),300);
  };

  changeIsEmpty = (newState) => {
    this.setState({isEmpty:newState})
  }

  updateVisibleButtonClearAll = () => {
    if(this.state.todos.filter((todo)=>todo.isDone).length===0){
      this.setState({visibleButtonClearAll:false});
    }
    else{
      this.setState({visibleButtonClearAll:true});
    }
  }

  render() {
    const { todos, filterMode, visibleButtonClearAll } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <InputField 
            funcAddNewTodo={this.addTodo} 
            changeSelectAllFlag={this.changeSelectAllFlag} 
            isEmpty={this.state.isEmpty} 
            changeIsEmpty={this.changeIsEmpty} 
            selectAllFlag={this.state.selectAll} 
          />
          <Todos
            todo={todos}
            funcDel={this.delItem}
            funcChecked={this.checked}
            filter={filterMode}
            updateVisibleButtonClearAll={this.updateVisibleButtonClearAll}
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
