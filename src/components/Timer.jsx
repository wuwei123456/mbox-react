import { observable,autorun } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { action } from 'mobx';

var appstate = observable({
    count: 0
});
// observable数据源：
// const counter = observable.box(0);
// const foo = observable.box(0);
// const bar = observable.box(0);
// autorun(() => {
//     if(counter.get()===0){
//         console.log('foo',foo.get());//0
//     }else{
//         console.log('bar',bar.get());//10 100
//     }
// })

// bar.set(10);
// counter.set(1);
// foo.set(100);
// bar.set(100);

appstate.incre = function () {
    this.count++;
}
appstate.descre = function () {
    this.count--;
}


@observer
class TimeView extends Component {

    add() {
        appstate.incre()
    }

    des() {
        appstate.descre()
    }

    render() {
        return (
            <div>
                Counter:{appstate.count}<br />
                <button onClick={this.add.bind(this)}>+</button>
                <button onClick={this.des.bind(this)}>-</button>
            </div>
        )
    }
}


export default TimeView;