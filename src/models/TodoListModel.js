import { observable, computed, action, autorun } from "mobx";

import TodoModel from "./TodoModel";

// model，定义数据和操作
export default class TodoListModel {
  @observable todos = [];
  // 水果单价以及存余量
  @observable fruits = [{ id: 0, name: 'apple', price: '8', stock: 100 }, { id: 1, name: 'orange', price: '3', stock: 100 }]
  @observable price: number = 1;
  @observable quantity: number = 1;

  // @observable productprice
  // 全选
  // @observable selected:boolean = false;
  @observable count: number = 1;
  @observable productCart = [
    {
      title: 'Hello my demo2',
      image: 'https://pbs.twimg.com/media/CwGgapPVUAA4u3Q.jpg',
      price: 76

    },
    {
      title: 'Hello my demo2',
      image: 'http://i.imgur.com/RRUe0Mo.png',
      price: 676

    },
    {
      title: 'Pasifika Early Childhood CD (with printed lyrics)',
      image: 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg',
      price: 234

    },
    {
      title: 'Hello my demo2',
      image: 'http://mblogthumb1.phinf.naver.net/20121009_136/dogtalk__1349752474508pRuyE_JPEG/Puppy-Love-29817_large.jpg?type=w2',
      price: 788

    },
    {
      title: 'Hello my demo2',
      image: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg',
      price: 96

    },
    {
      title: 'Hello my demo2',
      image: 'https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg',
      price: 67
    },
  ];

  // 计算得到的值
  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  // 计算金额：数量和单价
  @computed
  get total() {
    return this.price * this.quantity;
  }


  @action
  addTodo(title) {
    this.todos.push(new TodoModel(title));
  }
}
