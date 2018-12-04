import React, { Component } from 'react'
// import { Table } from 'antd'
// import 'antd/dist/antd.css';
import CartRow from './cartRow'
import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

// 全选
@inject("store3")
@observer
class ShopCart extends Component {
    render() {
        const { store } = this.props;
        return (
            <form className="shopCart contain">
            <fieldset>
                <legend>购物车</legend>
                <table>
                    <thead>
                        <tr>
                            <th className="hiddenColumn">
                                <label>
                                    全选<input type="checkbox" className="check-all check" onChange={store.oncheckedAll.bind(this)} checked={store.checkedAll} />
                                </label>
                            </th>
                            <th colSpan="2">商品</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>小计</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.list.length > 0 &&
                            store.list.map((item, index) => {
                                return (
                                    <CartRow key={index} data={item} store={store}
                                    />
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="2">
                                选择了
                                <span className="orangeText">
                                    {store.totalprice.selectitem}
                                </span>
                                件商品
                            </th>
                            <th>总计:
                                <span className="orangeText">
                                    {store.totalprice.Total}
                                </span>元
                        </th>
                        </tr>
                    </tfoot>
                </table>
                </fieldset>
            </form >

        )
    }
}

export default ShopCart;