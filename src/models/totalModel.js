import { observable, computed, autorun } from 'mobx';


class OrderLine {
    @observable price:number=0;
    @observable amount:number=1;

    constructor(price){
        this.price = price;
    }

    @computed
    get total(){
        return this.price*this.amount;
    }

    @autorun
    print(){
        console.log(this.price);
    }
}

export default OrderLine;