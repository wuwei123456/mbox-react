import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";

import Todo from "./Todo";
import Total from "./total";

@inject("store1")
@inject("store3")
@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        <p>counter example</p>
        <p>{this.props.store1.num}</p>
        <button onClick={this.props.store1.add}>+1</button>
        <hr/>
        <p>todolist example</p>
        <form onSubmit={this.submit}>
          new todo :
          <input type="text" value={this.newTodoTitle} onChange={this.change}/>
          <button type="submit">add</button>
        </form>
        <ul>
          {
            this.props.store3.todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
          }
        </ul>
        task left:{this.props.store3.unfinishedTodoCount}
        <hr/>
        <p>cart example</p>
        {/* 这里使用到store3中的数据,因此需要在这里传递store3 */}
        <Total store={this.props.store3}/>
      </div>
    );
  }

  @action
  change = e => {
    this.newTodoTitle = e.target.value;
  }

  @action
  submit = e => {
    this.props.store3.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
    e.preventDefault();
  }
}

export default TodoList;
