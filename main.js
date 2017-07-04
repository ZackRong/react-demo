/**
 * Created by rongzhx on 2017/7/2.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom'

import Menu from './src/menu'

class Root extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="container">
                <span>{Menu.id}</span>
            </div>
        )
    }
}
ReactDOM.render(
    <Root />,
    document.getElementById('app')
);