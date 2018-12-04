
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
class Store1 {
    @observable num = 0;
    @action 
    add = () => {
      this.num++;  
    }
}
export default Store1;