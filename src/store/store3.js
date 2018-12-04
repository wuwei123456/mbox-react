import { observable, computed, action, autorun } from "mobx";
import TodoModel from "../models/TodoModel"
import { productCart } from '../mock/data'

const datalist = productCart.map((z) => {
  return {
    checked: true,
    ...z
  }
})

// model，定义数据和操作
export default class Store3 {
  @observable todos = [];
  @observable price = 12;
  @observable quantity = 1;
  // 购物车
  // 全选
  @observable list = datalist;
  @observable checkedAll = true;
  // 当前行方框的选择
  @action onChecked = (id) => {
    this.list.forEach(item => {
      if (item.id === id) {
        item.checked ? this.checkedAll = false : null;
        item.checked = !item.checked;
      }
    });
    !this.list.some((item) => item.checked === false) ? this.checkedAll = true : null;
  };
  // 全选
  @action oncheckedAll = () => {
    this.checkedAll = !this.checkedAll;
    this.checkedAll ? this.list.forEach((item) => item.checked = true) : this.list.forEach((item) => item.checked = false);
  }



  // 计算得到的值
  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(title));
  }

  @computed
  get total() {
    return this.price * this.quantity
  }

  @action
  decrement = (id) => {
    this.list.forEach((item) => {
      if (item.id === id && item.num > 0) {
        item.num--;
      }
    })
  }
  @action
  increment = (id) => {
    this.list.forEach((item) => {
      if (item.id === id) {
        item.num++;
      }
    })
  }
  @action
  remove = (id) => {
    this.list.forEach((item, i) => {
      if (item.id === id) {
        this.list.splice(i, 1)
      }
    })
  }
  // 最终结算金额
  @computed
  get totalprice() {
    let Total = 0;
    let selectitem = 0;
    this.list.forEach((item, i) => {
      if (item.checked) {
        Total += this.list[i].num * this.list[i].price;
        selectitem++;
      }
    });
    return { Total: Total, selectitem: selectitem }
  }

}
