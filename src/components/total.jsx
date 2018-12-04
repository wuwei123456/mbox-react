import { observable, autorun, action } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ShopCart from './shopcart'
import { inject } from 'mobx-react';

// 引入store
@inject("store3")
@observer
class Total extends Component {
    //数量
    @observable quantity = 1;
    render() {
        return (
            <div>
                单价：{this.props.store3.price},
                购买数量：<input type="text" onChange={this.change.bind(this)} value={this.quantity} />
                <button type="button" onClick={this.add.bind(this)}>+</button>
                <button type="button" onClick={this.des.bind(this)}>-</button>
                <button type="button" onClick={this.comp.bind(this)}>计算金额</button>&nbsp;&nbsp;
                金额：{this.props.store3.total}
                <hr/>
                <div>
                    <ShopCart store={this.props.store}/>
                </div>
            </div>
        )
    }

    @action
    change = (e) => {
        this.quantity = e.target.value;
    }
    @action
    add = () => {
        this.quantity++;
    }
    @action
    des = () => {
        this.quantity--;
    }
    @action
    comp = () => {
        this.props.store3.quantity = this.quantity;
    }

}

export default Total;