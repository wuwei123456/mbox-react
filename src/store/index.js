// 多个store
import Store1 from './store1';
import Store2 from './store2'
import Store3 from './store3';

class Stores{
    constructor(){
        this.store1 = new Store1();
        this.store2 = new Store2();
        this.store3 = new Store3();
    }
}

export default new Stores();



