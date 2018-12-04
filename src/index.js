import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import TodoList from "./components/TodoList";
import stores from './store/index'
import { Provider } from 'mobx-react'
const { ...store } = stores;
render(
  <Provider {...store}>
  <TodoList/>
  </Provider>,
  document.getElementById("root")
);
// playing around in the console
window.store = store;
console.log(store)


