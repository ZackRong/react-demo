/**
 * Created by rongzhx on 2017/7/2.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom'

class Root extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="container">
                <span>Hello world!</span>
            </div>
        )
    }
}
ReactDOM.render(
    <Root />,
    document.getElementById('app')
);