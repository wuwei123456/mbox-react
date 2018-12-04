import React, { Component } from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/fontawesome-free-solid'
import { inject } from 'mobx-react';

library.add(faStroopwafel)

@inject("store3")
@observer
class CartRow extends Component {
    //变量可观察
    // @observable checked = false;
    @observable count = 1;
    // 输入框
    @action
    handleChange = (e) => {
        this.count = e.target.value
    }


    @computed
    get subtotal() {
        return this.count * this.props.data.price;
    }


    render() {
        const { data, store } = this.props;
        return (
            <tr>
                <td className="hiddenColumn">
                    <input type="checkbox"
                        checked={data.checked}
                        onChange={() => store.onChecked(data.id)} />
                </td>
                <td className="hiddenColumn">
                    <img src={data.image} alt="" style={{ width: '30px', height: '30px' }} />
                </td>
                <td data-column="Product">
                    {data.title}
                </td>
                <td data-column="Price">
                    {data.price}
                </td>
                <td className="count" data-column="Quality">
                    <span className='fa-stack reduce' onClick={() => { store.decrement(data.id) }}>
                        <FontAwesomeIcon icon="minus" stack='1x' />
                    </span>
                    <input type="text" className="count-input" onChange={this.handleChange.bind(this)} value={data.num} />
                    <span className='fa-stack add' onClick={() => store.increment(data.id)}>
                        <FontAwesomeIcon icon="plus" stack='1x' />
                    </span>
                </td>
                <td className="subTotal" data-column="SubTotal">
                    {
                        data.price * data.num
                    }元
                </td>
                <td data-column="Remover">
                    <span className='fa-stack'>
                        <FontAwesomeIcon icon="trash" stack='1x' onClick={()=>store.remove(data.id)}/>
                    </span>
                </td>
            </tr>

        )
    }
}

export default CartRow;