
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
class Store2 {
    @observable num2 = 0;
    @action 
    adds = () => {
      this.num2++;  
    }
}
export default Store2;